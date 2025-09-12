"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image"; // Import the Image component
import { trackResumeDownload, trackThemeChange } from "@/utils/analytics";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleThemeToggle = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      trackThemeChange("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      trackThemeChange("light");
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 100; // Navbar yüksekliği + padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    // Mobil menüyü kapat
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Modal behavior for mobile menu: lock background scroll, focus close button, close on Escape
  useEffect(() => {
    if (mobileMenuOpen) {
      // lock background scroll
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      // focus the close button for keyboard users
      setTimeout(() => closeButtonRef.current?.focus(), 50);

      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileMenuOpen(false);
      };
      window.addEventListener("keydown", onKey);

      return () => {
        document.body.style.overflow = prevOverflow || "";
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed z-50 transition-all duration-500 ease-in-out rounded-full ${
          mobileMenuOpen ? "md:block hidden" : ""
        } ${
          scrolled
            ? "top-4 left-2 right-2 sm:left-4 sm:right-4 md:left-12 md:right-12 lg:left-16 lg:right-16 py-2 lg:px-8 px-2"
            : "top-2 left-2 right-2 sm:left-4 sm:right-4 py-3"
        } ${
          scrolled
            ? darkMode
              ? "bg-white/10 backdrop-blur-md text-white shadow-lg shadow-black/10"
              : "bg-black/20 backdrop-blur-lg text-black shadow-lg shadow-white/10"
            : darkMode
              ? "bg-transparent text-white"
              : "bg-transparent text-black"
        }`}
      >
        <div className="w-full flex justify-between items-center px-3 sm:px-6">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="MG Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full transition-transform duration-300 hover:scale-110"
              width={48}
              height={48}
            />
          </Link>

          {/* Desktop Navigation Menu - Hidden on mobile */}
          <div className="hidden md:flex items-center lg:gap-6">
            <button
              onClick={() => scrollToSection("experience")}
              className={`font-medium transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full text-sm ${
                scrolled
                  ? darkMode
                    ? "text-white hover:bg-white/10"
                    : "text-black hover:bg-black/10"
                  : darkMode
                    ? "text-white hover:bg-white/10"
                    : "text-black hover:bg-black/10"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`font-medium transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full text-sm ${
                scrolled
                  ? darkMode
                    ? "text-white hover:bg-white/10"
                    : "text-black hover:bg-black/10"
                  : darkMode
                    ? "text-white hover:bg-white/10"
                    : "text-black hover:bg-black/10"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className={`font-medium transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full text-sm ${
                scrolled
                  ? darkMode
                    ? "text-white hover:bg-white/10"
                    : "text-black hover:bg-black/10"
                  : darkMode
                    ? "text-white hover:bg-white/10"
                    : "text-black hover:bg-black/10"
              }`}
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`font-medium transition-all duration-300 hover:scale-105 px-4 py-2 rounded-full text-sm ${
                scrolled
                  ? darkMode
                    ? "text-white hover:bg-white/10"
                    : "text-black hover:bg-black/10"
                  : darkMode
                    ? "text-white hover:bg-white/10"
                    : "text-black hover:bg-black/10"
              }`}
            >
              Contact
            </button>
          </div>

          {/* Desktop Resume and Theme buttons */}
          <div className="hidden md:flex flex-row gap-2 sm:gap-4 md:gap-6 items-center">
            <a
              href="/Resume-FrontendMG.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-medium transition-all duration-300 hover:scale-105 px-2 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base border ${
                scrolled
                  ? darkMode
                    ? "text-white border-white/20 hover:bg-white/10"
                    : "text-black border-black/20 hover:bg-black/10"
                  : darkMode
                    ? "text-white border-white/20 hover:bg-white/10"
                    : "text-black border-black/20 hover:bg-black/10"
              }`}
              onClick={() => {
                trackResumeDownload();
              }}
            >
              <span className="hidden text-sm sm:inline">Resume</span>
              <span className="sm:hidden">CV</span>
            </a>

            <div className="flex items-center gap-2">
              {/* Sun icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 30 30"
                className={`transition-colors duration-300 ${
                  darkMode ? "text-gray-400" : "text-yellow-500"
                }`}
                fill="currentColor"
              >
                <path d="M 14.984375 0.98632812 A 1.0001 1.0001 0 0 0 14 2 L 14 5 A 1.0001 1.0001 0 1 0 16 5 L 16 2 A 1.0001 1.0001 0 0 0 14.984375 0.98632812 z M 5.796875 4.7988281 A 1.0001 1.0001 0 0 0 5.1015625 6.515625 L 7.2226562 8.6367188 A 1.0001 1.0001 0 1 0 8.6367188 7.2226562 L 6.515625 5.1015625 A 1.0001 1.0001 0 0 0 5.796875 4.7988281 z M 24.171875 4.7988281 A 1.0001 1.0001 0 0 0 23.484375 5.1015625 L 21.363281 7.2226562 A 1.0001 1.0001 0 1 0 22.777344 8.6367188 L 24.898438 6.515625 A 1.0001 1.0001 0 0 0 24.171875 4.7988281 z M 15 8 A 7 7 0 0 0 8 15 A 7 7 0 0 0 15 22 A 7 7 0 0 0 22 15 A 7 7 0 0 0 15 8 z M 2 14 A 1.0001 1.0001 0 1 0 2 16 L 5 16 A 1.0001 1.0001 0 1 0 5 14 L 2 14 z M 25 14 A 1.0001 1.0001 0 1 0 25 16 L 28 16 A 1.0001 1.0001 0 1 0 28 14 L 25 14 z M 7.9101562 21.060547 A 1.0001 1.0001 0 0 0 7.2226562 21.363281 L 5.1015625 23.484375 A 1.0001 1.0001 0 1 0 6.515625 24.898438 L 8.6367188 22.777344 A 1.0001 1.0001 0 0 0 7.9101562 21.060547 z M 22.060547 21.060547 A 1.0001 1.0001 0 0 0 21.363281 22.777344 L 23.484375 24.898438 A 1.0001 1.0001 0 1 0 24.898438 23.484375 L 22.777344 21.363281 A 1.0001 1.0001 0 0 0 22.060547 21.060547 z M 14.984375 23.986328 A 1.0001 1.0001 0 0 0 14 25 L 14 28 A 1.0001 1.0001 0 1 0 16 28 L 16 25 A 1.0001 1.0001 0 0 0 14.984375 23.986328 z"></path>
              </svg>

              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  checked={darkMode}
                  onChange={handleThemeToggle}
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-800 dark:peer-checked:bg-gray-300"></div>
              </label>

              {/* Moon icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className={`transition-colors duration-300 ${
                  darkMode ? "text-blue-400" : "text-gray-400"
                }`}
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.2256 2.00253C9.59172 1.94346 6.93894 2.9189 4.92893 4.92891C1.02369 8.83415 1.02369 15.1658 4.92893 19.071C8.83418 22.9763 15.1658 22.9763 19.0711 19.071C21.0811 17.061 22.0565 14.4082 21.9975 11.7743C21.9796 10.9772 21.8669 10.1818 21.6595 9.40643C21.0933 9.9488 20.5078 10.4276 19.9163 10.8425C18.5649 11.7906 17.1826 12.4053 15.9301 12.6837C14.0241 13.1072 12.7156 12.7156 12 12C11.2844 11.2844 10.8928 9.97588 11.3163 8.0699C11.5947 6.81738 12.2094 5.43511 13.1575 4.08368C13.5724 3.49221 14.0512 2.90664 14.5935 2.34046C13.8182 2.13305 13.0228 2.02041 12.2256 2.00253ZM17.6569 17.6568C18.9081 16.4056 19.6582 14.8431 19.9072 13.2186C16.3611 15.2643 12.638 15.4664 10.5858 13.4142C8.53361 11.362 8.73568 7.63895 10.7814 4.09281C9.1569 4.34184 7.59434 5.09193 6.34315 6.34313C3.21895 9.46732 3.21895 14.5326 6.34315 17.6568C9.46734 20.781 14.5327 20.781 17.6569 17.6568Z"
                />
              </svg>
            </div>
          </div>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden p-2 rounded-full transition-all duration-300 hover:scale-110"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute block h-0.5 w-6 transform transition duration-300 ease-in-out ${
                  darkMode ? "bg-white" : "bg-black"
                } ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : "translate-y-0"
                }`}
              ></span>
              <span
                className={`absolute block h-0.5 w-6 transform transition duration-300 ease-in-out ${
                  darkMode ? "bg-white" : "bg-black"
                } translate-y-2 ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute block h-0.5 w-6 transform transition duration-300 ease-in-out ${
                  darkMode ? "bg-white" : "bg-black"
                } ${
                  mobileMenuOpen ? "-rotate-45 translate-y-2" : "translate-y-4"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 bg-white dark:bg-black md:hidden"
        >
          <div className="flex flex-col md:h-full h-90">
            {/* Header with logo and close button */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src="/logo.png"
                  alt="MG Logo"
                  className="h-10 w-10 rounded-full"
                  width={40}
                  height={40}
                />
              </Link>
              <button
                ref={closeButtonRef}
                aria-label="Close menu"
                className="p-2 rounded-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Links - make this area independently scrollable */}
            <div className="flex-1 flex flex-col px-6 py-4 overflow-auto">
              <div className="space-y-1">
                <button
                  onClick={() => scrollToSection("experience")}
                  className={`block w-full text-left text-lg font-medium py-4 px-4 rounded-xl transition-all duration-200 ${
                    darkMode
                      ? "text-gray-300 hover:text-white hover:bg-gray-800/50"
                      : "text-gray-700 hover:text-black hover:bg-gray-100/80"
                  }`}
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className={`block w-full text-left text-lg font-medium py-4 px-4 rounded-xl transition-all duration-200 ${
                    darkMode
                      ? "text-gray-300 hover:text-white hover:bg-gray-800/50"
                      : "text-gray-700 hover:text-black hover:bg-gray-100/80"
                  }`}
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("education")}
                  className={`block w-full text-left text-lg font-medium py-4 px-4 rounded-xl transition-all duration-200 ${
                    darkMode
                      ? "text-gray-300 hover:text-white hover:bg-gray-800/50"
                      : "text-gray-700 hover:text-black hover:bg-gray-100/80"
                  }`}
                >
                  Education
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`block w-full text-left text-lg font-medium py-4 px-4 rounded-xl transition-all duration-200 ${
                    darkMode
                      ? "text-gray-300 hover:text-white hover:bg-gray-800/50"
                      : "text-gray-700 hover:text-black hover:bg-gray-100/80"
                  }`}
                >
                  Contact
                </button>
              </div>

              {/* Bottom section with Resume and Theme buttons */}
              <div className="flex mt-auto gap-2 pb-6">
                <a
                  href="/Resume-FrontendMG.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    darkMode
                      ? "bg-white text-black hover:bg-gray-100 shadow-lg"
                      : "bg-black text-white hover:bg-gray-800 shadow-lg"
                  }`}
                  onClick={() => {
                    trackResumeDownload();
                    setMobileMenuOpen(false);
                  }}
                >
                  Resume
                </a>

                <div
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors duration-200 ${
                    darkMode
                      ? "bg-gray-800/50 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 30 30"
                      className={`transition-colors duration-300 ${
                        darkMode ? "text-gray-400" : "text-yellow-500"
                      }`}
                      fill="currentColor"
                    >
                      <path d="M 14.984375 0.98632812 A 1.0001 1.0001 0 0 0 14 2 L 14 5 A 1.0001 1.0001 0 1 0 16 5 L 16 2 A 1.0001 1.0001 0 0 0 14.984375 0.98632812 z M 5.796875 4.7988281 A 1.0001 1.0001 0 0 0 5.1015625 6.515625 L 7.2226562 8.6367188 A 1.0001 1.0001 0 1 0 8.6367188 7.2226562 L 6.515625 5.1015625 A 1.0001 1.0001 0 0 0 5.796875 4.7988281 z M 24.171875 4.7988281 A 1.0001 1.0001 0 0 0 23.484375 5.1015625 L 21.363281 7.2226562 A 1.0001 1.0001 0 1 0 22.777344 8.6367188 L 24.898438 6.515625 A 1.0001 1.0001 0 0 0 24.171875 4.7988281 z M 15 8 A 7 7 0 0 0 8 15 A 7 7 0 0 0 15 22 A 7 7 0 0 0 22 15 A 7 7 0 0 0 15 8 z M 2 14 A 1.0001 1.0001 0 1 0 2 16 L 5 16 A 1.0001 1.0001 0 1 0 5 14 L 2 14 z M 25 14 A 1.0001 1.0001 0 1 0 25 16 L 28 16 A 1.0001 1.0001 0 1 0 28 14 L 25 14 z M 7.9101562 21.060547 A 1.0001 1.0001 0 0 0 7.2226562 21.363281 L 5.1015625 23.484375 A 1.0001 1.0001 0 1 0 6.515625 24.898438 L 8.6367188 22.777344 A 1.0001 1.0001 0 0 0 7.9101562 21.060547 z M 22.060547 21.060547 A 1.0001 1.0001 0 0 0 21.363281 22.777344 L 23.484375 24.898438 A 1.0001 1.0001 0 1 0 24.898438 23.484375 L 22.777344 21.363281 A 1.0001 1.0001 0 0 0 22.060547 21.060547 z M 14.984375 23.986328 A 1.0001 1.0001 0 0 0 14 25 L 14 28 A 1.0001 1.0001 0 1 0 16 28 L 16 25 A 1.0001 1.0001 0 0 0 14.984375 23.986328 z"></path>
                    </svg>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                      checked={darkMode}
                      onChange={handleThemeToggle}
                    />
                    <div className="relative w-10 h-5 bg-gray-300 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-gray-700 dark:peer-checked:bg-gray-400"></div>
                  </label>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      className={`transition-colors duration-300 ${
                        darkMode ? "text-blue-400" : "text-gray-400"
                      }`}
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.2256 2.00253C9.59172 1.94346 6.93894 2.9189 4.92893 4.92891C1.02369 8.83415 1.02369 15.1658 4.92893 19.071C8.83418 22.9763 15.1658 22.9763 19.0711 19.071C21.0811 17.061 22.0565 14.4082 21.9975 11.7743C21.9796 10.9772 21.8669 10.1818 21.6595 9.40643C21.0933 9.9488 20.5078 10.4276 19.9163 10.8425C18.5649 11.7906 17.1826 12.4053 15.9301 12.6837C14.0241 13.1072 12.7156 12.7156 12 12C11.2844 11.2844 10.8928 9.97588 11.3163 8.0699C11.5947 6.81738 12.2094 5.43511 13.1575 4.08368C13.5724 3.49221 14.0512 2.90664 14.5935 2.34046C13.8182 2.13305 13.0228 2.02041 12.2256 2.00253ZM17.6569 17.6568C18.9081 16.4056 19.6582 14.8431 19.9072 13.2186C16.3611 15.2643 12.638 15.4664 10.5858 13.4142C8.53361 11.362 8.73568 7.63895 10.7814 4.09281C9.1569 4.34184 7.59434 5.09193 6.34315 6.34313C3.21895 9.46732 3.21895 14.5326 6.34315 17.6568C9.46734 20.781 14.5327 20.781 17.6569 17.6568Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
