import slugs from '@/data/article-slugs.json';
const known = new Set<string>(slugs);
export function safeArticleSlug(input: unknown): string | undefined {
  return typeof input === 'string' && known.has(input) ? input : undefined;
}
export function sourceFromPath(path: string) {
  const match = path.match(/^\/conseils\/([^/?#]+)\/?$/);
  return safeArticleSlug(match?.[1]);
}
