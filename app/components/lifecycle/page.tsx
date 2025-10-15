import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { Beaker, TestTube, CheckCircle, AlertTriangle, ArrowRight, Clock, Users, FileText } from "lucide-react"

const lifecycleStages = [
  {
    stage: "Experimental",
    icon: Beaker,
    color: "yellow",
    badge: "outline",
    description: "Early development and exploration phase",
    characteristics: [
      "API may change frequently",
      "Limited documentation",
      "Not recommended for production",
      "Feedback and iteration focused",
    ],
    designStability: "Low - Expect frequent changes",
    codeReadiness: "Prototype quality",
    documentation: "Basic usage examples",
    support: "Limited - experimental use only",
  },
  {
    stage: "Beta",
    icon: TestTube,
    color: "blue",
    badge: "secondary",
    description: "Testing and refinement phase",
    characteristics: [
      "API is stabilizing",
      "Comprehensive documentation",
      "Ready for testing in production",
      "Breaking changes possible but communicated",
    ],
    designStability: "Medium - Minor changes expected",
    codeReadiness: "Production ready with caveats",
    documentation: "Complete with examples",
    support: "Active support and bug fixes",
  },
  {
    stage: "Stable",
    icon: CheckCircle,
    color: "green",
    badge: "default",
    description: "Production-ready and fully supported",
    characteristics: [
      "Stable API with semantic versioning",
      "Complete documentation and examples",
      "Fully tested and production ready",
      "Breaking changes follow deprecation process",
    ],
    designStability: "High - Only minor refinements",
    codeReadiness: "Production ready",
    documentation: "Complete with all use cases",
    support: "Full support and maintenance",
  },
  {
    stage: "Deprecated",
    icon: AlertTriangle,
    color: "red",
    badge: "destructive",
    description: "Being phased out in favor of newer alternatives",
    characteristics: [
      "No new features or enhancements",
      "Security and critical bug fixes only",
      "Migration path provided",
      "Removal timeline communicated",
    ],
    designStability: "Frozen - No changes",
    codeReadiness: "Stable but not recommended",
    documentation: "Migration guides available",
    support: "Limited to critical issues",
  },
]

const progressionCriteria = [
  {
    from: "Experimental",
    to: "Beta",
    criteria: [
      "API design is solidified",
      "Basic documentation completed",
      "Initial user testing conducted",
      "Core functionality implemented",
    ],
  },
  {
    from: "Beta",
    to: "Stable",
    criteria: [
      "No breaking changes for 2+ releases",
      "Comprehensive documentation",
      "Accessibility requirements met",
      "Production usage validated",
    ],
  },
  {
    from: "Stable",
    to: "Deprecated",
    criteria: [
      "Better alternative available",
      "Migration path documented",
      "Deprecation timeline established",
      "User communication plan executed",
    ],
  },
]

export default function ComponentLifecyclePage() {
  return (
    <LayoutWrapper>
      <div className="container px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Component Lifecycle</h1>
          <p className="text-lg text-gray-600">
            Understanding the maturity, stability, and support level of design system components helps teams make
            informed decisions about adoption and contribution.
          </p>
        </div>

        {/* Lifecycle Stages */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900">Lifecycle Stages</h2>
          <div className="grid gap-6">
            {lifecycleStages.map((stage, index) => {
              const Icon = stage.icon
              return (
                <Card key={stage.stage} className="relative">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          stage.color === "yellow"
                            ? "bg-yellow-100"
                            : stage.color === "blue"
                              ? "bg-blue-100"
                              : stage.color === "green"
                                ? "bg-green-100"
                                : "bg-red-100"
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 ${
                            stage.color === "yellow"
                              ? "text-yellow-600"
                              : stage.color === "blue"
                                ? "text-blue-600"
                                : stage.color === "green"
                                  ? "text-green-600"
                                  : "text-red-600"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl">{stage.stage}</CardTitle>
                          <Badge variant={stage.badge as any}>{stage.stage}</Badge>
                        </div>
                        <CardDescription className="text-base">{stage.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Key Characteristics</h4>
                        <ul className="space-y-2">
                          {stage.characteristics.map((char, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                              {char}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <span className="text-sm font-medium text-gray-900">Design Stability:</span>
                          <p className="text-sm text-gray-600">{stage.designStability}</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-900">Code Readiness:</span>
                          <p className="text-sm text-gray-600">{stage.codeReadiness}</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-900">Documentation:</span>
                          <p className="text-sm text-gray-600">{stage.documentation}</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-900">Support Level:</span>
                          <p className="text-sm text-gray-600">{stage.support}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  {index < lifecycleStages.length - 1 && (
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                      <div className="w-6 h-6 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center">
                        <ArrowRight className="w-3 h-3 text-gray-400 rotate-90" />
                      </div>
                    </div>
                  )}
                </Card>
              )
            })}
          </div>
        </div>

        {/* Progression Criteria */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900">Progression Criteria</h2>
          <p className="text-gray-600">
            Components advance through lifecycle stages based on specific criteria and milestones.
          </p>
          <div className="space-y-4">
            {progressionCriteria.map((progression, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-3">
                    <Badge variant="outline">{progression.from}</Badge>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <Badge variant="outline">{progression.to}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {progression.criteria.map((criterion, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {criterion}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process and Governance */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Process and Governance</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Review Process</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  All lifecycle transitions require review by the Design System Review (DSR) committee to ensure quality
                  and consistency standards are met.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <CardTitle className="text-lg">Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Components typically spend 2-4 weeks in experimental, 4-8 weeks in beta, and maintain stable status
                  until deprecated with 6+ months notice.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                  <FileText className="w-5 h-5 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Each stage transition is documented with rationale, timeline, and impact assessment to maintain
                  transparency and enable informed adoption decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
