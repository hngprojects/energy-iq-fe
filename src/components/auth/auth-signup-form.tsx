"use client"

import { AuthInput } from "@/components/auth/auth-input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema, RegisterFormValues } from "@/lib/schemas/auth"
import { useAuthQueries } from "@/hooks/use-auth-queries"

export function AuthSignupForm() {
  const { useRegister } = useAuthQueries()
  const registerMutation = useRegister()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
  })

  const onSubmit = (data: RegisterFormValues) => {
    registerMutation.mutate(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <AuthInput
            label="First Name"
            id="firstName"
            placeholder="Enter first name"
            type="text"
            {...register("firstName")}
            error={errors.firstName?.message}
          />
          <AuthInput
            label="Last Name"
            id="lastName"
            placeholder="Enter last name"
            type="text"
            {...register("lastName")}
            error={errors.lastName?.message}
          />
        </div>
        <AuthInput
          label="Email Address"
          id="email"
          placeholder="Enter your email address"
          type="email"
          {...register("email")}
          error={errors.email?.message}
        />
        <AuthInput
          label="Password"
          id="password"
          placeholder="************"
          type="password"
          {...register("password")}
          error={errors.password?.message}
        />
      </div>

      <div className="mt-12 flex flex-col gap-16">
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            type="button"
            variant="outline"
            asChild
            className="border-border-disabled bg-surface-white text-dark-text hover:bg-surface-white/90 h-14 w-full rounded-lg border px-8 py-5 text-lg leading-none font-semibold sm:flex-1"
          >
            <Link href="/login">Sign In</Link>
          </Button>
          <Button
            type="submit"
            disabled={registerMutation.isPending}
            className="border-border bg-border-disabled text-dark-text hover:bg-slate-10 h-14 w-full rounded-lg px-8 py-5 text-lg leading-none font-medium sm:flex-1"
          >
            {registerMutation.isPending ? "Creating..." : "Create Account"}
          </Button>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="border-border w-full border-t" />
            </div>
            <div className="relative flex justify-center text-base">
              <span className="bg-slate-10 px-2 font-normal text-[#2A2F3C]">OR</span>
            </div>
          </div>

          <Button variant="google" className="h-12 w-full">
            Continue with Google
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 text-center">
        <p className="text-grey-light text-base font-normal">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-amber-50 capitalize hover:underline"
          >
            Sign In
          </Link>
        </p>

        <p className="text-grey-light text-base leading-none font-normal capitalize">
          By signing up, you agree to our{" "}
          <Link href="/terms" className="text-grey-light font-bold hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-grey-light font-bold hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </form>
  )
}
