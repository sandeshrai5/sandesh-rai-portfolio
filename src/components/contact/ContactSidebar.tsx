"use client";

import { Mail, Globe, ExternalLink, MapPin } from "lucide-react";
import { personalInfo, secondaryEmails } from "@/data/personal";
import { Button } from "@/components/ui/button";

export function ContactSidebar() {
  return (
    <aside className="hidden xl:block fixed right-0 top-20 z-40 w-64">
      <div className="mr-4 rounded-lg border border-border bg-card/80 backdrop-blur-sm p-4 space-y-3 shadow-sm">
        {/* Name & Title */}
        <div>
          <p className="font-semibold text-sm text-primary">{personalInfo.name}</p>
          <p className="text-xs text-muted-foreground leading-snug mt-0.5">
            Climate Change Researcher
          </p>
        </div>

        <div className="h-px bg-border" />

        {/* Primary Email */}
        <a
          href={`mailto:${personalInfo.email}`}
          className="flex items-start gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          <Mail className="h-3.5 w-3.5 text-teal mt-0.5 shrink-0" />
          <span>{personalInfo.email}</span>
        </a>

        {/* Secondary Emails */}
        {secondaryEmails.map((email) => (
          <a
            key={email}
            href={`mailto:${email}`}
            className="flex items-start gap-2 text-xs text-muted-foreground hover:text-primary transition-colors pl-5.5"
          >
            <span>{email}</span>
          </a>
        ))}

        {/* Location */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-teal shrink-0" />
          <span>{personalInfo.location}</span>
        </div>

        <div className="h-px bg-border" />

        {/* Social Links */}
        <div className="flex flex-col gap-2">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <Globe className="h-3.5 w-3.5 text-teal shrink-0" />
            <span>LinkedIn</span>
          </a>
          <a
            href={personalInfo.researchGate}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="h-3.5 w-3.5 text-teal shrink-0" />
            <span>ResearchGate</span>
          </a>
          <a
            href={personalInfo.googleScholar}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="h-3.5 w-3.5 text-teal shrink-0" />
            <span>Google Scholar</span>
          </a>
        </div>

        <div className="h-px bg-border" />

        {/* CTA */}
        <a href="#contact">
          <Button size="sm" variant="outline" className="w-full text-xs">
            Contact Me
          </Button>
        </a>
      </div>
    </aside>
  );
}