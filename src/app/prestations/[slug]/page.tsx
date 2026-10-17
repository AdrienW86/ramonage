import Link from 'next/link';
import { RelatedResources } from '@/components/related-resources';
import { notFound, redirect } from 'next/navigation';
import { Breadcrumbs, CTA, Faq, JsonLd, Photo } from '@/components/ui';
import { services, visibleServices, serviceConfirmed } from '@/content/services';
import { company, isPreview } from '@/config/company';
import { metadata } from '@/lib/seo';
export const generateStaticParams = () => visibleServices().map((s) => ({ slug: s.slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  return s
    ? metadata(
        s.title,
        `${s.description} Découvrez le déroulement, les installations et les précautions utiles.`,
        `/prestations/${slug}`,
      )
    : {};
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = visibleServices().find((s) => s.slug === slug);
  if (!s) {
    if (services.some((x) => x.slug === slug)) redirect('/prestations');
    notFound();
  }
  return (
    <>
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Prestations', href: '/prestations' },
            { label: s.short, href: `/prestations/${s.slug}` },
          ]}
        />
        <section className="interior-hero">
          <div>
            <p className="eyebrow">{s.category}</p>
            <h1>{s.title}</h1>
            <p>{s.description}</p>
            {!serviceConfirmed(s) && (
              <p className="notice">
                Contenu préparatoire. Cette prestation n’est pas encore confirmée comme proposée par
                l’entreprise.
              </p>
            )}
            <Link className="button" href={`/devis?prestation=${s.slug}`} data-track="clic_devis">
              Préparer ma demande ↗
            </Link>
          </div>
          <Photo name={s.image} alt={s.alt} priority />
        </section>
        <div className="article-layout">
          <article className="prose">
            <h2>Comprendre l’intervention</h2>
            <p>{s.detail}</p>
            <h2>Les installations concernées</h2>
            <p>{s.installations}</p>
            <h2>Une intervention qui se prépare</h2>
            <ol className="steps">
              {s.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <h2>Les points de vigilance</h2>
            <p>{s.safety}</p>
            <p>
              Le périmètre exact, le prix et les documents remis sont à préciser avant accord.
              Aucune qualification, attestation ou disponibilité n’est annoncée sans confirmation.
            </p>
            <h2>Vos questions</h2>
            <Faq items={s.faq} />
            <RelatedResources service={s.slug} />
          </article>
          <aside className="aside-card">
            <p className="eyebrow">VOTRE PROJET</p>
            <h2>Faisons le point.</h2>
            <p>
              Indiquez votre commune et votre équipement pour faire confirmer la prise en charge.
            </p>
            <Link href={`/devis?prestation=${s.slug}`} className="button" data-track="clic_devis">
              Demander un devis ↗
            </Link>
            <Link href="/ramonage/aude">L’Aude, autour de Narbonne</Link>
            <Link href="/ramonage/pyrenees-orientales">
              Les Pyrénées-Orientales, autour de Perpignan
            </Link>
            <Link href="/prestations">Comparer les prestations</Link>
          </aside>
        </div>
      </div>
      <CTA />
      <JsonLd
        data={
          !isPreview() && serviceConfirmed(s)
            ? {
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: s.title,
                description: s.description,
                url: `${company.url}/prestations/${s.slug}`,
                provider: { '@id': `${company.url}/#entreprise` },
              }
            : null
        }
      />
    </>
  );
}
