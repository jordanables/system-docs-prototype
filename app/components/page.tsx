"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Clock, Users, AlertCircle, CheckCircle, XCircle, Github, Figma, BookOpen, FileText, Star, Search, ArrowUpDown, Tag, Grid } from "lucide-react"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { useState, useMemo } from "react"

// Official Components Data
const components = [
  {
    name: "Button",
    description: "Clickable elements for user actions",
    type: "official",
    lifecycle: "Stable",
    category: "Actions",
    owner: "Web Design Systems Team",
    documentation: "https://confluence.procore.com/button",
    storybook: "https://stories.procore.com/button",
    figma: "https://figma.com/procore-button",
    github: "https://github.com/procore/design-system/button",
    lastUpdated: "2024-01-15",
    usage: "High",
  },
  {
    name: "Input",
    description: "Text input fields for forms",
    type: "official",
    lifecycle: "Stable",
    category: "Forms",
    owner: "Web Design Systems Team",
    documentation: "https://confluence.procore.com/input",
    storybook: "https://stories.procore.com/input",
    figma: "https://figma.com/procore-input",
    github: "https://github.com/procore/design-system/input",
    lastUpdated: "2024-01-12",
    usage: "High",
  },
  {
    name: "Modal",
    description: "Overlay dialogs for focused interactions",
    type: "official",
    lifecycle: "Stable",
    category: "Overlays",
    owner: "Web Design Systems Team",
    documentation: "https://core.procore.com/12.27.0/web/components/modal/react/",
    storybook: "https://stories.procore.com/modal",
    figma: "https://figma.com/procore-modal",
    github: "https://github.com/procore/design-system/modal",
    lastUpdated: "2024-01-10",
    usage: "High",
  },
  {
    name: "Data Table",
    description: "Complex data display with sorting and filtering",
    type: "official",
    lifecycle: "Beta",
    category: "Data Display",
    owner: "Web Design Systems Team",
    documentation: "https://confluence.procore.com/data-table",
    storybook: "https://stories.procore.com/data-table",
    figma: "https://figma.com/procore-data-table",
    github: "https://github.com/procore/design-system/data-table",
    lastUpdated: "2024-01-16",
    isNew: true,
    usage: "Growing",
  },
  // Sub-components from Error Pages
  {
    name: "ErrorMessage",
    description: "Standardized error messaging component for consistent user feedback",
    type: "official",
    lifecycle: "Stable",
    category: "Feedback",
    owner: "Web Design Systems Team",
    documentation: "https://confluence.procore.com/error-message",
    storybook: "https://stories.procore.com/error-message",
    figma: "https://figma.com/procore-error-message",
    github: "https://github.com/procore/design-system/error-message",
    lastUpdated: "2024-01-10",
    usage: "Medium",
  },
  {
    name: "IllustrationCard",
    description: "Card component for displaying illustrations with contextual content",
    type: "official",
    lifecycle: "Stable",
    category: "Data Display",
    owner: "Web Design Systems Team",
    documentation: "https://confluence.procore.com/illustration-card",
    storybook: "https://stories.procore.com/illustration-card",
    figma: "https://figma.com/procore-illustration-card",
    github: "https://github.com/procore/design-system/illustration-card",
    lastUpdated: "2024-01-08",
    usage: "Medium",
  },
  {
    name: "ContactSupport",
    description: "Component for displaying support contact information and actions",
    type: "official",
    lifecycle: "Stable",
    category: "Communication",
    owner: "Web Design Systems Team",
    documentation: "https://confluence.procore.com/contact-support",
    storybook: "https://stories.procore.com/contact-support",
    figma: "https://figma.com/procore-contact-support",
    github: "https://github.com/procore/design-system/contact-support",
    lastUpdated: "2024-01-05",
    usage: "Low",
  },
  // Sub-components from Unified Viewer
  {
    name: "DocumentViewer",
    description: "Component for viewing and interacting with document files",
    type: "official",
    lifecycle: "Stable",
    category: "Data Display",
    owner: "Web Design Systems Team",
    documentation: "https://confluence.procore.com/document-viewer",
    storybook: "https://stories.procore.com/document-viewer",
    figma: "https://figma.com/procore-document-viewer",
    github: "https://github.com/procore/design-system/document-viewer",
    lastUpdated: "2024-01-12",
    usage: "Medium",
  },
  {
    name: "MediaPlayer",
    description: "Component for playing and controlling media files",
    type: "official",
    lifecycle: "Beta",
    category: "Data Display",
    owner: "Web Design Systems Team",
    documentation: "https://confluence.procore.com/media-player",
    storybook: "https://stories.procore.com/media-player",
    figma: "https://figma.com/procore-media-player",
    github: "https://github.com/procore/design-system/media-player",
    lastUpdated: "2024-01-14",
    usage: "Low",
  },
  {
    name: "AnnotationTools",
    description: "Tools for adding annotations and markup to documents and media",
    type: "official",
    lifecycle: "Beta",
    category: "Actions",
    owner: "Web Design Systems Team",
    documentation: "https://confluence.procore.com/annotation-tools",
    storybook: "https://stories.procore.com/annotation-tools",
    figma: "https://figma.com/procore-annotation-tools",
    github: "https://github.com/procore/design-system/annotation-tools",
    lastUpdated: "2024-01-11",
    usage: "Low",
  },
  {
    name: "ViewerControls",
    description: "Control components for managing viewer functionality and settings",
    type: "official",
    lifecycle: "Stable",
    category: "Actions",
    owner: "Web Design Systems Team",
    documentation: "https://confluence.procore.com/viewer-controls",
    storybook: "https://stories.procore.com/viewer-controls",
    figma: "https://figma.com/procore-viewer-controls",
    github: "https://github.com/procore/design-system/viewer-controls",
    lastUpdated: "2024-01-09",
    usage: "Medium",
  },
  // Sub-components from Activity Feed
  {
    name: "ActivityItem",
    description: "Individual activity entry component for displaying timeline events",
    type: "official",
    lifecycle: "Stable",
    category: "Communication",
    owner: "Web Design Systems Team",
    documentation: "https://confluence.procore.com/activity-item",
    storybook: "https://stories.procore.com/activity-item",
    figma: "https://figma.com/procore-activity-item",
    github: "https://github.com/procore/design-system/activity-item",
    lastUpdated: "2024-01-13",
    usage: "Growing",
  },
  {
    name: "TimelineCard",
    description: "Card component for displaying chronological information",
    type: "official",
    lifecycle: "Stable",
    category: "Data Display",
    owner: "Web Design Systems Team",
    documentation: "https://confluence.procore.com/timeline-card",
    storybook: "https://stories.procore.com/timeline-card",
    figma: "https://figma.com/procore-timeline-card",
    github: "https://github.com/procore/design-system/timeline-card",
    lastUpdated: "2024-01-07",
    usage: "Medium",
  },
  {
    name: "NotificationBell",
    description: "Icon component for displaying notification alerts and counts",
    type: "official",
    lifecycle: "Stable",
    category: "Communication",
    owner: "Web Design Systems Team",
    documentation: "https://confluence.procore.com/notification-bell",
    storybook: "https://stories.procore.com/notification-bell",
    figma: "https://figma.com/procore-notification-bell",
    github: "https://github.com/procore/design-system/notification-bell",
    lastUpdated: "2024-01-06",
    usage: "High",
  },
  {
    name: "FeedContainer",
    description: "Container component for managing activity feed layout and scrolling",
    type: "official",
    lifecycle: "Stable",
    category: "Communication",
    owner: "Web Design Systems Team",
    documentation: "https://confluence.procore.com/feed-container",
    storybook: "https://stories.procore.com/feed-container",
    figma: "https://figma.com/procore-feed-container",
    github: "https://github.com/procore/design-system/feed-container",
    lastUpdated: "2024-01-04",
    usage: "Medium",
  },
  // Sub-components from SmartGrid
  {
    name: "ColumnManager",
    description: "Component for managing table column visibility and ordering",
    type: "official",
    lifecycle: "Beta",
    category: "Actions",
    owner: "Web Design Systems Team",
    documentation: "https://confluence.procore.com/column-manager",
    storybook: "https://stories.procore.com/column-manager",
    figma: "https://figma.com/procore-column-manager",
    github: "https://github.com/procore/design-system/column-manager",
    lastUpdated: "2024-01-17",
    usage: "Growing",
  },
  {
    name: "FilterPanel",
    description: "Panel component for advanced filtering and search functionality",
    type: "official",
    lifecycle: "Beta",
    category: "Forms",
    owner: "Web Design Systems Team",
    documentation: "https://confluence.procore.com/filter-panel",
    storybook: "https://stories.procore.com/filter-panel",
    figma: "https://figma.com/procore-filter-panel",
    github: "https://github.com/procore/design-system/filter-panel",
    lastUpdated: "2024-01-18",
    usage: "Growing",
  },
  {
    name: "ExportTools",
    description: "Component for exporting data in various formats",
    type: "official",
    lifecycle: "Stable",
    category: "Actions",
    owner: "Web Design Systems Team",
    documentation: "https://confluence.procore.com/export-tools",
    storybook: "https://stories.procore.com/export-tools",
    figma: "https://figma.com/procore-export-tools",
    github: "https://github.com/procore/design-system/export-tools",
    lastUpdated: "2024-01-03",
    usage: "Medium",
  },
]

