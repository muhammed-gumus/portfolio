"use client";
import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

interface CenteredCarouselProps {
  items: React.ReactNode[];
}

export const CenteredCarousel = ({ items }: CenteredCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-[600px] md:h-[500px] flex items-center justify-center bg-white dark:bg-black group">
      {/* Navigation Buttons - Always visible or on hover, user asked for them on sides */}
       <button
          onClick={handlePrev}
          className="absolute left-0 md:left-8 z-50 p-1 md:p-4 bg-white/50 dark:bg-black/50 hover:bg-white dark:hover:bg-black backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 rounded-full transition-all text-neutral-800 dark:text-neutral-200"
          aria-label="Previous Project"
        >
          <IconArrowLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>
        
        <button
          onClick={handleNext}
          className="absolute right-0 md:right-8 z-50 p-1 md:p-4 bg-white/50 dark:bg-black/50 hover:bg-white dark:hover:bg-black backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 rounded-full transition-all text-neutral-800 dark:text-neutral-200"
           aria-label="Next Project"
        >
          <IconArrowRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>

      {/* Carousel Track */}
      <div className="relative w-full max-w-screen-2xl h-full px-4 md:px-16 flex items-center justify-center overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="w-full h-full"
          >
             <div className="w-full h-full rounded-2xl md:rounded-3xl md:shadow-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
               {items[activeIndex]}
             </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
