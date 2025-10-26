"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { hero } from "@/constants/hero";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-20 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600 rounded-full mix-blend-multiply filter blur-[150px] opacity-10"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-pink-600 rounded-full mix-blend-multiply filter blur-[150px] opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left column - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 md:mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-purple-600 bg-clip-text text-transparent text-4xl md:text-6xl lg:text-7xl"
          >
            {hero.headline}
            <br />
            {hero.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-gray-300 mb-4 md:mb-6"
          >
            {hero.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm md:text-base text-gray-400 mb-8 md:mb-10 leading-relaxed max-w-xl"
          >
            {hero.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4"
          >
            <Button
              onClick={() => scrollToSection("projects")}
              className="group relative bg-gradient-to-r from-pink-500 via-purple-500 to-purple-600 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all duration-300 px-6 md:px-8 py-5 md:py-6 rounded-xl overflow-hidden border-0 text-sm md:text-base"
            >
              <span className="relative z-10">{hero.seeMyWork}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="group relative bg-gradient-to-r from-pink-500 via-purple-500 to-purple-600 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all duration-300 px-6 md:px-8 py-5 md:py-6 rounded-xl overflow-hidden border-0 text-sm md:text-base"
            >
              <span className="relative z-10">{hero.getInTouch}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500 p-1">
              <div className="w-full h-full rounded-full bg-[#0a0f1e] flex items-center justify-center">
                <div className="w-[92%] h-[92%] rounded-full bg-gradient-to-br from-purple-900/40 to-pink-900/40 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full overflow-hidden rounded-full">
                    <Image
                      src={hero.profileImage.src}
                      alt={hero.profileImage.alt}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
