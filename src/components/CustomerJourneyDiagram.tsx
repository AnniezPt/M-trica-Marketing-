import { SeeAlso } from './InlineLink';

type Step = {
  number: number;
  label: string;
  description: string;
};

const STEPS: Step[] = [
  {
    number: 1,
    label: 'Reconocimiento',
    description: 'Atracción de clientes con SEO, anuncios y redes.',
  },
  {
    number: 2,
    label: 'Consideración',
    description: 'Contacto inicial y análisis de necesidades.',
  },
  {
    number: 3,
    label: 'Decisión',
    description: 'Propuesta de plan y elección del servicio.',
  },
  {
    number: 4,
    label: 'Fidelización',
    description: 'Seguimiento, optimización y crecimiento continuo.',
  },
];

export function CustomerJourneyDiagram() {
  return (
    <div className="w-full flex flex-col gap-4">
      <ol className="relative flex flex-col gap-4 md:gap-5">
        <span
          aria-hidden="true"
          className="absolute left-[18px] md:left-[22px] top-2 bottom-2 w-px"
          style={{ backgroundColor: 'rgba(13,33,44,0.15)' }}
        />
        {STEPS.map((s) => (
          <li key={s.number} className="relative flex items-start gap-4 md:gap-5">
            <div
              className="relative z-10 flex-shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center font-serif font-semibold text-sm md:text-base"
              style={{
                backgroundColor: '#0D212C',
                color: '#F6FCFF',
                boxShadow: '0 4px 12px rgba(13,33,44,0.18)',
              }}
            >
              {s.number}
            </div>
            <div
              className="flex-1 rounded-2xl bg-white p-4 md:p-5"
              style={{ boxShadow: '0 0 0 0.5px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)' }}
            >
              <p
                className="font-mono text-[11px] uppercase tracking-wider mb-1"
                style={{ color: '#273C46' }}
              >
                {s.label}
              </p>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: '#0D212C' }}>
                {s.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <SeeAlso
        links={[
          {
            label: 'Funnels (Captación · Conversión · Fidelización)',
            to: {
              sectionId: 'plan-de-accion',
              groupId: 'estrategia-digital',
            },
          },
        ]}
      />
    </div>
  );
}

export default CustomerJourneyDiagram;
