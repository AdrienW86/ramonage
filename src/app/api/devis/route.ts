import { Resend } from 'resend';
import { company, isPublicReady } from '@/config/company';
import { quoteSchema } from '@/lib/quote-schema';
import { communes, normalize } from '@/lib/geo';
import { rateLimit } from '@/lib/rate-limit';
import { quoteEmail } from '@/lib/email';
export const runtime = 'nodejs';
function failure(message: string, status: number) {
  return Response.json(
    { ok: false, message },
    { status, headers: { 'Cache-Control': 'no-store' } },
  );
}
export async function POST(req: Request) {
  if (req.headers.get('origin') !== new URL(company.url).origin)
    return failure('Origine de la demande non autorisée.', 403);
  if (!req.headers.get('content-type')?.includes('application/json'))
    return failure('Format de demande non pris en charge.', 415);
  if (Number(req.headers.get('content-length') || 0) > 24000)
    return failure('Demande trop volumineuse.', 413);
  try {
    // La limite porte sur les octets réellement lus, même sans Content-Length.
    const reader = req.body?.getReader();
    if (!reader) return failure('Demande vide.', 400);
    const chunks: Uint8Array[] = [];
    let length = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      length += value.length;
      if (length > 24000) {
        await reader.cancel();
        return failure('Demande trop volumineuse.', 413);
      }
      chunks.push(value);
    }
    const input = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    const parsed = quoteSchema.safeParse(input);
    if (!parsed.success) return failure('Veuillez vérifier les champs du formulaire.', 400);
    const q = parsed.data;
    if (q.website) return failure('La demande n’a pas pu être validée.', 400);
    if (Date.now() - q.startedAt < 2500 || Date.now() - q.startedAt > 86400000)
      return failure('Rechargez le formulaire et réessayez.', 400);
    if (
      !communes.some(
        (c) => normalize(c.name) === normalize(q.commune) && c.postalCodes.includes(q.postalCode),
      )
    )
      return failure('Vérifiez la commune et son code postal dans les départements 11 et 66.', 400);
    if (
      !company.commercial.formEnabled ||
      !isPublicReady() ||
      !process.env.RESEND_API_KEY ||
      !process.env.RESEND_FROM ||
      !company.quoteRecipient
    )
      return failure(
        'Le formulaire sera ouvert après configuration de l’entreprise. Aucun email n’a été envoyé.',
        503,
      );
    if (!company.services.includes(q.service))
      return failure('Cette prestation n’est pas confirmée. Veuillez actualiser la page.', 400);
    // Sur Vercel, x-vercel-forwarded-for est fourni par la plateforme. Hors Vercel, l’hôte doit contrôler x-forwarded-for.
    const ip =
      (process.env.VERCEL
        ? req.headers.get('x-vercel-forwarded-for')
        : req.headers.get('x-forwarded-for')
      )
        ?.split(',')[0]
        .trim() || 'unknown';
    if (!(await rateLimit(ip))) return failure('Trop de demandes. Réessayez dans 15 minutes.', 429);
    const email = quoteEmail(q);
    const result = await new Resend(process.env.RESEND_API_KEY).emails.send(
      { from: process.env.RESEND_FROM, to: company.quoteRecipient, replyTo: q.email, ...email },
      { idempotencyKey: `devis/${q.requestId}` },
    );
    if (result.error || !result.data?.id)
      return failure(
        'L’envoi n’a pas abouti. Réessayez plus tard ou contactez-nous directement.',
        502,
      );
    return Response.json(
      {
        ok: true,
        message:
          'Votre demande a été transmise au service email. Elle ne vaut pas confirmation de rendez-vous.',
      },
      { headers: { 'Cache-Control': 'no-store' } },
    );
  } catch (error) {
    if (error instanceof SyntaxError) return failure('Demande illisible.', 400);
    return failure('Le service est momentanément indisponible. Aucun envoi n’est confirmé.', 503);
  }
}
