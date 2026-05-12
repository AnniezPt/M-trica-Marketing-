import { useEffect, useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, HelpCircle, Plus, X } from 'lucide-react';
import { SECTION_CONTENT, SectionGroup, SectionLeaf } from '../data/sections';
import { SeeAlso } from './InlineLink';

type Props = {
  openId: string | null;
  initialGroupId?: string | null;
  initialLeafId?: string | null;
  onClose: () => void;
  onNavigate: (id: string, groupId?: string, leafId?: string) => void;
};

function LeafItem({
  leaf,
  defaultOpen = false,
}: {
  leaf: SectionLeaf;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const [expanded, setExpanded] = useState(leaf.bulletsAlwaysExpanded ?? false);
  const hasBullets = !!leaf.bullets && leaf.bullets.length > 0;
  const hasDetail = leaf.detail !== undefined;
  const hasHeader = leaf.header !== undefined;
  const hasContent = hasBullets || hasDetail || hasHeader;
  const showToggle = hasBullets && !leaf.bulletsAlwaysExpanded;

  return (
    <div
      className="rounded-2xl bg-white"
      style={{
        boxShadow: '0 0 0 0.5px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.05)',
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 px-5 md:px-6 py-4 md:py-5 text-left cursor-pointer hover:bg-black/[0.02] rounded-2xl transition-colors"
        aria-expanded={open}
      >
        <span className="text-sm md:text-base" style={{ color: '#0D212C' }}>
          {leaf.label}
        </span>
        <ChevronDown
          className={`w-4 h-4 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          style={{ color: '#0D212C' }}
        />
      </button>

      {open && (
        <div
          className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base leading-relaxed"
          style={{ color: 'rgba(5,26,36,0.85)' }}
        >
          {hasHeader && <div className="mb-4">{leaf.header}</div>}

          {leaf.summary && !expanded && (
            <div className="mb-4">{leaf.summary}</div>
          )}

          {hasBullets && (
            <>
              <ul className="flex flex-col gap-3">
                {leaf.bullets!.map((b, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span
                      aria-hidden="true"
                      className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: '#0D212C' }}
                    />
                    <div className="flex-1">
                      <p
                        className="font-medium"
                        style={{ color: '#0D212C' }}
                      >
                        {b.title}
                      </p>
                      {expanded && b.body && (
                        <div
                          className="mt-1 text-sm md:text-[15px] leading-relaxed"
                          style={{ color: 'rgba(5,26,36,0.7)' }}
                        >
                          {b.body}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {showToggle && (
                <button
                  type="button"
                  onClick={() => setExpanded((v) => !v)}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs md:text-sm font-medium rounded-full px-3 py-1.5 transition-colors hover:bg-black/5"
                  style={{
                    color: '#0D212C',
                    boxShadow: '0 0 0 0.5px rgba(0,0,0,0.08)',
                  }}
                >
                  <Plus
                    className={`w-3.5 h-3.5 transition-transform ${expanded ? 'rotate-45' : ''}`}
                  />
                  {expanded ? 'Leer menos' : 'Leer más'}
                </button>
              )}
            </>
          )}

          {hasDetail && <div className={hasBullets || hasHeader ? 'mt-4' : ''}>{leaf.detail}</div>}

          {!hasContent && (
            <p
              className="text-xs md:text-sm italic"
              style={{ color: 'rgba(5,26,36,0.5)' }}
            >
              Contenido en preparación.
            </p>
          )}

          {leaf.qaAnchor && hasContent && (
            <a
              href={leaf.qaAnchor}
              className="inline-flex items-center gap-1.5 mt-3 text-xs hover:opacity-70 transition-opacity"
              style={{ color: '#273C46' }}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              Ver pregunta frecuente
            </a>
          )}

          {leaf.seeAlso && leaf.seeAlso.length > 0 && (
            <SeeAlso links={leaf.seeAlso} />
          )}
        </div>
      )}
    </div>
  );
}

function GroupItem({
  group,
  defaultOpen = false,
  initialLeafId,
}: {
  group: SectionGroup;
  defaultOpen?: boolean;
  initialLeafId?: string | null;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const hasChildren = group.children.length > 0;
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
          {hasChildren ? (
            group.children.map((leaf) => (
              <LeafItem
                key={`${leaf.id}-${initialLeafId ?? ''}`}
                leaf={leaf}
                defaultOpen={leaf.id === initialLeafId}
              />
            ))
          ) : (
            <p
              className="px-4 py-3 text-xs md:text-sm italic"
              style={{ color: 'rgba(5,26,36,0.5)' }}
            >
              Contenido en preparación.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export function SectionModal({
  openId,
  initialGroupId,
  initialLeafId,
  onClose,
  onNavigate,
}: Props) {
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
          <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-3 flex items-center gap-3 md:gap-6">
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
              className="flex-1 min-w-0 overflow-x-auto md:overflow-visible no-scrollbar"
            >
              <ul className="flex items-center gap-1 md:gap-2 px-1">
                {SECTION_CONTENT.map((s) => {
                  const active = s.id === openId;
                  return (
                    <li key={s.id} className="flex-shrink-0 relative group">
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

                      {s.groups.length > 0 && (
                        <div className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 pt-3 z-40 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-150">
                          <div
                            className="rounded-2xl bg-white p-1.5 min-w-[240px]"
                            style={{
                              boxShadow:
                                '0 0 0 0.5px rgba(0,0,0,0.08), 0 12px 32px rgba(0,0,0,0.12)',
                            }}
                          >
                            <div
                              className="px-3 py-2 font-mono text-[10px] uppercase tracking-wider"
                              style={{ color: '#273C46' }}
                            >
                              {s.title}
                            </div>
                            <ul className="flex flex-col">
                              {s.groups.map((g) => (
                                <li key={g.id}>
                                  <button
                                    type="button"
                                    onClick={() => onNavigate(s.id, g.id)}
                                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-black/[0.05] transition-colors text-sm"
                                    style={{ color: '#0D212C' }}
                                  >
                                    {g.label}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
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
            <section className="max-w-[900px] mx-auto px-6 pt-10 md:pt-14 pb-8 text-center">
              <p
                className="font-mono text-[11px] md:text-xs mb-3"
                style={{ color: '#273C46' }}
              >
                Apartado
              </p>
              <h1
                className="font-serif font-semibold text-[28px] md:text-[40px] lg:text-[48px] tracking-tight leading-[1.05]"
                style={{ color: '#051A24' }}
              >
                {section.title}
              </h1>
              <p
                className="text-sm md:text-base max-w-xl mx-auto mt-4 leading-relaxed"
                style={{ color: 'rgba(5,26,36,0.7)' }}
              >
                {section.intro}
              </p>
            </section>

            <section className="max-w-[820px] mx-auto px-6 pb-16 flex flex-col gap-3">
              {section.groups.map((g) => (
                <GroupItem
                  key={`${g.id}-${initialGroupId ?? ''}-${initialLeafId ?? ''}`}
                  group={g}
                  defaultOpen={g.id === initialGroupId}
                  initialLeafId={initialLeafId}
                />
              ))}
            </section>

            <section className="max-w-[1000px] mx-auto px-6 pb-24">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-8 border-t border-black/5">
                {prev ? (
                  <button
                    type="button"
                    onClick={() => onNavigate(prev.id)}
                    className="text-left p-5 md:p-6 rounded-3xl hover:bg-black/[0.03] transition-colors group"
                    style={{
                      boxShadow: '0 0 0 0.5px rgba(0,0,0,0.05)',
                    }}
                  >
                    <div className="flex items-center gap-2 font-mono text-[11px] mb-1.5" style={{ color: '#273C46' }}>
                      <ChevronLeft className="w-3.5 h-3.5" />
                      Anterior
                    </div>
                    <h3
                      className="font-serif text-lg md:text-xl font-semibold group-hover:translate-x-[-2px] transition-transform"
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
                    className="text-right p-5 md:p-6 rounded-3xl hover:bg-black/[0.03] transition-colors group"
                    style={{
                      boxShadow: '0 0 0 0.5px rgba(0,0,0,0.05)',
                    }}
                  >
                    <div className="flex items-center justify-end gap-2 font-mono text-[11px] mb-1.5" style={{ color: '#273C46' }}>
                      Siguiente
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                    <h3
                      className="font-serif text-lg md:text-xl font-semibold group-hover:translate-x-[2px] transition-transform"
                      style={{ color: '#051A24' }}
                    >
                      {next.title}
                    </h3>
                  </button>
                ) : (
                  <div />
                )}
              </div>

              <div className="mt-10 flex justify-center">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs hover:opacity-70 transition-opacity"
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
