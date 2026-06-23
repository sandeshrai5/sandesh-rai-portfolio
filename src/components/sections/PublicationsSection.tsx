"use client";

import { FileText, Clock, CheckCircle, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionContactStrip } from "@/components/shared/SectionContactStrip";
import { publications, getPublicationsByStatus } from "@/data/publications";
import type { Publication } from "@/types";

const statusConfig = {
  published: {
    label: "Published",
    icon: CheckCircle,
    variant: "default" as const,
  },
  accepted: {
    label: "Accepted",
    icon: CheckCircle,
    variant: "default" as const,
  },
  submitted: {
    label: "Submitted",
    icon: Send,
    variant: "secondary" as const,
  },
  in_progress: {
    label: "In Progress",
    icon: Clock,
    variant: "outline" as const,
  },
};

export function PublicationsSection() {
  const grouped = getPublicationsByStatus();
  const hasPublications = publications.length > 0 && publications[0].id !== "pub-placeholder";

  return (
    <SectionWrapper
      id="publications"
      title="Publications"
      subtitle="Journal articles, conference papers, and ongoing research work"
    >
      {hasPublications ? (
        <div className="max-w-3xl mx-auto space-y-8">
          {(["published", "accepted", "submitted", "in_progress"] as const).map(
            (status) => {
              const items: Publication[] = grouped[status];
              if (items.length === 0) return null;
              const config = statusConfig[status];
              const StatusIcon = config.icon;

              return (
                <div key={status}>
                  <ScrollReveal>
                    <div className="flex items-center gap-2 mb-4">
                      <StatusIcon className="h-4 w-4 text-teal" />
                      <h3 className="text-lg font-semibold text-primary">
                        {config.label}
                      </h3>
                    </div>
                  </ScrollReveal>
                  <div className="space-y-3">
                    {items.map((pub: Publication, index: number) => (
                      <ScrollReveal key={pub.id} delay={index * 0.1}>
                        <div className="p-4 rounded-lg border border-border/50 bg-card">
                          <div className="flex items-start gap-3">
                            <FileText className="h-5 w-5 text-teal mt-0.5 shrink-0" />
                            <div className="space-y-1">
                              <h4 className="text-sm font-medium text-foreground leading-snug">
                                {pub.url ? (
                                  <a
                                    href={pub.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-teal transition-colors"
                                  >
                                    {pub.title}
                                  </a>
                                ) : (
                                  pub.title
                                )}
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                {pub.authors}
                              </p>
                              <div className="flex items-center gap-2 flex-wrap">
                                {(pub.journal || pub.conference) && (
                                  <span className="text-xs text-muted-foreground italic">
                                    {pub.journal || pub.conference}
                                  </span>
                                )}
                                <Badge variant={config.variant} className="text-xs">
                                  {pub.year}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              );
            }
          )}
        </div>
      ) : (
        <ScrollReveal>
          <div className="text-center py-8 text-muted-foreground">
            <FileText className="h-12 w-12 mx-auto mb-3 opacity-30" />
            <p>Publications will be added here soon.</p>
          </div>
        </ScrollReveal>
      )}
      <SectionContactStrip />
    </SectionWrapper>
  );
}