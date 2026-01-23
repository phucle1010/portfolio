"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { Quote, Building2 } from "lucide-react";
import Image from "next/image";

import { feedback } from "@/constants/feedback";

export function Feedback() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % feedback.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextFeedback = () => {
    setCurrentIndex((prev) => (prev + 1) % feedback.length);
  };

  const prevFeedback = () => {
    setCurrentIndex((prev) => (prev - 1 + feedback.length) % feedback.length);
  };

  return (
    <section id="feedback" className="py-20 md:py-32 px-6 lg:px-20 relative">
      <div ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-gray-400 tracking-widest text-3xl md:text-5xl"
        >
          FEEDBACK
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto min-h-[70vh] flex flex-col justify-center"
        >
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentIndex}
              layoutId="feedback-card"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{
                type: "tween",
                ease: [0.25, 0.46, 0.45, 0.94],
                duration: 0.6,
                opacity: { duration: 0.4 },
              }}
              className="group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer w-full max-w-4xl mx-auto"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Background layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/5 to-white/8 backdrop-blur-sm rounded-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/8 via-teal-600/5 to-blue-600/8 rounded-3xl"></div>

              {/* Always visible corner highlights */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-cyan-600/15 to-transparent rounded-bl-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-teal-600/15 to-transparent rounded-tr-full blur-3xl"></div>
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-600/15 to-transparent rounded-br-full blur-2xl"></div>

              {/* Hover corner effects */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-600/25 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-teal-600/25 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"></div>

              {/* Border with gradient */}
              <div className="absolute inset-0 rounded-3xl border border-cyan-600/25 group-hover:border-cyan-600/40 transition-all duration-500 pointer-events-none"></div>

              {/* Shadow and glow effects */}
              <div className="absolute inset-0 rounded-3xl shadow-[0_0_30px_rgba(8,145,178,0.1)] group-hover:shadow-[0_0_60px_rgba(8,145,178,0.25)] transition-all duration-500 pointer-events-none"></div>

              {/* Pattern overlay */}
              <div
                className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-500 rounded-3xl"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6,182,212,0.4) 1px, transparent 0)`,
                  backgroundSize: "32px 32px",
                }}
              ></div>

              {/* Content */}
              <div className="relative z-10 p-10 md:p-12 min-h-[400px] flex flex-col justify-between">
                {/* Quote icon */}
                <motion.div
                  layoutId={`quote-${currentIndex}`}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.1,
                    type: "spring",
                    stiffness: 250,
                    damping: 25,
                  }}
                  className="flex justify-center mb-8"
                >
                  <div className="p-4 bg-gradient-to-br from-cyan-600/20 to-teal-600/20 border border-cyan-600/30 rounded-full">
                    <Quote className="w-8 h-8 text-cyan-400" />
                  </div>
                </motion.div>

                {/* Message with better typography */}
                <motion.div
                  layoutId={`message-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
                  className="mb-10 flex-1 flex items-center"
                >
                  <p className="text-white text-lg md:text-xl leading-[1.9] font-light tracking-wide text-center italic">
                    {feedback[currentIndex].message}
                  </p>
                </motion.div>

                {/* Author Info with enhanced styling */}
                <motion.div
                  layoutId={`author-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
                  className="pt-6 border-t border-cyan-600/20 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-white font-semibold text-lg md:text-xl transition-all duration-300">
                        {feedback[currentIndex].name}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Building2 className="w-4 h-4 text-cyan-400 group-hover:text-cyan-500 transition-colors duration-300" />
                        <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                          {feedback[currentIndex].company}
                        </p>
                        <span className="text-cyan-600/60">•</span>
                        <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                          {feedback[currentIndex].role}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Author Image - Right Corner */}
                  {feedback[currentIndex].image && (
                    <motion.div
                      layoutId={`image-${currentIndex}`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.4,
                        type: "spring",
                        stiffness: 250,
                        damping: 25,
                      }}
                      className="relative"
                    >
                      <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-cyan-500/40 ring-4 ring-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                        <Image
                          src={feedback[currentIndex].image}
                          alt={feedback[currentIndex].name}
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Navigation Dots */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-center gap-3 mt-8"
          >
            {feedback.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.7 + index * 0.1,
                  type: "spring",
                  stiffness: 300,
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`transition-all duration-300 cursor-pointer rounded-full ${
                  currentIndex === index
                    ? "w-10 h-4 bg-gradient-to-r from-cyan-500 to-teal-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                    : "w-4 h-4 bg-gray-600/60 hover:bg-cyan-500/60 hover:shadow-[0_0_10px_rgba(6,182,212,0.3)]"
                }`}
                aria-label={`Go to feedback ${index + 1}`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
