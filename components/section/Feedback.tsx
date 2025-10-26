"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { Quote, Building2 } from "lucide-react";
import Image from "next/image";

import { feedback } from "@/constants/feedback";

export function Feedback() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

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
          className="relative max-w-4xl mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 md:p-12 hover:bg-white/10 hover:border-purple-500/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Decorative gradient corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>

              {/* Message with better typography */}
              <div className="mb-10 relative z-10">
                <p className="text-white text-lg md:text-xl leading-[1.8] font-light tracking-wide mb-6">
                  {feedback[currentIndex].message}
                </p>
              </div>

              {/* Author Info with enhanced styling */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-white font-semibold text-base md:text-lg">
                      {feedback[currentIndex].name}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <Building2 className="w-3.5 h-3.5 text-purple-400" />
                      <p className="text-gray-400 text-sm">
                        {feedback[currentIndex].company}
                      </p>
                      <span className="text-gray-600">•</span>
                      <p className="text-gray-400 text-sm">
                        {feedback[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Author Image - Right Corner */}
                {feedback[currentIndex].image && (
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-purple-500/30 ring-2 ring-purple-500/20">
                    <Image
                      src={feedback[currentIndex].image}
                      alt={feedback[currentIndex].name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {feedback.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 cursor-pointer ${
                  currentIndex === index
                    ? "w-8 h-3 bg-purple-500 rounded-full"
                    : "w-3 h-3 bg-gray-600 rounded-full hover:bg-purple-500/50"
                }`}
                aria-label={`Go to feedback ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
