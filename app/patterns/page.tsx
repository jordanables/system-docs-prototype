"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { ArrowRight, Layout, Database, Navigation as NavigationIcon, MessageSquare, Puzzle, Search, ArrowUpDown, Tag, Users, Clock, Github, Figma, BookOpen, FileText, Star } from "lucide-react"
import { useState, useMemo } from "react"

const patterns = [
  {
    name: "Empty States",
    description: "Patterns for handling and displaying empty content areas gracefully",
    type: "pattern",
    lifecycle: "Stable",
    category: "Content",
    owner: "Design Systems Team",
    lastUpdated: "2024-01-15",
    usage: "High",
    documentation: "https://confluence.procore.com/empty-states",
    storybook: "https://stories.procore.com/empty-states",
    figma: "https://figma.com/procore-empty-states",
    github: "https://github.com/procore/design-system/empty-states",
    examples: ["No search results", "Empty lists", "First-time user states", "No data available"]
  },
  {
    name: "Feature Onboarding",
    description: "Guided patterns to introduce users to new features and functionality",
    type: "pattern",
    lifecycle: "Beta",
    category: "Onboarding",
    owner: "UX Research Team",
    lastUpdated: "2024-01-12",
    usage: "Growing",
    documentation: "https://confluence.procore.com/feature-onboarding",
    storybook: "https://stories.procore.com/feature-onboarding",
    figma: "https://figma.com/procore-feature-onboarding",
    github: "https://github.com/procore/design-system/feature-onboarding",
    examples: ["Feature tours", "Progressive tooltips", "Interactive walkthroughs", "Getting started guides"]
  },
  {
    name: "Forms",
    description: "Comprehensive form patterns and validation guidelines for data collection",
    type: "pattern",
    lifecycle: "Stable",
    category: "Forms",
    owner: "Design Systems Team",
    lastUpdated: "2024-01-10",
    usage: "High",
    certification: "NGX Gold",
    documentation: "https://confluence.procore.com/forms",
    storybook: "https://stories.procore.com/forms",
    figma: "https://figma.com/procore-forms",
    github: "https://github.com/procore/design-system/forms",
    examples: ["Registration forms", "Multi-step wizards", "Inline editing", "Form validation"]
  },
  {
    name: "Loading",
    description: "Loading states and progress indicators to communicate system activity",
    type: "pattern",
    lifecycle: "Stable",
    category: "Feedback",
    owner: "Platform Team",
    lastUpdated: "2024-01-08",
    usage: "High",
    documentation: "https://confluence.procore.com/loading",
    storybook: "https://stories.procore.com/loading",
    figma: "https://figma.com/procore-loading",
    github: "https://github.com/procore/design-system/loading",
    examples: ["Skeleton screens", "Progress bars", "Spinners", "Lazy loading"]
  },
  {
    name: "Navigation",
    description: "Navigation patterns for different application types and user flows",
    type: "pattern",
    lifecycle: "Stable",
    category: "Navigation",
    owner: "UX Research Team",
    lastUpdated: "2024-01-05",
    usage: "High",
    certification: "NGX Gold",
    documentation: "https://confluence.procore.com/navigation",
    storybook: "https://stories.procore.com/navigation",
    figma: "https://figma.com/procore-navigation",
    github: "https://github.com/procore/design-system/navigation",
    examples: ["Primary navigation", "Breadcrumbs", "Pagination", "Tabs", "Sidebar navigation"]
  },
  {
    name: "Notification Messaging",
    description: "System-to-user communication patterns for alerts, updates, and notifications",
    type: "pattern",
    lifecycle: "Beta",
    category: "Communication",
    owner: "Design Systems Team",
    lastUpdated: "2024-01-03",
    usage: "Medium",
    certification: "NGX Silver",
    documentation: "https://confluence.procore.com/notification-messaging",
    storybook: "https://stories.procore.com/notification-messaging",
    figma: "https://figma.com/procore-notification-messaging",
    github: "https://github.com/procore/design-system/notification-messaging",
    examples: ["Toast notifications", "Banner messages", "Push notifications", "In-app messaging"]
  },
  {
    name: "Progressive Disclosure",
    description: "Patterns for revealing information and functionality progressively",
    type: "pattern",
    lifecycle: "Beta",
    category: "Information Architecture",
    owner: "UX Research Team",
    lastUpdated: "2023-12-28",
    usage: "Medium",
    certification: "NGX Platinum",
    documentation: "https://confluence.procore.com/progressive-disclosure",
    storybook: "https://stories.procore.com/progressive-disclosure",
    figma: "https://figma.com/procore-progressive-disclosure",
    github: "https://github.com/procore/design-system/progressive-disclosure",
    examples: ["Expandable sections", "Show more/less", "Drill-down interfaces", "Step-by-step reveals"]
  },
  {
    name: "Saving",
    description: "Patterns for data persistence and save state communication",
    type: "pattern",
    lifecycle: "Experimental",
    category: "Data Management",
    owner: "Platform Team",
    lastUpdated: "2023-12-25",
    usage: "Growing",
    documentation: "https://confluence.procore.com/saving",
    storybook: "https://stories.procore.com/saving",
    figma: "https://figma.com/procore-saving",
    github: "https://github.com/procore/design-system/saving",
    examples: ["Auto-save indicators", "Manual save confirmation", "Draft states", "Save conflicts"]
  },
  {
    name: "Feedback",
    description: "User feedback patterns including ratings, reviews, and user input collection",
    type: "pattern",
    lifecycle: "Stable",
    category: "User Input",
    owner: "Design Systems Team",
    lastUpdated: "2023-12-22",
    usage: "Medium",
    documentation: "https://confluence.procore.com/feedback",
    storybook: "https://stories.procore.com/feedback",
    figma: "https://figma.com/procore-feedback",
    github: "https://github.com/procore/design-system/feedback",
    examples: ["Star ratings", "Thumbs up/down", "Comment forms", "Survey patterns"]
  },
  {
    name: "Error Messaging",
    description: "Clear and actionable error communication patterns for system failures",
    type: "pattern",
    lifecycle: "Stable",
    category: "Error Handling",
    owner: "Design Systems Team",
    lastUpdated: "2023-12-20",
    usage: "High",
    documentation: "https://confluence.procore.com/error-messaging",
    storybook: "https://stories.procore.com/error-messaging",
    figma: "https://figma.com/procore-error-messaging",
    github: "https://github.com/procore/design-system/error-messaging",
    examples: ["Form validation errors", "System error pages", "Connection failures", "Permission errors"]
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
  const [certificationFilter, setCertificationFilter] = useState("all")
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

  const uniqueCertifications = useMemo(() => {
    const certifications = [...new Set(patterns.filter(p => p.certification).map(p => p.certification))]
    return certifications.sort((a, b) => {
      const order = ["NGX Silver", "NGX Gold", "NGX Platinum"]
      return order.indexOf(a) - order.indexOf(b)
    })
  }, [])

  const filteredPatterns = useMemo(() => {
    const filtered = patterns.filter((pattern) => {
      const matchesSearch = pattern.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pattern.description.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesCategory = categoryFilter === "all" || pattern.category === categoryFilter
      const matchesLifecycle = lifecycleFilter === "all" || pattern.lifecycle === lifecycleFilter
      const matchesCertification = certificationFilter === "all" || pattern.certification === certificationFilter
      
      return matchesSearch && matchesCategory && matchesLifecycle && matchesCertification
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
  }, [searchTerm, categoryFilter, lifecycleFilter, certificationFilter, sortBy])

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
            
            <Select value={certificationFilter} onValueChange={setCertificationFilter}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Certification" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Certifications</SelectItem>
                {uniqueCertifications.map((certification) => (
                  <SelectItem key={certification} value={certification}>
                    {certification}
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-6">
          {filteredPatterns.map((pattern) => (
            <Card key={pattern.name} className="group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
              {/* Visual Example Area */}
              <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 border-b flex items-center justify-center relative overflow-hidden">
                {pattern.name === "Empty States" && (
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 mx-auto bg-gray-200 rounded-lg flex items-center justify-center">
                      <Layout className="w-8 h-8 text-gray-400" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-medium text-gray-600">No items found</div>
                      <div className="text-xs text-gray-400">Start by adding your first item</div>
                    </div>
                  </div>
                )}
                {pattern.name === "Feature Onboarding" && (
                  <div className="relative">
                    <div className="bg-white rounded-lg shadow-lg p-4 max-w-xs">
                      <div className="text-sm font-medium mb-2">✨ New Feature!</div>
                      <div className="text-xs text-gray-600 mb-3">Click here to try our new collaboration tools</div>
                      <div className="flex gap-2">
                        <Button size="sm" className="text-xs">Got it</Button>
                        <Button variant="outline" size="sm" className="text-xs">Skip</Button>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                )}
                {pattern.name === "Forms" && (
                  <div className="bg-white rounded-lg shadow-sm p-4 w-full max-w-xs space-y-3">
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-gray-700">Name</label>
                      <div className="h-8 bg-gray-100 rounded border"></div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-gray-700">Email</label>
                      <div className="h-8 bg-gray-100 rounded border border-red-200"></div>
                      <div className="text-xs text-red-500">Please enter a valid email</div>
                    </div>
                    <Button size="sm" className="w-full text-xs">Submit</Button>
                  </div>
                )}
                {pattern.name === "Loading" && (
                  <div className="space-y-4 w-full max-w-xs">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-500 rounded-full animate-spin border-2 border-blue-500 border-t-transparent"></div>
                      <div className="text-sm text-gray-600">Loading...</div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
                    </div>
                  </div>
                )}
                {pattern.name === "Navigation" && (
                  <div className="bg-white rounded-lg shadow-sm p-2 w-full max-w-xs">
                    <div className="flex space-x-1">
                      <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">Home</div>
                      <div className="px-3 py-1 text-gray-600 rounded text-xs">Products</div>
                      <div className="px-3 py-1 text-gray-600 rounded text-xs">About</div>
                      <div className="px-3 py-1 text-gray-600 rounded text-xs">Contact</div>
                    </div>
                  </div>
                )}
                {pattern.name === "Notification Messaging" && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 max-w-xs">
                    <div className="flex items-start space-x-2">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-green-800">Success!</div>
                        <div className="text-xs text-green-700">Your changes have been saved</div>
                      </div>
                    </div>
                  </div>
                )}
                {pattern.name === "Progressive Disclosure" && (
                  <div className="bg-white rounded-lg shadow-sm p-3 w-full max-w-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Advanced Options</div>
                      <div className="text-xs text-blue-600">Show more ↓</div>
                    </div>
                    <div className="border-t pt-2 space-y-2 opacity-50">
                      <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                )}
                {pattern.name === "Saving" && (
                  <div className="bg-white rounded-lg shadow-sm p-3 max-w-xs">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
                      <div className="text-sm text-gray-600">Saving...</div>
                    </div>
                    <div className="text-xs text-gray-400">All changes are automatically saved</div>
                  </div>
                )}
                {pattern.name === "Feedback" && (
                  <div className="bg-white rounded-lg shadow-sm p-3 max-w-xs text-center space-y-2">
                    <div className="text-sm font-medium">How was your experience?</div>
                    <div className="flex justify-center space-x-1">
                      {[1,2,3,4,5].map((star) => (
                        <div key={star} className={`w-6 h-6 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`}>
                          ⭐
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {pattern.name === "Error Messaging" && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 max-w-xs">
                    <div className="flex items-start space-x-2">
                      <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                        <div className="text-white text-xs">!</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-red-800">Connection Error</div>
                        <div className="text-xs text-red-700">Please check your internet connection and try again</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <div className="space-y-3">
                  {/* NextGen Certification tag */}
                  {pattern.certification && (
                    <div className="flex items-center">
                      <Badge variant="default" className="bg-orange-500 hover:bg-orange-600 text-white">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        {pattern.certification}
                      </Badge>
                    </div>
                  )}

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-lg">{pattern.name}</CardTitle>
                      <Badge className={getLifecycleColor(pattern.lifecycle)} variant="secondary">
                        {pattern.lifecycle}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm text-gray-600 leading-relaxed">
                      {pattern.description}
                    </CardDescription>
                  </div>

                  {/* Examples as tags */}
                  {pattern.examples && (
                    <div className="flex flex-wrap gap-1">
                      {pattern.examples.slice(0, 3).map((example) => (
                        <Badge key={example} variant="outline" className="text-xs text-gray-500 border-gray-200">
                          {example}
                        </Badge>
                      ))}
                      {pattern.examples.length > 3 && (
                        <Badge variant="outline" className="text-xs text-gray-400 border-gray-200">
                          +{pattern.examples.length - 3} more
                        </Badge>
                      )}
                    </div>
                  )}

                  {/* Simplified metadata */}
                  <div className="text-xs text-gray-500 space-y-1 pt-2 border-t">
                    <div className="flex items-center">
                      <Tag className="w-3 h-3 text-gray-400 mr-1.5" />
                      Category: <span className="font-medium ml-1">{pattern.category}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 text-gray-400 mr-1.5" />
                      Last Updated: <span className="font-medium ml-1">{new Date(pattern.lastUpdated).toLocaleDateString()}</span>
                    </div>
                  </div>

                  {/* Single Learn More CTA */}
                  <Button variant="outline" size="sm" className="w-full mt-4 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors" asChild>
                    <a href={pattern.documentation} target="_blank" rel="noopener noreferrer">
                      Learn more
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </LayoutWrapper>
  )
}
