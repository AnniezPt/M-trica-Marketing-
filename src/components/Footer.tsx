import { ArrowUpRight } from 'lucide-react';
import { Button } from './Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const ANCHOR_LINKS = [
  { label: 'Apartados', href: '#apartados' },
  { label: 'Quiénes somos', href: '#quienes-somos' },
  { label: 'Q&A', href: '#qa' },
];

const EXTERNAL_LINKS = [
  { label: 'x.com', href: 'https://x.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
];

export function Footer() {
  const { ref, inView } = useInViewAnimation<HTMLElement>(0.1);
  return (
    <footer ref={ref} className="w-full py-12 px-6">
      <div
        className={`max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-10 ${
          inView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.1s' }}
      >
        <Button variant="primary" href="#contacto">
          Empieza ahora
        </Button>

        <div className="flex items-start gap-6">
          <ArrowUpRight
            className="w-6 h-6 mt-1"
            style={{ color: '#051A24' }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-3">
            {ANCHOR_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-base hover:opacity-70 transition-opacity"
                style={{ color: '#051A24' }}
              >
                {l.label}
              </a>
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
