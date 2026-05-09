"use client"

import { AuthInput } from "@/components/auth/auth-input"
import { AuthResetSuccessView } from "@/components/auth/auth-reset-success-view"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export function AuthResetPasswordForm({ onSuccess }: { onSuccess?: () => void }) {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const passwordSpecs = {
    isValid: password.length >= 8 && /[!@#$%^&*(),.?":{}|<>]/.test(password),
    matches: password === confirmPassword && confirmPassword.length > 0,
  }

  const getPasswordError = () => {
    if (!isSubmitted && password.length === 0) return undefined
    if (!passwordSpecs.isValid && password.length > 0) {
      return "Password must be at least 8 characters and include a special key"
    }
    return undefined
  }

  const getConfirmError = () => {
    if (!isSubmitted && confirmPassword.length === 0) return undefined
    if (!passwordSpecs.matches && confirmPassword.length > 0) {
      return "Passwords do not match"
    }
    return undefined
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    if (passwordSpecs.isValid && passwordSpecs.matches) {
      setIsSuccess(true)
      onSuccess?.()
      window.scrollTo(0, 0)
    }
  }

  if (isSuccess) {
    return <AuthResetSuccessView />
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <div className="space-y-4">
          <div className="space-y-1">
            <AuthInput
              label="New Password"
              id="password"
              placeholder="Enter a new password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={getPasswordError()}
              isSuccess={passwordSpecs.isValid}
            />
          </div>
          <div className="space-y-1">
            <AuthInput
              label="Confirm New Password"
              id="confirm-password"
              placeholder="Confirm the new password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={getConfirmError()}
              isSuccess={passwordSpecs.matches && passwordSpecs.isValid}
            />
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-16">
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            type="button"
            variant="outline"
            asChild
            className="border-border bg-border-disabled text-dark-text hover:bg-slate-10 h-14 w-full rounded-lg px-8 py-5 text-lg leading-none font-medium sm:flex-1"
          >
            <Link href="/login">Back to Login</Link>
          </Button>
          <Button
            type="submit"
            className="border-border-disabled bg-surface-white text-dark-text hover:bg-surface-white/90 h-14 w-full rounded-lg border px-8 py-5 text-lg leading-none font-semibold sm:flex-1"
          >
            Reset Password
          </Button>
        </div>
      </div>
    </form>
  )
}
