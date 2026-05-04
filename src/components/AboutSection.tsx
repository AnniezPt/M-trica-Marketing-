import { useInViewAnimation } from '../hooks/useInViewAnimation';

const TEAM = [
  {
    name: 'Equipo Métrica',
    role: 'Estrategia y dirección',
    description:
      'Definimos la misión, la visión y la estructura del plan de marketing.',
  },
  {
    name: 'Análisis y datos',
    role: 'Estudio del Mercado',
    description:
      'PESTEL, PORTER, cadena de valor, ciclo de vida y DAFO–CAME.',
  },
  {
    name: 'Plan de Acción',
    role: 'Captación · Conversión · Fidelización',
    description:
      'Diseñamos el funnel y asignamos presupuesto a cada canal con KPI.',
  },
  {
    name: 'Plan Financiero',
    role: 'Ingresos · Costes · Ratios',
    description:
      'Cuadro de mando, ROI/ROAS, punto de equilibrio y proyecciones.',
  },
];

export function AboutSection() {
  const { ref, inView } = useInViewAnimation<HTMLElement>(0.1);
  return (
    <section
      ref={ref}
      id="quienes-somos"
      className="max-w-[1100px] mx-auto px-6 py-16 md:py-20 scroll-mt-24"
    >
      <header
        className={`mb-10 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.1s' }}
      >
        <p className="font-mono text-xs md:text-sm mb-3" style={{ color: '#273C46' }}>
          07. Quiénes somos
        </p>
        <h2
          className="text-[32px] md:text-[44px] lg:text-[56px] leading-[1.05] tracking-tight"
          style={{ color: '#0D212C' }}
        >
          El equipo detrás de <span className="font-serif">Métrica</span>
        </h2>
        <p
          className="text-sm md:text-base mt-3 max-w-xl"
          style={{ color: 'rgba(5,26,36,0.7)' }}
        >
          Cuatro áreas perfectamente alineadas para entregar las cuatro entregas
          + el plan de marketing del TFM.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {TEAM.map((m, i) => (
          <article
            key={m.name}
            className={`rounded-[32px] bg-white px-6 md:px-8 py-6 md:py-7 ${
              inView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{
              boxShadow: '0 0 0 0.5px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.05)',
              animationDelay: `${0.2 + i * 0.1}s`,
            }}
          >
            <div className="font-mono text-xs mb-2" style={{ color: '#273C46' }}>
              0{i + 1}
            </div>
            <h3
              className="font-serif text-2xl md:text-3xl font-semibold"
              style={{ color: '#051A24' }}
            >
              {m.name}
            </h3>
            <p
              className="text-sm md:text-base mt-1"
              style={{ color: '#273C46' }}
            >
              {m.role}
            </p>
            <p
              className="text-sm md:text-base mt-3 leading-relaxed"
              style={{ color: 'rgba(5,26,36,0.85)' }}
            >
              {m.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AboutSection;
