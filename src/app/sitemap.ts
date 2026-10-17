import type { MetadataRoute } from 'next';
import { company } from '@/config/company';
import { publicRoutes } from '@/lib/public-routes';
export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes().map((path) => ({ url: new URL(path, company.url).href }));
}
