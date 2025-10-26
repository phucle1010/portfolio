"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";

import { skillCategories } from "@/constants/skills";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-32 px-6 lg:px-20 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-gray-400 tracking-widest text-3xl md:text-5xl"
        >
          TECHNICAL SKILLS
        </motion.h2>

        {/* Skills by category */}
        <div className="space-y-12 md:space-y-16">
          {Object.entries(skillCategories).map(
            ([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.4, delay: categoryIndex * 0.15 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-300">
                    {category}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.15 + index * 0.05,
                      }}
                      className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col items-center justify-center gap-3"
                    >
                      <div className="text-gray-400 group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={skill.iconUrl}
                          alt={`${skill.name} logo`}
                          className="w-12 h-12 md:w-16 md:h-16"
                        />
                      </div>
                      <span className="text-gray-300 text-center text-xs md:text-sm">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
