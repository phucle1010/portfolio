"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "../ui/utils";
import { feedback } from "@/constants/feedback";

export function Feedback() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section className="px-6 md:px-[80px] py-20 md:py-40">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-[#0f0f0f] border border-[#4d4354] p-8 md:p-[97px] relative">
          <p className="font-['Liberation_Sans:Bold',sans-serif] text-purple-primary text-sm tracking-[1.2px] uppercase leading-[16px] mb-8 md:mb-[48px]">
            04 // FEEDBACK
          </p>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-8">
              <blockquote className="font-['Inter:Italic',sans-serif] text-lg md:text-2xl leading-relaxed md:leading-[45.5px] mb-8 md:mb-12 italic">
                {`"${feedback[currentTestimonial].message}"`}
              </blockquote>
              <div className="flex gap-4 items-center">
                <div className="bg-purple-primary h-[2px] w-8 md:w-12" />
                <div>
                  <p className="font-['Liberation_Sans:Regular',sans-serif] text-base md:text-lg leading-tight md:leading-[27px]">
                    {feedback[currentTestimonial].name}
                  </p>
                  <p className="font-['Liberation_Sans:Regular',sans-serif] text-gray-primary text-[10px] uppercase leading-[15px]">
                    {feedback[currentTestimonial].role} @{" "}
                    {feedback[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 flex items-center justify-center">
              <div className="size-[120px] md:size-[192px] border-2 border-purple-primary rounded-full p-[4px] md:p-[6px]">
                <img
                  alt={feedback[currentTestimonial].name}
                  className="w-full h-full rounded-full object-cover"
                  src={feedback[currentTestimonial].image}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between pt-10 md:pt-[64px] gap-6">
            <div className="hidden lg:flex gap-[16px]">
              <button
                onClick={() =>
                  setCurrentTestimonial(Math.max(0, currentTestimonial - 1))
                }
                className="size-12 border border-[#4d4354] flex items-center justify-center hover:border-purple-primary hover:bg-purple-primary transition-all duration-300 group"
              >
                <ArrowLeft
                  size={16}
                  color="white"
                  className="group-hover:scale-110 transition-transform"
                />
              </button>
              <button
                onClick={() =>
                  setCurrentTestimonial(
                    Math.min(feedback.length - 1, currentTestimonial + 1)
                  )
                }
                className="size-12 border border-[#4d4354] flex items-center justify-center hover:border-purple-primary hover:bg-purple-primary transition-all duration-300 group"
              >
                <ArrowRight
                  size={16}
                  color="white"
                  className="group-hover:scale-110 transition-transform"
                />
              </button>
            </div>
            <div className="flex gap-3">
              {feedback.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={cn(
                    "size-3 transition-all duration-300 cursor-pointer rounded-full",
                    currentTestimonial === index
                      ? "bg-purple-primary scale-110"
                      : "bg-[rgba(136,136,136,0.3)] hover:bg-[rgba(168,85,247,0.5)]"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
