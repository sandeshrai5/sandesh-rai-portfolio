import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ResearchInterestsSection } from "@/components/sections/ResearchInterestsSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { PublicationsSection } from "@/components/sections/PublicationsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ResearchInterestsSection />
      <ResearchSection />
      <SkillsSection />
      <PublicationsSection />
      <ExperienceSection />
      <AchievementsSection />
      <ContactSection />
    </>
  );
}