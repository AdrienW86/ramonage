import { it, expect, vi, afterEach } from 'vitest';
import { rateLimit } from '@/lib/rate-limit';
afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});
it('limite les demandes au-delà du quota Redis partagé', async () => {
  vi.stubEnv('RATE_LIMIT_REST_URL', 'https://redis.invalid');
  vi.stubEnv('RATE_LIMIT_REST_TOKEN', 'test-only');
  vi.stubGlobal(
    'fetch',
    vi.fn(async () => Response.json({ result: 6 })),
  );
  expect(await rateLimit('192.0.2.1')).toBe(false);
});
it('refuse l’envoi si Redis est indisponible', async () => {
  vi.stubEnv('RATE_LIMIT_REST_URL', 'https://redis.invalid');
  vi.stubEnv('RATE_LIMIT_REST_TOKEN', 'test-only');
  vi.stubGlobal(
    'fetch',
    vi.fn(async () => new Response(null, { status: 503 })),
  );
  await expect(rateLimit('192.0.2.1')).rejects.toThrow('unavailable');
});
it('interdit le fallback mémoire en production', async () => {
  vi.stubEnv('NODE_ENV', 'production');
  vi.stubEnv('RATE_LIMIT_REST_URL', '');
  vi.stubEnv('RATE_LIMIT_REST_TOKEN', '');
  await expect(rateLimit('192.0.2.1')).rejects.toThrow('required');
});
it('autorise cinq demandes de développement puis bloque la sixième', async () => {
  vi.stubEnv('NODE_ENV', 'development');
  vi.stubEnv('RATE_LIMIT_REST_URL', '');
  vi.stubEnv('RATE_LIMIT_REST_TOKEN', '');
  for (let i = 0; i < 5; i++) expect(await rateLimit('192.0.2.2')).toBe(true);
  expect(await rateLimit('192.0.2.2')).toBe(false);
});
