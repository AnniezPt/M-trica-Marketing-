import { ReactNode } from 'react';
import { BusinessCanvasDiagram } from '../components/BusinessCanvasDiagram';
import { CustomerJourneyDiagram } from '../components/CustomerJourneyDiagram';

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
              <div className="flex flex-col gap-3">
                <p>
                  Esquema visual de las actividades primarias y de soporte que
                  generan valor en el servicio.
                </p>
                <img
                  src={`${import.meta.env.BASE_URL}Cadenadevalor.JPG`}
                  alt="Cadena de valor de Métrica Marketing"
                  className="w-full rounded-2xl"
                  style={{ boxShadow: '0 0 0 0.5px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)' }}
                />
              </div>
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
            label: 'Recorrido del cliente en 4 etapas',
            detail: <CustomerJourneyDiagram />,
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
            detail: <BusinessCanvasDiagram />,
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
        id: 'plan-captacion-resumen',
        label: 'Plan de Captación',
        children: [
          {
            id: 'plan-captacion-detalle',
            label: 'Resultado esperado · ROI 3,2× (Año 1)',
            detail: (
              <p>
                Atrae a tu buyer persona con una estrategia digital medible.
                Funnel de captación en LinkedIn, SEM, Email Marketing, Redes
                Sociales y Marketing de Afiliación.
              </p>
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
            label: 'Break-even objetivo',
            detail: (
              <p>
                Cuadro de mando integral con ingresos, costes y ratios totales.
                El punto de equilibrio se alcanza durante el primer año según
                la proyección financiera.
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
  {
    id: 'quienes-somos',
    number: '07',
    title: 'Quiénes somos',
    intro:
      'Cuatro áreas perfectamente alineadas para entregar las cuatro entregas + el plan de marketing del TFM.',
    groups: [
      {
        id: 'qs-equipo',
        label: 'Equipo',
        children: [
          {
            id: 'qs-direccion',
            label: 'Estrategia y dirección',
            detail: (
              <p>
                Definimos la misión, la visión y la estructura del plan de
                marketing.
              </p>
            ),
          },
          {
            id: 'qs-analisis',
            label: 'Análisis y datos · Estudio del Mercado',
            detail: (
              <p>
                PESTEL, PORTER, cadena de valor, ciclo de vida y DAFO–CAME.
              </p>
            ),
          },
          {
            id: 'qs-accion',
            label: 'Plan de Acción · Captación · Conversión · Fidelización',
            detail: (
              <p>
                Diseñamos el funnel y asignamos presupuesto a cada canal con KPI.
              </p>
            ),
          },
          {
            id: 'qs-financiero',
            label: 'Plan Financiero · Ingresos · Costes · Ratios',
            detail: (
              <p>
                Cuadro de mando, ROI/ROAS, punto de equilibrio y proyecciones.
              </p>
            ),
          },
        ],
      },
    ],
  },
  {
    id: 'qa',
    number: '08',
    title: 'Q&A',
    intro:
      'Preguntas frecuentes con backlinks a cada apartado correspondiente del plan.',
    groups: [
      {
        id: 'qa-mercado',
        label: 'Estudio del Mercado',
        children: [
          {
            id: 'qa-pestel',
            label: '¿Qué es el análisis PESTEL?',
            detail: (
              <p>
                Análisis del entorno externo que estudia los factores Político,
                Económico, Social, Tecnológico, Ecológico y Legal que afectan al
                negocio.
              </p>
            ),
          },
          {
            id: 'qa-porter',
            label: '¿Qué son las 5 fuerzas de Porter?',
            detail: (
              <p>
                Modelo que evalúa la rivalidad del sector, amenaza de nuevos
                entrantes, poder de proveedores, poder de clientes y amenaza de
                sustitutos.
              </p>
            ),
          },
          {
            id: 'qa-cadena-valor',
            label: '¿Qué es la cadena de valor?',
            detail: (
              <p>
                Esquema de actividades primarias y de soporte que muestra dónde
                se genera valor en el servicio que ofrece Métrica Marketing.
              </p>
            ),
          },
          {
            id: 'qa-ciclo',
            label: '¿En qué fase del ciclo de vida estamos?',
            detail: (
              <p>
                Métrica Marketing se sitúa en fase de introducción/crecimiento,
                priorizando captación y posicionamiento.
              </p>
            ),
          },
          {
            id: 'qa-dafo',
            label: '¿Qué es DAFO – CAME?',
            detail: (
              <p>
                DAFO identifica Debilidades, Amenazas, Fortalezas y
                Oportunidades. CAME define la acción: Corregir, Afrontar,
                Mantener y Explotar.
              </p>
            ),
          },
        ],
      },
      {
        id: 'qa-estrategia',
        label: 'Estrategia de Marketing',
        children: [
          {
            id: 'qa-buyer',
            label: '¿Cómo se definen los buyer persona?',
            detail: (
              <p>
                Tres fichas resumidas: founder técnico, director de marketing y
                pyme tradicional digitalizando, cada una con KPI y dolor
                concreto.
              </p>
            ),
          },
          {
            id: 'qa-tam',
            label: '¿Qué diferencia hay entre TAM, SAM y SOM?',
            detail: (
              <p>
                TAM es el mercado total disponible, SAM el mercado al que
                podemos servir, y SOM la cuota realista que vamos a capturar.
              </p>
            ),
          },
        ],
      },
      {
        id: 'qa-accion',
        label: 'Plan de Acción',
        children: [
          {
            id: 'qa-funnel',
            label: '¿Qué canales hay en cada fase del funnel?',
            detail: (
              <p>
                Captación y conversión: LinkedIn, SEM, Email, Redes Sociales y
                Afiliación. Fidelización: Email Marketing y Redes Sociales.
              </p>
            ),
          },
        ],
      },
      {
        id: 'qa-financiero',
        label: 'Plan Financiero',
        children: [
          {
            id: 'qa-roi',
            label: '¿Cómo se calcula el ROI y el ROAS?',
            detail: (
              <p>
                ROI = (Beneficio − Inversión) / Inversión.
                <br />
                ROAS = Ingresos generados por publicidad / Inversión
                publicitaria.
              </p>
            ),
          },
          {
            id: 'qa-equilibrio',
            label: '¿Cuándo se alcanza el punto de equilibrio?',
            detail: (
              <p>
                Está proyectado para el Año 1 según el cuadro de mando integral,
                considerando ingresos fijos y variables sobre la estructura de
                costes.
              </p>
            ),
          },
        ],
      },
    ],
  },
];
