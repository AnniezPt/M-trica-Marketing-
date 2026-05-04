import { useInViewAnimation } from '../hooks/useInViewAnimation';

type Project = {
  id: string;
  name: string;
  description: string;
  image: string;
  bullets: string[];
};

const PROJECTS: Project[] = [
  {
    id: 'estudio-del-mercado',
    name: 'Estudio del Mercado',
    description:
      'Análisis externo (PESTEL, PORTER) y análisis interno (Cadena de Valor, Ventaja Competitiva, Ciclo de vida y DAFO–CAME).',
    image: 'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
    bullets: ['PESTEL', 'PORTER', 'Cadena de Valor', 'DAFO – CAME'],
  },
  {
    id: 'estrategia-de-marketing',
    name: 'Estrategia de Marketing',
    description:
      'Misión y visión, target/buyer persona, TAM-SAM-SOM, customer journey y Business Canvas.',
    image: 'https://motionsites.ai/assets/hero-automation-machines-preview-DlTveRIN.gif',
    bullets: ['Buyer Persona', 'TAM · SAM · SOM', 'Customer Journey', 'Business Canvas'],
  },
  {
    id: 'plan-de-accion',
    name: 'Plan de Acción',
    description:
      'Objetivos online, presupuesto y estrategia digital en tres fases: captación, conversión y fidelización.',
    image: 'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
    bullets: ['Captación', 'Conversión', 'Fidelización', 'Funnel completo'],
  },
];

function ProjectItem({ project, index }: { project: Project; index: number }) {
  const { ref, inView } = useInViewAnimation<HTMLDivElement>(0.1);
  return (
    <div
      ref={ref}
      id={project.id}
      className={`flex flex-col gap-6 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <div className="ml-20 md:ml-28">
        <div
          className="text-xs md:text-sm font-mono mb-2"
          style={{ color: '#273C46' }}
        >
          0{index + 3}.
        </div>
        <h3
          className="font-serif font-semibold text-2xl md:text-3xl"
          style={{ color: '#051A24' }}
        >
          {project.name}
        </h3>
        <p
          className="text-sm md:text-base mt-2 max-w-xl"
          style={{ color: 'rgba(5,26,36,0.7)' }}
        >
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.bullets.map((b) => (
            <li
              key={b}
              className="text-xs md:text-sm rounded-full px-3 py-1"
              style={{
                backgroundColor: '#F1F5F7',
                color: '#0D212C',
              }}
            >
              {b}
            </li>
          ))}
        </ul>
      </div>
      <img
        src={project.image}
        alt={project.name}
        className="w-full rounded-2xl shadow-lg object-cover"
      />
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="flex flex-col gap-16 md:gap-20">
        {PROJECTS.map((p, i) => (
          <ProjectItem key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
