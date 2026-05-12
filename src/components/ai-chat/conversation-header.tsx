"use client"

import { Conversation } from "./types"

interface Props {
  conversation: Conversation | null
  onBack: () => void
}

// Low battery icon for critically low conversations
function BatteryLowIcon() {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect
          x="1"
          y="4.5"
          width="12"
          height="7"
          rx="1.5"
          stroke="#6B7280"
          strokeWidth="1.2"
        />
        <path d="M13 7V9" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round" />
        <rect x="2.5" y="6" width="3" height="4" rx="0.5" fill="#EF4444" />
      </svg>
    </div>
  )
}

export default function ConversationHeader({ conversation, onBack }: Props) {
  const isCritical =
    conversation?.title.toLowerCase().includes("critical") ||
    conversation?.title.toLowerCase().includes("battery")

  return (
    <div className="flex items-center gap-3 border-b border-gray-100 bg-white px-4 py-3">
      {/* Back */}
      <button
        onClick={onBack}
        className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors hover:bg-gray-100"
        aria-label="Back"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M11 4L6 9L11 14"
            stroke="#111827"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Icon for active conversation */}
      {conversation && isCritical && <BatteryLowIcon />}

      {/* Title */}
      <div className="min-w-0 flex-1">
        <h2 className="truncate text-[15px] font-semibold text-gray-900">
          {conversation ? conversation.title : "New Conversation"}
        </h2>
        {conversation && (
          <p className="mt-0.5 text-xs text-gray-400">
            {conversation.startedAt} · {conversation.messages.length} messages
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-shrink-0 items-center gap-1">
        <button
          className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100"
          aria-label="Download conversation"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 2V10M8 10L5 7M8 10L11 7"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12H14"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <button
          className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100"
          aria-label="More options"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="3" r="1.2" fill="currentColor" />
            <circle cx="8" cy="8" r="1.2" fill="currentColor" />
            <circle cx="8" cy="13" r="1.2" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  )
}
