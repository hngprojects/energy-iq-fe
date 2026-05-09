"use client"

import { Button } from "@/components/ui/button"
import { InverterCard } from "./inverter-card"

export type InverterType = "victron" | "growatt" | "sunsynk"

const OPTIONS: { id: InverterType; title: string; subtitle: string }[] = [
  { id: "victron", title: "Victron", subtitle: "Vrm OAuth" },
  { id: "growatt", title: "Growatt", subtitle: "API key" },
  { id: "sunsynk", title: "Sunsynk", subtitle: "API key" },
]

interface InverterTypeStepProps {
  selected: InverterType | null
  onSelect: (type: InverterType) => void
  onNext: () => void
}

export function InverterTypeStep({ selected, onSelect, onNext }: InverterTypeStepProps) {
  return (
    <div className="space-y-12">
      <div className="grid gap-4 sm:grid-cols-3 sm:gap-8">
        {OPTIONS.map((opt) => (
          <InverterCard
            key={opt.id}
            title={opt.title}
            subtitle={opt.subtitle}
            selected={selected === opt.id}
            onSelect={() => onSelect(opt.id)}
          />
        ))}
      </div>

      <div className="flex sm:justify-end">
        <Button
          type="button"
          onClick={onNext}
          disabled={!selected}
          className="h-14 w-full cursor-pointer rounded-lg bg-[#111827] text-base font-medium text-white hover:bg-[#111827]/90 disabled:cursor-not-allowed disabled:bg-[#E8E8E8] disabled:text-[#2A2F3C] disabled:opacity-100 sm:max-w-61.75 lg:text-lg"
        >
          Next
        </Button>
      </div>
    </div>
  )
}
