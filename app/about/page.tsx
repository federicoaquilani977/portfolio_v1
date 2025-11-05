import AboutHero from "@/components/about/AboutHero";
import Journey from "@/components/about/Journey";
import Skills from "@/components/about/Skills";
import Certifications from "@/components/about/Certifications";
import Philosophy from "@/components/about/Philosophy";

export const metadata = {
  title: "About | Portfolio",
  description: "Learn more about my journey, skills, and professional philosophy",
};

export default function AboutPage() {
  return (
    <div className="relative">
      <AboutHero />
      <Journey />
      <Skills />
      <Certifications />
      <Philosophy />
    </div>
  );
}