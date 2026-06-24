"use client";

import { Mail, MapPin, Globe, ExternalLink, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { personalInfo, secondaryEmails } from "@/data/personal";

export function ContactSection() {
  return (
    <SectionWrapper
      id="contact"
      title="Contact Me"
      subtitle="Interested in collaboration, research opportunities, or have questions? Reach out!"
    >
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Info */}
        <ScrollReveal direction="left">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I am open to research collaborations, PhD opportunities, and professional positions in climate change, water resources, and geospatial sciences. Feel free to reach out through any of the channels below.
            </p>

            <div className="space-y-4">
              {/* Primary Email */}
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-teal mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                  {secondaryEmails.map((email) => (
                    <div key={email}>
                      <a
                        href={`mailto:${email}`}
                        className="text-xs text-muted-foreground hover:text-primary transition-colors"
                      >
                        {email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-teal mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Location</p>
                  <p className="text-sm text-muted-foreground">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              <Separator />

              {/* Social Links */}
              <div className="space-y-3">
                <p className="text-sm font-medium text-foreground">Profiles</p>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Globe className="h-4 w-4 text-teal" />
                  <span>LinkedIn</span>
                  <ExternalLink className="h-3 w-3 ml-auto opacity-50" />
                </a>

                <a
                  href={personalInfo.researchGate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="h-4 w-4 text-teal" />
                  <span>ResearchGate</span>
                  <ExternalLink className="h-3 w-3 ml-auto opacity-50" />
                </a>

                <a
                  href={personalInfo.googleScholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="h-4 w-4 text-teal" />
                  <span>Google Scholar</span>
                  <ExternalLink className="h-3 w-3 ml-auto opacity-50" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Contact Form */}
        <ScrollReveal direction="right">
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="What's this about?"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message..."
                rows={5}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}