import { Resend } from 'resend';
import { company } from '@/config/company';
import { contactSchema } from '@/lib/contact-schema';
import { rateLimit } from '@/lib/rate-limit';

// Limitation locale de secours : n'est pas partagée entre les instances Vercel.
const recent = new Map<string, { count: number; expires: number }>();
function localLimit(key: string) {
  const now = Date.now();
  if (recent.size > 2000) { for (const [k, v] of recent) if (v.expires < now) recent.delete(k); }
  const old = recent.get(key);
  if (!old || old.expires < now) { recent.set(key, { count: 1, expires: now + 15 * 60_000 }); return true; }
  old.count++;
  return old.count <= 5;
}

export const runtime = 'nodejs';
const fail = (message: string, status: number) => Response.json({ ok: false, message }, { status, headers: { 'Cache-Control': 'no-store' } });
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch] || ch);
const subjects: Record<string, string> = { question: 'Question générale', ramonage: 'Ramonage', debistrage: 'Débistrage', entretien: 'Entretien d’un appareil', autre: 'Autre demande' };

export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  const official = new URL(company.url);
  const allowedOrigins = new Set([
    official.origin,
    official.protocol + '//www.' + official.hostname,
  ]);
  if (!origin || !allowedOrigins.has(origin)) return fail('Origine non autorisée.', 403);
  if (!request.headers.get('content-type')?.includes('application/json')) return fail('Format non pris en charge.', 415);
  if (Number(request.headers.get('content-length') || 0) > 12000) return fail('Message trop volumineux.', 413);
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM || !company.quoteRecipient) return fail('Le formulaire n’est pas encore disponible.', 503);
  try {
    const reader = request.body?.getReader();
    if (!reader) return fail('Message vide.', 400);
    const parts: Uint8Array[] = [];
    let bytes = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > 12000) { await reader.cancel(); return fail('Message trop volumineux.', 413); }
      parts.push(value);
    }
    const parsed = contactSchema.safeParse(JSON.parse(Buffer.concat(parts).toString('utf8')));
    if (!parsed.success) return fail('Vérifiez les champs du formulaire.', 400);
    const data = parsed.data;
    if (data.website) return fail('Demande refusée.', 400);
    const elapsed = Date.now() - data.startedAt;
    if (elapsed < 2500 || elapsed > 86400000) return fail('Actualisez le formulaire et réessayez.', 400);
    const ip = ((process.env.VERCEL ? request.headers.get('x-vercel-forwarded-for') : request.headers.get('x-forwarded-for')) || 'unknown').split(',')[0].trim();
    const allowed = process.env.RATE_LIMIT_REST_URL && process.env.RATE_LIMIT_REST_TOKEN ? await rateLimit(ip) : localLimit(ip);
    if (!allowed) return fail('Trop de demandes. Réessayez dans 15 minutes.', 429);
    const text = [
      'Nouvelle demande de contact — ' + company.name,
      'Sujet : ' + subjects[data.subject],
      'Nom : ' + data.name,
      'Email : ' + data.email,
      'Téléphone : ' + (data.phone || 'Non renseigné'),
      'Commune : ' + (data.commune || 'Non renseignée'),
      '',
      data.message,
    ].join('\n');
    const result = await new Resend(process.env.RESEND_API_KEY).emails.send({
      from: process.env.RESEND_FROM,
      to: company.quoteRecipient,
      replyTo: data.email,
      subject: 'Contact site — ' + subjects[data.subject],
      text,
      html: '<div style="font-family:Arial,sans-serif;max-width:620px;margin:auto;color:#171a1c"><h1 style="font-family:Georgia,serif">Nouvelle demande de contact</h1><p><strong>Sujet :</strong> ' + escapeHtml(subjects[data.subject]) + '</p><p><strong>Nom :</strong> ' + escapeHtml(data.name) + '</p><p><strong>Email :</strong> ' + escapeHtml(data.email) + '</p><p><strong>Téléphone :</strong> ' + escapeHtml(data.phone || 'Non renseigné') + '</p><p><strong>Commune :</strong> ' + escapeHtml(data.commune || 'Non renseignée') + '</p><hr/><p style="white-space:pre-wrap">' + escapeHtml(data.message) + '</p></div>',
    }, { idempotencyKey: 'contact/' + data.requestId });
    if (result.error || !result.data?.id) return fail('Envoi impossible. Contactez-nous par téléphone.', 502);
    // L'accusé de réception est distinct de l'envoi à l'entreprise :
    // son échec ne déclenche pas une nouvelle demande et n'annule pas le premier email.
    let confirmationSent = false;
    try {
      const confirmation = await new Resend(process.env.RESEND_API_KEY).emails.send({
        from: process.env.RESEND_FROM,
        to: data.email,
        replyTo: company.quoteRecipient,
        subject: 'Nous avons reçu votre message — ' + company.name,
        text: [
          'Bonjour ' + data.name + ',',
          '',
          'Nous avons bien reçu votre message adressé à ' + company.name + '.',
          'Objet : ' + subjects[data.subject],
          '',
          'Voici une copie de votre message :',
          data.message,
          '',
          'Votre demande a été transmise. Ce message automatique ne constitue ni un devis ni une confirmation de rendez-vous.',
          '',
          'Cordialement,',
          'L’équipe ' + company.name,
        ].join('\\n'),
        html: '<div style="background:#f5f1ea;padding:30px 15px;font-family:Arial,sans-serif;color:#171a1c"><div style="max-width:600px;margin:auto;background:#ffffff;padding:36px;border-top:4px solid #b77b48"><p style="font-size:11px;letter-spacing:2px;color:#82512c;text-transform:uppercase">Accusé de réception</p><h1 style="font-family:Georgia,serif;font-weight:normal;font-size:32px">Votre message est bien reçu.</h1><p>Bonjour ' + escapeHtml(data.name) + ',</p><p>Nous avons bien reçu votre demande adressée à ' + escapeHtml(company.name) + '.</p><p><strong>Objet :</strong> ' + escapeHtml(subjects[data.subject]) + '</p><div style="padding:20px;background:#f5f1ea;border-left:3px solid #b77b48"><p style="white-space:pre-wrap">' + escapeHtml(data.message) + '</p></div><p style="font-size:12px;color:#686860;margin-top:28px">Cet email automatique confirme la réception de votre message. Il ne constitue ni un devis, ni une confirmation de rendez-vous.</p><p>Cordialement,<br />L’équipe ' + escapeHtml(company.name) + '</p></div></div>',
      }, { idempotencyKey: 'contact-confirmation/' + data.requestId });
      confirmationSent = !!confirmation.data?.id && !confirmation.error;
      if (!confirmationSent) console.error('Contact confirmation rejected by email provider');
    } catch {
      console.error('Contact confirmation email could not be submitted');
    }
    return Response.json({
      ok: true,
      message: confirmationSent
        ? 'Votre demande a été transmise. Un email de confirmation vous a été adressé.'
        : 'Votre demande a été transmise. L’email de confirmation n’a pas pu être envoyé.',
    }, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    if (error instanceof SyntaxError) return fail('Format invalide.', 400);
    return fail('Service momentanément indisponible.', 503);
  }
}
