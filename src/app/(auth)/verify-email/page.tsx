import { AuthVerifyEmailForm } from "@/components/auth/auth-verify-email-form"
import { Suspense } from "react"

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthVerifyEmailForm />
    </Suspense>
  )
}
