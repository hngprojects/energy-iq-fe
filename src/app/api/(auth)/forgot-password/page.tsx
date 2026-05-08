"use client"
import { AuthWrapper } from "@/components/layout/AuthWrapper"
import { AuthHeader } from "@/components/auth/AuthHeader"
import { AuthInput } from "@/components/auth/AuthInput"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")

  return (
    <AuthWrapper>
      <AuthHeader
        title="Forgot Your Password"
        subtitle="Enter your email address and we will send you a reset link."
      />

      <form className="space-y-6">
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
              className="active:bg-secondary h-12 flex-1 rounded-[10px] bg-[#F1F1F1] px-8 py-3 text-lg leading-none font-semibold text-[#3A3A3A] hover:bg-[#F1F1F1]/90 active:text-white lg:h-14 lg:py-5"
            >
              Send Reset Link
            </Button>
            <Button
              type="button"
              variant="outline"
              className="border-border bg-background h-12 flex-1 rounded-[10px] px-7 py-3.25 text-lg leading-none font-medium text-[#111827] hover:bg-gray-50 hover:text-[#111827] lg:h-14 lg:px-8 lg:py-5"
            >
              Back to Login
            </Button>
          </div>
        </div>
      </form>
    </AuthWrapper>
  )
}
