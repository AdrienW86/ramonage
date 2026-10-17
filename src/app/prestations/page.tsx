import { Breadcrumbs, CTA, ServiceCard } from '@/components/ui';
import { visibleServices } from '@/content/services';
import { metadata } from '@/lib/seo';
export const generateMetadata = () =>
  metadata(
    'Prestations de ramonage et débistrage',
    'Cheminées, poêles, inserts et conduits : découvrez les prestations et leur périmètre, à confirmer selon votre équipement.',
    '/prestations',
  );
export default function Page() {
  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ label: 'Prestations', href: '/prestations' }]} />
        <div className="page-intro">
          <p className="eyebrow">L’ENTRETIEN, DANS LE DÉTAIL</p>
          <h1>
            Un service adapté.
            <br />
            <em>À votre installation.</em>
          </h1>
          <p>
            Chaque appareil a ses particularités. Découvrez les méthodes, les points d’attention et
            les informations à réunir avant une intervention.
          </p>
        </div>
        <div className="service-grid" style={{ paddingBottom: 80 }}>
          {visibleServices().map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </div>
      <CTA />
    </>
  );
}
