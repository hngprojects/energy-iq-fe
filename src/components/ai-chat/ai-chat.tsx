import { DashboardSidebar } from "../dashboard/layout/dashboard-sidebar"
import { DashboardHeader } from "../dashboard/layout/dashboard-header"
import EnergyChat from "./energy-chat"
export function AiChatLayout() {
  return (
    <div className="flex justify-center">
      <div className="bg-background flex min-h-screen max-w-[1440]">
        <DashboardSidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <DashboardHeader />
          <div>
            <EnergyChat />
          </div>
        </div>
      </div>
    </div>
  )
}
