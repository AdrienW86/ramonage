import { createHash } from 'node:crypto';
const local = new Map<string, { count: number; until: number }>();
// Redis partagé : incrément et expiration atomiques, aucune IP stockée en clair.
export async function rateLimit(ip: string): Promise<boolean> {
  const key = 'quote:' + createHash('sha256').update(ip).digest('hex');
  const url = process.env.RATE_LIMIT_REST_URL,
    token = process.env.RATE_LIMIT_REST_TOKEN;
  if (url && token) {
    const script =
      "local c=redis.call('INCR',KEYS[1]); if c==1 then redis.call('EXPIRE',KEYS[1],900) end; return c";
    const response = await fetch(url, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(['EVAL', script, '1', key]),
      signal: AbortSignal.timeout(5000),
      cache: 'no-store',
    });
    if (!response.ok) throw new Error('Rate limiter unavailable');
    const result = await response.json();
    if (result.error || typeof result.result !== 'number')
      throw new Error('Rate limiter unavailable');
    return result.result <= 5;
  }
  if (process.env.NODE_ENV === 'production') throw new Error('Shared rate limiter required');
  const now = Date.now();
  for (const [k, v] of local) if (v.until < now) local.delete(k);
  const record = local.get(key);
  if (!record) {
    local.set(key, { count: 1, until: now + 900000 });
    return true;
  }
  return ++record.count <= 5;
}
