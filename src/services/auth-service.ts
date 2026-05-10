import { apiFetch } from "@/lib/api/client"
import {
  LoginResponse,
  RegisterResponse,
  VerifyEmailResponse,
  RefreshTokenResponse,
  MeResponse,
} from "@/types/auth"
import {
  LoginFormValues,
  RegisterFormValues,
  VerifyEmailFormValues,
  RefreshTokenFormValues,
} from "@/lib/schemas/auth"

export const AuthService = {
  login: async (data: LoginFormValues) => {
    return apiFetch<LoginResponse>(
      "/auth/login",
      {
        method: "POST",
        data,
      },
      true
    )
  },

  register: async (data: RegisterFormValues) => {
    return apiFetch<RegisterResponse>(
      "/auth/register",
      {
        method: "POST",
        data,
      },
      true
    )
  },

  verifyEmail: async (data: VerifyEmailFormValues) => {
    return apiFetch<VerifyEmailResponse>(
      "/auth/verify-email",
      {
        method: "POST",
        data,
      },
      true
    )
  },

  refresh: async (data: RefreshTokenFormValues) => {
    return apiFetch<RefreshTokenResponse>(
      "/auth/refresh",
      {
        method: "POST",
        data,
      },
      true
    )
  },

  logout: async () => {
    return apiFetch<void>(
      "/auth/logout",
      {
        method: "POST",
      },
      true
    )
  },

  me: async () => {
    return apiFetch<MeResponse>(
      "/auth/me",
      {
        method: "GET",
      },
      true
    )
  },
}
