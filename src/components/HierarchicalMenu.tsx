import { ReactNode, useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

type Leaf = {
  id: string;
  label: string;
  detail?: ReactNode;
  qaAnchor?: string;
};

type Branch = {
  id: string;
  label: string;
  children: Leaf[];
};

type Section = {
  id: string;
  number: string;
  title: string;
  intro: string;
  groups: Branch[];
};

const SECTIONS: Section[] = [
  {
    id: 'estudio-del-mercado',
    number: '03',
    title: 'Estudio del Mercado',
    intro:
      'Diagnóstico completo del entorno y la posición competitiva de Métrica Marketing.',
    groups: [
      {
        id: 'analisis-externo',
        label: 'Análisis Externo',
        children: [
          {
            id: 'pestel',
            label: 'PESTEL',
            detail: (
              <ul className="list-disc pl-5 space-y-1">
                <li>Político: regulación digital y publicidad online.</li>
                <li>Económico: ciclos de inversión publicitaria.</li>
                <li>Social: cambios en el consumo digital.</li>
                <li>Tecnológico: IA, automatización y atribución.</li>
                <li>Ecológico: marketing sostenible.</li>
                <li>Legal: RGPD y protección de datos.</li>
              </ul>
            ),
            qaAnchor: '#qa-pestel',
          },
          {
            id: 'porter',
            label: 'PORTER',
            detail: (
              <ul className="list-disc pl-5 space-y-1">
                <li>Rivalidad entre competidores actuales.</li>
                <li>Amenaza de nuevos entrantes.</li>
                <li>Poder de negociación de proveedores.</li>
                <li>Poder de negociación de clientes.</li>
                <li>Amenaza de productos sustitutivos.</li>
              </ul>
            ),
            qaAnchor: '#qa-porter',
          },
        ],
      },
      {
        id: 'analisis-interno',
        label: 'Análisis Interno',
        children: [
          {
            id: 'cadena-valor',
            label: 'Cadena de valor',
            detail: (
              <p>
                Esquema visual de actividades primarias y de soporte que generan
                valor en el servicio. (Imagen del esquema disponible en la
                memoria del TFM.)
              </p>
            ),
            qaAnchor: '#qa-cadena-valor',
          },
          {
            id: 'ventaja-competitiva',
            label: 'Ventaja competitiva',
            detail: (
              <ul className="list-disc pl-5 space-y-1">
                <li>Especialización vertical en marketing medible.</li>
                <li>Cuadro de mando integral propio.</li>
                <li>Equipo multidisciplinar y senior.</li>
              </ul>
            ),
          },
          {
            id: 'ciclo-de-vida',
            label: 'Ciclo de vida',
            detail: (
              <p>
                Métrica Marketing se sitúa en fase de introducción/crecimiento,
                con foco en captación y posicionamiento.
              </p>
            ),
            qaAnchor: '#qa-ciclo',
          },
          {
            id: 'dafo-came',
            label: 'DAFO – CAME',
            detail: (
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <strong className="block">Debilidades</strong>
                  Marca emergente.
                </div>
                <div>
                  <strong className="block">Amenazas</strong>
                  Competencia consolidada.
                </div>
                <div>
                  <strong className="block">Fortalezas</strong>
                  Metodología medible.
                </div>
                <div>
                  <strong className="block">Oportunidades</strong>
                  Demanda de ROI demostrable.
                </div>
              </div>
            ),
            qaAnchor: '#qa-dafo',
          },
        ],
      },
    ],
  },
  {
    id: 'estrategia-de-marketing',
    number: '04',
    title: 'Estrategia de Marketing',
    intro:
      'Misión, visión, buyer persona, segmentación TAM-SAM-SOM, customer journey y Business Canvas.',
    groups: [
      {
        id: 'mision-vision',
        label: 'Misión y Visión',
        children: [
          {
            id: 'mision',
            label: 'Misión',
            detail: (
              <p>
                Convertir cada euro invertido en marketing en una métrica
                accionable y demostrable.
              </p>
            ),
          },
          {
            id: 'vision',
            label: 'Visión',
            detail: (
              <p>
                Ser la referencia en marketing digital medible para pymes y
                startups en España.
              </p>
            ),
          },
        ],
      },
      {
        id: 'buyer-persona',
        label: 'Target / Buyer persona',
        children: [
          {
            id: 'bp-1',
            label: 'Buyer 1 — Founder técnico',
            detail: (
              <p>
                28-40 años. Necesita reporting claro y ROAS por canal.
                <br />
                <span className="opacity-70">Ver más en la ficha completa.</span>
              </p>
            ),
          },
          {
            id: 'bp-2',
            label: 'Buyer 2 — Director de Marketing',
            detail: (
              <p>
                35-50 años. Busca optimizar mix de inversión y consolidar marca.
              </p>
            ),
          },
          {
            id: 'bp-3',
            label: 'Buyer 3 — Pyme tradicional digitalizando',
            detail: (
              <p>
                Negocio establecido que da el salto a digital y necesita
                acompañamiento medible.
              </p>
            ),
          },
        ],
      },
      {
        id: 'tam-sam-som',
        label: 'TAM · SAM · SOM',
        children: [
          {
            id: 'tam',
            label: 'TAM',
            detail: <p>Mercado total de servicios de marketing digital.</p>,
          },
          {
            id: 'sam',
            label: 'SAM',
            detail: <p>Pymes y startups en España con presencia online.</p>,
          },
          {
            id: 'som',
            label: 'SOM',
            detail: (
              <p>Cuota objetivo realista en los 3 primeros años de actividad.</p>
            ),
          },
        ],
      },
      {
        id: 'customer-journey',
        label: 'Customer Journey',
        children: [
          {
            id: 'cj',
            label: 'Etapas del journey',
            detail: (
              <p>
                Awareness → Consideración → Decisión → Onboarding → Fidelización.
                Cada etapa con KPI propio.
              </p>
            ),
          },
        ],
      },
      {
        id: 'business-canvas',
        label: 'Business Canvas',
        children: [
          {
            id: 'bc',
            label: 'Lienzo de modelo de negocio',
            detail: (
              <p>
                Propuesta de valor, segmentos, canales, relaciones, ingresos,
                recursos, actividades, partners y costes.
              </p>
            ),
          },
        ],
      },
    ],
  },
  {
    id: 'plan-de-accion',
    number: '05',
    title: 'Plan de Acción',
    intro:
      'Objetivos online, presupuesto y estrategia digital en captación, conversión y fidelización.',
    groups: [
      {
        id: 'objetivos-online',
        label: 'Objetivos de Marketing Online',
        children: [
          {
            id: 'obj',
            label: 'KPIs principales',
            detail: (
              <ul className="list-disc pl-5 space-y-1">
                <li>Tráfico cualificado.</li>
                <li>Leads y CPL por canal.</li>
                <li>Conversiones y CAC.</li>
                <li>LTV y retención.</li>
              </ul>
            ),
          },
        ],
      },
      {
        id: 'presupuesto',
        label: 'Presupuesto (Cuadro)',
        children: [
          {
            id: 'pres',
            label: 'Distribución',
            detail: (
              <p>
                Cuadro completo con la inversión asignada a cada canal y fase
                durante los tres ejercicios proyectados.
              </p>
            ),
          },
        ],
      },
      {
        id: 'estrategia-digital',
        label: 'Estrategia de Marketing Digital',
        children: [
          {
            id: 'captacion',
            label: 'Fase de Captación · Funnel',
            detail: (
              <ul className="list-disc pl-5 space-y-1">
                <li>LinkedIn</li>
                <li>SEM</li>
                <li>Email Marketing</li>
                <li>Redes Sociales</li>
                <li>Marketing de Afiliación</li>
              </ul>
            ),
          },
          {
            id: 'conversion',
            label: 'Fase de Conversión · Funnel',
            detail: (
              <ul className="list-disc pl-5 space-y-1">
                <li>LinkedIn</li>
                <li>SEM</li>
                <li>Email Marketing</li>
                <li>Redes Sociales</li>
                <li>Marketing de Afiliación</li>
              </ul>
            ),
          },
          {
            id: 'fidelizacion',
            label: 'Fase de Fidelización · Funnel',
            detail: (
              <ul className="list-disc pl-5 space-y-1">
                <li>Email Marketing</li>
                <li>Redes Sociales</li>
              </ul>
            ),
          },
        ],
      },
    ],
  },
  {
    id: 'plan-financiero',
    number: '06',
    title: 'Plan Financiero',
    intro:
      'Visión económica completa: cuadro de mando, ingresos, costes, ROI/ROAS, punto de equilibrio y ratios.',
    groups: [
      {
        id: 'pf-mando',
        label: 'Cuadro de mando integral',
        children: [
          {
            id: 'pf-mando-detail',
            label: 'Ticket medio · Beneficio · Ingreso · ROI',
            detail: (
              <p>
                Vista única con los principales indicadores económicos y de
                marketing por mes y canal.
              </p>
            ),
          },
        ],
      },
      {
        id: 'pf-ingresos',
        label: 'Ingresos',
        children: [
          {
            id: 'pf-ingresos-detail',
            label: 'Variables · Fijos · Medios',
            detail: (
              <p>
                Composición de los ingresos por tipología y proyección a tres
                años.
              </p>
            ),
          },
        ],
      },
      {
        id: 'pf-costes',
        label: 'Costes',
        children: [
          {
            id: 'pf-costes-detail',
            label: 'Fijos · Variables · Medios',
            detail: <p>Estructura de costes operativos y de marketing.</p>,
          },
        ],
      },
      {
        id: 'pf-explotacion',
        label: 'Resultado de Explotación',
        children: [
          {
            id: 'pf-explotacion-detail',
            label: 'ROI · ROAS',
            detail: <p>Rentabilidad global del negocio y de cada euro invertido en publicidad.</p>,
          },
        ],
      },
      {
        id: 'pf-equilibrio',
        label: 'Punto de Equilibrio (Año 1)',
        children: [
          {
            id: 'pf-equilibrio-detail',
            label: 'Break-even',
            detail: <p>Volumen de ventas a partir del cual el proyecto cubre todos sus costes.</p>,
          },
        ],
      },
      {
        id: 'pf-ratios',
        label: 'Ratios (Totales)',
        children: [
          {
            id: 'pf-ratios-detail',
            label: 'Indicadores agregados',
            detail: <p>Margen, eficiencia, liquidez y solvencia consolidados.</p>,
          },
        ],
      },
    ],
  },
];

function LeafItem({ leaf }: { leaf: Leaf }) {
  const [open, setOpen] = useState(false);
  const hasDetail = leaf.detail !== undefined;

  return (
    <div
      className="rounded-2xl bg-white"
      style={{ boxShadow: '0 0 0 0.5px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.05)' }}
    >
      <button
        type="button"
        onClick={() => hasDetail && setOpen((v) => !v)}
        className={`w-full flex items-center justify-between gap-3 px-5 py-4 text-left ${
          hasDetail ? 'cursor-pointer hover:bg-black/[0.02]' : 'cursor-default'
        } rounded-2xl transition-colors`}
        aria-expanded={open}
      >
        <span className="text-sm md:text-base" style={{ color: '#0D212C' }}>
          {leaf.label}
        </span>
        {hasDetail && (
          <ChevronDown
            className={`w-4 h-4 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
            style={{ color: '#0D212C' }}
          />
        )}
      </button>

      {hasDetail && open && (
        <div
          className="px-5 pb-5 text-sm md:text-base leading-relaxed"
          style={{ color: 'rgba(5,26,36,0.85)' }}
        >
          {leaf.detail}
          {leaf.qaAnchor && (
            <a
              href={leaf.qaAnchor}
              className="inline-flex items-center gap-1.5 mt-3 text-xs hover:opacity-70 transition-opacity"
              style={{ color: '#273C46' }}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              Ver pregunta frecuente
            </a>
          )}
        </div>
      )}
    </div>
  );
}

function GroupItem({ group }: { group: Branch }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-[24px] bg-[#F6F8F9] p-3 md:p-4">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 px-3 py-3 rounded-2xl hover:bg-white/60 transition-colors"
        aria-expanded={open}
      >
        <span
          className="font-medium text-base md:text-lg"
          style={{ color: '#0D212C' }}
        >
          {group.label}
        </span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          style={{ color: '#0D212C' }}
        />
      </button>

      {open && (
        <div className="mt-3 flex flex-col gap-2">
          {group.children.map((leaf) => (
            <LeafItem key={leaf.id} leaf={leaf} />
          ))}
        </div>
      )}
    </div>
  );
}

function SectionItem({ section }: { section: Section }) {
  const [open, setOpen] = useState(false);
  return (
    <article
      id={section.id}
      className="rounded-[40px] bg-white"
      style={{ boxShadow: '0 0 0 0.5px rgba(0,0,0,0.05), 0 4px 30px rgba(0,0,0,0.06)' }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-6 px-6 md:px-10 py-6 md:py-8 text-left rounded-[40px] hover:bg-black/[0.02] transition-colors"
        aria-expanded={open}
      >
        <div className="flex-1">
          <div
            className="font-mono text-xs md:text-sm mb-2"
            style={{ color: '#273C46' }}
          >
            {section.number}.
          </div>
          <h3
            className="font-serif font-semibold text-2xl md:text-3xl lg:text-4xl"
            style={{ color: '#051A24' }}
          >
            {section.title}
          </h3>
          <p
            className="text-sm md:text-base mt-2 max-w-2xl"
            style={{ color: 'rgba(5,26,36,0.7)' }}
          >
            {section.intro}
          </p>
        </div>

        <ChevronDown
          className={`w-6 h-6 mt-2 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          style={{ color: '#0D212C' }}
        />
      </button>

      {open && (
        <div className="px-6 md:px-10 pb-8 md:pb-10 flex flex-col gap-4">
          {section.groups.map((g) =>
            g.children.length === 1 && g.id === g.children[0].id.replace(/-detail$/, '') ? (
              <LeafItem
                key={g.id}
                leaf={{
                  id: g.id,
                  label: g.label,
                  detail: g.children[0].detail,
                  qaAnchor: g.children[0].qaAnchor,
                }}
              />
            ) : (
              <GroupItem key={g.id} group={g} />
            ),
          )}
        </div>
      )}
    </article>
  );
}

export function HierarchicalMenu() {
  return (
    <section
      id="apartados"
      className="max-w-[1100px] mx-auto px-6 py-16 md:py-20"
    >
      <header className="mb-10 md:mb-12">
        <p className="font-mono text-xs md:text-sm mb-3" style={{ color: '#273C46' }}>
          Menú de Inicio
        </p>
        <h2
          className="text-[32px] md:text-[44px] lg:text-[56px] leading-[1.05] tracking-tight"
          style={{ color: '#0D212C' }}
        >
          Los <span className="font-serif">apartados</span> del plan
        </h2>
        <p
          className="text-sm md:text-base mt-3 max-w-xl"
          style={{ color: 'rgba(5,26,36,0.7)' }}
        >
          Pulsa cualquier apartado para desplegar su contenido. La estructura
          sigue las cuatro entregas + plan de marketing del TFM.
        </p>
      </header>

      <div className="flex flex-col gap-5 md:gap-6">
        {SECTIONS.map((s) => (
          <SectionItem key={s.id} section={s} />
        ))}
      </div>
    </section>
  );
}

export default HierarchicalMenu;
