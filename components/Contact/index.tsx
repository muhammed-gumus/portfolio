import React from "react";

const Contact: React.FC = () => {
  return (
    <div
      id="contact"
      className="text-black dark:text-white py-10 w-full bg-white dark:bg-black"
    >
      <div className="container mx-auto px-4">
        <div>
          <h2 className="text-xl tracking-widest mb-8 text-left">CONTACT</h2>
        </div>
        <div className="w-full flex flex-col gap-4 md:gap-6 lg:flex-row lg:gap-8">
          <a
            href="mailto:mgumus4102@gmail.com"
            className="flex items-center justify-center border border-gray-500 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg px-4 py-2 w-full lg:w-64"
          >
            <span>Send an email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/muhammedgums/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border border-gray-500 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg px-4 py-2 w-full lg:w-64"
          >
            <span>LinkedIn</span>
          </a>
          <a
            href="https://medium.com/@devmamidev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border border-gray-500 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg px-4 py-2 w-full lg:w-64"
          >
            <span>Medium</span>
          </a>
          <a
            href="https://github.com/muhammed-gumus"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border border-gray-500 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg px-4 py-2 w-full lg:w-64"
          >
            <span>Github</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
