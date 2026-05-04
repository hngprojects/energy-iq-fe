import React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  variant?: "default" | "muted" | "dark" | "surface"
}

export const Section = ({
  children,
  className,
  variant = "default",
  ...props
}: SectionProps) => {
  const variantClasses = {
    default: "bg-background text-foreground",
    muted: "bg-muted text-foreground",
    dark: "bg-secondary text-secondary-foreground",
    surface: "bg-surface text-foreground",
  }

  return (
    <section
      className={cn("section-padding", variantClasses[variant], className)}
      {...props}
    >
      {children}
    </section>
  )
}
