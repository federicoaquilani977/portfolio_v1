import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <div className="relative">
      <HeroSection />
      <AboutPreview />
      <ProjectsPreview />
      <ContactCTA />
    </div>
  );
}