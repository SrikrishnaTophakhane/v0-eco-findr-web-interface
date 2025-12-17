"use client"

import { useState } from "react"
import { Search, Upload, Camera, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function HeroSearch() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="relative pt-20 pb-10 sm:pt-32 sm:pb-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-6xl">
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
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-base text-center"
              />
              <div className="flex items-center gap-1 border-l pl-2 border-border/50">
                <div className="relative">
                  <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-primary" title="Upload Image">
                    <Upload className="h-4 w-4" />
                  </Button>
                  <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" title="Upload Image" />
                </div>
                <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-primary" title="Camera Scan">
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Button size="lg" className="gap-2 px-6">
              <Search className="h-4 w-4" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
