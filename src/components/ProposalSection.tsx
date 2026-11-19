import {ResilientImage} from './ResilientImage';

const PILLARS = [
  {
    number: '01',
    title: 'Ingredientes locales y de estación',
    description:
      'Elegimos verduras, legumbres y productos frescos de temporada de nuestra región. Cocinar con lo que da cada estación asegura platos más sabrosos, naturales y honestos.',
  },
  {
    number: '02',
    title: 'Opciones con proteína y alternativas veganas',
    description:
      'Armamos propuestas variadas todas las semanas para que elijas lo que mejor va con vos: platos completos con proteína y opciones 100 % veganas igual de ricas y nutritivas.',
  },
  {
    number: '03',
    title: 'Viandas prácticas, ricas y accesibles',
    description:
      'Pensadas para tu rutina real. Te ayudan a ordenar la semana, evitar compras de último momento y disfrutar de comida casera a un valor accesible.',
  },
] as const;

export function ProposalSection() {
  return (
    <section
      id="propuesta"
      className="scroll-mt-20 py-16 sm:py-24 bg-crema-soft/65 border-b border-oliva-deep/10"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12 lg:mb-16">
          <p className="text-sm font-semibold text-oliva mb-3">
            Nuestra propuesta
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-oliva-deep text-balance mb-4">
            Lo simple hecho con cuidado se nota en cada plato
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-oliva-deep/80">
            Tres pilares que guían nuestra cocina todas las semanas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="divide-y divide-oliva-deep/12 border-y border-oliva-deep/12">
              {PILLARS.map((pillar) => (
                <article
                  key={pillar.number}
                  className="py-7 sm:py-8 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-baseline"
                >
                  <span className="sm:col-span-2 font-display text-2xl font-semibold text-terracota tabular-nums">
                    {pillar.number}
                  </span>
                  <div className="sm:col-span-10">
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-oliva-deep mb-2.5">
                      {pillar.title}
                    </h3>
                    <p className="text-base leading-relaxed text-oliva-deep/80 max-w-xl">
                      {pillar.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex">
            <ResilientImage
              src="/src/assets/images/opciones_proteina_vegana_1795114376437.jpg"
              alt="Dos bowls de comida casera de Raíz: una opción con carne braseada y batatas asadas, y una opción vegana con lentejas, quinoa, calabaza y palta"
              containerClassName="w-full rounded-2xl border border-oliva-deep/10 aspect-[4/3] lg:aspect-auto lg:h-full"
              fallbackTitle="Opciones con proteína y veganas"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
