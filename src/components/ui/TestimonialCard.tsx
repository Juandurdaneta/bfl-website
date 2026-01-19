"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title?: string;
  rating?: number;
  className?: string;
}

export function TestimonialCard({
  quote,
  name,
  title,
  rating = 5,
  className,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative",
        className
      )}
    >
      <Quote className="absolute top-6 right-6 w-12 h-12 text-primary-blue/10" />
      
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      
      <p className="text-dark-navy text-lg leading-relaxed mb-6 relative z-10">
        &ldquo;{quote}&rdquo;
      </p>
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-blue to-primary-green flex items-center justify-center text-white font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-dark-navy">{name}</p>
          {title && <p className="text-sm text-warm-gray">{title}</p>}
        </div>
      </div>
    </motion.div>
  );
}
