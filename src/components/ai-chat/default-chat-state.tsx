"use client"

import { useState } from "react"
import ChatInput from "./chat-input"
import { SuggestedQuestion } from "./types"
import Image from "next/image"

const SUGGESTED_QUESTIONS: SuggestedQuestion[] = [
  {
    question: "Why did my battery drain fast last night?",
    description: "Analyze overnight usage and identify what consumed the most power.",
  },
  {
    question: "Is my inverter overloaded?",
    description: "Identify dangerous load spikes and system overload periods.",
  },
  {
    question: "Are my solar panels underperforming?",
    description: "Detect weather impact, shading issues, or reduced solar output.",
  },
]

interface Props {
  onStartChat: (message: string) => void
}

export default function DefaultChatState({ onStartChat }: Props) {
  const [suggestionsOpen, setSuggestionsOpen] = useState(true)

  return (
    <div className="flex h-full flex-col">
      {/* Hero section */}
      <div className="flex flex-1 flex-col items-center justify-center gap-8 p-[20px]">
        <Image src={`/images/logo.svg`} alt={"logo"} width={64} height={64} />

        <h1 className="mb-3 max-w-sm text-center text-[32px] leading-tight font-bold text-gray-900">
          Ask EnergyIQ anything about your power system
        </h1>
        <p className="max-w-md text-center text-sm leading-relaxed text-gray-500">
          EnergyIQ analyzes your inverter and energy data to explain battery drain,
          generator usage, savings, and solar performance in simple language.
        </p>
      </div>

      {/* Bottom section */}
      <div className="space-y-4 px-4 pb-6">
        {/* Chat input */}
        <ChatInput onSend={onStartChat} />

        {/* Suggested questions */}
        <div className="space-y-3">
          <button
            className="flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
            onClick={() => setSuggestionsOpen((v) => !v)}
          >
            Suggested Questions
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className={`transition-transform duration-200 ${suggestionsOpen ? "" : "rotate-180"}`}
            >
              <path
                d="M4 10L8 6L12 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {suggestionsOpen && (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {SUGGESTED_QUESTIONS.map((q) => (
                <button
                  key={q.question}
                  onClick={() => onStartChat(q.question)}
                  className="group rounded-xl border border-gray-200 bg-white p-4 text-left transition-all hover:border-gray-300 hover:shadow-sm"
                >
                  <p className="mb-1.5 text-sm font-semibold text-gray-900 group-hover:text-gray-700">
                    {q.question}
                  </p>
                  <p className="text-xs leading-relaxed text-gray-500">{q.description}</p>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
