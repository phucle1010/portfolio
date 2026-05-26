"use client";

type HeroProps = {
  onScrollToSection: (val: string) => void;
};

export function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section
      id="hero"
      className="pt-20 md:pt-10 min-h-screen flex items-center justify-center border-b border-[#4d4354] px-6 md:px-20 relative overflow-hidden bg-grid"
    >
      <div className="absolute right-0 top-0 opacity-20 hidden md:block">
        <p className="font-['Liberation_Sans:Regular',sans-serif] text-[240px] text-white uppercase leading-[240px]">
          PHUC
        </p>
      </div>
      <div className="max-w-[1440px] w-full grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10 py-10 md:py-0">
        <div className="md:col-span-7 flex flex-col justify-center md:py-[85px]">
          <h1 className="font-['Liberation_Sans:Bold',sans-serif] text-[40px] md:text-[72px] tracking-[-1.5px] md:tracking-[-2.88px] mb-[16px] md:mb-[24px]">
            <span className="leading-tight md:leading-[80px] block">
              {"Hi, I'm"}
            </span>
            <span className="leading-tight md:leading-[80px] text-purple-primary block">
              Le The Phuc.
            </span>
          </h1>

          <p className="font-['Liberation_Sans:Bold',sans-serif] text-[#cfc2d6] text-[24px] md:text-[48px] tracking-[-0.5px] md:tracking-[-0.96px] leading-tight md:leading-[56px] mb-[32px] md:mb-[48px] max-w-[672px]">
            Software Engineer <br />
            Frontend & Full-Stack
          </p>

          <div className="flex flex-col sm:flex-row gap-[16px] md:gap-[24px]">
            <button
              onClick={() => onScrollToSection("work")}
              className="bg-purple-primary px-8 py-[16px] hover:bg-[#9333ea] transition-all duration-300 hover:scale-105 cursor-pointer w-full sm:w-auto"
            >
              <p className="font-['Liberation_Sans:Bold',sans-serif] text-xs text-black tracking-[1.2px] uppercase leading-[16px]">
                SEE MY WORK
              </p>
            </button>
            <button
              onClick={() => onScrollToSection("contact")}
              className="border border-white px-[33px] py-4 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer w-full sm:w-auto"
            >
              <p className="font-['Liberation_Sans:Bold',sans-serif] text-sm tracking-[1.2px] uppercase leading-[16px]">
                GET IN TOUCH
              </p>
            </button>
          </div>
        </div>

        <div className="md:col-span-5 flex items-center justify-center order-first md:order-last">
          <div className="bg-[#0f0f0f] border border-[#4d4354] p-px max-w-[300px] md:max-w-[448px] relative">
            <div className="overflow-hidden">
              <div className="relative">
                <img
                  alt="Profile of Le The Phuc"
                  className="w-full h-auto mix-blend-luminosity"
                  src="/images-v2/profile.png"
                />
                <div className="absolute inset-0 bg-white mix-blend-saturation" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
