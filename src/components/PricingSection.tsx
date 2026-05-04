import { Button } from './Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export function PricingSection() {
  const { ref, inView } = useInViewAnimation<HTMLElement>(0.1);

  return (
    <section ref={ref} id="plan-financiero" className="w-full py-12 px-6">
      <div className="md:max-w-4xl md:ml-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article
            className={`rounded-[40px] pl-10 pr-10 md:pr-24 pt-3 pb-10 ${
              inView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{
              backgroundColor: '#051A24',
              boxShadow:
                'inset 0 1px 0 rgba(255,255,255,0.06), inset 0 0 40px rgba(255,255,255,0.03), 0 4px 16px rgba(0,0,0,0.18)',
              animationDelay: '0.1s',
            }}
          >
            <div className="flex flex-col h-full">
              <h3
                className="text-[22px] font-medium mt-6"
                style={{ color: '#F6FCFF' }}
              >
                Plan de Captación
              </h3>
              <p className="mt-3 text-sm" style={{ color: '#E0EBF0' }}>
                Atrae a tu buyer persona con una
                <br />
                estrategia digital medible.
              </p>

              <div className="mt-8">
                <div className="text-2xl font-medium" style={{ color: '#F6FCFF' }}>
                  ROI 3,2×
                </div>
                <div className="text-sm mt-1" style={{ color: '#E0EBF0' }}>
                  Resultado esperado Año 1
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button variant="primary" href="#plan-de-accion">
                  Ver plan
                </Button>
                <Button variant="secondary" href="#estudio-del-mercado">
                  Cómo funciona
                </Button>
              </div>
            </div>
          </article>

          <article
            className={`rounded-[40px] pl-10 pr-10 md:pr-24 pt-3 pb-10 bg-white ${
              inView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              animationDelay: '0.2s',
            }}
          >
            <div className="flex flex-col h-full">
              <h3
                className="text-[22px] font-medium mt-6"
                style={{ color: '#0D212C' }}
              >
                Punto de Equilibrio
              </h3>
              <p className="mt-3 text-sm" style={{ color: '#273C46' }}>
                Cuadro de mando integral con ingresos,
                <br />
                costes y ratios totales.
              </p>

              <div className="mt-8">
                <div className="text-2xl font-medium" style={{ color: '#0D212C' }}>
                  Año 1
                </div>
                <div className="text-sm mt-1" style={{ color: '#273C46' }}>
                  Break-even objetivo
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button variant="tertiary" href="#qa">
                  Ver Q&A
                </Button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
