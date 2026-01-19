"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  expandedContent?: string;
  className?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  expandedContent,
  className,
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-blue to-primary-blue-light flex items-center justify-center flex-shrink-0">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-dark-navy mb-2">{title}</h3>
          <p className="text-warm-gray leading-relaxed">{description}</p>
        </div>
      </div>

      {expandedContent && (
        <>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 flex items-center gap-2 text-primary-blue font-medium hover:text-primary-blue-dark transition-colors cursor-pointer"
          >
            <span>{isExpanded ? "Show Less" : "Learn More"}</span>
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown size={18} />
            </motion.span>
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-4 pt-4 border-t border-gray-100 text-warm-gray leading-relaxed">
                  {expandedContent}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </motion.div>
  );
}
