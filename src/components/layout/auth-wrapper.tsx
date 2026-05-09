"use client"
import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"

const AuthShape = "/images/auth-shape.png"
const AuthShapeMobile = "/images/auth-shape-mobile.png"
const LogoImg = "/images/logo.svg"

interface AuthWrapperProps {
  children: ReactNode
}

export function AuthWrapper({ children }: AuthWrapperProps) {
  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-x-hidden bg-white px-6 pb-12 xl:px-20.25">
      <div className="pointer-events-none absolute bottom-0 left-0 hidden lg:block">
        <Image
          src={AuthShape}
          alt=""
          width={1000}
          height={1000}
          className="h-auto w-full object-contain"
          priority
        />
      </div>
      <div className="pointer-events-none absolute top-0 left-0 lg:hidden">
        <Image
          src={AuthShapeMobile}
          alt=""
          width={400}
          height={400}
          className="h-auto w-full object-contain"
        />
      </div>
      <div className="absolute top-8 left-1/2 z-20 -translate-x-1/2 lg:left-8 lg:translate-x-0 xl:top-16.5 xl:left-20.25">
        <Link
          href="/"
          className="font-display text-foreground flex items-center gap-2 text-lg font-bold"
        >
          <div className="relative h-8 w-8 overflow-hidden rounded-full">
            <Image
              src={LogoImg}
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
      <div className="relative z-10 w-full max-w-120">{children}</div>
    </div>
  )
}
