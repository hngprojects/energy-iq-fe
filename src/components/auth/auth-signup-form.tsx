"use client"

import { AuthInput } from "@/components/auth/auth-input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AuthSignupForm() {
  return (
    <form className="space-y-6">
      <div className="space-y-4">
        <AuthInput
          label="Enter Full Name"
          id="fullname"
          placeholder="Enter your name"
          type="text"
        />
        <AuthInput
          label="Email Address"
          id="email"
          placeholder="Enter your email address"
          type="email"
        />
        <AuthInput
          label="Password"
          id="password"
          placeholder="************"
          type="password"
        />
      </div>

      <div className="space-y-4">
        <Button
          type="submit"
          className="h-12 w-full bg-[#111827] font-medium text-white hover:bg-[#111827]/90"
        >
          Create Account
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-[#E5E7EB]" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 font-medium text-[#9CA3AF]">OR</span>
          </div>
        </div>

        <Button variant="google" className="h-12 w-full">
          Continue with Google
        </Button>
      </div>

      <div className="space-y-4 text-center">
        <p className="mx-auto max-w-[320px] text-xs leading-relaxed text-[#6B7280]">
          By signing up, you agree to our{" "}
          <Link href="/terms" className="font-semibold text-[#111827] hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="font-semibold text-[#111827] hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </form>
  )
}
