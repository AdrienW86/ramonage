'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react';
import { Brand } from './brand';
const links = [
  ['Prestations', '/prestations'],
  ['Les communes', '/zones-intervention'],
  ['Notre approche', '/a-propos'],
  ['Conseils', '/conseils'],
  ['Contact', '/contact'],
];
export function Header({
  name,
  phone,
  logo,
  quoteEnabled = false,
}: {
  name: string;
  phone: string;
  logo: string | null;
  quoteEnabled?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menu = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const first = menu.current?.querySelector('a');
    first?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
      }
      if (e.key === 'Tab') {
        const nodes = menu.current?.querySelectorAll<HTMLElement>('a, button');
        if (!nodes?.length) return;
        const first = nodes[0],
          last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);
  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <Link href="/" title="Accueil">
          {logo ? <Image src={logo} alt={name} width={170} height={60} /> : <Brand name={name} />}
        </Link>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <Link
          className="button small header-quote"
          href={quoteEnabled ? '/devis' : '/contact'}
          data-track={quoteEnabled ? 'clic_devis' : undefined}
        >
          {quoteEnabled ? 'Demander un devis' : 'Nous contacter'} <ArrowUpRight size={16} />
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div
          ref={menu}
          id="mobile-nav"
          className="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
        >
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
              <ArrowUpRight />
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link
            href={quoteEnabled ? '/devis' : '/questions-frequentes'}
            className="button"
            onClick={() => setOpen(false)}
          >
            {quoteEnabled ? 'Demander un devis' : 'Questions fréquentes'}
          </Link>
          <button
            onClick={() => {
              setOpen(false);
              toggle.current?.focus();
            }}
            className="text-button"
          >
            Fermer le menu
          </button>
        </div>
      )}
      {phone && (
        <a
          className="mobile-call"
          href={`tel:${phone.replace(/[^+\d]/g, '')}`}
          data-track="clic_telephone"
        >
          <Phone size={18} /> Appeler
        </a>
      )}
    </header>
  );
}
