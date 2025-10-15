import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LayoutWrapper } from "@/components/layout-wrapper"
import {
  ArrowRight,
  Layers,
  BookOpen,
  GitBranch,
  Users,
  Zap,
  CheckCircle,
  Clock,
  AlertTriangle,
  Sparkles,
  Puzzle,
} from "lucide-react"

export default function HomePage() {
  return (
    <LayoutWrapper>
      <div className="container px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Link href="/get-started/ai-prototyping">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 hover:bg-blue-100 transition-colors cursor-pointer">
              <Sparkles className="w-4 h-4" />
              Now Available: AI Prototyping with the Design System
            </div>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Procore Design System</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your single source of truth for design foundations, components, and patterns. Empowering teams to build
            consistent, accessible experiences across web and mobile platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/get-started">
                Let's Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/components">Explore Components</Link>
            </Button>
          </div>
        </div>

        {/* Quick Access Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <CardTitle className="text-lg">Foundations</CardTitle>
                  <CardDescription>Design tokens and principles</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Colors, typography, spacing, and other foundational elements that power our design system.
              </p>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/foundations">
                  View Foundations
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Layers className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-lg">Components</CardTitle>
                  <CardDescription>Ready-to-use UI components</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Explore our complete library of platform components and community patterns with design guidelines and code examples.
              </p>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/components">
                  Browse Components
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Puzzle className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <CardTitle className="text-lg">Patterns</CardTitle>
                  <CardDescription>Reusable design solutions</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Discover standardized patterns that solve common interface problems and maintain design consistency across applications.
              </p>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/patterns">
                  Explore Patterns
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Updates */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Recent Updates</h2>
            <Button variant="outline" size="sm" asChild>
              <Link href="/releases">View All Releases</Link>
            </Button>
          </div>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="secondary">v13.2.0</Badge>
                      <span className="text-sm text-gray-500">Released 3 days ago</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">New Data Table Component</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Introducing a powerful, accessible data table component with sorting, filtering, and pagination
                      support.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1 text-green-600">
                        <CheckCircle className="w-4 h-4" />3 new components
                      </span>
                      <span className="flex items-center gap-1 text-blue-600">
                        <Clock className="w-4 h-4" />2 enhancements
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="secondary">v13.1.5</Badge>
                      <span className="text-sm text-gray-500">Released 1 week ago</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Dark Mode Token Updates</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Enhanced dark mode support with improved contrast ratios and accessibility compliance.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1 text-orange-600">
                        <AlertTriangle className="w-4 h-4" />
                        Breaking changes
                      </span>
                      <Link href="/releases/v13.1.5" className="text-blue-600 hover:underline">
                        View migration guide
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>


        {/* Support Section */}
        <div className="mt-12 p-6 bg-gray-100 rounded-lg">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Need Help?</h2>
            <p className="text-gray-600 mb-4">Our team is here to support your design system adoption journey.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" size="sm" asChild>
                <Link href="/contribute">
                  <Users className="w-4 h-4 mr-2" />
                  Contribute
                </Link>
              </Button>
              <Button variant="outline" size="sm">
                <GitBranch className="w-4 h-4 mr-2" />
                GitHub Issues
              </Button>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
