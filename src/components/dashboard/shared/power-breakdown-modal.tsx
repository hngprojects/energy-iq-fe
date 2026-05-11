import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { applianceIconMap, ApplianceType } from "../cards/power-usage-card"
import { ProgressBar } from "./progress-bar"

export function PowerBreakdownModal({
  breakdownData,
}: {
  breakdownData: { name: string; pct: number; kind: ApplianceType }[]
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
          View breakdown
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-xl overflow-hidden rounded-3xl border-none p-0">
        <div className="py-4">
          <DialogHeader className="border-border mb-4 border-b p-6">
            <DialogTitle className="text-foreground text-lg font-bold">
              Power breakdown
            </DialogTitle>
            <p className="text-muted-foreground text-sm">
              What each part of your site is using right now
            </p>
          </DialogHeader>

          <div className="mb-6 flex items-baseline justify-between px-6">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-900">
                {breakdownData.reduce((acc, curr) => {
                  return acc + curr.pct
                }, 0)}
                kW
              </span>
              <span className="text-sm">kWh running now</span>
            </div>
            <span className="text-xs font-medium">
              Across {breakdownData.length || 0} zones
            </span>
          </div>

          <div className="space-y-2 px-6 py-3">
            {breakdownData.map((item) => (
              <div key={item.name} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="border-border rounded-lg border p-2">
                      {applianceIconMap[item.kind]}
                    </div>
                    <span className="text-sm font-semibold">{item.name}</span>
                  </div>
                  <span className="text-sm font-bold">
                    {item.pct} <span className="text-muted-foreground">W</span>
                  </span>
                </div>

                <div className="flex items-center gap-2 overflow-hidden">
                  <ProgressBar value={item.pct} colorClass="bg-foreground" />

                  <span className="ottom-6 text-[10px] font-bold">{item.pct}%</span>
                </div>
              </div>
            ))}
          </div>
          <div className="border-border border-t px-6 py-3">
            <p className="text-xs">Compared to same time yesterday</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
