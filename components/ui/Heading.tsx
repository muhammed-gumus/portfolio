import React from "react";

interface HeadingProps {
  title: string;
  description: string;
}

const Heading: React.FC<HeadingProps> = ({ title, description }) => (
  <div className="w-full max-w-4xl text-center relative">
    <div className="flex items-center gap-2 mb-4">
      <div className="w-[40%] md:w-[35%] h-[2px] bg-black dark:bg-white rounded" />
      <h2 className="text-2xl md:text-4xl leading-tight md:leading-tight font-extrabold text-black dark:text-white px-4">
        {title}
        <br className="hidden md:block" />
      </h2>
      <div className="w-[40%] md:w-[35%] h-[2px] bg-black dark:bg-white rounded" />
    </div>
    <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base font-normal max-w-2xl mx-auto">
      {description}
    </p>
  </div>
);

export default Heading;
