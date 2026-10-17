import { findCommunes, isLocalPublished } from '@/lib/geo';
export async function GET(req: Request) {
  const query = new URL(req.url).searchParams.get('q')?.slice(0, 80) || '';
  return Response.json(
    query.trim().length < 2
      ? []
      : findCommunes(query)
          .slice(0, 8)
          .map((c) => ({
            name: c.name,
            slug: c.slug,
            postalCodes: c.postalCodes,
            department: c.department,
            coverageConfirmed: c.coverageConfirmed,
            published: isLocalPublished(c),
          })),
    { headers: { 'Cache-Control': 'public, max-age=3600' } },
  );
}
