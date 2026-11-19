import {useState} from 'react';
import {Menu, X} from 'lucide-react';
import {getWhatsAppUrl} from '../config/contact';
import {BrandMark} from './BrandMark';
import {WhatsAppIcon} from './WhatsAppIcon';

const NAV_LINKS = [
  {href: '#sobre-raiz', label: 'Sobre Raíz'},
  {href: '#propuesta', label: 'Propuesta'},
  {href: '#como-funciona', label: 'Cómo funciona'},
  {href: '#contacto', label: 'Contacto'},
] as const;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappUrl = getWhatsAppUrl();

  return (
    <header className="sticky top-0 z-40 bg-crema/95 backdrop-blur-sm border-b border-oliva-deep/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-[72px] md:h-20 flex items-center justify-between gap-8">
        <a
          href="#inicio"
          aria-label="Raíz — Ir al inicio"
          className="inline-flex items-center whitespace-nowrap shrink-0 rounded-md focus-visible:outline-2"
        >
          <BrandMark size="header" />
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-oliva-deep/80"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:text-oliva-deep hover:border-oliva transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[40px] rounded-xl bg-oliva text-crema text-sm font-semibold hover:bg-oliva-dark transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">Pedir por WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-oliva-deep/15 text-oliva-deep hover:bg-crema-soft transition-colors duration-150 shrink-0"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navegación móvil"
          className="md:hidden border-t border-oliva-deep/10 bg-crema px-5 py-4"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-2 text-base font-medium text-oliva-deep hover:text-terracota transition-colors duration-150"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
