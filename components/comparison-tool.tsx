"use client"

import { useState } from "react"
import { Scale, X, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ComparisonToolProps {
  selectedProducts?: any[]
  onRemove?: (id: string) => void
}

export function ComparisonTool({ selectedProducts = [], onRemove }: ComparisonToolProps) {
  if (selectedProducts.length === 0) return null

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4 z-50 pointer-events-none">
      <div className="bg-background/80 backdrop-blur-lg border shadow-xl rounded-2xl p-4 pointer-events-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground whitespace-nowrap">
            <Scale className="h-4 w-4" />
            Compare
          </div>

          {selectedProducts.map((product) => (
            <div key={product.id} className="relative group shrink-0">
              <div className="h-12 w-12 rounded-lg overflow-hidden border border-border bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={() => onRemove?.(product.id)}
                className="absolute -top-1.5 -right-1.5 h-4 w-4 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="h-2.5 w-2.5" />
              </button>
            </div>
          ))}

          {/* Placeholders for remaining slots */}
          {[...Array(Math.max(0, 5 - selectedProducts.length))].map((_, i) => (
             <div
               key={`placeholder-${i}`}
               className="h-12 w-12 rounded-lg bg-muted border-2 border-dashed border-muted-foreground/30 flex items-center justify-center shrink-0"
             >
               <Plus className="h-4 w-4 text-muted-foreground/50" />
             </div>
          ))}
        </div>

        <div className="flex items-center gap-2">
           <Button size="sm">Compare ({selectedProducts.length}/5)</Button>
        </div>
      </div>
    </div>
  )
}
