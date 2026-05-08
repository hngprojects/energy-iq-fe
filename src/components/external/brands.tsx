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
                  width={32}
                  height={32}
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
              <Image
                src={logo.src}
                alt={logo.alt}
                width={32}
                height={32}
                className="h-6 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
