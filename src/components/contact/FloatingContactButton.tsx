"use client";

import { useState } from "react";
import { Mail, X, ExternalLink, Globe, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/personal";

export function FloatingContactButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="xl:hidden fixed bottom-6 right-6 z-50">
      {/* Popup card */}
      {open && (
        <div className="absolute bottom-16 right-0 w-72 rounded-lg border border-border bg-card shadow-lg p-4 space-y-3">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-sm text-primary">{personalInfo.name}</p>
            <button
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="h-px bg-border" />

          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-3.5 w-3.5 text-teal shrink-0" />
            <span>{personalInfo.email}</span>
          </a>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-teal shrink-0" />
            <span>{personalInfo.location}</span>
          </div>

          <div className="flex flex-col gap-1.5">
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

          <a href="#contact" onClick={() => setOpen(false)}>
            <Button size="sm" className="w-full text-xs">
              <Mail className="mr-1.5 h-3.5 w-3.5" />
              Contact Me
            </Button>
          </a>
        </div>
      )}

      {/* Floating button */}
      <Button
        size="icon"
        className="h-12 w-12 rounded-full shadow-lg bg-teal hover:bg-teal/90 text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? <X className="h-5 w-5" /> : <Mail className="h-5 w-5" />}
      </Button>
    </div>
  );
}