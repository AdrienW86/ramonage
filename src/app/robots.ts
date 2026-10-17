import type { MetadataRoute } from 'next';
import { company, isPreview } from '@/config/company';
export default function robots(): MetadataRoute.Robots {
  return isPreview()
    ? { rules: { userAgent: '*', disallow: '/' } }
    : {
        rules: {
          userAgent: '*',
          allow: '/',
          disallow: ['/api/', '/devis', '/zones-intervention?'],
        },
        sitemap: `${company.url}/sitemap.xml`,
      };
}
