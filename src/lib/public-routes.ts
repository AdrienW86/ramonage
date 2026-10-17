import { isPublicReady } from '@/config/company';
import { visibleServices } from '@/content/services';
import { communes, departments, isLocalPublished } from './geo';
import { guides, categories } from '@/content/guides';
import { isGuidePublished } from './editorial';
export function publicRoutes() {
  if (!isPublicReady()) return [];
  return [
    '/',
    '/prestations',
    '/zones-intervention',
    '/a-propos',
    '/conseils',
    '/questions-frequentes',
    '/contact',
    '/mentions-legales',
    '/confidentialite',
    ...visibleServices().map((s) => `/prestations/${s.slug}`),
    ...departments.map((d) => `/ramonage/${d.slug}`),
    ...guides.filter(isGuidePublished).map((g) => `/conseils/${g.slug}`),
    ...categories
      .filter((c) => guides.some((g) => g.category === c.slug && isGuidePublished(g)))
      .map((c) => `/conseils/categorie/${c.slug}`),
    ...communes.filter(isLocalPublished).map((c) => `/ramonage/${c.slug}`),
  ];
}
