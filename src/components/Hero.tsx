import {ArrowDownRight} from 'lucide-react';
import {getWhatsAppUrl} from '../config/contact';
import {ResilientImage} from './ResilientImage';
import {WhatsAppIcon} from './WhatsAppIcon';

export function Hero() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section
      id="inicio"
      className="pt-10 pb-16 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28 border-b border-oliva-deep/10"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-oliva mb-5">
              <span>San Salvador de Jujuy</span>
              <span aria-hidden="true">·</span>
              <span>Viandas semanales caseras</span>
            </div>

            <h1 className="font-display text-[clamp(2.35rem,4.4vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-oliva-deep text-balance mb-6">
              La comida de todos los días, resuelta
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-oliva-deep/85 max-w-xl mb-8">
              Cocina casera pensada para tu semana. Preparamos viandas con ingredientes
              locales y de estación, opciones con proteína y alternativas veganas para que
              comas rico todos los días sin pasar horas cocinando.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[48px] rounded-xl bg-terracota text-crema text-base font-semibold hover:bg-terracota-dark transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Consultar por WhatsApp</span>
              </a>

              <a
                href="#como-funciona"
                className="inline-flex items-center gap-1.5 py-2 text-sm sm:text-base font-semibold text-oliva hover:text-oliva-deep transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                <span>Ver cómo funciona</span>
                <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 flex">
            <ResilientImage
              src="/src/assets/images/hero_viandas_caseras_1795114376623.jpg"
              alt="Viandas semanales caseras de Raíz en envases de vidrio sobre mesa de madera, con pollo asado con hierbas, calabaza horneada, quinoa, verdes salteados y lentejas"
              containerClassName="w-full rounded-2xl border border-oliva-deep/10 aspect-[4/3] lg:aspect-auto lg:min-h-[460px] lg:h-full"
              fallbackTitle="Viandas semanales caseras"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
