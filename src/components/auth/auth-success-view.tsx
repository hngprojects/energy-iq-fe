"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AuthSuccessView() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4 lg:flex-row-reverse">
        <Button
          type="button"
          className="bg-border-disabled text-dark-text hover:bg-border-disabled/90 h-12 flex-1 rounded-lg px-8 py-3 text-lg leading-none font-semibold lg:h-14 lg:py-5"
        >
          Resend Link
        </Button>
        <Button
          type="button"
          variant="outline"
          asChild
          className="border-border-disabled bg-surface-white text-dark-text hover:bg-surface-white/90 h-12 flex-1 rounded-lg border px-7 py-3.25 text-lg leading-none font-medium lg:h-14 lg:px-8 lg:py-5"
        >
          <Link href="/login">Back to Login</Link>
        </Button>
      </div>
    </div>
  )
}
