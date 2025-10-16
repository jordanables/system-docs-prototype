import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Layout, CheckCircle, XCircle, Lightbulb, Eye, Users, Search, AlertCircle, Star } from "lucide-react"
import Link from "next/link"

const emptyStateTypes = [
  {
    name: "No Search Results",
    description: "When user searches yield no matching content",
    icon: Search,
    bestPractice: "Suggest alternative search terms, check spelling, or broaden criteria",
    example: "\"No results for 'prodcut'\" → \"Did you mean 'product'? Try searching for 'construction materials' instead.\""
  },
  {
    name: "First-time User",
    description: "New users with no data or content yet",
    icon: Users,
    bestPractice: "Focus on getting started actions and immediate value",
    example: "\"Welcome to Projects! Create your first project to get started\" with prominent CTA button"
  },
  {
    name: "Temporarily Empty",
    description: "Content exists but is filtered out or unavailable",
    icon: Eye,
    bestPractice: "Explain why content is hidden and how to reveal it",
    example: "\"No active projects match your current filters. Clear filters to see all projects.\""
  },
  {
    name: "Intentionally Empty",
    description: "User has deliberately removed or archived all content",
    icon: Layout,
    bestPractice: "Acknowledge the clean slate and offer next steps",
    example: "\"All done! Your inbox is empty. New messages will appear here.\""
  }
]

const guidelines = [
  {
    category: "Content & Messaging",
    icon: Lightbulb,
    color: "bg-blue-50 border-blue-200 text-blue-800",
    rules: [
      "Use clear, conversational language that matches your product's voice",
      "Explain what happened and why the space is empty",
      "Avoid technical jargon or blame (\"no results found\" vs \"search failed\")",
      "Keep messages concise but informative (1-2 sentences max)"
    ]
  },
  {
    category: "Visual Design",
    icon: Eye,
    color: "bg-green-50 border-green-200 text-green-800",
    rules: [
      "Use illustrations or icons that relate to the missing content type",
      "Maintain visual hierarchy with clear headings and supporting text",
      "Ensure adequate white space to avoid overwhelming users",
      "Keep visual elements simple and purposeful"
    ]
  },
  {
    category: "Actionability",
    icon: CheckCircle,
    color: "bg-purple-50 border-purple-200 text-purple-800",
    rules: [
      "Always provide a clear next step when possible",
      "Make primary actions prominent and easy to find",
      "Offer multiple pathways (create, import, browse, help)",
      "Use action-oriented button text (\"Create Project\" vs \"Click Here\")"
    ]
  },
  {
    category: "Context Awareness",
    icon: AlertCircle,
    color: "bg-orange-50 border-orange-200 text-orange-800",
    rules: [
      "Tailor messages to user's current context and permissions",
      "Consider user's journey stage (new vs returning user)",
      "Account for different device contexts (mobile vs desktop)",
      "Respect user preferences and previous interactions"
    ]
  }
]

const dosDonts = [
  {
    type: "do",
    title: "Do: Provide Context",
    description: "\"No projects match your search for 'office building' in the Construction category.\"",
    reason: "Users understand exactly why they're seeing an empty state"
  },
  {
    type: "dont",
    title: "Don't: Be Vague",
    description: "\"No results\"",
    reason: "Leaves users confused about what went wrong or what to do next"
  },
  {
    type: "do",
    title: "Do: Offer Solutions",
    description: "\"Try broadening your search, checking spelling, or browse all projects instead.\"",
    reason: "Gives users concrete next steps to find what they need"
  },
  {
    type: "dont",
    title: "Don't: Dead End",
    description: "Just showing \"Nothing here\" with no further options",
    reason: "Frustrates users and creates workflow dead ends"
  },
  {
    type: "do",
    title: "Do: Match Your Brand",
    description: "Use illustrations and copy that feel consistent with your product",
    reason: "Maintains user trust and product cohesion"
  },
  {
    type: "dont",
    title: "Don't: Generic Stock",
    description: "Using generic \"404\" or \"empty folder\" imagery",
    reason: "Feels impersonal and doesn't help users understand context"
  }
]

