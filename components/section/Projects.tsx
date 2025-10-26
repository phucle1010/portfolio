"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { Calendar, Building2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { projects } from "@/constants/projects";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-16 md:py-24 px-6 lg:px-20 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-gray-400 tracking-widest text-3xl md:text-5xl"
        >
          PROJECTS & EXPERIENCE
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-white mb-3 text-xl font-semibold group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Building2 className="w-4 h-4 flex-shrink-0" />
                    <span>{project.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span>{project.period}</span>
                  </div>
                </div>

                <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-white">
                  {project.position}
                </Badge>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Technologies */}
              <div>
                <h4 className="text-white text-xs mb-3 font-medium tracking-wider uppercase">
                  Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-gray-300 hover:text-white hover:border-purple-400/40 transition-all duration-300 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
