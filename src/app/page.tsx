import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowUpRight,
  Brush,
  ClipboardList,
  Flame,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import { CommuneSearch } from '@/components/commune-search';
import { CTA, Faq, Photo, SectionHeading, ServiceCard } from '@/components/ui';
import { Reveal } from '@/components/reveal';
import { visibleServices } from '@/content/services';
import { guides } from '@/content/guides';
import { metadata } from '@/lib/seo';
export const generateMetadata = () =>
  metadata(
    'Ramonage à Perpignan, Narbonne et alentours',
    'Préparez l’entretien de votre cheminée, poêle ou conduit dans l’Aude et les Pyrénées-Orientales. Prestations et desserte à confirmer.',
    '/',
  );
export default function Home() {
  return (
    <>
      <section className="hero">
        <Image
          className="hero-image"
          src="/images/hero.webp"
          alt="Cheminée vitrée dans un intérieur contemporain aux tons minéraux, illustration générée par IA"
          fill
          sizes="100vw"
          preload
          quality={60}
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="hero-content container">
          <div className="hero-kicker">
            <span /> AUDE & PYRÉNÉES-ORIENTALES
          </div>
          <h1>
            Le soin du conduit.
            <br />
            La sérénité
            <br />
            <em>du foyer.</em>
          </h1>
          <p>
            Ramonage, entretien et débistrage.
            <br />
            Une approche attentive de votre installation,
            <br className="desktop-break" /> pour profiter de l’essentiel.
          </p>
          <div className="hero-actions">
            <Link href="/devis" className="button" data-track="clic_devis">
              Demander un devis <ArrowUpRight size={19} />
            </Link>
            <Link href="/prestations" className="hero-secondary">
              Découvrir les prestations <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="hero-bottom">
            <span>
              <MapPin size={15} /> Perpignan · Narbonne · Desserte à confirmer
            </span>
            <a href="#prestations" aria-label="Découvrir la suite">
              <ArrowDown size={20} />
            </a>
          </div>
        </div>
        <span className="hero-caption">L’ART DE PRENDRE SOIN DE VOTRE FEU</span>
      </section>
      <div className="principles">
        <div>
          <ShieldCheck />
          <span>Une approche de la sécurité</span>
        </div>
        <div>
          <Brush />
          <span>Des méthodes adaptées au conduit</span>
        </div>
        <div>
          <ClipboardList />
          <span>Un périmètre précisé au devis</span>
        </div>
      </div>
      <section id="prestations" className="section container">
        <Reveal>
          <div className="heading-row">
            <SectionHeading
              eyebrow="01 / PRENDRE SOIN DE VOTRE INSTALLATION"
              title="À chaque foyer, son entretien."
              text="Du feu ouvert aux équipements contemporains, découvrez les interventions à confirmer selon votre installation."
            />
            <Link className="text-link" href="/prestations">
              Toutes les prestations <ArrowUpRight size={18} />
            </Link>
          </div>
        </Reveal>
        <div className="service-grid">
          {visibleServices()
            .slice(0, 4)
            .map((s, i) => (
              <ServiceCard service={s} index={i} key={s.slug} />
            ))}
        </div>
        <div className="service-footnote">
          <Flame size={18} />
          <p>
            Des dépôts durs ou goudronneux ?{' '}
            <Link href="/prestations/debistrage">
              Comprendre le débistrage <ArrowUpRight size={14} />
            </Link>
          </p>
        </div>
      </section>
      <section className="approach section">
        <div className="container split">
          <Photo
            name="outillage"
            alt="Brosses et outillage de ramonage sur un établi, illustration générée par IA"
          />
          <Reveal>
            <div className="approach-text">
              <p className="eyebrow">02 / LE SENS DU DÉTAIL</p>
              <h2>
                Un geste technique.
                <br />
                <em>Une attention entière.</em>
              </h2>
              <p>
                Un conduit se connaît avant de s’entretenir. L’appareil, son usage, les accès et la
                nature des dépôts sont les points de départ d’une intervention adaptée.
              </p>
              <div className="numbered">
                <span>01</span>
                <div>
                  <h3>Comprendre votre installation</h3>
                  <p>Recueillir les informations utiles et préciser vos besoins.</p>
                </div>
              </div>
              <div className="numbered">
                <span>02</span>
                <div>
                  <h3>Définir le bon périmètre</h3>
                  <p>Confirmer la faisabilité et les opérations au devis.</p>
                </div>
              </div>
              <div className="numbered">
                <span>03</span>
                <div>
                  <h3>Vous donner des repères clairs</h3>
                  <p>Expliquer les observations et les limites de l’intervention.</p>
                </div>
              </div>
              <Link href="/a-propos" className="text-link">
                Découvrir notre approche <ArrowUpRight size={17} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="territory section">
        <div className="container split">
          <div>
            <p className="eyebrow">03 / UN ANCRAGE DANS LE SUD</p>
            <h2>
              Entre Méditerranée
              <br />
              <em>et Pyrénées.</em>
            </h2>
            <p>
              Deux départements, deux pôles prioritaires : Narbonne et Perpignan. Recherchez votre
              commune pour préparer une demande et faire confirmer la desserte.
            </p>
            <CommuneSearch />
            <Link className="text-link" href="/zones-intervention">
              Explorer les communes <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="territory-visual">
            <Photo
              name="local"
              alt="Toitures et cheminées d’un village méditerranéen, illustration générée par IA"
            />
            <div className="territory-label">
              <span>
                11 <small>AUDE</small>
              </span>
              <span>
                66 <small>PYRÉNÉES-ORIENTALES</small>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section container">
        <div className="heading-row">
          <SectionHeading
            eyebrow="04 / LES BONS REPÈRES"
            title="Un feu bien accompagné."
            text="Des conseils pour comprendre votre installation et préparer son entretien."
          />
          <Link href="/conseils" className="text-link">
            Tous les guides <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="guide-grid">
          {guides.slice(0, 3).map((g) => (
            <Link className="guide-card" href={`/conseils/${g.slug}`} key={g.slug}>
              <Photo name={g.image} alt={`${g.category} — illustration générée par IA`} />
              <p className="eyebrow">{g.category}</p>
              <h3>
                {g.title} <ArrowUpRight size={20} />
              </h3>
            </Link>
          ))}
        </div>
      </section>
      <section className="faq-section section container">
        <SectionHeading eyebrow="05 / VOS QUESTIONS" title="Avant de prendre rendez-vous." />
        <Faq
          items={[
            {
              q: 'Quelle prestation choisir pour mon appareil ?',
              a: 'Indiquez le type d’appareil, le combustible et les symptômes éventuels. La demande permet de confirmer la prestation et son périmètre avant tout rendez-vous.',
            },
            {
              q: 'Intervenez-vous dans ma commune ?',
              a: 'Le référentiel couvre les communes des départements 11 et 66. Il ne vaut pas confirmation de desserte. Utilisez la recherche puis faites confirmer la prise en charge.',
            },
            {
              q: 'Quel est le prix d’un ramonage ?',
              a: 'Aucun tarif n’est encore confirmé. Un devis doit préciser le prix, les accès et les opérations retenues avant l’intervention.',
            },
            {
              q: 'À quelle fréquence faut-il faire ramoner ?',
              a: 'Le socle national prévoit au moins un ramonage tous les douze mois. Des prescriptions locales peuvent être plus strictes. Retrouvez les sources officielles dans notre guide sur les obligations.',
            },
          ]}
        />
      </section>
      <CTA />
    </>
  );
}
