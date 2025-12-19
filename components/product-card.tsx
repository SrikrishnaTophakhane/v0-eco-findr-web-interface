import Link from "next/link"
import { ShieldCheck, Star, TrendingUp } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export function ProductCard() {
  return (
    <div className="space-y-6">
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <Link href="/product/sony-xm5" className="block relative aspect-square bg-muted p-8">
            <img
              src="/sony-wh-1000xm5-headphones-product-photo.jpg"
              alt="Sony WH-1000XM5 Headphones"
              className="object-contain w-full h-full hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-3 right-3">
              <Badge className="bg-primary text-primary-foreground font-semibold shadow-lg gap-1.5 px-3 py-1.5">
                <ShieldCheck className="h-3.5 w-3.5" />
                92% Trust Score
              </Badge>
            </div>
          </Link>

          <div className="p-6 space-y-4">
            <div>
              <Link href="/product/sony-xm5" className="hover:underline">
                <h3 className="font-bold text-lg mb-1">Sony WH-1000XM5 Headphones</h3>
              </Link>
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

            <div className="flex items-center space-x-2">
              <Checkbox id="compare-main" />
              <label
                htmlFor="compare-main"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Add to Compare
              </label>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0">
          <Button className="w-full" size="lg" asChild>
            <a href="https://www.amazon.com/dp/B09XS7JWHH" target="_blank" rel="noopener noreferrer">
              View Best Deal
            </a>
          </Button>
        </CardFooter>
      </Card>

    </div>
  )
}
