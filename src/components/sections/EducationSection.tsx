"use client";

import { GraduationCap } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionContactStrip } from "@/components/shared/SectionContactStrip";
import { education } from "@/data/education";
import { Card, CardContent } from "@/components/ui/card";

export function EducationSection() {
  return (
    <SectionWrapper
      id="education"
      title="Education"
      subtitle="Academic background in Climate Change, Agricultural Engineering, and Water Resources"
    >
      <div className="max-w-3xl mx-auto space-y-6">
        {education.map((edu, index) => (
          <ScrollReveal key={index} delay={index * 0.15}>
            <Card className="border-border/50 hover:border-teal/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-teal/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="h-6 w-6 text-teal" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-primary">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {edu.location} &middot; {edu.period}
                    </p>
                    {edu.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                        {edu.description}
                      </p>
                    )}
                    {edu.highlights && edu.highlights.length > 0 && (
                      <ul className="space-y-1 mt-2">
                        {edu.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-teal mt-1.5">&#8226;</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>
      <SectionContactStrip />
    </SectionWrapper>
  );
}