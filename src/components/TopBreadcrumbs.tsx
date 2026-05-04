import { useEffect, useState } from 'react';
import { SECTION_CONTENT } from '../data/sections';

type Props = {
  onSelect: (id: string) => void;
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
          <ul className="flex items-center gap-1 md:gap-2 px-2 py-2 overflow-x-auto no-scrollbar">
            {SECTION_CONTENT.map((s) => (
              <li key={s.id} className="flex-shrink-0">
                <button
                  type="button"
                  onClick={() => onSelect(s.id)}
                  className="group rounded-full px-3 md:px-4 py-2 hover:bg-black/[0.05] transition-colors"
                >
                  <span
                    className="text-sm md:text-[15px] font-medium whitespace-nowrap"
                    style={{ color: '#0D212C' }}
                  >
                    {s.title}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default TopBreadcrumbs;
