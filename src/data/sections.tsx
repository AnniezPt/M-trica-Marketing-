import { ReactNode } from 'react';

export type SectionLeaf = {
  id: string;
  label: string;
  detail?: ReactNode;
  qaAnchor?: string;
};

export type SectionGroup = {
  id: string;
  label: string;
  children: SectionLeaf[];
};

export type SectionContent = {
  id: string;
  number: string;
  title: string;
  intro: string;
  groups: SectionGroup[];
};

export const SECTION_CONTENT: SectionContent[] = [
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
            detail: (
              <p>
                Rentabilidad global del negocio y de cada euro invertido en
                publicidad.
              </p>
            ),
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
            detail: (
              <p>
                Volumen de ventas a partir del cual el proyecto cubre todos sus
                costes.
              </p>
            ),
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
