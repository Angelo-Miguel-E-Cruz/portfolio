import Link from "next/link"
import { ReactNode } from "react"

interface LinkProps {
  navTo: string
  children: ReactNode
}

export const NavLink = ({ navTo, children }: LinkProps) => {
  return (
    <Link href={navTo} className="text-muted-foreground hover:text-foreground transition-colors">
      {children}
    </Link>
  )
}
