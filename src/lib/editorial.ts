import { isPreview, isPublicReady, company } from '@/config/company';
import { guides, categories, type Guide, type Category } from '@/content/guides';
import { sources } from '@/content/sources';
export const guideBySlug = new Map(guides.map((g) => [g.slug, g]));
export const categoryBySlug = new Map<string, (typeof categories)[number]>(
  categories.map((c) => [c.slug, c]),
);
export const isGuideValidated = (g: Guide) =>
  ['valide', 'publie'].includes(g.status) &&
  !!g.dateVerified &&
  g.sourceKeys.length > 0 &&
  [
    ...g.sourceKeys,
    ...g.sections.flatMap((s) => s.sourceKeys ?? []),
    ...g.faq.flatMap((f) => f.sourceKeys),
  ].every((k) => sources[k]?.access === 'full');
export const isGuidePublished = (g: Guide) =>
  g.status === 'publie' &&
  isGuideValidated(g) &&
  !!g.author?.verified &&
  !!g.author.name.trim() &&
  !!g.datePublished &&
  g.datePublished <= new Date().toISOString().slice(0, 10);
export function visibleGuides() {
  return guides.filter((g) => (isPreview() && isGuideValidated(g)) || isGuidePublished(g));
}
export function accessibleGuide(slug: string) {
  const g = guideBySlug.get(slug);
  return g && ((isPreview() && isGuideValidated(g)) || isGuidePublished(g)) ? g : undefined;
}
export function searchGuides(query: string, category?: Category) {
  const normalize = (s: string) =>
    s
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  const terms = normalize(query).trim().split(/\s+/).filter(Boolean);
  return visibleGuides().filter(
    (g) =>
      (!category || g.category === category) &&
      terms.every((t) =>
        normalize(`${g.title} ${g.intro} ${g.sections.map((s) => s.title).join(' ')}`).includes(t),
      ),
  );
}
export function articleSchema(g: Guide) {
  if (!isPublicReady() || !isGuidePublished(g)) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${company.url}/conseils/${g.slug}#article`,
    headline: g.title,
    description: g.description,
    inLanguage: 'fr-FR',
    datePublished: g.datePublished,
    dateModified: g.dateVerified,
    author: {
      '@type': 'Person',
      name: g.author!.name,
      ...(g.author!.profileUrl ? { url: g.author!.profileUrl } : {}),
    },
    publisher: { '@type': 'Organization', name: company.name, url: company.url },
    mainEntityOfPage: `${company.url}/conseils/${g.slug}`,
    image: `${company.url}/images/${g.image}.webp`,
    citation: g.sourceKeys.map((k) => sources[k].url),
  };
}
export function editorialIssues() {
  const issues: string[] = [];
  const slugs = new Set<string>(),
    titles = new Set<string>();
  for (const g of guides) {
    if (slugs.has(g.slug) || titles.has(g.title)) issues.push(`Doublon : ${g.slug}`);
    slugs.add(g.slug);
    titles.add(g.title);
    if (!g.sections.length || !g.faq.length || !g.intent)
      issues.push(`Guide incomplet : ${g.slug}`);
    for (const key of [
      ...g.sourceKeys,
      ...g.faq.flatMap((f) => f.sourceKeys),
      ...g.sections.flatMap((s) => s.sourceKeys ?? []),
    ])
      if (!sources[key]) issues.push(`Source inconnue ${key} : ${g.slug}`);
    for (const related of g.relatedGuides)
      if (!guideBySlug.has(related) || related === g.slug)
        issues.push(`Lien de guide invalide : ${g.slug} → ${related}`);
    if (g.status === 'publie' && !isGuidePublished(g))
      issues.push(`Publication sans validations : ${g.slug}`);
    if (g.status === 'valide' && !isGuideValidated(g))
      issues.push(`Sources incomplètes : ${g.slug}`);
    if (g.datePublished && g.datePublished > new Date().toISOString().slice(0, 10))
      issues.push(`Date future : ${g.slug}`);
  }
  return issues;
}
