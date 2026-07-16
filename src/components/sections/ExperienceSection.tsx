"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionContactStrip } from "@/components/shared/SectionContactStrip";
import { experiences } from '@/data/experiences';
import { Experience } from "@/types";

const typeLabels: Record<string, string> = {
  training: "Training & Fellowship",
  workshop: "Workshop & Conference",
  research: "Professional Experience",
  certification: "Certification",
};

const typeColors: Record<string, string> = {
  training: "bg-teal-500",
  workshop: "bg-blue-500",
  research: "bg-primary",
  certification: "bg-amber-500",
};

export function ExperienceSection() {
  return (
    <SectionWrapper
      id="experience"
      title="Experience & Training"
      subtitle="Professional work, training programs, fellowships, and conferences"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp: Experience, index: number) => (
          <ScrollReveal key={exp.id} delay={index * 0.05}>
            <div className="flex gap-4">
              <div className="flex flex-col items-center pt-1">
                <div
                  className={`h-3 w-3 rounded-full ${typeColors[exp.type] || "bg-primary"}`}
                />
                {index < experiences.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-1" />
                )}
              </div>

              <div className="flex-1 pb-6">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-sm font-semibold text-primary">
                    {exp.title}
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                    {typeLabels[exp.type] || exp.type}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-1">
                  {exp.organization} &middot; {exp.location}
                </p>
                <p className="text-xs text-muted-foreground mb-2 font-medium">
                  {exp.period}
                </p>

                {exp.image && (
                  <div className="relative w-full max-w-sm h-48 overflow-hidden rounded-md mb-3">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 384px"
                    />
                  </div>
                )}

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <SectionContactStrip />
    </SectionWrapper>
  );
}