import { ReactNode } from "react"
import { RiNextjsFill, RiSupabaseFill, RiTailwindCssFill, RiVercelFill, RiNodejsFill, RiReactjsFill, RiHtml5Fill, RiGithubFill, RiJavascriptFill } from "react-icons/ri"
import { SiTypescript, SiCss3, SiExpress, SiPostgresql, SiMysql, SiClerk, SiShadcnui } from "react-icons/si"

interface StackInterface {
  name: string
  icon: ReactNode
}

const mainIconClass = "h-20 w-20"
const moreIconClass = "h-15 w-15"

const mainStack: StackInterface[] = [
  { name: 'NextJs', icon: <RiNextjsFill className={mainIconClass} /> },
  { name: 'Supabase', icon: <RiSupabaseFill className={mainIconClass} /> },
  { name: 'TypeScript', icon: <SiTypescript className={mainIconClass} /> },
  { name: 'TailwindCSS', icon: <RiTailwindCssFill className={mainIconClass} /> },
  { name: 'Vercel', icon: <RiVercelFill className={mainIconClass} /> },
]

const moreTech: StackInterface[] = [
  { name: 'GitHub', icon: <RiGithubFill className={moreIconClass} /> },
  { name: 'React', icon: <RiReactjsFill className={moreIconClass} /> },
  { name: 'NodeJs', icon: <RiNodejsFill className={moreIconClass} /> },
  { name: 'Express', icon: <SiExpress className={moreIconClass} /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className={moreIconClass} /> },
  { name: 'MySQL', icon: <SiMysql className={moreIconClass} /> },
  { name: 'Clerk', icon: <SiClerk className={moreIconClass} /> },
  { name: 'ShadCN', icon: <SiShadcnui className={moreIconClass} /> },
  { name: 'HTML', icon: <RiHtml5Fill className={moreIconClass} /> },
  { name: 'CSS', icon: <SiCss3 className={moreIconClass} /> },
  { name: 'JavaScript', icon: <RiJavascriptFill className={moreIconClass} /> },
]

export function Technologies() {
  return (
    <section className="pb-20 px-4 sm:px-6 lg:px-8" id="skills">
      <h1 className="section-header">
        MAIN STACK
      </h1>
      <div className=" flex flex-wrap gap-3 justify-between mb-8">
        {mainStack.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center gap-3 hover:scale-110 ease-in-out transition-transform duration-100">
            {tech.icon}
            <h1>{tech.name}</h1>
          </div>
        ))}
      </div>

      <h1 className="section-header">
        OTHER TECHNOLOGIES I USE
      </h1>
      <div className="flex flex-wrap gap-3 justify-between">
        {moreTech.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center gap-3 hover:scale-110 ease-in-out transition-transform duration-100">
            {tech.icon}
            <h1>{tech.name}</h1>
          </div>
        ))}
      </div>

    </section>
  )
}
