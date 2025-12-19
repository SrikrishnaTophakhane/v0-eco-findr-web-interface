import { Navigation } from "@/components/navigation"
import { SearchResults } from "@/components/search-results"
import { Footer } from "@/components/footer"

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = (await searchParams).q || ""
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <SearchResults query={query} />
      </main>
      <Footer />
    </div>
  )
}
