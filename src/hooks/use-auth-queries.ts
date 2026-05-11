import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { AuthService } from "@/services/auth-service"
import { useAuthStore } from "@/stores/auth-store"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export const useAuthQueries = () => {
  const queryClient = useQueryClient()
  const router = useRouter()
  const { setAuth, logout: storeLogout } = useAuthStore()

  const useLogin = () =>
    useMutation({
      mutationFn: AuthService.login,
      onSuccess: (data) => {
        setAuth(data.user, data.accessToken, data.refreshToken)
        toast.success("Welcome back!")
        router.push("/onboarding")
      },
      onError: (error: unknown) => {
        const message =
          error instanceof Error
            ? error.message
            : (error as { message?: string })?.message || "Invalid email or password"
        toast.error(message)
      },
    })

  const useRegister = () =>
    useMutation({
      mutationFn: AuthService.register,
      onSuccess: (_, variables) => {
        toast.success("Account created successfully!")
        router.push(`/verify-email?email=${encodeURIComponent(variables.email)}`)
      },
      onError: (error: unknown) => {
        const message =
          error instanceof Error
            ? error.message
            : (error as { message?: string })?.message || "Registration failed"
        toast.error(message)
      },
    })

  const useVerifyEmail = () =>
    useMutation({
      mutationFn: AuthService.verifyEmail,
      onSuccess: () => {
        toast.success("Email verified successfully!")
        router.push("/login")
      },
      onError: (error: unknown) => {
        const message =
          error instanceof Error
            ? error.message
            : (error as { message?: string })?.message || "Verification failed"
        toast.error(message)
      },
    })

  const useLogout = () =>
    useMutation({
      mutationFn: AuthService.logout,
      onSuccess: () => {
        storeLogout()
        queryClient.clear()
        toast.success("Logged out successfully")
        router.push("/login")
      },
      onError: (error: unknown) => {
        const message =
          error instanceof Error
            ? error.message
            : (error as { message?: string })?.message || "Logout failed"
        toast.error(message)
      },
    })

  const useMe = () =>
    useQuery({
      queryKey: ["auth-me"],
      queryFn: AuthService.me,
      enabled: typeof window !== "undefined" && !!localStorage.getItem("token"),
    })

  const useForgotPassword = () =>
    useMutation({
      mutationFn: AuthService.forgotPassword,
      onSuccess: (data) => {
        toast.success(data.message || "Reset link sent to your email!")
      },
      onError: (error: unknown) => {
        const message =
          error instanceof Error
            ? error.message
            : (error as { message?: string })?.message || "Failed to send reset link"
        toast.error(message)
      },
    })

  return {
    useLogin,
    useRegister,
    useVerifyEmail,
    useLogout,
    useMe,
    useForgotPassword,
  }
}
