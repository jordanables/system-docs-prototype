import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { Search, ExternalLink, Figma, Github } from "lucide-react"

const components = [
  {
    name: "Button",
    description: "Clickable elements for user actions",
    lifecycle: "stable",
    category: "Actions",
    href: "/components/button",
    figmaUrl: "#",
    githubUrl: "#",
    lastUpdated: "2024-01-15",
  },
  {
    name: "Input",
    description: "Text input fields for forms",
    lifecycle: "stable",
    category: "Forms",
    href: "/components/input",
    figmaUrl: "#",
    githubUrl: "#",
    lastUpdated: "2024-01-12",
  },
  {
    name: "Modal",
    description: "Overlay dialogs for focused interactions",
    lifecycle: "stable",
    category: "Overlays",
    href: "/components/modal",
    figmaUrl: "#",
    githubUrl: "#",
    lastUpdated: "2024-01-10",
  },
  {
    name: "Tooltip",
    description: "Contextual information on hover",
    lifecycle: "stable",
    category: "Overlays",
    href: "/components/tooltip",
    figmaUrl: "#",
    githubUrl: "#",
    lastUpdated: "2024-01-08",
  },
  {
    name: "Data Table",
    description: "Complex data display with sorting and filtering",
    lifecycle: "beta",
    category: "Data Display",
    href: "/components/data-table",
    figmaUrl: "#",
    githubUrl: "#",
    lastUpdated: "2024-01-16",
    isNew: true,
  },
  {
    name: "Alert",
    description: "Important messages and notifications",
    lifecycle: "experimental",
    category: "Feedback",
    href: "/components/alert",
    figmaUrl: "#",
    githubUrl: "#",
    lastUpdated: "2024-01-14",
  },
]

const categories = ["All", "Actions", "Forms", "Overlays", "Data Display", "Feedback"]

function getLifecycleBadge(lifecycle: string) {
  const variants = {
    stable: "default",
    beta: "secondary",
    experimental: "outline",
    deprecated: "destructive",
  } as const

  return <Badge variant={variants[lifecycle as keyof typeof variants] || "outline"}>{lifecycle}</Badge>
}

export default function ComponentsPage() {
  return (
    <LayoutWrapper>
      <div className="container px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Components</h1>
          <p className="text-lg text-gray-600 mb-6">
            Production-ready components built with accessibility and consistency in mind. Each component includes design
            guidelines, code examples, and interactive demos.
          </p>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search components..." className="pl-10" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm">
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Component Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((component) => (
            <Card key={component.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-lg">{component.name}</CardTitle>
                      {component.isNew && (
                        <Badge variant="secondary" className="text-xs">
                          New
                        </Badge>
                      )}
                    </div>
                    <CardDescription>{component.description}</CardDescription>
                  </div>
                  {getLifecycleBadge(component.lifecycle)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Category: {component.category}</span>
                    <span>Updated {new Date(component.lastUpdated).toLocaleDateString()}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button size="sm" asChild>
                      <Link href={component.href}>
                        View Details
                        <ExternalLink className="w-3 h-3 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={component.figmaUrl} target="_blank" rel="noopener noreferrer">
                        <Figma className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={component.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Component Lifecycle Info */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Component Lifecycle</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <Badge>Stable</Badge>
              <span className="text-sm text-gray-600">Production ready</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary">Beta</Badge>
              <span className="text-sm text-gray-600">Testing phase</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline">Experimental</Badge>
              <span className="text-sm text-gray-600">Early development</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="destructive">Deprecated</Badge>
              <span className="text-sm text-gray-600">Being phased out</span>
            </div>
          </div>
          <div className="mt-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/lifecycle">
                Learn more about component lifecycle
                <ExternalLink className="w-3 h-3 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
