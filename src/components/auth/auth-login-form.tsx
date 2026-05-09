"use client"

import { AuthInput } from "@/components/auth/auth-input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export function AuthLoginForm() {
  const [rememberMe, setRememberMe] = useState(true)

  return (
    <form className="space-y-6">
      <div className="flex flex-col gap-2">
        <div className="space-y-4">
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

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="relative h-4 w-4 cursor-pointer appearance-none rounded-sm border border-[#FBC85A] transition-colors before:absolute before:inset-0 before:flex before:items-center before:justify-center before:text-[10px] before:font-bold before:text-white before:content-[''] checked:bg-[#FBC85A] checked:before:content-['✔'] focus:outline-none"
            />
            <label
              htmlFor="remember"
              className="cursor-pointer text-base leading-none font-light text-[#908F90]"
            >
              Remember Password
            </label>
          </div>
          <Link
            href="/forgot-password"
            className="text-sm leading-none font-semibold text-[#F5A62399] hover:text-[#F5A623]"
          >
            Forgot Password
          </Link>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-16">
        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            asChild
            className="border-border h-14 flex-1 rounded-[10px] px-8 py-5 text-lg leading-none font-medium text-[#111827] hover:bg-gray-50"
          >
            <Link href="/signup">Sign Up</Link>
          </Button>
          <Button
            type="submit"
            className="h-14 flex-1 rounded-[10px] bg-[#111827] px-8 py-5 text-lg leading-none font-semibold text-white hover:bg-[#111827]/90 active:bg-[#F1F1F1] active:text-[#3A3A3A]"
          >
            Sign In
          </Button>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="border-border w-full border-t" />
            </div>
            <div className="relative flex justify-center text-base">
              <span className="bg-[#f4f5f6] px-2 font-normal text-[#2A2F3C]">OR</span>
            </div>
          </div>

          <Button variant="google" className="h-12 w-full">
            Continue with Google
          </Button>
        </div>

        <div className="flex flex-col gap-4 text-center">
          <p className="text-base font-normal text-[#6B7280]">
            Don’t have an account?{" "}
            <Link
              href="/signup"
              className="font-semibold text-[#F5A623] capitalize hover:underline"
            >
              Create One
            </Link>
          </p>

          <p className="text-base leading-none font-normal text-[#6B7280] capitalize">
            By signing in, you agree to our{" "}
            <Link href="/terms" className="font-bold text-[#6B7280] hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="font-bold text-[#6B7280] hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </form>
  )
}
