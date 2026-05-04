"use client"

import React from "react"
import { Container } from "./Container"

export const Navbar = () => {
  return (
    <nav className="flex h-20 items-center border-b">
      <Container>
        <h1 className="text-xl font-bold">EnergyIQ</h1>
      </Container>
    </nav>
  )
}
