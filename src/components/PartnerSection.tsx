import { useEffect, useRef, useState } from 'react';
import { Button } from './Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const TRAIL_IMAGES = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif',
  'https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
];

const AVATAR =
  'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=128&h=128&fit=crop';

type Trail = {
  id: number;
  x: number;
  y: number;
  image: string;
  rotation: number;
  born: number;
};

const SPAWN_INTERVAL = 80;
const LIFETIME = 1000;

export function PartnerSection() {
  const { ref, inView } = useInViewAnimation<HTMLElement>(0.1);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [trails, setTrails] = useState<Trail[]>([]);
  const lastSpawnRef = useRef(0);
  const idRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const tick = () => {
      const now = performance.now();
      setTrails((prev) => prev.filter((t) => now - t.born < LIFETIME));
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const now = performance.now();
    if (now - lastSpawnRef.current < SPAWN_INTERVAL) return;
    lastSpawnRef.current = now;

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const image = TRAIL_IMAGES[Math.floor(Math.random() * TRAIL_IMAGES.length)];
    const rotation = Math.random() * 20 - 10;

    setTrails((prev) => [
      ...prev,
      { id: idRef.current++, x, y, image, rotation, born: now },
    ]);
  };

  return (
    <section ref={ref} className="w-full py-12 px-6">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className={`relative max-w-7xl mx-auto py-48 rounded-[40px] bg-white overflow-hidden ${
          inView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{
          boxShadow: '0 0 0 0.5px rgba(0,0,0,0.05), 0 4px 30px rgba(0,0,0,0.06)',
          animationDelay: '0.1s',
        }}
      >
        {trails.map((trail) => {
          const age = (performance.now() - trail.born) / LIFETIME;
          const opacity = Math.max(0, 1 - age);
          const scale = 1 - age * 0.4;
          return (
            <img
              key={trail.id}
              src={trail.image}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute rounded-2xl shadow-lg object-cover"
              style={{
                left: trail.x - 80,
                top: trail.y - 60,
                width: 160,
                height: 120,
                opacity,
                transform: `rotate(${trail.rotation}deg) scale(${scale})`,
                transition: 'opacity 1s ease-out, transform 1s ease-out',
                willChange: 'opacity, transform',
              }}
            />
          );
        })}

        <div className="relative z-10 flex flex-col items-center text-center">
          <h2
            className="font-serif text-[48px] md:text-[64px] lg:text-[80px] mb-12 leading-[1.05] tracking-tight"
            style={{ color: '#0D212C' }}
          >
            Únete a Métrica
          </h2>

          <Button variant="primary" href="#contacto" className="!px-3 !py-2">
            <img
              src={AVATAR}
              alt="Equipo Métrica Marketing"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="px-3">Empieza con nosotros</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default PartnerSection;
