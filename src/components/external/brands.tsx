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
    <section className="bg-muted/60 w-full overflow-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-100%);
              }
            }

            .animate-local-marquee {
              display: flex;
              width: max-content;
              animation: marquee 18s linear infinite;
            }
          `,
        }}
      />

      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-6 md:px-6 md:py-8">
        <p className="text-foreground text-center text-sm font-semibold md:text-base">
          Works with
        </p>

        {/* MOBILE MARQUEE */}
        <div className="mt-6 overflow-hidden md:hidden">
          <div className="relative w-full overflow-hidden">
            <div className="animate-local-marquee gap-8">
              {/* single set repeated once for smooth loop */}
              {[...logos, ...logos].map((logo, i) => (
                <div key={i} className="flex shrink-0 items-center justify-center px-2">
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
        </div>

        {/* DESKTOP GRID */}
        <div className="mt-8 hidden grid-cols-4 gap-8 sm:grid lg:grid-cols-8">
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
