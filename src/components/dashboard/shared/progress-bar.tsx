interface ProgressBarProps {
  value: number
  colorClass?: string
}

export function ProgressBar({
  value,
  colorClass = "bg-chart-battery",
}: ProgressBarProps) {
  return (
    <div className="progress-container">
      {/* eslint-disable-next-line react/forbid-dom-props */}
      <div
        className={`progress-fill ${colorClass}`}
        style={{
          width: `${value}%`,
        }}
      />
    </div>
  )
}
