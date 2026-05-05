import { ReactNode } from 'react';
import { BusinessCanvasDiagram } from '../components/BusinessCanvasDiagram';
import { CustomerJourneyDiagram } from '../components/CustomerJourneyDiagram';

export type LeafBullet = {
  title: string;
  body: ReactNode;
};

export type SectionLeaf = {
  id: string;
  label: string;
  bullets?: LeafBullet[];
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
            bullets: [
              {
                title: 'Contexto político',
                body: 'Entorno estable dentro de la UE que favorece la inversión en negocios digitales. Impulsado además por políticas públicas como el Kit Digital y fondos europeos.',
              },
              {
                title: 'Contexto social',
                body: 'Predominio de pymes y autónomos que demandan soluciones ágiles y accesibles. Cambio en el consumo B2B: digitalización, autoservicio e inmediatez.',
              },
              {
                title: 'Contexto económico',
                body: 'Inflación y aumento de costes → mayor sensibilidad al precio. Las empresas buscan eficiencia y maximizar el retorno de inversión (ROI).',
              },
              {
                title: 'Contexto tecnológico',
                body: 'La inteligencia artificial es el principal motor de cambio del sector. Automatización, cloud y APIs permiten escalar y optimizar procesos.',
              },
              {
                title: 'Contexto ecológico',
                body: 'Bajo impacto del modelo digital frente a modelos tradicionales. La sostenibilidad gana peso como factor de decisión empresarial.',
              },
              {
                title: 'Contexto legal',
                body: 'Fuerte regulación en protección de datos (RGPD). Nueva normativa de IA (AI Act) exige transparencia y control.',
              },
            ],
          },
          {
            id: 'porter',
            label: 'PORTER',
            bullets: [
              {
                title: 'Barreras de entrada',
                body: 'Medias-altas, debido a la complejidad técnica (sistemas multiagente) y requisitos legales.',
              },
              {
                title: 'Nuevos competidores',
                body: 'Amenaza creciente por imitadores, aunque limitada por la especialización.',
              },
              {
                title: 'Sustitutivos',
                body: 'Muy alta, incluyendo IA gratuita, contenido formativo y agencias.',
              },
              {
                title: 'Proveedores',
                body: 'Alto poder por dependencia tecnológica (LLMs).',
              },
              {
                title: 'Clientes',
                body: 'Poder medio-alto por sensibilidad al precio y facilidad de cambio.',
              },
            ],
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
                <img
                  src={`${import.meta.env.BASE_URL}Cadenadevalor.JPG`}
                  alt="Cadena de valor de Métrica Marketing"
                  className="w-full rounded-2xl"
                  style={{
                    boxShadow:
                      '0 0 0 0.5px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)',
                  }}
                />
              </div>
            ),
          },
          {
            id: 'ventaja-competitiva',
            label: 'Ventaja competitiva',
          },
          {
            id: 'ciclo-de-vida',
            label: 'Ciclo de vida',
          },
          {
            id: 'dafo-came',
            label: 'DAFO – CAME',
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
          { id: 'mision', label: 'Misión' },
          { id: 'vision', label: 'Visión' },
        ],
      },
      {
        id: 'buyer-persona',
        label: 'Target / Buyer persona',
        children: [
          { id: 'bp-1', label: 'Buyer 1' },
          { id: 'bp-2', label: 'Buyer 2' },
          { id: 'bp-3', label: 'Buyer 3' },
        ],
      },
      {
        id: 'tam-sam-som',
        label: 'TAM · SAM · SOM',
        children: [
          { id: 'tam', label: 'TAM' },
          { id: 'sam', label: 'SAM' },
          { id: 'som', label: 'SOM' },
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
        children: [{ id: 'obj', label: 'KPIs principales' }],
      },
      {
        id: 'presupuesto',
        label: 'Presupuesto (Cuadro)',
        children: [{ id: 'pres', label: 'Distribución' }],
      },
      {
        id: 'estrategia-digital',
        label: 'Estrategia de Marketing Digital',
        children: [
          { id: 'captacion', label: 'Fase de Captación' },
          { id: 'conversion', label: 'Fase de Conversión' },
          { id: 'fidelizacion', label: 'Fase de Fidelización' },
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
        children: [{ id: 'pf-mando-detail', label: 'Indicadores clave' }],
      },
      {
        id: 'pf-ingresos',
        label: 'Ingresos',
        children: [{ id: 'pf-ingresos-detail', label: 'Variables · Fijos · Medios' }],
      },
      {
        id: 'pf-costes',
        label: 'Costes',
        children: [{ id: 'pf-costes-detail', label: 'Fijos · Variables · Medios' }],
      },
      {
        id: 'pf-explotacion',
        label: 'Resultado de Explotación',
        children: [{ id: 'pf-explotacion-detail', label: 'ROI · ROAS' }],
      },
      {
        id: 'pf-equilibrio',
        label: 'Punto de Equilibrio (Año 1)',
        children: [{ id: 'pf-equilibrio-detail', label: 'Break-even objetivo' }],
      },
      {
        id: 'pf-ratios',
        label: 'Ratios (Totales)',
        children: [{ id: 'pf-ratios-detail', label: 'Indicadores agregados' }],
      },
    ],
  },
  {
    id: 'quienes-somos',
    number: '07',
    title: 'Quiénes somos',
    intro: 'El equipo detrás de Métrica Marketing.',
    groups: [
      {
        id: 'qs-equipo',
        label: 'Equipo',
        children: [
          { id: 'qs-direccion', label: 'Estrategia y dirección' },
          { id: 'qs-analisis', label: 'Análisis y datos' },
          { id: 'qs-accion', label: 'Plan de Acción' },
          { id: 'qs-financiero', label: 'Plan Financiero' },
        ],
      },
    ],
  },
  {
    id: 'qa',
    number: '08',
    title: 'Q&A',
    intro: 'Preguntas frecuentes sobre el plan de marketing.',
    groups: [
      {
        id: 'qa-mercado',
        label: 'Estudio del Mercado',
        children: [],
      },
      {
        id: 'qa-estrategia',
        label: 'Estrategia de Marketing',
        children: [],
      },
      {
        id: 'qa-accion',
        label: 'Plan de Acción',
        children: [],
      },
      {
        id: 'qa-financiero',
        label: 'Plan Financiero',
        children: [],
      },
    ],
  },
];
