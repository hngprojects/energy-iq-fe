import Image from "next/image"

import logo1 from "@/assets/logos/logo1.svg"
import logo2 from "@/assets/logos/logo2.svg"
import logo3 from "@/assets/logos/logo3.svg"
import logo4 from "@/assets/logos/logo4.svg"
import logo5 from "@/assets/logos/logo5.svg"
import logo6 from "@/assets/logos/logo6.svg"
import logo7 from "@/assets/logos/logo7.svg"
import logo8 from "@/assets/logos/logo8.svg"

const logos = [
  { src: logo1, alt: "Logoipsum" },
  { src: logo2, alt: "Quantum" },
  { src: logo3, alt: "Hexalink" },
  { src: logo4, alt: "Apex" },
  { src: logo5, alt: "Logoipsum 2" },
  { src: logo6, alt: "Bubbles" },
  { src: logo7, alt: "Predator" },
  { src: logo8, alt: "Brand Standard" },
]

export function WorksWith() {
  return (
    <section className="bg-muted/60 overflow-hidden">
      <div className="mx-auto max-w-7xl px-2 py-2 md:px-4 md:py-6">
        <p className="text-foreground text-center text-sm font-semibold md:text-base">
          Works with
        </p>

        <div className="mt-6 md:hidden">
          <div className="relative overflow-hidden">
            <div className="animate-marquee flex w-max gap-[82.3px]">
              {[...logos, ...logos].map((logo, i) => (
                <Image
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 w-auto shrink-0"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 hidden grid-cols-4 items-center gap-8 sm:grid md:grid lg:grid-cols-8">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center justify-center">
              <Image src={logo.src} alt={logo.alt} className="h-6 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
