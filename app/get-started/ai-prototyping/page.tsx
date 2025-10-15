"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Code, Palette, Zap, Users, Clock, Target, ExternalLink, Sparkles, Bot, Figma, AlertTriangle, CheckCircle } from "lucide-react"

const aiTools = [
  {
    name: "v0",
    logo: "⚡",
    description: "AI-powered UI generation tool by Vercel that creates React components from text prompts",
    whoItsFor: ["Product Managers", "Designers", "Developers"],
    whenToUse: [
      "Rapid prototyping of UI components",
      "Generating boilerplate code quickly",
      "Exploring design variations",
      "Creating MVP interfaces fast",
      "Learning React patterns"
    ],
    whenNotToUse: [
      "Production-ready applications",
      "Complex business logic implementation",
      "Accessibility-critical interfaces",
      "Performance-sensitive applications",
      "Highly custom design systems"
    ],
    keyFeatures: [
      "Text-to-UI generation",
      "React + Tailwind output",
      "Multiple design variations",
      "Copy-paste ready code",
      "Design system integration"
    ],
    pricing: "Free tier available",
    learnMoreUrl: "https://v0.dev",
    icon: Zap,
    color: "blue"
  },
  {
    name: "Figma Make",
    logo: "🎨",
    description: "AI-powered design assistant that helps automate design workflows and generate assets",
    whoItsFor: ["Designers", "Design Teams", "Product Teams"],
    whenToUse: [
      "Automating repetitive design tasks",
      "Generating design variations",
      "Creating consistent iconography",
      "Building design system assets",
      "Streamlining handoff processes"
    ],
    whenNotToUse: [
      "Custom brand illustrations",
      "Complex animation design",
      "Pixel-perfect precision work",
      "Legal or compliance-sensitive content",
      "Detailed user research deliverables"
    ],
    keyFeatures: [
      "Automated design generation",
      "Asset creation and organization",
      "Style consistency checking",
      "Batch processing capabilities",
      "Design system integration"
    ],
    pricing: "Figma plugin ecosystem",
    learnMoreUrl: "https://www.figma.com/community/explore",
    icon: Palette,
    color: "purple"
  },
  {
    name: "Cursor",
    logo: "🔮",
    description: "AI-first code editor built for developers who want to code with AI assistance",
    whoItsFor: ["Frontend Developers", "Full-stack Developers", "Engineering Teams"],
    whenToUse: [
      "Building new features rapidly",
      "Refactoring existing code",
      "Learning new frameworks",
      "Debugging complex issues",
      "Implementing design systems"
    ],
    whenNotToUse: [
      "Simple HTML/CSS projects",
      "Learning coding fundamentals",
      "Offline development work",
      "Legacy systems with strict conventions",
      "Security-sensitive codebases"
    ],
    keyFeatures: [
      "AI-powered code completion",
      "Natural language to code",
      "Codebase-aware suggestions",
      "Multi-file editing support",
      "Git integration"
    ],
    pricing: "Free and Pro tiers",
    learnMoreUrl: "https://cursor.sh",
    icon: Code,
    color: "green"
  }
]

const useCases = [
  {
    title: "Rapid Prototyping",
    description: "Create functional prototypes in minutes instead of hours",
    tools: ["v0", "Figma Make"],
    icon: Zap
  },
  {
    title: "Usability Testing",
    description: "Generate multiple design variations and interactive prototypes for user testing and feedback collection",
    tools: ["v0", "Figma Make", "Cursor"],
    icon: Target
  },
  {
    title: "Code Generation",
    description: "Generate boilerplate code and component structures automatically",
    tools: ["Cursor", "v0"],
    icon: Bot
  }
]

const getColorClasses = (color: string) => {
  switch (color) {
    case "blue":
      return {
        bg: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-200",
        gradient: "from-blue-50 to-blue-100"
      }
    case "purple":
      return {
        bg: "bg-purple-100",
        text: "text-purple-600",
        border: "border-purple-200",
        gradient: "from-purple-50 to-purple-100"
      }
    case "green":
      return {
        bg: "bg-green-100",
        text: "text-green-600",
        border: "border-green-200",
        gradient: "from-green-50 to-green-100"
      }
    default:
      return {
        bg: "bg-gray-100",
        text: "text-gray-600",
        border: "border-gray-200",
        gradient: "from-gray-50 to-gray-100"
      }
  }
}

export default function AIPrototypingPage() {
  return (
    <LayoutWrapper>
      <div className="container px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Link href="/get-started" className="hover:text-blue-600">Getting Started</Link>
            <span>/</span>
            <span>AI Prototyping</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">AI Prototyping Tools</h1>
          </div>
          <p className="text-lg text-gray-600">
            Accelerate your design system workflow with AI-powered tools. From generating UI components 
            to automating design tasks, these tools help teams prototype and iterate faster than ever.
          </p>
        </div>

        {/* Benefits Banner */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Bot className="w-5 h-5 text-blue-600" />
            Why Use AI for Prototyping?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900">Speed</h3>
                <p className="text-sm text-gray-600">Generate components and code in seconds, not hours</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Target className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900">Consistency</h3>
                <p className="text-sm text-gray-600">Maintain design system standards automatically</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900">Collaboration</h3>
                <p className="text-sm text-gray-600">Bridge the gap between design and development</p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Use Cases */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900">Common Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase) => {
              const Icon = useCase.icon
              return (
                <Card key={useCase.title}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{useCase.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{useCase.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {useCase.tools.map((tool) => (
                        <Badge key={tool} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* AI Tools Spotlight */}
        <div className="space-y-8 mb-12">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Ready to get started?</h2>
            <p className="text-lg text-gray-600">
              Choose the AI tool that best fits your workflow and start accelerating your design system development.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {aiTools.map((tool) => {
              const colors = getColorClasses(tool.color)
              const Icon = tool.icon
              return (
                <Card key={tool.name} className="overflow-hidden flex flex-col h-full">
                  <div className={`bg-gradient-to-r ${colors.gradient} p-6 border-b ${colors.border}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{tool.name}</h3>
                        <p className="text-gray-600">{tool.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="space-y-6 flex-1">
                      {/* Who It's For */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Users className="w-4 h-4 text-gray-600" />
                          Who It's For
                        </h4>
                        <div className="space-y-2">
                          {tool.whoItsFor.map((audience) => (
                            <Badge key={audience} variant="secondary" className="mr-2 mb-2">
                              {audience}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-yellow-600" />
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {tool.keyFeatures.slice(0, 3).map((feature) => (
                            <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* When to Use */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          When to Use
                        </h4>
                        <ul className="space-y-2">
                          {tool.whenToUse.slice(0, 3).map((useCase) => (
                            <li key={useCase} className="flex items-start gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                              {useCase}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* When NOT to Use */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-600" />
                          When Not to Use
                        </h4>
                        <ul className="space-y-2">
                          {tool.whenNotToUse.slice(0, 3).map((limitation) => (
                            <li key={limitation} className="flex items-start gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                              {limitation}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* CTA anchored to bottom */}
                    <div className="mt-6">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={tool.learnMoreUrl} target="_blank">
                          Get Started with {tool.name}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

      </div>
    </LayoutWrapper>
  )
}
