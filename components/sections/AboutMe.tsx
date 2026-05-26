import { useDownloadCV } from "@/hooks/useDownloadCV";
import { DownloadIcon } from "lucide-react";

export function AboutMe() {
  const { pending: downloadingCV, onDownloadCV } = useDownloadCV();

  return (
    <section
      id="about"
      className="border-b border-[#4d4354] py-20 md:py-40 px-6 md:px-20 bg-grid"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-[64px]">
        <div className="md:col-span-5 pb-2">
          <p className="font-['Liberation_Sans:Bold',sans-serif] text-purple-primary text-sm tracking-[1.2px] uppercase leading-[16px] mb-4">
            01 // ABOUT
          </p>
          <div className="bg-purple-primary h-px w-[48px] mb-4" />
          <h2 className="font-['Liberation_Sans:Bold',sans-serif] text-[32px] md:text-[48px] tracking-[-0.96px] leading-tight md:leading-[56px] pt-4">
            Engineering digital
            <br className="hidden md:block" />
            solutions for
            <br className="hidden md:block" />
            complex problems.
          </h2>
        </div>
        <div className="md:col-span-7 max-w-[768px] flex flex-col gap-6 md:gap-8">
          <p className="font-['Inter:Regular',sans-serif] text-[#cfc2d6] text-base md:text-lg leading-relaxed md:leading-[28px]">
            {`I'm a Software Engineer who enjoys turning ideas into working
            products. With a passion for clean and efficient code, I've been
            building full-stack web apps using React, Next.js, Node.js, and
            MySQL.`}
          </p>
          <p className="font-['Inter:Regular',sans-serif] text-[#cfc2d6] text-base md:text-lg leading-relaxed md:leading-[28px]">
            I thrive on solving complex problems, collaborating with others, and
            continuously expanding my skills to create robust and user-friendly
            digital experiences. I care about writing maintainable code, working
            with great people, and always learning something new.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 md:gap-12 items-start sm:items-center pt-4 md:pt-8">
            <div className="flex flex-col gap-0.5">
              <p className="font-['Liberation_Sans:Regular',sans-serif] text-gray-primary text-[10px] md:text-xs uppercase leading-[28px]">
                CURRENT ROLE
              </p>
              <p className="font-['Inter:Medium',sans-serif] text-base md:text-lg leading-[28px]">
                Software Engineer
              </p>
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="font-['Liberation_Sans:Regular',sans-serif] text-gray-primary text-[10px] md:text-xs uppercase leading-[28px]">
                LOCATION
              </p>
              <p className="font-['Inter:Medium',sans-serif] text-base md:text-lg leading-[28px]">
                Ho Chi Minh City, VN
              </p>
            </div>

            <div className="flex flex-col gap-0.5">
              <p className="font-['Liberation_Sans:Regular',sans-serif] text-gray-primary text-[10px] md:text-xs uppercase leading-[28px]">
                RESUME (CV)
              </p>
              <button
                onClick={onDownloadCV}
                className="flex gap-2 items-center transition-all duration-300 cursor-pointer group h-7"
                disabled={downloadingCV}
              >
                <p className="font-['Liberation_Sans:Bold',sans-serif] text-purple-primary text-sm tracking-[1.2px] uppercase leading-[16px] group-hover:text-[#9333ea]">
                  DOWNLOAD CV
                </p>
                <DownloadIcon className="size-4 group-hover:text-[#9333ea] text-purple-primary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
