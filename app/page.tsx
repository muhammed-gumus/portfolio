import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center justify-center py-6 px-2 md:px-24 bg-white dark:bg-black">
      <Banner />
      <Experience />
      {/* <hr className="border-gray-700 my-6 w-full" /> */}
      <Projects />
      {/* <hr className="border-gray-700 my-6 w-full" /> */}
      <Education />
      {/* <hr className="border-gray-700 my-6 w-full" /> */}
      <Contact />
    </main>
  );
}
