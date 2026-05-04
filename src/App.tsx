import { useState } from 'react';
import { Button } from './components/Button';
import { TestimonialSection } from './components/TestimonialSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialCarousel } from './components/TestimonialCarousel';
import { HierarchicalMenu } from './components/HierarchicalMenu';
import { AboutSection } from './components/AboutSection';
import { QASection } from './components/QASection';
import { PartnerSection } from './components/PartnerSection';
import { Footer } from './components/Footer';
import { CopyrightBar } from './components/CopyrightBar';
import { BottomNav } from './components/BottomNav';
import { NavDrawer } from './components/NavDrawer';
import { useInViewAnimation } from './hooks/useInViewAnimation';

const MARQUEE_IMAGES = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif',
  'https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
];

function Hero() {
  const { ref, inView } = useInViewAnimation<HTMLElement>(0.1);

  return (
    <section
      ref={ref}
      id="top"
      className="max-w-[520px] mx-auto px-6 pt-12 md:pt-16 text-center"
    >
      <div
        className={`flex justify-center mb-6 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.05s' }}
      >
        <img
          src="/logo.svg"
          alt="Métrica Marketing"
          className="w-16 h-16 rounded-2xl"
        />
      </div>

      <h1
        className={`font-serif font-semibold text-[32px] md:text-[40px] lg:text-[44px] tracking-tight mb-4 ${
          inView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{ color: '#051A24', animationDelay: '0.1s' }}
      >
        Métrica Marketing
      </h1>

      <p
        className={`font-mono text-xs md:text-sm mb-2 ${
          inView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{ color: '#051A24', animationDelay: '0.2s' }}
      >
        El plan de marketing digital del TFM
      </p>

      <h2
        className={`text-[28px] md:text-[36px] lg:text-[44px] leading-[1.1] tracking-tight ${
          inView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{ color: '#0D212C', animationDelay: '0.3s' }}
      >
        Construye la <span className="font-serif">próxima ola</span>,
        <br />
        con datos que <span className="font-serif">deciden.</span>
      </h2>

      <div
        className={`flex flex-col gap-6 text-sm md:text-base leading-relaxed mt-5 md:mt-6 ${
          inView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{ color: '#051A24', animationDelay: '0.4s' }}
      >
        <p>
          Métrica Marketing nace como Trabajo Fin de Máster con un objetivo
          claro: convertir cada decisión de marketing en una métrica accionable
          y demostrable.
        </p>
        <p>
          Trabajamos las cuatro entregas del plan: estudio del mercado,
          estrategia, plan de acción y plan financiero. Todo conectado,
          coherente y listo para defender.
        </p>
        <p>Estructurado en cuatro entregas + plan de marketing del TFM.</p>
      </div>

      <div
        className={`flex flex-col sm:flex-row gap-3 md:gap-4 mt-5 md:mt-6 justify-center ${
          inView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.5s' }}
      >
        <Button variant="primary" href="#apartados">
          Ver apartados
        </Button>
        <Button variant="secondary" href="#qa">
          Preguntas frecuentes
        </Button>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...MARQUEE_IMAGES, ...MARQUEE_IMAGES];
  return (
    <div className="w-full mt-16 md:mt-20 mb-16 overflow-hidden">
      <div className="flex animate-marquee w-max">
        {items.map((src, i) => (
          <img
            key={`${src}-${i}`}
            src={src}
            alt=""
            aria-hidden="true"
            className="h-[220px] md:h-[400px] w-auto object-cover mx-3 rounded-2xl shadow-lg flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <Hero />
      <Marquee />
      <TestimonialSection />
      <HierarchicalMenu />
      <PricingSection />
      <TestimonialCarousel />
      <AboutSection />
      <QASection />
      <PartnerSection />
      <Footer />
      <CopyrightBar />
      <BottomNav onOpenMenu={() => setDrawerOpen(true)} />
      <NavDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
}
