import { z } from 'zod';

// Source unique des informations publiques : aucune coordonnée n'est recopiée dans les
// composants ni stockée en variable d'environnement. Une chaîne vide signale une donnée
// non confirmée : elle n'est pas affichée et maintient le site en prévisualisation.
const siret = '83479975100013';
export const company = {
  name: 'Ramonage Roussillon',
  legalName: 'ROBLES Grégory',
  legalStatus: 'Entrepreneur individuel (EI)',
  siren: siret.slice(0, 9),
  siret,
  logo: null as string | null,
  description: 'Guides sur le ramonage, l’entretien des appareils et la sécurité des conduits.',
  url: 'https://ramonage-roussillon.fr',
  phone: '06 62 12 56 11',
  // À confirmer : adresse professionnelle propre à Ramonage Roussillon.
  email: '',
  address: {
    street: '5 Rue du Moulinas',
    postalCode: '66330',
    city: 'Cabestany',
    country: 'France',
  },
  hours: [] as { day: string; opens: string; closes: string }[],
  departments: ['11', '66'],
  priorityCities: ['Perpignan', 'Narbonne'],
  socialLinks: [] as { label: string; url: string }[],
  // À confirmer : slugs de src/content/services.ts réellement exercés.
  services: [] as string[],
  commercial: {
    // Le formulaire dépend des secrets Resend et Redis : il reste piloté par l'environnement.
    formEnabled: process.env.NEXT_PUBLIC_QUOTE_ENABLED === 'true',
    showHours: false,
    callsEnabled: true,
  },
  quoteRecipient: process.env.QUOTE_TO || '',
  // Adresse vérifiée dans les conditions d'utilisation de Vercel (section 23.3.4).
  hosting: {
    name: 'Vercel Inc.',
    address: '440 N Barranca Ave #4133, Covina, CA 91723, États-Unis',
    url: 'https://vercel.com',
  },
  // À confirmer par le responsable du traitement.
  privacyRetention: '',
  publishingDirector: 'Grégory Robles',
  // À confirmer : uniquement un médiateur auquel l'entreprise adhère.
  mediator: { name: '', url: '' },
  // Passer à true seulement après relecture complète des informations et textes légaux.
  publishingApproved: false as boolean,
};
const required = z
  .string()
  .trim()
  .min(2)
  .refine(
    (s) => !/(à définir|à compléter|placeholder|example|exemple|test|fictif)/i.test(s),
    'Valeur provisoire interdite',
  );
// Clé de Luhn du SIRET : écarte une saisie erronée avant publication.
function luhn(s: string) {
  const sum = [...s].reverse().reduce((t, c, i) => {
    const d = Number(c) * (i % 2 ? 2 : 1);
    return t + (d > 9 ? d - 9 : d);
  }, 0);
  return sum % 10 === 0;
}
export const companySchema = z.object({
  name: required,
  legalName: required,
  legalStatus: required,
  siret: z
    .string()
    .regex(/^\d{14}$/)
    .refine(luhn, 'SIRET invalide (clé de contrôle)'),
  url: z
    .url()
    .refine(
      (s) => s.startsWith('https://') && !/(localhost|example\.|exemple\.)/.test(s),
      'Domaine HTTPS réel requis',
    ),
  phone: z.string().regex(/^\+?[\d\s().-]{10,20}$/),
  email: z.email(),
  address: z.object({ street: required, postalCode: z.string().regex(/^\d{5}$/), city: required }),
  hosting: z.object({ name: required, address: required, url: z.url() }),
  privacyRetention: required,
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

export const siteTitle = company.name || 'Le soin du conduit';
export const canRequestQuote = () => isPublicReady() && company.commercial.formEnabled;
