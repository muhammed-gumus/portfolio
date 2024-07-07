import React from 'react';

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
    name: 'Nomad Work',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat',
    image: 'https://via.placeholder.com/300',
    technologies: ['React', 'Bootstrap', 'Styled Components'],
    githubLink: '#',
    externalLink: '#',
  },
  {
    name: 'Nomad Work',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat',
    image: 'https://via.placeholder.com/300',
    technologies: ['React', 'Bootstrap', 'Styled Components'],
    githubLink: '#',
    externalLink: '#',
  },
  {
    name: 'Nomad Work',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat',
    image: 'https://via.placeholder.com/300',
    technologies: ['React', 'Bootstrap', 'Styled Components'],
    githubLink: '#',
    externalLink: '#',
  },
  {
    name: 'Nomad Work',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat',
    image: 'https://via.placeholder.com/300',
    technologies: ['React', 'Bootstrap', 'Styled Components'],
    githubLink: '#',
    externalLink: '#',
  },
  {
    name: 'Nomad Work',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat',
    image: 'https://via.placeholder.com/300',
    technologies: ['React', 'Bootstrap', 'Styled Components'],
    githubLink: '#',
    externalLink: '#',
  },
  {
    name: 'Nomad Work',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat',
    image: 'https://via.placeholder.com/300',
    technologies: ['React', 'Bootstrap', 'Styled Components'],
    githubLink: '#',
    externalLink: '#',
  },
  
  // Diğer projeleri buraya ekleyin
];

const Projects: React.FC = () => {
  return (
    <div className="bg-black text-white py-10 w-full">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-xl tracking-widest mb-8">FEATURED PROJECTS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="rounded-sm overflow-hidden shadow-lg">
              <img src={project.image} alt={project.name} className="w-full h-60 object-cover" />
              <div className="py-4 px-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <div className="flex space-x-2">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.16 6.84 9.49.5.09.66-.22.66-.49v-1.7c-2.79.61-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.92-.63.07-.62.07-.62 1.02.07 1.55 1.05 1.55 1.05.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.23-.25-4.57-1.12-4.57-5 0-1.11.39-2.01 1.03-2.72-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.62 9.62 0 0112 6.1c.85.004 1.7.11 2.5.32 1.9-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.71 1.03 1.61 1.03 2.72 0 3.88-2.34 4.74-4.57 4.99.36.31.68.92.68 1.86v2.76c0 .27.16.59.67.49A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
                      </svg>
                    </a>
                    <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h7v7m0 0H4a2 2 0 01-2-2V6a2 2 0 012-2h7m7 7l-9 9m9-9L5 5" />
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="text-xs bg-gray-800 text-gray-300 rounded-full px-2 py-1 mr-2 mb-2">
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
