import { cn } from "@/lib/utils"
import React from "react"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  fluid?: boolean
}

export const Container = ({
  children,
  className,
  fluid = false,
  ...props
}: ContainerProps) => {
  return (
    <div
      className={cn(
        "container-padding mx-auto w-full",
        fluid ? "max-w-none" : "max-w-7xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
