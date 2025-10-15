"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { ArrowRight, Layout, Database, Navigation as NavigationIcon, MessageSquare, Puzzle, Search, ArrowUpDown } from "lucide-react"
import { useState, useMemo } from "react"

const patterns = [
  {
    name: "Form Layouts",
    description: "Consistent form patterns and layout guidelines for various use cases",
    icon: Layout,
    href: "/patterns/form-layouts",
    status: "Stable",
    owner: "Design Systems Team",
    lastUpdated: "2024-01-15",
    examples: ["Registration forms", "Multi-step wizards", "Inline editing"]
  },
  {
    name: "Data Display",
    description: "Patterns for presenting and organizing complex data sets",
    icon: Database,
    href: "/patterns/data-display",
    status: "Stable",
    owner: "Platform Team",
    lastUpdated: "2024-01-12",
    examples: ["Tables", "Cards", "Lists", "Dashboards"]
  },
  {
    name: "Navigation",
    description: "Navigation patterns for different application types and contexts",
    icon: NavigationIcon,
    href: "/patterns/navigation",
    status: "Beta",
    owner: "UX Research Team",
    lastUpdated: "2023-12-20",
    examples: ["Primary nav", "Breadcrumbs", "Pagination", "Tabs"]
  },
  {
    name: "Feedback",
    description: "User feedback patterns including notifications, alerts, and confirmations",
    icon: MessageSquare,
    href: "/patterns/feedback",
    status: "Experimental",
    owner: "Design Systems Team",
    lastUpdated: "2024-01-08",
    examples: ["Toast notifications", "Error states", "Loading states"]
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Stable":
      return "bg-green-100 text-green-800"
    case "Beta":
      return "bg-blue-100 text-blue-800"
    case "Experimental":
      return "bg-yellow-100 text-yellow-800"
    case "Deprecated":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function PatternsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [ownerFilter, setOwnerFilter] = useState("all")
  const [sortBy, setSortBy] = useState("name-asc")

  // Extract unique values for filter options
  const uniqueOwners = useMemo(() => {
    return Array.from(new Set(patterns.map(pattern => pattern.owner))).sort()
  }, [])

  const filteredPatterns = useMemo(() => {
    const filtered = patterns.filter((pattern) => {
      const matchesSearch = pattern.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pattern.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pattern.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pattern.examples.some(example => example.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesStatus = statusFilter === "all" || pattern.status === statusFilter
      const matchesOwner = ownerFilter === "all" || pattern.owner === ownerFilter
      
      return matchesSearch && matchesStatus && matchesOwner
    })

    // Apply sorting
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "name-asc":
          return a.name.localeCompare(b.name)
        case "name-desc":
          return b.name.localeCompare(a.name)
        case "updated-desc":
          return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
        case "updated-asc":
          return new Date(a.lastUpdated).getTime() - new Date(b.lastUpdated).getTime()
        default:
          return a.name.localeCompare(b.name)
      }
    })
  }, [searchTerm, statusFilter, ownerFilter, sortBy])

  return (
    <LayoutWrapper>
      <div className="space-y-8">
        <div className="px-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Patterns</h1>
          <p className="text-lg text-gray-600">
            Reusable design patterns that solve common interface problems. These patterns provide consistent 
            solutions for complex user interactions and help maintain design system coherence across applications.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mx-6">
          <h3 className="font-semibold text-blue-900 mb-2">Need a New Pattern?</h3>
          <div className="flex items-start justify-between gap-6">
            <p className="text-blue-800 flex-1">
              If you've identified a recurring design problem that could benefit from a standardized pattern, 
              we'd love to hear about it. Patterns help teams solve complex problems consistently.
            </p>
            <Button variant="outline" size="sm" className="shrink-0">
              Propose New Pattern
            </Button>
          </div>
        </div>

        <div className="px-6 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search patterns"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Experimental">Experimental</SelectItem>
                <SelectItem value="Beta">Beta</SelectItem>
                <SelectItem value="Stable">Stable</SelectItem>
                <SelectItem value="Deprecated">Deprecated</SelectItem>
              </SelectContent>
            </Select>
            <Select value={ownerFilter} onValueChange={setOwnerFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by owner" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Owners</SelectItem>
                {uniqueOwners.map((owner) => (
                  <SelectItem key={owner} value={owner}>{owner}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-auto shrink-0">
                <ArrowUpDown className="w-4 h-4" />
              </SelectTrigger>
              <SelectContent align="end">
                <SelectItem value="name-asc">A → Z</SelectItem>
                <SelectItem value="name-desc">Z → A</SelectItem>
                <SelectItem value="updated-desc">Recently Updated</SelectItem>
                <SelectItem value="updated-asc">Oldest Updated</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {filteredPatterns.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No patterns match your current filters.</p>
            </div>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2 px-6">
          {filteredPatterns.map((pattern) => (
            <Card key={pattern.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <pattern.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{pattern.name}</CardTitle>
                      <CardDescription>{pattern.description}</CardDescription>
                    </div>
                  </div>
                  <Badge className={getStatusColor(pattern.status)}>
                    {pattern.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium">Owner:</span>
                    <span className="text-gray-600">{pattern.owner}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium">Last Updated:</span>
                    <span className="text-gray-600">{new Date(pattern.lastUpdated).toLocaleDateString()}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2 text-gray-700">Examples:</h4>
                  <div className="flex flex-wrap gap-1">
                    {pattern.examples.map((example) => (
                      <Badge key={example} variant="outline" className="text-xs">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={pattern.href}>
                    View Pattern
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </LayoutWrapper>
  )
}
