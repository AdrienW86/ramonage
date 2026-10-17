import Link from 'next/link';
import { Breadcrumbs, CheckList, CTA, Photo } from '@/components/ui';
import { metadata } from '@/lib/seo';
export const generateMetadata = () =>
  metadata(
    'Notre approche de l’entretien des conduits',
    'Comprendre l’installation, définir le périmètre et expliquer les observations : découvrez l’approche préparée pour votre entretien.',
    '/a-propos',
  );
export default function Page() {
  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ label: 'Notre approche', href: '/a-propos' }]} />
        <section className="interior-hero">
          <div>
            <p className="eyebrow">LE SOIN DU CONDUIT</p>
            <h1>
              La précision du geste.
              <br />
              <em>La clarté de l’échange.</em>
            </h1>
            <p>
              L’entretien commence par une bonne compréhension de votre installation. Cette approche
              place l’information, la préparation et les limites de l’intervention au centre de la
              demande.
            </p>
          </div>
          <Photo
            name="outillage"
            alt="Outillage de ramonage préparé dans un atelier, illustration générée par IA"
            priority
          />
        </section>
        <div className="article-layout">
          <article className="prose">
            <h2>Comprendre avant de proposer</h2>
            <p>
              Type de foyer, combustible, usage, accès et historique d’entretien permettent de
              préciser le besoin. Une prestation adaptée repose sur ces informations et sur les
              observations possibles sur place.
            </p>
            <h2>Un cadre à confirmer ensemble</h2>
            <CheckList
              items={[
                'Une prestation dont le périmètre est explicite',
                'Un devis précisant les opérations retenues',
                'La faisabilité vérifiée selon l’état du conduit',
                'Les observations et les limites expliquées',
              ]}
            />
            <h2>Une entreprise en cours de présentation</h2>
            <p>
              L’identité commerciale, les informations administratives, les qualifications et les
              assurances seront ajoutées après vérification. Aucun historique, avis client ou
              chantier n’est inventé. Les photographies sont des illustrations générées par IA.
            </p>
            <h2>Deux territoires prioritaires</h2>
            <p>
              L’Aude et les Pyrénées-Orientales constituent le périmètre de préparation du site.
              Narbonne et Perpignan sont les pôles prioritaires. La couverture précise reste à
              valider commune par commune.
            </p>
            <p>
              <Link href="/zones-intervention">Retrouver votre commune</Link>
            </p>
          </article>
          <aside className="aside-card">
            <h2>Une demande concrète.</h2>
            <p>
              Décrivez votre appareil et votre commune. La prise en charge sera confirmée avant un
              rendez-vous.
            </p>
            <Link href="/devis" className="button" data-track="clic_devis">
              Préparer ma demande ↗
            </Link>
          </aside>
        </div>
      </div>
      <CTA />
    </>
  );
}
