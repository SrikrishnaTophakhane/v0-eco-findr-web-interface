import { ProductCard } from "@/components/product-card"
import { PriceComparison } from "@/components/price-comparison"
import { AIInsights } from "@/components/ai-insights"

export function SearchResults() {
  return (
    <section className="pt-8 pb-16 bg-background">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Search Results</h2>
          <p className="text-muted-foreground">Found the best deals on Sony WH-1000XM5 Headphones</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
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
      </div>
    </section>
  )
}
