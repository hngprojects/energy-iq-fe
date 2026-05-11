import { cn } from "@/lib/utils"
import { ArrowUpRight, ArrowDown, ArrowUp } from "lucide-react"

const fmt = (n: number) => `₦${n.toLocaleString()}`

interface DailySavings {
  amount: number
  diesel: number
  deltaPct: number
}

interface MonthlySavings {
  amount: number
  deltaPct: number
  months: string[]
  active: string
}

export interface SavingsData {
  today: DailySavings
  monthly: MonthlySavings
}

export const SavingsCard = ({
  savedTodayCard,
  savedMonthCard,
}: {
  savedTodayCard: DailySavings
  savedMonthCard: MonthlySavings
}) => {
  return (
    <div className="border-border grid h-full grid-cols-1 overflow-hidden rounded-2xl border bg-white shadow-sm md:grid-cols-2">
      <div className="border-border flex flex-col justify-between border-b p-6 md:border-r md:border-b-0">
        <div className="space-y-1">
          <p className="text-sm font-medium text-slate-500">You saved today</p>
          <h3 className="text-3xl font-bold text-slate-900">
            {fmt(savedTodayCard.amount)}
          </h3>
        </div>

        <div className="mt-4 space-y-4">
          <p className="text-muted-foreground text-xs leading-relaxed">
            That&apos;s{" "}
            <span className="text-foreground font-medium">
              {fmt(savedTodayCard.diesel)}
            </span>{" "}
            in diesel you didn&apos;t need to burn today
          </p>
          <>
            {savedTodayCard.deltaPct < 0 ? (
              <span className="bg-destructive/10 text-destructive inline-flex w-fit items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium">
                <ArrowDown className="text-destructive h-3 w-3" />{" "}
                {Math.abs(savedTodayCard.deltaPct)}% less than yesterday
              </span>
            ) : (
              <span className="bg-chart-battery/10 text-chart-battery inline-flex w-fit items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium">
                <ArrowUp className="text-chart-battery h-3 w-3" />{" "}
                {savedTodayCard.deltaPct}% more than yesterday
              </span>
            )}
          </>
        </div>
      </div>

      {/* Monthly Section */}
      <div className="relative flex flex-col justify-between p-6">
        <div className="flex items-start justify-between">
          <p className="text-muted-foreground text-sm">Saved this month</p>
          <ArrowUpRight className="text-muted-foreground h-4 w-4" />
        </div>
        <p className="text-3xl font-bold tracking-tight">{fmt(savedMonthCard.amount)}</p>
        <span
          className={cn(
            "inline-flex w-fit items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium",
            savedMonthCard.deltaPct < 0
              ? "bg-destructive/10 text-destructive"
              : "bg-chart-battery/10 text-chart-battery"
          )}
        >
          <ArrowDown className="h-3 w-3" /> {Math.abs(savedMonthCard.deltaPct)}% vs last
          month
        </span>
        <div className="text-muted-foreground flex justify-between pt-2 text-xs">
          {savedMonthCard.months.map((m) => (
            <span
              key={m}
              className={
                m === savedMonthCard.active ? "text-foreground font-semibold" : ""
              }
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
