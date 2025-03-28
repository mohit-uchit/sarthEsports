import React from "react";
import { Card } from "@/components/ui/card";

interface CardWithNeonProps {
  children: React.ReactNode;
  className?: string;
}

export const CardWithNeon: React.FC<CardWithNeonProps> = ({ children, className }) => {
  return (
    <div className={`bg-game-dark-alt rounded-md p-6 relative overflow-hidden neon-border diagonal-slash ${className}`}>
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-game-accent to-transparent opacity-20"></div>
      {children}
    </div>
  );
};
