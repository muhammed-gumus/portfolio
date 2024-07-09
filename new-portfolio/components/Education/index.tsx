import React from "react";

type EducationItem = {
  institution: string;
  location: string;
  degree: string;
  period: string;
};

const educationData: EducationItem[] = [
  {
    institution: "Konya Technical University",
    location: "Turkey",
    degree: "Bachelor's degree",
    period: "2020 / 2024",
  },
];

const Education: React.FC = () => {
  return (
    <div className="text-black dark:text-white py-10 w-full bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-xl tracking-widest mb-8 text-left md:text-left">EDUCATION</h2>
        <div className="w-full">
          {educationData.map((item, index) => (
            <div key={index} className="mb-8 md:mb-4">
              <div className="flex flex-col md:flex-row justify-between md:items-center">
                <div className="flex flex-col mb-4 md:mb-0">
                  <h3 className="text-lg md:text-xl">{item.institution}</h3>
                  <p className="text-blue-400">{item.location}</p>
                  <p className="text-gray-600 dark:text-gray-400">{item.degree}</p>
                </div>
                <div className="text-gray-600 dark:text-gray-400 md:text-right">{item.period}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
