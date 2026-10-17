import { z } from 'zod';

// Source unique : aucune coordonnée n'est recopiée dans les composants.
export const company = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME || 'Nom commercial à définir',
  legalName: process.env.COMPANY_LEGAL_NAME || '',
  legalStatus: process.env.COMPANY_LEGAL_STATUS || '',
  siren: process.env.COMPANY_SIRET?.slice(0, 9) || '',
  siret: process.env.COMPANY_SIRET || '',
  logo: null as string | null,
  description: 'Ramonage et entretien des conduits dans l’Aude et les Pyrénées-Orientales.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  phone: process.env.NEXT_PUBLIC_PHONE || '',
  email: process.env.NEXT_PUBLIC_EMAIL || '',
  address: {
    street: process.env.COMPANY_STREET || '',
    postalCode: process.env.COMPANY_POSTAL_CODE || '',
    city: process.env.COMPANY_CITY || '',
  },
  hours: [] as { day: string; opens: string; closes: string }[],
  departments: ['11', '66'],
  priorityCities: ['Perpignan', 'Narbonne'],
  socialLinks: [] as { label: string; url: string }[],
  services: (process.env.CONFIRMED_SERVICES || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean),
  commercial: {
    formEnabled: process.env.NEXT_PUBLIC_QUOTE_ENABLED === 'true',
    showHours: false,
    callsEnabled: !!process.env.NEXT_PUBLIC_PHONE,
  },
  quoteRecipient: process.env.QUOTE_TO || '',
  publishingDirector: process.env.COMPANY_PUBLISHING_DIRECTOR || '',
  mediator: {
    name: process.env.COMPANY_MEDIATOR_NAME || '',
    url: process.env.COMPANY_MEDIATOR_URL || '',
  },
  publishingApproved: process.env.PUBLISHING_APPROVED === 'true',
};
const required = z
  .string()
  .trim()
  .min(2)
  .refine(
    (s) => !/(à définir|à compléter|placeholder|example|exemple|test|fictif)/i.test(s),
    'Valeur provisoire interdite',
  );
export const companySchema = z.object({
  name: required,
  legalName: required,
  legalStatus: required,
  siret: z.string().regex(/^\d{14}$/),
  url: z
    .url()
    .refine(
      (s) => s.startsWith('https://') && !/(localhost|example\.|exemple\.)/.test(s),
      'Domaine HTTPS réel requis',
    ),
  phone: z.string().regex(/^\+?[\d\s().-]{10,20}$/),
  email: z.email(),
  address: z.object({ street: required, postalCode: z.string().regex(/^\d{5}$/), city: required }),
  publishingDirector: required,
  mediator: z.object({ name: required, url: z.url() }),
  publishingApproved: z.literal(true),
  services: z.array(z.string()).min(1),
});
export function configurationIssues() {
  return (
    companySchema
      .safeParse(company)
      .error?.issues.map((i) => `${i.path.join('.')} : ${i.message}`) ?? []
  );
}
export const isPublicReady = () => configurationIssues().length === 0;
export const isPreview = () => !isPublicReady();
