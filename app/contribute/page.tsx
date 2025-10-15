"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LayoutWrapper } from "@/components/layout-wrapper"
import {
  Users,
  GitBranch,
  MessageSquare,
  FileText,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Bug,
  Palette,
  Code,
} from "lucide-react"

type Role = "all" | "designers" | "developers" | "product-managers"

const contributionTypes = [
  {
    type: "Bug Reports",
    icon: Bug,
    color: "red",
    description: "Report issues, accessibility problems, or unexpected behavior",
    examples: ["Component not working as expected", "Accessibility violations", "Performance issues"],
    process: "Create GitHub issue with reproduction steps",
    roles: ["developers", "designers", "product-managers"] as Role[],
    ctaText: "Report a Bug",
    ctaLink: "#",
  },
  {
    type: "Feature Requests",
    icon: Lightbulb,
    color: "blue",
    description: "Suggest new components, patterns, or enhancements",
    examples: ["New component proposals", "API improvements", "New design patterns"],
    process: "Submit RFC (Request for Comments) document",
    roles: ["product-managers", "designers", "developers"] as Role[],
    ctaText: "Submit Feature Request",
    ctaLink: "#",
  },
  {
    type: "Design Contributions",
    icon: Palette,
    color: "purple",
    description: "Contribute design assets, patterns, or visual improvements",
    examples: ["Figma component updates", "Icon contributions", "Design pattern documentation"],
    process: "Design review with DS team",
    roles: ["designers"] as Role[],
    ctaText: "Contribute Design",
    ctaLink: "#",
  },
  {
    type: "Code Contributions",
    icon: Code,
    color: "green",
    description: "Submit code improvements, new components, or bug fixes",
    examples: ["Component implementations", "Bug fixes", "Performance optimizations"],
    process: "Pull request with code review",
    roles: ["developers"] as Role[],
    ctaText: "Submit Code",
    ctaLink: "#",
  },
]

const workflowSteps = [
  {
    step: 1,
    title: "Proposal",
    description: "Submit your idea through the appropriate channel",
    details: ["Create GitHub issue or RFC", "Provide clear problem statement", "Include use cases and examples"],
  },
  {
    step: 2,
    title: "Review",
    description: "Design System team reviews and provides feedback",
    details: ["Initial triage and assessment", "Alignment with system goals", "Technical feasibility review"],
  },
  {
    step: 3,
    title: "Planning",
    description: "Collaborate on implementation approach",
    details: ["Define acceptance criteria", "Plan implementation phases", "Assign ownership and timeline"],
  },
  {
    step: 4,
    title: "Implementation",
    description: "Build and iterate on the solution",
    details: ["Development or design work", "Regular check-ins and feedback", "Testing and validation"],
  },
  {
    step: 5,
    title: "Review & Merge",
    description: "Final review and integration",
    details: ["Code/design review", "Documentation updates", "Release planning"],
  },
]

