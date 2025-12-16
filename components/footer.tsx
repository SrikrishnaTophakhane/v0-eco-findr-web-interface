import { Cpu } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2025 EcoFindr. All rights reserved.</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Cpu className="h-4 w-4 text-primary" />
            <span>Powered by Serverless AI</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
