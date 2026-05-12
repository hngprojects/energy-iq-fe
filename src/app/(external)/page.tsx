import { WorksWith } from "@/components/external/brands"
import { Faq } from "@/components/external/faq"
import { Footer } from "@/components/external/footer"
import { Hero } from "@/components/external/hero"
import { HowItWorks } from "@/components/external/how-it-works"
import { Navbar } from "@/components/external/nav-bar"
import Contact from "@/components/external/contact"
import { PricingSection } from "@/components/external/pricing"
import { RequestDemo } from "@/components/external/request-demo"
import { Services } from "@/components/external/services"
import { TestimonialsSection } from "@/components/external/testimonial"

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <Navbar />
      <Hero />
      <section id="features" className="w-full px-6">
        <WorksWith />
        <Services />
      </section>
      <section id="how-it-works" className="w-full px-6">
        <HowItWorks />
      </section>
      <RequestDemo />
      <TestimonialsSection />
      <section id="pricing" className="w-full">
        <PricingSection />
      </section>
      <section id="faq" className="w-full">
        <Faq />
      </section>
      <section id="contact" className="w-full">
        <Contact />
      </section>
      <Footer />
    </div>
  )
}
