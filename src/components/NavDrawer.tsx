import { useEffect, useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { EXTRA_LINKS, NAV_SECTIONS } from '../data/menu';

type Props = {
  open: boolean;
  onClose: () => void;
  onSelectSection?: (sectionId: string) => void;
};

const SECTION_IDS = new Set([
  'estudio-del-mercado',
  'estrategia-de-marketing',
  'plan-de-accion',
  'plan-financiero',
  'calculadora',
  'quienes-somos',
  'qa',
]);

export function NavDrawer({ open, onClose, onSelectSection }: Props) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  const toggle = (id: string) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  const handleNavigate = (anchor: string) => {
    onClose();
    if (SECTION_IDS.has(anchor) && onSelectSection) {
      requestAnimationFrame(() => onSelectSection(anchor));
      return;
    }
    requestAnimationFrame(() => {
      const target = document.getElementById(anchor);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else window.location.hash = anchor;
    });
  };

  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white transition-transform duration-300 ease-out flex flex-col ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ boxShadow: '-20px 0 60px rgba(0,0,0,0.12)' }}
      >
        <header className="flex items-center justify-between px-6 py-5 border-b border-black/5">
          <div>
            <p className="font-mono text-xs" style={{ color: '#273C46' }}>
              Menú de Inicio
            </p>
            <h2
              className="font-serif text-2xl font-semibold mt-1"
              style={{ color: '#051A24' }}
            >
              Métrica Marketing
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar menú"
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors"
          >
            <X className="w-5 h-5" style={{ color: '#0D212C' }} />
          </button>
        </header>

        <nav className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-3">
          {NAV_SECTIONS.map((section) => {
            const sectionOpen = expanded[section.id] ?? false;
            return (
              <div
                key={section.id}
                className="rounded-2xl"
                style={{
                  boxShadow: '0 0 0 0.5px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.04)',
                }}
              >
                <div className="flex items-stretch">
                  <button
                    type="button"
                    onClick={() => handleNavigate(section.id)}
                    className="flex-1 flex flex-col items-start text-left px-5 py-4 rounded-l-2xl hover:bg-black/[0.03] transition-colors"
                  >
                    <span
                      className="font-mono text-[11px]"
                      style={{ color: '#273C46' }}
                    >
                      {section.number}.
                    </span>
                    <span
                      className="font-serif font-semibold text-lg mt-0.5"
                      style={{ color: '#051A24' }}
                    >
                      {section.title}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => toggle(section.id)}
                    aria-label={`${sectionOpen ? 'Cerrar' : 'Abrir'} ${section.title}`}
                    aria-expanded={sectionOpen}
                    className="px-4 rounded-r-2xl hover:bg-black/[0.03] transition-colors flex items-center"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${sectionOpen ? 'rotate-180' : ''}`}
                      style={{ color: '#0D212C' }}
                    />
                  </button>
                </div>

                {sectionOpen && (
                  <div className="px-3 pb-3 flex flex-col gap-2">
                    {section.groups.map((group) => {
                      const groupOpen = expanded[group.id] ?? false;
                      return (
                        <div key={group.id} className="rounded-xl bg-[#F6F8F9]">
                          <button
                            type="button"
                            onClick={() => toggle(group.id)}
                            aria-expanded={groupOpen}
                            className="w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl hover:bg-white/60 transition-colors"
                          >
                            <span
                              className="text-sm font-medium"
                              style={{ color: '#0D212C' }}
                            >
                              {group.label}
                            </span>
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${groupOpen ? 'rotate-180' : ''}`}
                              style={{ color: '#0D212C' }}
                            />
                          </button>

                          {groupOpen && (
                            <ul className="px-2 pb-2 flex flex-col gap-1">
                              {group.children.map((leaf) => (
                                <li key={leaf.id}>
                                  <button
                                    type="button"
                                    onClick={() => handleNavigate(leaf.parentSection)}
                                    className="w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-white transition-colors"
                                    style={{ color: 'rgba(5,26,36,0.85)' }}
                                  >
                                    · {leaf.label}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          {EXTRA_LINKS.map((link) => (
            <div
              key={link.id}
              className="rounded-2xl"
              style={{
                boxShadow:
                  '0 0 0 0.5px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.04)',
              }}
            >
              <button
                type="button"
                onClick={() => handleNavigate(link.id)}
                className="w-full flex flex-col items-start text-left px-5 py-4 rounded-2xl hover:bg-black/[0.03] transition-colors"
              >
                <span
                  className="font-mono text-[11px]"
                  style={{ color: '#273C46' }}
                >
                  {link.number}.
                </span>
                <span
                  className="font-serif font-semibold text-lg mt-0.5"
                  style={{ color: '#051A24' }}
                >
                  {link.label}
                </span>
              </button>
            </div>
          ))}
        </nav>

        <footer className="px-6 py-4 border-t border-black/5">
          <p className="text-xs font-mono" style={{ color: '#273C46' }}>
            Métrica Marketing — TFM
          </p>
        </footer>
      </aside>
    </>
  );
}

export default NavDrawer;
