import Link from 'next/link';
import { Breadcrumbs, CTA } from '@/components/ui';
import { company } from '@/config/company';
import { metadata } from '@/lib/seo';
export const generateMetadata = () =>
  metadata(
    'Contact',
    'Retrouvez les moyens de contact et préparez une demande de devis pour votre appareil ou votre conduit.',
    '/contact',
  );
export default function Page() {
  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ label: 'Contact', href: '/contact' }]} />
        <div className="page-intro">
          <p className="eyebrow">FAISONS LE POINT</p>
          <h1>
            Un premier échange.
            <br />
            <em>Un besoin mieux défini.</em>
          </h1>
          <p>
            Précisez votre appareil et votre commune. La prestation, la desserte et les conditions
            seront à confirmer avant tout rendez-vous.
          </p>
        </div>
        <div className="contact-options">
          <div>
            <h2>Par téléphone</h2>
            {company.phone ? (
              <a href={`tel:${company.phone.replace(/[^+\d]/g, '')}`} data-track="clic_telephone">
                {company.phone}
              </a>
            ) : (
              <p>Téléphone à renseigner avant ouverture du site.</p>
            )}
          </div>
          <div>
            <h2>Par email</h2>
            {company.email ? (
              <a href={`mailto:${company.email}`} data-track="clic_email">
                {company.email}
              </a>
            ) : (
              <p>Email à renseigner avant ouverture du site.</p>
            )}
          </div>
          <div>
            <h2>Votre demande</h2>
            <Link className="text-link" href="/devis" data-track="clic_devis">
              Préparer un devis ↗
            </Link>
          </div>
        </div>
        <section className="prose" style={{ paddingBottom: 70 }}>
          <h2>Votre installation, en quelques mots</h2>
          <p>
            Indiquez le type de foyer, la marque si vous la connaissez, le combustible et la date du
            dernier entretien. Signalez les accès particuliers sans prendre de risque pour les
            inspecter.
          </p>
          <h2>Adresse et horaires</h2>
          <p>
            {company.address.street
              ? `${company.address.street}, ${company.address.postalCode} ${company.address.city}`
              : 'Adresse professionnelle à compléter. Aucun accueil physique n’est annoncé.'}
          </p>
          {company.commercial.showHours && company.hours.length ? (
            company.hours.map((h) => (
              <p key={h.day}>
                {h.day} : {h.opens} – {h.closes}
              </p>
            ))
          ) : (
            <p>Horaires non encore confirmés.</p>
          )}
        </section>
      </div>
      <CTA />
    </>
  );
}
