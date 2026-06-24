"use client";

import { ExternalLink } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionContactStrip } from "@/components/shared/SectionContactStrip";
import { getPublicationsByStatus } from "@/data/publications";
import { Publication } from "@/types";

export function PublicationsSection() {
  const grouped = getPublicationsByStatus();
  const statusLabels: Record<string, string> = {
    published: "Published",
    accepted: "Accepted",
    in_progress: "In Progress",
    submitted: "Submitted",
  };

  return (
    <SectionWrapper
      id="publications"
      title="Publications"
      subtitle="Research papers and conference proceedings"
    >
      {Object.keys(grouped).length === 0 ? (
        <div className="text-center text-muted-foreground py-12">
          Publications will be added soon.
        </div>
      ) : (
        <div className="space-y-8 max-w-4xl mx-auto">
          {Object.entries(grouped).map(([status, pubs]) => {
            const items = pubs as Publication[];
            if (!items || items.length === 0) return null;
            return (
              <div key={status}>
                <h3 className="text-lg font-semibold text-primary mb-4">
                  {statusLabels[status] || status}
                </h3>
                <div className="space-y-4">
                  {items.map((pub: Publication, index: number) => (
                    <ScrollReveal key={pub.id} delay={index * 0.05}>
                      <div className="rounded-lg border p-5 space-y-3">
                        <h4 className="text-sm font-semibold text-primary leading-snug">
                          {pub.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {pub.authors}
                        </p>
                        <p className="text-xs text-muted-foreground italic">
                          {pub.journal} ({pub.year})
                        </p>
                        {pub.url && (
                          <a
                            href={pub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-teal hover:text-primary flex items-center gap-1 transition-colors"
                          >
                            {pub.doi || pub.url}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
      <SectionContactStrip />
    </SectionWrapper>
  );
}