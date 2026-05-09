"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AuthResetSuccessView() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-12 flex flex-col space-y-2">
        <h1 className="text-dark-text text-3xl font-bold tracking-tight">
          You’re All Set
        </h1>
        <p className="text-grey-dark text-base">
          Your password has been updated successfully. Sign in.
        </p>
      </div>

      <div className="flex w-full justify-end">
        <Button
          asChild
          className="bg-dark-alt hover:bg-dark-alt/90 h-[54px] w-full max-w-[247px] rounded-[var(--radius)] px-16 py-2 text-lg leading-none font-semibold text-white sm:w-auto"
        >
          <Link href="/login">Sign In</Link>
        </Button>
      </div>
    </div>
  )
}
