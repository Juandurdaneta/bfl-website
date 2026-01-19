"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  light?: boolean;
  className?: string;
}

export function StatCard({
  value,
  label,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 2,
  light = false,
  className,
}: StatCardProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setDisplayValue(easeOutQuart * value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  const formattedValue = decimals > 0
    ? displayValue.toFixed(decimals)
    : Math.floor(displayValue).toLocaleString();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "text-center p-6",
        className
      )}
    >
      <div
        className={cn(
          "text-4xl md:text-5xl font-bold font-heading mb-2",
          light ? "text-white" : "text-primary-blue"
        )}
      >
        {prefix}{formattedValue}{suffix}
      </div>
      <div
        className={cn(
          "text-sm md:text-base font-medium",
          light ? "text-white/80" : "text-warm-gray"
        )}
      >
        {label}
      </div>
    </motion.div>
  );
}
