"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Menu,
  X,
  Home,
  Layers,
  BookOpen,
  GitBranch,
  Users,
  Zap,
  ChevronDown,
  ChevronRight,
  Puzzle,
  PanelLeftClose,
  PanelLeft,
  Heart,
  Play,
  Settings,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navigationItems = [
  { href: "/", label: "Home", icon: Home },
  {
    href: "/get-started",
    label: "Getting Started",
    icon: Play,
    children: [
      { href: "/docs/installation", label: "Installation Guide" },
      { href: "/get-started/ai-prototyping", label: "AI Prototyping" },
    ],
  },
  { href: "/nextgen", label: "NextGen Enablement", icon: Zap, badge: "Silver" },
  {
    href: "/foundations",
    label: "Foundations",
    icon: BookOpen,
    children: [
      { href: "/foundations/colors", label: "Colors" },
      { href: "/foundations/typography", label: "Typography" },
      { href: "/foundations/spacing", label: "Spacing" },
      { href: "/foundations/shadows", label: "Shadows" },
    ],
  },
  { href: "/components", label: "Components", icon: Layers },
  {
    href: "/patterns",
    label: "Patterns",
    icon: Puzzle,
    children: [
      { href: "/patterns/data-display", label: "Data Display" },
      { href: "/patterns/feedback", label: "Feedback" },
      { href: "/patterns/form-layouts", label: "Form Layouts" },
      { href: "/patterns/navigation", label: "Navigation" },
    ],
  },
  { href: "/releases", label: "Releases", icon: GitBranch },
  { href: "/contribute", label: "Contribute", icon: Heart },
]

interface NavigationProps {
  isCollapsed: boolean
  setIsCollapsed: (collapsed: boolean) => void
}

export function Navigation({ isCollapsed, setIsCollapsed }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    "/foundations": true,
    "/patterns": true,
    "/get-started": true,
  })
  const pathname = usePathname()

  const toggleSection = (href: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [href]: !prev[href],
    }))
  }

  const renderNavItem = (item: any, isMobile = false) => {
    const hasChildren = item.children && item.children.length > 0
    const isExpanded = expandedSections[item.href]
    const isActive =
      pathname === item.href || (hasChildren && item.children.some((child: any) => pathname === child.href))

    // Collapsed desktop view - show only icon with tooltip
    if (isCollapsed && !isMobile) {
      return (
        <div key={item.href} className="relative group">
          <Link
            href={item.href}
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-lg transition-colors",
              isActive
                ? "bg-blue-50 text-blue-700"
                : "text-gray-300 hover:text-white hover:bg-gray-800",
            )}
          >
            <item.icon className="w-5 h-5" />
          </Link>
          {/* Tooltip */}
          <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 top-1/2 transform -translate-y-1/2">
            {item.label}
            {item.badge && (
              <span className="ml-2 text-xs bg-blue-600 px-1.5 py-0.5 rounded">
                {item.badge}
              </span>
            )}
          </div>
        </div>
      )
    }

    return (
      <div key={item.href}>
        <div className="flex items-center">
          <Link
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors flex-1",
              isActive
                ? "bg-blue-50 text-blue-700 border-l-2 border-blue-500"
                : "text-gray-300 hover:text-white hover:bg-gray-800",
            )}
            onClick={isMobile ? () => setIsOpen(false) : undefined}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
            {item.badge && (
              <Badge variant="secondary" className="ml-auto text-xs bg-blue-100 text-blue-700">
                {item.badge}
              </Badge>
            )}
          </Link>
          {hasChildren && (
            <Button
              variant="ghost"
              size="sm"
              className="p-1 h-8 w-8 ml-1 text-gray-300 hover:text-white hover:bg-gray-800"
              onClick={() => toggleSection(item.href)}
            >
              {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </Button>
          )}
        </div>
        {hasChildren && isExpanded && (
          <div className="ml-7 mt-1 space-y-1">
            {item.children.map((child: any) => (
              <Link
                key={child.href}
                href={child.href}
                className={cn(
                  "block px-3 py-1 text-sm rounded-md transition-colors",
                  pathname === child.href
                    ? "bg-blue-50 text-blue-700 border-l-2 border-blue-500"
                    : "text-gray-400 hover:text-white hover:bg-gray-800",
                )}
                onClick={isMobile ? () => setIsOpen(false) : undefined}
              >
                {child.label}
                {child.badge && (
                  <Badge variant="secondary" className="ml-2 text-xs bg-blue-100 text-blue-700">
                    {child.badge}
                  </Badge>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-700 bg-black">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            {/* Sidebar toggle for desktop */}
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex text-gray-300 hover:text-white hover:bg-gray-800 p-2"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              {isCollapsed ? <PanelLeft className="w-4 h-4" /> : <PanelLeftClose className="w-4 h-4" />}
            </Button>
            <Link href="/" className="flex items-center gap-3">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Orange diamond shape */}
                <path d="M16 2L28 8L22 16L28 24L16 30L4 24L10 16L4 8L16 2Z" fill="#FF6B35"/>
                <path d="M16 6L24 10L20 16L24 22L16 26L8 22L12 16L8 10L16 6Z" fill="#FF8C42"/>
                {/* Inner highlight */}
                <path d="M16 8L20 10L18 16L20 22L16 24L12 22L14 16L12 10L16 8Z" fill="#FFB366"/>
              </svg>
              <span className="font-semibold text-lg text-white">Procore Design System</span>
            </Link>
          </div>

          {/* Centered Desktop Search */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search components, patterns..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-gray-300 hover:text-white hover:bg-gray-800"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-black md:hidden">
          <div className="p-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search components, patterns..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500"
              />
            </div>
            <nav className="space-y-2">{navigationItems.map((item) => renderNavItem(item, true))}</nav>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className={cn(
        "hidden md:flex fixed left-0 top-16 z-30 h-[calc(100vh-4rem)] flex-col border-r border-gray-700 bg-black transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}>
        <nav className={cn(
          "flex-1 overflow-y-auto p-4 space-y-2",
          isCollapsed && "px-3 py-4"
        )}>
          {navigationItems.map((item) => renderNavItem(item))}
        </nav>
      </aside>
    </>
  )
}
