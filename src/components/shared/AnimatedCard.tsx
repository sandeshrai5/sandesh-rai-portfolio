"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedCard({
  children,
  className = "",
  delay = 0,
}: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      <Card className="group overflow-hidden border-border/50 hover:border-teal/50 hover:shadow-lg hover:shadow-teal/5 transition-all duration-300 hover:-translate-y-1 {className}">
        <CardContent className="p-6">{children}</CardContent>
      </Card>
    </motion.div>
  );
}