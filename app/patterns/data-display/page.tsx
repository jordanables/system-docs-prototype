import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Database, Table, Grid, List, BarChart } from "lucide-react"
import Link from "next/link"

const dataPatterns = [
  {
    name: "Data Tables",
    description: "Structured display of tabular data with sorting and filtering",
    icon: Table,
    usage: "Large datasets requiring comparison and analysis",
    complexity: "Medium",
    status: "Stable"
  },
  {
    name: "Card Grids",
    description: "Flexible grid layouts for displaying items with rich content",
    icon: Grid,
    usage: "Product catalogs, team directories, and media galleries",
    complexity: "Simple",
    status: "Stable"
  },
  {
    name: "List Views",
    description: "Vertical arrangements of items with consistent structure",
    icon: List,
    usage: "Activity feeds, search results, and notification lists",
    complexity: "Simple",
    status: "Stable"
  },
  {
    name: "Dashboard Layouts",
    description: "Comprehensive data visualization and monitoring interfaces",
    icon: BarChart,
    usage: "Analytics, KPI monitoring, and executive summaries",
    complexity: "Complex",
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

export default function DataDisplayPage() {
  return (
    <LayoutWrapper>
      <div className="space-y-8">
        <div className="px-6">
          <div className="flex items-center gap-2 mb-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/patterns">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Patterns
              </Link>
            </Button>
          </div>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Database className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Data Display</h1>
              <p className="text-lg text-gray-600">
                Patterns for presenting and organizing complex data sets
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 px-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2">Key Considerations</h3>
            <ul className="text-blue-800 space-y-1 text-sm">
              <li>• Choose the right pattern based on data type and user goals</li>
              <li>• Ensure data is scannable and actionable</li>
              <li>• Provide appropriate filtering and sorting options</li>
              <li>• Consider loading states and empty states</li>
            </ul>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {dataPatterns.map((pattern) => (
              <Card key={pattern.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <pattern.icon className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{pattern.name}</CardTitle>
                        <CardDescription className="mt-2">{pattern.description}</CardDescription>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge className={getStatusColor(pattern.status)}>
                        {pattern.status}
                      </Badge>
                      <Badge className={getComplexityColor(pattern.complexity)}>
                        {pattern.complexity}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-2 text-gray-700">Best for:</h4>
                    <p className="text-sm text-gray-600">{pattern.usage}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Examples
                    </Button>
                    <Button variant="outline" size="sm">
                      Guidelines
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
