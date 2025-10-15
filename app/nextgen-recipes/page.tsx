"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Clock, Users, AlertCircle, CheckCircle, XCircle, Github, Figma, BookOpen, FileText, Star, Search, ArrowUpDown, Check } from "lucide-react"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { useState, useMemo } from "react"
import Link from "next/link"

const recipes = [
  {
    name: "Error Pages",
    description: "Standardized error page templates and messaging patterns for consistent user experiences",
    owner: "Platform Architecture Team",
    health: "healthy",
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
    owner: "Document Management Team",
    health: "caution",
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
    owner: "Communication Platform Team",
    health: "critical",
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
    owner: "Budget Team",
    health: "caution",
    lastUpdated: "2023-11-22",
    documentation: "https://confluence.procore.com/data-table",
    storybook: "https://stories.procore.com/data-table",
    figma: "https://figma.com/procore-data-table",
    github: "https://github.com/procore/smartgrid",
    usage: "Growing",
    components: ["DataTable", "ColumnManager", "FilterPanel", "ExportTools"],
  },
]

const getHealthIcon = (health: string) => {
  switch (health) {
    case "healthy":
      return <CheckCircle className="w-4 h-4 text-green-600" />
    case "caution":
      return <AlertCircle className="w-4 h-4 text-yellow-600" />
    case "critical":
      return <XCircle className="w-4 h-4 text-red-600" />
    default:
      return <AlertCircle className="w-4 h-4 text-gray-400" />
  }
}

