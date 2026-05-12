import HowItWorks from "@/components/external/how-it-works"
import { Metadata } from "next"
import { Navbar } from "@/components/external/nav-bar"
import { Footer } from "@/components/external/footer"

export const metadata: Metadata = {
  title: "How It Works | EnergyIQ",
  description: "Learn how the EnergyIQ platform works.",
}

export default function HowItWorksPage() {
  return (
    <div className="flex w-full flex-col">
      <Navbar />
      <HowItWorks />
      <Footer />
    </div>
  )
}