// Community Components Data
const communityComponents = [
  {
    name: "Error Pages",
    description: "Standardized error page templates and messaging patterns for consistent user experiences",
    type: "community",
    category: "Feedback",
    owner: "Platform Architecture Team",
    health: "Healthy",
    lastUpdated: "2024-01-15",
    documentation: "https://confluence.procore.com/error-pages",
    storybook: "https://stories.procore.com/errors",
    figma: "https://figma.com/procore-errors",
    github: "https://github.com/procore/error-pages",
    usage: "High",
    components: ["ErrorMessage", "Button", "IllustrationCard", "ContactSupport"],
    endorsed: true,
  },
  {
    name: "Unified Viewer",
    description: "Consistent document and media viewing experience across all Procore products",
    type: "community",
    category: "Data Display",
    owner: "Document Management Team",
    health: "Caution",
    lastUpdated: "2023-12-08",
    documentation: "https://confluence.procore.com/unified-viewer",
    storybook: "https://stories.procore.com/viewer",
    figma: "https://figma.com/procore-viewer",
    github: "https://github.com/procore/unified-viewer",
    usage: "Medium",
    components: ["DocumentViewer", "MediaPlayer", "AnnotationTools", "ViewerControls"],
  },
  {
    name: "Activity Feed",
    description: "Real-time activity streams and notification patterns for keeping users informed of project updates",
    type: "community",
    category: "Communication",
    owner: "Communication Platform Team",
    health: "Critical",
    lastUpdated: "2024-01-20",
    documentation: "https://confluence.procore.com/activity-feed",
    storybook: "https://stories.procore.com/activity",
    figma: "https://figma.com/procore-activity",
    github: "https://github.com/procore/activity-feed",
    usage: "Low",
    components: ["ActivityItem", "TimelineCard", "NotificationBell", "FeedContainer"],
  },
  {
    name: "SmartGrid",
    description: "Advanced data table with sorting, filtering, pagination, and bulk operations",
    type: "community",
    category: "Data Display",
    owner: "Budget Team",
    health: "Caution",
    lastUpdated: "2023-11-22",
    documentation: "https://confluence.procore.com/data-table",
    storybook: "https://stories.procore.com/data-table",
    figma: "https://figma.com/procore-data-table",
    github: "https://github.com/procore/smartgrid",
    usage: "Growing",
    components: ["DataTable", "ColumnManager", "FilterPanel", "ExportTools"],
  },
]

