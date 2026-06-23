"use client";

import { motion } from "framer-motion";
import { ArrowDown, BookOpen, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/personal";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-teal/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        {/* Profile photo placeholder */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-secondary border-4 border-teal/30 flex items-center justify-center text-muted-foreground text-4xl font-bold">
            SR
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 text-lg sm:text-xl text-teal font-medium"
        >
          Climate Change Researcher | GIS &amp; Remote Sensing Analyst
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          {personalInfo.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#projects">
            <Button size="lg">
              <BookOpen className="mr-2 h-4 w-4" />
              View Research
            </Button>
          </a>
          <a href="#contact">
            <Button size="lg" variant="outline">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16"
        >
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-1 text-muted-foreground hover:text-teal transition-colors"
          >
            <span className="text-xs">Scroll Down</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}