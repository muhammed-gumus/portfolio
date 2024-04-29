import Banner from "@/components/Banner";
import Experience from "@/components/Experience"
export default function Home() {
  return (
    <main className="flex flex-col w-full items-center justify-center py-6 px-24">
      <Banner />
      <Experience />
    </main>
  );
}
