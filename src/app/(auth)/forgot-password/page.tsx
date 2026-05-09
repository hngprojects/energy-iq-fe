import { AuthWrapper } from "@/components/layout/auth-wrapper"
import { AuthHeader } from "@/components/auth/auth-header"
import { AuthForgotPasswordForm } from "@/components/auth/auth-forgot-password-form"

export default function ForgotPasswordPage() {
  return (
    <AuthWrapper>
      <div className="mt-56.5 lg:mt-49.75">
        <AuthHeader
          title="Forgot Your Password"
          subtitle="Enter your email address and we will send you a reset link."
        />
        <AuthForgotPasswordForm />
      </div>
    </AuthWrapper>
  )
}
