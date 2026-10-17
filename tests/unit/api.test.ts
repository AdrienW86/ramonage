import { it, expect, vi, afterEach } from 'vitest';
import { POST } from '@/app/api/devis/route';
import { GET } from '@/app/api/communes/route';
import { quoteSchema } from '@/lib/quote-schema';
import { company } from '@/config/company';
import { businessSchema } from '@/lib/seo';
import { publicRoutes } from '@/lib/public-routes';
vi.mock('resend', () => ({
  Resend: class {
    emails = { send: vi.fn(async () => ({ data: { id: 'mail-test-id' }, error: null })) };
  },
}));
const q = {
  name: 'Test',
  phone: '0612345678',
  email: 'test@example.org',
  commune: 'Perpignan',
  postalCode: '66000',
  installation: 'poele-bois',
  service: 'ramonage-poele-bois',
  message: '',
  consent: true,
  website: '',
  startedAt: Date.now() - 10000,
  requestId: 'a24b8054-dca5-420c-b11a-56d754d31a4c',
};
const request = (payload: unknown, origin = 'http://localhost:3000') =>
  new Request('http://localhost:3000/api/devis', {
    method: 'POST',
    headers: { origin, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
afterEach(() => {
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});
it('refuse une origine étrangère', async () =>
  expect((await POST(request(q, 'https://other.invalid'))).status).toBe(403));
it('refuse les champs invalides côté serveur', async () =>
  expect((await POST(request({ ...q, email: 'invalide' }))).status).toBe(400));
it('refuse le piège anti-spam', async () =>
  expect((await POST(request({ ...q, website: 'spam' }))).status).toBe(400));
it('refuse les envois trop rapides', async () =>
  expect((await POST(request({ ...q, startedAt: Date.now() }))).status).toBe(400));
it('refuse une commune avec un mauvais code postal', async () =>
  expect((await POST(request({ ...q, postalCode: '75001' }))).status).toBe(400));
it('ne simule pas un envoi lorsque le service n’est pas configuré', async () => {
  const r = await POST(request(q));
  expect(r.status).toBe(503);
  expect((await r.json()).ok).toBe(false);
});
it('refuse les corps trop volumineux sans Content-Length', async () =>
  expect((await POST(request({ ...q, message: 'x'.repeat(25000) }))).status).toBe(413));
it('limite la recherche de communes et ne divulgue pas de données inutiles', async () => {
  const r = await GET(new Request('http://localhost:3000/api/communes?q=66'));
  const data = await r.json();
  expect(data.length).toBeLessThanOrEqual(8);
  expect(data[0]).not.toHaveProperty('coordinates');
  expect(data.every((c: { published: boolean }) => !c.published)).toBe(true);
});
it('confirme le contrat de validation partagé', () =>
  expect(quoteSchema.safeParse(q).success).toBe(true));
it('teste le succès Resend avec des dépendances simulées uniquement', async () => {
  const original = structuredClone(company);
  Object.assign(company, {
    name: 'Entreprise validée',
    legalName: 'Entreprise validée',
    legalStatus: 'EI',
    siret: '12345678901234',
    url: 'https://ramonage-domaine.fr',
    phone: '0612345678',
    email: 'contact@ramonage-domaine.fr',
    address: { street: 'Adresse validée', postalCode: '66000', city: 'Perpignan' },
    publishingDirector: 'Direction validée',
    mediator: { name: 'Médiateur validé', url: 'https://mediateur.fr' },
    publishingApproved: true,
    services: ['ramonage-poele-bois'],
    quoteRecipient: 'contact@ramonage-domaine.fr',
    commercial: { ...company.commercial, formEnabled: true },
  });
  vi.stubEnv('RESEND_API_KEY', 'mock-key');
  vi.stubEnv('RESEND_FROM', 'site@ramonage-domaine.fr');
  vi.stubEnv('RATE_LIMIT_REST_URL', 'https://redis.invalid');
  vi.stubEnv('RATE_LIMIT_REST_TOKEN', 'mock-token');
  vi.stubGlobal(
    'fetch',
    vi.fn(async () => Response.json({ result: 1 })),
  );
  try {
    const res = await POST(request(q, 'https://ramonage-domaine.fr'));
    expect(res.status).toBe(200);
    expect((await res.json()).ok).toBe(true);
    expect(businessSchema()?.name).toBe('Entreprise validée');
    expect(publicRoutes()).toContain('/prestations/ramonage-poele-bois');
    expect(publicRoutes()).not.toContain('/prestations/ramonage-chaudiere');
    expect(publicRoutes()).not.toContain('/ramonage/perpignan');
  } finally {
    Object.assign(company, original);
    vi.unstubAllGlobals();
  }
});
