import { writeFile, readFile, access, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import sharp from 'sharp';
import manifest from '../src/data/guide-image-manifest.json';
import { guides } from '../src/content/guides';
import { faqEntries } from '../src/content/faq';
import { editorialIssues, isGuideValidated, isGuidePublished } from '../src/lib/editorial';
import { services } from '../src/content/services';
const issues = editorialIssues();
const hashes = new Set<string>();
const originalHashes = new Set<string>();
let totalImageBytes = 0;
if (manifest.length !== 35) issues.push('Le manifeste doit contenir 35 générations.');
for (const g of guides) {
  const image = manifest.find((m) => m.slug === g.slug);
  if (
    !image ||
    image.status !== 'generated' ||
    g.image !== image.image ||
    g.imageAlt !== image.alt
  ) {
    issues.push('Image ou métadonnées non conformes : ' + g.slug);
    continue;
  }
  try {
    const buffer = await readFile('public' + image.file);
    const hash = createHash('sha256').update(buffer).digest('hex');
    const metadata = await sharp(buffer).metadata();
    // Decode every file rather than checking only its name or header.
    await sharp(buffer).resize(32, 32).raw().toBuffer();
    if (hash !== image.sha256 || hashes.has(hash))
      issues.push('Image altérée ou dupliquée : ' + g.slug);
    if (originalHashes.has(image.originalSha256)) issues.push('Original recyclé : ' + g.slug);
    hashes.add(hash);
    originalHashes.add(image.originalSha256);
    totalImageBytes += buffer.length;
    if (
      metadata.width !== image.width ||
      metadata.height !== image.height ||
      metadata.format !== 'webp' ||
      buffer.length > 250000
    )
      issues.push('Optimisation ou dimensions invalides : ' + g.slug);
  } catch {
    issues.push('Image illisible : ' + g.slug);
  }
}
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
  images: {
    generated: manifest.length,
    uniqueOptimized: hashes.size,
    uniqueOriginals: originalHashes.size,
    totalBytes: totalImageBytes,
  },
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
