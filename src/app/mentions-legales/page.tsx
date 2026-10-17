import { Breadcrumbs } from '@/components/ui';
import { company, isPreview } from '@/config/company';
import { metadata } from '@/lib/seo';
export const generateMetadata = () =>
  metadata(
    'Mentions légales',
    'Identité de l’éditeur, hébergement et informations légales du site.',
    '/mentions-legales',
  );
export default function Page() {
  return (
    <div className="container">
      <Breadcrumbs items={[{ label: 'Mentions légales', href: '/mentions-legales' }]} />
      <div className="page-intro">
        <h1>Mentions légales.</h1>
        {isPreview() && (
          <p className="notice">
            Document préparatoire à compléter et relire. La publication commerciale est bloquée tant
            que la configuration n’est pas validée.
          </p>
        )}
      </div>
      <article className="prose" style={{ maxWidth: 800, paddingBottom: 80 }}>
        <h2>Éditeur du site</h2>
        <p>
          Nom commercial : {company.name}
          <br />
          Raison sociale : {company.legalName || 'À compléter'}
          <br />
          Forme juridique : {company.legalStatus || 'À compléter'}
          <br />
          SIREN : {company.siren || 'À compléter'}
          <br />
          SIRET : {company.siret || 'À compléter'}
          <br />
          Adresse :{' '}
          {company.address.street
            ? `${company.address.street}, ${company.address.postalCode} ${company.address.city}`
            : 'À compléter'}
          <br />
          Téléphone : {company.phone || 'À compléter'}
          <br />
          Email : {company.email || 'À compléter'}
          <br />
          Directeur de publication : {company.publishingDirector || 'À compléter'}
        </p>
        <h2>Hébergement prévu</h2>
        <p>
          Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis.{' '}
          <a href="https://vercel.com/legal/privacy-policy">Informations de l’hébergeur</a>. Cette
          mention doit être adaptée si un autre hébergeur est choisi.
        </p>
        <h2>Médiation de la consommation</h2>
        <p>
          {company.mediator.name ? (
            <>
              Médiateur désigné : {company.mediator.name}.{' '}
              <a href={company.mediator.url}>Modalités de saisine</a>.
            </>
          ) : (
            'Coordonnées du médiateur à compléter avant publication, après vérification de l’adhésion effective de l’entreprise.'
          )}
        </p>
        <h2>Prestations et devis</h2>
        <p>
          Les contenus présentent les prestations confirmées dans la configuration au moment de la
          publication. La faisabilité, le prix, le périmètre et la desserte doivent être précisés
          avant engagement. La demande en ligne ne constitue pas une commande.
        </p>
        <h2>Contenus et illustrations</h2>
        <p>
          Les photographies sont des illustrations générées par intelligence artificielle. Elles ne
          représentent pas des chantiers réalisés ni des membres de l’entreprise. Les contenus
          pédagogiques ne remplacent pas un diagnostic sur place.
        </p>
        <h2>Données géographiques</h2>
        <p>
          Communes et codes postaux :{' '}
          <a href="https://geo.api.gouv.fr/">API Géo du service public</a>, réutilisation selon les
          conditions de la source. Les données ne valent pas confirmation de desserte.
        </p>
      </article>
    </div>
  );
}
