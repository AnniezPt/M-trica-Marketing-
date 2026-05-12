export type NavLeaf = {
  id: string;
  label: string;
  parentSection: string;
};

export type NavGroup = {
  id: string;
  label: string;
  children: NavLeaf[];
};

export type NavSection = {
  id: string;
  number: string;
  title: string;
  groups: NavGroup[];
};

export const NAV_SECTIONS: NavSection[] = [
  {
    id: 'estudio-del-mercado',
    number: '01',
    title: 'Estudio del Mercado',
    groups: [
      {
        id: 'analisis-externo',
        label: 'Análisis Externo',
        children: [
          { id: 'pestel', label: 'PESTEL', parentSection: 'estudio-del-mercado' },
          { id: 'porter', label: 'PORTER', parentSection: 'estudio-del-mercado' },
        ],
      },
      {
        id: 'analisis-interno',
        label: 'Análisis Interno',
        children: [
          { id: 'cadena-valor', label: 'Cadena de valor', parentSection: 'estudio-del-mercado' },
          { id: 'ventaja-competitiva', label: 'Ventaja competitiva', parentSection: 'estudio-del-mercado' },
          { id: 'ciclo-de-vida', label: 'Ciclo de vida', parentSection: 'estudio-del-mercado' },
          { id: 'dafo-came', label: 'DAFO – CAME', parentSection: 'estudio-del-mercado' },
        ],
      },
    ],
  },
  {
    id: 'estrategia-de-marketing',
    number: '02',
    title: 'Estrategia de Marketing',
    groups: [
      {
        id: 'mision-vision',
        label: 'Misión y Visión',
        children: [
          { id: 'mision', label: 'Misión', parentSection: 'estrategia-de-marketing' },
          { id: 'vision', label: 'Visión', parentSection: 'estrategia-de-marketing' },
        ],
      },
      {
        id: 'buyer-persona',
        label: 'Target / Buyer persona',
        children: [
          { id: 'bp-1', label: 'Founder técnico', parentSection: 'estrategia-de-marketing' },
          { id: 'bp-2', label: 'Director de Marketing', parentSection: 'estrategia-de-marketing' },
          { id: 'bp-3', label: 'Pyme tradicional', parentSection: 'estrategia-de-marketing' },
        ],
      },
      {
        id: 'tam-sam-som',
        label: 'TAM · SAM · SOM',
        children: [
          { id: 'tam', label: 'TAM', parentSection: 'estrategia-de-marketing' },
          { id: 'sam', label: 'SAM', parentSection: 'estrategia-de-marketing' },
          { id: 'som', label: 'SOM', parentSection: 'estrategia-de-marketing' },
        ],
      },
      {
        id: 'customer-journey',
        label: 'Customer Journey',
        children: [
          { id: 'cj', label: 'Etapas del journey', parentSection: 'estrategia-de-marketing' },
        ],
      },
      {
        id: 'business-canvas',
        label: 'Business Canvas',
        children: [
          { id: 'bc', label: 'Lienzo de modelo de negocio', parentSection: 'estrategia-de-marketing' },
        ],
      },
    ],
  },
  {
    id: 'plan-de-accion',
    number: '03',
    title: 'Plan de Acción',
    groups: [
      {
        id: 'objetivos-online',
        label: 'Objetivos de Marketing Online',
        children: [
          { id: 'obj', label: 'KPIs principales', parentSection: 'plan-de-accion' },
        ],
      },
      {
        id: 'presupuesto',
        label: 'Presupuesto (Cuadro)',
        children: [
          { id: 'pres', label: 'Distribución', parentSection: 'plan-de-accion' },
        ],
      },
      {
        id: 'estrategia-digital',
        label: 'Estrategia de Marketing Digital',
        children: [
          { id: 'captacion', label: 'Fase de Captación', parentSection: 'plan-de-accion' },
          { id: 'conversion', label: 'Fase de Conversión', parentSection: 'plan-de-accion' },
          { id: 'fidelizacion', label: 'Fase de Fidelización', parentSection: 'plan-de-accion' },
        ],
      },
    ],
  },
  {
    id: 'plan-financiero',
    number: '04',
    title: 'Plan Financiero',
    groups: [
      {
        id: 'pf-mando',
        label: 'Cuadro de mando integral',
        children: [
          { id: 'pf-mando-detail', label: 'Ticket · Beneficio · ROI', parentSection: 'plan-financiero' },
        ],
      },
      {
        id: 'pf-ingresos',
        label: 'Ingresos',
        children: [
          { id: 'pf-ingresos-detail', label: 'Variables · Fijos · Medios', parentSection: 'plan-financiero' },
        ],
      },
      {
        id: 'pf-costes',
        label: 'Costes',
        children: [
          { id: 'pf-costes-detail', label: 'Fijos · Variables · Medios', parentSection: 'plan-financiero' },
        ],
      },
      {
        id: 'pf-explotacion',
        label: 'Resultado de Explotación',
        children: [
          { id: 'pf-explotacion-detail', label: 'ROI · ROAS', parentSection: 'plan-financiero' },
        ],
      },
      {
        id: 'pf-equilibrio',
        label: 'Punto de Equilibrio (Año 1)',
        children: [
          { id: 'pf-equilibrio-detail', label: 'Break-even', parentSection: 'plan-financiero' },
        ],
      },
      {
        id: 'pf-ratios',
        label: 'Ratios (Totales)',
        children: [
          { id: 'pf-ratios-detail', label: 'Indicadores agregados', parentSection: 'plan-financiero' },
        ],
      },
    ],
  },
];

export const EXTRA_LINKS = [
  { id: 'calculadora', label: 'Calculadora', number: '05' },
  { id: 'quienes-somos', label: 'Quiénes somos', number: '06' },
  { id: 'qa', label: 'Q&A', number: '07' },
];
