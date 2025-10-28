"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { Building2 } from "lucide-react";
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
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { projects } from "@/constants/projects";

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
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-purple-500/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className="p-6 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-white mb-3 text-xl font-semibold group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Building2 className="w-4 h-4 flex-shrink-0" />
                      <span>{project.company}</span>
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

                {/* Image Thumbnails */}
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {project.images.slice(0, 3).map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group/thumbnail hover:scale-105 transition-transform duration-300"
                      onClick={() => handleImageClick(project, imgIndex)}
                    >
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
        <DialogContent className="max-w-[90vw] lg:max-w-[95vw] xl:max-w-[96vw] max-h-[95vh] bg-[#0a0f1e] border-white/10 p-0 overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader className="px-6 pt-6 sticky top-0 bg-[#0a0f1e] z-10 border-b border-white/10 pb-4">
                <DialogTitle className="text-white text-2xl">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>

              <div className="px-6 pb-6 flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="relative mt-6 flex-1">
                  <Carousel className="w-full" setApi={setCarouselApi}>
                    <CarouselContent>
                      {selectedProject.images.map((image, imgIndex) => (
                        <CarouselItem key={imgIndex}>
                          <div className="relative w-full h-[350px] lg:h-[500px] rounded-lg overflow-hidden bg-black/20">
                            <Image
                              src={image}
                              alt={`${selectedProject.title} - Image ${
                                imgIndex + 1
                              }`}
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>

                  {/* Thumbnail Navigation */}
                  <div className="flex gap-2 mt-4 justify-center overflow-x-auto pb-2 max-h-auto">
                    {selectedProject.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative w-20 h-20 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 flex-shrink-0 border-2 border-transparent hover:border-purple-500"
                        onClick={() => setSelectedImageIndex(imgIndex)}
                      >
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

                <div>
                  {/* Responsibilities */}
                  <div className="mt-6">
                    <h4 className="text-white text-sm mb-3 font-medium tracking-wider uppercase">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.responsibilities.map(
                        (responsibility, respIndex) => (
                          <li
                            key={respIndex}
                            className="flex items-start gap-2"
                          >
                            <span className="text-purple-400 mt-1">•</span>
                            <span className="text-gray-300 text-sm leading-relaxed">
                              {responsibility}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mt-6">
                    <h4 className="text-white text-sm mb-3 font-medium tracking-wider uppercase">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-gray-300 hover:text-white hover:border-purple-400/40 transition-all duration-300 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
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
