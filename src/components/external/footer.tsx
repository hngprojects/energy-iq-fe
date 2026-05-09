import react from "react"
import Image from "next/image"

export const Footer = () => {
  return (
    <footer className="flex w-full justify-center bg-[#1A1F2C] text-white">
      <div className="container mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-16 md:px-12">
        {/* Top Section: Logo and Description */}
        <div className="flex w-full flex-col items-center justify-between border-b border-[#E7E7E7] pb-10 md:flex-row md:items-start">
          <div className="mb-6 flex items-center gap-2 md:mb-0">
            <Image src="/images/logo.svg" alt="Logo" width={24} height={24} />
            <span className="text-xl font-bold">
              ENERGY<span className="text-primary">IQ</span>
            </span>
          </div>
          <div className="max-w-2xl text-center md:text-left">
            <p className="text-base leading-relaxed text-[#E6E6E6]">
              AI-powered energy management & optimization platform for Nigerian SMEs and
              African businesses. Nigeria has the energy problem. We have the intelligence
              solution.
            </p>
          </div>
        </div>

        {/* Middle Section: Links and Newsletter */}
        <div className="mt-12 grid w-full grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Product</h3>
            <ul className="space-y-3 text-base text-[#E6E6E6]">
              <li className="hover:text-primary cursor-pointer">Features</li>
              <li className="hover:text-primary cursor-pointer">Pricing</li>
              <li className="hover:text-primary cursor-pointer">API Integrations</li>
              <li className="hover:text-primary cursor-pointer">Contact</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Company</h3>
            <ul className="space-y-3 text-base text-[#E6E6E6]">
              <li className="hover:text-primary cursor-pointer">About</li>
              <li className="hover:text-primary cursor-pointer">Blog</li>
              <li className="hover:text-primary cursor-pointer">Career</li>
              <li className="hover:text-primary cursor-pointer">News</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Resources</h3>
            <ul className="space-y-3 text-base text-[#E6E6E6]">
              <li className="hover:text-primary cursor-pointer">Use Cases</li>
              <li className="hover:text-primary cursor-pointer">Community</li>
              <li className="hover:text-primary cursor-pointer">Help Centre</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Download</h3>
            <ul className="space-y-3 text-base text-[#E6E6E6]">
              <li className="hover:text-primary cursor-pointer">iOS</li>
              <li className="hover:text-primary cursor-pointer">Android</li>
              <li className="hover:text-primary cursor-pointer">Windows</li>
            </ul>
          </div>
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

        {/* Bottom Section: Copyright and Socials */}
        <div className="mt-16 flex w-full flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
          <p className="mb-6 text-sm text-[#E6E6E6] md:mb-0">
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
