"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Terminal, Copy, CheckCircle, AlertTriangle, ExternalLink, Package, Code, Zap } from "lucide-react"

const installationSteps = [
  {
    title: "Install the Package",
    description: "Add the Procore Design System to your project",
    commands: [
      "npm install @procore/design-system",
      "# or with yarn",
      "yarn add @procore/design-system"
    ],
    note: "This installs the core design system package with all components and tokens."
  },
  {
    title: "Install Peer Dependencies",
    description: "Install required peer dependencies for React projects",
    commands: [
      "npm install react react-dom @types/react @types/react-dom",
      "# Install Tailwind CSS (if not already installed)",
      "npm install -D tailwindcss postcss autoprefixer"
    ],
    note: "React 18+ is required. Tailwind CSS is used for styling utilities."
  },
  {
    title: "Configure Tailwind",
    description: "Set up Tailwind CSS configuration",
    commands: [
      "// tailwind.config.js",
      "module.exports = {",
      "  content: [",
      "    './src/**/*.{js,ts,jsx,tsx}',",
      "    './node_modules/@procore/design-system/**/*.{js,ts,jsx,tsx}'",
      "  ],",
      "  theme: {",
      "    extend: {",
      "      // Design system tokens will be injected here",
      "    },",
      "  },",
      "  plugins: [require('@procore/design-system/tailwind')],",
      "}"
    ],
    note: "The design system plugin automatically adds all design tokens to your Tailwind configuration."
  },
  {
    title: "Import Base Styles",
    description: "Add the design system base styles to your application",
    commands: [
      "// In your main CSS file or _app.tsx",
      "import '@procore/design-system/styles/base.css';",
      "import 'tailwindcss/base';",
      "import 'tailwindcss/components';",
      "import 'tailwindcss/utilities';"
    ],
    note: "Base styles include CSS reset, typography, and component styles."
  },
  {
    title: "Start Using UI Components",
    description: "Import and use design system components",
    commands: [
      "import { Button, Card, Input } from '@procore/design-system';",
      "",
      "function MyComponent() {",
      "  return (",
      "    <Card>",
      "      <Card.Header>",
      "        <Card.Title>Welcome</Card.Title>",
      "      </Card.Header>",
      "      <Card.Content>",
      "        <Input placeholder='Enter your name' />",
      "        <Button>Get Started</Button>",
      "      </Card.Content>",
      "    </Card>",
      "  );",
      "}"
    ],
    note: "All components are tree-shakable and follow consistent naming conventions."
  }
]

const frameworks = [
  {
    name: "Next.js",
    description: "App Router and Pages Router supported",
    icon: "⚡",
    setup: [
      "// next.config.js",
      "module.exports = {",
      "  transpilePackages: ['@procore/design-system'],",
      "}"
    ]
  },
  {
    name: "Vite",
    description: "Optimized for fast development",
    icon: "🔥",
    setup: [
      "// vite.config.js",
      "export default {",
      "  optimizeDeps: {",
      "    include: ['@procore/design-system']",
      "  }",
      "}"
    ]
  },
  {
    name: "Create React App",
    description: "Works out of the box",
    icon: "⚛️",
    setup: [
      "// No additional configuration needed",
      "// Just follow the standard installation steps"
    ]
  }
]

const troubleshooting = [
  {
    issue: "TypeScript errors with component props",
    solution: "Ensure you have @types/react and @types/react-dom installed",
    icon: AlertTriangle
  },
  {
    issue: "Styles not loading correctly",
    solution: "Check that base.css is imported and Tailwind CSS is configured properly",
    icon: AlertTriangle
  },
  {
    issue: "Bundle size too large",
    solution: "Use tree-shaking by importing specific components instead of the entire library",
    icon: AlertTriangle
  }
]

export default function InstallationGuidePage() {
  return (
    <LayoutWrapper>
      <div className="container px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Link href="/get-started" className="hover:text-blue-600">Getting Started</Link>
            <span>/</span>
            <span>Installation Guide</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Installation Guide</h1>
          <p className="text-lg text-gray-600">
            Get up and running with the Procore Design System in your React application. 
            Follow these steps to install, configure, and start using our components and design tokens.
          </p>
        </div>

        {/* Requirements */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Prerequisites
          </h2>
          <ul className="space-y-2 text-blue-800">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
              Node.js 16+ and npm/yarn
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
              React 18+ application
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
              TypeScript (recommended)
            </li>
          </ul>
        </div>

        {/* Installation Steps */}
        <div className="space-y-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900">Installation Steps</h2>
          {installationSteps.map((step, index) => (
            <Card key={index} className="relative">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-semibold text-blue-600 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
                  <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
                    {step.commands.join('\n')}
                  </pre>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="mt-2 text-gray-400 hover:text-white p-1 h-auto"
                    onClick={() => navigator.clipboard.writeText(step.commands.join('\n'))}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-sm text-gray-600">{step.note}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Framework-Specific Setup */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900">Framework Setup</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {frameworks.map((framework) => (
              <Card key={framework.name}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{framework.icon}</span>
                    <div>
                      <CardTitle className="text-lg">{framework.name}</CardTitle>
                      <CardDescription>{framework.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 rounded-lg p-3 overflow-x-auto">
                    <pre className="text-green-400 text-xs font-mono whitespace-pre-wrap">
                      {framework.setup.join('\n')}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900">Common Issues</h2>
          <div className="space-y-4">
            {troubleshooting.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">{item.issue}</h3>
                      <p className="text-sm text-gray-600">{item.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Next Steps</h2>
          <p className="text-gray-600 mb-6">
            Now that you have the design system installed, explore our components and start building!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href="/components">
                Browse UI Components
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/primitives">
                View Design Tokens
                <Zap className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://storybook.procore.com" target="_blank">
                API Documentation
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
