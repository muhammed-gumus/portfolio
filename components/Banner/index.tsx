"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isWaving, setIsWaving] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [waveCount, setWaveCount] = useState(0);

  const handleWave = () => {
    setIsWaving(true);
    setWaveCount(waveCount + 1);
    setTimeout(() => {
      setIsWaving(false);
    }, 1500);
  };

  const handleMouseEnter = () => {
    setIsWaving(true);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsWaving(false);
    setIsHovering(false);
  };

  return (
    <div className="flex w-full items-center justify-center mt-10 sm:mt-16 md:mt-20 bg-white dark:bg-black text-black dark:text-white px-8 md:px-16 min-h-[80vh] py-16">
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24 w-full max-w-7xl relative">
        {/* Profile Image Section */}

        {/* Left Content Section */}
        <div className="text-center md:text-left flex-1 order-2 md:order-1 mt-6 md:mt-0">
          <h1 className="text-lg md:text-xl mb-2 text-gray-600 dark:text-gray-400 font-light tracking-wide">
            Hey, I'm
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-black dark:text-white">Muhammed</span>{" "}
            <span className="text-gray-800 dark:text-gray-200">Gümüş</span>
          </h1>

          <div className="h-1 w-24 bg-black dark:bg-white mb-8 mx-auto md:mx-0 transition-all duration-300"></div>

          <p className="text-base md:text-lg mb-10 text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
            I am a Frontend Developer specializing in React and Next.js
            technologies. I develop user-friendly, high-performance, and
            scalable web interfaces. I also have experience in mobile (React
            Native/Expo) and backend technologies. I am a software developer who
            adapts quickly to new technologies, thrives in team environments,
            and is passionate about product development.
          </p>

          <div className="flex items-center justify-center md:justify-start">
            <Link href={"mailto:mgumus4102@gmail.com"}>
              <button
                className={`
                  relative overflow-hidden group
                  px-8 py-2 text-lg font-semibold
                  border-2 border-black dark:border-white
                  bg-transparent text-black dark:text-white
                  transition-all duration-300 ease-out
                  hover:bg-black hover:text-white
                  dark:hover:bg-white dark:hover:text-black
                  transform hover:scale-105 hover:shadow-xl
                  focus:outline-none focus:ring-2 focus:ring-gray-400
                  active:scale-95
                `}
                onClick={handleWave}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span className="tracking-wide">Say Hello</span>
                  <span
                    className={`
                      wave text-2xl transition-all duration-300
                      ${isWaving ? "wave-active" : ""} 
                      ${isHovering ? "scale-125" : ""}
                    `}
                  >
                    👋
                  </span>
                </span>

                {/* Hover effect background */}
                <div className="absolute inset-0 bg-black dark:bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </Link>
          </div>
        </div>
        <div className="relative group order-1 md:order-2 flex items-center justify-center min-w-[280px] sm:min-w-[320px] md:min-w-[400px] md:min-h-[400px]">
          {/* Decorative dotted circle - centered around the image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[350px] md:h-[350px] border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-full opacity-20"></div>

          {/* Main profile image container */}
          <div className="relative z-10 w-3/4 sm:w-2/3 md:w-4/5">
            <Image
              src="/image/pp-pixar.png"
              alt="Muhammed Gümüş"
              width={288}
              height={288}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              priority
            />
          </div>

          {/* Decorative small dots - better positioned */}

          {/* Experience badge - positioned at bottom left corner */}
          <div className="absolute -bottom-4 left-0 sm:bottom-0 sm:-left-5 md:bottom-0 md:-left-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl px-2 py-1 sm:px-4 sm:py-3 shadow-xl z-20 transform sm:-translate-x-1/2 sm:translate-y-1/2">
            <div className="text-center flex items-center gap-1 sm:gap-2">
              <div className="text-lg sm:text-2xl font-bold text-black dark:text-white mb-0 sm:mb-1">
                2+
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider font-medium">
                <span className="inline">Years Experience</span>
              </div>
            </div>
          </div>

          {/* Status indicator - positioned at top right corner */}
          <div className="absolute top-20 -right-4 sm:top-20 sm:right-5 md:top-20 md:right-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl px-2 py-1 sm:px-4 sm:py-2 shadow-xl z-20 transform sm:translate-x-1/2 sm:-translate-y-1/2">
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium whitespace-nowrap">
                Available
              </span>
            </div>
          </div>

          {/* Floating description - positioned at top left corner */}
          <div className="absolute -top-10 -left-6 sm:top-5 sm:-left-10 md:top-5 md:-left-10 z-20 transform sm:-translate-x-1/2 sm:-translate-y-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl px-2 py-2 sm:px-4 sm:py-3 shadow-xl max-w-40 sm:max-w-60">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 italic leading-relaxed text-center">
                <span className="hidden sm:inline">
                  I design beautifully simple things, and I love what I do.
                </span>
                <span className="sm:hidden">
                  Creative & passionate developer
                </span>
              </p>
              {/* Speech bubble tail pointing down and right - only show on larger screens */}
              <div className="absolute top-full left-3/4 transform -translate-x-1/2 hidden sm:block">
                <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-6 border-t-white dark:border-t-gray-800"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
