"use client";

import { useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";

import { skills } from "@/constants/skills";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isDragging, setIsDragging] = useState(false);

  // Duplicate skills array for seamless infinite loop
  const duplicatedSkills = useMemo(() => [...skills, ...skills], [skills]);

  return (
    <section id="skills" className="py-16 md:py-24 px-6 lg:px-20 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-gray-400 tracking-widest text-3xl md:text-5xl"
        >
          TECHNICAL SKILLS
        </motion.h2>

        {/* Infinite slider container */}
        <div className="relative overflow-hidden">
          <div
            className="absolute left-0 top-0 bottom-0 w-40 md:w-64 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0))",
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-40 md:w-64 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to left, rgba(0,0,0,0.7), rgba(0,0,0,0))",
            }}
          />

          <motion.div
            className="flex gap-6 cursor-grab active:cursor-grabbing select-none"
            drag="x"
            dragConstraints={{ left: -50 * 13 * 2, right: 0 }}
            dragElastic={0.3}
            dragMomentum={true}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            animate={
              !isDragging
                ? {
                    x: [0, -50 * 13 * 1.5],
                  }
                : {}
            }
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {duplicatedSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group flex-shrink-0 w-[200px] md:w-[250px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col items-center justify-center gap-4 ${
                  isDragging ? "pointer-events-none" : ""
                }`}
              >
                <div className="text-gray-400 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={skill.iconUrl}
                    alt={`${skill.name} logo`}
                    className="w-16 h-16 md:w-20 md:h-20"
                  />
                </div>
                <span className="text-gray-300 text-center text-sm md:text-base">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
