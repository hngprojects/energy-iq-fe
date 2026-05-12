import TermsAndCondition from "@/components/external/terms-and-condition"
import { Metadata } from "next"
import { Navbar } from "@/components/external/nav-bar"
import { Footer } from "@/components/external/footer"

export const metadata: Metadata = {
  title: "Terms and Conditions | EnergyIQ",
  description: "Terms and conditions for using the EnergyIQ platform.",
}

export default function TermsAndConditionsPage() {
  return (
    <div className="flex w-full flex-col">
      <Navbar />
      <TermsAndCondition />
      <Footer />
    </div>
  )
}
