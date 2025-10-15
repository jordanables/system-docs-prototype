"use client"

import type React from "react"
import { useState } from "react"
import { Navigation } from "./navigation"
import { FeedbackCTA } from "./feedback-cta"
import { cn } from "@/lib/utils"

interface LayoutWrapperProps {
  children: React.ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main className={cn(
        "pt-4 transition-all duration-300",
        isCollapsed ? "md:ml-16" : "md:ml-64"
      )}>
        {children}
      </main>
      <FeedbackCTA />
    </div>
  )
}