// Combine all components
const allComponents = [...components, ...communityComponents]

// Helper functions
function getLifecycleColor(lifecycle: string) {
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

function getHealthColor(health: string) {
  switch (health) {
    case "Healthy":
      return "bg-green-100 text-green-800"
    case "Caution":
      return "bg-yellow-100 text-yellow-800"
    case "Critical":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

function getHealthIcon(health: string) {
  switch (health) {
    case "Healthy":
      return <CheckCircle className="w-4 h-4 text-green-600" />
    case "Caution":
      return <AlertCircle className="w-4 h-4 text-yellow-600" />
    case "Critical":
      return <XCircle className="w-4 h-4 text-red-600" />
    default:
      return <AlertCircle className="w-4 h-4 text-gray-600" />
  }
}

function getHealthMessage(name: string, health: string) {
  if (name === "SmartGrid" && health === "Caution") {
    return "This component appears to be actively maintained, but has frequent breaking changes."
  }
  
  switch (health) {
    case "Healthy":
      return "This component is well-maintained and ready for production use."
    case "Caution":
      return "This component may have some known issues or is undergoing changes."
    case "Critical":
      return "This component has significant issues and should be used with caution."
    default:
      return "Health status information not available."
  }
}

function scrollToComponent(componentName: string) {
  const element = document.getElementById(`component-${componentName.toLowerCase().replace(/\s+/g, '-')}`)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    // Add a brief highlight effect
    element.classList.add('ring-2', 'ring-blue-400', 'ring-opacity-75')
    setTimeout(() => {
      element.classList.remove('ring-2', 'ring-blue-400', 'ring-opacity-75')
    }, 2000)
  }
}

export default function TestPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [healthFilter, setHealthFilter] = useState("all")
  const [ownerFilter, setOwnerFilter] = useState("all")
  const [sortBy, setSortBy] = useState("name-asc")

  // Get unique values for filter options
  const uniqueCategories = useMemo(() => {
    const categories = [...new Set(allComponents.map(c => c.category))]
    return categories.sort()
  }, [])

  const uniqueStatuses = useMemo(() => {
    const statuses = [...new Set(allComponents.filter(c => c.type === "official").map(c => c.lifecycle))]
    return statuses.sort()
  }, [])

  const uniqueHealthStates = useMemo(() => {
    const healthStates = [...new Set(allComponents.filter(c => c.type === "community").map(c => c.health))]
    return healthStates.sort()
  }, [])

  const uniqueOwners = useMemo(() => {
    const owners = [...new Set(allComponents.map(c => c.owner))]
    return owners.sort()
  }, [])

  const filteredComponents = useMemo(() => {
    const filtered = allComponents.filter((component) => {
      const matchesSearch = component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          component.description.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesType = typeFilter === "all" || component.type === typeFilter
      const matchesCategory = categoryFilter === "all" || component.category === categoryFilter
      
      // Status filter - applies to platform components (lifecycle)
      const matchesStatus = statusFilter === "all" || 
        (component.type === "official" && component.lifecycle === statusFilter)
      
      // Health filter - applies to community components (health)
      const matchesHealth = healthFilter === "all" || 
        (component.type === "community" && component.health === healthFilter)
      
      const matchesOwner = ownerFilter === "all" || component.owner === ownerFilter
      
      return matchesSearch && matchesType && matchesCategory && matchesStatus && matchesHealth && matchesOwner
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
          // Sort by usage level (both platform and community components)
          const getUsageRank = (component: any) => {
            if (!component.usage) return 0
            switch (component.usage.toLowerCase()) {
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
  }, [searchTerm, typeFilter, categoryFilter, statusFilter, healthFilter, ownerFilter, sortBy])

  const officialCount = filteredComponents.filter(c => c.type === "official").length
  const communityCount = filteredComponents.filter(c => c.type === "community").length

  return (
    <LayoutWrapper>
      <div className="space-y-8">
        {/* Header */}
        <div className="px-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Components</h1>
          <p className="text-lg text-gray-600">
            Chad-CN is a collection of UI components found in global and local design systems across P&T.
          </p>
        </div>

        {/* Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mx-6">
          <h3 className="font-semibold text-blue-900 mb-2">Building something new?</h3>
          <div className="flex items-start justify-between gap-6">
            <p className="text-blue-800 flex-1">
              If you are extending a system component or building something new consider contributing to our system community. These reusable components help bridge the gap between the system and specialized solution team needs.
            </p>
            <Button variant="outline" size="sm" className="shrink-0">
              Support the Community
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="px-6">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">{officialCount}</div>
              <div className="text-sm text-blue-600">Platform Components</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-600">{communityCount}</div>
              <div className="text-sm text-purple-600">Community Components</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-600">{filteredComponents.length}</div>
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
                placeholder="Search components..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* Filters - reordered: types, categories, owners */}
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full lg:w-40">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="official">Platform</SelectItem>
                <SelectItem value="community">Community</SelectItem>
              </SelectContent>
            </Select>
            
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
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full lg:w-36">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                {uniqueStatuses.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={healthFilter} onValueChange={setHealthFilter}>
              <SelectTrigger className="w-full lg:w-36">
                <SelectValue placeholder="Health" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Health</SelectItem>
                {uniqueHealthStates.map((health) => (
                  <SelectItem key={health} value={health}>
                    {health}
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
          
          {filteredComponents.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No components match your current filters.</p>
            </div>
          )}
        </div>

        {/* Combined Grid */}
        <div className="grid gap-6 md:grid-cols-2 px-6">
          {filteredComponents.map((component) => (
            <Card key={component.name} id={`component-${component.name.toLowerCase().replace(/\s+/g, '-')}`} className="h-full transition-all duration-300">
              <div className="flex h-full">
                {/* Main Content - Left Side */}
                <div className="flex-1 flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={component.type === "official" ? "outline" : "secondary"} className={component.type === "official" ? "bg-gray-100 text-gray-700 border-gray-300" : ""}>
                        {component.type === "official" ? "Platform" : "Community"}
                      </Badge>
                      {component.endorsed && (
                        <Badge variant="default" className="bg-orange-500 hover:bg-orange-600 text-white">
                          <Star className="w-3 h-3 mr-1 fill-current" />
                          Recommended
                        </Badge>
                      )}
                      {component.isNew && (
                        <Badge variant="secondary" className="text-xs">New</Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <CardTitle className="text-xl">{component.name}</CardTitle>
                      <div className="flex items-center gap-2">
                        {/* Official components show lifecycle */}
                        {component.type === "official" && (
                          <Badge className={getLifecycleColor(component.lifecycle)}>
                            {component.lifecycle}
                          </Badge>
                        )}
                        
                        {/* Community components show health */}
                        {component.type === "community" && (
                          <>
                            <HoverCard>
                              <HoverCardTrigger asChild>
                                <Badge variant="secondary" className={`${getHealthColor(component.health)} cursor-help`}>
                                  {component.health}
                                </Badge>
                              </HoverCardTrigger>
                              <HoverCardContent className="w-80">
                                <div className="space-y-2">
                                  <h4 className="text-sm font-semibold">Health Status: {component.health}</h4>
                                  <p className="text-sm text-gray-600">
                                    {getHealthMessage(component.name, component.health)}
                                  </p>
                                </div>
                              </HoverCardContent>
                            </HoverCard>
                          </>
                        )}
                        
                        {/* Usage badge for all components */}
                        {component.usage && (
                          <Badge variant="outline">{component.usage} Usage</Badge>
                        )}
                      </div>
                    </div>
                    <CardDescription className="text-sm">{component.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-1 pt-0">
                    <div className="space-y-3">
                      {/* Category (all components) */}
                      <div className="text-sm flex items-center">
                        <Tag className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="font-medium text-gray-700">Category:</span>
                        <span className="text-gray-600 ml-2">{component.category}</span>
                      </div>

                      {/* Owner (all components) */}
                      <div className="text-sm flex items-center">
                        <Users className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="font-medium text-gray-700">Owner:</span>
                        <span className="text-gray-600 ml-2">{component.owner}</span>
                      </div>

                      <div className="text-sm flex items-center">
                        <Clock className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="font-medium text-gray-700">Last Updated:</span>
                        <span className="text-gray-600 ml-2">{new Date(component.lastUpdated).toLocaleDateString()}</span>
                      </div>

                      {/* Community-specific components info - moved to bottom */}
                      {component.type === "community" && (
                        <div className="text-sm">
                          <div className="flex items-center mb-2">
                            <Grid className="w-4 h-4 text-gray-500 mr-2" />
                            <span className="font-medium text-gray-700">Sub-Components:</span>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {component.components.map((comp) => (
                              <Badge 
                                key={comp} 
                                variant="outline" 
                                className="text-xs cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-colors"
                                onClick={() => scrollToComponent(comp)}
                              >
                                {comp}
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
                    <a href={component.documentation} target="_blank" rel="noopener noreferrer">
                      <FileText className="w-3 h-3 mr-1" />
                      Docs
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="w-full text-xs">
                    <a href={component.storybook} target="_blank" rel="noopener noreferrer">
                      <BookOpen className="w-3 h-3 mr-1" />
                      Storybook
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="w-full text-xs">
                    <a href={component.figma} target="_blank" rel="noopener noreferrer">
                      <Figma className="w-3 h-3 mr-1" />
                      Figma
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="w-full text-xs">
                    <a href={component.github} target="_blank" rel="noopener noreferrer">
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
