import Link from 'next/link';
import { Breadcrumbs, CTA } from '@/components/ui';
import { company, isPublicReady } from '@/config/company';
import { ContactForm } from '@/components/contact-form';
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
            Les bonnes questions.
            <br />
            <em>Un besoin mieux défini.</em>
          </h1>
          <p>
            Décrivez votre besoin dans le formulaire ci-dessous, ou contactez-nous par téléphone.
          </p>
        </div>
        <div className="contact-options">
          {company.phone && (
            <div>
              <h2>Par téléphone</h2>
              <a href={`tel:${company.phone.replace(/[^+\d]/g, '')}`}>{company.phone}</a>
            </div>
          )}
          {company.email && (
            <div>
              <h2>Par email</h2>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </div>
          )}
          <div>
            <h2>Comprendre votre besoin</h2>
            <Link href="/questions-frequentes">Consulter les questions fréquentes ↗</Link>
          </div>
        </div>
        <section className="quote-layout" style={{ paddingBottom: 80 }} aria-label="Nous écrire">
          <div>
            <p className="eyebrow">UN CONTACT SIMPLE ET PERSONNALISÉ</p>
            <h2 style={{ fontSize: 36, marginBottom: 25 }}>Écrivez-nous.</h2>
            <ContactForm enabled={isPublicReady() && company.commercial.formEnabled && !!process.env.RESEND_API_KEY && !!process.env.RESEND_FROM && !!company.quoteRecipient && !!process.env.RATE_LIMIT_REST_URL && !!process.env.RATE_LIMIT_REST_TOKEN} />
          </div>
          <aside className="aside-card">
            <p className="eyebrow">À VOTRE ÉCOUTE</p>
            <h2>Chaque installation est différente.</h2>
            <p>Indiquez le type d’appareil, la commune et les détails utiles. Vous pouvez également nous joindre par téléphone.</p>
            {company.phone && <a href={'tel:' + company.phone.replace(/[^+\d]/g, '')}>{company.phone}</a>}
          </aside>
        </section>
        <section className="prose" style={{ paddingBottom: 70 }}>
          <h2>Votre installation, en quelques mots</h2>
          <p>
            Indiquez le type de foyer, la marque si vous la connaissez, le combustible et la date du
            dernier entretien. Signalez les accès particuliers sans prendre de risque pour les
            inspecter.
          </p>
          {company.address.street && (
            <>
              <h2>Adresse professionnelle</h2>
              <p>
                {company.address.street}, {company.address.postalCode} {company.address.city}
              </p>
            </>
          )}
          {company.commercial.showHours &&
            company.hours.map((h) => (
              <p key={h.day}>
                {h.day} : {h.opens} – {h.closes}
              </p>
            ))}
        </section>
      </div>
      <CTA />
    </>
  );
}
