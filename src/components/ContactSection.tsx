import {getWhatsAppUrl} from '../config/contact';
import {WhatsAppIcon} from './WhatsAppIcon';

export function ContactSection() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section
      id="contacto"
      className="scroll-mt-20 py-16 sm:py-24"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="rounded-3xl bg-oliva text-crema px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-crema/85 mb-3">
              Contacto directo
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.12] text-balance mb-5">
              ¿Querés conocer las viandas disponibles de esta semana?
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-crema/90 mb-8 max-w-xl">
              Escribinos por WhatsApp y te contamos qué opciones preparamos esta semana
              para que armes tu pedido de manera rápida y sencilla.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 min-h-[52px] rounded-xl bg-terracota text-crema text-base font-semibold hover:bg-terracota-dark transition-colors duration-150 whitespace-nowrap"
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" />
              <span>Hacer mi pedido por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
