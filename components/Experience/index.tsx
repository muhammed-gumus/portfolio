"use client";

import React, { useState, useEffect } from "react";

const experiences = [
  {
    company: "Ayasofyazılım",
    location: "Kocaeli, Bişim Vadisi",
    role: "Frontend Engineer",
    startDate: "Jan 2024",
    endDate: "Present",
    description: [
      "Took major responsibility in developing the frontend of UpWithCrowd, a crowdfunding platform, using TypeScript, Next.js, Tailwind, and ShadCN/UI; contributed extensively to both the user-facing platform and the admin panel.",
      "Contributed to Unirefund, a tax-free platform, by fixing bugs, solving UX issues, and enhancing admin and store interfaces.",
      "Implemented a secure identity verification flow in Unirefund’s end-user web platform, including liveness test, passport scan, and NFC validation.",
      "Developed the landing website of Unirefund using Strapi for promotional and informational purposes.",
      "Co-developed the Unirefund Android POS application with Expo/React Native, implementing invoicing, passport/NFC scanning, and integrations with thermal printers, laser printers, and POS device inner printers.",
      "Built a mobile UI component library to provide reusable UI elements and modules (UI components, printing, NFC, passport scanning) for fast integration across mobile applications.",
    ],
  },
  {
    company: "Büyük Anadolu Hospitals",
    location: "Kocaeli",
    role: "Computer Engineer",
    startDate: "Sep 2024",
    endDate: "Nov 2024",
    description: [
      "Led the development of web projects using React.js, Next.js, Node.js, MongoDB, and PHP technologies.",
      "Managed Git flow, defined code standards, and oversaw merge operations to ensure quality and consistency.",
      "Developed and presented data-driven reports using the Qlik Sense platform, providing actionable insights to hospital management.",
      "Made strategic decisions to resolve technical challenges in web projects and implement new technologies.",
    ],
  },
  {
    company: "Architecht",
    location: "Konya",
    role: "Computer Engineer Intern",
    startDate: "Dec 2023",
    endDate: "Jun 2024",
    description: [
      "Various screen enhancements and bug fixes were made in the desktop application named BOA and the web application named BOA One, which are used by various participation banks serving in Turkey.",
      "In web development, TypeScript and React.js were used for Frontend, while .Net and SQL were preferred for Backend.",
      "Various screens were developed using WPF for BOA application.",
    ],
  },
  {
    company: "Geniousoft",
    location: "Remote",
    role: "Intern Software Developer",
    startDate: "Jul 2023",
    endDate: "Aug 2023",
    description: [
      "Coded web servers using Node.js and integrated them with interfaces.",
      "Designed user-friendly interfaces using Next.js and TypeScript to enhance the user experience.",
      "A detailed story was written for the designed components and added to Storybook.",
    ],
  },
  {
    company: "Dominage",
    location: "Remote",
    role: "Junior Software Developer",
    startDate: "Jan 2023",
    endDate: "Feb 2023",
    description: [
      "Collaborated with the band to set up a task system using Notion, streamlining the process for addressing interface bugs and UI fixes.",
      "Integrated smart contracts using Ethers.js, enabling secure user interaction with crypto wallets.",
      "Designed and developed user-friendly interface for swapping old NFTs with new ones for a rock band group.",
    ],
  },
  {
    company: "TrueFeedBack",
    location: "Konya",
    role: " Intern Software Developer",
    startDate: "May 2022",
    endDate: "Dec 2022",
    description: [
      "During these training sessions, I collaborated with teammates to complete the given tasks.",
      "I attended training sessions related to design and coding fundamentals.",
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
    <div className="mb-8 w-full flex flex-col gap-4 p-6 bg-white dark:bg-black bg-opacity-80 rounded-lg shadow-lg md:bg-transparent md:shadow-none">
      <div className="flex flex-col items-start justify-between">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
          {role}
        </h2>
        <h3 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-2">
          {company} - {location}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {startDate} - {endDate}
        </p>
      </div>
      <ul className="w-full list-disc list-inside text-gray-700 dark:text-gray-300 text-sm">
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
  }, []);

  const handleSelectCompany = (index: number) => {
    setSelectedCompanyIndex(selectedCompanyIndex === index ? null : index);
  };

  return (
    <div
      id="experience"
      className="flex flex-col md:flex-row justify-left w-full mt-12 p-4 md:p-8 bg-white dark:bg-black"
    >
      <div className="w-full md:w-1/4 md:pr-8 md:border-r border-gray-700">
        <h1 className="text-xl tracking-widest mb-4 text-left md:text-left md:text-white">
          EXPERIENCE
        </h1>
        <div className="flex overflow-x-auto md:flex-col gap-2">
          {experiences.map((experience, index) => (
            <button
              key={index}
              className={`text-left text-sm md:text-md mb-2 md:mb-4 px-2 py-1 md:px-4 md:py-2 whitespace-nowrap ${
                selectedCompanyIndex === index
                  ? "bg-gray-800 text-white"
                  : "bg-transparent text-gray-600 dark:text-gray-300"
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
