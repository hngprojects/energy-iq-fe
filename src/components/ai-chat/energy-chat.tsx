"use client"

import { useState, useRef, useEffect } from "react"
import { Conversation, Message } from "./types"
import DefaultChatState from "./default-chat-state"
import ConversationHeader from "./conversation-header"
import MessageBubble from "./message-bubble"
import ChatInput from "./chat-input"

// Helpers
const now = () => {
  const d = new Date()
  const h = d.getHours()
  const m = d.getMinutes().toString().padStart(2, "0")
  const ampm = h >= 12 ? "pm" : "am"
  const hour = h % 12 || 12
  return `${hour}:${m}${ampm}`
}

const uid = () => Math.random().toString(36).slice(2, 9)

// Mock AI response generator
const generateAIResponse = (userMessage: string): Message[] => {
  const lower = userMessage.toLowerCase()

  if (lower.includes("critical battery") || lower.includes("battery alert")) {
    return [
      {
        id: uid(),
        role: "ai",
        content: "I've pulled the alert details:",
        timestamp: now(),
        alertCard: {
          level: "critical",
          title: "Critical - Battery at 3%",
          triggeredAt: "Today 6:08AM",
          status: "Unresolved",
          detail: "Overnight grid draw: 47% above baseline. HVAC ran outside schedule.",
        },
      },
      {
        id: uid(),
        role: "ai",
        content:
          "Battery level dropped to 3% at 6:08 AM. Overnight grid draw was 47% above baseline — analysis points to HVAC running outside its scheduled window (11 PM–5 AM).",
        timestamp: now(),
      },
    ]
  }

  if (
    lower.includes("steps") ||
    lower.includes("what should i do") ||
    lower.includes("now")
  ) {
    return [
      {
        id: uid(),
        role: "ai",
        content: "",
        timestamp: now(),
        steps: [
          {
            index: 1,
            text: "Shed non-critical loads immediately (estimated recovery: +8%).",
          },
          {
            index: 2,
            text: "Solar recharge should restore battery to ~45% by 9:30 AM if skies remain clear.",
          },
        ],
      },
    ]
  }

  if (lower.includes("battery drain") || lower.includes("drain")) {
    return [
      {
        id: uid(),
        role: "ai",
        content:
          "Your battery drained faster than usual last night. The primary culprit was your HVAC system, which activated at 11:47 PM — outside its scheduled window. This alone accounted for 38% of overnight consumption.",
        timestamp: now(),
      },
    ]
  }

  if (lower.includes("inverter") || lower.includes("overload")) {
    return [
      {
        id: uid(),
        role: "ai",
        content:
          "I've checked your inverter logs. There were 3 load spikes between 6–8 PM yesterday, reaching 94% capacity. Your system was not overloaded, but it was operating close to the threshold.",
        timestamp: now(),
      },
    ]
  }

  if (lower.includes("solar") || lower.includes("panel")) {
    return [
      {
        id: uid(),
        role: "ai",
        content:
          "Your solar panels produced 12% less than expected yesterday. Cloud cover reduced output between 10 AM–2 PM. No hardware issues detected — performance should normalize on clear days.",
        timestamp: now(),
      },
    ]
  }

  return [
    {
      id: uid(),
      role: "ai",
      content:
        "I've analyzed your energy system data. Everything is operating within normal parameters. Let me know if you'd like a deeper dive into any specific area — battery performance, solar output, or inverter health.",
      timestamp: now(),
    },
  ]
}

// Conversation title from first message
const inferTitle = (msg: string): string => {
  const lower = msg.toLowerCase()
  if (lower.includes("battery")) return "Battery critically low"
  if (lower.includes("solar")) return "Solar panel analysis"
  if (lower.includes("inverter")) return "Inverter load check"
  return msg.length > 40 ? msg.slice(0, 40) + "…" : msg
}

const formatStartTime = (): string => {
  const d = new Date()
  const h = d.getHours()
  const m = d.getMinutes().toString().padStart(2, "0")
  const ampm = h >= 12 ? "pm" : "am"
  const hour = h % 12 || 12
  return `Today, ${hour}:${m} ${ampm}`
}

type ViewState = "default" | "chat"

export default function EnergyChat() {
  const [view, setView] = useState<ViewState>("default")
  const [conversation, setConversation] = useState<Conversation | null>(null)
  const [isTyping, setIsTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [conversation?.messages, isTyping])

  const handleStartChat = (message: string) => {
    const userMsg: Message = {
      id: uid(),
      role: "user",
      content: message,
      timestamp: now(),
    }

    const newConversation: Conversation = {
      id: uid(),
      title: inferTitle(message),
      startedAt: formatStartTime(),
      messages: [userMsg],
    }

    setConversation(newConversation)
    setView("chat")
    simulateAIResponse(newConversation, message)
  }

  const handleSendMessage = (message: string) => {
    if (!conversation) return

    const userMsg: Message = {
      id: uid(),
      role: "user",
      content: message,
      timestamp: now(),
    }

    const updated = {
      ...conversation,
      messages: [...conversation.messages, userMsg],
    }
    setConversation(updated)
    simulateAIResponse(updated, message)
  }

  const simulateAIResponse = (conv: Conversation, userMessage: string) => {
    setIsTyping(true)
    setTimeout(() => {
      const responses = generateAIResponse(userMessage)
      setConversation((prev) => {
        if (!prev) return prev
        return { ...prev, messages: [...prev.messages, ...responses] }
      })
      setIsTyping(false)
    }, 1200)
  }

  const handleBack = () => {
    setView("default")
    setConversation(null)
  }

  // Group messages by date label
  const todayLabel = "Today"

  return (
    <div className="relative flex h-screen flex-col bg-[#F7F7F5]">
      {view === "default" ? (
        <DefaultChatState onStartChat={handleStartChat} />
      ) : (
        <>
          {/* Header */}
          <ConversationHeader conversation={conversation} onBack={handleBack} />

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
            {/* Date separator */}
            <div className="flex items-center gap-3 py-2">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs font-medium text-gray-400">{todayLabel}</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {conversation?.messages.map((msg) => (
              <MessageBubble key={msg.id} message={msg} />
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="animate-slideUp flex items-center gap-2">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-800 text-xs font-semibold text-white">
                  AI
                </div>
                <div className="rounded-2xl rounded-tl-sm border border-gray-100 bg-white px-4 py-3 shadow-sm">
                  <div className="flex h-5 items-center gap-1.5">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-300 [animation-delay:0ms]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-300 [animation-delay:150ms]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-gray-300 [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="bg-[#F7F7F5] px-4 pt-2 pb-6">
            <ChatInput onSend={handleSendMessage} disabled={isTyping} />
          </div>
        </>
      )}
    </div>
  )
}
