"use client";

import React, { useState, useEffect } from "react";

const experiences = [
  {
    company: "Selfbook",
    location: "US - New York",
    role: "Software Developer (Remote)",
    startDate: "Jun 2021",
    endDate: "Present",
    description: [
      "Developing screens and UI components for the web application using React and Tailwind.",
      "Fixing UI issues and integrating backend APIs with Redux Saga.",
    ],
  },
  {
    company: "Wevoz",
    location: "Canada - Toronto",
    role: "Frontend Developer",
    startDate: "Jan 2020",
    endDate: "Dec 2020",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
  {
    company: "FreeBeings",
    location: "UK - London",
    role: "Backend Developer",
    startDate: "Mar 2018",
    endDate: "Dec 2019",
    description: [
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
  },
  {
    company: "TDF",
    location: "France - Paris",
    role: "UI/UX Designer",
    startDate: "Apr 2019",
    endDate: "Nov 2019",
    description: [
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
  {
    company: "Upwork",
    location: "US",
    role: "Project Manager",
    startDate: "Jun 2017",
    endDate: "Mar 2018",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
];

const ExperienceCard: React.FC<{
  company: string;
  location: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string[];
}> = ({ company, location, role, startDate, endDate, description }) => {
  return (
    <div className="mb-8 w-full flex flex-col gap-4 p-6 bg-white bg-opacity-80 rounded-lg shadow-lg md:bg-transparent md:shadow-none">
      <div className="flex flex-col items-start justify-between">
        <h2 className="text-xl font-semibold text-gray-900 mb-1 md:text-white">{role}</h2>
        <h3 className="text-md font-medium text-gray-700 mb-2 md:text-gray-300">
          {company} / {location}
        </h3>
        <p className="text-sm text-gray-600 mb-4 md:text-gray-400">
          {startDate} - {endDate}
        </p>
      </div>
      <ul className="w-full list-disc list-inside text-gray-700 text-sm md:text-gray-300">
        {description.map((desc, index) => (
          <li key={index} className="mb-2 w-full">
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
};

const IndexPage: React.FC = () => {
  const [selectedCompanyIndex, setSelectedCompanyIndex] = useState<number | null>(null);

  useEffect(() => {
    setSelectedCompanyIndex(0); // İlk şirketi varsayılan olarak seç
  }, []);

  const handleSelectCompany = (index: number) => {
    setSelectedCompanyIndex(selectedCompanyIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row justify-left w-full mt-12 p-4 md:p-8">
      <div className="w-full md:w-1/4 md:pr-8 md:border-r border-gray-700">
        <h1 className="text-xl tracking-widest mb-4 text-left md:text-left md:text-white">EXPERIENCE</h1>
        <div className="flex overflow-x-auto md:flex-col gap-2">
          {experiences.map((experience, index) => (
            <button
              key={index}
              className={`text-left text-sm md:text-md mb-2 md:mb-4 px-2 py-1 md:px-4 md:py-2 whitespace-nowrap ${
                selectedCompanyIndex === index
                  ? "bg-gray-800 text-white"
                  : "bg-transparent text-gray-700 md:text-gray-300"
              }`}
              onClick={() => handleSelectCompany(index)}
            >
              {experience.company}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col text-left w-full mt-4 md:mt-0 md:pl-8">
        {selectedCompanyIndex !== null && (
          <ExperienceCard
            company={experiences[selectedCompanyIndex].company}
            location={experiences[selectedCompanyIndex].location}
            role={experiences[selectedCompanyIndex].role}
            startDate={experiences[selectedCompanyIndex].startDate}
            endDate={experiences[selectedCompanyIndex].endDate}
            description={experiences[selectedCompanyIndex].description}
          />
        )}
      </div>
    </div>
  );
};

export default IndexPage;
