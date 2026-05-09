import type { ChannelDetails } from '../components/ChannelEmbudo';

export type ChannelData = {
  title: string;
  filename: string;
  alt: string;
  details: ChannelDetails;
};

export const CAPTACION_CHANNELS: ChannelData[] = [
  {
    title: 'LinkedIn — 18.000 €',
    filename: 'Captacionlinkedin.JPG',
    alt: 'Embudo de captación LinkedIn',
    details: {
      justificacion:
        'LinkedIn se prioriza en captación por su alta adecuación a un público B2B cualificado, clave para servicios de consultoría. Permite una segmentación precisa, comunicación alineada con la propuesta de valor y construcción de autoridad para atraer leads cualificados en las primeras fases del embudo.',
      objetivos: [
        'Generar 1.350 leads cualificados.',
        'Alcanzar 2.000.000 de impresiones.',
        'Lograr una tasa de respuesta y conversión a lead ≥ 5%.',
      ],
      estrategia:
        'Enfoque consultivo y profesional dirigido a pymes, autónomos y directivos con necesidades reales. Combina prospección directa con mensajes personalizados y campañas de LinkedIn Ads segmentadas, derivando tráfico a la landing page.',
      tacticas: [
        'Prospección segmentada por cliente, cargo, tamaño, ubicación y actividad reciente.',
        'Mensajes privados personalizados orientados al problema concreto del negocio.',
        'Contenido orgánico de autoridad para generar confianza.',
        'Campañas de LinkedIn Ads segmentadas.',
        'Reimpacto y seguimiento hasta convertir el interés en lead.',
      ],
      kpis: [
        { kpi: 'Impresiones', objetivo: '1.800.000' },
        { kpi: 'Click Through Rate (CTR)', objetivo: '1,5%' },
        { kpi: 'Clics generados', objetivo: '27.000' },
        { kpi: 'Tasa de respuesta mensajes privados', objetivo: '5%' },
        { kpi: 'Leads generados', objetivo: '1.350' },
      ],
    },
  },
  {
    title: 'SEM — 11.250 €',
    filename: 'Captacionseosem.JPG',
    alt: 'Embudo de captación SEO/SEM',
    details: {
      justificacion:
        'SEO y SEM permiten llegar a usuarios con intención activa de búsqueda. SEM ofrece resultados inmediatos con campañas de pago; SEO aporta visibilidad orgánica sostenible a medio-largo plazo.',
      objetivos: [
        'Generar 844 leads cualificados.',
        'Tasa media de conversión del 1,2% en campañas de pago.',
        'Posicionar 9 palabras clave estratégicas vinculadas a plan de marketing y consultoría.',
      ],
      estrategia:
        'SEM se orienta a keywords long tail de alta intención y baja competencia para optimizar la inversión y compensar la baja autoridad inicial. SEO se apoya en contenidos que responden dudas concretas y búsquedas basadas en IA con preguntas completas.',
      tacticas: [
        'Google Ads en búsquedas específicas como "plan de marketing para pymes" o "consultoría marketing digital".',
        'Landing optimizada con mensaje claro, prueba social y CTA centrado en obtener el plan.',
        'Contenido FAQ, blog, clusters temáticos y optimización técnica (velocidad, mobile-first, datos estructurados).',
        'Remarketing display 180 días para reimpactar visitantes no convertidos.',
      ],
      kpis: [
        { kpi: 'Tráfico mensual estimado', objetivo: '45.000 visitas' },
        { kpi: 'Tasa de conversión SEM', objetivo: '1,2%' },
        { kpi: 'Leads generados SEM', objetivo: '120' },
        { kpi: 'Leads generados SEO', objetivo: '50' },
        { kpi: 'Total leads SEO + SEM', objetivo: '170' },
        { kpi: 'CPC medio', objetivo: 'Optimizado (baja competencia)' },
      ],
    },
  },
  {
    title: 'Email Marketing — 6.750 €',
    filename: 'Captacionemailmarketing.JPG',
    alt: 'Embudo de captación Email Marketing',
    details: {
      justificacion:
        'Herramienta de prospección directa y segmentada, clave para contactar decisores de pymes y autónomos con baja fricción. Usa bases externas RGPD-compliant para impactar nichos con necesidad latente de digitalización.',
      objetivos: [
        'Generar 506 leads cualificados.',
        'Tasa de apertura sostenida entre 25% y 35%.',
        'Alcanzar un CTR entre 2% y 5%.',
        'Conversión de clic a lead entre 1% y 3%.',
      ],
      estrategia:
        'Prospección outbound automatizada y educativa que intercepta decisores en su bandeja de entrada. Nurturing progresivo con insights, datos y casos de éxito que llevan a solicitar el plan personalizado.',
      tacticas: [
        'Bases externas segmentadas por sector, tamaño (1-10 y 10-50 empleados) y ubicación en España, garantizando RGPD.',
        'Secuencias de nurturing en 3 impactos: identificar problema → probar valor (casos/IA) → CTA a landing.',
        'Personalización dinámica con nombre y empresa en asunto y cuerpo.',
        'Pruebas A/B en asuntos y horarios; monitorización de entregabilidad y reputación de dominio.',
        'Alineación total con landing optimizada que refuerza el mensaje de cada correo.',
      ],
      kpis: [
        { kpi: 'Leads generados', objetivo: '506 leads' },
        { kpi: 'Tasa de apertura', objetivo: '25%' },
        { kpi: 'Click Through Rate (CTR)', objetivo: '3%' },
        { kpi: 'Tasa de conversión (clic a lead)', objetivo: '1%' },
      ],
    },
  },
  {
    title: 'Redes Sociales — 4.500 €',
    filename: 'Captacionredess.JPG',
    alt: 'Embudo de captación Redes Sociales',
    details: {
      justificacion:
        'Canal clave para captar la atención de pymes y autónomos en la fase inicial del Customer Journey. Permite difundir contenido educativo en LinkedIn, Instagram y TikTok, demostrar autoridad y dirigir tráfico cualificado a la landing.',
      objetivos: [
        'Generar 1.012 leads cualificados.',
        'Alcanzar 4.520.000 impresiones.',
        'Conseguir 67.800 clics a la landing.',
        'Tasa de conversión clic a lead del 10%.',
      ],
      estrategia:
        'Combinación de contenido orgánico y publicidad pagada en Meta Ads y TikTok Ads. Enfoque educativo, persuasivo y orientado a la acción, con A/B testing y ajuste continuo de segmentaciones.',
      tacticas: [
        'Perfiles optimizados en TikTok, Instagram y Facebook adaptados a cada plataforma.',
        'Campañas en Meta Ads y TikTok Ads para tráfico y captación de leads.',
        'Contenido orientado a problemas y soluciones, con CTAs hacia la landing.',
        'Alineación entre anuncio y página de destino.',
        'Testing continuo de creatividades, copys y formatos.',
      ],
      kpis: [
        { kpi: 'Impresiones', objetivo: '4.520.000' },
        { kpi: 'Click Through Rate (CTR)', objetivo: '1,5%' },
        { kpi: 'Clics generados', objetivo: '67.800' },
        { kpi: 'Tasa de conversión', objetivo: '10%' },
        { kpi: 'Leads generados', objetivo: '1.012' },
      ],
    },
  },
  {
    title: 'Marketing de Afiliación — 4.500 €',
    filename: 'Captacionafiliacion.JPG',
    alt: 'Embudo de captación Marketing de Afiliación',
    details: {
      justificacion:
        'Aprovecha la credibilidad de terceros para llegar a audiencias cualificadas y reducir la desconfianza hacia agencias. Encaja con un público objetivo que consume contenido educativo sobre negocio, marketing digital e IA en redes sociales.',
      objetivos: [
        'Generar 337 leads cualificados.',
        'Alcanzar 1.004.466 impresiones a través de afiliados.',
        'Conseguir un CTR del 1,5%.',
        'Tasa de conversión clic a lead del 15%.',
      ],
      estrategia:
        'Colaboración con dos influencers del sector — uno especializado en marketing digital y otro en IA aplicada a negocios — que actúan como prescriptores y presentan el plan de marketing personalizado de forma natural en su contenido.',
      tacticas: [
        'Selección de afiliados con audiencia B2B, contenido educativo y buen engagement.',
        'Colaboraciones patrocinadas con vídeos explicativos y casos reales.',
        'Mensajes enfocados en problemas como falta de clientes o ausencia de estrategia.',
        'Enlaces trackeados, códigos de afiliado y landing alineada con el contenido.',
        'Remuneración por rendimiento y optimización continua del canal.',
      ],
      kpis: [
        { kpi: 'Impresiones', objetivo: '1.004.466' },
        { kpi: 'CTR', objetivo: '1,5%' },
        { kpi: 'Clics generados', objetivo: '15.067' },
        { kpi: 'Tasa de conversión clic a lead', objetivo: '15%' },
        { kpi: 'Leads generados (potencial)', objetivo: '2.260' },
        { kpi: 'Leads objetivo final', objetivo: '337' },
      ],
    },
  },
];

