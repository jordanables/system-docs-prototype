import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Lightbulb, TestTube, CheckCircle, AlertTriangle, XCircle, Clock, Users, Target, Zap, Heart, Activity } from "lucide-react"
import Link from "next/link"

const lifecycleStages = [
  {
    stage: "Experimental",
    color: "bg-yellow-100 text-yellow-800 border-yellow-300",
    icon: TestTube,
    description: "Early stage components being explored and tested",
    characteristics: [
      "Breaking changes may occur frequently",
      "Limited documentation and examples",
      "Used for internal prototyping and validation",
      "May not follow all design system standards yet"
    ],
    guidelines: [
      "Use with caution in production environments",
      "Expect APIs and behavior to change",
      "Provide feedback to help shape the component",
      "Consider fallback options for critical functionality"
    ],
    nextStage: "Beta"
  },
  {
    stage: "Beta",
    color: "bg-blue-100 text-blue-800 border-blue-300",
    icon: Target,
    description: "Stable functionality with potential for minor refinements",
    characteristics: [
      "Core functionality is established and tested",
      "Documentation is comprehensive",
      "API is mostly stable with minor changes possible",
      "Used by early adopters and pilot teams"
    ],
    guidelines: [
      "Safe for production use with some caution",
      "Monitor for updates and breaking changes",
      "Report bugs and usability issues",
      "Plan for potential migration needs"
    ],
    nextStage: "Stable"
  },
  {
    stage: "Stable",
    color: "bg-green-100 text-green-800 border-green-300",
    icon: CheckCircle,
    description: "Fully mature components ready for widespread adoption",
    characteristics: [
      "Battle-tested across multiple products",
      "Complete documentation and examples",
      "Stable API with semantic versioning",
      "Accessibility standards fully met"
    ],
    guidelines: [
      "Safe for all production environments",
      "Follow semantic versioning for updates",
      "Breaking changes will be rare and well-communicated",
      "Full support and maintenance guaranteed"
    ],
    nextStage: "Maintenance"
  },
  {
    stage: "Deprecated",
    color: "bg-red-100 text-red-800 border-red-300",
    icon: XCircle,
    description: "UI components being phased out in favor of better alternatives",
    characteristics: [
      "No new features or enhancements",
      "Bug fixes for critical issues only",
      "Migration path to replacement provided",
      "Clear timeline for end-of-life"
    ],
    guidelines: [
      "Avoid using in new projects",
      "Plan migration to recommended alternatives",
      "Monitor deprecation timeline",
      "Test thoroughly when updating"
    ],
    nextStage: "Removed"
  }
]

const healthStatuses = [
  {
    status: "Healthy",
    color: "bg-green-100 text-green-800 border-green-300",
    icon: CheckCircle,
    description: "Component is well-maintained and ready for production use",
    characteristics: [
      "Actively maintained with regular updates",
      "No known critical issues or bugs",
      "Good documentation and community support",
      "Compatible with current design system standards"
    ],
    recommendations: [
      "Safe to use in production environments",
      "Expect continued support and improvements",
      "Follow component updates for enhancements",
      "Report any issues through standard channels"
    ]
  },
  {
    status: "Caution",
    color: "bg-yellow-100 text-yellow-800 border-yellow-300",
    icon: AlertTriangle,
    description: "Component may have known issues or is undergoing significant changes",
    characteristics: [
      "Some known issues or limitations",
      "May have breaking changes in development",
      "Documentation might be incomplete",
      "Requires careful evaluation before use"
    ],
    recommendations: [
      "Evaluate thoroughly before production use",
      "Have contingency plans in place",
      "Monitor for updates and fixes",
      "Consider alternative solutions for critical features"
    ]
  },
  {
    status: "Critical",
    color: "bg-red-100 text-red-800 border-red-300",
    icon: XCircle,
    description: "Component has significant issues and should be used with extreme caution",
    characteristics: [
      "Major bugs or security vulnerabilities",
      "Limited or no active maintenance",
      "May not meet accessibility standards",
      "Potential for data loss or system instability"
    ],
    recommendations: [
      "Avoid using in production environments",
      "Seek alternative solutions immediately",
      "If currently in use, plan urgent migration",
      "Contact support team for guidance"
    ]
  }
]

