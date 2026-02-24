import Navbar from "../components/Navbar";
import IntroSection from "../components/IntroSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import OutroSection from "../components/OutroSection";
import ScrollBackground from "../components/ScrollBackground";
import LoadingScreen from "../components/LoadingScreen";
import ScrollProgress from "../components/ScrollProgress";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <ScrollBackground>
        <Navbar />

        {/* Main Content Assembly */}
        <main className="w-full relative z-10">
          <IntroSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
          <OutroSection />
        </main>
      </ScrollBackground>
    </>
  );
}
