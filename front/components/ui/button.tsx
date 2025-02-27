"use client"

import type React from "react"

type ButtonProps = {
  onClick?: () => void
  children: React.ReactNode
  size?: "sm" | "md" | "lg"
  variant?: "default" | "outline" | "ghost"
  className?: string
}

export const Button = ({ onClick, children, size = "md", variant = "default", className }: ButtonProps) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const variantClasses = {
    default: "bg-gradient-to-r from-brand-gradient-from via-brand-gradient-via to-brand-gradient-to text-white",
    outline: "border border-white text-white hover:bg-white/10",
    ghost: "text-white hover:bg-white/10",
  }

  return (
    <button
      onClick={onClick}
      className={`${sizeClasses[size]} rounded-lg ${variantClasses[variant]} ${className} transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring`}
    >
      {children}
    </button>
  )
}

export default Button