export default function ContributePage() {
  const [selectedRole, setSelectedRole] = useState<Role>("all")

  const filteredContributions = contributionTypes.filter(
    (contribution) => selectedRole === "all" || contribution.roles.includes(selectedRole),
  )

  return (
    <LayoutWrapper>
      <div className="container px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Contributing</h1>
          <p className="text-lg text-gray-600 mb-6">
            Help us build a better design system! We welcome contributions from designers, developers, and product
            managers across Procore.
          </p>

          <div className="flex items-center gap-4">
            <Button asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <GitBranch className="w-4 h-4 mr-2" />
                GitHub Repository
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-4 h-4 mr-2" />
                Slack Channel
              </a>
            </Button>
          </div>
        </div>

        {/* Who Can Contribute */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who Can Contribute</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card
              className={`cursor-pointer transition-all ${
                selectedRole === "designers" ? "ring-2 ring-blue-500 bg-blue-50" : "hover:shadow-md"
              }`}
              onClick={() => setSelectedRole(selectedRole === "designers" ? "all" : "designers")}
            >
              <CardHeader>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <Palette className="w-5 h-5 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Designers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Contribute design assets, patterns, accessibility improvements, and user experience enhancements.
                </p>
              </CardContent>
            </Card>

            <Card
              className={`cursor-pointer transition-all ${
                selectedRole === "developers" ? "ring-2 ring-blue-500 bg-blue-50" : "hover:shadow-md"
              }`}
              onClick={() => setSelectedRole(selectedRole === "developers" ? "all" : "developers")}
            >
              <CardHeader>
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <Code className="w-5 h-5 text-green-600" />
                </div>
                <CardTitle className="text-lg">Developers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Submit code improvements, bug fixes, new components, and technical documentation.
                </p>
              </CardContent>
            </Card>

            <Card
              className={`cursor-pointer transition-all ${
                selectedRole === "product-managers" ? "ring-2 ring-blue-500 bg-blue-50" : "hover:shadow-md"
              }`}
              onClick={() => setSelectedRole(selectedRole === "product-managers" ? "all" : "product-managers")}
            >
              <CardHeader>
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Product Managers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Provide user insights, feature requirements, and help prioritize design system improvements.
                </p>
              </CardContent>
            </Card>
          </div>

          {selectedRole !== "all" && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                Showing contributions for:{" "}
                <span className="font-semibold capitalize">{selectedRole.replace("-", " ")}</span>
                <button
                  onClick={() => setSelectedRole("all")}
                  className="ml-2 text-blue-600 hover:text-blue-800 underline"
                >
                  Show all
                </button>
              </p>
            </div>
          )}
        </div>

        {/* Types of Contributions */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Types of Contributions</h2>
          <div className="space-y-6">
            {filteredContributions.map((contribution) => {
              const Icon = contribution.icon
              return (
                <Card key={contribution.type}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          contribution.color === "red"
                            ? "bg-red-100"
                            : contribution.color === "blue"
                              ? "bg-blue-100"
                              : contribution.color === "purple"
                                ? "bg-purple-100"
                                : "bg-green-100"
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 ${
                            contribution.color === "red"
                              ? "text-red-600"
                              : contribution.color === "blue"
                                ? "text-blue-600"
                                : contribution.color === "purple"
                                  ? "text-purple-600"
                                  : "text-green-600"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{contribution.type}</CardTitle>
                        <CardDescription className="text-base mb-4">{contribution.description}</CardDescription>

                        <div className="space-y-3">
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 mb-2">Examples:</h4>
                            <ul className="space-y-1">
                              {contribution.examples.map((example, index) => (
                                <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                                  {example}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium text-gray-900 mb-1">Process:</h4>
                            <p className="text-sm text-gray-600">{contribution.process}</p>
                          </div>

                          <div className="pt-3 border-t border-gray-100">
                            <Button asChild size="sm">
                              <a href={contribution.ctaLink} target="_blank" rel="noopener noreferrer">
                                {contribution.ctaText}
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Contribution Workflow */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contribution Workflow</h2>
          <div className="space-y-6">
            {workflowSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-600 text-sm font-semibold">{step.step}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600 mb-3">{step.description}</p>
                        <ul className="space-y-1">
                          {step.details.map((detail, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {index < workflowSteps.length - 1 && (
                  <div className="absolute -bottom-3 left-4 transform -translate-x-1/2">
                    <div className="w-6 h-6 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-gray-400 rotate-90" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Guidelines and Standards */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Guidelines and Standards</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Code Standards</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Follow TypeScript best practices</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Include comprehensive tests</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Meet accessibility requirements</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Follow naming conventions</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Design Standards</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Use established design tokens</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Maintain visual consistency</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Include usage documentation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Consider mobile responsiveness</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Get Started */}
        <div className="p-6 bg-blue-50 rounded-lg">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Ready to Contribute?</h2>
            <p className="text-gray-600 mb-6">
              Join our community and help make the Procore Design System even better.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <GitBranch className="w-4 h-4 mr-2" />
                  Browse Issues
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4 mr-2" />
                  Submit RFC
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Join Discussion
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
