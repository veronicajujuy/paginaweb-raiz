import {getWhatsAppUrl} from '../config/contact';
import {BrandMark} from './BrandMark';

export function Footer() {
  const whatsappUrl = getWhatsAppUrl();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-oliva-deep/12 bg-crema py-10 sm:py-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-oliva-deep/10">
          <div className="space-y-2">
            <a href="#inicio" aria-label="Raíz — Volver arriba" className="inline-block">
              <BrandMark size="footer" />
            </a>
            <p className="text-sm text-oliva-deep/75">
              Viandas semanales caseras · San Salvador de Jujuy
            </p>
          </div>

          <nav
            aria-label="Enlaces del pie de página"
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-oliva-deep/80"
          >
            <a href="#sobre-raiz" className="hover:text-oliva-deep transition-colors">
              Sobre Raíz
            </a>
            <a href="#propuesta" className="hover:text-oliva-deep transition-colors">
              Propuesta
            </a>
            <a href="#como-funciona" className="hover:text-oliva-deep transition-colors">
              Cómo funciona
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracota font-semibold hover:text-terracota-dark transition-colors"
            >
              WhatsApp
            </a>
          </nav>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-oliva-deep/65">
          <p>© {currentYear} Raíz. Todos los derechos reservados.</p>
          <p>Comida casera con ingredientes locales y de estación.</p>
        </div>
      </div>
    </footer>
  );
}
