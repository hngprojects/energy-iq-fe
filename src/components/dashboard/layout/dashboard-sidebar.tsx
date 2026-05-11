"use client"

import Link from "next/link"
import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react"
import {
  DashboardSquare01Icon,
  BankIcon,
  Alert01Icon,
  File02Icon,
  CustomerSupportIcon,
  Settings01Icon,
  ArrowDown01Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons"
import { Logo } from "@/components/ui/logo"
import { useUIStore } from "@/stores/ui-store"
import { cn } from "@/lib/utils"

interface SidebarItemProps {
  label: string
  icon: IconSvgElement
  isActive?: boolean
}

const SidebarItem = ({ label, icon, isActive }: SidebarItemProps) => {
  return (
    <Link
      href="#"
      className={`flex h-10 w-52 items-center rounded px-3 py-2 font-sans text-[16px] leading-none font-medium ${
        isActive ? "bg-nav-active-bg text-nav-active-text" : "bg-sidebar text-secondary"
      }`}
    >
      <HugeiconsIcon icon={icon} className="mr-3 h-5 w-5" />
      {label}
    </Link>
  )
}

export function DashboardSidebar() {
  const { isSidebarOpen, closeSidebar } = useUIStore()

  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={closeSidebar}
        />
      )}

      <aside
        className={cn(
          "bg-sidebar border-border-disabled fixed top-0 left-0 z-50 flex h-screen flex-col gap-12 border-r px-4 py-5 transition-transform duration-300 ease-in-out lg:sticky lg:z-40 lg:w-60 lg:translate-x-0",
          isSidebarOpen ? "w-64 translate-x-0 shadow-xl" : "-translate-x-full"
        )}
      >
        <div className="mt-5 mr-0 ml-4 flex h-10 items-center justify-between">
          <div className="w-47">
            <Logo size="md" href="" />
          </div>
          <button
            className="text-secondary hover:bg-muted flex translate-x-2 items-center justify-center rounded-full p-2 lg:hidden"
            onClick={closeSidebar}
          >
            <HugeiconsIcon icon={Cancel01Icon} className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          <SidebarItem label="Dashboard" icon={DashboardSquare01Icon} isActive={true} />
          <SidebarItem label="Cost and Savings" icon={BankIcon} isActive={false} />
          <SidebarItem label="Alerts" icon={Alert01Icon} isActive={false} />
          <SidebarItem label="Reports" icon={File02Icon} isActive={false} />
          <SidebarItem label="AI Assistant" icon={CustomerSupportIcon} isActive={false} />
        </nav>

        <div className="mt-6 flex w-52 flex-col">
          <span className="text-muted-foreground mb-2 h-5.25 w-15.75 text-xs font-semibold tracking-wider uppercase">
            Account
          </span>

          <button className="bg-sidebar text-secondary hover:bg-muted flex h-10 w-52 items-center rounded px-3 py-2 font-sans text-[16px] leading-none font-medium transition-colors">
            <HugeiconsIcon icon={Settings01Icon} className="mr-3 h-5 w-5 shrink-0" />
            <span className="flex-1 text-left">Settings</span>
            <HugeiconsIcon icon={ArrowDown01Icon} className="text-secondary h-4 w-4" />
          </button>
        </div>
      </aside>
    </>
  )
}
