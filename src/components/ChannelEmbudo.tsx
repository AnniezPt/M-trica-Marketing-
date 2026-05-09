import { ReactNode, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { publicAsset } from '../lib/publicAsset';

export type ChannelKpi = {
  kpi: string;
  objetivo: string;
};

export type ChannelDetails = {
  justificacion: string;
  objetivos: string[];
  estrategia: string;
  tacticas: string[];
  kpis: ChannelKpi[];
};

type Props = {
  title: string;
  filename: string;
  alt: string;
  details?: ChannelDetails;
};

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="flex flex-col gap-1.5">
      <h5
        className="font-mono text-[10px] md:text-[11px] uppercase tracking-wider"
        style={{ color: '#273C46' }}
      >
        {title}
      </h5>
      <div
        className="text-sm md:text-[15px] leading-relaxed"
        style={{ color: 'rgba(5,26,36,0.85)' }}
      >
        {children}
      </div>
    </section>
  );
}

function KpiTable({ kpis }: { kpis: ChannelKpi[] }) {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ boxShadow: '0 0 0 0.5px rgba(0,0,0,0.06)' }}
    >
      <table className="w-full text-sm">
        <thead>
          <tr
            style={{
              backgroundColor: '#0D212C',
              color: '#F6FCFF',
            }}
          >
            <th className="text-left px-3 py-2 font-mono text-[10px] uppercase tracking-wider font-medium">
              Indicador (KPI)
            </th>
            <th className="text-right px-3 py-2 font-mono text-[10px] uppercase tracking-wider font-medium">
              Objetivo anual
            </th>
          </tr>
        </thead>
        <tbody>
          {kpis.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? 'bg-white' : 'bg-[#F6F8F9]'}
              style={{ color: '#0D212C' }}
            >
              <td className="px-3 py-2">{row.kpi}</td>
              <td className="px-3 py-2 text-right font-medium">
                {row.objetivo}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ChannelEmbudo({ title, filename, alt, details }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl bg-[#F6F8F9]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 hover:bg-white/60 transition-colors rounded-xl"
        aria-expanded={open}
      >
        <span
          className="text-sm md:text-base font-medium"
          style={{ color: '#0D212C' }}
        >
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          style={{ color: '#0D212C' }}
        />
      </button>
      {open && (
        <div className="px-3 pb-4 flex flex-col gap-4">
          <img
            src={publicAsset(filename)}
            alt={alt}
            className="w-full rounded-lg"
            style={{
              boxShadow:
                '0 0 0 0.5px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.05)',
            }}
          />
          {details && (
            <div className="bg-white rounded-xl p-4 md:p-5 flex flex-col gap-4">
              <Section title="Situación actual y justificación">
                <p>{details.justificacion}</p>
              </Section>
              <Section title="Objetivos específicos">
                <ul className="list-disc pl-5 space-y-1">
                  {details.objetivos.map((o, i) => (
                    <li key={i}>{o}</li>
                  ))}
                </ul>
              </Section>
              <Section title="Estrategia">
                <p>{details.estrategia}</p>
              </Section>
              <Section title="Tácticas clave">
                <ul className="list-disc pl-5 space-y-1">
                  {details.tacticas.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </Section>
              <Section title="Indicadores (KPI) y objetivos anuales">
                <KpiTable kpis={details.kpis} />
              </Section>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ChannelEmbudo;
