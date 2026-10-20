import Link from 'next/link';
import { visibleGuides } from '@/lib/editorial';
export function RelatedResources({
  service,
  department,
}: {
  service?: string;
  department?: string;
}) {
  const candidates = visibleGuides();
  const chosen = department
    ? [
        `reglementation-${department === '11' ? 'aude' : 'pyrenees-orientales'}`,
        'obligations-et-frequence',
        'attestation-ramonage',
      ]
    : candidates
        .filter((g) => !service || g.relatedServices.includes(service))
        .slice(0, 3)
        .map((g) => g.slug);
  const list = chosen.map((slug) => candidates.find((g) => g.slug === slug)).filter((g) => !!g);
  return (
    <section className="related-reading">
      <h2>Des repères pour votre demande</h2>
      {list.length > 0 && (
        <ul>
          {list.map((g) => (
            <li key={g.slug}>
              <Link href={`/conseils/${g.slug}`}>{g.title} ↗</Link>
            </li>
          ))}
        </ul>
      )}
      <Link href="/questions-frequentes">Questions fréquentes et sources ↗</Link>
    </section>
  );
}
