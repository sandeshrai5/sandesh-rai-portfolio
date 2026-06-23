import { Heart } from "lucide-react";
import { personalInfo } from "@/data/personal";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <p className="mt-1 flex items-center justify-center gap-1">
          Built with <Heart className="h-3 w-3 text-teal" /> using Next.js
        </p>
      </div>
    </footer>
  );
}