"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { ArrowRight, Layout, Database, Navigation as NavigationIcon, MessageSquare, Puzzle, Search, ArrowUpDown, Tag, Users, Clock, Github, Figma, BookOpen, FileText } from "lucide-react"
import { useState, useMemo } from "react"

const patterns = [
  {
    name: "Form Layouts",
    description: "Consistent form patterns and layout guidelines for various use cases",
    type: "pattern",
    lifecycle: "Stable",
    category: "Forms",
    owner: "Design Systems Team",
    lastUpdated: "2024-01-15",
    usage: "High",
    documentation: "https://confluence.procore.com/form-layouts",
    storybook: "https://stories.procore.com/form-layouts",
    figma: "https://figma.com/procore-form-layouts",
    github: "https://github.com/procore/design-system/form-layouts",
    examples: ["Registration forms", "Multi-step wizards", "Inline editing"]
  },
  {
    name: "Data Display",
    description: "Patterns for presenting and organizing complex data sets",
    type: "pattern",
    lifecycle: "Stable",
    category: "Data Display",
    owner: "Platform Team",
    lastUpdated: "2024-01-12",
    usage: "High",
    documentation: "https://confluence.procore.com/data-display",
    storybook: "https://stories.procore.com/data-display",
    figma: "https://figma.com/procore-data-display",
    github: "https://github.com/procore/design-system/data-display",
    examples: ["Tables", "Cards", "Lists", "Dashboards"]
  },
  {
    name: "Navigation",
    description: "Navigation patterns for different application types and contexts",
    type: "pattern",
    lifecycle: "Beta",
    category: "Navigation",
    owner: "UX Research Team",
    lastUpdated: "2023-12-20",
    usage: "Medium",
    documentation: "https://confluence.procore.com/navigation",
    storybook: "https://stories.procore.com/navigation",
    figma: "https://figma.com/procore-navigation",
    github: "https://github.com/procore/design-system/navigation",
    examples: ["Primary nav", "Breadcrumbs", "Pagination", "Tabs"]
  },
  {
    name: "Feedback",
    description: "User feedback patterns including notifications, alerts, and confirmations",
    type: "pattern",
    lifecycle: "Experimental",
    category: "Feedback",
    owner: "Design Systems Team",
    lastUpdated: "2024-01-08",
    usage: "Growing",
    documentation: "https://confluence.procore.com/feedback",
    storybook: "https://stories.procore.com/feedback",
    figma: "https://figma.com/procore-feedback", 
    github: "https://github.com/procore/design-system/feedback",
    examples: ["Toast notifications", "Error states", "Loading states"]
  }
]

