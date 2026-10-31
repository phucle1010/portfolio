import { projects } from "@/constants/projects";
import svgPaths from "../icons/svg-8cj7k897ti";

type Experience = {
  title: string;
  role: string;
  image: string;
  imageAlt: string;
  cardClassName: string;
  imageClassName: string;
  description: string;
  technologies: string[];
};

function ExperienceCard({ project }: { project: Experience }) {
  return (
    <div
      key={project.title}
      className={`${project.cardClassName} bg-[#0f0f0f] border border-[#4d4354] overflow-hidden group hover:border-purple-primary transition-all duration-300 cursor-pointer`}
    >
      <div className={`h-[250px] ${project.imageClassName} overflow-hidden`}>
        <img
          alt={project.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={project.image}
        />
      </div>
      <div className="p-6 md:p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-['Liberation_Sans:Regular',sans-serif] text-xl md:text-2xl leading-tight md:leading-[36px] group-hover:text-purple-primary transition-colors">
              {project.title}
            </h3>
            <p className="font-['Liberation_Sans:Regular',sans-serif] text-purple-primary text-[10px] md:text-xs uppercase leading-[15px]">
              {project.role}
            </p>
          </div>
          <svg
            className="size-[15px] shrink-0 group-hover:scale-125 group-hover:rotate-45 transition-all duration-300"
            fill="none"
            viewBox="0 0 15 15"
          >
            <path d={svgPaths.p318ff200} fill="white" />
          </svg>
        </div>

        <p className="font-['Inter:Regular',sans-serif] text-[#cfc2d6] text-sm md:text-base leading-relaxed md:leading-[24px]">
          {project.description}
        </p>
      </div>
    </div>
  );
}

export function WorkExperience() {
  return (
    <section id="work" className="bg-black py-20 md:py-40 px-6 md:px-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-20 gap-6">
          <div className="flex flex-col gap-[16px] max-w-[576px]">
            <p className="font-['Liberation_Sans:Bold',sans-serif] text-purple-primary text-sm tracking-[1.2px] uppercase leading-[16px]">
              02 // SELECTED WORKS
            </p>
            <h2 className="font-['Liberation_Sans:Bold',sans-serif] text-[32px] md:text-[48px] tracking-[-0.96px] leading-tight md:leading-[56px]">
              Building the future, one
              <br />
              pixel at a time.
            </h2>
          </div>
          <p className="font-['Liberation_Sans:Bold',sans-serif] text-gray-primary text-[12px] tracking-[1.2px] uppercase leading-[16px]">
            SCROLL TO EXPLORE ↘
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projects.map((project) => (
            <ExperienceCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
