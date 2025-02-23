"use client";

import * as React from "react"
import { cn } from "@/lib/utils"
import siteData from "@/data/siteData.json"

interface ButtonProps {
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({ onClick, style, className, children, variant = "default", size = "md" }) => {
  const { cores } = siteData;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      style={style}
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
        size === "sm" && "px-2 py-1",
        size === "md" && "px-4 py-2",
        size === "lg" && "px-6 py-3",
        variant === "default" && `bg-[${cores.buttonDefaultBackground}] text-[${cores.buttonText}] hover:bg-[${cores.buttonHover}]`,
        variant === "secondary" && `bg-[${cores.buttonSecondaryBackground}] text-[${cores.buttonText}] hover:bg-[${cores.buttonHover}]`,
        variant === "outline" && `border border-[${cores.buttonOutlineBorder}] bg-[${cores.background}] hover:bg-[${cores.buttonHover}] hover:text-[${cores.buttonText}]`,
        className,
      )}
    >
      {children}
    </button>
  )
}
Button.displayName = "Button"

