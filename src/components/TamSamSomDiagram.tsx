import { ReactNode, useState } from 'react';
import { InlineLink, SeeAlso } from './InlineLink';

type Item = {
  id: string;
  label: string;
  caption: string;
  primary: string;
  secondary?: string;
  description: ReactNode;
};

const OBJETIVO_LINK = {
  sectionId: 'plan-de-accion',
  groupId: 'objetivos-online',
};

const ITEMS: Item[] = [
  {
    id: 'tam',
    label: 'TAM',
    caption: 'Mercado total disponible',
    primary: '2.975.490',
    secondary: 'PYMES en España',
    description: (
      <p>
        El mercado total disponible para Métrica Marketing está compuesto por
        2.975.490 PYMES en España, que representan el universo completo de
        empresas potencialmente interesadas en mejorar su marketing.{' '}
        <InlineLink to={OBJETIVO_LINK}>Objetivo inicial</InlineLink>.
      </p>
    ),
  },
  {
    id: 'sam',
    label: 'SAM',
    caption: 'Mercado servible',
    primary: '340.000',
    secondary: 'empresas con intención digital',
    description: (
      <div className="flex flex-col gap-2.5">
        <p>
          <InlineLink to={OBJETIVO_LINK}>Objetivo inicial</InlineLink>:
          empresas que cumplen una condición clave — han demostrado intención
          real de mejorar su presencia digital.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Solicitudes Kit Digital:</strong> ≈ 1.200.000 (alto interés
            en digitalización).
          </li>
          <li>
            <strong>Concedidas:</strong> 860.000.
          </li>
          <li>
            <strong>No beneficiarias:</strong> ≈ 340.000 empresas con interés
            pero sin ayuda recibida.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'som',
    label: 'SOM',
    caption: 'Cuota objetivo inicial',
    primary: '299.700 €',
    secondary: '147 clientes Año 1',
    description: (
      <div className="flex flex-col gap-2.5">
        <p>
          <InlineLink to={OBJETIVO_LINK}>Objetivo inicial</InlineLink> y
          justificación: enfoque conservador y estratégico para validar el
          modelo y construir una base sólida de clientes.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Pack Estándar (600 €):</strong> 100 clientes → 60.000 €.
          </li>
          <li>
            <strong>Pack Premium (5.100 €):</strong> 47 clientes → 239.700 €.
          </li>
        </ul>
      </div>
    ),
  },
];

function Card({ item }: { item: Item }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article
      className="rounded-2xl bg-white p-6 md:p-7 flex flex-col"
      style={{
        boxShadow: '0 0 0 0.5px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.05)',
      }}
    >
      <div
        className="font-mono text-[11px] uppercase tracking-wider"
        style={{ color: '#273C46' }}
      >
        {item.label}
      </div>
      <p className="text-xs mt-1" style={{ color: 'rgba(5,26,36,0.55)' }}>
        {item.caption}
      </p>

      <div
        className="font-serif font-semibold text-3xl md:text-4xl mt-5 leading-none tracking-tight whitespace-nowrap"
        style={{ color: '#051A24' }}
      >
        {item.primary}
      </div>
      {item.secondary && (
        <p
          className="text-xs md:text-sm mt-2"
          style={{ color: 'rgba(5,26,36,0.7)' }}
        >
          {item.secondary}
        </p>
      )}

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="mt-5 self-start inline-flex items-center gap-1.5 text-xs md:text-sm font-medium rounded-full px-3 py-1.5 transition-colors hover:bg-black/5"
        style={{
          color: '#0D212C',
          boxShadow: '0 0 0 0.5px rgba(0,0,0,0.08)',
        }}
      >
        <span
          aria-hidden="true"
          className={`inline-block w-3.5 h-3.5 transition-transform ${expanded ? 'rotate-45' : ''}`}
        >
          <svg viewBox="0 0 14 14" fill="none" className="w-full h-full">
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
        {expanded ? 'Ver menos' : 'Ver más'}
      </button>

      {expanded && (
        <div
          className="mt-4 text-sm md:text-[15px] leading-relaxed"
          style={{ color: 'rgba(5,26,36,0.75)' }}
        >
          {item.description}
        </div>
      )}
    </article>
  );
}

export function TamSamSomDiagram() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        {ITEMS.map((it) => (
          <Card key={it.id} item={it} />
        ))}
      </div>
      <SeeAlso
        links={[
          {
            label: 'Objetivos de Marketing Online',
            to: {
              sectionId: 'plan-de-accion',
              groupId: 'objetivos-online',
            },
          },
          {
            label: 'Presupuesto',
            to: {
              sectionId: 'plan-de-accion',
              groupId: 'presupuesto',
            },
          },
        ]}
      />
    </div>
  );
}

export default TamSamSomDiagram;
