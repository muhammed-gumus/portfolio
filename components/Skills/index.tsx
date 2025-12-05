"use client";
import React from "react";
import { HoverEffect } from "../ui/card-hover-effect";
import Heading from "../ui/Heading";
import { Layers, Database, Code2, Wrench, Globe } from "lucide-react";

const skills = [
  {
    title: "Frontend",
    description: "React.js, Next.js, Expo, Tailwind CSS, ShadCN/UI",
    link: "",
    icon: <Layers className="w-8 h-8" />,
  },
  {
    title: "Backend & DB",
    description: ".NET, Node.js, Supabase, SQL, MongoDB, FastAPI",
    link: "",
    icon: <Database className="w-8 h-8" />,
  },
  {
    title: "Programming",
    description: "JavaScript, TypeScript, Python, C#",
    link: "",
    icon: <Code2 className="w-8 h-8" />,
  },
  {
    title: "Tools",
    description: "Git, GitHub, TurboRepo, Vercel, Figma, Strapi",
    link: "",
    icon: <Wrench className="w-8 h-8" />,
  },
  {
    title: "Languages",
    description: "Turkish (Native), English (B1)",
    link: "",
    icon: <Globe className="w-8 h-8" />,
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="w-full py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-9xl mx-auto py-10 px-4 md:px-8 lg:px-10 flex items-center justify-center">
        <Heading
          title="SKILLS & TECHNOLOGIES"
          description="My technical expertise and tools I use to build amazing products."
        />
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={skills} />
      </div>
    </section>
  );
};

export default Skills;
