import { CodeIcon, DatabaseIcon, SquareTerminalIcon } from "lucide-react";

export function TechnicalSKill() {
  return (
    <section
      id="skills"
      className="bg-[#0e0e0e] border-y border-[#4d4354] py-20 md:py-[161px] px-6 md:px-20"
    >
      <div className="max-w-[1440px] mx-auto">
        <p className="font-['Liberation_Sans:Bold',sans-serif] text-purple-primary text-sm tracking-[1.2px] uppercase text-center leading-[16px] mb-10 md:mb-20">
          03 // TECHNICAL SKILLS
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#4d4354] border border-[#4d4354]">
          <div className="bg-[#0e0e0e] p-8 md:p-12 hover:bg-[#1a1a1a] transition-colors duration-300 group">
            <CodeIcon className="size-8 md:size-9 text-purple-primary mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="font-['Liberation_Sans:Bold',sans-serif] text-xl md:text-2xl leading-tight md:leading-[36px] mb-6 group-hover:text-purple-primary transition-colors">
              Frontend
            </h3>
            <ul className="space-y-2">
              {[
                "React & Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Redux & Zustand",
                "Expo Native",
              ].map((skill, i) => (
                <li
                  key={i}
                  className="font-['Inter:Regular',sans-serif] text-[#cfc2d6] text-sm md:text-base leading-relaxed md:leading-[24px] hover:text-white hover:translate-x-2 transition-all duration-300 cursor-default"
                >
                  • {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0e0e0e] p-8 md:p-12 hover:bg-[#1a1a1a] transition-colors duration-300 group">
            <DatabaseIcon className="size-8 md:size-9 text-purple-primary mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="font-['Liberation_Sans:Bold',sans-serif] text-xl md:text-2xl leading-tight md:leading-[36px] mb-6 group-hover:text-purple-primary transition-colors">
              Backend
            </h3>
            <ul className="space-y-[8px]">
              {[
                "Node.js & Express & NestJS",
                "MySQL & MongoDB & Supabase",
                "Qdrant VectorDB",
                "REST APIs",
                "Cloudflare",
              ].map((skill, i) => (
                <li
                  key={i}
                  className="font-['Inter:Regular',sans-serif] text-[#cfc2d6] text-sm md:text-base leading-relaxed md:leading-[24px] hover:text-white hover:translate-x-2 transition-all duration-300 cursor-default"
                >
                  • {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0e0e0e] p-8 md:p-12 hover:bg-[#1a1a1a] transition-colors duration-300 group">
            <SquareTerminalIcon className="size-8 md:size-9 text-purple-primary mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="font-['Liberation_Sans:Bold',sans-serif] text-xl md:text-2xl leading-tight md:leading-[36px] mb-6 group-hover:text-purple-primary transition-colors">
              Tools
            </h3>
            <ul className="space-y-[8px]">
              {[
                "Git & GitHub",
                "Github Action",
                "Docker",
                "Postman",
                "Swagger",
                "Figma",
              ].map((skill, i) => (
                <li
                  key={i}
                  className="font-['Inter:Regular',sans-serif] text-[#cfc2d6] text-sm md:text-base leading-relaxed md:leading-[24px] hover:text-white hover:translate-x-2 transition-all duration-300 cursor-default"
                >
                  • {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
