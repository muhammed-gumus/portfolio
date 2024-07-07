"use client";

import React, { useState } from "react";

export default function Home() {
  const [isWaving, setIsWaving] = useState(false);
  const [waveCount, setWaveCount] = useState(0);

  const handleWave = () => {
    setIsWaving(true);
    setWaveCount(waveCount + 1);
    setTimeout(() => {
      setIsWaving(false);
    }, 1500); // 2.5 saniye sonra animasyonu durdur
  };

  const handleMouseEnter = () => {
    setIsWaving(true);
  };

  const handleMouseLeave = () => {
    setIsWaving(false);
  };

  return (
    <div className="flex w-full items-center justify-center md:justify-start mt-24 bg-white dark:bg-black text-black dark:text-white px-4 md:px-8">
      <div className="text-center md:text-left w-full">
        <h1 className="text-md md:text-lg mb-4 opacity-80">Hey, I'm</h1>
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-violet-800 via-sky-500 to-pink-400 inline-block text-transparent bg-clip-text mb-8">
          Muhammed Gümüş
        </h1>

        <p className="text-sm md:text-lg mb-8 opacity-80">
          I graduated from Konya Technical University, Department of Computer
          Engineering this year. I started my software career as a Frontend
          Developer and am currently developing myself as a Full Stack
          Developer. I meet new people by contributing to open source projects
          and participating in various community events and improve my teamwork
          skills. In my free time I focus on personal development and I am
          interested in music.
        </p>
        <div className="flex items-center justify-center md:justify-start">
          <button
            className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white px-6 py-2 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-110 focus:outline-none"
            onClick={handleWave}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Say hi{' '}
            <span className={`wave ${isWaving ? 'wave-active' : ''} text-xl`}>
              👋
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
