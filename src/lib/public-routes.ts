import { isPublicReady } from '@/config/company';
import { visibleServices } from '@/content/services';
import { communes, departments, isLocalPublished } from './geo';
import { guides } from '@/content/guides';
export function publicRoutes() {
  if (!isPublicReady()) return [];
  return [
    '/',
    '/prestations',
    '/zones-intervention',
    '/a-propos',
    '/conseils',
    '/contact',
    '/mentions-legales',
    '/confidentialite',
    ...visibleServices().map((s) => `/prestations/${s.slug}`),
    ...departments.map((d) => `/ramonage/${d.slug}`),
    ...guides.map((g) => `/conseils/${g.slug}`),
    ...communes.filter(isLocalPublished).map((c) => `/ramonage/${c.slug}`),
  ];
}
