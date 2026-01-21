"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: "light" | "dark";
}

export function Logo({ className, showText = true, variant = "dark" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-primary-blue";
  const subTextColor = variant === "light" ? "text-white/80" : "text-dark-navy";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Logo Icon - Stylized representation of the BFL logo */}
      <div className="relative w-12 h-12 flex-shrink-0">
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Dollar sign and flowing design */}
          <path 
            d="M15 30C15 22 20 15 30 15C35 15 40 18 42 22" 
            stroke="#1E5F8A" 
            strokeWidth="3" 
            strokeLinecap="round"
            fill="none"
          />
          <path 
            d="M45 30C45 38 40 45 30 45C25 45 20 42 18 38" 
            stroke="#1E5F8A" 
            strokeWidth="3" 
            strokeLinecap="round"
            fill="none"
          />
          {/* Dollar sign */}
          <text x="24" y="38" fill="#1E5F8A" fontSize="20" fontWeight="bold" fontFamily="serif">$</text>
          {/* Cross element */}
          <path 
            d="M42 12L52 28M42 28L52 12" 
            stroke="#4CAF50" 
            strokeWidth="4" 
            strokeLinecap="round"
          />
          {/* Wave elements */}
          <path 
            d="M8 42C12 40 16 44 20 42C24 40 28 44 32 42" 
            stroke="#1E5F8A" 
            strokeWidth="2" 
            strokeLinecap="round"
            fill="none"
          />
          <path 
            d="M10 48C14 46 18 50 22 48C26 46 30 50 34 48" 
            stroke="#4CAF50" 
            strokeWidth="2" 
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
      
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={cn("text-xl font-bold tracking-tight font-logo", textColor)}>
            BUILT FOR LIFE
          </span>
          <span className={cn("text-xs font-medium tracking-[0.2em] uppercase", subTextColor)}>
            Financial Agency
          </span>
        </div>
      )}
    </div>
  );
}
