"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadlineProps {
  title: ReactNode;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeadline({
  title,
  subtitle,
  centered = false,
  light = false,
  className,
}: SectionHeadlineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12",
        centered && "text-center",
        className
      )}
    >
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-4",
          light ? "text-white" : "text-dark-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-lg md:text-xl max-w-3xl",
            centered && "mx-auto",
            light ? "text-white/80" : "text-warm-gray"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
