import React from "react"

import { Button } from "../ui/button"
import Image, { StaticImageData } from "next/image"
import how_1 from "@/assets/how_it_works_1.png"
import how_2 from "@/assets/how_it_works_2.png"
import how_3 from "@/assets/how_it_works_3.png"

interface StepCardProps {
  title: string
  description: string
  image: StaticImageData
}

const StepCard = ({ title, description, image }: StepCardProps) => {
  return (
    <div className="group bg-dark-alt overflow-hidden rounded-[12px] shadow-xl">
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-8 pb-12">
        <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export const HowItWorks = () => {
  const steps = [
    {
      title: "Select your Inverter type",
      description:
        "Hundreds of integrations available from our wide range of inverter types.",
      image: how_1,
    },
    {
      title: "Connect your Inverter",
      description: "Establish inverter connection through API keys.",
      image: how_2,
    },
    {
      title: "Move to Dashboard",
      description: "View and manage inverter metrics that matter to you.",
      image: how_3,
    },
  ]

  return (
    <section className="section-padding text-foreground bg-[#F7F7F799] py-24">
      <div className="container-padding mx-auto w-full max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <h2 className="text-h1 font-bold">
            How it <span className="text-primary">Works</span>
          </h2>

          <Button
            size="lg"
            className="bg-primary text-secondary hover:bg-primary/90 w-fit rounded-xl px-8 font-bold"
          >
            Try for Free
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              title={step.title}
              description={step.description}
              image={step.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
