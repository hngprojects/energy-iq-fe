import { Message } from "./types"
import AlertCardComponent from "./alert-card"

interface Props {
  message: Message
}

export default function MessageBubble({ message }: Props) {
  const isUser = message.role === "user"

  if (isUser) {
    return (
      <div className="animate-slideUp flex items-end justify-end gap-2">
        <div className="flex max-w-[75%] flex-col items-end gap-1">
          <div className="rounded-2xl rounded-br-sm bg-gray-900 px-4 py-3 text-white">
            <p className="text-sm leading-relaxed">{message.content}</p>
          </div>
          <span className="pr-1 text-[11px] text-gray-400">{message.timestamp}</span>
        </div>
        <div className="mb-5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 text-xs font-semibold text-gray-600">
          AA
        </div>
      </div>
    )
  }

  // AI message
  return (
    <div className="animate-slideUp flex items-start gap-2">
      <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-800 text-xs font-semibold text-white">
        AI
      </div>
      <div className="flex max-w-[80%] flex-col gap-2">
        <div className="space-y-3 rounded-2xl rounded-tl-sm border border-gray-100 bg-white px-4 py-3 shadow-sm">
          {message.content && (
            <p className="text-sm leading-relaxed text-gray-700">{message.content}</p>
          )}

          {message.alertCard && <AlertCardComponent alert={message.alertCard} />}

          {message.steps && message.steps.length > 0 && (
            <div className="space-y-1.5">
              <p className="text-sm font-semibold text-gray-800">Recommended steps:</p>
              {message.steps.map((step) => (
                <p key={step.index} className="text-sm leading-relaxed text-gray-700">
                  {step.index}. {step.text}
                </p>
              ))}
            </div>
          )}
        </div>
        <span className="pl-1 text-[11px] text-gray-400">{message.timestamp}</span>
      </div>
    </div>
  )
}
