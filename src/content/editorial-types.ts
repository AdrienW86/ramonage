import guideImages from '@/data/guide-images.json';
export const categories = [
  {
    slug: 'reglementation',
    name: 'Réglementation et obligations',
    description: 'Fréquences, responsabilités et documents à conserver.',
  },
  {
    slug: 'ramonage-entretien',
    name: 'Ramonage et entretien',
    description: 'Préparer et comprendre les interventions sur les conduits.',
  },
  {
    slug: 'bistre-debistrage',
    name: 'Bistre et débistrage',
    description: 'Dépôts tenaces, limites du diagnostic et prise en charge.',
  },
  {
    slug: 'poeles',
    name: 'Poêles à bois et granulés',
    description: 'Distinguer les gestes utilisateur des opérations professionnelles.',
  },
  {
    slug: 'cheminees-inserts',
    name: 'Cheminées et inserts',
    description: 'Tirage, fumées et usage du foyer au quotidien.',
  },
  {
    slug: 'securite',
    name: 'Sécurité et prévention',
    description: 'Signaux d’alerte, incendie et monoxyde de carbone.',
  },
  {
    slug: 'questions-pratiques',
    name: 'Tarifs et questions pratiques',
    description: 'Comparer les devis sans tarif ni délai inventé.',
  },
] as const;
export type Category = (typeof categories)[number]['slug'];
export type GuideStatus = 'brouillon' | 'a-enrichir' | 'valide' | 'publie';
export type VerifiedAuthor = { name: string; role: string; verified: true; profileUrl?: string };
export type Guide = {
  slug: string;
  title: string;
  description: string;
  intent: string;
  category: Category;
  image: string;
  imageAlt: string;
  intro: string;
  sections: { title: string; text: string; sourceKeys?: string[] }[];
  example: { title: string; text: string };
  faq: { q: string; a: string; sourceKeys: string[] }[];
  sourceKeys: string[];
  relatedGuides: string[];
  relatedServices: string[];
  status: GuideStatus;
  author: VerifiedAuthor | null;
  datePublished: string | null;
  dateVerified: string | null;
  verificationNote: string;
  featured: boolean;
  cta: string;
};
export type GuideInput = Omit<
  Guide,
  | 'image'
  | 'imageAlt'
  | 'description'
  | 'author'
  | 'datePublished'
  | 'dateVerified'
  | 'verificationNote'
  | 'featured'
  | 'cta'
  | 'status'
> &
  Partial<
    Pick<
      Guide,
      | 'imageAlt'
      | 'description'
      | 'author'
      | 'datePublished'
      | 'dateVerified'
      | 'verificationNote'
      | 'featured'
      | 'cta'
      | 'status'
    >
  >;
export function defineGuide(input: GuideInput): Guide {
  const status = input.status ?? 'valide';
  return {
    description:
      input.intro.length <= 160
        ? input.intro
        : input.intro.slice(0, 156).replace(/\s+\S*$/, '') + '…',
    author: null,
    datePublished: null,
    dateVerified: null,
    verificationNote:
      status === 'valide'
        ? 'Synthèse documentaire assistée par IA, vérifiée sur les sources indiquées. Relecture et attribution à un auteur réel requises avant publication.'
        : 'Vérification incomplète. Ce brouillon ne doit pas être publié.',
    featured: false,
    cta: 'Préparer une demande adaptée à votre installation',
    status,
    ...input,
    image: `guides/${input.slug}`,
    imageAlt: guideImages.find((image) => image.slug === input.slug)?.alt ?? input.title,
  };
}
