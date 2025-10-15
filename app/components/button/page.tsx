"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { Copy, ExternalLink, Figma, Github, Download, Heart, Settings, Trash2 } from "lucide-react"

export default function ButtonComponentPage() {
  const [copiedCode, setCopiedCode] = useState("")

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(""), 2000)
  }

  const basicUsageCode = `import { Button } from '@procore/core-react'

export function MyComponent() {
  return (
    <Button onClick={() => console.log('clicked')}>
      Click me
    </Button>
  )
}`

  const variantsCode = `<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`

  const sizesCode = `<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`

  const withIconsCode = `<Button>
  <Download className="w-4 h-4 mr-2" />
  Download
</Button>

<Button variant="outline">
  Settings
  <Settings className="w-4 h-4 ml-2" />
</Button>`

  return (
    <LayoutWrapper>
      <div className="container px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-3xl font-bold text-gray-900">Button</h1>
            <Badge>Stable</Badge>
          </div>
          <p className="text-lg text-gray-600 mb-4">
            Clickable elements that trigger actions or navigate users through the interface. Buttons are fundamental
            interactive components that should be used consistently across the application.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Last updated: January 15, 2024</span>
            <span>•</span>
            <span>Contributors: Design System Team</span>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Button variant="outline" size="sm" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Figma className="w-4 h-4 mr-2" />
                Figma
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Web
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                iOS
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Android
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Storybook
              </a>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="examples" className="space-y-6">
          <TabsList>
            <TabsTrigger value="examples">Examples</TabsTrigger>
            <TabsTrigger value="usage">Usage Guidelines</TabsTrigger>
            <TabsTrigger value="api">API Reference</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          </TabsList>

          <TabsContent value="examples" className="space-y-6">
            {/* Basic Usage */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Usage</CardTitle>
                <CardDescription>The default button style for primary actions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <Button>Click me</Button>
                  </div>
                  <div className="relative">
                    <pre className="code-block text-white text-sm overflow-x-auto">
                      <code>{basicUsageCode}</code>
                    </pre>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 text-white hover:bg-gray-700"
                      onClick={() => copyToClipboard(basicUsageCode, "basic")}
                    >
                      {copiedCode === "basic" ? "Copied!" : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Variants */}
            <Card>
              <CardHeader>
                <CardTitle>Variants</CardTitle>
                <CardDescription>Different button styles for various use cases</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <div className="flex flex-wrap gap-3">
                      <Button variant="default">Default</Button>
                      <Button variant="destructive">Destructive</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="link">Link</Button>
                    </div>
                  </div>
                  <div className="relative">
                    <pre className="code-block text-white text-sm overflow-x-auto">
                      <code>{variantsCode}</code>
                    </pre>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 text-white hover:bg-gray-700"
                      onClick={() => copyToClipboard(variantsCode, "variants")}
                    >
                      {copiedCode === "variants" ? "Copied!" : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sizes */}
            <Card>
              <CardHeader>
                <CardTitle>Sizes</CardTitle>
                <CardDescription>Different button sizes for various contexts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Button size="sm">Small</Button>
                      <Button size="default">Default</Button>
                      <Button size="lg">Large</Button>
                    </div>
                  </div>
                  <div className="relative">
                    <pre className="code-block text-white text-sm overflow-x-auto">
                      <code>{sizesCode}</code>
                    </pre>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 text-white hover:bg-gray-700"
                      onClick={() => copyToClipboard(sizesCode, "sizes")}
                    >
                      {copiedCode === "sizes" ? "Copied!" : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* With Icons */}
            <Card>
              <CardHeader>
                <CardTitle>With Icons</CardTitle>
                <CardDescription>Buttons can include icons to provide additional context</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <div className="flex flex-wrap gap-3">
                      <Button>
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                      <Button variant="outline">
                        Settings
                        <Settings className="w-4 h-4 ml-2" />
                      </Button>
                      <Button variant="destructive">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </Button>
                      <Button variant="ghost">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="relative">
                    <pre className="code-block text-white text-sm overflow-x-auto">
                      <code>{withIconsCode}</code>
                    </pre>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 text-white hover:bg-gray-700"
                      onClick={() => copyToClipboard(withIconsCode, "icons")}
                    >
                      {copiedCode === "icons" ? "Copied!" : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="usage" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>When to Use</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Primary Actions</h4>
                  <p className="text-sm text-gray-600">
                    Use the default button variant for the most important action on a page or in a section.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Secondary Actions</h4>
                  <p className="text-sm text-gray-600">
                    Use outline or secondary variants for supporting actions that are less critical.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Destructive Actions</h4>
                  <p className="text-sm text-gray-600">
                    Use the destructive variant for actions that delete or remove content.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Best Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Use clear, action-oriented labels</p>
                      <p className="text-sm text-gray-600">
                        Button text should clearly describe what will happen when clicked.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Maintain consistent spacing</p>
                      <p className="text-sm text-gray-600">
                        Use consistent spacing between buttons and other elements.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Don't use too many primary buttons</p>
                      <p className="text-sm text-gray-600">
                        Limit primary buttons to one per section to maintain clear hierarchy.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Props</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 font-medium">Prop</th>
                        <th className="text-left py-2 font-medium">Type</th>
                        <th className="text-left py-2 font-medium">Default</th>
                        <th className="text-left py-2 font-medium">Description</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      <tr className="border-b">
                        <td className="py-2 font-mono">variant</td>
                        <td className="py-2">'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'</td>
                        <td className="py-2">'default'</td>
                        <td className="py-2">The visual style variant</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-mono">size</td>
                        <td className="py-2">'sm' | 'default' | 'lg'</td>
                        <td className="py-2">'default'</td>
                        <td className="py-2">The size of the button</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-mono">disabled</td>
                        <td className="py-2">boolean</td>
                        <td className="py-2">false</td>
                        <td className="py-2">Whether the button is disabled</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-mono">onClick</td>
                        <td className="py-2">() =&gt; void</td>
                        <td className="py-2">-</td>
                        <td className="py-2">Click event handler</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-mono">children</td>
                        <td className="py-2">ReactNode</td>
                        <td className="py-2">-</td>
                        <td className="py-2">Button content</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="accessibility" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Accessibility Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Keyboard Navigation</h4>
                  <p className="text-sm text-gray-600 mb-2">Buttons are fully keyboard accessible:</p>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>
                      • <kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">Tab</kbd> to focus
                    </li>
                    <li>
                      • <kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">Enter</kbd> or{" "}
                      <kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">Space</kbd> to activate
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Screen Reader Support</h4>
                  <p className="text-sm text-gray-600">
                    Buttons include proper ARIA attributes and semantic HTML for screen reader compatibility.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Focus Management</h4>
                  <p className="text-sm text-gray-600">
                    Clear focus indicators help users understand which button is currently focused.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>WCAG Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">AA</Badge>
                    <span className="text-sm text-gray-600">Color contrast meets WCAG AA standards</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">AA</Badge>
                    <span className="text-sm text-gray-600">Minimum touch target size of 44px</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">AAA</Badge>
                    <span className="text-sm text-gray-600">Clear focus indicators</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </LayoutWrapper>
  )
}
