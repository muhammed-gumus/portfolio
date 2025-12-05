"use client";
import React from "react";
import { CenteredCarousel } from "@/components/ui/centered-carousel";
import Heading from "../ui/Heading";
import Image from "next/image";
import Link from "next/link";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

type Project = {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  externalLink: string;
};

// Data copied from existing Projects component
const projects: Project[] = [
  {
    name: "Aqua Break",
    description:
      "Aqua Break is a dual-purpose wellness app designed to combat the physical and mental side effects of excessive screen time. It interrupts your doom scrolling cycles with healthy hydration breaks, locking your screen until you log a water break. Features include Screen Time Manager, Hydration Enforcer, and Routine Builder.",
    image: "/image/aqua-break.png",
    technologies: [
      "React Native",
      "Expo",
      "Kotlin",
      "Android Services",
      "TypeScript",
    ],
    githubLink: "",
    externalLink: "https://aqua-break.vercel.app/",
  },
  {
    name: "Algorithm with JS",
    description:
      "A comprehensive repository of JavaScript solutions to LeetCode Algorithm questions. Developed to master algorithmic thinking and interview preparation, featuring community-collaborated solutions and explanations.",
    image: "/image/algorithm-js.png",
    technologies: ["JavaScript", "Algorithms", "LeetCode", "Data Structures"],
    githubLink: "https://github.com/muhammed-gumus/algorithm-with-js",
    externalLink: "",
  },
  {
    name: "EnWord",
    description:
      "EnWord is a user-friendly app that helps users enhance their English vocabulary daily by providing 10 random words with Turkish translations and example sentences for context.",
    image: "/image/EnWord.png",
    technologies: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Tailwind CSS",
      "Vercel",
    ],
    githubLink: "https://github.com/muhammed-gumus/enword",
    externalLink: "https://enword.vercel.app/",
  },

  {
    name: "Listedfy",
    description:
      "Listedfy enables users to create collaborative playlists, discover new songs, and access detailed information and statistics about songs, artists, albums, and playlists. It leverages Spotify API and Airtable for data management, with a user-friendly interface built using Tailwind CSS and Next.js.",
    image: "/image/listedfy.png",
    technologies: [
      "Javacript",
      "Next.js",
      "Spotify Api",
      "Airtable",
      "Tailwind CSS",
    ],
    githubLink: "https://github.com/muhammed-gumus/nomad-work",
    externalLink: "https://listedfy-app.vercel.app/",
  },

  {
    name: "Nomad Work",
    description:
      "With Nomad Work, discover and evaluate the best workplaces and make your choice with artificial intelligence-supported ratings. Liberate your work style!",
    image: "/image/nomad.jpeg",
    technologies: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Fast API",
      "Mongo DB",
      "NLTK",
      "Scikit-learn",
    ],
    githubLink: "https://github.com/muhammed-gumus/nomad-work",
    externalLink: "",
  },

  {
    name: "MergeBot",
    description:
      "A sweet javascript bot that offers pull requests from the repository you want in the date range you want as a markdowon file.",
    image: "/image/mergeBot.png",
    technologies: ["Javacript", "Node.js", "GitHub Api"],
    githubLink: "https://github.com/muhammed-gumus/nomad-work",
    externalLink: "",
  },
  {
    name: "Senchabot",
    description:
      "I contributed to Senchabot, a comprehensive chatbot project designed to enhance user interactions and automate tasks. My contributions focused on improving the web interface.",
    image: "/image/sencha.png",
    technologies: [
      "Javacript",
      "Next.js",
      "TypeScript",
      "Material UI",
      "Tailwind CSS",
    ],
    githubLink: "https://github.com/senchabot-opensource/monorepo/tree/dev",
    externalLink: "https://senchabot.app/",
  },
];

const ProjectsCarousel: React.FC = () => {
  const cards = projects.map((project) => (
    <div
      key={project.name}
      className="flex flex-col md:flex-row-reverse w-full h-full bg-slate-50 dark:bg-neutral-900 overflow-hidden"
    >
      {/* Right Content (Image) - Top on mobile, Right on desktop */}
      <div className="w-full h-56 md:h-full md:w-3/5 relative flex-shrink-0">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50/10 via-transparent to-transparent md:bg-gradient-to-l md:from-slate-50/0 md:via-slate-50/0 md:to-slate-50/0 pointer-events-none" />
      </div>

      {/* Left Content (Text) - Bottom on mobile, Left on desktop */}
      <div className="w-full md:w-2/5 p-6 md:p-10 flex flex-col justify-center flex-1 md:h-full overflow-y-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 md:mb-4">
          {project.name}
        </h3>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs md:text-sm font-medium bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-600 dark:text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex items-center gap-4 mt-auto">
          {project.githubLink && (
            <Link
              href={project.githubLink}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-xl font-semibold hover:opacity-80 transition-opacity"
            >
              <IconBrandGithub className="w-5 h-5" />
              <span className="text-sm">GitHub</span>
            </Link>
          )}
          {project.externalLink && (
            <Link
              href={project.externalLink}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-transparent border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-xl font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <IconExternalLink className="w-5 h-5" />
              <span className="text-sm">Live Demo</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  ));

  return (
    <section id="projects" className="w-full py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-9xl mx-auto py-10 px-4 md:px-8 lg:px-10 flex items-center justify-center">
        <Heading
          title="PROJECTS THAT SHAPED MY JOURNEY"
          description="A collection of the key projects I’ve built — each one reflecting my growth, creativity, and passion for development."
        />
      </div>
      <CenteredCarousel items={cards} />
    </section>
  );
};

export default ProjectsCarousel;
