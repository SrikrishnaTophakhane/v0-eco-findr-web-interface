import { TrendingUp, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const trendingProducts = [
  { id: 1, name: "iPhone 15 Pro", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=200&h=200" },
  { id: 2, name: "PS5 Slim", image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=200&h=200" },
  { id: 3, name: "Stanley Cup", image: "https://images.unsplash.com/photo-1640638545803-b097b6c50720?auto=format&fit=crop&q=80&w=200&h=200" },
  { id: 4, name: "Kindle Paperwhite", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=200&h=200" },
  { id: 5, name: "Dyson Airwrap", image: "https://images.unsplash.com/photo-1632517596066-c30084f70513?auto=format&fit=crop&q=80&w=200&h=200" },
]

export function TrendingSection() {
  return (
    <section className="py-12 bg-background border-b border-border/40">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Trending Now</h2>
          </div>
          <Button variant="ghost" className="gap-1 text-primary">
            View All <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
          {trendingProducts.map((product) => (
            <div key={product.id} className="snap-start shrink-0 w-36 sm:w-44 group cursor-pointer">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted mb-3 border border-transparent group-hover:border-primary/20 transition-all">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium text-sm text-center group-hover:text-primary transition-colors">
                {product.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
