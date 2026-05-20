import { useMemo, useState } from 'react';
import { Calculator, Download, RotateCcw } from 'lucide-react';

type Preset = 'general' | 'captacion' | 'conversion' | 'fidelizacion';
type CampaignType = 'CPM' | 'CPC';

type FunnelInputs = {
  presupuesto: string;
  tipoCampana: CampaignType;
  costeUnitario: string;
  ctr: string;
  rebote: string;
  convLead: string;
  convCliente: string;
  ticketMedio: string;
};

const PRESETS: Record<Preset, FunnelInputs> = {
  general: {
    presupuesto: '100000',
    tipoCampana: 'CPM',
    costeUnitario: '5',
    ctr: '1.5',
    rebote: '35',
    convLead: '3',
    convCliente: '4',
    ticketMedio: '2040',
  },
  captacion: {
    presupuesto: '45000',
    tipoCampana: 'CPM',
    costeUnitario: '5.37',
    ctr: '1.94',
    rebote: '39',
    convLead: '4.3',
    convCliente: '1.15',
    ticketMedio: '2040',
  },
  conversion: {
    presupuesto: '40000',
    tipoCampana: 'CPM',
    costeUnitario: '8',
    ctr: '1.5',
    rebote: '30',
    convLead: '30',
    convCliente: '25',
    ticketMedio: '2040',
  },
  fidelizacion: {
    presupuesto: '15000',
    tipoCampana: 'CPM',
    costeUnitario: '4',
    ctr: '5',
    rebote: '20',
    convLead: '100',
    convCliente: '40',
    ticketMedio: '800',
  },
};

const PRESET_LABELS: Record<Preset, string> = {
  general: 'General',
  captacion: 'Captación',
  conversion: 'Conversión',
  fidelizacion: 'Fidelización',
};

const PRESET_DESC: Record<Preset, string> = {
  general:
    'Valores genéricos para una campaña digital estándar. Cámbialos a tu gusto.',
  captacion:
    'Datos de la Fase de Captación del TFM: 45.000 € de presupuesto, CTR 1,94% y 39 clientes objetivo.',
  conversion:
    'Datos de la Fase de Conversión del TFM: 40.000 € de presupuesto, conversión 25% sobre leads impactados.',
  fidelizacion:
    'Datos de la Fase de Fidelización: 15.000 € para cross-selling, 40% de la base con módulos adicionales.',
};

function num(s: string): number {
  const n = parseFloat(s.replace(',', '.'));
  return Number.isFinite(n) ? n : 0;
}

type Results = {
  impresiones: number;
  clics: number;
  visitas: number;
  leads: number;
  clientes: number;
  ingresos: number;
  cpl: number;
  cpa: number;
  beneficio: number;
  roi: number;
  roas: number;
};

function computeResults(i: FunnelInputs): Results {
  const presupuesto = num(i.presupuesto);
  const costeUnitario = num(i.costeUnitario);
  const ctr = num(i.ctr);
  const rebote = num(i.rebote);
  const convLead = num(i.convLead);
  const convCliente = num(i.convCliente);
  const ticketMedio = num(i.ticketMedio);

  let impresiones = 0;
  let clics = 0;

  if (i.tipoCampana === 'CPM') {
    impresiones =
      costeUnitario > 0 ? (presupuesto / costeUnitario) * 1000 : 0;
    clics = impresiones * (ctr / 100);
  } else {
    clics = costeUnitario > 0 ? presupuesto / costeUnitario : 0;
    impresiones = ctr > 0 ? clics / (ctr / 100) : 0;
  }

  const visitas = clics * (1 - rebote / 100);
  const leads = visitas * (convLead / 100);
  const clientes = leads * (convCliente / 100);
  const ingresos = clientes * ticketMedio;
  const cpl = leads > 0 ? presupuesto / leads : 0;
  const cpa = clientes > 0 ? presupuesto / clientes : 0;
  const beneficio = ingresos - presupuesto;
  const roi = presupuesto > 0 ? (beneficio / presupuesto) * 100 : 0;
  const roas = presupuesto > 0 ? ingresos / presupuesto : 0;

  return {
    impresiones,
    clics,
    visitas,
    leads,
    clientes,
    ingresos,
    cpl,
    cpa,
    beneficio,
    roi,
    roas,
  };
}

