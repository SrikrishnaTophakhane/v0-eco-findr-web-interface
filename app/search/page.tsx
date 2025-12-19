import { Navigation } from "@/components/navigation"
import { SearchResults } from "@/components/search-results"
import { Footer } from "@/components/footer"

export default function SearchPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <SearchResults />
      </main>
      <Footer />
    </div>
  )
}
