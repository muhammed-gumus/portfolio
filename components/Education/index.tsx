import React from "react";
import Heading from "../ui/Heading";

type EducationItem = {
  institution: string;
  location: string;
  degree: string;
  period: string;
};

const educationData: EducationItem[] = [
  {
    institution: "Gebze Technical University",
    location: "Turkey",
    degree: "Master of Business Administration",
    period: "2025 / Present",
  },
  {
    institution: "Konya Technical University",
    location: "Turkey",
    degree: "Bachelor of Science Computer Engineering",
    period: "2020 / 2024",
  },
];

const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center w-full py-20 px-4 bg-white dark:bg-black text-black dark:text-white"
    >
      {/* Header Section */}
      <div className="max-w-9xl mx-auto py-10 px-4 md:px-8 lg:px-10 flex items-center justify-center">
        <Heading
          title="EDUCATION THAT FUELED MY GROWTH"
          description="A summary of the degrees and programs that built the foundation of my knowledge."
        />
      </div>

      {/* Vertical Timeline Container */}
      <div className="max-w-5xl mt-12 mx-auto w-full">
        <div className="relative">
          {/* Vertical Timeline Line - left on mobile, centered on md+ */}
          <div className="absolute left-6 transform md:left-1/2 md:-translate-x-1/2 w-px h-full bg-gradient-to-b from-gray-300 via-black to-gray-300 dark:from-neutral-800 dark:via-neutral-400 dark:to-neutral-800"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {educationData.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="relative flex items-center">
                  {/* Timeline Dot - positioned left on mobile, centered on md+ */}
                  <div className="absolute left-6 transform md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-black dark:bg-white rounded-full border-4 border-white dark:border-black z-10 transition-colors"></div>

                  {/* Content Card - full width on mobile, split on md+ */}
                  <div
                    className={`w-full pl-12 md:pl-0 md:w-5/12 ${
                      isLeft
                        ? "md:pr-8 md:text-right"
                        : "md:ml-auto md:pl-8 md:text-left"
                    }`}
                  >
                    <div className="group">
                      <div className="bg-white dark:bg-neutral-900 border-2 border-gray-100 dark:border-neutral-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl dark:shadow-neutral-900/50 transition-all duration-500 hover:-translate-y-2 hover:border-gray-200 dark:hover:border-neutral-700">
                        {/* Period Badge */}
                        <div
                          className={`inline-block mb-4 ${isLeft ? "md:ml-auto" : ""}`}
                        >
                          <span className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-full transition-colors">
                            {item.period}
                          </span>
                        </div>

                        {/* Institution */}
                        <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                          {item.institution}
                        </h3>

                        {/* Location */}
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 font-medium">
                          {item.location}
                        </p>

                        {/* Degree */}
                        <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                          {item.degree}
                        </p>

                        {/* Decorative Line */}
                        <div
                          className={`mt-4 w-16 h-px bg-gradient-to-r from-black to-transparent dark:from-white ${
                            isLeft ? "md:ml-auto" : ""
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
