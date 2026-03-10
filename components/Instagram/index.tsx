"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IconBrandInstagram } from "@tabler/icons-react";

const Instagram: React.FC = () => {
  return (
    <section
      id="instagram"
      className="w-full py-20 px-4 bg-gray-50 dark:bg-neutral-900/50 rounded-xl"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* QR Code Image - Left Side */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0 group">
          <div className="relative w-full h-full rounded-2xl shadow-xl overflow-hidden border-4 p-4 border-black dark:border-neutral-800">
            <Image
              src="/buildwithmami_qr.png"
              alt="buildwithmami Instagram QR Code"
              fill
              className="object-cover p-4 bg-white"
            />
          </div>
          {/* Floating Instagram icon */}
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center shadow-lg animate-bounce delay-100">
            <IconBrandInstagram className="w-6 h-6" />
          </div>
        </div>

        {/* Content - Right Side */}
        <div className="flex flex-col text-center md:text-left space-y-6">
          <div className="space-y-2">
            <span className="inline-block border border-purple-800 dark:border-purple-300 px-3 py-1 text-xs font-semibold tracking-wider text-purple-800 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/20 rounded-full">
              MY CONTENT & COMMUNITY
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-100">
              @buildwithmami
            </h2>
          </div>

          <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl">
            I share coding tutorials, web development tips, algorithm
            walkthroughs, and career advice for developers — making technical
            content accessible and engaging.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
            <Link
              href="https://www.instagram.com/buildwithmami/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
            >
              <span>Follow on Instagram</span>
              <IconBrandInstagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
