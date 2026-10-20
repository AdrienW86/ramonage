import Link from 'next/link';
import { RelatedResources } from '@/components/related-resources';
import { GeoMap } from '@/components/geo-map';
import { notFound } from 'next/navigation';
import { Breadcrumbs, CTA, Faq, Photo } from '@/components/ui';
import { CommuneSearch } from '@/components/commune-search';
import { communeBySlug, communes, departments, isLocalPublished, nearestCommunes } from '@/lib/geo';
import { localEditorial } from '@/content/local';

import { metadata } from '@/lib/seo';
export const generateStaticParams = () => [
  ...departments.map((d) => ({ ville: d.slug })),
  ...communes.filter((c) => isLocalPublished(c)).map((c) => ({ ville: c.slug })),
];
function available(slug: string) {
  const c = communeBySlug.get(slug);
  return c && isLocalPublished(c) ? c : null;
}
export async function generateMetadata({ params }: { params: Promise<{ ville: string }> }) {
  const { ville } = await params;
  const d = departments.find((d) => d.slug === ville);
  if (d)
    return metadata(
      `Ramonage dans ${d.code === '11' ? 'l’Aude' : 'les Pyrénées-Orientales'}`,
      `Préparez votre entretien de conduit dans le département ${d.code}. Communes et codes postaux du référentiel officiel autour de ${d.pole}.`,
      `/ramonage/${ville}`,
    );
  const c = available(ville);
  if (!c) return {};
  return {
    ...metadata(
      `Ramonage à ${c.name} : ${localEditorial[c.insee].angle}`,
      `${localEditorial[c.insee].intro.slice(0, 150)}…`,
      `/ramonage/${ville}`,
    ),
    ...(!isLocalPublished(c) ? { robots: { index: false, follow: false } } : {}),
  };
}
export default async function Page({ params }: { params: Promise<{ ville: string }> }) {
  const { ville } = await params;
  const dep = departments.find((d) => d.slug === ville);
  if (dep) {
    const list = communes
      .filter((c) => c.department === dep.code)
      .sort((a, b) => a.priority - b.priority || a.name.localeCompare(b.name, 'fr'))
      .slice(0, 24);
    return (
      <>
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Zones d’intervention', href: '/zones-intervention' },
              { label: dep.name, href: `/ramonage/${ville}` },
            ]}
          />
          <section className="interior-hero">
            <div>
              <p className="eyebrow">DÉPARTEMENT {dep.code}</p>
              <h1>
                Le ramonage dans
                <br />
                <em>{dep.code === '11' ? 'l’Aude.' : 'les Pyrénées-Orientales.'}</em>
              </h1>
              <p>
                Autour de {dep.pole}, préparez votre entretien de cheminée, poêle ou conduit. Le
                répertoire rassemble les communes et codes postaux du département.
              </p>
              <CommuneSearch compact />
            </div>
            <Photo
              name="local"
              alt="Toitures méditerranéennes, illustration générée par IA"
              priority
            />
          </section>
          <div className="article-layout">
            <article className="prose">
              <h2>Un département, des installations différentes</h2>
              <p>
                Votre appareil et son conduit déterminent la méthode d’entretien. Précisez le
                combustible, le modèle et les accès. La présence d’une commune dans ce référentiel
                ne vaut pas engagement de desserte.
              </p>
              <h2>Ramonage et dépôts tenaces</h2>
              <p>
                Une cheminée ouverte, un poêle à bois ou à granulés et un insert présentent des
                accès différents. Le débistrage demande une évaluation spécifique des dépôts et du
                support.{' '}
                <Link href="/prestations">Explorez les prestations et leurs conditions</Link>.
              </p>
              <h2>Organiser une demande autour de {dep.pole}</h2>
              <p>
                Rassemblez les documents d’entretien et indiquez les contraintes du logement. Aucun
                délai ni tarif n’est annoncé avant examen de la demande.
              </p>
              <RelatedResources department={dep.code} />
            </article>
            <aside className="aside-card">
              <h2>
                {communes.filter((c) => c.department === dep.code).length} communes référencées.
              </h2>
              <p>
                Données officielles API Géo. Le répertoire ne constitue pas une offre
                d’intervention.
              </p>
              <Link href={`/zones-intervention?departement=${dep.code}`} className="button">
                Voir toutes les communes ↗
              </Link>
            </aside>
          </div>
          <GeoMap />
          <h2>Rechercher votre commune</h2>
          <div className="commune-list">
            {list.map((c) => (
              <Link
                key={c.insee}
                href={
                  isLocalPublished(c)
                    ? `/ramonage/${c.slug}`
                    : `/zones-intervention?q=${encodeURIComponent(c.name)}`
                }
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
          <p style={{ paddingBottom: 60 }}>
            <Link className="text-link" href={`/zones-intervention?departement=${dep.code}`}>
              Tout le référentiel du département ↗
            </Link>
          </p>
        </div>
        <CTA />
      </>
    );
  }
  const c = available(ville);
  if (!c) notFound();
  const content = localEditorial[c.insee];
  const depInfo = departments.find((d) => d.code === c.department)!;
  const neighbors = nearestCommunes(c);
  const href = `/zones-intervention?q=${encodeURIComponent(c.name)}`;
  return (
    <>
      <div className="container">
        <Breadcrumbs
          items={[
            { label: depInfo.name, href: `/ramonage/${depInfo.slug}` },
            { label: c.name, href: `/ramonage/${c.slug}` },
          ]}
        />
        <section className="interior-hero">
          <div>
            <p className="eyebrow">{content.angle}</p>
            <h1>
              Ramonage
              <br />à <em>{c.name}.</em>
            </h1>
            <p>{content.intro}</p>
            <Link href={href} className="button" data-track="clic_devis">
              Une demande à {c.name} ↗
            </Link>
          </div>
          <Photo
            name="local"
            alt="Habitat du sud de la France, illustration générée par IA ne représentant pas une réalisation locale"
            priority
          />
        </section>
        <div className="local-facts">
          <p>
            Commune<strong>{c.name}</strong>
          </p>
          <p>
            Code INSEE<strong>{c.insee}</strong>
          </p>
          <p>
            Codes postaux<strong>{c.postalCodes.join(', ')}</strong>
          </p>
          <p>
            Département<strong>{depInfo.name}</strong>
          </p>
        </div>
        <div className="article-layout">
          <article className="prose">
            {content.sections.map((s) => (
              <section key={s.title}>
                <h2>{s.title}</h2>
                <p>{s.text}</p>
              </section>
            ))}
            <h2>Cheminée, bois ou granulés : préciser votre besoin</h2>
            <p>
              Le <Link href="/prestations/ramonage-cheminee">ramonage de cheminée</Link> et
              l’entretien du conduit d’un{' '}
              <Link href="/prestations/ramonage-poele-bois">poêle à bois</Link> se préparent à
              partir de leurs accès respectifs. Pour un{' '}
              <Link href="/prestations/ramonage-poele-granules">poêle à granulés</Link>, communiquez
              la marque et le modèle.
            </p>
            <h2>Du bistre dans votre conduit ?</h2>
            <p>
              Des dépôts noirs durs ou vitrifiés nécessitent un examen spécifique. Le{' '}
              <Link href="/prestations/debistrage">débistrage</Link> doit être confirmé selon l’état
              du conduit, sans garantie d’élimination à distance.
            </p>
            <h2>Questions pour une demande à {c.name}</h2>
            <Faq
              items={[
                {
                  q: `Comment préparer une demande à ${c.name} ?`,
                  a: `Indiquez la commune, un code postal parmi ${c.postalCodes.join(', ')}, le type d’appareil et les accès connus. La desserte sera confirmée avant accord.`,
                },
                {
                  q:
                    c.department === '66'
                      ? 'Que préciser pour un logement en immeuble ?'
                      : 'Que signaler après une longue période sans feu ?',
                  a:
                    c.department === '66'
                      ? 'L’étage, le caractère individuel ou collectif du conduit et les informations du syndic aident à définir les accès.'
                      : 'Précisez depuis quand l’installation est inutilisée et les documents disponibles. Ne remettez pas en service un conduit suspect sans avis professionnel.',
                },
              ]}
            />
            <div className="sources">
              Données géographiques : <a href={content.source}>API Géo — {c.name}</a> · Relecture
              documentaire : {content.reviewedAt}
            </div>
            <RelatedResources department={c.department} />
          </article>
          <aside className="aside-card">
            <h2>Votre demande à {c.name}.</h2>
            <p>La commune sera préremplie dans le formulaire.</p>
            <Link className="button" href={href} data-track="clic_devis">
              Préparer ma demande ↗
            </Link>
            <Link href={`/ramonage/${depInfo.slug}`}>Explorer le département</Link>
          </aside>
        </div>
        <h2>Communes à proximité</h2>
        <div className="commune-list">
          {neighbors.map((n) => (
            <Link
              key={n.insee}
              href={
                isLocalPublished(n)
                  ? `/ramonage/${n.slug}`
                  : `/devis?commune=${encodeURIComponent(n.name)}&codePostal=${n.postalCodes[0] || ''}`
              }
            >
              <span>
                {n.name}
                <small>{n.coverageConfirmed ? 'Desserte confirmée' : 'Commune référencée'}</small>
              </span>
              ↗
            </Link>
          ))}
        </div>
      </div>
      <CTA href={href} />
    </>
  );
}
