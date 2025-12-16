"use client"

import { useState } from "react"
import { Search, Upload, Camera, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function HeroSearch() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="relative py-20 sm:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container max-w-6xl">
        <div className="text-center mb-8 space-y-4 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium mb-2">
            <Sparkles className="h-3.5 w-3.5" />
            AI-Powered Discovery
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            Scan it. Verify it. Buy it.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl text-pretty">
            The AI-powered shopping assistant that helps you find authentic products at the best prices.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3">
          {/* Main Search Bar */}
          <div className="relative flex items-center gap-2 bg-card rounded-xl border border-border shadow-lg p-2">
            <div className="flex-1 flex items-center gap-2 px-2">
              <Search className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              <Input
                type="text"
                placeholder="Search for any product or paste a link..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
              />
            </div>
            <Button size="lg" className="gap-2 px-6">
              <Search className="h-4 w-4" />
              Search
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-2">
            <button className="group relative flex items-center justify-center gap-3 p-5 rounded-xl border-2 border-dashed border-border hover:border-primary hover:bg-primary/5 transition-all">
              <Upload className="h-5 w-5 text-primary" />
              <div className="text-center sm:text-left">
                <p className="font-medium text-sm text-foreground">Upload Image</p>
                <p className="text-xs text-muted-foreground">Drag & drop or click</p>
              </div>
              <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" />
            </button>

            <button className="group flex items-center justify-center gap-3 p-5 rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all">
              <Camera className="h-5 w-5 text-primary" />
              <div className="text-center sm:text-left">
                <p className="font-medium text-sm text-foreground">Camera Scan</p>
                <p className="text-xs text-muted-foreground">Take a photo</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
