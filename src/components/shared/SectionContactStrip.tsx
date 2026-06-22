import { Mail, ArrowDown } from "lucide-react";
import { personalInfo, secondaryEmails } from "@/data/personal";

export function SectionContactStrip() {
  return (
    <div className="bg-contact-strip py-3 mt-12 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Mail className="h-3.5 w-3.5 text-teal" />
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-primary transition-colors"
            >
              {personalInfo.email}
            </a>
          </div>
          {secondaryEmails.map((email) => (
            <a
              key={email}
              href={`mailto:${email}`}
              className="text-muted-foreground hover:text-primary transition-colors text-xs"
            >
              {email}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="flex items-center gap-1 text-teal hover:text-primary font-medium transition-colors"
        >
          Get in Touch
          <ArrowDown className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}