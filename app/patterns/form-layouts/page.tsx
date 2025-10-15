import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Layout, FileText, Settings } from "lucide-react"
import Link from "next/link"

const formPatterns = [
  {
    name: "Single Column Form",
    description: "Standard vertical form layout for simple data collection",
    usage: "Best for registration, contact forms, and basic settings",
    complexity: "Simple",
    status: "Stable"
  },
  {
    name: "Two Column Form",
    description: "Side-by-side layout for related field groups",
    usage: "Ideal for profile forms, billing information, and detailed settings",
    complexity: "Medium",
    status: "Stable"
  },
  {
    name: "Multi-step Wizard",
    description: "Progressive disclosure pattern for complex data entry",
    usage: "Perfect for onboarding, setup processes, and lengthy forms",
    complexity: "Complex",
    status: "Beta"
  },
  {
    name: "Inline Editing",
    description: "Edit-in-place pattern for quick data updates",
    usage: "Great for tables, profile pages, and content management",
    complexity: "Medium",
    status: "Stable"
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

export default function FormLayoutsPage() {
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
              <Layout className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Form Layouts</h1>
              <p className="text-lg text-gray-600">
                Consistent form patterns and layout guidelines for various use cases
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 px-6">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h3 className="font-semibold text-amber-900 mb-2">Design Principles</h3>
            <ul className="text-amber-800 space-y-1 text-sm">
              <li>• Group related fields logically</li>
              <li>• Use clear labels and helpful instructions</li>
              <li>• Provide immediate validation feedback</li>
              <li>• Consider mobile responsiveness from the start</li>
            </ul>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {formPatterns.map((pattern) => (
              <Card key={pattern.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{pattern.name}</CardTitle>
                      <CardDescription className="mt-2">{pattern.description}</CardDescription>
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
                    <h4 className="font-medium text-sm mb-2 text-gray-700">When to use:</h4>
                    <p className="text-sm text-gray-600">{pattern.usage}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <FileText className="w-4 h-4 mr-2" />
                      Guidelines
                    </Button>
                    <Button variant="outline" size="sm">
                      <Settings className="w-4 h-4 mr-2" />
                      Examples
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
