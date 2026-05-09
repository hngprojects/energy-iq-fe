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
          className="border-border-disabled bg-surface-white text-dark-text hover:bg-surface-white/90 h-14 w-full rounded-lg border px-8 py-5 text-lg leading-none font-semibold"
        >
          Create Account
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="border-border w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background text-muted-foreground px-2 font-medium">
              OR
            </span>
          </div>
        </div>

        <Button variant="google" className="h-12 w-full">
          Continue with Google
        </Button>
      </div>

      <div className="space-y-4 text-center">
        <p className="text-grey-light mx-auto max-w-[320px] text-xs leading-relaxed">
          By signing up, you agree to our{" "}
          <Link href="/terms" className="text-dark-text font-semibold hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-dark-text font-semibold hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </form>
  )
}
