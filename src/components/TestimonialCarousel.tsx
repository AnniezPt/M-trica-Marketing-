import { Star } from 'lucide-react';
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
];

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
  const { ref, inView } = useInViewAnimation<HTMLElement>(0.1);

  return (
    <section ref={ref} className="w-full py-16 md:py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.name}
              className={`bg-white rounded-[32px] px-6 py-7 ${
                inView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                animationDelay: `${0.2 + i * 0.1}s`,
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
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialCarousel;
