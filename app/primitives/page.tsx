"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { useState, useMemo } from "react"
import { Search, ArrowRight, Tag, Clock, Palette, Type, Square, Sparkles, Grid, Layers } from "lucide-react"
import Link from "next/link"

// Primitives Data
const primitives = [
  {
    name: "Colors",
    description: "Color palette, tokens, and usage guidelines for consistent visual identity",
    icon: Palette,
    category: "Visual",
    lastUpdated: "2024-03-15",
    status: "Stable",
    usage: "High",
    documentation: "#",
  },
  {
    name: "Typography",
    description: "Font families, sizes, weights, and line heights for text hierarchy",
    icon: Type,
    category: "Visual",
    lastUpdated: "2024-03-10",
    status: "Stable",
    usage: "High",
    documentation: "#",
  },
  {
    name: "Spacing",
    description: "Standardized spacing scale for consistent layout and composition",
    icon: Grid,
    category: "Layout",
    lastUpdated: "2024-03-08",
    status: "Stable",
    usage: "High",
    documentation: "#",
  },
  {
    name: "Shadows",
    description: "Elevation system using shadows to create depth and visual hierarchy",
    icon: Sparkles,
    category: "Visual",
    lastUpdated: "2024-03-05",
    status: "Stable",
    usage: "Medium",
    documentation: "#",
  },
  {
    name: "Border Radius",
    description: "Rounded corner values for consistent component styling",
    icon: Square,
    category: "Visual",
    lastUpdated: "2024-02-28",
    status: "Stable",
    usage: "Medium",
    documentation: "#",
  },
  {
    name: "Breakpoints",
    description: "Responsive design breakpoints for different screen sizes",
    icon: Layers,
    category: "Layout",
    lastUpdated: "2024-02-25",
    status: "Stable",
    usage: "High",
    documentation: "#",
  },
]