export const CONVERSION_CHANNELS: ChannelData[] = [
  {
    title: 'LinkedIn — 16.000 €',
    filename: 'Converlinkedin.JPG',
    alt: 'Embudo de conversión LinkedIn',
    details: {
      justificacion:
        'LinkedIn reimpacta a una audiencia que ya ha mostrado interés y la acompaña hasta el cierre de la venta. En un servicio de consultoría como Métrica Marketing, donde la decisión es meditada, ayuda a reducir fricción, aumentar la confianza y detectar señales de interés en tiempo real.',
      objetivos: [
        'Convertir 59 clientes al año.',
        'Tasa de conversión del 4,4% sobre los leads impactados en esta fase.',
        'Reimpactar de forma efectiva a 1.350 leads que ya interactuaron con la marca.',
      ],
      estrategia:
        'Modelo de remarketing de alto valor combinando anuncios de retargeting con analítica avanzada mediante Smart Links. La formación especializada en IA actúa como incentivo diferencial para avanzar al prospecto a la decisión final.',
      tacticas: [
        'Retargeting estratégico con LinkedIn Ads sólo a usuarios que ya interactuaron con la marca.',
        'Smart Links de Sales Navigator para medir el comportamiento de los materiales enviados.',
        'Protocolo de incentivos dinámicos con descuentos o módulos extra según interacción.',
      ],
      kpis: [
        { kpi: 'Leads', objetivo: '40%' },
        { kpi: 'Leads convertidos (clientes)', objetivo: '100% de clientes activos' },
        { kpi: 'Tasa de conversión', objetivo: 'Incremento progresivo' },
      ],
    },
  },
  {
    title: 'SEM — 10.000 €',
    filename: 'Conversem.JPG',
    alt: 'Embudo de conversión SEO/SEM',
    details: {
      justificacion:
        'Recupera el interés de usuarios interesados que no completan la conversión en la primera visita. Las campañas SEM de display recuerdan la propuesta de valor reduciendo fricciones en decisiones consultivas con ciclos largos.',
      objetivos: [
        'Convertir usuarios previamente impactados en clientes finales mediante remarketing.',
        'Tasa de conversión del 25% sobre usuarios reimpactados.',
        'Generar aproximadamente 7 clientes al año a partir de campañas display.',
        'Reimpactar a usuarios que visitaron la web/landing en los últimos 180 días.',
      ],
      estrategia:
        'Campañas de remarketing display sobre usuarios con interés previo no convertido, reforzando la propuesta de valor con impactos repetidos y mensajes claros que resuelven objeciones (precio, confianza, claridad).',
      tacticas: [
        'Campañas en Google Display Network para visitantes de landing/web sin formulario.',
        'Segmentación temporal hasta 180 días, priorizando interacciones recientes.',
        'Banners adaptados (estáticos y dinámicos) con refuerzo de valor y eliminación de objeciones.',
        'Optimización por comportamiento: creatividades para no convertidos y abandonos de formulario.',
        'Refuerzo de CTA: "Solicita tu plan de marketing" / "Descubre tu estrategia personalizada".',
        'Optimización continua: A/B testing, ajuste de frecuencias y mejora de conversión.',
      ],
      kpis: [
        { kpi: 'Tasa de conversión (remarketing)', objetivo: '5%' },
        { kpi: 'Usuarios impactados (base estimada)', objetivo: '147' },
        { kpi: 'Clientes generados', objetivo: '7' },
        { kpi: 'Ventana de remarketing', objetivo: '180 días' },
      ],
    },
  },
  {
    title: 'Email Marketing — 6.000 €',
    filename: 'Converemailmark.JPG',
    alt: 'Embudo de conversión Email Marketing',
    details: {
      justificacion:
        'Clave para nutrir leads cualificados de forma personalizada, guiándolos desde la consideración del Plan de Marketing Base hasta la compra de packs.',
      objetivos: [
        'Convertir 22 clientes en el primer año.',
        'Tasa de conversión a cliente del 5% sobre los correos de conversión enviados.',
        'Confirmar el interés real del cliente antes del cierre comercial.',
      ],
      estrategia:
        'Secuencia automatizada para usuarios post-landing. Envío de hasta el 60% del plan personalizado para reforzar utilidad, reducir incertidumbre y resolver objeciones con prueba social y CTAs claros hacia reunión o contratación.',
      tacticas: [
        'Secuencia 3 emails: Email 1 (24h, 60% plan + CTA); Email 2 (48h si abierto, objeciones precio/tiempo); Email 3 (72h si abierto, urgencia + contacto).',
        'Email 1: asunto curioso ("Tu plan está casi listo"), intro de agradecimiento, bloque de hallazgos y CTAs ("Activar ahora" / "Contacta").',
        'Segmentación por interés y personalización por perfil.',
        'Landing de packs alineada y seguimiento comercial.',
        'Incentivo: sesión gratuita.',
      ],
      kpis: [
        { kpi: 'Tasa de apertura email 1', objetivo: '35%' },
        { kpi: 'Click Through Rate (CTR)', objetivo: '15%' },
        { kpi: 'Tasa de conversión (lead a cliente)', objetivo: '4,3%' },
        { kpi: 'Clientes convertidos', objetivo: '22' },
      ],
    },
  },
  {
    title: 'Redes Sociales — 4.000 €',
    filename: 'Converredessociales.JPG',
    alt: 'Embudo de conversión Redes Sociales',
    details: {
      justificacion:
        'Gran parte de usuarios no convierte en el primer impacto. Reimpactos vía Instagram y TikTok con pixel de Meta y Meta Business Suite segmentan a interesados previos. En servicios reflexivos, los incentivos y la urgencia temporal facilitan el cierre.',
      objetivos: [
        'Convertir 44 clientes al año a partir de los leads generados en redes.',
        'Tasa de conversión del 4,3% sobre los 1.012 leads de captación.',
        'Reimpactar al 100% de los usuarios que han interactuado con la marca.',
      ],
      estrategia:
        'Remarketing exclusivo a interesados (visitas landing, clics anuncios, engagement) combinando reimpacto pixel Meta, incentivos de valor percibido y urgencia para cerrar la contratación de packs.',
      tacticas: [
        'Pixel Meta y audiencias segmentadas por visitas landing, clics anuncios e interacciones.',
        'Campañas Meta Ads de remarketing con mensajes de valor, recordatorio del plan y objeciones.',
        'Incentivos de compra: formación IA, consejos estratégicos, recursos exclusivos.',
        'Urgencia y escasez: ofertas temporales y acceso limitado.',
        'Contenido bottom funnel: preview del plan, ejemplos reales y mensajes de acción.',
      ],
      kpis: [
        { kpi: 'Leads impactados (remarketing)', objetivo: '1.012' },
        { kpi: 'Tasa de conversión lead a cliente', objetivo: '4,3%' },
        { kpi: 'Clientes generados', objetivo: '44' },
        { kpi: 'Frecuencia de impacto', objetivo: '3 - 6 impactos por usuario' },
        { kpi: 'Coste por adquisición', objetivo: 'Optimizado mediante remarketing' },
      ],
    },
  },
  {
    title: 'Marketing de Afiliación — 4.000 €',
    filename: 'Convemktafiliacion.JPG',
    alt: 'Embudo de conversión Marketing de Afiliación',
    details: {
      justificacion:
        'Aporta credibilidad y reduce la incertidumbre del usuario antes de contratar. La recomendación de un afiliado actúa como acelerador de compra sobre personas que ya han mostrado interés. En un servicio consultivo, la confianza pesa mucho en la decisión final.',
      objetivos: [
        'Convertir 14 clientes en el primer año a partir de los 337 leads de afiliación.',
        'Tasa de conversión a cliente del 10% en usuarios impactados en esta fase.',
        'Incentivar la contratación de packs mediante un sistema de descuento progresivo según el valor del servicio.',
      ],
      estrategia:
        'Colaboración con afiliados especializados en marketing e IA que actúan como prescriptores ante una audiencia ya sensibilizada. Su rol es activar la decisión final mediante una oferta concreta y limitada vinculada a los packs. El descuento progresivo refuerza la confianza y funciona como palanca de cierre.',
      tacticas: [
        'Afiliados que ya hayan participado en captación o tengan comunidad afín al público objetivo.',
        'Impacto 1: publicación inicial del afiliado con propuesta y código personalizado de descuento.',
        'Impacto 2: recordatorio a usuarios que interactuaron, reforzando valor y descuento progresivo según pack.',
        'Impacto 3: mensaje final con urgencia suave para cerrar antes de que finalice el incentivo.',
      ],
      kpis: [
        { kpi: 'Leads impactados (remarketing)', objetivo: '337' },
        { kpi: 'Tasa de conversión lead a cliente', objetivo: '4%' },
        { kpi: 'Clientes generados', objetivo: '14' },
      ],
    },
  },
];