const getLifecycleColor = (lifecycle: string) => {
  switch (lifecycle) {
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
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [lifecycleFilter, setLifecycleFilter] = useState("all")
  const [ownerFilter, setOwnerFilter] = useState("all")
  const [sortBy, setSortBy] = useState("name-asc")

  // Get unique values for filter options
  const uniqueCategories = useMemo(() => {
    const categories = [...new Set(patterns.map(p => p.category))]
    return categories.sort()
  }, [])

  const uniqueLifecycles = useMemo(() => {
    const lifecycles = [...new Set(patterns.map(p => p.lifecycle))]
    return lifecycles.sort()
  }, [])

  const uniqueOwners = useMemo(() => {
    const owners = [...new Set(patterns.map(p => p.owner))]
    return owners.sort()
  }, [])

  const filteredPatterns = useMemo(() => {
    const filtered = patterns.filter((pattern) => {
      const matchesSearch = pattern.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pattern.description.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesCategory = categoryFilter === "all" || pattern.category === categoryFilter
      const matchesLifecycle = lifecycleFilter === "all" || pattern.lifecycle === lifecycleFilter
      const matchesOwner = ownerFilter === "all" || pattern.owner === ownerFilter
      
      return matchesSearch && matchesCategory && matchesLifecycle && matchesOwner
    })

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "name-asc":
          return a.name.localeCompare(b.name)
        case "name-desc":
          return b.name.localeCompare(a.name)
        case "updated-desc":
          return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
        case "usage-desc":
          // Sort by usage level
          const getUsageRank = (pattern: any) => {
            if (!pattern.usage) return 0
            switch (pattern.usage.toLowerCase()) {
              case "high": return 4
              case "growing": return 3
              case "medium": return 2
              case "low": return 1
              default: return 0
            }
          }
          const rankA = getUsageRank(a)
          const rankB = getUsageRank(b)
          if (rankA !== rankB) return rankB - rankA
          return a.name.localeCompare(b.name) // Secondary sort by name
        default:
          return a.name.localeCompare(b.name)
      }
    })
  }, [searchTerm, categoryFilter, lifecycleFilter, ownerFilter, sortBy])

  return (
    <LayoutWrapper>
      <div className="space-y-8">
        {/* Header */}
        <div className="px-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Patterns</h1>
          <p className="text-lg text-gray-600">
            Reusable design patterns that solve common interface problems and help maintain design system coherence across applications.
          </p>
        </div>

        {/* Banner */}
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

        {/* Stats */}
        <div className="px-6">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">{patterns.length}</div>
              <div className="text-sm text-blue-600">Total Patterns</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-600">{patterns.filter(p => p.lifecycle === "Stable").length}</div>
              <div className="text-sm text-purple-600">Stable Patterns</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-600">{filteredPatterns.length}</div>
              <div className="text-sm text-green-600">Total Showing</div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="px-6 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search patterns..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* Filters */}
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full lg:w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {uniqueCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={lifecycleFilter} onValueChange={setLifecycleFilter}>
              <SelectTrigger className="w-full lg:w-36">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                {uniqueLifecycles.map((lifecycle) => (
                  <SelectItem key={lifecycle} value={lifecycle}>
                    {lifecycle}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={ownerFilter} onValueChange={setOwnerFilter}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Owner" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Owners</SelectItem>
                {uniqueOwners.map((owner) => (
                  <SelectItem key={owner} value={owner}>
                    {owner}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-auto shrink-0">
                <ArrowUpDown className="w-4 h-4" />
              </SelectTrigger>
              <SelectContent align="end">
                <SelectItem value="name-asc">A → Z (default)</SelectItem>
                <SelectItem value="name-desc">Z → A</SelectItem>
                <SelectItem value="updated-desc">Recently Updated</SelectItem>
                <SelectItem value="usage-desc">Most Used</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {filteredPatterns.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No patterns match your current filters.</p>
            </div>
          )}
        </div>

        {/* Patterns Grid */}
        <div className="grid gap-6 md:grid-cols-2 px-6">
          {filteredPatterns.map((pattern) => (
            <Card key={pattern.name} className="h-full transition-all duration-300">
              <div className="flex h-full">
                {/* Main Content - Left Side */}
                <div className="flex-1 flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs text-slate-600 border-slate-300">
                        Pattern
                      </Badge>
                      <Badge className={getLifecycleColor(pattern.lifecycle)}>
                        {pattern.lifecycle}
                      </Badge>
                      {pattern.usage && (
                        <Badge variant="outline" className="text-xs text-slate-600 border-slate-300">{pattern.usage} Usage</Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <CardTitle className="text-xl">{pattern.name}</CardTitle>
                    </div>
                    <CardDescription className="text-sm">{pattern.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-1 pt-0">
                    <div className="space-y-3">
                      {/* Category */}
                      <div className="text-sm flex items-center">
                        <Tag className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="font-medium text-gray-700">Category:</span>
                        <button 
                          className="text-gray-600 ml-2 hover:text-blue-600 hover:underline transition-colors cursor-pointer"
                          onClick={() => setCategoryFilter(pattern.category)}
                        >
                          {pattern.category}
                        </button>
                      </div>

                      {/* Owner */}
                      <div className="text-sm flex items-center">
                        <Users className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="font-medium text-gray-700">Owner:</span>
                        <button 
                          className="text-gray-600 ml-2 hover:text-blue-600 hover:underline transition-colors cursor-pointer"
                          onClick={() => setOwnerFilter(pattern.owner)}
                        >
                          {pattern.owner}
                        </button>
                      </div>

                      <div className="text-sm flex items-center">
                        <Clock className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="font-medium text-gray-700">Last Updated:</span>
                        <button 
                          className="text-gray-600 ml-2 hover:text-blue-600 hover:underline transition-colors cursor-pointer"
                          onClick={() => setSortBy("updated-desc")}
                        >
                          {new Date(pattern.lastUpdated).toLocaleDateString()}
                        </button>
                      </div>

                      {/* Examples */}
                      {pattern.examples && (
                        <div className="text-sm">
                          <div className="flex items-center mb-2">
                            <Puzzle className="w-4 h-4 text-gray-500 mr-2" />
                            <span className="font-medium text-gray-700">Examples:</span>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {pattern.examples.map((example) => (
                              <Badge key={example} variant="outline" className="text-xs text-slate-600 border-slate-300">
                                {example}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </div>

                {/* CTAs - Right Side Vertical Stack */}
                <div className="w-32 p-4 border-l border-gray-200 flex flex-col justify-center gap-4">
                  <Button variant="outline" size="sm" asChild className="w-full text-xs">
                    <a href={pattern.documentation} target="_blank" rel="noopener noreferrer">
                      <FileText className="w-3 h-3 mr-1" />
                      Docs
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="w-full text-xs">
                    <a href={pattern.storybook} target="_blank" rel="noopener noreferrer">
                      <BookOpen className="w-3 h-3 mr-1" />
                      Storybook
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="w-full text-xs">
                    <a href={pattern.figma} target="_blank" rel="noopener noreferrer">
                      <Figma className="w-3 h-3 mr-1" />
                      Figma
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="w-full text-xs">
                    <a href={pattern.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 mr-1" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </LayoutWrapper>
  )
}
