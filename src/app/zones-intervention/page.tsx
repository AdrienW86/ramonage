import Link from 'next/link';
import { GeoMap } from '@/components/geo-map';
import { Breadcrumbs, CTA } from '@/components/ui';
import { CommuneSearch } from '@/components/commune-search';
import { communes, departments, findCommunes, isLocalPublished } from '@/lib/geo';
import { metadata } from '@/lib/seo';
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const q = await searchParams;
  const filtered = Object.keys(q).length > 0;
  return {
    ...metadata(
      'Zones et communes : Aude et Pyrénées-Orientales',
      'Recherchez une commune dans le référentiel officiel de l’Aude et des Pyrénées-Orientales. Communes et codes postaux du répertoire géographique.',
      '/zones-intervention',
    ),
    ...(filtered ? { robots: { index: false, follow: true } } : {}),
  };
}
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; departement?: string; page?: string }>;
}) {
  const q = await searchParams;
  const query = typeof q.q === 'string' ? q.q.slice(0, 80) : '';
  const department = ['11', '66'].includes(q.departement || '') ? q.departement : '';
  const results = findCommunes(query, department);
  const totalPages = Math.max(1, Math.ceil(results.length / 45));
  const current = Math.min(totalPages, Math.max(1, parseInt(q.page || '1', 10) || 1));
  const pageHref = (p: number) =>
    `/zones-intervention?${new URLSearchParams({ q: query, departement: department || '', page: String(p) })}`;
  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ label: 'Zones d’intervention', href: '/zones-intervention' }]} />
        <div className="page-intro">
          <p className="eyebrow">DEUX DÉPARTEMENTS, UN RÉFÉRENTIEL OFFICIEL</p>
          <h1>
            Votre commune.
            <br />
            <em>Vos repères.</em>
          </h1>
          <p>
            {communes.length} communes de l’Aude et des Pyrénées-Orientales sont référencées. Les
            données géographiques ne constituent pas une confirmation de desserte. La présence d’une
            commune ne constitue pas une offre d’intervention.
          </p>
          <CommuneSearch compact />
        </div>
        <div className="department-grid">
          {departments.map((d) => (
            <Link href={`/ramonage/${d.slug}`} className="department-card" key={d.code}>
              <p className="eyebrow">
                {d.code} / AUTOUR DE {d.pole}
              </p>
              <h2>{d.name}</h2>
              <p>
                {communes.filter((c) => c.department === d.code).length} communes dans le
                référentiel officiel.
              </p>
              <span className="text-link">Explorer le département ↗</span>
            </Link>
          ))}
        </div>
        <GeoMap />
        <section className="section">
          <h2>Le répertoire des communes.</h2>
          <form className="directory-filter" action="/zones-intervention">
            <div>
              <label htmlFor="directory-q">Nom ou code postal</label>
              <input
                id="directory-q"
                name="q"
                defaultValue={query}
                placeholder="Rechercher une commune"
              />
            </div>
            <div>
              <label htmlFor="department">Département</label>
              <select id="department" name="departement" defaultValue={department}>
                <option value="">Les deux départements</option>
                <option value="11">Aude (11)</option>
                <option value="66">Pyrénées-Orientales (66)</option>
              </select>
            </div>
            <button className="button" type="submit">
              Rechercher
            </button>
          </form>
          <p className="form-meta">
            {results.length} commune(s) · Page {current} sur {totalPages} ·{' '}
            <a href="https://geo.api.gouv.fr/decoupage-administratif/communes">Source : API Géo</a>
          </p>
          <div className="commune-list">
            {results.slice((current - 1) * 45, current * 45).map((c) => (
              <Link
                href={
                  isLocalPublished(c)
                    ? `/ramonage/${c.slug}`
                    : `/zones-intervention?q=${encodeURIComponent(c.name)}`
                }
                key={c.insee}
              >
                <span>
                  {c.name}
                  <small>
                    {c.postalCodes.join(', ')} ·{' '}
                    {c.coverageConfirmed ? 'Desserte confirmée' : 'Commune référencée'}
                  </small>
                </span>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
          {results.length === 0 && (
            <p>Aucune commune trouvée. Essayez un autre nom ou code postal.</p>
          )}
          <nav className="pagination" aria-label="Pagination des communes">
            {current > 1 ? <Link href={pageHref(current - 1)}>← Précédent</Link> : <span />}
            <span>
              {current} / {totalPages}
            </span>
            {current < totalPages ? <Link href={pageHref(current + 1)}>Suivant →</Link> : <span />}
          </nav>
        </section>
      </div>
      <CTA />
    </>
  );
}
