import React from "react";
import Image from "next/image"; // Import the Image component

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
  return (
    <div
      id="projects"
      className="bg-white dark:bg-black text-black dark:text-white py-10 w-full"
    >
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-xl tracking-widest mb-8">FEATURED PROJECTS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-sm overflow-hidden shadow-lg group dark:bg-gray-950"
            >
              <Image
                src={project.image}
                alt={project.name}
                className="w-full h-60 object-cover"
                width={640} // Add width and height
                height={360}
              />
              <div className="py-4 px-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <div className="flex space-x-2">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-black dark:text-white dark:hover:text-gray-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="dark:fill-white"
                      >
                        <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                      </svg>
                    </a>
                    {project.externalLink && (
                      <a
                        href={project.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black dark:text-white "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="24"
                          height="24"
                          viewBox="0 0 48 48"
                          fill="currentColor"
                          className="dark:fill-white"
                        >
                          <path d="M 40.960938 4.9804688 A 2.0002 2.0002 0 0 0 40.740234 5 L 28 5 A 2.0002 2.0002 0 1 0 28 9 L 36.171875 9 L 22.585938 22.585938 A 2.0002 2.0002 0 1 0 25.414062 25.414062 L 39 11.828125 L 39 20 A 2.0002 2.0002 0 1 0 43 20 L 43 7.2460938 A 2.0002 2.0002 0 0 0 40.960938 4.9804688 z M 12.5 8 C 8.3826878 8 5 11.382688 5 15.5 L 5 35.5 C 5 39.617312 8.3826878 43 12.5 43 L 32.5 43 C 36.617312 43 40 39.617312 40 35.5 L 40 26 A 2.0002 2.0002 0 1 0 36 26 L 36 35.5 C 36 37.446688 34.446688 39 32.5 39 L 12.5 39 C 10.553312 39 9 37.446688 9 35.5 L 9 15.5 C 9 13.553312 10.553312 12 12.5 12 L 22 12 A 2.0002 2.0002 0 1 0 22 8 L 12.5 8 z"></path>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                <p className=" text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 group-hover:line-clamp-none ">
                  {project.description}
                </p>
                <div className="flex flex-wrap">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-800 text-gray-300 rounded-full px-2 py-1 mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
