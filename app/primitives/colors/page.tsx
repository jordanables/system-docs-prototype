"use client"

import { useState } from "react"
import Link from "next/link"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, ExternalLink, Palette, Eye, Contrast } from "lucide-react"

const colorTokens = {
  standard: {
    primary: [
      { name: "primary-50", value: "#fef7ed", hex: "#fef7ed", usage: "Lightest primary background" },
      { name: "primary-100", value: "#fed7aa", hex: "#fed7aa", usage: "Light primary background" },
      { name: "primary-200", value: "#fdba74", hex: "#fdba74", usage: "Primary hover states" },
      { name: "primary-300", value: "#fb923c", hex: "#fb923c", usage: "Primary borders" },
      { name: "primary-400", value: "#f97316", hex: "#f97316", usage: "Primary default" },
      { name: "primary-500", value: "#ea580c", hex: "#ea580c", usage: "Primary emphasis" },
      { name: "primary-600", value: "#dc2626", hex: "#dc2626", usage: "Primary pressed" },
      { name: "primary-700", value: "#b91c1c", hex: "#b91c1c", usage: "Primary dark" },
      { name: "primary-800", value: "#991b1b", hex: "#991b1b", usage: "Primary darker" },
      { name: "primary-900", value: "#7f1d1d", hex: "#7f1d1d", usage: "Darkest primary" },
    ],
    neutral: [
      { name: "gray-50", value: "#f9fafb", hex: "#f9fafb", usage: "Page backgrounds" },
      { name: "gray-100", value: "#f3f4f6", hex: "#f3f4f6", usage: "Card backgrounds" },
      { name: "gray-200", value: "#e5e7eb", hex: "#e5e7eb", usage: "Borders, dividers" },
      { name: "gray-300", value: "#d1d5db", hex: "#d1d5db", usage: "Input borders" },
      { name: "gray-400", value: "#9ca3af", hex: "#9ca3af", usage: "Placeholder text" },
      { name: "gray-500", value: "#6b7280", hex: "#6b7280", usage: "Secondary text" },
      { name: "gray-600", value: "#4b5563", hex: "#4b5563", usage: "Body text" },
      { name: "gray-700", value: "#374151", hex: "#374151", usage: "Headings" },
      { name: "gray-800", value: "#1f2937", hex: "#1f2937", usage: "Dark headings" },
      { name: "gray-900", value: "#111827", hex: "#111827", usage: "Darkest text" },
    ],
    semantic: [
      { name: "success-500", value: "#10b981", hex: "#10b981", usage: "Success states" },
      { name: "warning-500", value: "#f59e0b", hex: "#f59e0b", usage: "Warning states" },
      { name: "error-500", value: "#ef4444", hex: "#ef4444", usage: "Error states" },
      { name: "info-500", value: "#3b82f6", hex: "#3b82f6", usage: "Information states" },
    ],
  },
  dark: {
    primary: [
      { name: "primary-50", value: "#1a0f0a", hex: "#1a0f0a", usage: "Darkest primary background" },
      { name: "primary-100", value: "#2d1b12", hex: "#2d1b12", usage: "Dark primary background" },
      { name: "primary-200", value: "#44281a", hex: "#44281a", usage: "Primary hover states" },
      { name: "primary-300", value: "#5c3622", hex: "#5c3622", usage: "Primary borders" },
      { name: "primary-400", value: "#7c4a2a", hex: "#7c4a2a", usage: "Primary default" },
      { name: "primary-500", value: "#a05d32", hex: "#a05d32", usage: "Primary emphasis" },
      { name: "primary-600", value: "#c4713a", hex: "#c4713a", usage: "Primary pressed" },
      { name: "primary-700", value: "#e88542", hex: "#e88542", usage: "Primary light" },
      { name: "primary-800", value: "#f4a261", hex: "#f4a261", usage: "Primary lighter" },
      { name: "primary-900", value: "#ffc080", hex: "#ffc080", usage: "Lightest primary" },
    ],
    neutral: [
      { name: "gray-50", value: "#0a0a0a", hex: "#0a0a0a", usage: "Page backgrounds" },
      { name: "gray-100", value: "#171717", hex: "#171717", usage: "Card backgrounds" },
      { name: "gray-200", value: "#262626", hex: "#262626", usage: "Borders, dividers" },
      { name: "gray-300", value: "#404040", hex: "#404040", usage: "Input borders" },
      { name: "gray-400", value: "#525252", hex: "#525252", usage: "Placeholder text" },
      { name: "gray-500", value: "#737373", hex: "#737373", usage: "Secondary text" },
      { name: "gray-600", value: "#a3a3a3", hex: "#a3a3a3", usage: "Body text" },
      { name: "gray-700", value: "#d4d4d4", hex: "#d4d4d4", usage: "Headings" },
      { name: "gray-800", value: "#e5e5e5", hex: "#e5e5e5", usage: "Light headings" },
      { name: "gray-900", value: "#f5f5f5", hex: "#f5f5f5", usage: "Lightest text" },
    ],
    semantic: [
      { name: "success-500", value: "#22c55e", hex: "#22c55e", usage: "Success states" },
      { name: "warning-500", value: "#eab308", hex: "#eab308", usage: "Warning states" },
      { name: "error-500", value: "#f87171", hex: "#f87171", usage: "Error states" },
      { name: "info-500", value: "#60a5fa", hex: "#60a5fa", usage: "Information states" },
    ],
  },
  "high-contrast": {
    primary: [
      { name: "primary-50", value: "#ffffff", hex: "#ffffff", usage: "Lightest primary background" },
      { name: "primary-100", value: "#f0f0f0", hex: "#f0f0f0", usage: "Light primary background" },
      { name: "primary-200", value: "#d0d0d0", hex: "#d0d0d0", usage: "Primary hover states" },
      { name: "primary-300", value: "#b0b0b0", hex: "#b0b0b0", usage: "Primary borders" },
      { name: "primary-400", value: "#808080", hex: "#808080", usage: "Primary default" },
      { name: "primary-500", value: "#606060", hex: "#606060", usage: "Primary emphasis" },
      { name: "primary-600", value: "#404040", hex: "#404040", usage: "Primary pressed" },
      { name: "primary-700", value: "#303030", hex: "#303030", usage: "Primary dark" },
      { name: "primary-800", value: "#202020", hex: "#202020", usage: "Primary darker" },
      { name: "primary-900", value: "#000000", hex: "#000000", usage: "Darkest primary" },
    ],
    neutral: [
      { name: "gray-50", value: "#ffffff", hex: "#ffffff", usage: "Page backgrounds" },
      { name: "gray-100", value: "#f8f8f8", hex: "#f8f8f8", usage: "Card backgrounds" },
      { name: "gray-200", value: "#e0e0e0", hex: "#e0e0e0", usage: "Borders, dividers" },
      { name: "gray-300", value: "#c0c0c0", hex: "#c0c0c0", usage: "Input borders" },
      { name: "gray-400", value: "#808080", hex: "#808080", usage: "Placeholder text" },
      { name: "gray-500", value: "#606060", hex: "#606060", usage: "Secondary text" },
      { name: "gray-600", value: "#404040", hex: "#404040", usage: "Body text" },
      { name: "gray-700", value: "#202020", hex: "#202020", usage: "Headings" },
      { name: "gray-800", value: "#101010", hex: "#101010", usage: "Dark headings" },
      { name: "gray-900", value: "#000000", hex: "#000000", usage: "Darkest text" },
    ],
    semantic: [
      { name: "success-500", value: "#006400", hex: "#006400", usage: "Success states" },
      { name: "warning-500", value: "#ff8c00", hex: "#ff8c00", usage: "Warning states" },
      { name: "error-500", value: "#dc143c", hex: "#dc143c", usage: "Error states" },
      { name: "info-500", value: "#0000cd", hex: "#0000cd", usage: "Information states" },
    ],
  },
}

