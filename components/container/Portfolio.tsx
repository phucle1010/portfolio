"use client";

import { useState } from "react";

import { Header } from "../sections/Header";
import { Hero } from "../sections/Hero";
import { Statistics } from "../sections/Statistics";
import { AboutMe } from "../sections/AboutMe";
import { WorkExperience } from "../sections/WorkExperience";
import { TechnicalSKill } from "../sections/TechnicalSkill";
import { Feedback } from "../sections/Feedback";
import { Contact } from "../sections/Contact";
import { Footer } from "../sections/Footer";

export function Portfolio() {
  const [activeSection, setActiveSection] = useState("Work");

  const onScrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(id.charAt(0).toUpperCase() + id.slice(1));
  };

  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      <Header
        activeSection={activeSection}
        onScrollToSection={onScrollToSection}
      />
      <Hero onScrollToSection={onScrollToSection} />
      <Statistics />
      <AboutMe />
      <WorkExperience />
      <TechnicalSKill />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
}
