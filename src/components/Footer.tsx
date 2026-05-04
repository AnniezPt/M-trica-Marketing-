import { ArrowUpRight } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

type Props = {
  onOpenSection: (id: string) => void;
};

const SECTION_LINKS: { label: string; id: string }[] = [
  { label: 'Apartados', id: 'estudio-del-mercado' },
  { label: 'Quiénes somos', id: 'quienes-somos' },
  { label: 'Q&A', id: 'qa' },
];

const EXTERNAL_LINKS = [
  { label: 'x.com', href: 'https://x.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
];

export function Footer({ onOpenSection }: Props) {
  const { ref, inView } = useInViewAnimation<HTMLElement>(0.1);
  return (
    <footer ref={ref} className="w-full py-12 px-6">
      <div
        className={`max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-10 ${
          inView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.1s' }}
      >
        <div className="flex items-center gap-3">
          <img
            src={`${import.meta.env.BASE_URL}logo.svg`}
            alt="Métrica Marketing"
            className="w-10 h-10 rounded-xl"
          />
          <span
            className="font-serif text-xl font-semibold"
            style={{ color: '#051A24' }}
          >
            Métrica Marketing
          </span>
        </div>

        <div className="flex items-start gap-6">
          <ArrowUpRight
            className="w-6 h-6 mt-1"
            style={{ color: '#051A24' }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-3">
            {SECTION_LINKS.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => onOpenSection(l.id)}
                className="text-base text-left hover:opacity-70 transition-opacity"
                style={{ color: '#051A24' }}
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            {EXTERNAL_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-base hover:opacity-70 transition-opacity"
                style={{ color: '#051A24' }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
