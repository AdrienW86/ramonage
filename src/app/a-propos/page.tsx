import Link from 'next/link';
import { Breadcrumbs, CheckList, CTA, Photo } from '@/components/ui';
import { metadata } from '@/lib/seo';
export const generateMetadata = () =>
  metadata(
    'Notre approche de l’entretien des conduits',
    'Comprendre l’installation, définir le périmètre et expliquer les observations : retrouvez les points essentiels de l’entretien.',
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
            <h2>Des repères pour comprendre votre installation</h2>
            <p>
              Les guides présentent les obligations nationales, les gestes d’entretien et les
              situations qui nécessitent un avis professionnel. Les illustrations générées par IA
              accompagnent la lecture et ne constituent pas des photographies de chantier.
            </p>
            <h2>L’Aude et les Pyrénées-Orientales</h2>
            <p>
              Le répertoire géographique rassemble les communes et leurs codes postaux, autour de
              Narbonne et Perpignan. Une présence dans ce répertoire ne constitue pas une offre
              d’intervention.
            </p>
            <p>
              <Link href="/zones-intervention">Retrouver votre commune</Link>
            </p>
          </article>
          <aside className="aside-card">
            <h2>Une demande concrète.</h2>
            <p>
              Identifiez votre appareil, son combustible et son historique pour échanger avec un
              professionnel.
            </p>
            <Link href="/conseils" className="button">
              Consulter les guides ↗
            </Link>
          </aside>
        </div>
      </div>
      <CTA />
    </>
  );
}
