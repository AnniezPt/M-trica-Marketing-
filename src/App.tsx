import { useState } from 'react';
import { TestimonialCarousel } from './components/TestimonialCarousel';
import { PartnerSection } from './components/PartnerSection';
import { Footer } from './components/Footer';
import { CopyrightBar } from './components/CopyrightBar';
import { BottomNav } from './components/BottomNav';
import { NavDrawer } from './components/NavDrawer';
import { TopBreadcrumbs } from './components/TopBreadcrumbs';
import { SectionModal } from './components/SectionModal';
import { BookingModal } from './components/BookingModal';
import { useInViewAnimation } from './hooks/useInViewAnimation';

const MARQUEE_PLACEHOLDERS = Array.from({ length: 8 }, (_, i) => i);

function Hero() {
  const { ref, inView } = useInViewAnimation<HTMLElement>(0.1);

  return (
    <section
      ref={ref}
      id="top"
      className="max-w-[520px] mx-auto px-6 pt-8 md:pt-12 text-center"
    >
      <div
        className={`flex justify-center mb-6 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.05s' }}
      >
        <img
          src={`${import.meta.env.BASE_URL}logo.svg`}
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
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...MARQUEE_PLACEHOLDERS, ...MARQUEE_PLACEHOLDERS];
  return (
    <div className="w-full mt-12 md:mt-16 mb-16 overflow-hidden">
      <div className="flex animate-marquee w-max">
        {items.map((_, i) => (
          <div
            key={i}
            aria-hidden="true"
            className="h-[220px] md:h-[400px] w-[280px] md:w-[520px] mx-3 rounded-2xl shadow-lg flex-shrink-0 flex items-center justify-center relative overflow-hidden"
            style={{
              background:
                'linear-gradient(135deg, #F1F5F7 0%, #E5ECF0 50%, #F1F5F7 100%)',
              border: '1px solid rgba(13,33,44,0.06)',
            }}
          >
            <div
              className="absolute inset-3 rounded-xl border-2 border-dashed flex items-center justify-center"
              style={{ borderColor: 'rgba(13,33,44,0.1)' }}
            >
              <span
                className="font-mono text-xs md:text-sm"
                style={{ color: 'rgba(13,33,44,0.35)' }}
              >
                Imagen pendiente
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSectionId, setOpenSectionId] = useState<string | null>(null);
  const [openGroupId, setOpenGroupId] = useState<string | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);

  const openSection = (id: string, groupId?: string) => {
    setOpenSectionId(id);
    setOpenGroupId(groupId ?? null);
  };
  const closeSection = () => {
    setOpenSectionId(null);
    setOpenGroupId(null);
  };
  const openBooking = () => setBookingOpen(true);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <TopBreadcrumbs onSelect={openSection} />
      <Hero />
      <Marquee />
      <TestimonialCarousel />
      <PartnerSection onStart={openBooking} />
      <Footer onOpenSection={openSection} />
      <CopyrightBar />
      <BottomNav
        onOpenMenu={() => setDrawerOpen(true)}
        onStart={openBooking}
      />
      <NavDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onSelectSection={openSection}
      />
      <SectionModal
        openId={openSectionId}
        initialGroupId={openGroupId}
        onClose={closeSection}
        onNavigate={openSection}
      />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
