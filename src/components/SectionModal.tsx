import { useEffect, useState } from 'react';
import { ChevronDown, HelpCircle, X } from 'lucide-react';
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
        className={`w-full flex items-center justify-between gap-3 px-5 py-4 text-left ${
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
          className="px-5 pb-5 text-sm md:text-base leading-relaxed"
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
    <div className="rounded-[24px] bg-[#F6F8F9] p-3 md:p-4">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 px-3 py-3 rounded-2xl hover:bg-white/60 transition-colors"
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
  useEffect(() => {
    if (!openId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [openId, onClose]);

  const section = SECTION_CONTENT.find((s) => s.id === openId) ?? null;

  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          openId ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={section?.title ?? ''}
        className={`fixed inset-x-0 bottom-0 md:inset-0 md:flex md:items-center md:justify-center z-50 transition-all duration-300 ${
          openId ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-8 opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="bg-white w-full md:w-[min(94vw,900px)] md:max-h-[88vh] max-h-[92vh] flex flex-col rounded-t-[32px] md:rounded-[40px] overflow-hidden"
          style={{
            boxShadow:
              '0 0 0 0.5px rgba(0,0,0,0.06), 0 30px 80px rgba(0,0,0,0.18)',
          }}
        >
          <header className="flex items-start justify-end gap-6 px-6 md:px-10 pt-5 md:pt-6 pb-3">
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors flex-shrink-0"
            >
              <X className="w-5 h-5" style={{ color: '#0D212C' }} />
            </button>
          </header>

          {section && (
            <div className="flex-1 overflow-y-auto px-6 md:px-10 pb-8 md:pb-10">
              <h2
                className="font-serif font-semibold text-3xl md:text-5xl tracking-tight"
                style={{ color: '#051A24' }}
              >
                {section.title}
              </h2>
              <p
                className="text-sm md:text-base mt-3 max-w-2xl"
                style={{ color: 'rgba(5,26,36,0.7)' }}
              >
                {section.intro}
              </p>

              <div className="mt-8 flex flex-col gap-4">
                {section.groups.map((g) => (
                  <GroupItem key={g.id} group={g} />
                ))}
              </div>

              <div className="mt-8 flex justify-between items-center gap-4 pt-6 border-t border-black/5">
                <PrevNextNav
                  currentId={section.id}
                  onNavigate={onNavigate}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function PrevNextNav({
  currentId,
  onNavigate,
}: {
  currentId: string;
  onNavigate: (id: string) => void;
}) {
  const idx = SECTION_CONTENT.findIndex((s) => s.id === currentId);
  const prev = idx > 0 ? SECTION_CONTENT[idx - 1] : null;
  const next = idx < SECTION_CONTENT.length - 1 ? SECTION_CONTENT[idx + 1] : null;
  return (
    <>
      <div>
        {prev && (
          <button
            type="button"
            onClick={() => onNavigate(prev.id)}
            className="text-left hover:opacity-70 transition-opacity"
          >
            <div
              className="font-mono text-[11px]"
              style={{ color: '#273C46' }}
            >
              ← Anterior
            </div>
            <div
              className="font-serif text-base font-semibold"
              style={{ color: '#051A24' }}
            >
              {prev.title}
            </div>
          </button>
        )}
      </div>
      <div className="text-right">
        {next && (
          <button
            type="button"
            onClick={() => onNavigate(next.id)}
            className="text-right hover:opacity-70 transition-opacity"
          >
            <div
              className="font-mono text-[11px]"
              style={{ color: '#273C46' }}
            >
              Siguiente →
            </div>
            <div
              className="font-serif text-base font-semibold"
              style={{ color: '#051A24' }}
            >
              {next.title}
            </div>
          </button>
        )}
      </div>
    </>
  );
}

export default SectionModal;
