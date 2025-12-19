import { Navigation } from "@/components/navigation"
import { HeroSearch } from "@/components/hero-search"
import { TrendingSection } from "@/components/trending-section"
import { RecommendedSection } from "@/components/recommended-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSearch />
        <TrendingSection />
        <RecommendedSection />
      </main>
      <Footer />
    </div>
  )
}
