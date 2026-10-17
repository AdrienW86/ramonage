import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs, CTA, Photo } from '@/components/ui';
import { guides, sources } from '@/content/guides';
import { metadata } from '@/lib/seo';
export const generateStaticParams = () => guides.map((g) => ({ slug: g.slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = guides.find((g) => g.slug === slug);
  return g ? metadata(g.title, g.intro, `/conseils/${slug}`) : {};
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = guides.find((g) => g.slug === slug);
  if (!g) notFound();
  return (
    <>
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Conseils', href: '/conseils' },
            { label: g.title, href: `/conseils/${g.slug}` },
          ]}
        />
        <section className="interior-hero">
          <div>
            <p className="eyebrow">{g.category}</p>
            <h1>{g.title}</h1>
            <p>{g.intro}</p>
          </div>
          <Photo name={g.image} alt={`${g.category}, illustration générée par IA`} priority />
        </section>
        <div className="article-layout">
          <article className="prose">
            {g.sections.map((s) => (
              <section key={s.title}>
                <h2>{s.title}</h2>
                <p>{s.text}</p>
              </section>
            ))}
            <div className="sources">
              <p>
                Sources officielles consultées le 17 octobre 2026. Vérifiez les dispositions locales
                auprès de la mairie ou de la préfecture.
              </p>
              {g.sourceKeys.map((k) => (
                <a key={k} href={sources[k].url}>
                  {sources[k].title} ↗
                </a>
              ))}
            </div>
          </article>
          <aside className="aside-card">
            <h2>Une question sur votre conduit ?</h2>
            <p>Indiquez votre installation pour préparer une demande adaptée.</p>
            <Link className="button" href="/devis" data-track="clic_devis">
              Préparer ma demande ↗
            </Link>
            <Link href="/conseils">Tous les guides</Link>
            <Link href="/prestations">Les prestations</Link>
          </aside>
        </div>
      </div>
      <CTA />
    </>
  );
}
