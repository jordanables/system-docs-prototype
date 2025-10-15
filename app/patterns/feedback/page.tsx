import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MessageSquare, Bell, AlertTriangle, CheckCircle, Loader } from "lucide-react"
import Link from "next/link"

const feedbackPatterns = [
  {
    name: "Toast Notifications",
    description: "Temporary messages that appear to confirm actions or provide updates",
    icon: Bell,
    usage: "Success confirmations, non-critical alerts, system updates",
    complexity: "Simple",
    status: "Stable"
  },
  {
    name: "Error States",
    description: "Clear communication when something goes wrong",
    icon: AlertTriangle,
    usage: "Form validation, API failures, permission errors",
    complexity: "Medium",
    status: "Stable"
  },
  {
    name: "Success States",
    description: "Positive feedback when actions complete successfully",
    icon: CheckCircle,
    usage: "Form submissions, file uploads, task completion",
    complexity: "Simple",
    status: "Stable"
  },
  {
    name: "Loading States",
    description: "Visual indicators during processing or data fetching",
    icon: Loader,
    usage: "Data loading, form processing, content updates",
    complexity: "Medium",
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

export default function FeedbackPage() {
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
              <MessageSquare className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Feedback</h1>
              <p className="text-lg text-gray-600">
                User feedback patterns including notifications, alerts, and confirmations
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 px-6">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h3 className="font-semibold text-purple-900 mb-2">Feedback Guidelines</h3>
            <ul className="text-purple-800 space-y-1 text-sm">
              <li>• Provide immediate feedback for user actions</li>
              <li>• Use appropriate tone and language for the context</li>
              <li>• Make error messages actionable with clear next steps</li>
              <li>• Consider timing and placement for optimal user experience</li>
            </ul>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {feedbackPatterns.map((pattern) => (
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
                    <h4 className="font-medium text-sm mb-2 text-gray-700">Typical uses:</h4>
                    <p className="text-sm text-gray-600">{pattern.usage}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Patterns
                    </Button>
                    <Button variant="outline" size="sm">
                      Best Practices
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
