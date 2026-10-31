import {
  BrainCircuitIcon,
  CodeIcon,
  DatabaseIcon,
  SquareTerminalIcon,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    Icon: CodeIcon,
    skills: [
      "React & Next.js",
      "TypeScript",
      "React Native & Expo",
      "Tailwind CSS & shadcn/ui",
      "TanStack Query, Zustand & Redux",
      "React Hook Form & Zod",
    ],
  },
  {
    title: "Backend",
    Icon: DatabaseIcon,
    skills: [
      "NestJS, Node.js & Express",
      "Python & FastAPI",
      "MongoDB, MySQL & Supabase",
      "Redis & BullMQ Queues",
      "REST APIs & Socket.IO",
      "JWT & OAuth Authentication",
      "Payment Integration (Casso, VietQR)",
      "Cloudflare",
    ],
  },
  {
    title: "AI & Data",
    Icon: BrainCircuitIcon,
    skills: [
      "Qdrant Vector Database",
      "Semantic Search & Embeddings",
      "ONNX Runtime Model Inference",
      "Recommendation Engines",
      "LLM Integration (Groq)",
      "Web Crawling (Playwright, Trafilatura)",
      "OCR with Tesseract",
    ],
  },
  {
    title: "Tools",
    Icon: SquareTerminalIcon,
    skills: [
      "Git & GitHub Actions CI/CD",
      "Docker & Docker Compose",
      "Sentry & Prometheus",
      "EAS Build (iOS & Android)",
      "k6 Load Testing, Jest & Vitest",
      "Postman & Swagger",
      "Figma",
    ],
  },
];

export function TechnicalSKill() {
  return (
    <section
      id="skills"
      className="bg-[#0e0e0e] border-y border-[#4d4354] py-20 md:py-[161px] px-6 md:px-20"
    >
      <div className="max-w-[1440px] mx-auto">
        <h2 className="font-['Liberation_Sans:Bold',sans-serif] text-purple-primary text-sm tracking-[1.2px] uppercase text-center leading-[16px] mb-10 md:mb-20">
          03 // TECHNICAL SKILLS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-px bg-[#4d4354] border border-[#4d4354]">
          {skillGroups.map(({ title, Icon, skills }) => (
            <div
              key={title}
              className="bg-[#0e0e0e] p-8 md:p-12 hover:bg-[#1a1a1a] transition-colors duration-300 group"
            >
              <Icon className="size-8 md:size-9 text-purple-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-['Liberation_Sans:Bold',sans-serif] text-xl md:text-2xl leading-tight md:leading-[36px] mb-6 group-hover:text-purple-primary transition-colors">
                {title}
              </h3>
              <ul className="space-y-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="font-['Inter:Regular',sans-serif] text-[#cfc2d6] text-sm md:text-base leading-relaxed md:leading-[24px] hover:text-white hover:translate-x-2 transition-all duration-300 cursor-default"
                  >
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
