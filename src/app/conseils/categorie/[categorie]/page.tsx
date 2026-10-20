import { notFound } from 'next/navigation';
import { Breadcrumbs, CTA } from '@/components/ui';
import { CategoryNav, GuideCard, ResourceSearch } from '@/components/editorial';
import { categories } from '@/content/guides';
import { categoryBySlug, searchGuides } from '@/lib/editorial';
import { metadata } from '@/lib/seo';
export const generateStaticParams = () => categories.map((c) => ({ categorie: c.slug }));
export async function generateMetadata({ params }: { params: Promise<{ categorie: string }> }) {
  const { categorie } = await params;
  const c = categoryBySlug.get(categorie);
  return c
    ? {
        ...metadata(
          c.name,
          `${c.description} Réponses, guides et sources officielles pour préparer l’entretien de votre installation.`,
          `/conseils/categorie/${c.slug}`,
        ),
        ...(searchGuides('', c.slug).length === 0
          ? { robots: { index: false, follow: true } }
          : {}),
      }
    : {};
}
export default async function Page({ params }: { params: Promise<{ categorie: string }> }) {
  const { categorie } = await params;
  const c = categoryBySlug.get(categorie);
  if (!c) notFound();
  const list = searchGuides('', c.slug);
  return (
    <>
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Centre de ressources', href: '/conseils' },
            { label: c.name, href: `/conseils/categorie/${c.slug}` },
          ]}
        />
        <div className="page-intro">
          <p className="eyebrow">LES REPÈRES DU FOYER</p>
          <h1>{c.name}.</h1>
          <p>{c.description}</p>
        </div>
        <CategoryNav selected={c.slug} />
        <ResourceSearch category={c.slug} />
        <section className="resource-section" aria-label={`Guides : ${c.name}`}>
          <div className="guide-grid">
            {list.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
          {list.length === 0 && (
            <p>Consultez les autres thématiques pour poursuivre votre lecture.</p>
          )}
        </section>
      </div>
      <CTA />
    </>
  );
}
