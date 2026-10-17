import Link from 'next/link';
import { communes } from '@/lib/geo';
export function GeoMap() {
  const project = (coords: number[]) => ({
    x: 35 + (coords[0] - 1.65) * 220,
    y: 35 + (43.52 - coords[1]) * 270,
  });
  return (
    <figure className="geo-map">
      <svg viewBox="0 0 520 370" role="img" aria-labelledby="map-title map-description">
        <title id="map-title">Communes de l’Aude et des Pyrénées-Orientales</title>
        <desc id="map-description">
          Carte de repérage calculée à partir des centres officiels des communes. Narbonne et
          Perpignan sont les pôles prioritaires. Les points ne confirment pas la desserte.
        </desc>
        <rect width="520" height="370" fill="#eae5dc" />
        {communes
          .filter((c) => c.coordinates)
          .map((c) => {
            const p = project(c.coordinates!);
            return (
              <circle
                key={c.insee}
                cx={p.x}
                cy={p.y}
                r="1.6"
                fill={c.department === '11' ? '#82512c' : '#303638'}
                opacity=".55"
              />
            );
          })}
        {communes
          .filter((c) => c.priority === 1)
          .map((c) => {
            const p = project(c.coordinates!);
            return (
              <g key={c.insee}>
                <circle cx={p.x} cy={p.y} r="5" fill="#171a1c" stroke="#fff" strokeWidth="2" />
                <text x={p.x + 12} y={p.y + 5} fill="#171a1c" fontSize="16" fontFamily="Georgia">
                  {c.name}
                </text>
              </g>
            );
          })}
        <text x="32" y="32" fill="#82512c" fontFamily="Arial" fontSize="9" letterSpacing="2">
          REPÈRES GÉOGRAPHIQUES · 11 & 66
        </text>
        <text x="32" y="345" fontFamily="Arial" fontSize="9" fill="#565952">
          Centres des communes · API Géo · Desserte à confirmer
        </text>
        <path d="M478 74V40m0 0-5 10m5-10 5 10" fill="none" stroke="#82512c" />
        <text x="474" y="32" fontFamily="Arial" fontSize="10">
          N
        </text>
      </svg>
      <figcaption>
        <span>Un point représente une commune, sans engagement de couverture.</span>
        <Link href="/zones-intervention">Consulter le répertoire ↗</Link>
      </figcaption>
    </figure>
  );
}
