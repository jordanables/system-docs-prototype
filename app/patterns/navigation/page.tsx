import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Navigation as NavigationIcon, Menu, ChevronRight, MoreHorizontal, ArrowUp } from "lucide-react"
import Link from "next/link"

const navigationGuidelines = [
  {
    name: "Primary Navigation",
    description: "Main site navigation with hierarchical structure",
    icon: Menu,
    usage: "Application headers, main menu systems",
    complexity: "Medium",
    status: "Stable"
  },
  {
    name: "Breadcrumbs",
    description: "Secondary navigation showing current location in hierarchy",
    icon: ChevronRight,
    usage: "Deep content structures, multi-level applications",
    complexity: "Simple",
    status: "Stable"
  },
  {
    name: "Pagination",
    description: "Navigation through large sets of content or data",
    icon: MoreHorizontal,
    usage: "Search results, data tables, content listings",
    complexity: "Simple",
    status: "Stable"
  },
  {
    name: "Back to Top",
    description: "Quick navigation to return to page beginning",
    icon: ArrowUp,
    usage: "Long pages, content-heavy interfaces",
    complexity: "Simple",
    status: "Beta"
  }
]

const getComplexityColor = (complexity: string) => {
  switch (complexity) {
    case "Simple":
      return "bg-green-100 text-green-800"
    case "Medium":
      return "bg-yellow-100 text-yellow-800"
    case "Complex":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Stable":
      return "bg-blue-100 text-blue-800"
    case "Beta":
      return "bg-orange-100 text-orange-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function NavigationPage() {
  return (
    <LayoutWrapper>
      <div className="space-y-8">
        <div className="px-6">
          <div className="flex items-center gap-2 mb-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/patterns">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to UX Guidelines
              </Link>
            </Button>
          </div>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <NavigationIcon className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Navigation</h1>
              <p className="text-lg text-gray-600">
                Navigation patterns for different application types and contexts
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 px-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-green-900 mb-2">Navigation Principles</h3>
            <ul className="text-green-800 space-y-1 text-sm">
              <li>• Make current location clear to users</li>
              <li>• Provide consistent navigation across similar contexts</li>
              <li>• Ensure navigation is accessible via keyboard and screen readers</li>
              <li>• Consider mobile-first responsive behavior</li>
            </ul>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {navigationGuidelines.map((guideline) => (
              <Card key={guideline.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <guideline.icon className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{guideline.name}</CardTitle>
                        <CardDescription className="mt-2">{guideline.description}</CardDescription>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge className={getStatusColor(guideline.status)}>
                        {guideline.status}
                      </Badge>
                      <Badge className={getComplexityColor(guideline.complexity)}>
                        {guideline.complexity}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-2 text-gray-700">Common uses:</h4>
                    <p className="text-sm text-gray-600">{guideline.usage}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      See Examples
                    </Button>
                    <Button variant="outline" size="sm">
                      Implementation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
