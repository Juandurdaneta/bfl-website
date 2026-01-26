"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

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
      {/* BFL Logo */}
      <div className="relative w-12 h-12 flex-shrink-0">
        <Image
          src="/bfl-logo.png"
          alt="Built For Life Financial Agency Logo"
          fill
          className="object-contain"
          priority
        />
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
