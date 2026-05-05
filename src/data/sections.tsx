import { ReactNode } from 'react';
import { BusinessCanvasDiagram } from '../components/BusinessCanvasDiagram';
import { CustomerJourneyDiagram } from '../components/CustomerJourneyDiagram';

function Chip({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-block rounded-full px-3 py-1 text-[11px] md:text-xs"
      style={{ backgroundColor: '#F1F5F7', color: '#0D212C' }}
    >
      {children}
    </span>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-1">
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  );
}

function BuyerHeader({ chips }: { chips: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {chips.map((c, i) => (
        <Chip key={i}>{c}</Chip>
      ))}
    </div>
  );
}

export type LeafBullet = {
  title: string;
  body: ReactNode;
};

export type SectionLeaf = {
  id: string;
  label: string;
  header?: ReactNode;
  bullets?: LeafBullet[];
  bulletsAlwaysExpanded?: boolean;
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
              <img
                src={`${import.meta.env.BASE_URL}Cadenadevalor.JPG`}
                alt="Cadena de valor de Métrica Marketing"
                className="w-full rounded-2xl"
                style={{
                  boxShadow:
                    '0 0 0 0.5px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)',
                }}
              />
            ),
          },
          {
            id: 'ventaja-competitiva',
            label: 'Ventaja competitiva',
            bulletsAlwaysExpanded: true,
            bullets: [
              {
                title: 'Coste y eficiencia',
                body: 'Uso de IA (LLMs y sistemas multiagente) reduce costes y tiempos. Permite ofrecer un plan gratuito como fuerte herramienta de captación.',
              },
              {
                title: 'Modelo híbrido diferencial',
                body: 'Integra estrategia + ejecución en una sola solución. Supera a SaaS (solo recomiendan) y agencias (lentas y caras).',
              },
              {
                title: 'Tecnología avanzada',
                body: 'Sistemas multiagente permiten analizar, personalizar y optimizar. Generan barreras de entrada frente a competidores.',
              },
              {
                title: 'Experiencia de cliente',
                body: 'Servicio rápido, personalizado y orientado a resultados. Adaptado al nuevo consumidor B2B (digital e inmediato).',
              },
              {
                title: 'Ventaja basada en datos',
                body: 'Aprendizaje continuo a partir de datos de clientes. Mejora constante del servicio y detección de oportunidades.',
              },
              {
                title: 'Sostenibilidad competitiva',
                body: 'Necesidad de innovación continua ante la comoditización de la IA. Especialización en nichos como clave diferencial.',
              },
            ],
          },
          {
            id: 'ciclo-de-vida',
            label: 'Ciclo de vida',
            detail: (
              <img
                src={`${import.meta.env.BASE_URL}Ciclodevida.JPG`}
                alt="Ciclo de vida de Métrica Marketing"
                className="w-full rounded-2xl"
                style={{
                  boxShadow:
                    '0 0 0 0.5px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)',
                }}
              />
            ),
          },
          {
            id: 'dafo',
            label: 'DAFO',
            bullets: [
              {
                title: 'Debilidades',
                body: (
                  <BulletList
                    items={[
                      'Riesgo de generar planes genéricos si el brief es pobre.',
                      'Dependencia de APIs externas de terceros.',
                      'Baja notoriedad de marca inicial.',
                      'Complejidad técnica del sistema.',
                      'Necesidad de mantenimiento y actualización constante.',
                    ]}
                  />
                ),
              },
              {
                title: 'Fortalezas',
                body: (
                  <BulletList
                    items={[
                      'Coste marginal de producción muy bajo gracias a la IA.',
                      'Modelo de captación de leads de alto valor (lead magnet).',
                      'Orientación a ROI y resultados medibles.',
                      'Optimización continua basada en datos.',
                      'Capacidad de adaptación rápida al mercado.',
                    ]}
                  />
                ),
              },
              {
                title: 'Amenazas',
                body: (
                  <BulletList
                    items={[
                      'Entrada rápida de competidores con herramientas similares.',
                      'Desconfianza cultural hacia planes "hechos con la IA".',
                      'Cambios constantes en algoritmos de marketing digital.',
                      'Alta sensibilidad al precio.',
                      'Regulación (RGPD, AI Act).',
                    ]}
                  />
                ),
              },
              {
                title: 'Oportunidades',
                body: (
                  <BulletList
                    items={[
                      'PYMES en España necesitadas de digitalización.',
                      'Creciente adopción de la IA en el sector pyme.',
                      'Ayudas públicas como el Kit Digital que impulsan la demanda.',
                      'Demanda de soluciones rápidas y accesibles.',
                      'Tendencia a modelos flexibles y bajo demanda.',
                      'Posibilidad de especialización en nichos.',
                    ]}
                  />
                ),
              },
            ],
          },
          {
            id: 'came',
            label: 'CAME',
            bullets: [
              {
                title: 'Corregir debilidades',
                body: (
                  <BulletList
                    items={[
                      'Mejorar el briefing con formularios guiados inteligentes.',
                      'Reducir dependencia tecnológica (diversificar APIs).',
                      'Construir marca desde el inicio (branding + contenido).',
                      'Simplificar la complejidad técnica (UX clara).',
                      'Establecer mantenimiento y actualización continua.',
                    ]}
                  />
                ),
              },
              {
                title: 'Mantener fortalezas',
                body: (
                  <BulletList
                    items={[
                      'Mantener bajos costes gracias a la IA.',
                      'Optimizar el lead magnet como captación.',
                      'Reforzar orientación a ROI y resultados.',
                      'Potenciar el uso de datos para mejorar decisiones.',
                      'Mantener agilidad y adaptación al mercado.',
                    ]}
                  />
                ),
              },
              {
                title: 'Afrontar amenazas',
                body: (
                  <BulletList
                    items={[
                      'Diferenciar el modelo como híbrido (IA + humano).',
                      'Generar confianza (casos de éxito y resultados reales).',
                      'Adaptarse continuamente a cambios de algoritmos.',
                      'Estrategia de precios flexible (adaptada a pymes).',
                      'Cumplimiento legal como elemento de valor.',
                    ]}
                  />
                ),
              },
              {
                title: 'Explotar oportunidades',
                body: (
                  <BulletList
                    items={[
                      'Enfocar captación en pymes en proceso de digitalización.',
                      'Aprovechar el auge de la IA en empresas.',
                      'Utilizar ayudas públicas como argumento comercial.',
                      'Ofrecer soluciones rápidas y accesibles.',
                      'Especialización en nichos (estrategia clave).',
                    ]}
                  />
                ),
              },
            ],
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
                Democratizar el marketing digital con estrategias personalizadas,
                accesibles y eficaces para pymes y emprendedores.
              </p>
            ),
          },
          {
            id: 'vision',
            label: 'Visión',
            detail: (
              <p>
                Ser la referencia en marketing digital estratégico para pymes en
                España, impulsando la innovación y resultados con inteligencia
                artificial.
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
            label: 'Buyer 1 — Javier Ruiz',
            header: (
              <BuyerHeader
                chips={[
                  '40 años',
                  'Madrid',
                  'Director · Servicios B2B (50 empleados)',
                ]}
              />
            ),
            bullets: [
              {
                title: 'Perfil profesional',
                body: (
                  <BulletList
                    items={[
                      'Responsable de estrategia, operaciones y toma de decisiones.',
                      'Empresa con estructura plana, sin departamento de marketing.',
                      'Presupuesto limitado (inferior al 5% de facturación).',
                      'Nivel digital básico (web sencilla y redes poco activas).',
                      'Falta de tiempo y conocimientos en marketing.',
                    ]}
                  />
                ),
              },
              {
                title: 'Objetivos y necesidades',
                body: (
                  <BulletList
                    items={[
                      'Incrementar ventas (+20%) sin aumentar plantilla.',
                      'Generar leads de forma estable (más allá del boca a boca).',
                      'Contar con una estrategia clara y optimizada.',
                    ]}
                  />
                ),
              },
              {
                title: 'Comportamiento digital',
                body: (
                  <BulletList
                    items={[
                      'Uso profesional de LinkedIn.',
                      'Consultas en Google para soluciones concretas.',
                      'Comunicación a través de email corporativo.',
                    ]}
                  />
                ),
              },
              {
                title: 'Motivaciones',
                body: (
                  <BulletList
                    items={[
                      'Mejorar resultados sin aumentar estructura de costes.',
                      'Tomar decisiones con mayor claridad y control.',
                      'Profesionalizar el área de marketing sin crear un departamento interno.',
                    ]}
                  />
                ),
              },
              {
                title: 'Frustraciones',
                body: (
                  <BulletList
                    items={[
                      'Falta de tiempo para pensar estratégicamente.',
                      'Inversión en marketing sin resultados claros.',
                      'Dependencia de acciones aisladas sin coherencia.',
                    ]}
                  />
                ),
              },
              {
                title: 'Ruta hacia Métrica Marketing',
                body: (
                  <p>
                    Busca en Google soluciones para aumentar ventas, encuentra
                    contenido sobre estrategia de marketing, accede a un caso
                    de éxito y solicita información.
                  </p>
                ),
              },
              {
                title: 'Mensaje clave',
                body: (
                  <p className="font-serif italic" style={{ color: '#0D212C' }}>
                    "Convierte tu marketing en un sistema predecible sin
                    necesidad de ampliar tu equipo."
                  </p>
                ),
              },
            ],
          },
          {
            id: 'bp-2',
            label: 'Buyer 2 — Carlos Martín',
            header: (
              <BuyerHeader
                chips={[
                  '38 años',
                  'Madrid',
                  'Autónomo · Asesor financiero',
                  '40.000 € – 60.000 € / año',
                ]}
              />
            ),
            bullets: [
              {
                title: 'Perfil profesional',
                body: (
                  <BulletList
                    items={[
                      'Gestiona todas las áreas del negocio (captación, servicio, administración).',
                      'Presupuesto de marketing muy limitado.',
                      'Presencia digital básica (web sencilla, LinkedIn activo).',
                      'Poco tiempo y alta carga de trabajo.',
                      'Ingresos variables e incertidumbre financiera.',
                    ]}
                  />
                ),
              },
              {
                title: 'Objetivos y necesidades',
                body: (
                  <BulletList
                    items={[
                      'Conseguir clientes de forma constante.',
                      'Tener una guía clara de marketing.',
                      'Generar ingresos recurrentes.',
                      'Automatizar la captación para ahorrar tiempo.',
                      'Escalar sin contratar empleados.',
                    ]}
                  />
                ),
              },
              {
                title: 'Comportamiento digital',
                body: (
                  <BulletList
                    items={[
                      'Activo en LinkedIn e Instagram.',
                      'Realiza búsquedas frecuentes en Google sobre marketing.',
                      'Consume contenido formativo.',
                    ]}
                  />
                ),
              },
              {
                title: 'Motivaciones',
                body: (
                  <BulletList
                    items={[
                      'Tener estabilidad en la captación de clientes.',
                      'Entender qué acciones funcionan y por qué.',
                      'Simplificar su marketing sin complicaciones técnicas.',
                    ]}
                  />
                ),
              },
              {
                title: 'Frustraciones',
                body: (
                  <BulletList
                    items={[
                      'Miedo a invertir sin obtener resultados.',
                      'Sensación de improvisar en marketing.',
                      'Falta de claridad y estructura.',
                    ]}
                  />
                ),
              },
              {
                title: 'Ruta hacia Métrica Marketing',
                body: (
                  <p>
                    Descubre un anuncio en LinkedIn sobre planes de marketing
                    con IA, accede a la landing, recibe un caso de éxito y
                    completa el briefing.
                  </p>
                ),
              },
              {
                title: 'Mensaje clave',
                body: (
                  <p className="font-serif italic" style={{ color: '#0D212C' }}>
                    "Deja de improvisar y empieza a atraer clientes con una
                    estrategia clara y accionable."
                  </p>
                ),
              },
            ],
          },
          {
            id: 'bp-3',
            label: 'Buyer 3 — Antonio López',
            header: (
              <BuyerHeader
                chips={[
                  '45 años',
                  'Madrid',
                  'Director General · B2B (150 empleados)',
                ]}
              />
            ),
            bullets: [
              {
                title: 'Perfil profesional',
                body: (
                  <BulletList
                    items={[
                      'Responsable de decisiones estratégicas y de inversión.',
                      'Cuenta con presupuesto de marketing (5–8%), pero sin dirección clara.',
                      'Equipo interno descoordinado o sin liderazgo estratégico.',
                      'Presencia digital sólida, pero sin resultados consistentes.',
                      'Dificultad para interpretar datos y tomar decisiones.',
                      'Reticencia a contratar un CMO en plantilla.',
                    ]}
                  />
                ),
              },
              {
                title: 'Objetivos y necesidades',
                body: (
                  <BulletList
                    items={[
                      'Profesionalizar el marketing de la empresa.',
                      'Contar con dirección estratégica experta.',
                      'Coordinar acciones bajo una misma estrategia.',
                      'Mejorar la toma de decisiones basada en datos.',
                    ]}
                  />
                ),
              },
              {
                title: 'Comportamiento digital',
                body: (
                  <BulletList
                    items={[
                      'Activo en LinkedIn y eventos profesionales.',
                      'Uso habitual de email corporativo.',
                      'Búsqueda de soluciones estratégicas en Google.',
                    ]}
                  />
                ),
              },
              {
                title: 'Motivaciones',
                body: (
                  <BulletList
                    items={[
                      'Escalar el negocio con una estrategia sólida.',
                      'Optimizar la inversión en marketing.',
                      'Tener control y visibilidad sobre resultados.',
                    ]}
                  />
                ),
              },
              {
                title: 'Frustraciones',
                body: (
                  <BulletList
                    items={[
                      'Acciones de marketing desconectadas.',
                      'Falta de visión estratégica global.',
                      'Reportes poco claros o difíciles de interpretar.',
                    ]}
                  />
                ),
              },
              {
                title: 'Ruta hacia Métrica Marketing',
                body: (
                  <p>
                    Asiste a un evento o ve contenido en LinkedIn, identifica
                    la necesidad de dirección estratégica externa y solicita
                    una reunión.
                  </p>
                ),
              },
              {
                title: 'Mensaje clave',
                body: (
                  <p className="font-serif italic" style={{ color: '#0D212C' }}>
                    "Accede a dirección estratégica de marketing sin asumir el
                    coste de un CMO interno."
                  </p>
                ),
              },
            ],
          },
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
