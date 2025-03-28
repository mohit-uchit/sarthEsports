import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "font-orbitron text-sm uppercase tracking-wider transition-all",
  {
    variants: {
      variant: {
        primary: "bg-game-accent hover:bg-game-accent-hover text-black",
        secondary: "border border-game-blue text-game-blue hover:bg-game-blue-dim",
        outline: "border border-game-blue-dim text-white hover:border-game-blue",
      },
      size: {
        default: "px-4 py-2 rounded-sm",
        lg: "px-6 py-3 rounded-sm",
        sm: "px-2 py-1 rounded-sm text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

CustomButton.displayName = "CustomButton";

export { CustomButton, buttonVariants };
