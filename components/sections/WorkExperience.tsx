import svgPaths from "../icons/svg-8cj7k897ti";

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
          <div className="md:col-span-8 bg-[#0f0f0f] border border-[#4d4354] overflow-hidden group hover:border-purple-primary transition-all duration-300 cursor-pointer">
            <div className="h-[250px] md:h-[414.36px] overflow-hidden">
              <img
                alt="AI Software Stack Interface"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="/images-v2/projects/warp/1.png"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-['Liberation_Sans:Regular',sans-serif] text-xl md:text-2xl leading-tight md:leading-[36px] group-hover:text-purple-primary transition-colors">
                    AI Software Stack
                  </h3>
                  <p className="font-['Liberation_Sans:Regular',sans-serif] text-purple-primary text-[10px] md:text-xs uppercase leading-[15px]">
                    FRONTEND DEVELOPER @ CORSAIR
                  </p>
                </div>
                <svg
                  className="size-[15px] group-hover:scale-125 group-hover:rotate-45 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 15 15"
                >
                  <path d={svgPaths.p318ff200} fill="white" />
                </svg>
              </div>
              <p className="font-['Inter:Regular',sans-serif] text-[#cfc2d6] text-sm md:text-base leading-relaxed md:leading-[24px] max-w-[576px]">
                Developed a web-based app installer with real-time SignalR
                updates and deep integration to a C# backend.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 bg-[#0f0f0f] border border-[#4d4354] overflow-hidden group hover:border-purple-primary transition-all duration-300 cursor-pointer">
            <div className="h-[250px] md:h-[355.34px] overflow-hidden">
              <img
                alt="Magicblocks AI Chatbot Preview"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="/images-v2/projects/magicblocks/2.png"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="mb-4">
                <h3 className="font-['Liberation_Sans:Regular',sans-serif] text-xl md:text-[24px] leading-tight md:leading-[36px] group-hover:text-purple-primary transition-colors">
                  Magicblocks AI
                </h3>
                <p className="font-['Liberation_Sans:Regular',sans-serif] text-purple-primary text-[10px] md:text-xs uppercase leading-[15px]">
                  FULL STACK DEVELOPER @ MAGICBLOCKS, INC.
                </p>
              </div>

              <p className="font-['Inter:Regular',sans-serif] text-[#cfc2d6] text-sm md:text-base leading-relaxed md:leading-[24px] max-w-[576px]">
                Engineered an embeddable AI chatbot platform with strong
                authentication, multi-channel agent support, and performance
                optimization using Cloudflare and Vercel.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 bg-[#0f0f0f] border border-[#4d4354] overflow-hidden group hover:border-purple-primary transition-all duration-300 cursor-pointer">
            <div className="h-[250px] md:h-[414.38px] overflow-hidden">
              <img
                alt="Tinda Job Mobile Application"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="/images-v2/projects/tinda/4.png"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="mb-4">
                <h3 className="font-['Liberation_Sans:Regular',sans-serif] text-xl md:text-[24px] leading-tight md:leading-[36px] group-hover:text-purple-primary transition-colors">
                  Job Tinda
                </h3>
                <p className="font-['Liberation_Sans:Regular',sans-serif] text-purple-primary text-[10px] md:text-xs uppercase leading-[15px]">
                  MOBILE DEVELOPER @ Azubi-in-Germany
                </p>
              </div>

              <p className="font-['Inter:Regular',sans-serif] text-[#cfc2d6] text-sm md:text-base leading-relaxed md:leading-[24px] max-w-[576px]">
                Led development and project management for a mobile app
                connecting companies and job seekers, using Agile methodology
                and React Native.
              </p>
            </div>
          </div>

          <div className="md:col-span-8 bg-[#0f0f0f] border border-[#4d4354] overflow-hidden group hover:border-purple-primary transition-all duration-300 cursor-pointer">
            <div className="h-[250px] md:h-[414.38px] overflow-hidden">
              <img
                alt="HYP 3 Crypto Platform"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="/images-v2/projects/hyp3/1.png"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-['Liberation_Sans:Regular',sans-serif] text-xl md:text-[24px] leading-tight md:leading-[36px] group-hover:text-purple-primary transition-colors">
                    HYP 3 Platform
                  </h3>
                  <p className="font-['Liberation_Sans:Regular',sans-serif] text-purple-primary text-[10px] md:text-xs uppercase leading-[15px]">
                    FRONTEND DEVELOPER @ DTC LABS
                  </p>
                </div>
                <svg
                  className="size-[15px] group-hover:scale-125 group-hover:rotate-45 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 15 15"
                >
                  <path d={svgPaths.p318ff200} fill="white" />
                </svg>
              </div>
              <p className="font-['Inter:Regular',sans-serif] text-[#cfc2d6] text-sm md:text-base leading-relaxed md:leading-[24px] max-w-[576px]">
                Developed a scalable crypto trading and news platform with
                Next.js, integrating Web3 wallet support and focusing on speed,
                SEO, and UI/UX improvements.
              </p>
            </div>
          </div>

          <div className="md:col-span-6 bg-[#0f0f0f] border border-[#4d4354] overflow-hidden group hover:border-purple-primary transition-all duration-300 cursor-pointer">
            <div className="h-[250px] md:h-[307.13px] overflow-hidden">
              <img
                alt="Block24 News Platform"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="/images-v2/projects/block24/4.png"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="mb-4">
                <h3 className="font-['Liberation_Sans:Regular',sans-serif] text-xl md:text-[24px] leading-tight md:leading-[36px] group-hover:text-purple-primary transition-colors">
                  Block24
                </h3>
                <p className="font-['Liberation_Sans:Regular',sans-serif] text-purple-primary text-[10px] md:text-xs uppercase leading-[15px]">
                  FRONTEND DEVELOPER @ TRADECOINVN
                </p>
              </div>

              <p className="font-['Inter:Regular',sans-serif] text-[#cfc2d6] text-sm md:text-base leading-relaxed md:leading-[24px] max-w-[576px]">
                Developed a scalable crypto trading and news platform with
                Next.js, integrating Web3 wallet support and focusing on speed,
                SEO, and UI/UX improvements.
              </p>
            </div>
          </div>

          <div className="md:col-span-6 bg-[#0f0f0f] border border-[#4d4354] overflow-hidden group hover:border-purple-primary transition-all duration-300 cursor-pointer">
            <div className="h-[250px] md:h-[307.13px] overflow-hidden">
              <img
                alt="Order Food Cardwatch POS"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="/images-v2/projects/hrcv/1.png"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="mb-4">
                <h3 className="font-['Liberation_Sans:Regular',sans-serif] text-xl md:text-[24px] leading-tight md:leading-[36px] group-hover:text-purple-primary transition-colors">
                  HRCV
                </h3>
                <p className="font-['Liberation_Sans:Regular',sans-serif] text-purple-primary text-[10px] md:text-xs uppercase leading-[15px]">
                  BACKEND DEVELOPER @ Vinpet Solution
                </p>
              </div>

              <p className="font-['Inter:Regular',sans-serif] text-[#cfc2d6] text-sm md:text-base leading-relaxed md:leading-[24px] max-w-[576px]">
                Developed the recruitment system in high speed and performance.
                Smart recommendation gave a lot of chances for candidate to seek
                new jobs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
