"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionContactStrip } from "@/components/shared/SectionContactStrip";
import { achievements } from "@/data/achievements";
import { Achievement } from "@/types";

const typeColors: Record<string, string> = {
  academic: "bg-blue-500",
  conference: "bg-teal-500",
  research: "bg-primary",
  award: "bg-amber-500",
};

export function AchievementsSection() {
  return (
    <SectionWrapper
      id="achievements"
      title="Achievements"
      subtitle="Key accomplishments, conference participations, and academic milestones"
    >
      <div className="max-w-4xl mx-auto">
        {achievements.map((achievement: Achievement, index: number) => (
          <ScrollReveal key={achievement.id} delay={index * 0.1}>
            <div className="flex gap-4">
              {/* Timeline dot */}
              <div className="flex flex-col items-center pt-1">
                <div
                  className={`h-3 w-3 rounded-full ${typeColors[achievement.type] || "bg-primary"}`}
                />
                {index < achievements.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-1" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-sm font-semibold text-primary">
                    {achievement.title}
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                    {achievement.year}
                  </span>
                </div>

                {/* Photo */}
                {achievement.image && (
                  <div className="relative w-full max-w-sm h-48 overflow-hidden rounded-md mb-3">
                    <Image
                      src={achievement.image}
                      alt={achievement.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 384px"
                    />
                  </div>
                )}

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
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