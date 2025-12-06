import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Camera } from "lucide-react"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <Camera className="h-5 w-5" />
            <span className="text-balance">SmartGlove</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#technology" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Technology
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          <Button size="sm" className="font-medium">
            Request Demo
          </Button>
        </div>
      </div>
    </nav>
  )
}
