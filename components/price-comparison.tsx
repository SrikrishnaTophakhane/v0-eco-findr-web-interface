import { ExternalLink, TrendingDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const stores = [
  { name: "Amazon", price: 329.99, stock: "In Stock", shipping: "Free", isBest: true },
  { name: "eBay", price: 349.95, stock: "In Stock", shipping: "$5.99", isBest: false },
  { name: "Best Buy", price: 379.99, stock: "Limited", shipping: "Free", isBest: false },
]

export function PriceComparison() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingDown className="h-5 w-5 text-primary" />
          Price Comparison
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {stores.map((store) => (
            <div
              key={store.name}
              className={`flex items-center justify-between p-4 rounded-lg border ${
                store.isBest ? "border-primary bg-primary/5" : "border-border bg-card"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center font-bold text-sm">
                  {store.name.slice(0, 2)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{store.name}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{store.stock}</span>
                    <span>•</span>
                    <span>Shipping: {store.shipping}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-2xl font-bold text-foreground">${store.price}</p>
                  {store.isBest && (
                    <Badge variant="secondary" className="text-xs">
                      Lowest Price
                    </Badge>
                  )}
                </div>
                <Button size="sm" variant={store.isBest ? "default" : "outline"}>
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
