import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { NavLink } from "./navlink"
import { ArrowRight } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "BreatheSafe+",
      description: "An IoT-based Air Quality Monitoring and Filtration System which was my Undergraduate Thesis",
      demo: "breathesafe",
    },
    {
      title: "CalenShare",
      description: "A shared calendar web application that helps groups find common available dates",
      demo: "https://sharedcalendar-six.vercel.app/",
    }
  ]

  return (
    <section className="pb-10 px-4 sm:px-6 lg:px-8" id="Projects">
      <div className="mb-10">
        <h1 className="section-header">
          <a href="https://scouts.gov.ph/" target="_blank" rel="noopener noreferrer">
            LAST POSITION: <span className="font-extrabold text-foreground ">IT Intern</span> at Boy Scouts of the Philippines
          </a>
        </h1>
      </div>
      <h1 className="section-header">
        RECENT WORK
      </h1>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <Card className="w-full hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer" key={project.title}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>
                {project.description}
              </CardDescription>
              <CardAction>
                <NavLink navTo={project.demo}>
                  <ArrowRight />
                </NavLink>
              </CardAction>
            </CardHeader>
          </Card>
        ))}
      </div>

    </section>
  )
}
