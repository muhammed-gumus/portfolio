import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Heading from "../ui/Heading";

type Project = {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  externalLink: string;
};

const projects: Project[] = [
  {
    name: "Nomad Work App",
    description:
      "NomadWork is a platform for remote workers and digital nomads to easily find the perfect workspace. Users can explore a wide range of locations, filter by various criteria, and access insights from others.",
    image: "/image/nomadworkapp.png",
    technologies: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Go",
      "React Native",
      "GlueStack UI",
    ],
    githubLink: "https://github.com/nomadworkapp",
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

  {
    name: "Silver Host",
    description:
      "I created a sleek and modern website design using HTML and CSS, hosted at Silver Host. The website features a clean layout with intuitive navigation, showcasing my skills in front-end development. It demonstrates a strong focus on responsive design and user experience.",
    image: "/image/host.png",
    technologies: ["Html", "CSS"],
    githubLink: "https://github.com/muhammed-gumus/Silver-Host",
    externalLink: "https://silver-host.vercel.app/",
  },
  {
    name: "Personal Portfolio",
    description:
      "The Personal Portfolio website is a comprehensive showcase of my work as a developer. It features sections for my biography, skills, projects, and contact information. The design is modern and responsive, ensuring a great user experience on all devices.",
    image: "/image/portfolio.png",
    technologies: ["Next.js", "JavaScript", "CSS", "React.js"],
    githubLink: "https://github.com/muhammed-gumus/Personal-Portfolio",
    externalLink: "https://personal-portfolio-muhammed-gumus.vercel.app/",
  },
];

const Projects: React.FC = () => {
  // Her projeyi testimonial formatına dönüştür
  const testimonials = projects.map((project) => ({
    quote: project.description,
    name: project.name,
    designation: project.technologies.join(", "),
    src: project.image,
    githubLink: project.githubLink,
    externalLink: project.externalLink,
  }));

  return (
    <section
      id="projects"
      className="flex flex-col items-center gap-12 w-full mt-12 p-4 md:p-8 bg-white dark:bg-black"
    >
      <div className="max-w-9xl mx-auto py-10 px-4 md:px-8 lg:px-10 flex items-center justify-center">
        <Heading
          title="PROJECTS THAT SHAPED MY JOURNEY"
          description="A collection of the key projects I’ve built — each one reflecting my growth, 
    creativity, and passion for development."
        />
      </div>
      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
};

export default Projects;
