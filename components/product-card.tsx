import { ShieldCheck, Star, TrendingUp } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ProductCard() {
  const similarProducts = [
    {
      id: 1,
      name: "Sony WH-1000XM4",
      price: "$279.99",
      image: "/sony-wh-1000xm4.png",
      rating: 4.7,
      reviews: 3245,
    },
    {
      id: 2,
      name: "Bose QC 45",
      price: "$299.99",
      image: "/bose-quietcomfort-45-headphones.jpg",
      rating: 4.6,
      reviews: 2156,
    },
    {
      id: 3,
      name: "Sennheiser Momentum 4",
      price: "$319.99",
      image: "/sennheiser-momentum-4-headphones.jpg",
      rating: 4.8,
      reviews: 1892,
    },
  ]

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="relative aspect-square bg-muted">
            <img
              src="/sony-wh-1000xm5-headphones-product-photo.jpg"
              alt="Sony WH-1000XM5 Headphones"
              className="object-cover w-full h-full"
            />
            <div className="absolute top-3 right-3">
              <Badge className="bg-primary text-primary-foreground font-semibold shadow-lg gap-1.5 px-3 py-1.5">
                <ShieldCheck className="h-3.5 w-3.5" />
                92% Trust Score
              </Badge>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div>
              <h3 className="font-bold text-lg mb-1">Sony WH-1000XM5 Headphones</h3>
              <p className="text-sm text-muted-foreground">Premium noise-cancelling wireless headphones</p>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-primary">$329.99</span>
              <span className="text-sm text-muted-foreground line-through">$399.99</span>
              <Badge variant="secondary" className="ml-auto gap-1">
                <TrendingUp className="h-3 w-3" />
                Best Deal
              </Badge>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm font-medium">4.8</span>
              <span className="text-sm text-muted-foreground">(2,847 reviews)</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0">
          <Button className="w-full" size="lg">
            View Best Deal
          </Button>
        </CardFooter>
      </Card>

      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <h4 className="font-bold text-lg mb-4">Similar Products</h4>
          <div className="space-y-3">
            {similarProducts.map((product) => (
              <div
                key={product.id}
                className="flex gap-3 p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-accent/50 transition-all cursor-pointer"
              >
                <div className="relative w-20 h-20 flex-shrink-0 bg-muted rounded-md overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="font-semibold text-sm mb-1 truncate">{product.name}</h5>
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <span className="text-xs font-medium">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews.toLocaleString()})</span>
                  </div>
                  <p className="font-bold text-primary">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
