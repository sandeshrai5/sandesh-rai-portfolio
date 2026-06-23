"use client";

import { useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { ThemeToggle } from "./ThemeToggle";
import { navItems, personalInfo } from "@/data/personal";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo / Name */}
        <a
          href="#hero"
          className="text-lg font-bold text-primary hover:text-teal transition-colors"
        >
          {personalInfo.name}
        </a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/Sandesh_Rai_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 ml-2 text-sm font-medium text-teal border border-teal/50 rounded-md hover:bg-teal/10 transition-colors flex items-center gap-1.5"
          >
            <FileText className="h-3.5 w-3.5" />
            View CV
          </a>
          <div className="ml-1">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile: hamburger menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="inline-flex items-center justify-center rounded-lg h-9 w-9 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <nav className="flex flex-col gap-1 mt-8">
                {navItems.map((item) => (
                  <SheetClose key={item.href}>
                    <a
                      href={item.href}
                      className="px-3 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  </SheetClose>
                ))}
                <SheetClose>
                  <a
                    href="/Sandesh_Rai_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-3 text-sm font-medium text-teal hover:bg-teal/10 rounded-md transition-colors flex items-center gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    View CV
                  </a>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}