import { useEffect, useState } from 'react';
import { SECTION_CONTENT } from '../data/sections';

type Props = {
  onSelect: (sectionId: string, groupId?: string) => void;
};

export function TopBreadcrumbs({ onSelect }: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-30 w-full">
      <div
        className={`mx-auto transition-all duration-200 ${
          scrolled ? 'mt-2' : 'mt-3'
        }`}
        style={{ maxWidth: 'min(100%, 1200px)' }}
      >
        <nav
          aria-label="Apartados del TFM"
          className={`mx-3 md:mx-6 rounded-full transition-all duration-200 ${
            scrolled
              ? 'bg-white/85 backdrop-blur-md'
              : 'bg-white/60 backdrop-blur-sm'
          }`}
          style={{
            boxShadow: scrolled
              ? '0 0 0 0.5px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.08)'
              : '0 0 0 0.5px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)',
          }}
        >
          <ul className="flex items-center gap-1 md:gap-2 px-2 py-2 overflow-x-auto md:overflow-visible no-scrollbar">
            {SECTION_CONTENT.map((s) => (
              <li
                key={s.id}
                className="flex-shrink-0 relative group"
              >
                <button
                  type="button"
                  onClick={() => onSelect(s.id)}
                  className="rounded-full px-3 md:px-4 py-2 hover:bg-black/[0.05] transition-colors"
                >
                  <span
                    className="text-sm md:text-[15px] font-medium whitespace-nowrap"
                    style={{ color: '#0D212C' }}
                  >
                    {s.title}
                  </span>
                </button>

                {s.groups.length > 0 && (
                  <div
                    className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 pt-3 z-40 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-150"
                  >
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
                              onClick={() => onSelect(s.id, g.id)}
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
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default TopBreadcrumbs;
