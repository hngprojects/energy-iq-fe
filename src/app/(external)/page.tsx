import { WorksWith } from "@/components/external/brands"
import { Faq } from "@/components/external/faq"
import { Footer } from "@/components/external/footer"
import { Hero } from "@/components/external/hero"
import { HowItWorks } from "@/components/external/how-it-works"
import { Navbar } from "@/components/external/nav-bar"
import { PricingSection } from "@/components/external/pricing"
import { RequestDemo } from "@/components/external/request-demo"
import { Services } from "@/components/external/services"
import { TestimonialsSection } from "@/components/external/testimonial"

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <Navbar />
      <Hero />
      <div id="features" className="w-full px-[24px]">
        <WorksWith />
        <Services />
      </div>
      <div id="how-it-works" className="w-full px-[24px]">
        <HowItWorks />
      </div>
      <RequestDemo />
      <TestimonialsSection />
      <div id="pricing" className="w-full">
        <PricingSection />
      </div>
      <div id="faq" className="w-full">
        <Faq />
      </div>
      <Footer />
    </div>
  )
}
