import React from "react";
import Timeline from "../ui/timeline";

const experienceData = [
  {
    title: "Ayasofyazılım",
    date: "Jan 2025 - Dec 2025",
    subtitle: "Frontend Engineer (Kocaeli, Bilişim Vadisi)",
    content: (
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-4">
        <li>
          Developed the user interface of the SSR tax-free refund web application using React and TypeScript, optimizing onboarding, transaction flows, and document submission to enhance the overall user experience.
        </li>
        <li>
          Built the mobile version of the SSR refund application with Expo, enabling store and field staff to perform the same operations seamlessly on mobile; improved workflow speed with QR & barcode scanning and fast invoice processing.
        </li>
        <li>
          Integrated advanced identity verification technologies including FaceMatch, Liveness Detection, OCR-MRZ, and NFC Passport Reading, establishing a high-security authentication process to prevent identity fraud attempts.
        </li>
        <li>
          Strengthened security processes by implementing encrypted data handling, offline-capable NFC passport validation, and multi-layered data validation to ensure compliance with international standards.
        </li>
        <li>
         Developed a performance and SEO-optimized corporate landing page using Next.js and Strapi, providing a modular content structure that enabled non-technical teams to manage updates independently.
        </li>
        <li>
         Contributed to admin panel development to improve the efficiency of transaction and identity review workflows, delivering functional UI enhancements that supported core operational teams.
        </li>
      </ul>
    ),
  },
  {
    title: "Büyük Anadolu Hospitals",
    date: "Sep 2024 - Nov 2024",
    subtitle: "Computer Engineer (Kocaeli)",
    content: (
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-2">
        <li>
          Led the development of web projects using React.js, Next.js, Node.js,
          MongoDB, and PHP technologies.
        </li>
        <li>
          Managed Git flow, defined code standards, and oversaw merge operations
          to ensure quality and consistency.
        </li>
        <li>
          Developed and presented data-driven reports using the Qlik Sense
          platform, providing actionable insights to hospital management.
        </li>
        <li>
          Made strategic decisions to resolve technical challenges in web
          projects and implement new technologies.
        </li>
      </ul>
    ),
  },
  {
    title: "Architecht - Kuveyt Türk Participation Bank",
    date: "Dec 2023 - Jun 2024",
    subtitle: "Computer Engineer Intern (Konya)",
    content: (
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-2">
        <li>
          Various screen enhancements and bug fixes were made in the desktop
          application named BOA and the web application named BOA One, which are
          used by various participation banks serving in Turkey.
        </li>
        <li>
          In web development, TypeScript and React.js were used for Frontend,
          while .Net and SQL were preferred for Backend.
        </li>
        <li>Various screens were developed using WPF for BOA application.</li>
      </ul>
    ),
  },
  {
    title: "Geniousoft",
    date: "Jul 2023 - Aug 2023",
    subtitle: "Intern Software Developer (Remote)",
    content: (
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-2">
        <li>
          Coded web servers using Node.js and integrated them with interfaces.
        </li>
        <li>
          Designed user-friendly interfaces using Next.js and TypeScript to
          enhance the user experience.
        </li>
        <li>
          A detailed story was written for the designed components and added to
          Storybook.
        </li>
      </ul>
    ),
  },
  {
    title: "Dominage",
    date: "Jan 2023 - Feb 2023",
    subtitle: "Junior Software Developer (Remote)",
    content: (
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-2">
        <li>
          Collaborated with the band to set up a task system using Notion,
          streamlining the process for addressing interface bugs and UI fixes.
        </li>
        <li>
          Integrated smart contracts using Ethers.js, enabling secure user
          interaction with crypto wallets.
        </li>
        <li>
          Designed and developed user-friendly interface for swapping old NFTs
          with new ones for a rock band group.
        </li>
      </ul>
    ),
  },
  {
    title: "TrueFeedBack",
    date: "May 2022 - Dec 2022",
    subtitle: "Intern Software Developer (Konya)",
    content: (
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-2">
        <li>
          During these training sessions, I collaborated with teammates to
          complete the given tasks.
        </li>
        <li>
          I attended training sessions related to design and coding
          fundamentals.
        </li>
      </ul>
    ),
  },
];

const ExperienceTimeline: React.FC = () => {
  return (
    <section
      id="experience"
      className="w-full mt-12 p-4 md:p-8 bg-white dark:bg-black"
    >
      <Timeline data={experienceData} />
    </section>
  );
};

export default ExperienceTimeline;
