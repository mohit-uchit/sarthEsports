import React from "react";
import { cn } from "../../lib/utils";

interface CardWithNeonProps {
  children: React.ReactNode;
  className?: string;
}

export const CardWithNeon: React.FC<CardWithNeonProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative bg-gray-900/80 rounded-lg shadow-xl border border-cyan-900/30 overflow-hidden group",
        className
      )}
    >
      {/* Neon glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-lg blur"></div>
      
      {/* Card content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};