import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const PARALLAX_IMAGE =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260330_103804_7aa5494f-4d5b-432e-9dc7-20715275f143.png&w=1280&q=85';

export function TestimonialSection() {
  const { ref: sectionRef, inView } = useInViewAnimation<HTMLElement>(0.1);
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);
  const visible = useRef(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const node = imageWrapperRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visible.current = entry.isIntersecting;
        });
      },
      { threshold: 0 },
    );
    observer.observe(node);

    const update = () => {
      rafId.current = null;
      if (!visible.current || !imageWrapperRef.current) return;
      const rect = imageWrapperRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const clamped = Math.min(Math.max(progress, 0), 1);
      const next = (clamped - 0.5) * 200;
      setOffset(Math.max(-200, Math.min(200, next)));
    };

    const onScroll = () => {
      if (rafId.current != null) return;
      rafId.current = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId.current != null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-12 px-6">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
        <div
          className={inView ? 'animate-fade-in-up' : 'opacity-0'}
          style={{ animationDelay: '0.1s' }}
        >
          <Quote className="w-6 h-6 text-slate-900" />
        </div>

        <h2
          className={`mt-6 text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-tight ${
            inView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ color: '#0D212C', animationDelay: '0.2s' }}
        >
          'Lo que no se mide, no se puede{' '}
          <span className="font-serif">mejorar</span>'
        </h2>

        <p
          className={`mt-6 italic text-sm ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ color: '#273C46', animationDelay: '0.3s' }}
        >
          Métrica Marketing — TFM
        </p>

        <div
          className={`mt-6 flex items-center justify-center gap-8 ${
            inView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          <span
            className="font-medium text-slate-900 inline-block text-center"
            style={{ width: '80px', fontSize: '24px' }}
          >
            PESTEL
          </span>
          <span
            className="font-medium text-slate-900 inline-block text-center"
            style={{ width: '83px', fontSize: '24px' }}
          >
            PORTER
          </span>
          <span
            className="font-medium text-slate-900 inline-block text-center"
            style={{ width: '110px', fontSize: '24px' }}
          >
            DAFO-CAME
          </span>
        </div>

        <div
          ref={imageWrapperRef}
          className={`mt-10 w-full max-w-xs overflow-hidden rounded-2xl shadow-lg ${
            inView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.5s' }}
        >
          <img
            src={PARALLAX_IMAGE}
            alt="Métrica Marketing"
            className="w-full h-auto block"
            style={{ transform: `translate3d(0, ${offset}px, 0)`, willChange: 'transform' }}
          />
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
