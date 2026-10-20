import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { breadcrumbSchema } from '@/lib/seo';
import type { Service } from '@/content/services';
import { canRequestQuote } from '@/config/company';

export function JsonLd({ data }: { data: object | null }) {
  return data ? (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  ) : null;
}
export function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  const all = [{ label: 'Accueil', href: '/' }, ...items];
  return (
    <>
      <nav aria-label="Fil d’Ariane" className="breadcrumbs">
        {all.map((x, i) => (
          <span key={x.href}>
            {i > 0 && <span aria-hidden="true"> / </span>}
            <Link href={x.href} aria-current={i === all.length - 1 ? 'page' : undefined}>
              {x.label}
            </Link>
          </span>
        ))}
      </nav>
      <JsonLd data={breadcrumbSchema(all)} />
    </>
  );
}
export function CTA({
  label = 'Parlons de votre installation',
  text = 'Un appareil, un conduit, une question. Préparez votre demande en quelques minutes.',
  href = '/devis',
}: {
  label?: string;
  text?: string;
  href?: string;
}) {
  const enabled = canRequestQuote();
  return (
    <section className="cta">
      <div>
        <p className="eyebrow">LE BON GESTE COMMENCE ICI</p>
        <h2>{enabled ? label : 'Les repères pour votre installation'}</h2>
        <p>
          {enabled
            ? text
            : 'Obligations, entretien et sécurité : retrouvez les réponses documentées dans les guides.'}
        </p>
      </div>
      <Link
        className="button cream"
        href={enabled ? href : '/conseils'}
        data-track={enabled ? 'clic_devis' : undefined}
      >
        {enabled ? 'Demander un devis' : 'Explorer les guides'} <ArrowUpRight size={18} />
      </Link>
    </section>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq">
      {items.map((i) => (
        <details key={i.q}>
          <summary>
            {i.q}
            <span aria-hidden="true">+</span>
          </summary>
          <p>{i.a}</p>
        </details>
      ))}
    </div>
  );
}
export function Photo({
  name,
  alt,
  className = '',
  priority = false,
  sizes = '(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 760px',
}: {
  name: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`photo ${className}`}>
      <Image
        src={`/images/${name}.webp`}
        alt={alt}
        fill
        sizes={sizes}
        preload={priority}
        fetchPriority={priority ? 'high' : undefined}
        style={{ objectFit: 'cover' }}
      />
      <span className="image-note">Visuel d’illustration · IA</span>
    </div>
  );
}
export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  return (
    <Link href={`/prestations/${service.slug}`} className="service-card">
      <Photo name={service.image} alt={service.alt} sizes="(max-width: 980px) 45vw, 23vw" />
      <div className="service-card-content">
        <div className="card-top">
          <span className="eyebrow">
            {String(index + 1).padStart(2, '0')} / {service.category}
          </span>
          <ArrowUpRight size={22} />
        </div>
        <h3>{service.short}</h3>
        <p>{service.description}</p>
      </div>
    </Link>
  );
}
export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="checklist">
      {items.map((i) => (
        <li key={i}>
          <Check size={17} aria-hidden="true" />
          {i}
        </li>
      ))}
    </ul>
  );
}
export { Brand } from './brand';
