"use client"

import { AuthInput } from "@/components/auth/auth-input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema, LoginFormValues } from "@/lib/schemas/auth"
import { useAuthQueries } from "@/hooks/use-auth-queries"

export function AuthLoginForm() {
  const { useLogin } = useAuthQueries()
  const loginMutation = useLogin()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: true,
    },
  })

  const onSubmit = (data: LoginFormValues) => {
    loginMutation.mutate(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="flex flex-col gap-2">
        <div className="space-y-4">
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

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="remember"
              {...register("remember")}
              className="border-amber-30 checked:bg-amber-30 relative h-4 w-4 cursor-pointer appearance-none rounded-sm border transition-colors before:absolute before:inset-0 before:flex before:items-center before:justify-center before:text-[10px] before:font-bold before:text-white before:content-[''] checked:before:content-['✔'] focus:outline-none"
            />
            <label
              htmlFor="remember"
              className="text-slate-80 cursor-pointer text-base leading-none font-light"
            >
              Remember Password
            </label>
          </div>
          <Link
            href="/forgot-password"
            className="text-error-text text-base leading-none font-semibold hover:text-amber-50"
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
            className="border-border bg-border-disabled text-dark-text hover:bg-slate-10 h-14 flex-1 rounded-lg px-8 py-5 text-lg leading-none font-medium"
          >
            <Link href="/signup">Sign Up</Link>
          </Button>
          <Button
            type="submit"
            disabled={loginMutation.isPending}
            className="border-border-disabled bg-surface-white text-dark-text hover:bg-surface-white/90 h-14 flex-1 rounded-lg border px-8 py-5 text-lg leading-none font-semibold"
          >
            {loginMutation.isPending ? "Signing In..." : "Sign In"}
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

        <div className="flex flex-col gap-4 text-center">
          <p className="text-grey-light text-base font-normal">
            Don’t have an account?{" "}
            <Link
              href="/signup"
              className="font-semibold text-amber-50 capitalize hover:underline"
            >
              Create One
            </Link>
          </p>

          <p className="text-grey-light text-base leading-none font-normal capitalize">
            By signing in, you agree to our{" "}
            <Link href="/terms" className="text-grey-light font-bold hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-grey-light font-bold hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </form>
  )
}
