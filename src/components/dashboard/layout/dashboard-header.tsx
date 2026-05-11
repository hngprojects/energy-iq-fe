"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  Menu01Icon,
  Notification02Icon,
  Search01Icon,
  ArrowDown01Icon,
} from "@hugeicons/core-free-icons"
import { Input } from "@/components/ui/input"
import { useUIStore } from "@/stores/ui-store"
import Image from "next/image"

export function DashboardHeader() {
  const toggleSidebar = useUIStore((state) => state.toggleSidebar)

  return (
    <header className="bg-card lg:border-border-disabled sticky top-0 z-30 flex h-16 w-full justify-between overflow-hidden lg:h-17.25 lg:items-center lg:border-b">
      <div className="flex lg:hidden">
        <button className="mt-4.5 mb-4.5 ml-6" onClick={toggleSidebar}>
          <HugeiconsIcon icon={Menu01Icon} className="text-secondary h-7 w-7" />
        </button>
      </div>
      <div className="flex-1 lg:hidden" />
      <div className="flex items-center lg:hidden">
        <div className="mt-5.75 mr-[9.51px] mb-[25.51px] flex items-center justify-center">
          <HugeiconsIcon
            icon={Notification02Icon}
            className="text-secondary h-5 w-5 stroke-[1.2px]"
          />
        </div>
        <div className="mt-4 mr-6 mb-4 h-8 w-8 shrink-0 overflow-hidden rounded-[16px]">
          <Image
            src="/images/avatar1.png"
            alt="Profile"
            width={32}
            height={32}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="hidden flex-1 items-center lg:flex">
        <div className="relative mt-3 mb-3 ml-6 flex h-11.25 w-100.5 items-center">
          <HugeiconsIcon
            icon={Search01Icon}
            className="text-secondary absolute left-3.75 z-10 h-4 w-4 stroke-[1.5px]"
          />
          <Input
            type="text"
            placeholder="Search"
            className="bg-background border-border-active placeholder:text-muted-foreground h-full w-full rounded-lg pl-10.5 placeholder:select-none"
          />
        </div>
      </div>

      <div className="hidden items-center gap-3 pr-6 lg:flex">
        <div className="flex items-center justify-center">
          <HugeiconsIcon
            icon={Notification02Icon}
            className="text-secondary h-5 w-5 stroke-[1.2px]"
          />
        </div>
        <div className="h-8 w-8 shrink-0 overflow-hidden rounded-[16px]">
          <Image
            src="/images/avatar1.png"
            alt="Profile"
            width={32}
            height={32}
            className="h-full w-full object-cover"
          />
        </div>
        <button className="text-muted-foreground hover:text-secondary flex items-center justify-center transition-colors">
          <HugeiconsIcon icon={ArrowDown01Icon} className="text-secondary h-4 w-4" />
        </button>
      </div>
    </header>
  )
}
