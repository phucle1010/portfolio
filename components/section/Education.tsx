"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { Calendar, GraduationCap, MapPin } from "lucide-react";
import { education } from "@/constants/education";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-16 md:py-24 px-6 lg:px-20 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-gray-400 tracking-widest text-3xl md:text-5xl"
        >
          EDUCATION
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl flex-shrink-0">
              <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-white mb-2 text-base md:text-lg">
                {education.university.name}
              </h3>
              <div className="flex items-center gap-2 text-gray-400 text-sm md:text-base">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>{education.university.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm md:text-base">
                <GraduationCap className="w-4 h-4 flex-shrink-0" />
                <span>{education.university.major}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
