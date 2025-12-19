"use client"

import { useState } from "react"
import { Scale, X, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ComparisonTool() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])

  // Placeholder mock function
  const addToCompare = (id: string) => {
    if (selectedProducts.includes(id)) return
    if (selectedProducts.length >= 5) return
    setSelectedProducts([...selectedProducts, id])
  }

  const removeFromCompare = (id: string) => {
    setSelectedProducts(selectedProducts.filter(p => p !== id))
  }

  // Determine if the bar should be visible (mock logic: always visible for now if we assume some interaction, but since I can't easily click, I'll default to showing a placeholder state)
  // Or better, I'll just render the container.

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4 z-50 pointer-events-none">
      <div className="bg-background/80 backdrop-blur-lg border shadow-xl rounded-2xl p-4 pointer-events-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground whitespace-nowrap">
            <Scale className="h-4 w-4" />
            Compare
          </div>

          {/* Placeholders for slots */}
          {[...Array(3)].map((_, i) => (
             <div
               key={i}
               className="h-12 w-12 rounded-lg bg-muted border-2 border-dashed border-muted-foreground/30 flex items-center justify-center shrink-0"
             >
               <Plus className="h-4 w-4 text-muted-foreground/50" />
             </div>
          ))}
        </div>

        <div className="flex items-center gap-2">
           <Button disabled size="sm">Compare (0/5)</Button>
        </div>
      </div>
    </div>
  )
}
