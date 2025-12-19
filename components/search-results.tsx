import { ProductCard } from "@/components/product-card"
import { PriceComparison } from "@/components/price-comparison"
import { AIInsights } from "@/components/ai-insights"
import { SimilarProducts } from "@/components/similar-products"
import { ComparisonTool } from "@/components/comparison-tool"

export function SearchResults() {
  return (
    <section className="pt-16 pb-32 bg-background">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Search Results</h2>
          <p className="text-muted-foreground">Found the best deals on Sony WH-1000XM5 Headphones</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Main Product Card */}
          <div className="lg:col-span-1">
            <ProductCard />
          </div>

          {/* Price Comparison & Insights */}
          <div className="lg:col-span-2 space-y-6">
            <PriceComparison />
            <AIInsights />
          </div>
        </div>

        {/* Similar & Alternatives */}
        <SimilarProducts />
      </div>

      {/* Comparison Tool Sticky Bar */}
      <ComparisonTool />
    </section>
  )
}
