"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { StarIcon } from "@hugeicons/core-free-icons"
import Image from "next/image"

interface Testimonial {
  id: string
  text: string
  rating: number
  author: {
    name: string
    title: string
    image: string
  }
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    text: "With EnergyIQ I finally see where my solar underperforms and i get the alert on my WhatsApp before my freezers go off.",
    rating: 5,
    author: {
      name: "Amaka",
      title: "SME Owner",
      image: "/images/testimonial_01.png",
    },
  },
  {
    id: "2",
    text: "My clients used to disturb me every week, now I onboard them on EnergyIQ and i get to have my weekends.",
    rating: 5,
    author: {
      name: "Tunde",
      title: "Installer",
      image: "/images/testimonial_02.png",
    },
  },
  {
    id: "3",
    text: "Eight rural sites, 3 states. I cannot dispatch a tech for every flicker. EnergyIQ tells me where the real fault is ahead of time.",
    rating: 5,
    author: {
      name: "Emeka",
      title: "EPC Contractor",
      image: "/images/testimonial_03.png",
    },
  },
]

export function TestimonialsSection() {
  return (
    <section className="w-full bg-[#FFFFFF1A] px-4 py-5 lg:py-25">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row lg:items-end">
          <div>
            <h2 className="text-title1 mb-1 leading-tight font-semibold lg:text-5xl">
              Meet the companies
              <br />
              <span className="text-[#E08A1E]">leveling</span> up with EnergyIQ
            </h2>
          </div>

          <button
            type="button"
            className="border-secondary hover:bg-secondary text-secondary shrink-0 cursor-pointer rounded-xl border px-6 py-4 text-sm font-medium transition-colors hover:text-white md:text-base"
          >
            Read More Stories
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-[10px] border border-[#E7E7E7] bg-[#FDFDFD] px-5.5 py-8 transition-all hover:shadow-md"
            >
              <div className="mb-7.5 flex">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <HugeiconsIcon
                    key={i}
                    icon={StarIcon}
                    size={20}
                    className="fill-[#E08A1E] text-[#E08A1E]"
                  />
                ))}
              </div>

              <p className="mb-7 text-base leading-relaxed text-gray-700">
                {testimonial.text}
              </p>

              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.author.image}
                  alt={testimonial.author.name}
                  className="size-12 rounded-full object-cover"
                  width={48}
                  height={48}
                />
                <div className="text-[#2A2F3C]">
                  <p className="text-base font-semibold md:text-lg">
                    {testimonial.author.name}
                  </p>
                  <p className="text-sm md:text-base">{testimonial.author.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
