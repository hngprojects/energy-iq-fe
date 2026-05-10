import Image from "next/image"
import { Logo } from "../ui/logo"

const footerLinks = [
  {
    title: "Product",
    links: ["Features", "Pricing", "API Integrations", "Contact"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Career", "News"],
  },
  {
    title: "Resources",
    links: ["Use Cases", "Community", "Help Centre"],
  },
  {
    title: "Download",
    links: ["iOS", "Android", "Windows"],
  },
]

export const Footer = () => {
  return (
    <footer className="flex w-full justify-center bg-[#1A1F2C] text-white">
      <div className="container mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-16 md:px-12">
        <div className="flex w-full flex-col items-center justify-between border-b border-gray-700 pb-10 md:flex-row md:items-start">
          <Logo textClassName="text-white" />
          <div className="max-w-2xl text-center md:text-left">
            <p className="text-base leading-relaxed text-[#E6E6E6]">
              AI-powered energy management & optimization platform for Nigerian SMEs and
              African businesses. Nigeria has the energy problem. We have the intelligence
              solution.
            </p>
          </div>
        </div>
        <div className="mt-12 grid w-full grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-6">
              <h3 className="text-lg font-bold">{section.title}</h3>
              <ul className="space-y-3 text-base text-[#E6E6E6]">
                {section.links.map((link) => (
                  <li key={link} className="hover:text-primary cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-1 space-y-6 sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-bold">Subscribe to our newsletter</h3>
            <p className="text-base text-[#E6E6E6]">Enter your email to get updates.</p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-gray-700 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#F5A623]"
              />
              <button className="bg-primary w-full rounded-xl px-6 py-3 font-bold text-[#1A1F2C] transition-colors hover:bg-[#E59513]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-16 flex w-full flex-col items-center justify-between border-t border-gray-700 pt-8 md:flex-row">
          <p className="mb-6 text-sm text-[#e6e6e67b] md:mb-0">
            Copyright © {new Date().getFullYear()} BRIX Templates | All Rights Reserved.
          </p>
          <div className="flex gap-5">
            {["facebook", "twitter", "instagram", "linkedin", "youtube"].map((social) => (
              <a
                key={social}
                href="#"
                className="relative size-5 transition-opacity hover:opacity-80"
                aria-label={social}
              >
                <Image
                  src={`/images/${social}.svg`}
                  alt={social}
                  fill
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
