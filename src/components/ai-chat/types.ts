export type MessageRole = "user" | "ai"

export interface AlertCard {
  level: "critical" | "warning" | "info"
  title: string
  triggeredAt: string
  status: string
  detail: string
}

export interface RecommendedStep {
  index: number
  text: string
}

export interface Message {
  id: string
  role: MessageRole
  content: string
  timestamp: string
  alertCard?: AlertCard
  steps?: RecommendedStep[]
}

export interface Conversation {
  id: string
  title: string
  startedAt: string
  messages: Message[]
}

export interface SuggestedQuestion {
  question: string
  description: string
}
