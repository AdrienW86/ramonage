import type { QuoteInput } from './quote-schema';
export const escapeHtml = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!,
  );
export function quoteEmail(q: QuoteInput) {
  const rows = [
    ['Nom', q.name],
    ['Téléphone', q.phone],
    ['Email', q.email],
    ['Commune', `${q.commune} (${q.postalCode})`],
    ['Installation', q.installation],
    ['Prestation', q.service],
    ['Message', q.message || '—'],
    ...(q.sourceArticle ? [['Guide à l’origine de la demande', q.sourceArticle]] : []),
  ];
  return {
    subject: 'Nouvelle demande de devis — site web',
    text:
      'DEMANDE DE DEVIS\n\n' +
      rows.map(([k, v]) => `${k} : ${v}`).join('\n') +
      '\n\nAccord de traitement de la demande confirmé.',
    html: `<div style="font-family:Arial,sans-serif;color:#171a1c;max-width:620px;margin:auto"><h1 style="font-size:26px;border-bottom:3px solid #b77b48;padding-bottom:20px">Nouvelle demande de devis</h1><table style="width:100%;border-collapse:collapse">${rows.map(([k, v]) => `<tr><th style="text-align:left;vertical-align:top;padding:12px;border-bottom:1px solid #ddd">${k}</th><td style="padding:12px;border-bottom:1px solid #ddd;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`).join('')}</table><p style="font-size:12px">Accord de traitement de la demande confirmé. Ne pas réutiliser les coordonnées à des fins de prospection sans base légale appropriée.</p></div>`,
  };
}
