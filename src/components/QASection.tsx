import { useState } from 'react';
import { Plus } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

type QA = {
  id: string;
  question: string;
  answer: string;
  from: string;
};

const FAQS: QA[] = [
  {
    id: 'qa-pestel',
    question: '¿Qué es el análisis PESTEL?',
    answer:
      'Es un análisis del entorno externo que estudia los factores Político, Económico, Social, Tecnológico, Ecológico y Legal que afectan al negocio.',
    from: 'Estudio del Mercado · Análisis Externo',
  },
  {
    id: 'qa-porter',
    question: '¿Qué son las 5 fuerzas de Porter?',
    answer:
      'Modelo que evalúa la rivalidad del sector, amenaza de nuevos entrantes, poder de proveedores, poder de clientes y amenaza de sustitutos.',
    from: 'Estudio del Mercado · Análisis Externo',
  },
  {
    id: 'qa-cadena-valor',
    question: '¿Qué es la cadena de valor?',
    answer:
      'Esquema de actividades primarias y de soporte que muestra dónde se genera valor en el servicio que ofrece Métrica Marketing.',
    from: 'Estudio del Mercado · Análisis Interno',
  },
  {
    id: 'qa-ciclo',
    question: '¿En qué fase del ciclo de vida estamos?',
    answer:
      'Métrica Marketing se sitúa en fase de introducción/crecimiento, priorizando captación y posicionamiento.',
    from: 'Estudio del Mercado · Análisis Interno',
  },
  {
    id: 'qa-dafo',
    question: '¿Qué es DAFO – CAME?',
    answer:
      'DAFO identifica Debilidades, Amenazas, Fortalezas y Oportunidades. CAME define la acción: Corregir, Afrontar, Mantener y Explotar.',
    from: 'Estudio del Mercado · Análisis Interno',
  },
  {
    id: 'qa-buyer',
    question: '¿Cómo se definen los buyer persona?',
    answer:
      'Tres fichas resumidas: founder técnico, director de marketing y pyme tradicional digitalizando, cada una con KPI y dolor concreto.',
    from: 'Estrategia de Marketing',
  },
  {
    id: 'qa-tam',
    question: '¿Qué diferencia hay entre TAM, SAM y SOM?',
    answer:
      'TAM es el mercado total disponible, SAM el mercado al que podemos servir, y SOM la cuota realista que vamos a capturar.',
    from: 'Estrategia de Marketing',
  },
  {
    id: 'qa-funnel',
    question: '¿Qué canales hay en cada fase del funnel?',
    answer:
      'Captación y conversión: LinkedIn, SEM, Email, Redes Sociales y Afiliación. Fidelización: Email Marketing y Redes Sociales.',
    from: 'Plan de Acción',
  },
  {
    id: 'qa-roi',
    question: '¿Cómo se calcula el ROI y ROAS?',
    answer:
      'ROI = (Beneficio − Inversión) / Inversión. ROAS = Ingresos generados por publicidad / Inversión publicitaria.',
    from: 'Plan Financiero',
  },
  {
    id: 'qa-equilibrio',
    question: '¿Cuándo se alcanza el punto de equilibrio?',
    answer:
      'Está proyectado para el Año 1 según el cuadro de mando integral, considerando ingresos fijos y variables sobre la estructura de costes.',
    from: 'Plan Financiero',
  },
];

function QAItem({ qa, defaultOpen = false }: { qa: QA; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      id={qa.id}
      className="rounded-2xl bg-white scroll-mt-32"
      style={{
        boxShadow: '0 0 0 0.5px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.05)',
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-4 md:py-5 text-left rounded-2xl hover:bg-black/[0.02] transition-colors"
        aria-expanded={open}
      >
        <span
          className="text-base md:text-lg font-medium"
          style={{ color: '#0D212C' }}
        >
          {qa.question}
        </span>
        <Plus
          className={`w-5 h-5 flex-shrink-0 transition-transform ${open ? 'rotate-45' : ''}`}
          style={{ color: '#0D212C' }}
        />
      </button>

      {open && (
        <div className="px-5 md:px-6 pb-5 md:pb-6">
          <p
            className="text-sm md:text-base leading-relaxed"
            style={{ color: 'rgba(5,26,36,0.85)' }}
          >
            {qa.answer}
          </p>
          <p className="mt-3 text-xs font-mono" style={{ color: '#273C46' }}>
            {qa.from}
          </p>
        </div>
      )}
    </div>
  );
}

export function QASection() {
  const { ref, inView } = useInViewAnimation<HTMLElement>(0.1);
  return (
    <section
      ref={ref}
      id="qa"
      className="max-w-[1100px] mx-auto px-6 py-16 md:py-20 scroll-mt-24"
    >
      <header
        className={`mb-10 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.1s' }}
      >
        <p className="font-mono text-xs md:text-sm mb-3" style={{ color: '#273C46' }}>
          08. Q&amp;A
        </p>
        <h2
          className="text-[32px] md:text-[44px] lg:text-[56px] leading-[1.05] tracking-tight"
          style={{ color: '#0D212C' }}
        >
          Preguntas <span className="font-serif">frecuentes</span>
        </h2>
        <p
          className="text-sm md:text-base mt-3 max-w-xl"
          style={{ color: 'rgba(5,26,36,0.7)' }}
        >
          Cada apartado del menú tiene un backlink a la respuesta correspondiente.
        </p>
      </header>

      <div
        className={`flex flex-col gap-3 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.2s' }}
      >
        {FAQS.map((qa) => (
          <QAItem key={qa.id} qa={qa} />
        ))}
      </div>
    </section>
  );
}

export default QASection;
