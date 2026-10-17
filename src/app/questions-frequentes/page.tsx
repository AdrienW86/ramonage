import Link from 'next/link';
import { Breadcrumbs, CTA } from '@/components/ui';
import { ResourceSearch } from '@/components/editorial';
import { categories, type Category } from '@/content/guides';
import { faqEntries } from '@/content/faq';
import { sources } from '@/content/sources';
import { accessibleGuide } from '@/lib/editorial';
import { metadata } from '@/lib/seo';
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; categorie?: string }>;
}) {
  const q = await searchParams;
  return {
    ...metadata(
      'Questions fréquentes : ramonage, sécurité et devis',
      'Des réponses classées par thème, vérifiées sur des sources officielles, avec des guides pour approfondir.',
      '/questions-frequentes',
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
  const q = typeof params.q === 'string' ? params.q.slice(0, 100) : '';
  const category = categories.some((c) => c.slug === params.categorie)
    ? (params.categorie as Category)
    : undefined;
  const norm = (s: string) =>
    s
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  const terms = norm(q).trim().split(/\s+/).filter(Boolean);
  const matches = faqEntries.filter(
    (f) =>
      (!category || f.category === category) &&
      terms.every((t) =>
        norm(f.q + ' ' + f.a + ' ' + categories.find((c) => c.slug === f.category)?.name).includes(
          t,
        ),
      ),
  );
  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ label: 'Questions fréquentes', href: '/questions-frequentes' }]} />
        <div className="page-intro">
          <p className="eyebrow">UNE QUESTION, DES REPÈRES</p>
          <h1>
            Comprendre.
            <br />
            <em>Avant de décider.</em>
          </h1>
          <p>
            {faqEntries.length} réponses pour préparer votre entretien. Une information générale ne
            remplace pas l’examen de votre installation. En cas de danger, contactez les secours.
          </p>
        </div>
        <ResourceSearch query={q} category={category} action="/questions-frequentes" />
        <p className="form-meta" role="status">
          {matches.length} réponse(s) · Vérification documentaire le 17 octobre 2026
        </p>
        <nav className="resource-categories" aria-label="Thèmes des questions">
          {categories
            .filter((c) => matches.some((f) => f.category === c.slug))
            .map((c) => (
              <a key={c.slug} href={`#${c.slug}`}>
                {c.name}
              </a>
            ))}
        </nav>
        {categories.map((c) => {
          const rows = matches.filter((f) => f.category === c.slug);
          return rows.length ? (
            <section id={c.slug} className="resource-section" key={c.slug}>
              <h2>{c.name}</h2>
              <div className="faq global-faq">
                {rows.map((f) => (
                  <details key={f.id} id={f.id}>
                    <summary>
                      {f.q}
                      <span aria-hidden="true">+</span>
                    </summary>
                    <p>{f.a}</p>
                    <div className="faq-evidence">
                      {accessibleGuide(f.guide) && (
                        <Link href={`/conseils/${f.guide}`}>Approfondir dans le guide ↗</Link>
                      )}
                      {f.sourceKeys.map((k) => (
                        <a key={k} href={sources[k].url}>
                          {sources[k].publisher} — {sources[k].title} ↗
                        </a>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ) : null;
        })}
        {matches.length === 0 && (
          <p className="resource-section">
            Aucune réponse ne correspond.{' '}
            <Link href="/questions-frequentes" className="text-link">
              Afficher toutes les questions
            </Link>
          </p>
        )}
        <div className="resource-related">
          <h2>Retrouvez les explications détaillées.</h2>
          <Link href="/conseils">Explorer les guides ↗</Link>
          <Link href="/prestations">Comparer les prestations ↗</Link>
        </div>
      </div>
      <CTA />
    </>
  );
}
