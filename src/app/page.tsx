import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Technologies } from "@/components/technologies"

export default function Portfolio() {
  return (
    <div className="w-full bg-background px-8 md:px-20 2lg:px-40">
      <Hero />
      <Projects />
      <Technologies />
    </div >
  )
}
