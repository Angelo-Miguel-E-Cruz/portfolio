
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { NavLink } from "./navlink"
import { Badge } from "lucide-react"

export const Header = () => {
  return (
    <div className="flex h-16 items-center justify-between gap-1">
      <div className="font-mono text-sm shrink-0 md:text-lg font-semibold text-foreground">
        <Link href="/">{"<dev />"}</Link>
      </div>
      <nav className="hidden sm:flex gap-6">
        <NavLink navTo="#about" >About</NavLink>
        <NavLink navTo="#projects"  >Projects</NavLink>
        <NavLink navTo="#skills"  >Skills</NavLink>
      </nav>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <div className="flex items-center gap-2">
          <Badge className="w-2 h-2 p-0 rounded-full bg-green-500 ring-1 ring-green-500 ring-offset-2 ring-offset-background" />
          <span className="font-semibold text-sm md:text-md text-foreground"> Available for work</span>
        </div>
      </div>
    </div>
  )
}