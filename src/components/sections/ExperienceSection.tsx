"use client";

import { Briefcase, Award, BookOpen, GraduationCap } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionContactStrip } from "@/components/shared/SectionContactStrip";
import { experiences } from "@/data/experience";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Graduate } from "next/font/google";

const typeConfig = {
  training: { label: "Training", icon: BookOpen },
  workshop: { label: "Workshop", icon: Briefcase },
  research: { label: "Research", icon: Award },
  certification: { label: "Certification", icon: GraduationCap },
};

export function ExperienceSection() {
  const hasRealExperience =
    experiences.length > 0 && experiences[0].id !== "exp-placeholder";

  return (
    <SectionWrapper
      id="experience"
      title="Experience & Training"
      subtitle="Professional development through workshops, research, and technical training"
    >
      {hasRealExperience ? (
        <div className="max-w-3xl mx-auto space-y-4">
          {experiences.map((exp, index) => {
            const config = typeConfig[exp.type];
            const Icon = config?.icon || Briefcase;
            return (
              <ScrollReveal key={exp.id} delay={index * 0.1}>
                <Card className="border-border/50 hover:border-teal/30 transition-colors">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-teal/10 flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5 text-teal" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-base font-semibold text-primary">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {exp.organization}
                          {exp.location && ` — ${exp.location}`}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">
                            {exp.period}
                          </span>
                          {config && (
                            <Badge variant="secondary" className="text-xs">
                              {config.label}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      ) : (
        <ScrollReveal>
          <div className="text-center py-8 text-muted-foreground">
            <Briefcase className="h-12 w-12 mx-auto mb-3 opacity-30" />
            <p>Experience details will be added here soon.</p>
          </div>
        </ScrollReveal>
      )}
      <SectionContactStrip />
    </SectionWrapper>
  );
}