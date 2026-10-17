import { Breadcrumbs, CheckList } from '@/components/ui';
import { QuoteForm } from '@/components/quote-form';
import { company, isPublicReady } from '@/config/company';
import { visibleServices } from '@/content/services';
import { metadata } from '@/lib/seo';
import { safeArticleSlug } from '@/lib/article-attribution';
export const generateMetadata = () => ({
  ...metadata(
    'Demande de devis',
    'Précisez votre commune, votre installation et votre besoin pour préparer une demande de devis.',
    '/devis',
  ),
  robots: { index: false, follow: true },
});
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    commune?: string;
    codePostal?: string;
    prestation?: string;
    article?: string;
  }>;
}) {
  const q = await searchParams;
  const enabled =
    company.commercial.formEnabled &&
    isPublicReady() &&
    !!process.env.RESEND_API_KEY &&
    !!process.env.RESEND_FROM &&
    !!company.quoteRecipient &&
    !!process.env.RATE_LIMIT_REST_URL &&
    !!process.env.RATE_LIMIT_REST_TOKEN;
  return (
    <div className="container">
      <Breadcrumbs items={[{ label: 'Demande de devis', href: '/devis' }]} />
      <div className="page-intro">
        <p className="eyebrow">VOTRE INSTALLATION MÉRITE DE L’ATTENTION</p>
        <h1>
          Parlons de
          <br />
          <em>votre besoin.</em>
        </h1>
        <p>
          Quelques informations pour comprendre votre demande. La prestation, la desserte et les
          conditions d’intervention seront confirmées avant tout engagement.
        </p>
      </div>
      <div className="quote-layout">
        <QuoteForm
          sourceArticle={safeArticleSlug(q.article)}
          service={visibleServices().some((s) => s.slug === q.prestation) ? q.prestation : ''}
          commune={typeof q.commune === 'string' ? q.commune.slice(0, 100) : ''}
          postalCode={typeof q.codePostal === 'string' ? q.codePostal.slice(0, 5) : ''}
          enabled={enabled}
          options={visibleServices().map((s) => ({ slug: s.slug, title: s.title }))}
        />
        <aside className="aside-card">
          <p className="eyebrow">POUR UNE DEMANDE PRÉCISE</p>
          <h2>Les informations utiles.</h2>
          <CheckList
            items={[
              'Le type et le modèle de votre appareil',
              'Le combustible utilisé',
              'La date du dernier entretien connu',
              'Les accès et contraintes éventuels',
              'Les signes inhabituels constatés',
            ]}
          />
          <p>
            Ne montez pas sur le toit et ne démontez pas votre appareil pour compléter cette
            demande.
          </p>
          {company.phone && (
            <a data-track="clic_telephone" href={`tel:${company.phone.replace(/[^+\d]/g, '')}`}>
              {company.phone}
            </a>
          )}
        </aside>
      </div>
    </div>
  );
}
