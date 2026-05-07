import type { Metadata } from "next"
import { Geist, Geist_Mono, DM_Sans, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { env } from "@/env/client"

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" })

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: {
    default: env.NEXT_PUBLIC_APP_NAME,
    template: `%s · ${env.NEXT_PUBLIC_APP_NAME}`,
  },
  description: `${env.NEXT_PUBLIC_APP_NAME} — a Next.js 16 starter.`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        dmSans.variable,
        plusJakartaSans.variable,
        "font-sans"
      )}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
