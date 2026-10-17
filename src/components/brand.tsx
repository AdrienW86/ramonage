import { Flame } from 'lucide-react';
export function Brand({ name }: { name: string }) {
  return (
    <span className="brand">
      <span className="brand-icon">
        <Flame strokeWidth={1.25} size={32} />
      </span>
      <span>
        {name}
        <small>RAMONAGE & ENTRETIEN DES CONDUITS</small>
      </span>
    </span>
  );
}