const formatNum = (n: number): string =>
  Number.isFinite(n) && n > 0
    ? n.toLocaleString('es-ES', { maximumFractionDigits: 0 })
    : '—';

const formatEuro = (n: number): string =>
  Number.isFinite(n) && n !== 0
    ? `${n.toLocaleString('es-ES', { maximumFractionDigits: 2 })} €`
    : '—';

const formatEuroAllowNeg = (n: number): string =>
  Number.isFinite(n)
    ? `${n.toLocaleString('es-ES', { maximumFractionDigits: 2 })} €`
    : '—';

const formatPct = (n: number): string =>
  Number.isFinite(n)
    ? `${n.toLocaleString('es-ES', { maximumFractionDigits: 1 })} %`
    : '—';

const formatRoas = (n: number): string =>
  Number.isFinite(n) && n > 0 ? `${n.toFixed(2)}×` : '—';

function Field({
  label,
  value,
  onChange,
  suffix,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  suffix?: string;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-1">
      <span
        className="font-mono text-[10px] md:text-[11px] uppercase tracking-wider"
        style={{ color: '#273C46' }}
      >
        {label}
      </span>
      <div
        className="flex items-center rounded-xl bg-white px-3 py-2"
        style={{ boxShadow: '0 0 0 0.5px rgba(0,0,0,0.08)' }}
      >
        <input
          type="text"
          inputMode="decimal"
          value={value}
          placeholder={placeholder ?? '—'}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 bg-transparent outline-none text-sm md:text-base"
          style={{ color: '#0D212C' }}
        />
        {suffix && (
          <span
            className="text-xs md:text-sm font-medium ml-2"
            style={{ color: '#273C46' }}
          >
            {suffix}
          </span>
        )}
      </div>
    </label>
  );
}

function Result({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className="rounded-xl px-4 py-3"
      style={{
        backgroundColor: highlight ? 'rgba(246,252,255,0.08)' : 'transparent',
        boxShadow: 'inset 0 0 0 0.5px rgba(246,252,255,0.12)',
      }}
    >
      <div
        className="font-mono text-[10px] uppercase tracking-wider"
        style={{ color: 'rgba(246,252,255,0.7)' }}
      >
        {label}
      </div>
      <div
        className="font-serif font-semibold text-lg md:text-xl mt-1 whitespace-nowrap"
        style={{ color: '#F6FCFF' }}
      >
        {value}
      </div>
    </div>
  );
}

