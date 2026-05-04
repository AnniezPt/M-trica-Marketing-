import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Marcos Andrés',
    role: 'CEO',
    company: 'DataStorage',
    quote:
      'Con Métrica Marketing entendimos por fin nuestro buyer persona. Las fichas y el customer journey marcaron toda la captación.',
    avatar:
      'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=128&h=128&fit=crop',
  },
  {
    name: 'Alex Wu',
    role: 'Fundador',
    company: 'Nexgate',
    quote:
      'El análisis PESTEL y PORTER nos dio claridad para invertir el presupuesto donde realmente convertía. ROAS 4,1× en seis meses.',
    avatar:
      'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=128&h=128&fit=crop',
  },
  {
    name: 'Jaime Mitchell',
    role: 'VP Producto',
    company: 'LaunchPad',
    quote:
      'El embudo de captación, conversión y fidelización nos hizo replantear el funnel completo. Hoy medimos cada euro invertido.',
    avatar:
      'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=128&h=128&fit=crop',
  },
  {
    name: 'Raquel Foster',
    role: 'Co-fundadora',
    company: 'Nexus Labs',
    quote:
      'El cuadro de mando integral con ticket medio, beneficio e ingreso fue la pieza que faltaba en nuestro reporting.',
    avatar:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=128&h=128&fit=crop',
  },
  {
    name: 'David Zhang',
    role: 'Head of Design',
    company: 'Paradigm Labs',
    quote:
      'Misión, visión y Business Canvas perfectamente alineados. Métrica Marketing convirtió nuestro plan en algo accionable.',
    avatar:
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=128&h=128&fit=crop',
  },
];

const CARD_WIDTH = 427.5;
const CARD_GAP = 24;
const STEP = CARD_WIDTH + CARD_GAP;

function QuoteMark() {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      aria-hidden="true"
      className="text-[#0D212C]"
    >
      <path
        d="M0 24V14C0 10.1667 0.7 6.96667 2.1 4.4C3.5 1.83333 5.93333 0.0666667 9.4 -0.8L11.4 3.6C9.13333 4.13333 7.5 5.13333 6.5 6.6C5.5 8.06667 4.96667 9.93333 4.9 12.2H10.4V24H0ZM18.6 24V14C18.6 10.1667 19.3 6.96667 20.7 4.4C22.1 1.83333 24.5333 0.0666667 28 -0.8L30 3.6C27.7333 4.13333 26.1 5.13333 25.1 6.6C24.1 8.06667 23.5667 9.93333 23.5 12.2H29V24H18.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TestimonialCarousel() {
  const { ref: sectionRef, inView } = useInViewAnimation<HTMLElement>(0.1);
  const tripled = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];
  const [index, setIndex] = useState(TESTIMONIALS.length);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = window.setInterval(() => {
      setAnimate(true);
      setIndex((i) => i + 1);
    }, 3000);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [paused]);

  useEffect(() => {
    if (index >= TESTIMONIALS.length * 2) {
      const t = window.setTimeout(() => {
        setAnimate(false);
        setIndex(index - TESTIMONIALS.length);
      }, 800);
      return () => window.clearTimeout(t);
    }
    if (index < TESTIMONIALS.length) {
      const t = window.setTimeout(() => {
        setAnimate(false);
        setIndex(index + TESTIMONIALS.length);
      }, 800);
      return () => window.clearTimeout(t);
    }
  }, [index]);

  useEffect(() => {
    if (!animate) {
      const t = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(t);
    }
  }, [animate]);

  const handlePrev = () => {
    setAnimate(true);
    setIndex((i) => i - 1);
  };
  const handleNext = () => {
    setAnimate(true);
    setIndex((i) => i + 1);
  };

  const translate = -(index * STEP);

  return (
    <section ref={sectionRef} className="w-full py-20">
      <div className="md:max-w-4xl md:ml-auto px-6">
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 ${
            inView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.1s' }}
        >
          <h2
            className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-tight"
            style={{ color: '#0D212C' }}
          >
            Lo que dicen los <span className="font-serif">clientes</span>
          </h2>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-black text-black" />
              ))}
            </div>
            <span className="text-sm font-medium" style={{ color: '#0D212C' }}>
              5/5
            </span>
          </div>
        </div>
      </div>

      <div
        className="overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex"
          style={{
            gap: `${CARD_GAP}px`,
            transform: `translate3d(${translate}px, 0, 0)`,
            transition: animate ? 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
            paddingLeft: '24px',
            paddingRight: '24px',
          }}
        >
          {tripled.map((t, i) => {
            const isCurrent = i === index;
            return (
              <article
                key={`${t.name}-${i}`}
                className="bg-white rounded-[32px] md:rounded-[40px] px-6 md:pl-10 md:pr-24 py-8 flex-shrink-0"
                style={{
                  width: `${CARD_WIDTH}px`,
                  maxWidth: 'calc(100vw - 48px)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                  opacity: isCurrent ? 1 : 0.6,
                  transform: isCurrent ? 'scale(1)' : 'scale(0.96)',
                  transition: animate ? 'opacity 0.8s ease, transform 0.8s ease' : 'none',
                }}
              >
                <QuoteMark />
                <p
                  className="mt-4 text-base leading-relaxed"
                  style={{ color: '#0D212C' }}
                >
                  {t.quote}
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-sm" style={{ color: '#0D212C' }}>
                      {t.name}
                    </div>
                    <div className="text-xs" style={{ color: '#273C46' }}>
                      → {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="md:max-w-4xl md:ml-auto px-6 mt-8 flex justify-end gap-3">
        <button
          aria-label="Anterior testimonio"
          onClick={handlePrev}
          className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-black/5 transition-colors"
          style={{ borderColor: 'rgba(13,33,44,0.2)' }}
        >
          <ChevronLeft className="w-5 h-5" style={{ color: '#0D212C' }} />
        </button>
        <button
          aria-label="Siguiente testimonio"
          onClick={handleNext}
          className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-black/5 transition-colors"
          style={{ borderColor: 'rgba(13,33,44,0.2)' }}
        >
          <ChevronRight className="w-5 h-5" style={{ color: '#0D212C' }} />
        </button>
      </div>
    </section>
  );
}

export default TestimonialCarousel;
