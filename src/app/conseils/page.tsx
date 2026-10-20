import Link from 'next/link';
import { Breadcrumbs, CTA, Faq, SectionHeading } from '@/components/ui';
import { CategoryNav, GuideCard, ResourceSearch } from '@/components/editorial';
import { categories, type Category } from '@/content/guides';
import { searchGuides, visibleGuides, isGuideValidated } from '@/lib/editorial';
import { metadata } from '@/lib/seo';
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; categorie?: string }>;
}) {
  const q = await searchParams;
  return {
    ...metadata(
      'Centre de ressources : ramonage, entretien et sécurité',
      'Guides sourcés sur les obligations, les appareils, les conduits et la prévention. Trouvez une réponse et les documents officiels utiles.',
      '/conseils',
    ),
    ...(q.q || q.categorie ? { robots: { index: false, follow: true } } : {}),
  };
}
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; categorie?: string }>;
}) {
  const params = await searchParams;
  const query = typeof params.q === 'string' ? params.q.slice(0, 100) : '';
  const category = categories.some((c) => c.slug === params.categorie)
    ? (params.categorie as Category)
    : undefined;
  const list = searchGuides(query, category);
  const featured = visibleGuides().filter((g) => g.featured && isGuideValidated(g));
  const filtered = !!query || !!category;
  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ label: 'Centre de ressources', href: '/conseils' }]} />
        <div className="page-intro">
          <p className="eyebrow">COMPRENDRE POUR MIEUX ENTRETENIR</p>
          <h1>
            Les bons gestes.
            <br />
            <em>Les bons repères.</em>
          </h1>
          <p>
            Des réponses documentées pour comprendre vos obligations, préparer l’entretien et savoir
            quand demander un avis professionnel.
          </p>
        </div>
        <ResourceSearch query={query} category={category} />
        <CategoryNav selected={category} />
        {!filtered && (
          <section className="resource-section">
            <div className="heading-row">
              <SectionHeading eyebrow="POUR COMMENCER" title="Les guides incontournables." />
              <Link href="/questions-frequentes" className="text-link">
                Une question précise ? ↗
              </Link>
            </div>
            <div className="guide-grid">
              {featured.slice(0, 3).map((g) => (
                <GuideCard key={g.slug} guide={g} />
              ))}
            </div>
          </section>
        )}
        <section className="resource-section" id="catalogue">
          <div className="heading-row">
            <SectionHeading
              eyebrow="EXPLORER LES RESSOURCES"
              title={filtered ? 'Les réponses à votre recherche.' : 'Votre bibliothèque du foyer.'}
            />
            <span className="form-meta" role="status">
              {list.length} guide(s)
            </span>
          </div>
          {list.length ? (
            <div className="guide-grid">
              {list.map((g) => (
                <GuideCard key={g.slug} guide={g} />
              ))}
            </div>
          ) : (
            <p>
              Aucun article trouvé. Essayez un autre terme ou{' '}
              <Link className="text-link" href="/conseils">
                consultez toutes les catégories
              </Link>
              .
            </p>
          )}
        </section>
        {!filtered && (
          <section className="resource-section">
            <SectionHeading
              eyebrow="PAR TYPE D’INSTALLATION"
              title="Les lectures recommandées."
              text="Commencez par votre équipement pour distinguer entretien de l’appareil et ramonage du conduit."
            />
            <div className="guide-grid resource-related-grid">
              {visibleGuides()
                .filter((g) =>
                  ['entretien-poele-bois', 'entretien-poele-granules', 'entretien-insert'].includes(
                    g.slug,
                  ),
                )
                .map((g) => (
                  <GuideCard key={g.slug} guide={g} />
                ))}
            </div>
          </section>
        )}
        <section className="faq-section resource-section">
          <SectionHeading eyebrow="DES RÉPONSES DIRECTES" title="Avant d’aller plus loin." />
          <div>
            <Faq
              items={[
                {
                  q: 'Comment les guides sont-ils vérifiés ?',
                  a: 'Chaque guide indique ses sources et sa date de vérification documentaire. Consultez les textes cités et la notice de votre appareil ; les informations générales ne suffisent pas à évaluer une installation.',
                },
                {
                  q: 'Un guide remplace-t-il un diagnostic ?',
                  a: 'Non. Les informations générales ne décrivent pas l’état de votre installation. Le modèle, les accès et les observations doivent être examinés par un professionnel lorsque nécessaire.',
                },
                {
                  q: 'Les informations locales confirment-elles une desserte ?',
                  a: 'Non. La réglementation et les données des communes sont distinctes de la couverture commerciale, à confirmer avant tout rendez-vous.',
                },
              ]}
            />
            <Link href="/questions-frequentes" className="text-link" style={{ marginTop: 25 }}>
              Toutes les questions fréquentes ↗
            </Link>
          </div>
        </section>
        <div className="resource-related">
          <h2>Passer de l’information à votre besoin.</h2>
          <Link href="/prestations">Comparer les prestations ↗</Link>
          <Link href="/ramonage/aude">L’Aude et Narbonne ↗</Link>
          <Link href="/ramonage/pyrenees-orientales">Les Pyrénées-Orientales et Perpignan ↗</Link>
        </div>
      </div>
      <CTA />
    </>
  );
}