const getHealthColor = (health: string) => {
  switch (health) {
    case "healthy":
      return "bg-green-100 text-green-800"
    case "caution":
      return "bg-yellow-100 text-yellow-800"
    case "critical":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

const ErrorIllustration = () => (
  <svg width="120" height="80" viewBox="0 0 120 80" className="mx-auto">
    <rect x="10" y="10" width="100" height="60" rx="8" fill="#fef2f2" stroke="#fecaca" strokeWidth="2"/>
    {/* Error icon */}
    <circle cx="60" cy="30" r="12" fill="#ef4444" />
    <path d="M54 24 L66 36 M66 24 L54 36" stroke="white" strokeWidth="2" strokeLinecap="round" />
    
    {/* Error message lines */}
    <rect x="25" y="50" width="70" height="4" rx="2" fill="#dc2626" />
    <rect x="30" y="58" width="60" height="3" rx="1.5" fill="#9ca3af" />
    
    {/* Action button */}
    <rect x="50" y="68" width="20" height="8" rx="4" fill="#3b82f6" />
  </svg>
)

const ActivityIllustration = () => (
  <svg width="120" height="80" viewBox="0 0 120 80" className="mx-auto">
    <rect x="10" y="10" width="100" height="60" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2"/>
    
    {/* Activity Feed Items */}
    <rect x="20" y="18" width="80" height="12" rx="6" fill="#f1f5f9" stroke="#e5e7eb" strokeWidth="1"/>
    <circle cx="26" cy="24" r="3" fill="#3b82f6"/>
    <rect x="35" y="21" width="40" height="2" rx="1" fill="#6b7280"/>
    <rect x="35" y="25" width="25" height="2" rx="1" fill="#9ca3af"/>
    
    <rect x="20" y="35" width="80" height="12" rx="6" fill="#fef2f2" stroke="#fecaca" strokeWidth="1"/>
    <circle cx="26" cy="41" r="3" fill="#ef4444"/>
    <rect x="35" y="38" width="45" height="2" rx="1" fill="#6b7280"/>
    <rect x="35" y="42" width="30" height="2" rx="1" fill="#9ca3af"/>
    
    <rect x="20" y="52" width="80" height="12" rx="6" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1"/>
    <circle cx="26" cy="58" r="3" fill="#22c55e"/>
    <rect x="35" y="55" width="35" height="2" rx="1" fill="#6b7280"/>
    <rect x="35" y="59" width="20" height="2" rx="1" fill="#9ca3af"/>
    
    {/* Notification bell */}
    <circle cx="95" cy="20" r="4" fill="#f59e0b"/>
    <path d="M93 18 L97 18 M95 16 L95 22" stroke="white" strokeWidth="1" strokeLinecap="round"/>
  </svg>
)

const ViewerIllustration = () => (
  <svg width="120" height="80" viewBox="0 0 120 80" className="mx-auto">
    <rect x="10" y="10" width="100" height="60" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2"/>
    <rect x="15" y="15" width="90" height="35" rx="4" fill="#e2e8f0"/>
    <rect x="20" y="20" width="80" height="25" rx="2" fill="#cbd5e1"/>
    <circle cx="25" cy="32" r="6" fill="#94a3b8"/>
    <rect x="35" y="28" width="20" height="3" rx="1.5" fill="#94a3b8"/>
    <rect x="35" y="34" width="15" height="3" rx="1.5" fill="#94a3b8"/>
    <rect x="15" y="55" width="20" height="10" rx="2" fill="#ddd6fe"/>
    <rect x="40" y="55" width="20" height="10" rx="2" fill="#fef3c7"/>
    <rect x="65" y="55" width="20" height="10" rx="2" fill="#dcfce7"/>
    <rect x="90" y="55" width="15" height="10" rx="2" fill="#fee2e2"/>
  </svg>
)

const TableIllustration = () => (
  <svg width="120" height="80" viewBox="0 0 120 80" className="mx-auto">
    <rect x="10" y="10" width="100" height="60" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2"/>
    <rect x="10" y="10" width="100" height="15" rx="8" fill="#e2e8f0"/>
    <line x1="35" y1="25" x2="35" y2="70" stroke="#e2e8f0" strokeWidth="1"/>
    <line x1="60" y1="25" x2="60" y2="70" stroke="#e2e8f0" strokeWidth="1"/>
    <line x1="85" y1="25" x2="85" y2="70" stroke="#e2e8f0" strokeWidth="1"/>
    <line x1="10" y1="35" x2="110" y2="35" stroke="#e2e8f0" strokeWidth="1"/>
    <line x1="10" y1="45" x2="110" y2="45" stroke="#e2e8f0" strokeWidth="1"/>
    <line x1="10" y1="55" x2="110" y2="55" stroke="#e2e8f0" strokeWidth="1"/>
    <rect x="15" y="15" width="15" height="6" rx="1" fill="#64748b"/>
    <rect x="40" y="15" width="15" height="6" rx="1" fill="#64748b"/>
    <rect x="65" y="15" width="15" height="6" rx="1" fill="#64748b"/>
    <rect x="90" y="15" width="15" height="6" rx="1" fill="#64748b"/>
  </svg>
)

const getIllustration = (recipeName: string) => {
  switch (recipeName) {
    case "Error Pages":
      return <ErrorIllustration />
    case "Activity Feed":
      return <ActivityIllustration />
    case "Unified Viewer":
      return <ViewerIllustration />
    case "SmartGrid":
      return <TableIllustration />
    default:
      return null
  }
}

const getComponentPath = (componentName: string) => {
  // Convert component names to URL-friendly paths
  const componentRoutes: { [key: string]: string } = {
    "Button": "/components/button",
    "ErrorMessage": "/components", // Assuming ErrorMessage doesn't have its own page yet
    "IllustrationCard": "/components", // Assuming IllustrationCard doesn't have its own page yet
    "ContactSupport": "/components", // Assuming ContactSupport doesn't have its own page yet
    "DocumentViewer": "/components",
    "MediaPlayer": "/components",
    "AnnotationTools": "/components",
    "ViewerControls": "/components",
    "ActivityItem": "/components",
    "TimelineCard": "/components",
    "NotificationBell": "/components",
    "FeedContainer": "/components",
    "DataTable": "/components",
    "ColumnManager": "/components",
    "FilterPanel": "/components",
    "ExportTools": "/components",
  }
  
  return componentRoutes[componentName] || "/components"
}

export default function NextGenRecipesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [ngxFilter, setNgxFilter] = useState("all")
  const [healthFilter, setHealthFilter] = useState("all")
  const [usageFilter, setUsageFilter] = useState("all")
  const [ownerFilter, setOwnerFilter] = useState("all")
  const [sortBy, setSortBy] = useState("name-asc")

  // Extract unique values for filter options
  const uniqueOwners = useMemo(() => {
    return Array.from(new Set(recipes.map(recipe => recipe.owner))).sort()
  }, [])

  const filteredRecipes = useMemo(() => {
    const filtered = recipes.filter((recipe) => {
      const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          recipe.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          recipe.components.some(component => component.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesNgx = ngxFilter === "all" || 
                        (ngxFilter === "recommended" && recipe.endorsed)
      const matchesHealth = healthFilter === "all" || recipe.health === healthFilter
      const matchesUsage = usageFilter === "all" || recipe.usage === usageFilter
      const matchesOwner = ownerFilter === "all" || recipe.owner === ownerFilter
      
      return matchesSearch && matchesNgx && matchesHealth && matchesUsage && matchesOwner
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
  }, [searchTerm, ngxFilter, healthFilter, usageFilter, ownerFilter, sortBy])

  return (
    <LayoutWrapper>
      <div className="space-y-8">
        <div className="px-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Community</h1>
          <p className="text-lg text-gray-600">
            Community is a collection of components found in local design systems across P&T.
          </p>
        </div>

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

        <div className="px-6 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search the community"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={ngxFilter} onValueChange={setNgxFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Recommended" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Community</SelectItem>
                <SelectItem value="recommended">Recommended</SelectItem>
              </SelectContent>
            </Select>
            <Select value={healthFilter} onValueChange={setHealthFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by health" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Health Status</SelectItem>
                <SelectItem value="healthy">Healthy</SelectItem>
                <SelectItem value="caution">Caution</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
              </SelectContent>
            </Select>
            <Select value={usageFilter} onValueChange={setUsageFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by usage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Usage Levels</SelectItem>
                <SelectItem value="High">High Usage</SelectItem>
                <SelectItem value="Medium">Medium Usage</SelectItem>
                <SelectItem value="Low">Low Usage</SelectItem>
                <SelectItem value="Growing">Growing Usage</SelectItem>
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
          {filteredRecipes.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No community items match your current filters.</p>
            </div>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2 px-6">
          {filteredRecipes.map((recipe) => (
            <Card key={recipe.name} className="h-full flex flex-col">
              <CardHeader>
                <div className="mb-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4">
                  {getIllustration(recipe.name)}
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <CardTitle className="text-xl">{recipe.name}</CardTitle>
                  <div className="flex items-center gap-2">
                    {recipe.endorsed && (
                      <Badge variant="default" className="bg-orange-500 hover:bg-orange-600 text-white">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Recommended
                      </Badge>
                    )}
                    {getHealthIcon(recipe.health)}
                    <Badge variant="secondary" className={getHealthColor(recipe.health)}>
                      {recipe.health}
                    </Badge>
                    <Badge variant="outline">{recipe.usage} Usage</Badge>
                  </div>
                </div>
                <CardDescription className="text-sm">{recipe.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="font-medium">Owner:</span>
                    <span className="text-gray-600">{recipe.owner}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="font-medium">Last Updated:</span>
                    <span className="text-gray-600">{new Date(recipe.lastUpdated).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex-1">
                  <h4 className="font-medium text-sm mb-2">Components Included:</h4>
                  <div className="flex flex-wrap gap-1">
                    {recipe.components.map((component) => (
                      <Link key={component} href={getComponentPath(component)}>
                        <Badge variant="outline" className="text-xs cursor-pointer hover:bg-gray-100 transition-colors">
                          {component}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 mt-auto">
                  <Button variant="outline" size="sm" asChild>
                    <a href={recipe.documentation} target="_blank" rel="noopener noreferrer">
                      <FileText className="w-3 h-3 mr-1" />
                      Documentation
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={recipe.storybook} target="_blank" rel="noopener noreferrer">
                      <BookOpen className="w-3 h-3 mr-1" />
                      Storybook
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={recipe.figma} target="_blank" rel="noopener noreferrer">
                      <Figma className="w-3 h-3 mr-1" />
                      Figma
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={recipe.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 mr-1" />
                      GitHub
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
