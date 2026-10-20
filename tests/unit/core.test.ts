import { describe, it, expect, vi, afterEach } from 'vitest';
import { communes, findCommunes, isLocalPublished, nearestCommunes, normalize } from '@/lib/geo';
import { quoteSchema } from '@/lib/quote-schema';
import { quoteEmail } from '@/lib/email';
import { configurationIssues, companySchema } from '@/config/company';
import { businessSchema, breadcrumbSchema, metadata } from '@/lib/seo';
import { publicRoutes } from '@/lib/public-routes';
import sitemap from '@/app/sitemap';
import robots from '@/app/robots';
import { services } from '@/content/services';
export const validQuote = {
  name: 'Test Validation',
  phone: '0612345678',
  email: 'test@example.org',
  commune: 'Perpignan',
  postalCode: '66000',
  installation: 'poele-bois',
  service: 'ramonage-poele-bois',
  message: 'Une demande de test.',
  consent: true,
  website: '',
  startedAt: Date.now() - 10000,
  requestId: 'a24b8054-dca5-420c-b11a-56d754d31a4c',
};
afterEach(() => {
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});
describe('Référentiel officiel', () => {
  it('contient les deux départements et des identifiants uniques', () => {
    expect(communes.length).toBe(659);
    expect(communes.filter((c) => c.department === '11')).toHaveLength(433);
    expect(communes.filter((c) => c.department === '66')).toHaveLength(226);
    expect(new Set(communes.map((c) => c.insee)).size).toBe(communes.length);
    expect(new Set(communes.map((c) => c.slug)).size).toBe(communes.length);
    for (const c of communes) {
      expect(c.insee).toMatch(/^\d{5}$/);
      expect(c.postalCodes.length).toBeGreaterThan(0);
      expect(c.postalCodes.every((p) => /^\d{5}$/.test(p))).toBe(true);
      expect(c.coordinates).toHaveLength(2);
    }
  });
  it('recherche sans accents, avec tirets ou par code postal', () => {
    expect(findCommunes('lezignan')[0].name).toBe('Lézignan-Corbières');
    expect(findCommunes('66000').some((c) => c.name === 'Perpignan')).toBe(true);
    expect(findCommunes('saint esteve')[0].name).toBe('Saint-Estève');
    expect(normalize('Cœur')).toBe('coeur');
    expect(findCommunes('inconnue')).toEqual([]);
  });
  it('ne publie aucune commune sans toutes les validations', () => {
    expect(communes.filter(isLocalPublished)).toEqual([]);
    const c = communes.find((c) => c.name === 'Perpignan')!;
    expect(
      isLocalPublished({
        ...c,
        coverageConfirmed: true,
        indexable: true,
        editorialStatus: 'publie',
      }),
    ).toBe(false);
    expect(nearestCommunes(c)).toHaveLength(6);
    expect(nearestCommunes(c).some((n) => n.insee === c.insee)).toBe(false);
  });
});
describe('Formulaire et confidentialité', () => {
  it('accepte une demande valide', () =>
    expect(quoteSchema.safeParse(validQuote).success).toBe(true));
  it.each(['email', 'phone', 'name', 'postalCode', 'installation', 'service'] as const)(
    'refuse un champ %s vide',
    (field) => expect(quoteSchema.safeParse({ ...validQuote, [field]: '' }).success).toBe(false),
  );
  it('refuse une demande sans accord ou trop longue', () => {
    expect(quoteSchema.safeParse({ ...validQuote, consent: false }).success).toBe(false);
    expect(quoteSchema.safeParse({ ...validQuote, message: 'a'.repeat(4001) }).success).toBe(false);
  });
  it('échappe les entrées utilisateur dans l’email', () => {
    const email = quoteEmail({
      ...validQuote,
      name: '<img src=x onerror=alert(1)>',
      installation: 'poele-bois',
    });
    expect(email.html).not.toContain('<img');
    expect(email.html).toContain('&lt;img');
    expect(email.text).toContain('Perpignan');
  });
});
describe('Publication et SEO', () => {
  it('bloque la configuration commerciale incomplète', () => {
    expect(configurationIssues().length).toBeGreaterThan(5);
    expect(companySchema.safeParse({}).success).toBe(false);
  });
  it('refuse un SIRET dont la clé de contrôle est fausse', () => {
    const siret = companySchema.shape.siret;
    expect(siret.safeParse('83479975100013').success).toBe(true);
    expect(siret.safeParse('83479975100014').success).toBe(false);
  });
  it('exclut les brouillons du sitemap et désactive l’indexation', () => {
    expect(publicRoutes()).toEqual([]);
    expect(sitemap()).toEqual([]);
    expect(robots().rules).toEqual({ userAgent: '*', disallow: '/' });
    expect(metadata('Titre', 'Description', '/').robots).toEqual({ index: false, follow: false });
  });
  it('ne produit pas d’établissement fictif et fournit un fil d’Ariane', () => {
    expect(businessSchema()).toBeNull();
    const b = breadcrumbSchema([
      { label: 'Accueil', href: '/' },
      { label: 'Prestations', href: '/prestations' },
    ]);
    expect(b.itemListElement[1].position).toBe(2);
    expect(b.itemListElement[1].item).toBe('https://ramonage-roussillon.fr/prestations');
  });
  it('mutualise les synonymes et conserve huit prestations complètes', () => {
    expect(services).toHaveLength(8);
    for (const s of services) {
      expect(s.steps.length).toBe(4);
      expect(s.faq.length).toBeGreaterThan(1);
      expect(s.safety.length).toBeGreaterThan(60);
    }
    expect(new Set(services.map((s) => s.slug)).size).toBe(8);
  });
});
