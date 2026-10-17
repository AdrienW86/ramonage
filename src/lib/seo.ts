import type { Metadata } from 'next';
import { company, isPublicReady } from '@/config/company';
export function metadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: { index: isPublicReady(), follow: isPublicReady() },
    openGraph: {
      title,
      description,
      url: path,
      type: 'website',
      locale: 'fr_FR',
      siteName: company.name,
      images: [
        {
          url: '/images/hero.webp',
          width: 1600,
          height: 900,
          alt: 'Cheminée contemporaine — illustration',
        },
      ],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/hero.webp'] },
  };
}
export function businessSchema() {
  if (!isPublicReady()) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${company.url}/#entreprise`,
    name: company.name,
    legalName: company.legalName,
    url: company.url,
    telephone: company.phone,
    email: company.email,
    identifier: company.siret,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      postalCode: company.address.postalCode,
      addressLocality: company.address.city,
      addressCountry: 'FR',
    },
    sameAs: company.socialLinks.map((s) => s.url),
  };
}
export function breadcrumbSchema(items: { label: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((i, n) => ({
      '@type': 'ListItem',
      position: n + 1,
      name: i.label,
      item: new URL(i.href, company.url).href,
    })),
  };
}