const decisionCriteria = [
  {
    title: "Technical Maturity",
    icon: Zap,
    factors: [
      "API stability and completeness",
      "Performance benchmarks met",
      "Cross-browser compatibility verified",
      "Accessibility standards compliance"
    ]
  },
  {
    title: "Usage & Feedback",
    icon: Users,
    factors: [
      "Adoption by pilot teams",
      "User feedback and bug reports",
      "Real-world usage data",
      "Community contributions and engagement"
    ]
  },
  {
    title: "Documentation & Support",
    icon: Lightbulb,
    factors: [
      "Complete API documentation",
      "Usage examples and best practices",
      "Migration guides available",
      "Support processes established"
    ]
  },
  {
    title: "Strategic Alignment",
    icon: Target,
    factors: [
      "Alignment with design system goals",
      "Long-term roadmap considerations",
      "Resource availability for maintenance",
      "Impact on existing ecosystem"
    ]
  }
]

const bestPractices = [
  {
    category: "For Consumers",
    icon: Users,
    practices: [
      "Always check component lifecycle status before implementation",
      "Subscribe to design system updates for your used components",
      "Have fallback plans for experimental components",
      "Contribute feedback during beta phases",
      "Plan migration time for deprecated components"
    ]
  },
  {
    category: "For Contributors",
    icon: Lightbulb,
    practices: [
      "Follow the RFC process for new experimental components",
      "Provide comprehensive documentation from day one",
      "Gather feedback early and often during experimental phase",
      "Ensure backward compatibility when moving to stable",
      "Communicate changes clearly with migration guides"
    ]
  }
]

