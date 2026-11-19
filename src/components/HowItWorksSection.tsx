const STEPS = [
  {
    step: '01',
    title: 'Conocé las opciones de la semana',
    description:
      'Escribinos por WhatsApp para ver las viandas disponibles de la semana, tanto con proteína como veganas, y elegí las que prefieras.',
  },
  {
    step: '02',
    title: 'Hacé tu pedido por WhatsApp',
    description:
      'Nos pasás tu selección directamente por mensaje. Resolvemos tus dudas y coordinamos tu pedido de forma simple y personal.',
  },
  {
    step: '03',
    title: 'Organizá tus comidas de la semana',
    description:
      'Con tus viandas listas, ganás tiempo todos los días para disfrutar tus almuerzos y cenas caseras sin estrés ni improvisaciones.',
  },
] as const;

export function HowItWorksSection() {
  return (
    <section
      id="como-funciona"
      className="scroll-mt-20 py-16 sm:py-24 border-b border-oliva-deep/10"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12 sm:mb-14">
          <p className="text-sm font-semibold text-terracota mb-3">
            Cómo funciona
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-oliva-deep text-balance mb-4">
            Tres pasos simples para resolver tu semana
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-oliva-deep/80">
            Sin vueltas ni trámites largos: todo se coordina directo por mensaje.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {STEPS.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl bg-crema-soft/80 border border-crema-border p-7 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-oliva-deep/10">
                  <span className="font-display text-3xl font-semibold text-oliva tabular-nums">
                    {item.step}
                  </span>
                  <span className="text-xs font-medium text-oliva-deep/60">
                    Paso {Number(item.step)} de 3
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-semibold text-oliva-deep mb-3 text-balance">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-oliva-deep/80">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
