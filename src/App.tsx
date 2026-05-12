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
import { NavigationProvider } from './lib/navigation';
import { publicAsset } from './lib/publicAsset';
import { useInViewAnimation } from './hooks/useInViewAnimation';

const MARQUEE_IMAGES = [
  'IMG_1044.jpeg',
  'IMG_1046.jpeg',
  'IMG_1048.png',
  'consultoria4.jpeg',
  'consultoria5.jpeg',
  'consultoria6.webp',
];
const MARQUEE_SLOTS = Array.from(
  { length: 8 },
  (_, i) => MARQUEE_IMAGES[i % MARQUEE_IMAGES.length],
);

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
  const items = [...MARQUEE_SLOTS, ...MARQUEE_SLOTS];
  return (
    <div className="w-full mt-12 md:mt-16 mb-16 overflow-hidden">
      <div className="flex animate-marquee w-max">
        {items.map((src, i) => (
          <img
            key={`${src}-${i}`}
            src={publicAsset(src)}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="h-[220px] md:h-[400px] w-[280px] md:w-[520px] mx-3 rounded-2xl shadow-lg flex-shrink-0 object-cover"
            style={{
              border: '1px solid rgba(13,33,44,0.06)',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSectionId, setOpenSectionId] = useState<string | null>(null);
  const [openGroupId, setOpenGroupId] = useState<string | null>(null);
  const [openLeafId, setOpenLeafId] = useState<string | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);

  const openSection = (id: string, groupId?: string, leafId?: string) => {
    setOpenSectionId(id);
    setOpenGroupId(groupId ?? null);
    setOpenLeafId(leafId ?? null);
  };
  const closeSection = () => {
    setOpenSectionId(null);
    setOpenGroupId(null);
    setOpenLeafId(null);
  };
  const openBooking = () => setBookingOpen(true);

  return (
    <NavigationProvider value={openSection}>
      <div className="bg-white min-h-screen overflow-x-clip">
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
          initialLeafId={openLeafId}
          onClose={closeSection}
          onNavigate={openSection}
        />
        <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
      </div>
    </NavigationProvider>
  );
}
