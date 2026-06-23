"use client";

import {
  Thermometer,
  Droplets,
  Waves,
  CloudRain,
  Satellite,
  Sprout,
  ShieldAlert,
  BarChart3,
} from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionContactStrip } from "@/components/shared/SectionContactStrip";
import { researchInterests } from "@/data/research-interests";
import { Card, CardContent } from "@/components/ui/card";

const iconMap: Record<string, React.ElementType> = {
  Thermometer,
  Droplets,
  Waves,
  CloudRain,
  Satellite,
  Sprout,
  ShieldAlert,
  BarChart3,
};

export function ResearchInterestsSection() {
  return (
    <SectionWrapper
      id="research-interests"
      title="Research Interests"
      subtitle="Key areas I am passionate about and actively working in"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {researchInterests.map((interest, index) => {
          const Icon = iconMap[interest.icon] || BarChart3;
          return (
            <ScrollReveal key={index} delay={index * 0.08}>
              <Card className="h-full border-border/50 hover:border-teal/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-5 text-center">
                  <div className="h-12 w-12 rounded-lg bg-teal/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-6 w-6 text-teal" />
                  </div>
                  <h3 className="text-sm font-semibold text-primary">
                    {interest.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                    {interest.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          );
        })}
      </div>
      <SectionContactStrip />
    </SectionWrapper>
  );
}