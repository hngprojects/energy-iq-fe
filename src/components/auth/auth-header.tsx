interface AuthHeaderProps {
  title: string
  subtitle?: string
}

export function AuthHeader({ title, subtitle }: AuthHeaderProps) {
  return (
    <div className="mb-14 flex flex-col space-y-2 text-center">
      <h1 className="text-3xl font-bold tracking-tight text-[#111827]">{title}</h1>
      {subtitle && <p className="text-base text-[#6B7280]">{subtitle}</p>}
    </div>
  )
}
