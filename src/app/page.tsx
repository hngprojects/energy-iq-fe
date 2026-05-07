import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/components/sections/hero"
import { WorksWith } from "@/components/sections/works-with"

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <>
        <Navbar />
        <Hero />
        <WorksWith />
      </>
    </div>
  )
}
