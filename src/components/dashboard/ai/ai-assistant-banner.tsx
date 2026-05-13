import { ArrowUpRight } from "lucide-react"
import { HugeiconsIcon } from "@hugeicons/react"
import { ChatBotIcon } from "@hugeicons/core-free-icons"

const suggestions = [
  "Why is my battery low?",
  "What used the most power today?",
  "Should I run the AC tonight?",
]

export function AIAssistantBanner() {
  return (
    <div className="bg-secondary text-secondary-foreground hidden rounded-2xl p-5 lg:block lg:p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3 className="text-lg font-semibold">Have a question about your energy?</h3>
          <p className="text-secondary-foreground/60 mt-1 text-sm">
            Ask EnergyIQ in English or Pidgin
          </p>
        </div>
        <button className="bg-background text-foreground hover:bg-primary/90 inline-flex cursor-pointer items-center gap-1 self-start rounded-lg px-4 py-2 text-sm font-medium transition-colors">
          Ask Energy AI <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <span className="text-secondary-foreground/60 shrink-0 text-sm">Try this:</span>
        <div className="flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <button
              key={s}
              className="border-secondary-foreground/20 bg-secondary-foreground/5 hover:bg-secondary-foreground/10 inline-flex cursor-pointer items-center gap-1 rounded-lg border px-3 py-1.5 text-xs transition-colors"
            >
              {s} <ArrowUpRight className="h-3 w-3" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

const FloatingAIButton = () => {
  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-center lg:hidden">
      <div className="mb-2 rounded-full border-2 border-black bg-white px-4 py-1 shadow-lg">
        <span className="text-sm font-bold whitespace-nowrap text-black">
          Chat with AI
        </span>
      </div>

      <button className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/10 bg-black shadow-2xl transition-transform active:scale-95">
        <HugeiconsIcon icon={ChatBotIcon} size={32} color="white" strokeWidth={1.5} />
      </button>
    </div>
  )
}

export const AiBanner = () => {
  return (
    <div className="py-6">
      <FloatingAIButton />
      <AIAssistantBanner />
    </div>
  )
}
