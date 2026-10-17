import { writeFile, access, mkdir } from 'node:fs/promises';
import { guides } from '../src/content/guides';
import { faqEntries } from '../src/content/faq';
import { editorialIssues, isGuideValidated, isGuidePublished } from '../src/lib/editorial';
import { services } from '../src/content/services';
const issues = editorialIssues();
for (const g of guides) {
  for (const slug of g.relatedServices)
    if (!services.some((s) => s.slug === slug))
      issues.push(`Prestation inconnue : ${g.slug} → ${slug}`);
  try {
    await access(`public/images/${g.image}.webp`);
  } catch {
    issues.push(`Image absente : ${g.image}`);
  }
}
for (const f of faqEntries)
  if (!guides.some((g) => g.slug === f.guide)) issues.push(`Guide FAQ absent : ${f.id}`);
await mkdir('artifacts', { recursive: true });
const report = {
  guides: guides.length,
  verifiedDocumentary: guides.filter(isGuideValidated).length,
  published: guides.filter(isGuidePublished).length,
  pending: guides
    .filter((g) => !isGuideValidated(g))
    .map((g) => ({ slug: g.slug, status: g.status, reason: g.verificationNote })),
  faq: faqEntries.length,
  issues,
};
await writeFile('artifacts/editorial-audit.json', JSON.stringify(report, null, 2));
if (process.argv.includes('--write-slugs'))
  await writeFile(
    'src/data/article-slugs.json',
    JSON.stringify(
      guides.map((g) => g.slug),
      null,
      2,
    ) + '\n',
  );
console.log(JSON.stringify(report, null, 2));
if (issues.length) process.exit(1);
