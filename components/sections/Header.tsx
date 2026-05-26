"use client";

import { useState } from "react";
import { useDownloadCV } from "@/hooks/useDownloadCV";
import { cn } from "../ui/utils";
import { Menu, X } from "lucide-react";

type HeaderProps = {
  activeSection: string;
  onScrollToSection: (val: string) => void;
};

const NAVIGATIONS = ["Work", "About", "Skills", "Contact"];

export function Header({ activeSection, onScrollToSection }: HeaderProps) {
  const { pending: downloadingCV, onDownloadCV } = useDownloadCV();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    onScrollToSection(section.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[6px] bg-[rgba(19,19,19,0.8)] border-b border-[#4d4354] transition-all duration-300">
      <nav className="h-[60px] md:h-[80px] max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-[80px]">
        <button
          onClick={() => handleNavClick("hero")}
          className="font-['Liberation_Sans:Bold',sans-serif] hover:text-purple-primary transition-colors cursor-pointer text-base md:text-lg"
        >
          <span className="leading-[28px]">PUCKLEE.DEV</span>
          <span className="text-purple-primary">_</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-[24px] items-center font-['Liberation_Sans:Bold',sans-serif] text-[12px] tracking-[1.2px]">
          {NAVIGATIONS.map((section) => (
            <button
              key={section}
              onClick={() => handleNavClick(section)}
              className={cn(
                "pb-[5px] transition-all duration-300 hover:text-purple-primary cursor-pointer",
                activeSection === section
                  ? "border-b border-purple-primary text-purple-primary"
                  : "text-[#cfc2d6]"
              )}
            >
              <p className="leading-[16px] text-sm">{section}</p>
            </button>
          ))}
        </div>

        <button
          onClick={onDownloadCV}
          className="hidden md:block bg-purple-primary px-[24px] py-[8px] drop-shadow-[0px_0px_10px_rgba(168,85,247,0.15)] hover:bg-[#9333ea] transition-all duration-300 hover:scale-105 cursor-pointer"
          disabled={downloadingCV}
        >
          <p className="font-['Liberation_Sans:Bold',sans-serif] text-sm text-black tracking-[1.2px] uppercase leading-[16px]">
            RESUME
          </p>
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-b border-[#4d4354] px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {NAVIGATIONS.map((section) => (
            <button
              key={section}
              onClick={() => handleNavClick(section)}
              className={cn(
                "text-left font-['Liberation_Sans:Bold',sans-serif] text-lg tracking-[1.2px] uppercase",
                activeSection === section
                  ? "text-purple-primary"
                  : "text-[#cfc2d6]"
              )}
            >
              {section}
            </button>
          ))}
          <button
            onClick={() => {
              onDownloadCV();
              setIsMenuOpen(false);
            }}
            className="bg-purple-primary px-6 py-3 w-full text-center"
            disabled={downloadingCV}
          >
            <p className="font-['Liberation_Sans:Bold',sans-serif] text-sm text-black tracking-[1.2px] uppercase">
              RESUME
            </p>
          </button>
        </div>
      )}
    </header>
  );
}
