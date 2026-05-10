"use client"

import { AuthInput } from "@/components/auth/auth-input"
import { AuthResetSuccessView } from "@/components/auth/auth-reset-success-view"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { useEffect, useState } from "react"

const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[!@#$%^&*(),.?":{}|<>]/, "Password must include a special character"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

type ResetPasswordValues = z.infer<typeof resetPasswordSchema>

export function AuthResetPasswordForm({ onSuccess }: { onSuccess?: () => void }) {
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ResetPasswordValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  })

  const password = useWatch({
    control,
    name: "password",
    defaultValue: "",
  })
  const confirmPassword = useWatch({
    control,
    name: "confirmPassword",
    defaultValue: "",
  })
  const isFormFilled = password.length > 0 && confirmPassword.length > 0

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

  const onSubmit = () => {
    setIsSuccess(true)
    onSuccess?.()
    window.scrollTo(0, 0)
  }

  if (isSuccess) {
    return <AuthResetSuccessView />
  }

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <div className="space-y-3 md:space-y-4">
          <AuthInput
            label="New Password"
            id="password"
            placeholder="Enter a new password"
            type="password"
            {...register("password")}
          />
          <AuthInput
            label="Confirm New Password"
            id="confirm-password"
            placeholder="Confirm the new password"
            type="password"
            {...register("confirmPassword")}
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-10 md:mt-12 md:gap-16">
        <div className="flex flex-col gap-3 md:flex-row md:gap-4">
          <Button
            type="button"
            variant="outline"
            asChild
            className="border-border text-dark-text md:text-md h-12 w-full rounded-lg px-4 py-4 text-sm font-medium hover:bg-slate-50 sm:flex-1 md:px-8 md:py-6"
          >
            <Link href="/login">Back to Login</Link>
          </Button>
          <Button
            type="submit"
            disabled={!isFormFilled}
            className="bg-secondary hover:bg-secondary/90 h-12 w-full rounded-lg px-8 py-4 text-sm font-semibold text-white disabled:opacity-50 sm:flex-1 md:h-14 md:py-5 md:text-lg"
          >
            Reset Password
          </Button>
        </div>
      </div>
    </form>
  )
}
