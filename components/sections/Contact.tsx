"use client";

import { Github, Instagram, Linkedin, Music2 } from "lucide-react";
import { SOCIAL_LINKS } from "@/constants/social-links";

import { Label } from "../ui/label";

const SOCIAL_ICONS: Record<string, any> = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  tiktok: Music2,
};

export function Contact() {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const projectBrief = formData.get("projectBrief") as string;

    const mailtoEmail = "lethephuc2002@gmail.com";
    const subject = encodeURIComponent(`Project Inquiry from ${fullName}`);
    const body = encodeURIComponent(
      `Name: ${fullName}\n` +
        `Email: ${email}\n\n` +
        `Project Brief:\n${projectBrief}`
    );

    window.location.href = `mailto:${mailtoEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="bg-black border-t border-[#4d4354] py-20 md:py-40 px-6 md:px-20"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
        <div className="md:col-span-6">
          <p className="font-['Liberation_Sans:Bold',sans-serif] text-purple-primary text-sm tracking-[1.2px] uppercase leading-[16px] mb-6 md:mb-8">
            05 // CONTACT
          </p>
          <h2 className="font-['Liberation_Sans:Bold',sans-serif] text-[40px] md:text-[72px] tracking-[-1.5px] md:tracking-[-2.88px] leading-tight md:leading-[80px] mb-8">
            {`Let's build`}
            <br />
            together.
          </h2>
          <div className="mb-6 md:mb-8">
            <p className="font-['Liberation_Sans:Bold',sans-serif] text-gray-primary text-xs tracking-[1.2px] uppercase leading-[16px] mb-2">
              EMAIL
            </p>
            <p className="font-['Inter:Regular',sans-serif] text-lg md:text-[24px] leading-tight md:leading-[28px]">
              lethephuc2002@gmail.com
            </p>
          </div>
          <div className="mb-6 md:mb-8">
            <p className="font-['Liberation_Sans:Bold',sans-serif] text-gray-primary text-xs tracking-[1.2px] uppercase leading-[16px] mb-2">
              PHONE
            </p>
            <p className="font-['Inter:Regular',sans-serif] text-lg md:text-2xl leading-tight md:leading-[28px]">
              +84 368 341 595
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-6">
            {SOCIAL_LINKS.filter((link) => link.id !== "email").map((link) => {
              const Icon = SOCIAL_ICONS[link.id];
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  title={link.label}
                  className="flex items-center justify-center size-10 md:size-12 border border-[#4d4354] hover:border-purple-primary hover:bg-purple-primary/10 transition-all duration-300 group cursor-pointer"
                >
                  {Icon && <Icon size={20} className="text-purple-primary" />}
                </a>
              );
            })}
          </div>
        </div>

        <div className="md:col-span-6 bg-[#0f0f0f] border border-[#4d4354] p-6 md:p-[41px] hover:border-purple-primary transition-all duration-300">
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col gap-6 md:gap-[32px]"
          >
            <div>
              <Label
                htmlFor="fullName"
                className="font-['Liberation_Sans:Regular',sans-serif] text-gray-primary text-[10px] md:text-xs tracking-[2px] uppercase leading-[15px] block mb-2"
              >
                FULL NAME
              </Label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="John Doe"
                required
                className="w-full bg-transparent border-b border-[#4d4354] py-[10px] md:py-[14px] font-['Inter:Regular',sans-serif] text-sm md:text-[16px] text-white placeholder:text-[rgba(136,136,136,0.3)] focus:outline-none focus:border-purple-primary transition-colors"
              />
            </div>
            <div>
              <Label
                htmlFor="email"
                className="font-['Liberation_Sans:Regular',sans-serif] text-gray-primary text-[10px] md:text-xs tracking-[2px] uppercase leading-[15px] block mb-2"
              >
                EMAIL ADDRESS
              </Label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@company.com"
                required
                className="w-full bg-transparent border-b border-[#4d4354] py-[10px] md:py-[14px] font-['Inter:Regular',sans-serif] text-sm md:text-[16px] text-white placeholder:text-[rgba(136,136,136,0.3)] focus:outline-none focus:border-purple-primary transition-colors"
              />
            </div>
            <div>
              <Label
                htmlFor="projectBrief"
                className="font-['Liberation_Sans:Regular',sans-serif] text-gray-primary text-[10px] md:text-xs tracking-[2px] uppercase leading-[15px] block mb-2"
              >
                PROJECT BRIEF
              </Label>
              <textarea
                id="projectBrief"
                name="projectBrief"
                placeholder="Tell me about your vision..."
                rows={3}
                required
                className="w-full bg-transparent border-b border-[#4d4354] py-[10px] md:py-[12px] font-['Inter:Regular',sans-serif] text-sm md:text-[16px] text-white placeholder:text-[rgba(136,136,136,0.3)] focus:outline-none focus:border-purple-primary transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-purple-primary py-4 md:py-5 w-full drop-shadow-[0px_0px_10px_rgba(168,85,247,0.15)] hover:bg-[#9333ea] hover:scale-[1.02] transition-all duration-300"
            >
              <p className="font-['Liberation_Sans:Bold',sans-serif] text-xs text-black text-center tracking-[1.2px] uppercase leading-[16px]">
                SUBMIT
              </p>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
