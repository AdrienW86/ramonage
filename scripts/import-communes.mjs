import { mkdir, writeFile, readFile } from 'node:fs/promises';
const dir = new URL('../src/data/', import.meta.url);
await mkdir(dir, { recursive: true });
const slugify = (s) =>
  s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/œ/g, 'oe')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
const previous = JSON.parse(
  await readFile(new URL('communes.json', dir), 'utf8').catch(() => '[]'),
);
const old = new Map(previous.map((c) => [c.insee, c]));
const records = (
  await Promise.all(
    ['11', '66'].map(async (department) => {
      const url = `https://geo.api.gouv.fr/departements/${department}/communes?fields=nom,code,codesPostaux,codeDepartement,centre,population&format=json`;
      const response = await fetch(url, { signal: AbortSignal.timeout(30000) });
      if (!response.ok) throw new Error(`API Géo: ${response.status}`);
      return (await response.json()).map((c) => ({
        name: c.nom,
        slug: slugify(c.nom),
        insee: c.code,
        postalCodes: c.codesPostaux,
        department,
        coordinates: c.centre?.coordinates ?? null,
        priority: ['Perpignan', 'Narbonne'].includes(c.nom)
          ? 1
          : c.population > 10000
            ? 2
            : c.population > 3000
              ? 3
              : 5,
        editorialStatus: 'brouillon',
        indexable: false,
        coverageConfirmed: false,
      }));
    }),
  )
).flat();
const counts = new Map();
for (const c of records) counts.set(c.slug, (counts.get(c.slug) ?? 0) + 1);
for (const c of records) {
  if (counts.get(c.slug) > 1 || ['aude', 'pyrenees-orientales'].includes(c.slug))
    c.slug += `-${c.insee}`;
  const saved = old.get(c.insee);
  if (saved)
    for (const key of ['editorialStatus', 'indexable', 'coverageConfirmed', 'priority'])
      c[key] = saved[key];
}
records.sort((a, b) => a.name.localeCompare(b.name, 'fr'));
if (records.length < 600 || new Set(records.map((c) => c.insee)).size !== records.length)
  throw new Error('Import incomplet ou codes INSEE dupliqués.');
await writeFile(new URL('communes.json', dir), JSON.stringify(records, null, 2) + '\n');
await writeFile(
  new URL('geo-source.json', dir),
  JSON.stringify(
    {
      source: 'https://geo.api.gouv.fr/decoupage-administratif/communes',
      importedAt: new Date().toISOString(),
      counts: Object.fromEntries(
        ['11', '66'].map((d) => [d, records.filter((c) => c.department === d).length]),
      ),
      retiredInsee: previous
        .filter((p) => !records.some((c) => c.insee === p.insee))
        .map((p) => p.insee),
      note: 'Données géographiques officielles ; ne constituent pas une confirmation de desserte.',
    },
    null,
    2,
  ) + '\n',
);
console.log(`Communes importées : ${records.length}`);
