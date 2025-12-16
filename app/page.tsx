import { Navigation } from "@/components/navigation"
import { HeroSearch } from "@/components/hero-search"
import { SearchResults } from "@/components/search-results"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSearch />
        <SearchResults />
      </main>
      <Footer />
    </div>
  )
}
