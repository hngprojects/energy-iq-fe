"use client"
import Image from "next/image"
import Link from "next/link"
import AuthShape from "@/assets/images/AuthShape.png"
import AuthShapeMobile from "@/assets/images/Auth-shape-mobile.png"
import Logo from "@/assets/logo.svg"
import { ReactNode } from "react"

interface AuthWrapperProps {
  children: ReactNode
}

export function AuthWrapper({ children }: AuthWrapperProps) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-6 py-12 xl:px-[81px] xl:pt-[66px]">
      <div className="pointer-events-none absolute bottom-0 left-0 hidden lg:block">
        <Image src={AuthShape} alt="" priority />
      </div>
      <div className="pointer-events-none absolute top-0 left-0 lg:hidden">
        <Image src={AuthShapeMobile} alt="" />
      </div>
      <div className="absolute top-8 left-1/2 z-20 -translate-x-1/2 lg:left-8 lg:translate-x-0 xl:top-[66px] xl:left-[81px]">
        <Link
          href="/"
          className="font-display text-foreground flex items-center gap-2 text-lg font-bold"
        >
          <div className="relative h-8 w-8 overflow-hidden rounded-full">
            <Image
              src={Logo}
              alt="EnergyIQ Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="tracking-tight text-[#111827]">
            ENERGY<span className="text-primary">IQ</span>
          </span>
        </Link>
      </div>
      <div className="relative z-10 mt-12 w-full max-w-[480px] lg:mt-0">{children}</div>
    </div>
  )
}
