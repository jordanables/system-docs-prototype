import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Code, Palette, BookOpen, Zap, CheckCircle, ExternalLink, Download, Play } from "lucide-react"

const gettingStartedPaths = [
  {
    title: "For Developers",
    description: "Start building with our component library and design tokens",
    icon: Code,
    steps: [
      "Install the design system package",
      "Import components and tokens",
      "Follow coding guidelines",
      "Build your first feature"
    ],
    primaryAction: {
      label: "View Components",
      href: "/components"
    },
    secondaryAction: {
      label: "API Documentation",
      href: "/docs",
      external: true
    }
  },
  {
    title: "For Designers",
    description: "Access design files, tokens, and guidelines for consistent designs",
    icon: Palette,
    steps: [
      "Download Figma component library",
      "Review design foundations",
      "Use established patterns",
      "Follow accessibility guidelines"
    ],
    primaryAction: {
      label: "Design Foundations",
      href: "/foundations"
    },
    secondaryAction: {
      label: "Figma Library",
      href: "#",
      external: true
    }
  },
  {
    title: "For Product Teams",
    description: "Learn how to adopt the design system across your product",
    icon: Zap,
    steps: [
      "Assess your current state",
      "Plan your migration strategy",
      "Train your team",
      "Achieve NextGen certification"
    ],
    primaryAction: {
      label: "NextGen Enablement",
      href: "/nextgen"
    },
    secondaryAction: {
      label: "Migration Guide",
      href: "#",
      external: true
    }
  }
]

const quickLinks = [
  {
    title: "Installation Guide",
    description: "Get up and running in minutes",
    icon: Download,
    href: "/docs/installation"
  },
  {
    title: "Video Tutorials",
    description: "Watch step-by-step walkthroughs",
    icon: Play,
    href: "#"
  },
  {
    title: "Best Practices",
    description: "Learn from real-world examples",
    icon: CheckCircle,
    href: "/patterns"
  },
  {
    title: "Support & Help",
    description: "Get help when you need it",
    icon: BookOpen,
    href: "/contribute"
  }
]

export default function GetStartedPage() {
  return (
    <LayoutWrapper>
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="text-center px-6">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4" />
            Ready to Build Better
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Welcome to the Procore Design System</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Everything you need to start building consistent, accessible experiences with the Procore Design System. 
            Choose your path and begin your journey.
          </p>
        </div>

        {/* Getting Started Paths */}
        <div className="px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Choose Your Path</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {gettingStartedPaths.map((path) => (
              <Card key={path.title} className="hover:shadow-lg transition-shadow h-full flex flex-col">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <path.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{path.title}</CardTitle>
                  <CardDescription className="text-base">{path.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="space-y-3 mb-6">
                    {path.steps.map((step, index) => (
                      <div key={step} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-medium text-blue-600 shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-sm text-gray-600">{step}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto space-y-3">
                    <Button asChild className="w-full">
                      <Link href={path.primaryAction.href}>
                        {path.primaryAction.label}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild className="w-full">
                      <Link href={path.secondaryAction.href} {...(path.secondaryAction.external && { target: "_blank" })}>
                        {path.secondaryAction.label}
                        {path.secondaryAction.external && <ExternalLink className="w-4 h-4 ml-2" />}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Quick Links</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link) => (
              <Card key={link.title} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <link.icon className="w-6 h-6 text-gray-600" />
                  </div>
                  <CardTitle className="text-lg">{link.title}</CardTitle>
                  <CardDescription className="text-sm">{link.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button variant="ghost" size="sm" asChild className="w-full">
                    <Link href={link.href}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </LayoutWrapper>
  )
}