export function FunnelCalculator() {
  const [preset, setPreset] = useState<Preset>('general');
  const [inputs, setInputs] = useState<FunnelInputs>(PRESETS.general);
  const [appliedInputs, setAppliedInputs] = useState<FunnelInputs>(
    PRESETS.general,
  );

  const results = useMemo(
    () => computeResults(appliedInputs),
    [appliedInputs],
  );

  const hasChanges = useMemo(() => {
    return (
      Object.keys(inputs) as Array<keyof FunnelInputs>
    ).some((k) => inputs[k] !== appliedInputs[k]);
  }, [inputs, appliedInputs]);

  const loadPreset = (p: Preset) => {
    setPreset(p);
    setInputs(PRESETS[p]);
    setAppliedInputs(PRESETS[p]);
  };

  const reset = () => {
    setInputs(PRESETS[preset]);
    setAppliedInputs(PRESETS[preset]);
  };

  const calcular = () => {
    setAppliedInputs(inputs);
  };

  const update = (k: keyof FunnelInputs, v: string) => {
    setInputs((prev) => ({ ...prev, [k]: v }));
  };

  const downloadCSV = () => {
    const rows: Array<[string, string]> = [
      ['Preset', PRESET_LABELS[preset]],
      ['Fecha', new Date().toLocaleString('es-ES')],
      ['', ''],
      ['── Entradas ──', ''],
      ['Presupuesto (€)', inputs.presupuesto],
      ['Tipo de campaña', inputs.tipoCampana],
      [
        inputs.tipoCampana === 'CPM' ? 'CPM (€/1000 imp.)' : 'CPC (€/clic)',
        inputs.costeUnitario,
      ],
      ['CTR (%)', inputs.ctr],
      ['Tasa de rebote (%)', inputs.rebote],
      ['Conv. a lead (%)', inputs.convLead],
      ['Conv. a cliente (%)', inputs.convCliente],
      ['Ticket medio (€)', inputs.ticketMedio],
      ['', ''],
      ['── Resultados ──', ''],
      ['Impresiones', formatNum(results.impresiones)],
      ['Clics', formatNum(results.clics)],
      ['Visitas', formatNum(results.visitas)],
      ['Leads', formatNum(results.leads)],
      ['Clientes', formatNum(results.clientes)],
      ['Ingresos', formatEuro(results.ingresos)],
      ['CPL', formatEuro(results.cpl)],
      ['CPA', formatEuro(results.cpa)],
      ['Beneficio', formatEuroAllowNeg(results.beneficio)],
      ['ROI', formatPct(results.roi)],
      ['ROAS', formatRoas(results.roas)],
    ];
    const escape = (v: string) => `"${v.replace(/"/g, '""')}"`;
    const csv =
      '﻿' + rows.map((r) => `${escape(r[0])};${escape(r[1])}`).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `funnel-${preset}-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const costeLabel =
    inputs.tipoCampana === 'CPM' ? 'CPM (€/1000 imp.)' : 'CPC (€/clic)';

  return (
    <div className="flex flex-col gap-5">
      {/* Preset tabs */}
      <div
        className="rounded-full p-1 inline-flex flex-wrap"
        style={{ backgroundColor: '#F1F5F7' }}
      >
        {(Object.keys(PRESETS) as Preset[]).map((p) => {
          const active = preset === p;
          return (
            <button
              key={p}
              type="button"
              onClick={() => loadPreset(p)}
              className="rounded-full px-3 md:px-4 py-1.5 text-xs md:text-sm font-medium transition-colors whitespace-nowrap"
              style={{
                backgroundColor: active ? '#0D212C' : 'transparent',
                color: active ? '#F6FCFF' : '#0D212C',
              }}
            >
              {PRESET_LABELS[p]}
            </button>
          );
        })}
      </div>

      <p className="text-sm" style={{ color: 'rgba(5,26,36,0.7)' }}>
        {PRESET_DESC[preset]}
      </p>

      {/* Inputs card */}
      <div
        className="rounded-2xl bg-white p-5 md:p-6"
        style={{
          boxShadow:
            '0 0 0 0.5px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.04)',
        }}
      >
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <h4
              className="font-mono text-[11px] uppercase tracking-wider"
              style={{ color: '#273C46' }}
            >
              Datos · entradas
            </h4>
            {hasChanges && (
              <span
                className="font-mono text-[10px] uppercase tracking-wider rounded-full px-2 py-0.5"
                style={{
                  backgroundColor: '#FEF3C7',
                  color: '#92400E',
                }}
              >
                Cambios sin aplicar
              </span>
            )}
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors hover:bg-black/[0.04]"
              style={{
                color: '#0D212C',
                boxShadow: '0 0 0 0.5px rgba(0,0,0,0.08)',
              }}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset
            </button>
            <button
              type="button"
              onClick={calcular}
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition-opacity hover:opacity-90"
              style={{
                backgroundColor: '#0D212C',
                color: '#F6FCFF',
              }}
            >
              <Calculator className="w-3.5 h-3.5" />
              Calcular
            </button>
            <button
              type="button"
              onClick={downloadCSV}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors hover:bg-black/[0.04]"
              style={{
                color: '#0D212C',
                boxShadow: '0 0 0 0.5px rgba(0,0,0,0.08)',
              }}
            >
              <Download className="w-3.5 h-3.5" />
              Descargar CSV
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
          <Field
            label="Presupuesto"
            value={inputs.presupuesto}
            onChange={(v) => update('presupuesto', v)}
            suffix="€"
          />

          <label className="flex flex-col gap-1">
            <span
              className="font-mono text-[10px] md:text-[11px] uppercase tracking-wider"
              style={{ color: '#273C46' }}
            >
              Tipo de campaña
            </span>
            <div
              className="rounded-xl p-1 inline-flex"
              style={{
                backgroundColor: '#F6F8F9',
                boxShadow: '0 0 0 0.5px rgba(0,0,0,0.04)',
              }}
            >
              {(['CPM', 'CPC'] as CampaignType[]).map((t) => {
                const active = inputs.tipoCampana === t;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => update('tipoCampana', t)}
                    className="flex-1 rounded-lg py-1.5 text-xs md:text-sm font-medium transition-colors"
                    style={{
                      backgroundColor: active ? '#0D212C' : 'transparent',
                      color: active ? '#F6FCFF' : '#0D212C',
                    }}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </label>

          <Field
            label={costeLabel}
            value={inputs.costeUnitario}
            onChange={(v) => update('costeUnitario', v)}
            suffix="€"
          />
          <Field
            label="CTR"
            value={inputs.ctr}
            onChange={(v) => update('ctr', v)}
            suffix="%"
          />
          <Field
            label="Tasa de rebote"
            value={inputs.rebote}
            onChange={(v) => update('rebote', v)}
            suffix="%"
          />
          <Field
            label="Conv. a lead"
            value={inputs.convLead}
            onChange={(v) => update('convLead', v)}
            suffix="%"
          />
          <Field
            label="Conv. a cliente"
            value={inputs.convCliente}
            onChange={(v) => update('convCliente', v)}
            suffix="%"
          />
          <Field
            label="Ticket medio"
            value={inputs.ticketMedio}
            onChange={(v) => update('ticketMedio', v)}
            suffix="€"
          />
        </div>
      </div>

      {/* Results card */}
      <div
        className="rounded-2xl p-5 md:p-6"
        style={{
          backgroundColor: '#051A24',
          boxShadow: '0 4px 20px rgba(5,26,36,0.2)',
        }}
      >
        <h4
          className="font-mono text-[11px] uppercase tracking-wider mb-4"
          style={{ color: '#E0EBF0' }}
        >
          Resultados · funnel
        </h4>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          <Result label="Impresiones" value={formatNum(results.impresiones)} />
          <Result label="Clics" value={formatNum(results.clics)} />
          <Result label="Visitas" value={formatNum(results.visitas)} />
          <Result label="Leads" value={formatNum(results.leads)} />
          <Result label="Clientes" value={formatNum(results.clientes)} />
          <Result label="Ingresos" value={formatEuro(results.ingresos)} />
        </div>

        <h4
          className="font-mono text-[11px] uppercase tracking-wider mt-6 mb-4"
          style={{ color: '#E0EBF0' }}
        >
          Económicos
        </h4>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          <Result label="CPL" value={formatEuro(results.cpl)} />
          <Result label="CPA" value={formatEuro(results.cpa)} />
          <Result
            label="Beneficio"
            value={formatEuroAllowNeg(results.beneficio)}
            highlight
          />
          <Result label="ROI" value={formatPct(results.roi)} highlight />
          <Result label="ROAS" value={formatRoas(results.roas)} highlight />
        </div>
      </div>

      <p
        className="text-xs leading-relaxed"
        style={{ color: 'rgba(5,26,36,0.55)' }}
      >
        <strong>Cómo se calcula:</strong> Impresiones = Presupuesto / CPM ×
        1.000 (o = Clics / CTR si eliges CPC). Clics = Impresiones × CTR.
        Visitas = Clics × (1 − rebote). Leads = Visitas × conv. lead. Clientes
        = Leads × conv. cliente. Ingresos = Clientes × Ticket. CPL = Presupuesto
        / Leads. CPA = Presupuesto / Clientes. Beneficio = Ingresos − Presupuesto.
        ROI = Beneficio / Presupuesto. ROAS = Ingresos / Presupuesto.
      </p>
    </div>
  );
}

export default FunnelCalculator;
