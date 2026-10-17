import data from '@/data/communes.json';
import { localEditorial } from '@/content/local';
export type EditorialStatus = 'brouillon' | 'a-enrichir' | 'valide' | 'publie';
export type Commune = {
  name: string;
  slug: string;
  insee: string;
  postalCodes: string[];
  department: string;
  coordinates: number[] | null;
  priority: number;
  editorialStatus: string;
  indexable: boolean;
  coverageConfirmed: boolean;
};
export const communes: Commune[] = data;
export const communeBySlug = new Map(communes.map((c) => [c.slug, c]));
export function isLocalPublished(c: Commune) {
  return (
    c.editorialStatus === 'publie' &&
    c.coverageConfirmed &&
    c.indexable &&
    !!localEditorial[c.insee]?.approved
  );
}
export function normalize(s: string) {
  return s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/œ/g, 'oe')
    .replace(/[^a-z0-9]/g, '');
}
export function findCommunes(query: string, department?: string) {
  const q = normalize(query);
  return communes
    .filter(
      (c) =>
        (!department || c.department === department) &&
        (!q || normalize(c.name).includes(q) || c.postalCodes.some((p) => p.startsWith(q))),
    )
    .sort((a, b) => a.priority - b.priority || a.name.localeCompare(b.name, 'fr'));
}
export function nearestCommunes(c: Commune, count = 6) {
  if (!c.coordinates) return [];
  const [lon, lat] = c.coordinates;
  return communes
    .filter((x) => x.insee !== c.insee && x.coordinates)
    .map((x) => ({
      commune: x,
      distance:
        (x.coordinates![0] - lon) ** 2 * Math.cos((lat * Math.PI) / 180) ** 2 +
        (x.coordinates![1] - lat) ** 2,
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, count)
    .map((x) => x.commune);
}
export const departments = [
  { slug: 'aude', name: 'Aude', code: '11', pole: 'Narbonne' },
  { slug: 'pyrenees-orientales', name: 'Pyrénées-Orientales', code: '66', pole: 'Perpignan' },
];
