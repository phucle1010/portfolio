import { StackSchematic } from "./StackSchematic";
import { Buffer } from "./Buffer";
import { primaryClass, secondaryClass } from "./classes";

export function EntryPortal() {
  return (
    <Buffer id="hero" bodyClassName="py-8 md:py-32">
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(17rem,0.95fr)] lg:items-center lg:gap-12">
        <div>
          <h1 className="mt-6 max-w-[13ch] text-[clamp(2.15rem,5vw,3.55rem)] leading-[1.02] font-medium tracking-[-0.04em]">
            I build digital products that scale
            <span className="caret" aria-hidden="true" />
          </h1>
          <p className="sans mt-4 max-w-xl text-[15px] leading-7 text-[#948c7a] md:text-base md:leading-8">
            I&apos;m Le The Phuc — a Full-Stack Developer building scalable SaaS
            platforms, modern web applications, and AI-powered products.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#work" className={primaryClass}>
              See the work
            </a>
            <a href="#contact" className={secondaryClass}>
              Start a project
            </a>
          </div>
        </div>

        <StackSchematic />
      </div>
    </Buffer>
  );
}
