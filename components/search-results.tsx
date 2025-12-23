"use client"

import { useState } from "react"
import { ProductCard } from "@/components/product-card"
import { PriceComparison } from "@/components/price-comparison"
import { AIInsights } from "@/components/ai-insights"
import { SimilarProducts } from "@/components/similar-products"
import { ComparisonTool } from "@/components/comparison-tool"
import { toast } from "sonner"

interface SearchResultsProps {
  query?: string
}

export function SearchResults({ query }: SearchResultsProps) {
  const [selectedProducts, setSelectedProducts] = useState<any[]>([])

  const addToCompare = (product: any) => {
    if (selectedProducts.find((p) => p.id === product.id)) {
      removeFromCompare(product.id)
      return
    }
    if (selectedProducts.length >= 5) {
      toast.error("You can compare up to 5 products")
      return
    }
    setSelectedProducts([...selectedProducts, product])
  }

  const removeFromCompare = (id: string) => {
    setSelectedProducts(selectedProducts.filter((p) => p.id !== id))
  }

  return (
    <section className="pt-16 pb-32 bg-background">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold mb-2">
            {query ? `Search Results for "${query}"` : "Search Results"}
          </h2>
          <p className="text-muted-foreground">Found the best deals on Sony WH-1000XM5 Headphones</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Main Product Card */}
          <div className="lg:col-span-1">
            <ProductCard
              onCompareToggle={addToCompare}
              isChecked={!!selectedProducts.find(p => p.id === "sony-xm5")}
            />
          </div>

          {/* Price Comparison & Insights */}
          <div className="lg:col-span-2 space-y-6">
            <PriceComparison />
            <AIInsights />
          </div>
        </div>

        {/* Similar & Alternatives */}
        <SimilarProducts
          onCompareToggle={addToCompare}
          selectedIds={selectedProducts.map(p => p.id)}
        />
      </div>

      {/* Comparison Tool Sticky Bar */}
      <ComparisonTool selectedProducts={selectedProducts} onRemove={removeFromCompare} />
    </section>
  )
}