export const FIDELIZACION_CHANNELS: ChannelData[] = [
  {
    title: 'Email Marketing — 7.500 €',
    filename: 'Fideemail.JPG',
    alt: 'Embudo de fidelización Email Marketing',
    details: {
      justificacion:
        'El email pasa de prospección a retención, prolongando el LTV del cliente y reforzando la autoridad de Métrica Marketing mediante newsletters exclusivas. Capitaliza la confianza existente para educar sobre nuevas necesidades digitales y promover cross-selling de servicios complementarios.',
      objetivos: [
        'Fomentar la recurrencia: 40% de clientes contratando módulos adicionales en el primer año.',
        'Generar 59 ventas adicionales sobre los 147 clientes estimados.',
        'Open Rate superior al 45% en un público cautivo.',
      ],
      estrategia:
        'Bajo el principio de "Educación orientada a la venta", la newsletter ofrece alto valor con novedades sobre algoritmos, casos de éxito y tendencias en IA, posicionando los módulos formativos como necesidad lógica para escalar resultados.',
      tacticas: [
        'Newsletter VIP con regla 80/20: mensual o quincenal, 80% formativo (casos prácticos) y 20% promoción nativa.',
        'Segmentación por madurez: mensajes adaptados a Pack Estándar (táctica) vs. Premium (avanzada).',
        'Funnels de reactivación: secuencia automática de 2-3 emails con incentivos (tutorías de 15 min) tras clics.',
      ],
      kpis: [
        { kpi: 'Volumen de audiencia (base de clientes)', objetivo: '147 clientes activos' },
        { kpi: 'Tasa de apertura', objetivo: '45%' },
        { kpi: 'Tasa de conversión (cross-selling)', objetivo: '40% de la base' },
        { kpi: 'Volumen de ventas adicionales', objetivo: '59 módulos contratados' },
      ],
    },
  },
  {
    title: 'Redes Sociales — 7.500 €',
    filename: 'Fideredessociales.JPG',
    alt: 'Embudo de fidelización Redes Sociales',
    details: {
      justificacion:
        'Las redes evolucionan de captación a relación estratégica, educación y cross-selling para maximizar el LTV mediante servicios como módulos de formación. Instagram, Facebook y TikTok mantienen contacto constante con clientes post-plan, con bajo coste comparado a la adquisición inicial.',
      objetivos: [
        'Fomentar la continuidad de la relación con clientes mediante contenido de valor.',
        'Impulsar la contratación de módulos de formación adicionales.',
        'Tasa de conversión cross-selling del 40% sobre la base de clientes.',
        'Incrementar el ticket medio y la recurrencia.',
      ],
      estrategia:
        'Usar redes como canal de fidelización activa, con contenido educativo segmentado vía Meta Business Suite para clientes existentes, posicionando Métrica Marketing como partner continuo en su crecimiento.',
      tacticas: [
        'Contenido educativo: mejoras post-plan, áreas avanzadas, casos reales y "siguiente paso".',
        'Promoción de módulos integrada como evolución natural para profundizar estrategia o resolver bloqueos.',
        'Segmentación: listas personalizadas por pack (Estándar vs. Premium).',
        'Remarketing a clientes con beneficios y resultados.',
        'Formatos engagement: posts/reels/stories en Instagram, anuncios en Facebook, vídeos breves en TikTok.',
        'CTAs: "Lleva tu estrategia al siguiente nivel" / "Optimiza con formación avanzada".',
        'Comunidad: fomentar pertenencia y confianza.',
      ],
      kpis: [
        { kpi: 'Tasa de conversión (cross-selling)', objetivo: '40%' },
        { kpi: 'Clientes impactados (base actual)', objetivo: '100% de clientes activos' },
        { kpi: 'Engagement en redes sociales', objetivo: 'Incremento progresivo' },
        { kpi: 'Ventas de módulos de formación', objetivo: 'Crecimiento sostenido' },
        { kpi: 'Frecuencia de impacto', objetivo: 'Recurrente (semanal)' },
      ],
    },
  },
];
