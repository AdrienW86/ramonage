import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { company, isPreview } from '@/config/company';
import { Header } from '@/components/navigation';
import { Brand, JsonLd } from '@/components/ui';
import { AnalyticsConsent } from '@/components/analytics';
import { businessSchema } from '@/lib/seo';
import '@/styles/globals.css';
export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: 'Ramonage dans l’Aude et les Pyrénées-Orientales',
    template: `%s | ${company.name}`,
  },
  description: company.description,
  robots: { index: !isPreview(), follow: !isPreview() },
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <a href="#contenu" className="skip-link">
          Aller au contenu
        </a>
        {isPreview() && (
          <div className="preview-bar">
            VERSION DE PRÉPARATION{' '}
            <span>· Identité, prestations et desserte à confirmer · Non indexable</span>
          </div>
        )}
        <Header
          name={company.name}
          phone={company.commercial.callsEnabled ? company.phone : ''}
          logo={company.logo}
        />
        <main id="contenu">{children}</main>
        <footer>
          <div className="footer-top">
            <div>
              <Link href="/">
                <Brand name={company.name} />
              </Link>
              <p>
                Le soin du conduit.
                <br />
                La sérénité du foyer.
              </p>
            </div>
            <div>
              <h2>Explorer</h2>
              <Link href="/prestations">Les prestations</Link>
              <Link href="/a-propos">Notre approche</Link>
              <Link href="/conseils">Conseils & guides</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div>
              <h2>Nos territoires</h2>
              <Link href="/ramonage/aude">L’Aude · 11</Link>
              <Link href="/ramonage/pyrenees-orientales">Les Pyrénées-Orientales · 66</Link>
              <Link href="/zones-intervention">Toutes les communes</Link>
              <p className="muted">Couverture à confirmer selon commune.</p>
            </div>
            <div>
              <h2>Parlons de votre projet</h2>
              {company.phone && (
                <a href={`tel:${company.phone.replace(/[^+\d]/g, '')}`} data-track="clic_telephone">
                  {company.phone}
                </a>
              )}
              {company.email && (
                <a href={`mailto:${company.email}`} data-track="clic_email">
                  {company.email}
                </a>
              )}
              <Link href="/devis" data-track="clic_devis">
                Préparer ma demande <ArrowUpRight size={16} />
              </Link>
              {company.commercial.showHours &&
                company.hours.map((h) => (
                  <p key={h.day}>
                    {h.day} : {h.opens} – {h.closes}
                  </p>
                ))}
              {company.socialLinks.map((s) => (
                <a key={s.url} href={s.url}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} {company.name}
            </span>
            <div>
              <Link href="/mentions-legales">Mentions légales</Link>
              <Link href="/confidentialite">Confidentialité</Link>
            </div>
            <span>Photographies d’illustration générées par IA</span>
          </div>
        </footer>
        <AnalyticsConsent />
        <JsonLd data={businessSchema()} />
      </body>
    </html>
  );
}
