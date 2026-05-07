import React from "react"
import { Container } from "../layout/Container"
import { Section } from "../layout/Section"
import Image, { StaticImageData } from "next/image"
import services_1 from "@/assets/services_1.png"
import services_2 from "@/assets/services_2.png"
import services_3 from "@/assets/services_3.png"

interface ServiceCardProps {
  title: string
  description: string
  image: StaticImageData
}

const ServiceCard = ({ title, description, image }: ServiceCardProps) => {
  return (
    <div className="group overflow-hidden rounded-[12px] bg-[#111928] shadow-xl">
      {/* Top half: Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Bottom half: Content */}
      <div className="flex items-center justify-between gap-4 p-8 pb-10">
        <div className="space-y-2">
          <h3 className="text-xl font-bold tracking-tight text-white">{title}</h3>
          <p className="text-muted-foreground leading-relaxed text-white">
            {description}
          </p>
        </div>

        {/* Circular Arrow Button */}
        <button className="bg-primary text-secondary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export const Services = () => {
  const services = [
    {
      title: "AI Energy Agent",
      description: "Ask questions in plain english",
      image: services_3,
    },
    {
      title: "Naira Savings Tracker",
      description: "Track daily savings vs diesel payback",
      image: services_2,
    },
    {
      title: "Whatsapp Native Alerts",
      description: "GetAlerts on battery and panel fault",
      image: services_1,
    },
  ]

  return (
    <Section variant="default" className="bg-white py-24">
      <Container>
        {/* Header Section */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-h2 max-w-xl leading-tight font-bold">
            Everything your <br />
            <span className="text-primary">Energy</span> System Needs
          </h2>
          <div className="bg-primary text-secondary shadow-primary/20 w-fit rounded-[12px] px-6 py-3 text-sm font-bold shadow-lg">
            Services
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
