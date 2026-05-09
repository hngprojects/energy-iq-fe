"use client"

import { AuthInput } from "@/components/auth/auth-input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export function AuthForgotPasswordForm({ onSuccess }: { onSuccess?: () => void }) {
  const [email, setEmail] = useState("")

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    onSuccess?.()
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <div className="space-y-4">
          <AuthInput
            label="Email Address"
            id="email"
            placeholder="Enter your email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-16">
        <div className="flex flex-col gap-4 lg:flex-row-reverse">
          <Button
            type="submit"
            className="bg-border-disabled hover:bg-border-disabled/90 h-12 flex-1 rounded-lg px-8 py-3 text-lg leading-none font-semibold text-[#111827] lg:h-14 lg:py-5"
          >
            Send Reset Link
          </Button>
          <Button
            type="button"
            variant="outline"
            asChild
            className="border-border-disabled bg-surface-white hover:bg-surface-white/90 h-12 flex-1 rounded-lg border px-7 py-3.25 text-lg leading-none font-medium text-[#111827] lg:h-14 lg:px-8 lg:py-5"
          >
            <Link href="/login">Back to Login</Link>
          </Button>
        </div>
      </div>
    </form>
  )
}
