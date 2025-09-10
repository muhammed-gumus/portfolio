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
    <div className="flex w-full items-center justify-center mt-20 sm:mt-24 md:mt-32 bg-white dark:bg-black text-black dark:text-white px-4 md:px-8 min-h-[70vh]">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 w-full max-w-7xl">
        {/* Left Content Section */}
        <div className="text-center lg:text-left flex-1 order-2 lg:order-1">
          <h1 className="text-lg md:text-xl mb-2 text-gray-600 dark:text-gray-400 font-light tracking-wide">
            Hey, I'm
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-black dark:text-white">Muhammed</span>{" "}
            <span className="text-gray-800 dark:text-gray-200">Gümüş</span>
          </h1>

          <div className="h-1 w-24 bg-black dark:bg-white mb-8 mx-auto lg:mx-0 transition-all duration-300"></div>

          <p className="text-base md:text-lg mb-10 text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
            I graduated from Konya Technical University, Department of Computer
            Engineering this year. I started my software career as a Frontend
            Developer and am currently developing myself as a Full Stack
            Developer. I meet new people by contributing to open source projects
            and participating in various community events and improve my
            teamwork skills. In my free time I focus on personal development and
            I am interested in music.
          </p>

          <div className="flex items-center justify-center lg:justify-start">
            <Link href={"mailto:mgumus4102@gmail.com"}>
              <button
                className={`
                  relative overflow-hidden group
                  px-8 py-4 text-lg font-semibold
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

        {/* Profile Image Section with surrounding elements */}
        <div className="relative flex-shrink-0 order-1 lg:order-2">
          {/* Main container */}
          <div className="relative w-96 h-96 lg:w-[480px] lg:h-[480px] flex items-center justify-center">
            {/* Experience badge - Top Left */}
            <div className="absolute top-8 left-8 text-center">
              <div className="text-3xl lg:text-4xl font-bold text-black dark:text-white">
                02
              </div>
              <div className="text-sm lg:text-base text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                YEARS
                <br />
                EXPERIENCE
              </div>
            </div>

            {/* Description - Top Right */}
            <div className="absolute top-8 right-8 text-right max-w-[140px]">
              <div className="text-sm lg:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                I design beautifully simple things,
                <br />
                <span className="text-black dark:text-white font-medium">
                  and I love what I do.
                </span>
              </div>
            </div>

            {/* Social Icons - Bottom Left */}
            <div className="absolute bottom-8 left-8 flex gap-3">
              <a
                href="https://github.com/muhammed-gumus"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 text-gray-700 dark:text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/muhammed-gumus"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 text-gray-700 dark:text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            {/* Role - Bottom Right */}
            <div className="absolute bottom-8 right-8 text-right">
              <div className="text-2xl lg:text-3xl font-bold text-black dark:text-white italic">
                Frontend
              </div>
              <div className="text-lg lg:text-xl text-gray-600 dark:text-gray-400">
                Developer.
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute inset-0">
              {/* Outer dashed circle */}
              <div className="absolute inset-8 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-full opacity-50"></div>

              {/* Inner dotted circle */}
              <div className="absolute inset-16 border border-dotted border-gray-400 dark:border-gray-500 rounded-full opacity-30"></div>
            </div>

            {/* Central Profile Image */}
            <div className="relative z-10 group">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-900 shadow-2xl transition-all duration-500 group-hover:scale-105">
                <Image
                  src="/image/pp-mg.jpeg"
                  alt="Muhammed Gümüş"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>

              {/* Subtle overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-black/10 dark:to-white/5 transition-opacity duration-500 group-hover:opacity-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
