"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { Download, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { about } from "@/constants/about";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCV = async () => {
    try {
      setIsDownloading(true);

      const response = await fetch("/api/download-cv");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Le_The_Phuc_Developer.pdf";
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading CV:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section id="about" className="py-20 md:py-32 px-6 lg:px-20 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-gray-400 tracking-widest text-3xl md:text-5xl"
        >
          ABOUT
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gray-400 leading-relaxed text-base md:text-lg mb-6">
              {about.description[0]}
            </p>
            <p className="text-gray-400 leading-relaxed text-base md:text-lg">
              {about.description[1]}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-purple-500/30 transition-all duration-300">
              <p className="text-gray-300 text-center text-base md:text-lg">
                {about.name}
                <br />
                <span className="text-gray-400 text-sm md:text-base">
                  {about.title}
                </span>
              </p>
            </div>

            <Button
              className="group relative w-full bg-gradient-to-r from-pink-500 via-purple-500 to-purple-600 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all duration-300 py-5 md:py-6 rounded-xl overflow-hidden border-0"
              onClick={handleDownloadCV}
              disabled={isDownloading}
            >
              <span className="relative z-10 flex items-center justify-center gap-2 text-sm md:text-base">
                {isDownloading ? (
                  <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                ) : (
                  <Download className="w-4 h-4 md:w-5 md:h-5" />
                )}
                Download CV
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
