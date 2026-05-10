"use client"

import { AuthInput } from "@/components/auth/auth-input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { useEffect } from "react"

const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>

export function AuthForgotPasswordForm({ onSuccess }: { onSuccess?: () => void }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
  })

  const email = watch("email")
  const isFormFilled = email.length > 0

  useEffect(() => {
    const errorMessages = Object.values(errors)
    if (errorMessages.length > 0) {
      errorMessages.forEach((error) => {
        if (error?.message) {
          toast.error(error.message)
        }
      })
    }
  }, [errors])

  const onSubmit = (data: ForgotPasswordValues) => {
    onSuccess?.()
  }

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <div className="space-y-3 md:space-y-4">
          <AuthInput
            label="Email Address"
            id="email"
            placeholder="Enter your email address"
            type="email"
            {...register("email")}
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-10 md:mt-12 md:gap-16">
        <div className="flex flex-col gap-3 md:flex-row-reverse md:gap-4">
          <Button
            type="submit"
            disabled={!isFormFilled}
            className="bg-secondary hover:bg-secondary/90 h-12 flex-1 rounded-lg px-8 py-4 text-sm font-semibold text-white disabled:opacity-50 md:py-6 md:text-lg"
          >
            Send Reset Link
          </Button>
          <Button
            type="button"
            variant="outline"
            asChild
            className="border-border text-dark-text md:text-md h-12 flex-1 rounded-lg px-4 py-4 text-sm font-semibold hover:bg-slate-50 md:px-8 md:py-6"
          >
            <Link href="/login">Back to Login</Link>
          </Button>
        </div>
      </div>
    </form>
  )
}
