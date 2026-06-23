"use client";

import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionContactStrip } from "@/components/shared/SectionContactStrip";
import { SkillBar } from "@/components/shared/SkillBar";
import { skills } from "@/data/skills";

export function SkillsSection() {
  return (
    <SectionWrapper
      id="skills"
      title="Skills"
      subtitle="Technical and research competencies developed through academic and project work"
    >
      <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
        {skills.map((skill, index) => (
          <ScrollReveal key={skill.name} delay={index * 0.06}>
            <SkillBar name={skill.name} level={skill.level} />
          </ScrollReveal>
        ))}
      </div>
      <SectionContactStrip />
    </SectionWrapper>
  );
}