import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs, CTA, Faq, JsonLd, Photo } from '@/components/ui';
import { GuideCard, formatDate } from '@/components/editorial';
import { sources } from '@/content/guides';
import {
  accessibleGuide,
  visibleGuides,
  categoryBySlug,
  isGuidePublished,
  isGuideValidated,
  articleSchema,
} from '@/lib/editorial';
import { visibleServices } from '@/content/services';
import { metadata } from '@/lib/seo';
export const generateStaticParams = () => visibleGuides().map((g) => ({ slug: g.slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = accessibleGuide(slug);
  if (!g) return {};
  const meta = metadata(g.title, g.description, `/conseils/${g.slug}`);
  return {
    ...meta,
    ...(!isGuidePublished(g) ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      ...meta.openGraph,
      type: 'article',
      images: [{ url: `/images/${g.image}.webp`, alt: `${g.title} — illustration IA` }],
      ...(g.datePublished ? { publishedTime: g.datePublished } : {}),
      ...(g.dateVerified ? { modifiedTime: g.dateVerified } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: g.title,
      description: g.description,
      images: [`/images/${g.image}.webp`],
    },
  };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = accessibleGuide(slug);
  if (!g) notFound();
  const category = categoryBySlug.get(g.category)!;
  const related = g.relatedGuides.map(accessibleGuide).filter((x): x is typeof g => !!x);
  const services = visibleServices().filter((s) => g.relatedServices.includes(s.slug));
  const href = `/devis?article=${g.slug}`;
  return (
    <>
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Conseils', href: '/conseils' },
            { label: category.name, href: `/conseils/categorie/${category.slug}` },
            { label: g.title, href: `/conseils/${g.slug}` },
          ]}
        />
        <section className="interior-hero">
          <div>
            <p className="eyebrow">{category.name}</p>
            <h1>{g.title}</h1>
            <p className="article-answer">{g.intro}</p>
          </div>
          <Photo
            name={g.image}
            alt={`${g.title} — illustration générée par IA, pas une réalisation de l’entreprise`}
            priority
          />
        </section>
        <div className="article-meta">
          <span>
            Auteur :{' '}
            {g.author
              ? `${g.author.name} · ${g.author.role}`
              : 'non attribué — synthèse documentaire assistée par IA'}
          </span>
          <span>Publication : {g.datePublished ? formatDate(g.datePublished) : 'non publiée'}</span>
          <span>
            {g.dateVerified
              ? `Vérification documentaire : ${formatDate(g.dateVerified)}`
              : 'Vérification complète : en attente'}
          </span>
        </div>
        {!isGuidePublished(g) && (
          <p className="notice">
            {isGuideValidated(g)
              ? 'Contenu documentaire vérifié, en attente de relecture, d’attribution et de publication.'
              : 'Brouillon à compléter — aucune validation technique ou locale définitive.'}{' '}
            {g.verificationNote}
          </p>
        )}
        <div className="article-layout">
          <article className="prose">
            <nav className="article-toc" aria-label="Sommaire de l’article">
              <h2>Dans ce guide</h2>
              <ol>
                {g.sections.map((s, i) => (
                  <li key={s.title}>
                    <a href={`#section-${i + 1}`}>{s.title}</a>
                  </li>
                ))}
              </ol>
              <a href="#questions-article">Questions sur ce sujet</a>
              <a href="#sources-article">Sources et limites de vérification</a>
            </nav>
            {g.sections.map((s, i) => (
              <section key={s.title} id={`section-${i + 1}`}>
                <h2>{s.title}</h2>
                <p>{s.text}</p>
                <div className="section-sources">
                  {(
                    s.sourceKeys ??
                    g.sourceKeys.filter((k) => sources[k]?.access === 'full').slice(0, 1)
                  ).map((k) => (
                    <a key={k} href={sources[k].url}>
                      {sources[k].publisher} — {sources[k].title} ↗
                    </a>
                  ))}
                </div>
              </section>
            ))}
            <section className="practical-example">
              <p className="eyebrow">EXEMPLE DE DÉMARCHE · AUCUN CHANTIER REVENDIQUÉ</p>
              <h2>{g.example.title}</h2>
              <p>{g.example.text}</p>
            </section>
            {g.slug === 'ramonage-entretien-inspection' && (
              <div className="comparison-wrap">
                <table>
                  <caption>Trois objectifs à distinguer au devis</caption>
                  <thead>
                    <tr>
                      <th scope="col">Opération</th>
                      <th scope="col">Objet à préciser</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Ramonage</th>
                      <td>Nettoyage mécanique des parois et vacuité du conduit</td>
                    </tr>
                    <tr>
                      <th scope="row">Entretien</th>
                      <td>Appareil et opérations prévues pour son modèle</td>
                    </tr>
                    <tr>
                      <th scope="row">Inspection</th>
                      <td>Observations dans un périmètre et avec des limites définis</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            <section id="questions-article">
              <h2>Questions sur ce sujet</h2>
              <Faq items={g.faq} />
              <p>
                <Link href={`/questions-frequentes?categorie=${g.category}`}>
                  Retrouver les autres questions de cette thématique
                </Link>
              </p>
            </section>
            <section id="sources-article" className="sources">
              <h2>Sources et vérification</h2>
              <p>{g.verificationNote}</p>
              <ul>
                {g.sourceKeys.map((k) => (
                  <li key={k}>
                    <a href={sources[k].url}>
                      {sources[k].publisher} — {sources[k].title}
                    </a>
                    <span>
                      Consultation tentée le {formatDate(sources[k].checkedAt)} ·{' '}
                      {sources[k].access === 'full'
                        ? 'Document consulté'
                        : sources[k].access === 'partial'
                          ? 'Extrait consulté, accès partiel'
                          : 'Accès complet non obtenu'}
                      .
                    </span>
                    <p>
                      {sources[k].scope} {sources[k].limitation}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          </article>
          <aside className="aside-card">
            <p className="eyebrow">VOTRE INSTALLATION</p>
            <h2>Du repère au besoin concret.</h2>
            <p>Un guide ne remplace pas l’examen de votre appareil et de son conduit.</p>
            <Link className="button" href={href} data-track="clic_devis" data-article={g.slug}>
              Préparer ma demande ↗
            </Link>
            {services.map((s) => (
              <Link href={`/prestations/${s.slug}`} key={s.slug}>
                {s.title}
              </Link>
            ))}
            <Link href="/questions-frequentes">Consulter les questions fréquentes</Link>
            <Link href="/ramonage/aude">Aude et Narbonne</Link>
            <Link href="/ramonage/pyrenees-orientales">Pyrénées-Orientales et Perpignan</Link>
          </aside>
        </div>
        {related.length > 0 && (
          <section className="resource-section">
            <p className="eyebrow">POURSUIVRE LA LECTURE</p>
            <h2>Des sujets qui se complètent.</h2>
            <div className="guide-grid resource-related-grid">
              {related.map((other) => (
                <GuideCard key={other.slug} guide={other} />
              ))}
            </div>
          </section>
        )}
        <div className="resource-related">
          <Link href="/conseils">Tous les guides ↗</Link>
          <Link href="/questions-frequentes">Les questions fréquentes ↗</Link>
        </div>
      </div>
      <CTA label={g.cta} href={href} />
      <JsonLd data={articleSchema(g)} />
    </>
  );
}
