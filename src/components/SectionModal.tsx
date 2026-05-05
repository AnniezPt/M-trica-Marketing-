import { useEffect, useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, HelpCircle, X } from 'lucide-react';
import { SECTION_CONTENT, SectionGroup, SectionLeaf } from '../data/sections';

type Props = {
  openId: string | null;
  onClose: () => void;
  onNavigate: (id: string) => void;
};

function LeafItem({ leaf }: { leaf: SectionLeaf }) {
  const [open, setOpen] = useState(false);
  const hasDetail = leaf.detail !== undefined;

  return (
    <div
      className="rounded-2xl bg-white"
      style={{
        boxShadow: '0 0 0 0.5px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.05)',
      }}
    >
      <button
        type="button"
        onClick={() => hasDetail && setOpen((v) => !v)}
        className={`w-full flex items-center justify-between gap-3 px-5 md:px-6 py-4 md:py-5 text-left ${
          hasDetail ? 'cursor-pointer hover:bg-black/[0.02]' : 'cursor-default'
        } rounded-2xl transition-colors`}
        aria-expanded={open}
      >
        <span className="text-sm md:text-base" style={{ color: '#0D212C' }}>
          {leaf.label}
        </span>
        {hasDetail && (
          <ChevronDown
            className={`w-4 h-4 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
            style={{ color: '#0D212C' }}
          />
        )}
      </button>

      {hasDetail && open && (
        <div
          className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base leading-relaxed"
          style={{ color: 'rgba(5,26,36,0.85)' }}
        >
          {leaf.detail}
          {leaf.qaAnchor && (
            <a
              href={leaf.qaAnchor}
              className="inline-flex items-center gap-1.5 mt-3 text-xs hover:opacity-70 transition-opacity"
              style={{ color: '#273C46' }}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              Ver pregunta frecuente
            </a>
          )}
        </div>
      )}
    </div>
  );
}

function GroupItem({ group }: { group: SectionGroup }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-[28px] bg-[#F6F8F9] p-3 md:p-4">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 md:py-4 rounded-2xl hover:bg-white/60 transition-colors"
        aria-expanded={open}
      >
        <span
          className="font-medium text-base md:text-lg"
          style={{ color: '#0D212C' }}
        >
          {group.label}
        </span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          style={{ color: '#0D212C' }}
        />
      </button>

      {open && (
        <div className="mt-3 flex flex-col gap-2">
          {group.children.map((leaf) => (
            <LeafItem key={leaf.id} leaf={leaf} />
          ))}
        </div>
      )}
    </div>
  );
}

export function SectionModal({ openId, onClose, onNavigate }: Props) {
  const idx = openId ? SECTION_CONTENT.findIndex((s) => s.id === openId) : -1;
  const section = idx >= 0 ? SECTION_CONTENT[idx] : null;
  const prev = idx > 0 ? SECTION_CONTENT[idx - 1] : null;
  const next =
    idx >= 0 && idx < SECTION_CONTENT.length - 1
      ? SECTION_CONTENT[idx + 1]
      : null;

  useEffect(() => {
    if (!openId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && prev) onNavigate(prev.id);
      if (e.key === 'ArrowRight' && next) onNavigate(next.id);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [openId, onClose, onNavigate, prev, next]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={section?.title ?? ''}
      className={`fixed inset-0 z-50 bg-white transition-all duration-300 ${
        openId
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
      style={{
        transform: openId ? 'scale(1)' : 'scale(0.98)',
      }}
    >
      <div className="absolute inset-0 overflow-y-auto">
        <header
          className="sticky top-0 z-10 bg-white/85 backdrop-blur-md border-b border-black/5"
        >
          <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-3 flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              aria-label="Volver al inicio"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors flex-shrink-0"
              style={{ boxShadow: '0 0 0 0.5px rgba(0,0,0,0.06)' }}
            >
              <X className="w-5 h-5" style={{ color: '#0D212C' }} />
            </button>

            <nav
              aria-label="Apartados"
              className="flex-1 min-w-0 overflow-x-auto no-scrollbar"
            >
              <ul className="flex items-center gap-1 md:gap-2 px-1">
                {SECTION_CONTENT.map((s) => {
                  const active = s.id === openId;
                  return (
                    <li key={s.id} className="flex-shrink-0">
                      <button
                        type="button"
                        onClick={() => onNavigate(s.id)}
                        className="rounded-full px-3 md:px-4 py-2 transition-colors"
                        style={{
                          backgroundColor: active ? '#0D212C' : 'transparent',
                          color: active ? '#F6FCFF' : '#0D212C',
                        }}
                      >
                        <span className="text-sm md:text-[15px] font-medium whitespace-nowrap">
                          {s.title}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                type="button"
                onClick={() => prev && onNavigate(prev.id)}
                aria-label="Apartado anterior"
                disabled={!prev}
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                style={{ boxShadow: '0 0 0 0.5px rgba(0,0,0,0.06)' }}
              >
                <ChevronLeft className="w-5 h-5" style={{ color: '#0D212C' }} />
              </button>
              <button
                type="button"
                onClick={() => next && onNavigate(next.id)}
                aria-label="Apartado siguiente"
                disabled={!next}
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                style={{ boxShadow: '0 0 0 0.5px rgba(0,0,0,0.06)' }}
              >
                <ChevronRight className="w-5 h-5" style={{ color: '#0D212C' }} />
              </button>
            </div>
          </div>
        </header>

        {section && (
          <main key={section.id} className="animate-fade-in-up">
            <section className="max-w-[1100px] mx-auto px-6 pt-12 md:pt-20 pb-10 text-center">
              <p
                className="font-mono text-xs md:text-sm mb-4"
                style={{ color: '#273C46' }}
              >
                Apartado
              </p>
              <h1
                className="font-serif font-semibold text-[44px] md:text-[72px] lg:text-[88px] tracking-tight leading-[1.02]"
                style={{ color: '#051A24' }}
              >
                {section.title}
              </h1>
              <p
                className="text-base md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed"
                style={{ color: 'rgba(5,26,36,0.7)' }}
              >
                {section.intro}
              </p>
            </section>

            <section className="max-w-[900px] mx-auto px-6 pb-16 flex flex-col gap-4">
              {section.groups.map((g) => (
                <GroupItem key={g.id} group={g} />
              ))}
            </section>

            <section className="max-w-[1100px] mx-auto px-6 pb-24">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 border-t border-black/5">
                {prev ? (
                  <button
                    type="button"
                    onClick={() => onNavigate(prev.id)}
                    className="text-left p-6 md:p-8 rounded-3xl hover:bg-black/[0.03] transition-colors group"
                    style={{
                      boxShadow: '0 0 0 0.5px rgba(0,0,0,0.05)',
                    }}
                  >
                    <div className="flex items-center gap-2 font-mono text-xs mb-2" style={{ color: '#273C46' }}>
                      <ChevronLeft className="w-3.5 h-3.5" />
                      Anterior
                    </div>
                    <h3
                      className="font-serif text-2xl md:text-3xl font-semibold group-hover:translate-x-[-2px] transition-transform"
                      style={{ color: '#051A24' }}
                    >
                      {prev.title}
                    </h3>
                  </button>
                ) : (
                  <div />
                )}
                {next ? (
                  <button
                    type="button"
                    onClick={() => onNavigate(next.id)}
                    className="text-right p-6 md:p-8 rounded-3xl hover:bg-black/[0.03] transition-colors group"
                    style={{
                      boxShadow: '0 0 0 0.5px rgba(0,0,0,0.05)',
                    }}
                  >
                    <div className="flex items-center justify-end gap-2 font-mono text-xs mb-2" style={{ color: '#273C46' }}>
                      Siguiente
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                    <h3
                      className="font-serif text-2xl md:text-3xl font-semibold group-hover:translate-x-[2px] transition-transform"
                      style={{ color: '#051A24' }}
                    >
                      {next.title}
                    </h3>
                  </button>
                ) : (
                  <div />
                )}
              </div>

              <div className="mt-12 flex justify-center">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-sm hover:opacity-70 transition-opacity"
                  style={{ color: '#273C46' }}
                >
                  ← Volver al inicio
                </button>
              </div>
            </section>
          </main>
        )}
      </div>
    </div>
  );
}

export default SectionModal;
