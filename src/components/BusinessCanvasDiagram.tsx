type Block = {
  title: string;
  bullets: string[];
};

const RECURSOS: Block = {
  title: 'Recursos necesarios',
  bullets: [
    'Personal: community manager, creativos, etc.',
    'Técnicos: herramientas de IA, plataformas.',
    'Tecnológicos: redes sociales, herramientas de seguimiento como CRM.',
    'Financieros: presupuesto, pagos de IA.',
  ],
};

const CANALES_CONTACTO: Block = {
  title: 'Canales de contacto y comercialización',
  bullets: [
    'Canales de impacto y captación: Email Marketing, LinkedIn y buscadores (SEM/SEO).',
    'Canales de conversión: Online · Web.',
  ],
};

const BENEFICIO: Block = {
  title: 'Beneficio digital percibido',
  bullets: ['Personalización con IA aportando valor humano.'],
};

const CANALES_ATENCION: Block = {
  title: 'Canales de atención y relación con los usuarios',
  bullets: [
    'Atención a usuarios y clientes: Email, página web.',
    'Fidelización de usuarios y clientes: Email Marketing, LinkedIn.',
    'Comunidad social (Online/Mobile): Redes sociales (contenido informativo) y LinkedIn.',
  ],
};

const ACTIVIDADES: Block = {
  title: 'Actividades clave',
  bullets: [
    'Gestión de campañas: Email Marketing, marketing de afiliación y redes sociales.',
    'Gestión de contenidos para redes sociales.',
    'Gestión Web y SEO.',
  ],
};

const USUARIOS: Block = {
  title: 'Usuarios y clientes online',
  bullets: ['B2B', 'Modelo Freemium'],
};

const RESULTADOS: Block = {
  title: 'Resultados',
  bullets: [
    'Leads por canal: leads cualificados obtenidos de Email Marketing, Redes Sociales, Buscadores, etc.',
    'Ventas por canal: canal en buscadores y email marketing.',
    'Rentabilidad comercial: modelo freemium, monetización de la contratación de planes y canales de conversión.',
  ],
};

const ALIANZAS: Block = {
  title: 'Alianzas estratégicas online',
  bullets: [
    'Servicios digitales: agencia de desarrollo web, empresa SEO/SEM, consultoras tecnológicas.',
    'Canales de venta: asociaciones empresariales, cámaras de comercio y consultoras de digitalización.',
    'Plataformas tecnológicas: CRM o campañas de gestión de campañas.',
  ],
};

const OFERTA: Block = {
  title: 'Oferta y diferenciación',
  bullets: [
    'Creación de plan de marketing con IA.',
    'Servicios de consultoría para implementación del plan.',
    'Tres tipos de packs a elegir entre tipo de empresa.',
  ],
};

const COSTES: Block = {
  title: 'Estructura de costes',
  bullets: [
    'Costes fijos: personal (trabajadores), plataforma de IA, mantenimiento de plataformas (web, etc.).',
    'Costes variables: campañas y nuestro salario.',
  ],
};

function Cell({ block, className = '' }: { block: Block; className?: string }) {
  return (
    <article
      className={`rounded-xl bg-white p-4 md:p-5 flex flex-col h-full ${className}`}
      style={{ boxShadow: '0 0 0 0.5px rgba(0,0,0,0.08)' }}
    >
      <h4
        className="font-mono text-[10px] md:text-[11px] uppercase tracking-wider mb-2"
        style={{ color: '#273C46' }}
      >
        {block.title}
      </h4>
      <ul className="text-xs md:text-sm leading-snug space-y-1.5" style={{ color: '#0D212C' }}>
        {block.bullets.map((b, i) => (
          <li key={i} className="flex gap-1.5">
            <span aria-hidden="true" className="flex-shrink-0">·</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function BusinessCanvasDiagram() {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
          <Cell block={RECURSOS} className="md:row-span-2" />
          <div className="flex flex-col gap-2">
            <Cell block={CANALES_CONTACTO} />
            <Cell block={BENEFICIO} />
          </div>
          <Cell block={CANALES_ATENCION} className="md:row-span-2" />
          <div className="flex flex-col gap-2">
            <Cell block={ACTIVIDADES} />
            <Cell block={USUARIOS} />
          </div>
          <Cell block={RESULTADOS} className="md:row-span-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <Cell block={ALIANZAS} />
          <Cell block={OFERTA} />
          <Cell block={COSTES} />
        </div>
      </div>
    </div>
  );
}

export default BusinessCanvasDiagram;
