import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { CheckCircle, AlertTriangle, Zap, Bug, Plus, ArrowUpRight, ExternalLink, Calendar, Package } from "lucide-react"

const releases = [
  {
    version: "v13.2.0",
    date: "2024-01-16",
    type: "minor",
    highlights: [
      "New Data Table component with advanced filtering",
      "Enhanced dark mode support across all components",
      "Improved accessibility for screen readers",
    ],
    changes: {
      new: [
        "Data Table component with sorting, filtering, and pagination",
        "Advanced search functionality for complex data sets",
        "Export capabilities (CSV, PDF) for data tables",
      ],
      enhancements: [
        "Button component now supports loading states",
        "Modal component improved keyboard navigation",
        "Tooltip positioning algorithm enhanced for edge cases",
      ],
      fixes: [
        "Fixed focus trap issue in Modal component",
        "Resolved color contrast issues in dark mode",
        "Fixed responsive behavior in Navigation component",
      ],
      breaking: [],
    },
    migrationGuide: "/releases/v13.2.0/migration",
    packages: ["@procore/core-react", "@procore/core-tokens"],
  },
  {
    version: "v13.1.5",
    date: "2024-01-10",
    type: "patch",
    highlights: [
      "Critical accessibility fixes",
      "Updated design tokens for better contrast",
      "Performance improvements",
    ],
    changes: {
      new: [],
      enhancements: [
        "Improved color contrast ratios across all components",
        "Enhanced keyboard navigation patterns",
        "Optimized bundle size by 15%",
      ],
      fixes: [
        "Fixed ARIA labels in form components",
        "Resolved memory leak in useEffect hooks",
        "Fixed SSR hydration issues",
      ],
      breaking: ["Removed legacy spacing tokens (space-xs, space-lg)", "Updated color token naming convention"],
    },
    migrationGuide: "/releases/v13.1.5/migration",
    packages: ["@procore/core-react", "@procore/core-tokens"],
  },
  {
    version: "v13.1.0",
    date: "2024-01-03",
    type: "minor",
    highlights: [
      "New Alert component variants",
      "Enhanced form validation patterns",
      "Mobile responsiveness improvements",
    ],
    changes: {
      new: [
        "Alert component with success, warning, error, and info variants",
        "Form validation hooks and utilities",
        "Mobile-first responsive grid system",
      ],
      enhancements: [
        "Input component supports prefix and suffix icons",
        "Button component improved touch targets for mobile",
        "Card component enhanced shadow system",
      ],
      fixes: ["Fixed z-index stacking issues", "Resolved form submission edge cases", "Fixed mobile scroll behavior"],
      breaking: [],
    },
    migrationGuide: null,
    packages: ["@procore/core-react"],
  },
  {
    version: "v13.0.0",
    date: "2023-12-15",
    type: "major",
    highlights: [
      "Complete design system refresh",
      "New component architecture",
      "Breaking changes for better consistency",
    ],
    changes: {
      new: ["Completely redesigned component library", "New design token system", "Enhanced TypeScript support"],
      enhancements: [
        "Improved performance across all components",
        "Better tree-shaking support",
        "Enhanced accessibility features",
      ],
      fixes: [],
      breaking: [
        "Complete API redesign for all components",
        "New import paths and naming conventions",
        "Updated design tokens and CSS variables",
      ],
    },
    migrationGuide: "/releases/v13.0.0/migration",
    packages: ["@procore/core-react", "@procore/core-tokens", "@procore/core-icons"],
  },
]

function getTypeColor(type: string) {
  switch (type) {
    case "major":
      return "destructive"
    case "minor":
      return "default"
    case "patch":
      return "secondary"
    default:
      return "outline"
  }
}

function getChangeIcon(type: string) {
  switch (type) {
    case "new":
      return Plus
    case "enhancements":
      return Zap
    case "fixes":
      return Bug
    case "breaking":
      return AlertTriangle
    default:
      return CheckCircle
  }
}

function getChangeColor(type: string) {
  switch (type) {
    case "new":
      return "text-green-600"
    case "enhancements":
      return "text-blue-600"
    case "fixes":
      return "text-orange-600"
    case "breaking":
      return "text-red-600"
    default:
      return "text-gray-600"
  }
}

export default function ReleasesPage() {
  return (
    <LayoutWrapper>
      <div className="container px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Release Notes</h1>
          <p className="text-lg text-gray-600 mb-6">
            Stay up to date with the latest changes, new components, bug fixes, and breaking changes in the Procore
            Design System.
          </p>

          {/* Release Strategy Link */}
          <div className="flex items-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/releases/strategy">
                <Package className="w-4 h-4 mr-2" />
                Release Strategy
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/releases/deprecation">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Deprecation Policy
              </Link>
            </Button>
          </div>
        </div>

        {/* Releases */}
        <div className="space-y-8">
          {releases.map((release) => (
            <Card key={release.version} className="relative">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-xl">{release.version}</CardTitle>
                      <Badge variant={getTypeColor(release.type) as any}>{release.type}</Badge>
                      {release.changes.breaking.length > 0 && <Badge variant="destructive">Breaking Changes</Badge>}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(release.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      <span>•</span>
                      <span>{release.packages.join(", ")}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">Highlights</h3>
                  <ul className="space-y-1">
                    {release.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-6">
                  {/* Changes */}
                  {Object.entries(release.changes).map(([type, changes]) => {
                    if (changes.length === 0) return null

                    const Icon = getChangeIcon(type)
                    const colorClass = getChangeColor(type)

                    return (
                      <div key={type}>
                        <h4 className={`font-medium mb-3 flex items-center gap-2 ${colorClass}`}>
                          <Icon className="w-4 h-4" />
                          {type === "new"
                            ? "What's New"
                            : type === "enhancements"
                              ? "Enhancements"
                              : type === "fixes"
                                ? "Bug Fixes"
                                : "Breaking Changes"}
                        </h4>
                        <ul className="space-y-2 ml-6">
                          {changes.map((change, index) => (
                            <li key={index} className="text-sm text-gray-600">
                              {change}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  })}

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t">
                    {release.migrationGuide && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={release.migrationGuide}>
                          Migration Guide
                          <ArrowUpRight className="w-3 h-3 ml-2" />
                        </Link>
                      </Button>
                    )}
                    <Button variant="ghost" size="sm" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        GitHub Release
                        <ExternalLink className="w-3 h-3 ml-2" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        npm Package
                        <ExternalLink className="w-3 h-3 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline">Load More Releases</Button>
        </div>
      </div>
    </LayoutWrapper>
  )
}
