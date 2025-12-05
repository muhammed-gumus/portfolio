"use client";
import React from "react";
import Heading from "../ui/Heading";
import Image from "next/image";
import Link from "next/link";
import { IconBrandSpotify, IconMicrophone } from "@tabler/icons-react";

const Podcast: React.FC = () => {
  return (
    <section
      id="podcast"
      className="w-full py-20 px-4 bg-gray-50 dark:bg-neutral-900/50 rounded-xl"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Album Art / Cover - Left Side */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0 group">
          <div className="relative w-full h-full rounded-2xl shadow-xl overflow-hidden border-4 border-black dark:border-neutral-800">
            <Image
              src="/image/socreate-logo.png"
              alt="Mental Check Podcast Cover"
              fill
              className="object-cover"
            />
          </div>
          {/* Floating Music Note */}
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center shadow-lg animate-bounce delay-100">
             <IconMicrophone className="w-6 h-6" />
          </div>
        </div>

        {/* Content - Right Side */}
        <div className="flex flex-col text-center md:text-left space-y-6">
          <div className="space-y-2">
            <span className="inline-block border border-yellow-800 dark:border-yellow-300 px-3 py-1 text-xs font-semibold tracking-wider text-yellow-800 dark:text-yellow-300 bg-yellow-100 dark:bg-yellow-900/20 rounded-full">
              MY HOBBY & PASSION
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-100">
              Mental Check Podcast
            </h2>
          </div>
          
          <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl">
            Mental Check is a guide for those who want to take a short break from the stress of daily life. 
            I discuss psychology, emotion management, and mental resilience with a simple and scientific approach.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
            <Link 
              href="https://open.spotify.com/show/3N6mKZWxbh6qssteWe6sq2" 
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
            >
              <span>Listen Episodes</span>
              <IconBrandSpotify className="w-5 h-5" />
            </Link>
            <Link
               href="https://www.socreate.app"
               target="_blank"
               className="text-neutral-600 dark:text-neutral-400 font-medium hover:text-black dark:hover:text-white transition-colors underline-offset-4 hover:underline"
            >
               Visit Website →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Podcast;
