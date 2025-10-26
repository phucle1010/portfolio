"use server";

import { Hero } from "@/components/section/Hero";
import { About } from "@/components/section/About";
import { Skills } from "@/components/section/Skills";
import { Education } from "@/components/section/Education";
import { Projects } from "@/components/section/Projects";
import { Contact } from "@/components/section/Contact";

export default async function Home() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white overflow-x-hidden antialiased font-roboto">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}