export default function PrimitivesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  // Get unique values for filter options
  const uniqueCategories = useMemo(() => {
    const categories = [...new Set(primitives.map(p => p.category))]
    return categories.sort()
  }, [])

  const uniqueStatuses = useMemo(() => {
    const statuses = [...new Set(primitives.map(p => p.status))]
    return statuses.sort()
  }, [])

  const filteredPrimitives = useMemo(() => {
    return primitives.filter((primitive) => {
      const matchesSearch = primitive.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          primitive.description.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesCategory = categoryFilter === "all" || primitive.category === categoryFilter
      const matchesStatus = statusFilter === "all" || primitive.status === statusFilter
      
      return matchesSearch && matchesCategory && matchesStatus
    })
  }, [searchTerm, categoryFilter, statusFilter])

  return (
    <LayoutWrapper>
      <div className="space-y-8">
        {/* Header */}
        <div className="px-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Design Primitives</h1>
          <p className="text-lg text-gray-600">
            Core design tokens and foundational elements that define the visual language and behavior of our design system.
          </p>
        </div>

        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mx-6">
          <h3 className="font-semibold text-blue-900 mb-2">Building with Primitives</h3>
          <p className="text-blue-800">
            Design primitives are the atomic building blocks of our design system. They ensure consistency across all products and platforms by providing a single source of truth for colors, typography, spacing, and more.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="px-6">
          <div className="flex flex-wrap gap-4 items-center mb-6">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search primitives..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full lg:w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {uniqueCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full lg:w-36">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                {uniqueStatuses.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <p className="text-sm text-gray-600 mb-6">
            Showing {filteredPrimitives.length} {filteredPrimitives.length === 1 ? 'primitive' : 'primitives'}
          </p>
        </div>

        {/* Primitives Grid */}
        <div className="px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPrimitives.map((primitive) => (
              <Card key={primitive.name} className="hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <primitive.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge 
                      variant={primitive.status === "Stable" ? "default" : "secondary"}
                      className={primitive.status === "Stable" ? "bg-green-100 text-green-800 hover:bg-green-100" : ""}
                    >
                      {primitive.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{primitive.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{primitive.description}</p>
                  
                  {/* Visual Example Area */}
                  <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    {primitive.name === "Colors" && (
                      <div className="flex gap-2">
                        <div className="w-8 h-8 bg-blue-500 rounded"></div>
                        <div className="w-8 h-8 bg-purple-500 rounded"></div>
                        <div className="w-8 h-8 bg-orange-500 rounded"></div>
                        <div className="w-8 h-8 bg-green-500 rounded"></div>
                        <div className="w-8 h-8 bg-gray-800 rounded"></div>
                      </div>
                    )}
                    {primitive.name === "Typography" && (
                      <div className="space-y-1">
                        <div className="text-2xl font-bold">Heading</div>
                        <div className="text-base">Body text</div>
                        <div className="text-sm text-gray-600">Caption</div>
                      </div>
                    )}
                    {primitive.name === "Spacing" && (
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-8 bg-blue-500"></div>
                        <div className="w-4 h-8 bg-blue-500"></div>
                        <div className="w-8 h-8 bg-blue-500"></div>
                        <div className="w-12 h-8 bg-blue-500"></div>
                      </div>
                    )}
                    {primitive.name === "Shadows" && (
                      <div className="flex gap-3">
                        <div className="w-12 h-12 bg-white rounded shadow-sm"></div>
                        <div className="w-12 h-12 bg-white rounded shadow-md"></div>
                        <div className="w-12 h-12 bg-white rounded shadow-lg"></div>
                      </div>
                    )}
                    {primitive.name === "Border Radius" && (
                      <div className="flex gap-3">
                        <div className="w-12 h-12 bg-blue-500"></div>
                        <div className="w-12 h-12 bg-blue-500 rounded-sm"></div>
                        <div className="w-12 h-12 bg-blue-500 rounded-md"></div>
                        <div className="w-12 h-12 bg-blue-500 rounded-lg"></div>
                      </div>
                    )}
                    {primitive.name === "Breakpoints" && (
                      <div className="space-y-2">
                        <div className="h-2 bg-blue-500 rounded" style={{ width: '25%' }}></div>
                        <div className="h-2 bg-blue-500 rounded" style={{ width: '50%' }}></div>
                        <div className="h-2 bg-blue-500 rounded" style={{ width: '75%' }}></div>
                        <div className="h-2 bg-blue-500 rounded" style={{ width: '100%' }}></div>
                      </div>
                    )}
                  </div>

                  {/* Metadata */}
                  <div className="text-xs text-gray-500 space-y-1 pt-2 border-t">
                    <div className="flex items-center">
                      <Tag className="w-3 h-3 text-gray-400 mr-1.5" />
                      Category: <span className="font-medium ml-1">{primitive.category}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 text-gray-400 mr-1.5" />
                      Last Updated: <span className="font-medium ml-1">{new Date(primitive.lastUpdated).toLocaleDateString()}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-4 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors" 
                    asChild
                  >
                    {primitive.name === "Colors" ? (
                      <Link href="/primitives/colors">
                        View Details
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    ) : (
                      <a href={primitive.documentation} target="_blank" rel="noopener noreferrer">
                        View Details
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </a>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="px-6 pb-6">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle>Getting Started with Primitives</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Design primitives are the foundation of our design system. They define the core visual language and ensure consistency across all products and platforms.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">💡 Best Practices</h4>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Always use design tokens instead of hard-coded values</li>
                  <li>• Reference primitives documentation when creating new components</li>
                  <li>• Maintain consistency by adhering to the established primitive values</li>
                  <li>• Contribute back to the system when you identify missing tokens</li>
                </ul>
              </div>
              <div className="flex gap-3 pt-2">
                <Button asChild>
                  <Link href="/docs/installation">
                    Installation Guide
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contribute">Contribute</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </LayoutWrapper>
  )
}

