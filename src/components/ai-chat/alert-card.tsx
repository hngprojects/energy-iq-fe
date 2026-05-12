import { AlertCard as AlertCardType } from "./types"

interface Props {
  alert: AlertCardType
}

const levelConfig = {
  critical: {
    borderColor: "border-red-500",
    textColor: "text-red-500",
    bgColor: "bg-red-50",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 1.5L14.5 13H1.5L8 1.5Z"
          stroke="#EF4444"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <line
          x1="8"
          y1="6"
          x2="8"
          y2="9.5"
          stroke="#EF4444"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="8" cy="11.5" r="0.75" fill="#EF4444" />
      </svg>
    ),
  },
  warning: {
    borderColor: "border-amber-400",
    textColor: "text-amber-500",
    bgColor: "bg-amber-50",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 1.5L14.5 13H1.5L8 1.5Z"
          stroke="#F59E0B"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <line
          x1="8"
          y1="6"
          x2="8"
          y2="9.5"
          stroke="#F59E0B"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="8" cy="11.5" r="0.75" fill="#F59E0B" />
      </svg>
    ),
  },
  info: {
    borderColor: "border-blue-400",
    textColor: "text-blue-500",
    bgColor: "bg-blue-50",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6.25" stroke="#3B82F6" strokeWidth="1.5" />
        <line
          x1="8"
          y1="7"
          x2="8"
          y2="11"
          stroke="#3B82F6"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="8" cy="5" r="0.75" fill="#3B82F6" />
      </svg>
    ),
  },
}

export default function AlertCardComponent({ alert }: Props) {
  const config = levelConfig[alert.level]

  return (
    <div
      className={`rounded-lg border ${config.borderColor} ${config.bgColor} space-y-2 px-4 py-3`}
    >
      <div
        className={`flex items-center gap-2 text-sm font-semibold ${config.textColor}`}
      >
        {config.icon}
        <span>{alert.title}</span>
      </div>
      <p className="text-xs leading-relaxed text-gray-700">
        Triggered: {alert.triggeredAt} | Status:{" "}
        <span className="font-medium">{alert.status}</span>
      </p>
      <p className="text-xs leading-relaxed text-gray-700">{alert.detail}</p>
    </div>
  )
}
