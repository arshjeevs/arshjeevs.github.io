import Image from "next/image";
import ProfileCard from "./components/ProfileCard";
import ContactLinks from "./components/ContactLinks";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#171717] flex flex-col justify-center items-center">
      <div className="max-w-3/8 pt-12 w-full flex-1">
        <main className="flex flex-col items-center justify-center">
          <ProfileCard/>
          <div className="mt-8 w-full flex flex-col items-center">
            <span className="text-gray-300 mb-2">Where to find me (<span className="italic">digitally</span>) if you wish to</span>
            <ContactLinks />
          </div>
          <SkillsSection />
          <ProjectsSection />
        </main>
      </div>
      <Footer />
    </div>
  );
}
