"use client"

import { useState, useRef, KeyboardEvent } from "react"

interface Props {
  onSend: (message: string) => void
  placeholder?: string
  disabled?: boolean
}

export default function ChatInput({
  onSend,
  placeholder = "Ask anything about your energy system",
  disabled = false,
}: Props) {
  const [value, setValue] = useState("")
  const [showAttachMenu, setShowAttachMenu] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleSend = () => {
    if (!value.trim() || disabled) return
    onSend(value.trim())
    setValue("")
    setShowAttachMenu(false)
  }

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="relative">
      {/* Attach dropdown */}
      {showAttachMenu && (
        <div
          ref={menuRef}
          className="animate-fadeIn absolute bottom-full left-0 z-50 mb-2 min-w-[200px] overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg"
        >
          <button
            className="flex w-full items-center gap-3 px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-50"
            onClick={() => setShowAttachMenu(false)}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M13.5 8.5V12.5C13.5 13.052 13.052 13.5 12.5 13.5H3.5C2.948 13.5 2.5 13.052 2.5 12.5V3.5C2.5 2.948 2.948 2.5 3.5 2.5H7.5"
                stroke="#374151"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <path
                d="M10.5 2.5L13.5 2.5L13.5 5.5M13.5 2.5L9 8"
                stroke="#374151"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Add Photo or files
          </button>
          <button
            className="flex w-full items-center gap-3 px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-50"
            onClick={() => setShowAttachMenu(false)}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect
                x="1.5"
                y="3.5"
                width="13"
                height="9"
                rx="1.5"
                stroke="#374151"
                strokeWidth="1.2"
              />
              <circle cx="8" cy="8" r="2" stroke="#374151" strokeWidth="1.2" />
              <path
                d="M5.5 3.5L6.5 2H9.5L10.5 3.5"
                stroke="#374151"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
            Take a screenshot
          </button>
        </div>
      )}

      <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
        {/* Plus / attach button */}
        <button
          onClick={() => setShowAttachMenu((v) => !v)}
          className="flex h-7 w-7 flex-shrink-0 items-center justify-center text-gray-400 transition-colors hover:text-gray-600"
          aria-label="Attach"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <line
              x1="9"
              y1="3"
              x2="9"
              y2="15"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <line
              x1="3"
              y1="9"
              x2="15"
              y2="9"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Input */}
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKey}
          placeholder={placeholder}
          disabled={disabled}
          className="min-w-0 flex-1 bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
        />

        {/* Mic button */}
        <button
          className="flex h-7 w-7 flex-shrink-0 items-center justify-center text-gray-400 transition-colors hover:text-gray-600"
          aria-label="Voice input"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect
              x="6.5"
              y="2"
              width="5"
              height="8"
              rx="2.5"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <path
              d="M3.5 9.5C3.5 12.538 6.134 15 9 15C11.866 15 14.5 12.538 14.5 9.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <line
              x1="9"
              y1="15"
              x2="9"
              y2="17"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Send button */}
        <button
          onClick={handleSend}
          disabled={!value.trim() || disabled}
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gray-900 text-white transition-all hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Send"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M14 8L2 8M14 8L9 3M14 8L9 13"
              stroke="white"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
