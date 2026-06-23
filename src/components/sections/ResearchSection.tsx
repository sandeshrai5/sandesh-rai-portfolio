"use client";

import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionContactStrip } from "@/components/shared/SectionContactStrip";
import { AnimatedCard } from "@/components/shared/AnimatedCard";
import { projects } from "@/data/projects";

export function ResearchSection() {
  return (
    <SectionWrapper
      id="projects"
      title="Research & Projects"
      subtitle="Key research projects focusing on climate change, water resources, and geospatial analysis"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <AnimatedCard key={project.id} delay={index * 0.1}>
            <div className="space-y-3">
              {/* Project image placeholder */}
              <div className="h-40 rounded-md bg-secondary flex items-center justify-center text-muted-foreground text-xs">
                {project.image ? "Project Image" : "Image Placeholder"}
              </div>

              <h3 className="text-base font-semibold text-primary leading-snug">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Details */}
              {project.details && (
                <ul className="space-y-1.5">
                  {project.details.map((detail, i) => (
                    <li
                      key={i}
                      className="text-xs text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-teal mt-0.5">&#8226;</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-xs font-normal"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Links */}
              {project.links && project.links.length > 0 && (
                <div className="flex gap-2 pt-1">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-teal hover:text-primary flex items-center gap-1 transition-colors"
                    >
                      {link.label}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </AnimatedCard>
        ))}
      </div>
      <SectionContactStrip />
    </SectionWrapper>
  );
}