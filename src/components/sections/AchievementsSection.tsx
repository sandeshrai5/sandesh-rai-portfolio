"use client";

import { Trophy } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionContactStrip } from "@/components/shared/SectionContactStrip";
import { achievements } from "@/data/achievements";
import { Badge } from "@/components/ui/badge";

const typeLabels = {
  academic: "Academic",
  conference: "Conference",
  research: "Research",
  award: "Award",
};

export function AchievementsSection() {
  const hasRealAchievements =
    achievements.length > 0 && achievements[0].id !== "ach-placeholder";

  return (
    <SectionWrapper
      id="achievements"
      title="Achievements"
      subtitle="Academic accomplishments, conference presentations, and research contributions"
    >
      {hasRealAchievements ? (
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-teal/30 ml-4 space-y-6">
            {achievements.map((achievement, index) => (
              <ScrollReveal key={achievement.id} delay={index * 0.1}>
                <div className="relative pl-8">
                  <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-teal border-2 border-background" />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base font-semibold text-primary">
                        {achievement.title}
                      </h3>
                      <Badge variant="secondary" className="text-xs">
                        {typeLabels[achievement.type] || achievement.type}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {achievement.year}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      ) : (
        <ScrollReveal>
          <div className="text-center py-8 text-muted-foreground">
            <Trophy className="h-12 w-12 mx-auto mb-3 opacity-30" />
            <p>Achievements will be added here soon.</p>
          </div>
        </ScrollReveal>
      )}
      <SectionContactStrip />
    </SectionWrapper>
  );
}