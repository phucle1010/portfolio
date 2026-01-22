"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { Building2, X } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { projects } from "@/constants/projects";

const Responsibilities = ({
  selectedProject,
}: {
  selectedProject: (typeof projects)[0];
}) => {
  return (
    <div>
      <h4 className="text-white text-sm mb-3 font-medium tracking-wider uppercase">
        Key Responsibilities
      </h4>
      <ul className="space-y-2">
        {selectedProject.responsibilities.map((responsibility, respIndex) => (
          <li key={respIndex} className="flex items-start gap-2">
            <span className="text-cyan-400">•</span>
            <span className="text-gray-300 text-sm leading-relaxed">
              {responsibility}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Technologies = ({
  selectedProject,
}: {
  selectedProject: (typeof projects)[0];
}) => {
  return (
    <div className="mt-6">
      <h4 className="text-white text-sm mb-3 font-medium tracking-wider uppercase">
        Technologies Used
      </h4>
      <div className="flex flex-wrap gap-2">
        {selectedProject.technologies.map((tech, techIndex) => (
          <Badge
            key={techIndex}
            className="bg-gradient-to-r from-cyan-500/15 via-teal-500/15 to-blue-500/15 border border-cyan-500/30 text-gray-300 hover:text-white hover:border-cyan-400/50 hover:shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all duration-300 text-xs"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<any>(null);

  const handleImageClick = (
    project: (typeof projects)[0],
    imageIndex: number
  ) => {
    setSelectedProject(project);
    setSelectedImageIndex(imageIndex);
    setIsDialogOpen(true);
  };

  // Update carousel when image index changes or when dialog opens
  useEffect(() => {
    if (carouselApi && isDialogOpen) {
      carouselApi.scrollTo(selectedImageIndex);
    }
  }, [selectedImageIndex, carouselApi, isDialogOpen]);

  return (
    <section id="projects" className="py-20 md:py-32 px-6 lg:px-20 relative">
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
              className="hover:cursor-pointer group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
            >
              {/* Background base với gradient - enhanced */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/5 to-white/8 backdrop-blur-sm rounded-2xl"></div>

              {/* Base gradient highlight - more visible */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/8 via-teal-600/5 to-blue-600/8 rounded-2xl"></div>

              {/* Always visible corner highlights */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-600/15 to-transparent rounded-bl-full blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-teal-600/15 to-transparent rounded-tr-full blur-xl"></div>

              {/* Gradient overlay khi hover - enhanced */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/12 via-teal-600/8 to-blue-600/12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              {/* Additional corner effects on hover */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-600/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-teal-600/20 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>

              {/* Border với gradient - always visible */}
              <div className="absolute inset-0 rounded-2xl border border-cyan-600/25 group-hover:border-cyan-600/40 transition-all duration-500 pointer-events-none"></div>

              {/* Border glow effect - always visible but subtle */}
              <div className="absolute inset-0 rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-600/12 via-teal-600/10 to-blue-600/12 blur-sm"></div>
              </div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-600/25 via-teal-600/20 to-blue-600/25 blur-md -z-10"></div>
              </div>

              {/* Shadow glow - always visible */}
              <div className="absolute inset-0 rounded-2xl shadow-[0_0_20px_rgba(8,145,178,0.08)] group-hover:shadow-[0_0_40px_rgba(8,145,178,0.2)] transition-all duration-500 pointer-events-none"></div>

              {/* Subtle pattern overlay - more visible */}
              <div
                className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500 rounded-2xl"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6,182,212,0.3) 1px, transparent 0)`,
                  backgroundSize: "24px 24px",
                }}
              ></div>

              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col rounded-2xl">
                <div className="mb-4">
                  {/* Title với gradient highlight - darker */}
                  <h3 className="text-white mb-3 text-xl font-semibold transition-all duration-300">
                    {project.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      <Building2 className="w-4 h-4 flex-shrink-0 text-cyan-500/50 group-hover:text-cyan-500/70 transition-colors duration-300" />
                      <span>{project.company}</span>
                    </div>
                  </div>

                  {/* Enhanced Badge với glow - more visible */}
                  <Badge className="bg-gradient-to-r from-cyan-600/30 via-teal-600/30 to-blue-600/30 border border-cyan-600/40 text-white shadow-[0_0_12px_rgba(8,145,178,0.2)] group-hover:shadow-[0_0_20px_rgba(8,145,178,0.35)] group-hover:border-cyan-500/50 transition-all duration-300">
                    {project.position}
                  </Badge>
                </div>

                {/* Description với highlight */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-1 group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Image Thumbnails với enhanced styling */}
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {project.images.slice(0, 3).map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group/thumbnail border border-cyan-600/20 hover:border-cyan-600/40 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(8,145,178,0.3)] shadow-[0_0_8px_rgba(8,145,178,0.1)]"
                      onClick={() => handleImageClick(project, imgIndex)}
                    >
                      {/* Overlay gradient - always visible but subtle */}
                      <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/8 to-transparent opacity-60 group-hover/thumbnail:opacity-100 group-hover/thumbnail:from-cyan-600/15 transition-all duration-300 z-10"></div>
                      <Image
                        src={image}
                        alt={`${project.title} - Thumbnail ${imgIndex + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dialog for Zoomed Image */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="!grid-cols-none max-w-[95vw] sm:max-w-[90vw] lg:max-w-[95vw] xl:max-w-[96vw] max-h-[95vh] sm:max-h-[90vh] !p-0 !overflow-hidden !flex !flex-col !border-cyan-600/30 backdrop-blur-xl bg-gradient-to-br from-[#050816] via-[#0a0f1e] to-[#050816] [&>button]:hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/8 via-teal-600/5 to-blue-600/8 rounded-lg pointer-events-none z-0"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-600/15 to-transparent rounded-bl-full blur-3xl pointer-events-none z-0"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-teal-600/15 to-transparent rounded-tr-full blur-3xl pointer-events-none z-0"></div>
          <div className="absolute inset-0 shadow-[0_0_60px_rgba(8,145,178,0.2)] rounded-lg pointer-events-none z-0"></div>

          <button
            onClick={() => setIsDialogOpen(false)}
            className="absolute top-4 right-4 z-[100] rounded-lg p-2 bg-white/10 hover:bg-white/20 border border-cyan-600/30 hover:border-cyan-500/50 text-white transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4 pointer-events-none" />
          </button>

          {selectedProject && (
            <>
              <DialogHeader className="relative z-10 px-4 sm:px-6 pt-4 sm:pt-6 flex-shrink-0 border-b border-cyan-600/30 pb-4">
                <DialogTitle className="text-white text-xl sm:text-2xl bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>

              <div className="relative z-10 flex-1 overflow-y-auto px-4 sm:px-6 pb-6 flex flex-col lg:flex-row gap-6 lg:gap-12">
                <div className="relative mt-4 lg:mt-6 w-full lg:w-1/2 flex-shrink-0">
                  <div className="relative rounded-xl overflow-hidden border border-cyan-600/20 bg-gradient-to-br from-white/5 to-white/3 p-2 backdrop-blur-sm">
                    <Carousel className="w-full" setApi={setCarouselApi}>
                      <CarouselContent>
                        {selectedProject.images.map((image, imgIndex) => (
                          <CarouselItem key={imgIndex}>
                            <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[500px] rounded-lg overflow-hidden bg-gradient-to-br from-black/40 to-black/20 border border-cyan-600/10">
                              <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/5 to-transparent"></div>
                              <Image
                                src={image}
                                alt={`${selectedProject.title} - Image ${
                                  imgIndex + 1
                                }`}
                                fill
                                className="object-contain p-2"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>
                  </div>

                  {/* Thumbnail Navigation - enhanced */}
                  <div className="flex gap-2 mt-4 justify-center overflow-x-auto pb-2 scrollbar-hide">
                    {selectedProject.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 flex-shrink-0 border-2 ${
                          selectedImageIndex === imgIndex
                            ? "border-cyan-500/60 shadow-[0_0_15px_rgba(6,182,212,0.4)] scale-105"
                            : "border-cyan-600/20 hover:border-cyan-500/40 hover:shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                        } bg-gradient-to-br from-white/5 to-white/3`}
                        onClick={() => setSelectedImageIndex(imgIndex)}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/10 to-transparent"></div>
                        <Image
                          src={image}
                          alt={`Thumbnail ${imgIndex + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="mt-4 lg:mt-6">
                    <Responsibilities selectedProject={selectedProject} />
                  </div>

                  <div className="mt-6">
                    <Technologies selectedProject={selectedProject} />
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