export default function EmptyStatesGuidelinesPage() {
  return (
    <LayoutWrapper>
      <div className="space-y-8">
        {/* Header */}
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
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Layout className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">Empty States</h1>
                <Badge variant="default" className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  NGX Silver
                </Badge>
              </div>
              <p className="text-lg text-gray-600">
                UX Guidelines for handling and displaying empty content areas gracefully
              </p>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="px-6">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="text-xl">What are Empty States?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Empty states occur when there's no content to display in an interface. Rather than showing a blank space, 
                well-designed empty states help users understand what happened, why the space is empty, and what they can do next. 
                They're crucial for maintaining user confidence and preventing workflow dead ends.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Key Benefits</h4>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Reduce user confusion and frustration</li>
                  <li>• Guide users toward productive next actions</li>
                  <li>• Maintain engagement during empty moments</li>
                  <li>• Provide opportunities for onboarding and education</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Types of Empty States */}
        <div className="px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Empty States</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {emptyStateTypes.map((type) => (
              <Card key={type.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <type.icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{type.name}</CardTitle>
                      <CardDescription className="mt-2">{type.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-2 text-gray-700">Best Practice:</h4>
                    <p className="text-sm text-gray-600">{type.bestPractice}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-medium text-xs mb-1 text-gray-500 uppercase tracking-wide">Example</h4>
                    <p className="text-sm text-gray-700 italic">{type.example}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* UX Guidelines */}
        <div className="px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">UX Guidelines</h2>
          <div className="space-y-6">
            {guidelines.map((guideline) => (
              <Card key={guideline.category} className={`border-l-4 ${guideline.color.includes('blue') ? 'border-l-blue-500' : guideline.color.includes('green') ? 'border-l-green-500' : guideline.color.includes('purple') ? 'border-l-purple-500' : 'border-l-orange-500'}`}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${guideline.color}`}>
                      <guideline.icon className="w-4 h-4" />
                    </div>
                    <CardTitle className="text-lg">{guideline.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {guideline.rules.map((rule, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Do's and Don'ts */}
        <div className="px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Do's and Don'ts</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {dosDonts.map((item, index) => (
              <Card key={index} className={`border-l-4 ${item.type === 'do' ? 'border-l-green-500' : 'border-l-red-500'}`}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {item.type === 'do' ? (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-600" />
                    )}
                    <CardTitle className={`text-lg ${item.type === 'do' ? 'text-green-800' : 'text-red-800'}`}>
                      {item.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className={`p-3 rounded-lg text-sm ${item.type === 'do' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                    "{item.description}"
                  </div>
                  <p className="text-gray-600 text-sm">
                    <strong>Why:</strong> {item.reason}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Accessibility */}
        <div className="px-6">
          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-3">
                <Eye className="w-6 h-6 text-purple-600" />
                Accessibility Considerations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Screen Readers</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Use proper heading hierarchy (h1, h2, h3)</li>
                    <li>• Provide meaningful alt text for illustrations</li>
                    <li>• Ensure empty state content is announced</li>
                    <li>• Use semantic HTML for better context</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Visual Design</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Maintain sufficient color contrast (4.5:1)</li>
                    <li>• Don't rely solely on color to convey meaning</li>
                    <li>• Ensure text is readable at all zoom levels</li>
                    <li>• Test with high contrast mode enabled</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Implementation Notes */}
        <div className="px-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Implementation Notes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-900 mb-3">Technical Considerations</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h5 className="font-medium text-yellow-800 mb-2">Performance</h5>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Lazy load illustrations to avoid blocking</li>
                      <li>• Consider skeleton screens for loading states</li>
                      <li>• Cache empty state content when possible</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-yellow-800 mb-2">Responsive Design</h5>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Adapt illustrations for mobile viewports</li>
                      <li>• Stack content vertically on smaller screens</li>
                      <li>• Ensure touch targets meet minimum size (44px)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button variant="outline" asChild>
                  <Link href="/patterns">View All Patterns</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/components">Browse Components</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </LayoutWrapper>
  )
}
