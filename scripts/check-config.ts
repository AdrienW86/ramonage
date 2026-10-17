import nextEnv from '@next/env';
const { loadEnvConfig } = nextEnv;
loadEnvConfig(process.cwd());
const { configurationIssues, company } = await import('../src/config/company');
const { services } = await import('../src/content/services');
const issues = configurationIssues();
for (const id of company.services)
  if (!services.some((s) => s.slug === id)) issues.push(`Prestation inconnue : ${id}`);
if (company.commercial.formEnabled)
  for (const name of [
    'RESEND_API_KEY',
    'RESEND_FROM',
    'QUOTE_TO',
    'RATE_LIMIT_REST_URL',
    'RATE_LIMIT_REST_TOKEN',
  ])
    if (!process.env[name]) issues.push(`${name} manquant`);
if (issues.length) {
  console.error(
    'Publication bloquée :\n' +
      issues.map((i) => ' • ' + i).join('\n') +
      '\nUtiliser npm run build:preview pour une prévisualisation locale non indexable.',
  );
  process.exit(1);
}
console.log('Configuration de publication valide.');
