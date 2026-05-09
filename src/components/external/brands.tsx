"use client"
import Image from "next/image"

const logos = [
  { src: "/images/logo1.svg", alt: "Logoipsum" },
  { src: "/images/logo2.svg", alt: "Quantum" },
  { src: "/images/logo3.svg", alt: "Hexalink" },
  { src: "/images/logo4.svg", alt: "Apex" },
  { src: "/images/logo5.svg", alt: "Logoipsum 2" },
  { src: "/images/logo6.svg", alt: "Bubbles" },
  { src: "/images/logo7.svg", alt: "Predator" },
  { src: "/images/logo8.svg", alt: "Brand Standard" },
]

export function WorksWith() {
  return (
    <section className="w-full bg-[#F9FAFBA6]/65 py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <p className="text-secondary mb-10 text-center text-sm font-semibold tracking-wide uppercase md:text-base">
          Works with
        </p>

        <div className="relative overflow-hidden md:hidden">
          <div className="animate-marquee flex py-4 whitespace-nowrap">
            {logos.map((logo, i) => (
              <div key={i} className="mx-6 flex shrink-0 items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={40}
                  className="h-10 w-auto opacity-70 transition-opacity hover:opacity-100"
                />
              </div>
            ))}
            {logos.map((logo, i) => (
              <div
                key={`dup-${i}`}
                className="mx-6 flex shrink-0 items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={32}
                  className="h-6 w-auto opacity-70 transition-opacity hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="hidden grid-cols-4 items-center gap-12 md:grid lg:grid-cols-8">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={32}
                className="h-6 w-auto opacity-70 transition-opacity hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
