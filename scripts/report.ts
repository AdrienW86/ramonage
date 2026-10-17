import nextEnv from '@next/env';
const { loadEnvConfig } = nextEnv;
loadEnvConfig(process.cwd());
const { communes, isLocalPublished } = await import('../src/lib/geo');
const { configurationIssues } = await import('../src/config/company');
const { services } = await import('../src/content/services');
const { guides } = await import('../src/content/guides');
const { isGuideValidated, isGuidePublished } = await import('../src/lib/editorial');
const { faqEntries } = await import('../src/content/faq');
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
      guides: {
        total: guides.length,
        documentaryVerified: guides.filter(isGuideValidated).length,
        published: guides.filter(isGuidePublished).length,
        pending: guides.filter((g) => !isGuideValidated(g)).map((g) => g.slug),
      },
      faq: faqEntries.length,
      publicationIssues: configurationIssues(),
    },
    null,
    2,
  ),
);
