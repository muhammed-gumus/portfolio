import React from "react";
import Timeline from "../ui/timeline";

const experienceData = [
  {
    title: "Ayasofyazılım",
    date: "Jan 2024 - Present",
    subtitle: "Frontend Engineer (Kocaeli, Bilişim Vadisi)",
    content: (
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-4">
        <li>
          Took major responsibility in developing the frontend of UpWithCrowd, a
          crowdfunding platform, using TypeScript, Next.js, Tailwind, and
          ShadCN/UI; contributed extensively to both the user-facing platform
          and the admin panel.
        </li>
        <li>
          Contributed to Unirefund, a tax-free platform, by fixing bugs, solving
          UX issues, and enhancing admin and store interfaces.
        </li>
        <li>
          Implemented a secure identity verification flow in Unirefund’s
          end-user web platform, including liveness test, passport scan, and NFC
          validation.
        </li>
        <li>
          Developed the landing website of Unirefund using Strapi for
          promotional and informational purposes.
        </li>
        <li>
          Co-developed the Unirefund Android POS application with Expo/React
          Native, implementing invoicing, passport/NFC scanning, and
          integrations with thermal printers, laser printers, and POS device
          inner printers.
        </li>
        <li>
          Built a mobile UI component library to provide reusable UI elements
          and modules (UI components, printing, NFC, passport scanning) for fast
          integration across mobile applications.
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
