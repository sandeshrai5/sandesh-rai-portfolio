"use client";

import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionContactStrip } from "@/components/shared/SectionContactStrip";

const aboutPoints = [
  "MSc in Climate Change and Development from Pulchowk Campus, IOE, Tribhuvan University with strong academic foundation in climate science and water resources.",
  "Specialized interest in climate change adaptation, hydrology, irrigation engineering, GIS, remote sensing, and water resource management.",
  "Hands-on experience in climate data analysis, bias correction of climate projections, watershed modeling, and geospatial analysis using ArcGIS and QGIS.",
  "Passionate about applying scientific research to solve real-world environmental challenges, particularly in the context of Nepal's water resources and agricultural systems.",
  "Proficient in R programming for statistical analysis, data visualization, and climate data processing, with a focus on future climate scenario assessments.",
];

export function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="Researcher dedicated to understanding and addressing climate change impacts on water resources in Nepal"
    >
      <div className="max-w-3xl mx-auto">
        {aboutPoints.map((point, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <div className="flex gap-4 mb-6">
              <div className="mt-1.5 h-2.5 w-2.5 rounded-full bg-teal shrink-0" />
              <p className="text-muted-foreground leading-relaxed">{point}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <SectionContactStrip />
    </SectionWrapper>
  );
}