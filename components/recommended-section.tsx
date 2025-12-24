import { Star, Heart } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const recommendations = [
  {
    id: 1,
    name: "Bamboo Cutlery Set",
    brand: "EcoLiving",
    price: 24.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1595348020949-87cdfbb44174?auto=format&fit=crop&q=80&w=400&h=400",
    tags: ["Eco-Friendly", "Bestseller"]
  },
  {
    id: 2,
    name: "Solar Power Bank",
    brand: "SunCharge",
    price: 45.00,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=400&h=400",
    tags: ["Tech", "Solar"]
  },
  {
    id: 3,
    name: "Recycled Backpack",
    brand: "GreenTravel",
    price: 89.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=400&h=400",
    tags: ["Recycled", "Travel"]
  },
  {
    id: 4,
    name: "Organic Cotton Tee",
    brand: "PureWear",
    price: 29.50,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400&h=400",
    tags: ["Organic", "Fashion"]
  },
]

export function RecommendedSection() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-bold mb-8">Common Recommendations</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendations.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-border/60 hover:border-primary/50 transition-colors">
              <div className="aspect-square bg-muted relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute top-3 right-3 h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white text-muted-foreground hover:text-red-500"
                >
                  <Heart className="h-4 w-4" />
                </Button>
                <div className="absolute bottom-3 left-3 flex gap-1">
                   {product.tags.map(tag => (
                     <Badge key={tag} variant="secondary" className="bg-white/90 backdrop-blur-sm text-xs">{tag}</Badge>
                   ))}
                </div>
              </div>

              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-1">
                  <div className="text-sm text-muted-foreground">{product.brand}</div>
                  <div className="flex items-center text-xs font-medium">
                    <Star className="h-3 w-3 text-yellow-500 fill-current mr-1" />
                    {product.rating}
                  </div>
                </div>
                <h3 className="font-semibold text-lg line-clamp-1 mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="text-xl font-bold">
                  ${product.price}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