export default function ComponentLifecyclePage() {
  return (
    <LayoutWrapper>
      <div className="space-y-8">
        {/* Header */}
        <div className="px-6">
          <div className="flex items-center gap-2 mb-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/get-started">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Getting Started
              </Link>
            </Button>
          </div>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Component Lifecycle & Health</h1>
              <p className="text-lg text-gray-600">
                Understanding component maturity stages and health status to make informed adoption decisions
              </p>
            </div>
          </div>
        </div>

        {/* Pro Tip Banner */}
        <div className="px-6">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h4 className="font-semibold text-orange-900 mb-2">💡 Pro Tip</h4>
            <p className="text-orange-800 text-sm">
              When evaluating a component for your project, check both its <strong>lifecycle stage</strong> (maturity) 
              and <strong>health status</strong> (maintenance) to make the most informed decision about adoption and long-term support.
            </p>
          </div>
        </div>

        {/* Component Lifecycle */}
        <div className="px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Component Lifecycle</h2>
          
          {/* Overview */}
          <Card className="border-l-4 border-l-blue-500 mb-6">
            <CardHeader>
              <CardTitle className="text-xl">Lifecycle Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Every component in our design system follows a predictable lifecycle from initial concept to mature implementation, 
                while community components also have health status indicators that reflect their current maintenance state. 
                Together, these systems ensure quality, stability, and user confidence while allowing for innovation and continuous improvement.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Why Lifecycle & Health Management Matters</h4>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Provides predictable evolution path for components</li>
                  <li>• Helps teams make informed decisions about adoption and ongoing use</li>
                  <li>• Ensures quality and stability standards are met</li>
                  <li>• Facilitates clear communication about component status and support</li>
                  <li>• Enables proactive planning for component changes and maintenance</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <div className="space-y-6">
            {lifecycleStages.map((stage, index) => (
              <Card key={stage.stage} className={`border-l-4 ${stage.color.includes('yellow') ? 'border-l-yellow-500' : stage.color.includes('blue') ? 'border-l-blue-500' : stage.color.includes('green') ? 'border-l-green-500' : 'border-l-red-500'}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${stage.color}`}>
                        <stage.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">
                          {stage.stage}
                        </CardTitle>
                        <CardDescription className="mt-1">{stage.description}</CardDescription>
                      </div>
                    </div>
                    {index < lifecycleStages.length - 1 && (
                      <div className="text-sm text-gray-500 flex items-center gap-2">
                        Next: {stage.nextStage}
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Characteristics</h4>
                      <ul className="space-y-2">
                        {stage.characteristics.map((char, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <div className={`w-1.5 h-1.5 rounded-full mt-2 ${stage.color.includes('yellow') ? 'bg-yellow-500' : stage.color.includes('blue') ? 'bg-blue-500' : stage.color.includes('green') ? 'bg-green-500' : 'bg-red-500'}`} />
                            {char}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Usage Guidelines</h4>
                      <ul className="space-y-2">
                        {stage.guidelines.map((guideline, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            {guideline}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Promotion Criteria */}
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Promotion Criteria</h3>
            <p className="text-gray-600 mb-6">
              UI components advance through lifecycle stages based on these key factors:
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {decisionCriteria.map((criteria) => (
                <Card key={criteria.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                        <criteria.icon className="w-4 h-4 text-gray-600" />
                      </div>
                      <CardTitle className="text-lg">{criteria.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {criteria.factors.map((factor, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          {factor}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Component Health Status */}
        <div className="px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Component Health Status</h2>
          
          {/* Explanation Card */}
          <Card className="border-l-4 border-l-purple-500 mb-6">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Activity className="w-4 h-4 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Health vs Lifecycle</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                While <strong>lifecycle stages</strong> indicate a component's maturity and readiness for adoption, 
                <strong> health status</strong> reflects the current maintenance state and stability of community-contributed components. 
                Health status helps you understand the ongoing support and reliability you can expect.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">📈 Lifecycle Stages</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Apply to all components (official & community)</li>
                    <li>• Indicate development maturity</li>
                    <li>• Follow predictable progression path</li>
                    <li>• Focus on feature completeness</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">❤️ Health Status</h4>
                  <ul className="text-purple-800 text-sm space-y-1">
                    <li>• Apply primarily to community components</li>
                    <li>• Indicate current maintenance state</li>
                    <li>• Can change based on team availability</li>
                    <li>• Focus on ongoing support & stability</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Health Status Cards */}
          <div className="space-y-6">
            {healthStatuses.map((health) => (
              <Card key={health.status} className={`border-l-4 ${health.color.includes('green') ? 'border-l-green-500' : health.color.includes('yellow') ? 'border-l-yellow-500' : 'border-l-red-500'}`}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${health.color}`}>
                      <health.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{health.status}</CardTitle>
                      <CardDescription className="mt-1">{health.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Current State</h4>
                      <ul className="space-y-2">
                        {health.characteristics.map((char, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <div className={`w-1.5 h-1.5 rounded-full mt-2 ${health.color.includes('green') ? 'bg-green-500' : health.color.includes('yellow') ? 'bg-yellow-500' : 'bg-red-500'}`} />
                            {char}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Recommendations</h4>
                      <ul className="space-y-2">
                        {health.recommendations.map((rec, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            {health.status === "Healthy" ? (
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            ) : health.status === "Caution" ? (
                              <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                            ) : (
                              <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                            )}
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Health Assessment Factors */}
        <div className="px-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Health Assessment Factors</h3>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">
                Component health status is determined by evaluating several key factors:
              </p>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800 mb-1">Maintenance</h4>
                  <p className="text-sm text-gray-600">Active development and bug fixes</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800 mb-1">Community</h4>
                  <p className="text-sm text-gray-600">User adoption and feedback</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Target className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800 mb-1">Stability</h4>
                  <p className="text-sm text-gray-600">Bug reports and reliability</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Lightbulb className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800 mb-1">Standards</h4>
                  <p className="text-sm text-gray-600">Compliance with design system</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Best Practices */}
        <div className="px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Practices</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {bestPractices.map((section) => (
              <Card key={section.category} className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <section.icon className="w-4 h-4 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">{section.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.practices.map((practice, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{practice}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Monitoring & Communication */}
        <div className="px-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Staying Informed</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Keep track of component lifecycle and health status changes through these channels:
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Release Notes</h4>
                  <p className="text-sm text-gray-600">Detailed changelog with lifecycle and health updates</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Component Status</h4>
                  <p className="text-sm text-gray-600">Real-time lifecycle and health badges on all component pages</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Team Notifications</h4>
                  <p className="text-sm text-gray-600">Slack updates for teams using affected components</p>
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <Button variant="outline" asChild>
                  <Link href="/components">View Component Status</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/releases">Latest Releases</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </LayoutWrapper>
  )
}
