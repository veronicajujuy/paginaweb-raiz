import {ResilientImage} from './ResilientImage';

export function AboutSection() {
  return (
    <section
      id="sobre-raiz"
      className="scroll-mt-20 py-16 sm:py-24 border-b border-oliva-deep/10"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ResilientImage
              src="/src/assets/images/ingredientes_locales_estacion_1795114376126.jpg"
              alt="Ingredientes frescos locales y de estación sobre mesada de madera: papas andinas, zapallo, acelga, tomates maduros y hierbas frescas"
              containerClassName="rounded-2xl border border-oliva-deep/10 aspect-[4/3]"
              fallbackTitle="Ingredientes frescos de estación"
            />
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <p className="text-sm font-semibold text-terracota mb-3">
              Sobre Raíz
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-oliva-deep text-balance mb-6">
              Comida real para acompañar tu semana en Jujuy
            </h2>
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-oliva-deep/85 max-w-2xl">
              <p>
                Cuando las jornadas de trabajo se alargan, pensar qué cocinar todos los días
                se vuelve una carga más. En Raíz cocinamos viandas semanales caseras en San
                Salvador de Jujuy para que resuelvas tus comidas de la semana de manera simple.
              </p>
              <p>
                Cocinamos como en casa: platos abundantes, equilibrados y llenos de sabor,
                pensados para quienes viven solos o en pareja y quieren comer bien sin perder
                tiempo entre compras, cocina y limpieza.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
