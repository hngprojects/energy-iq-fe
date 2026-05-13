import {
  Fan02Icon,
  FridgeIcon,
  Idea01Icon,
  MicrowaveIcon,
  SnowIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Maximize2,
  Flame,
  WashingMachine,
  LaptopMinimalCheck,
  Tv,
  Cable,
} from "lucide-react"
import { PowerBreakdownModal } from "../shared/power-breakdown-modal"

export type ApplianceType = keyof typeof applianceIconMap

export const applianceIconMap = {
  cooler: <HugeiconsIcon icon={SnowIcon} size={18} />,
  bulb: <HugeiconsIcon icon={Idea01Icon} size={18} />,
  heater: <Flame size={18} />,
  tv: <Tv size={18} />,
  laundry: <WashingMachine size={18} />,
  office: <LaptopMinimalCheck size={18} />,
  fridge: <HugeiconsIcon icon={FridgeIcon} size={18} />,
  fan: <HugeiconsIcon icon={Fan02Icon} size={18} />,
  kitchen: <HugeiconsIcon icon={MicrowaveIcon} size={18} />,
  other: <Cable />,
}

export function PowerUsageCard({
  zones,
}: {
  zones: { name: string; pct: number; kind: ApplianceType }[]
}) {
  return (
    <div className="border-border bg-card flex flex-col gap-4 rounded-2xl border p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">Where your power&apos;s going</p>
        <span className="bg-chart-battery/10 text-chart-battery inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium">
          <span className="bg-chart-battery h-1.5 w-1.5 animate-pulse rounded-full" />{" "}
          Live
        </span>
      </div>
      <div className="space-y-3">
        {zones
          .sort((a, b) => b.pct - a.pct)
          .slice(0, 3)
          .map((z) => {
            const Icon = applianceIconMap[z.kind || "other"]
            return (
              <div key={z.name} className="flex items-center gap-3">
                <span className="text-muted-foreground h-4 w-4">{Icon}</span>
                <span className="flex-1 text-sm">{z.name}</span>
                <span className="text-sm font-semibold tabular-nums">{z.pct}%</span>
              </div>
            )
          })}
      </div>
      <div className="border-border flex items-center justify-between border-t pt-3 text-xs">
        <div className="flex items-center gap-2">
          <Maximize2 className="h-3 w-3" />
          <PowerBreakdownModal breakdownData={zones} />
        </div>
        <span className="text-muted-foreground">All {zones.length} zones</span>
      </div>
    </div>
  )
}
