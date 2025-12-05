"use client";
import React, { useState } from "react";
import Heading from "../ui/Heading";
import Image from "next/image";
export const projects = [
  {
    title: "Linkedin",
    description: "Professional network",
    icon: (
      <svg
        className="w-8 h-8 text-black dark:text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    link: "https://linkedin.com/in/muhammedgums",
  },
  {
    title: "Medium",
    description: "Read my articles",
    icon: (
      <svg
        className="w-8 h-8 text-black dark:text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
    link: "https://medium.com/@devmamidev",
  },
  {
    title: "GitHub",
    description: "View my code",
    icon: (
      <svg
        className="w-8 h-8 text-black dark:text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    link: "https://github.com/muhammed-gumus",
  },
  {
    title: "Email",
    description: "Send me an email",
    icon: (
      <svg
        className="w-8 h-8 text-black dark:text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    link: "mailto:mgumus4102@gmail.com",
  },
];

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "", honey: "" });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("Message sent!");
        setForm({ name: "", email: "", message: "", honey: "" });
      } else setStatus("Failed to send message.");
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center gap-12 w-full mt-12 p-4 md:p-8 bg-white dark:bg-black"
    >
      <div className="max-w-9xl mx-auto py-10 px-4 md:px-8 lg:px-10 flex items-center justify-center">
        <Heading
          title="CHANNELS THAT KEEP US CONNECTED
"
          description="The ways you can reach me, follow my work, or just say hi."
        />
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto md:px-4">
        <div className="flex flex-col md:flex-row items-stretch ">
          {/* Left Side - Contact Form */}
          <div className="flex flex-col w-full md:w-1/2 lg:w-1/2 px-4 md:px-8 py-8">
            <h2 className="text-xl md:text-3xl font-bold flex justify-center w-full mb-6">
              Let's Contact!
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-100 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent text-gray-900 dark:text-black placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                  required
                />
              </div>

              <div className="hidden">
                 <input
                  name="honey"
                  type="text"
                  value={form.honey}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                 />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-100 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent text-gray-900 dark:text-black placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="block p-2.5 w-full text-gray-900 rounded-lg border border-gray-300  bg-white dark:bg-gray-100 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 dark:text-black focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <button
                className="w-full py-3 px-6 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={status === "Sending..."}
              >
                {status === "Sending..." ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p
                  className={`text-center text-sm font-medium ${
                    status === "Message sent!"
                      ? "text-green-600 dark:text-green-400"
                      : status === "Sending..."
                        ? "text-gray-600 dark:text-gray-400"
                        : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
            <div className="grid grid-cols-4 gap-4 items-center justify-center mt-4 flex-wrap py-2">
              {projects.map((p) => (
                <a
                  key={p.title}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 px-3 py-2 bg-transparent  rounded-full text-sm"
                >
                  <span className="flex-shrink-0">
                    {React.cloneElement(p.icon as React.ReactElement, {
                      className: "w-6 h-6 text-black dark:text-white",
                    })}
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {p.title}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="relative hidden md:block md:w-1/2 min-h-[320px]">
            <Image
              src="/contact.png"
              alt="Contact"
              fill
              className="object-contain w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
