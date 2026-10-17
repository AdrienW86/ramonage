import Link from 'next/link';
import { Breadcrumbs, CTA, Photo } from '@/components/ui';
import { guides } from '@/content/guides';
import { metadata } from '@/lib/seo';
export const generateMetadata = () =>
  metadata(
    'Conseils et guides sur le ramonage',
    'Obligations, bistre, sécurité et préparation : des repères sourcés pour comprendre l’entretien de votre conduit.',
    '/conseils',
  );
export default function Page() {
  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ label: 'Conseils & guides', href: '/conseils' }]} />
        <div className="page-intro">
          <p className="eyebrow">COMPRENDRE POUR MIEUX ENTRETENIR</p>
          <h1>
            Les bons gestes.
            <br />
            <em>Les bons repères.</em>
          </h1>
          <p>
            Des informations pratiques pour préparer votre entretien, reconnaître les signaux
            d’alerte et retrouver les sources officielles.
          </p>
        </div>
        <div className="guide-grid" style={{ paddingBottom: 80 }}>
          {guides.map((g) => (
            <Link className="guide-card" href={`/conseils/${g.slug}`} key={g.slug}>
              <Photo name={g.image} alt={`${g.category}, illustration générée par IA`} />
              <p className="eyebrow">{g.category}</p>
              <h2 style={{ fontSize: 29 }}>{g.title}</h2>
            </Link>
          ))}
        </div>
      </div>
      <CTA />
    </>
  );
}
