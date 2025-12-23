import { Star, Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

const similarProducts = [
  {
    id: 1,
    name: "Bose QuietComfort 45",
    price: 329.00,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=300&h=300",
    features: ["Noise Cancelling", "24h Battery"]
  },
  {
    id: 2,
    name: "Sennheiser Momentum 4",
    price: 349.95,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=300&h=300",
    features: ["60h Battery", "Smart Pause"]
  },
  {
    id: 3,
    name: "Apple AirPods Max",
    price: 549.00,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?auto=format&fit=crop&q=80&w=300&h=300",
    features: ["Spatial Audio", "H1 Chip"]
  }
]

const betterValuePick = {
  id: 4,
  name: "Soundcore Space Q45",
  price: 149.99,
  rating: 4.5,
  image: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?auto=format&fit=crop&q=80&w=300&h=300",
  features: ["LDAC Hi-Res Audio", "50h Battery", "98% Noise Reduction"],
  savings: "$200+"
}

interface SimilarProductsProps {
  onCompareToggle?: (product: any) => void
  selectedIds?: string[]
}

export function SimilarProducts({ onCompareToggle, selectedIds = [] }: SimilarProductsProps) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Similar Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {similarProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="aspect-square bg-muted relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-4 space-y-3">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-sm line-clamp-2">{product.name}</h4>
                  <div className="flex items-center text-yellow-500 text-xs font-medium">
                    <Star className="w-3 h-3 fill-current mr-1" />
                    {product.rating}
                  </div>
                </div>
                <div className="text-lg font-bold">${product.price}</div>
                <div className="flex flex-wrap gap-1">
                  {product.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-[10px] px-1.5 h-5">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center space-x-2 pt-1">
                  <Checkbox
                    id={`compare-similar-${product.id}`}
                    checked={selectedIds.includes(String(product.id))}
                    onCheckedChange={() => onCompareToggle?.({ ...product, id: String(product.id) })}
                  />
                  <label
                    htmlFor={`compare-similar-${product.id}`}
                    className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Add to Compare
                  </label>
                </div>

                <Button className="w-full h-8 text-xs" variant="outline">View Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Badge className="bg-emerald-600 hover:bg-emerald-700">Better Value Pick</Badge>
          <span className="text-sm text-emerald-700 dark:text-emerald-400 font-medium">
            Save {betterValuePick.savings} with similar specs
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/3 aspect-video md:aspect-square bg-white rounded-lg overflow-hidden border border-emerald-100">
             <img
              src={betterValuePick.image}
              alt={betterValuePick.name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1 space-y-3">
            <h3 className="text-2xl font-bold">{betterValuePick.name}</h3>
            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
              ${betterValuePick.price}
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Why we recommend it:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {betterValuePick.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="h-5 w-5 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Button className="w-full sm:w-auto mt-2 bg-emerald-600 hover:bg-emerald-700 text-white">
              View Deal
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
