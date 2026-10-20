import { notFound } from 'next/navigation';
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
  if (isPreview()) notFound();
  return (
    <div className="container">
      <Breadcrumbs items={[{ label: 'Mentions légales', href: '/mentions-legales' }]} />
      <div className="page-intro">
        <h1>Mentions légales.</h1>
      </div>
      <article className="prose" style={{ maxWidth: 800, paddingBottom: 80 }}>
        <h2>Éditeur du site</h2>
        <p>
          Nom commercial : {company.name}
          <br />
          Exploitant : {company.legalName}
          <br />
          Forme juridique : {company.legalStatus}
          <br />
          SIREN : {company.siren}
          <br />
          SIRET : {company.siret}
          <br />
          Adresse :{' '}
          {`${company.address.street}, ${company.address.postalCode} ${company.address.city}, ${company.address.country}`}
          <br />
          Téléphone : {company.phone}
          <br />
          Email : {company.email}
          <br />
          Directeur de publication : {company.publishingDirector}
        </p>
        <h2>Hébergement</h2>
        <p>
          {company.hosting.name}, {company.hosting.address}.{' '}
          <a href={company.hosting.url}>Contacter l’hébergeur</a>.
        </p>
        <h2>Médiation de la consommation</h2>
        <p>
          Médiateur désigné : {company.mediator.name}.{' '}
          <a href={company.mediator.url}>Modalités de saisine</a>.
        </p>
        <h2>Prestations et devis</h2>
        <p>
          Les contenus présentent les prestations confirmées dans la configuration au moment de la
          publication. La faisabilité, le prix, le périmètre et la desserte doivent être précisés
          avant engagement. La demande en ligne ne constitue pas une commande. Après chaque
          ramonage, une attestation est remise dans les quinze jours ouvrés, conformément à
          l’article R1331-75 du Code de la santé publique.
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
