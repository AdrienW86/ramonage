import nextEnv from '@next/env';
const { loadEnvConfig } = nextEnv;
loadEnvConfig(process.cwd());
const { communes, isLocalPublished } = await import('../src/lib/geo');
const { configurationIssues } = await import('../src/config/company');
const { services } = await import('../src/content/services');
console.log(
  JSON.stringify(
    {
      communes: communes.length,
      published: communes.filter(isLocalPublished).length,
      statuses: Object.fromEntries(
        ['brouillon', 'a-enrichir', 'valide', 'publie'].map((s) => [
          s,
          communes.filter((c) => c.editorialStatus === s).length,
        ]),
      ),
      services: services.length,
      publicationIssues: configurationIssues(),
    },
    null,
    2,
  ),
);
