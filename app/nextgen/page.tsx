import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { Zap, CheckCircle, ArrowRight, ExternalLink, Palette, Code, FileText, Users, Star, Award } from "lucide-react"

const nextgenResources = [
  {
    title: "Component Templates",
    description: "Pre-built templates that meet NextGen Silver standards",
    icon: Palette,
    color: "blue",
    items: [
      "Dashboard layouts with consistent navigation",
      "Form guidelines with proper validation",
      "Data table templates with sorting and filtering",
      "Modal and dialog guidelines",
    ],
    cta: "Browse Templates",
    href: "/nextgen/templates",
  },
  {
    title: "Chrome Plugin",
    description: "Browser extension for real-time design system validation",
    icon: Code,
    color: "green",
    items: [
      "Automatic component detection",
      "Design token validation",
      "Accessibility compliance checking",
      "Performance recommendations",
    ],
    cta: "Install Plugin",
    href: "/nextgen/plugin",
  },
  {
    title: "Certification Guide",
    description: "Step-by-step guide to achieve NextGen Silver certification",
    icon: Award,
    color: "purple",
    items: [
      "Design system adoption checklist",
      "Component usage requirements",
      "Accessibility standards compliance",
      "Performance benchmarks",
    ],
    cta: "View Guide",
    href: "/nextgen/certification",
  },
]

const certificationCriteria = [
  {
    category: "Design Consistency",
    requirements: [
      "Use approved design tokens for colors, typography, and spacing",
      "Implement consistent component guidelines across all pages",
      "Follow established layout and navigation guidelines",
      "Maintain visual hierarchy and information architecture",
    ],
    status: "required",
  },
  {
    category: "Component Usage",
    requirements: [
      "Use design system components for at least 80% of UI elements",
      "Implement proper component variants and states",
      "Follow component usage guidelines and best practices",
      "Avoid custom implementations where system components exist",
    ],
    status: "required",
  },
  {
    category: "Accessibility",
    requirements: [
      "Meet WCAG 2.1 AA compliance standards",
      "Implement proper keyboard navigation",
      "Provide appropriate ARIA labels and descriptions",
      "Maintain sufficient color contrast ratios",
    ],
    status: "required",
  },
  {
    category: "Performance",
    requirements: [
      "Achieve Core Web Vitals thresholds",
      "Optimize bundle size and loading performance",
      "Implement proper code splitting and lazy loading",
      "Follow performance best practices",
    ],
    status: "recommended",
  },
]

export default function NextGenPage() {
  return (
    <LayoutWrapper>
      <div className="container px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">NextGen Enablement</h1>
            <Badge className="bg-gradient-to-r from-orange-400 to-orange-600 text-white">Silver</Badge>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            Everything you need to successfully adopt design system elements for NextGen Silver certification.
            Streamline your development process and ensure consistency across Procore solutions.
          </p>

          <div className="flex items-center gap-4">
            <Button asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4 mr-2" />
                NextGen Program Overview
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/nextgen/certification">
                <Award className="w-4 h-4 mr-2" />
                Certification Guide
              </Link>
            </Button>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="mb-12 p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Why NextGen Silver?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-4 h-4 text-orange-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Faster Development</h3>
                <p className="text-sm text-gray-600">
                  Reduce development time by 40% using pre-built components and guidelines.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-4 h-4 text-orange-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Better User Experience</h3>
                <p className="text-sm text-gray-600">
                  Deliver consistent, accessible experiences across all Procore solutions.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Star className="w-4 h-4 text-orange-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Quality Assurance</h3>
                <p className="text-sm text-gray-600">
                  Meet high standards for accessibility, performance, and maintainability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Design System Resources</h2>
          <div className="space-y-6">
            {nextgenResources.map((resource) => {
              const Icon = resource.icon
              return (
                <Card key={resource.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          resource.color === "blue"
                            ? "bg-blue-100"
                            : resource.color === "green"
                              ? "bg-green-100"
                              : "bg-purple-100"
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 ${
                            resource.color === "blue"
                              ? "text-blue-600"
                              : resource.color === "green"
                                ? "text-green-600"
                                : "text-purple-600"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{resource.title}</CardTitle>
                        <CardDescription className="text-base mb-4">{resource.description}</CardDescription>

                        <ul className="space-y-2 mb-4">
                          {resource.items.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>

                        <Button asChild>
                          <Link href={resource.href}>
                            {resource.cta}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Certification Criteria */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">NextGen Silver Criteria</h2>
          <div className="space-y-4">
            {certificationCriteria.map((criteria) => (
              <Card key={criteria.category}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{criteria.category}</CardTitle>
                    <Badge variant={criteria.status === "required" ? "default" : "secondary"}>{criteria.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {criteria.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Getting Started */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Getting Started</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-blue-600 text-sm font-semibold">1</span>
                </div>
                <CardTitle className="text-lg">Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Evaluate your current solution against NextGen Silver criteria using our assessment tool.
                </p>
                <Button variant="outline" size="sm">
                  Start Assessment
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-blue-600 text-sm font-semibold">2</span>
                </div>
                <CardTitle className="text-lg">Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Use our templates, components, and guidelines to implement required changes.
                </p>
                <Button variant="outline" size="sm">
                  View Templates
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-blue-600 text-sm font-semibold">3</span>
                </div>
                <CardTitle className="text-lg">Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Submit your solution for review and receive your NextGen Silver certification.
                </p>
                <Button variant="outline" size="sm">
                  Submit for Review
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Support */}
        <div className="p-6 bg-gray-100 rounded-lg">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Need Support?</h2>
            <p className="text-gray-600 mb-6">Our team is here to help you achieve NextGen Silver certification.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" size="sm" asChild>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Users className="w-4 h-4 mr-2" />
                  Office Hours
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4 mr-2" />
                  Documentation
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  NextGen Program
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
