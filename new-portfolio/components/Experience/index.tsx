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
    <div className="mb-8 w-full flex flex-col gap-1">
      <div className="flex flex-row items-center justify-between pr-4">
      <h2 className="text-xl">{role}</h2>
      <p className="text-md text-gray-600">
        {startDate} - {endDate}
      </p>
      </div>
      <h3 className="text-lg font-semibold text-gray-500">
        {company} / {location}
      </h3>
      
      <ul className="w-full list-disc list-inside mt-2">
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
  const [selectedCompanyIndex, setSelectedCompanyIndex] = useState<
    number | null
  >(null);

  useEffect(() => {
    setSelectedCompanyIndex(0); // İlk şirketi varsayılan olarak seç
  }, []); // Boş bağımlılık dizisi, sadece bir kere çalışması için

  const handleSelectCompany = (index: number) => {
    setSelectedCompanyIndex(selectedCompanyIndex === index ? null : index);
  };

  return (
    <div className="flex justify-left w-full mt-24">
      <div className="w-full flex">
        <div className="w-1/4 pr-8 border-r border-gray-700">
          <h1 className="text-xl tracking-widest  mb-8">EXPERIENCE</h1>
          {/* Render tabs */}
          <div className="flex flex-col justify-left">
            {experiences.map((experience, index) => (
              <button
                key={index}
                className={`text-left text-md mb-4 px-4 py-2 ${
                  selectedCompanyIndex === index
                    ? "bg-gray-800"
                    : "bg-transparent opacity-70"
                } text-white`}
                onClick={() => handleSelectCompany(index)}
              >
                {experience.company}
              </button>
            ))}
          </div>
        </div>
        {/* Render selected company's experience */}
        <div className="flex flex-col text-left w-full pl-8 mt-16">
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
    </div>
  );
};

export default IndexPage;
