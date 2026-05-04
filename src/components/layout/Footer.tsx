import React from "react"
import { Container } from "./Container"

export const Footer = () => {
  return (
    <footer className="border-t py-10">
      <Container>
        <p className="text-muted-foreground text-center text-sm">
          © {new Date().getFullYear()} EnergyIQ. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
