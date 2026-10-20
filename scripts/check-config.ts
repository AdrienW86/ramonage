import nextEnv from '@next/env';
const { loadEnvConfig } = nextEnv;
loadEnvConfig(process.cwd());
const { configurationIssues, company } = await import('../src/config/company');
const { services } = await import('../src/content/services');
const { editorialIssues } = await import('../src/lib/editorial');
// --strict : exige une configuration publiable (contrôle avant validation).
const strict = process.argv.includes('--strict');
const publication = configurationIssues();
// Anomalies bloquantes en toutes circonstances, y compris en prévisualisation.
const errors = editorialIssues();
for (const id of company.services)
  if (!services.some((s) => s.slug === id)) errors.push(`Prestation inconnue : ${id}`);
if (company.commercial.formEnabled)
  for (const name of [
    'RESEND_API_KEY',
    'RESEND_FROM',
    'QUOTE_TO',
    'RATE_LIMIT_REST_URL',
    'RATE_LIMIT_REST_TOKEN',
  ])
    if (!process.env[name]) errors.push(`${name} manquant`);
// Une publication approuvée mais incomplète est incohérente : le build échoue.
if (strict || company.publishingApproved) errors.push(...publication);
const list = (items: string[]) => items.map((i) => ' • ' + i).join('\n');
if (errors.length) {
  console.error('Configuration bloquante :\n' + list(errors));
  process.exit(1);
}
if (publication.length) {
  console.warn(
    'Mode prévisualisation : site non indexable, pages légales et formulaire masqués.\n' +
      'Informations à confirmer dans src/config/company.ts :\n' +
      list(publication),
  );
} else console.log('Configuration de publication valide.');