const themes = [
  {
    name: "Standard",
    description: "Default light theme with standard contrast ratios",
    tag: "standard",
    variant: "default",
    key: "standard" as const,
  },
  {
    name: "Dark",
    description: "Dark theme optimized for low-light environments",
    tag: "dark",
    variant: "secondary",
    key: "dark" as const,
  },
  {
    name: "High Contrast",
    description: "Enhanced contrast for improved accessibility",
    tag: "high-contrast",
    variant: "outline",
    key: "high-contrast" as const,
  },
]

export default function ColorsPage() {
  const [selectedTheme, setSelectedTheme] = useState<"standard" | "dark" | "high-contrast">("standard")

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value)
  }

  const currentTokens = colorTokens[selectedTheme]

  return (
    <LayoutWrapper>
      <div className="container px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Colors</h1>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            Our color system provides a consistent palette of design tokens that ensure accessibility, brand alignment,
            and visual hierarchy across all Procore experiences.
          </p>

          <div className="flex items-center gap-4">
            <Button asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Figma Library
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Eye className="w-4 h-4 mr-2" />
                Storybook
              </Link>
            </Button>
          </div>
        </div>

        {/* Theme Tags */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Themes</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {themes.map((theme) => (
              <Card
                key={theme.name}
                className={`hover:shadow-md transition-all cursor-pointer ${
                  selectedTheme === theme.key ? "ring-2 ring-blue-500 shadow-md" : "hover:shadow-md"
                }`}
                onClick={() => setSelectedTheme(theme.key)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{theme.name}</CardTitle>
                    <Badge variant={theme.variant as any}>{theme.tag}</Badge>
                  </div>
                  <CardDescription>{theme.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Color Tokens */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Design Tokens - {themes.find((t) => t.key === selectedTheme)?.name} Theme
          </h2>

          <Tabs defaultValue="primary" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="primary">Primary</TabsTrigger>
              <TabsTrigger value="neutral">Neutral</TabsTrigger>
              <TabsTrigger value="semantic">Semantic</TabsTrigger>
            </TabsList>

            <TabsContent value="primary" className="mt-6">
              <div className="grid gap-4">
                {currentTokens.primary.map((token) => (
                  <Card key={token.name} className="hover:shadow-sm transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-16 h-16 rounded-lg border border-gray-200 flex-shrink-0"
                          style={{ backgroundColor: token.hex }}
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-mono text-sm font-medium">{token.name}</h3>
                            <Badge variant="secondary" className="text-xs">
                              {token.hex}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{token.usage}</p>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard(token.name)}
                              className="h-8 px-2"
                            >
                              <Copy className="w-3 h-3 mr-1" />
                              Token
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard(token.hex)}
                              className="h-8 px-2"
                            >
                              <Copy className="w-3 h-3 mr-1" />
                              Hex
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="neutral" className="mt-6">
              <div className="grid gap-4">
                {currentTokens.neutral.map((token) => (
                  <Card key={token.name} className="hover:shadow-sm transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-16 h-16 rounded-lg border border-gray-200 flex-shrink-0"
                          style={{ backgroundColor: token.hex }}
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-mono text-sm font-medium">{token.name}</h3>
                            <Badge variant="secondary" className="text-xs">
                              {token.hex}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{token.usage}</p>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard(token.name)}
                              className="h-8 px-2"
                            >
                              <Copy className="w-3 h-3 mr-1" />
                              Token
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard(token.hex)}
                              className="h-8 px-2"
                            >
                              <Copy className="w-3 h-3 mr-1" />
                              Hex
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="semantic" className="mt-6">
              <div className="grid gap-4">
                {currentTokens.semantic.map((token) => (
                  <Card key={token.name} className="hover:shadow-sm transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-16 h-16 rounded-lg border border-gray-200 flex-shrink-0"
                          style={{ backgroundColor: token.hex }}
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-mono text-sm font-medium">{token.name}</h3>
                            <Badge variant="secondary" className="text-xs">
                              {token.hex}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{token.usage}</p>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard(token.name)}
                              className="h-8 px-2"
                            >
                              <Copy className="w-3 h-3 mr-1" />
                              Token
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard(token.hex)}
                              className="h-8 px-2"
                            >
                              <Copy className="w-3 h-3 mr-1" />
                              Hex
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Usage Guidelines */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Usage Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Contrast className="w-5 h-5" />
                  Accessibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• All color combinations meet WCAG 2.1 AA contrast requirements</li>
                  <li>• Use semantic colors consistently for states (success, warning, error)</li>
                  <li>• Never rely on color alone to convey information</li>
                  <li>• Test color combinations in different lighting conditions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Use design tokens instead of hardcoded hex values</li>
                  <li>• Maintain consistent color hierarchy across components</li>
                  <li>• Consider dark mode variations when selecting colors</li>
                  <li>• Use neutral colors for text and backgrounds</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Implementation */}
        <div className="p-6 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Implementation</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">CSS Custom Properties</h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
                <div>:root &#123;</div>
                <div className="ml-4">--color-primary-500: #f97316;</div>
                <div className="ml-4">--color-gray-900: #111827;</div>
                <div>&#125;</div>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Tailwind CSS</h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
                <div>&lt;button className="bg-primary-500 text-white"&gt;</div>
                <div>&lt;p className="text-gray-600"&gt;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
