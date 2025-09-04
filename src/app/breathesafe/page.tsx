import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function BreatheSafe() {

  const dashboardPics = [
    "/db-1.webp", "/db-2.webp"
  ]

  const tablePics = [
    "/tb-1.webp", "/tb-2.webp", "/tb-3.webp"
  ]

  return (
    <div className="w-full bg-background px-8 md:px-20 2lg:px-40">
      <div className="max-w-4xl py-8">
        <h1 className="text-4xl font-bold text-foreground mb-2 text-balance">BreatheSafe+</h1>
        <p className="text-lg text-muted-foreground">
          An IoT-base Air Quality Monitoring And Filtration Device For Particulate-Induced Respiratory Disease Prevention In Vulnerable Workforces
        </p>
      </div>

      <Card className="border-accent bg-accent/50">
        <CardContent className="px-2 md:px-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-card-foreground mb-2">Why This Project Isn&apos;t Live</h3>
              <p className="text-muted-foreground leading-relaxed text-justify text-sm">
                This project was developed as part of my Undergraduate Thesis, which focused on particulate matter exposure.
                The live site is hosted on Render and can be accessed here:&nbsp;
                <span className="font-bold">
                  <a href="https://breathesafe.onrender.com" target="_blank" rel="noopener noreferrer">
                    https://breathesafe.onrender.com
                  </a>
                </span>
                <br /><br />
                During development, my team and I opted to use Render&apos;s free database hosting service due to budget limitations as students. However,
                this free plan only lasted for 30 days, which means the database is no longer active, and logging into the system is currently not possible
                unless the database is re-hosted.
                <br /><br />
                Additionally, because the project involved real participants, the login credentials were kept private to protect sensitive data. For a deeper
                understanding of the study and methodology, you may refer to the full paper&nbsp;
                <span className="font-bold">
                  <a href="https://drive.google.com/file/d/1qyERUM0rLGo9gVbgxH3XI6fobogCkcvf/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    here.
                  </a>
                </span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold text-foreground my-6">Project Overview</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            A comprehensive dashboard built using NodeJs, React, TailwindCSS, and DaisyUI for the frontend and
            Express and PostgreSQL for the backend. It features&nbsp;
            <span className="font-semibold">real-time data readings from the accompanying air monitoring device</span>,&nbsp;
            <span className="font-semibold">automatic conversion from concentration to AQI</span>, and&nbsp;
            <span className="font-semibold">helpful graphics to help users determine the air quality level</span>.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Key Features</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Real-time sensor data monitoring</li>
                <li>• Automatic AQI conversion from raw values</li>
                <li>• Interactive charts for live and historical trends</li>
                <li>• Color-coded AQI indicators for quick status checks</li>
                <li>• Scalable for more sensors and user roles</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-3">Tech Stack</h4>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary">PostgreSQL</Badge>
            <Badge variant="secondary">Express</Badge>
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">NodeJS</Badge>
            <Badge variant="secondary">JavaScript</Badge>
            <Badge variant="secondary">Tailwind CSS</Badge>
            <Badge variant="secondary">DaisyUI</Badge>
            <Badge variant="secondary">Vercel</Badge>
          </div>

          <div className="space-y-3">
            <div>
              <span className="text-sm font-medium text-foreground">Role:</span>
              <span className="text-sm text-muted-foreground ml-2">Full-stack Developer</span>
            </div>
            <div>
              <span className="text-sm font-medium text-foreground">Team Size:</span>
              <span className="text-sm text-muted-foreground ml-2">Group of 5</span>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-foreground my-6">Screenshots</h2>
      <div className="grid gap-8">
        <div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <img
                  src="/breathesafe-main.webp"
                  alt="Main Login Page"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-medium text-card-foreground">Login Page</h4>
                <p className="text-sm text-muted-foreground">
                  Initial login page where workers and admin can enter to see their data
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <img
                  src="/acc.webp"
                  alt="Account Management Page"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-medium text-card-foreground">Account Management</h4>
                <p className="text-sm text-muted-foreground">
                  Allows the admin to manage their employee&apos;s personal data as well as see the latest sensor readings.
                  Admins can also toggle which employee&apos;s data they wish to see.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
              <Carousel className="aspect-video bg-muted flex items-center justify-center">
                <CarouselContent>{
                  dashboardPics.map((pic, index) => (
                    <CarouselItem key={index} className="group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={pic}
                        alt="Main Dashboard"
                        className="w-full h-full object-cover "
                      />
                    </CarouselItem>
                  ))
                }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <CardContent className="p-4">
                <h4 className="font-medium text-card-foreground">Main Dashboard</h4>
                <p className="text-sm text-muted-foreground">
                  Main dashboard page where users can see their real-time and historical sensor readings. <br />
                  Admins can also see their employee&apos;s readings here.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
              <Carousel className="aspect-video bg-muted flex items-center justify-center">
                <CarouselContent>{
                  tablePics.map((pic, index) => (
                    <CarouselItem key={index} className="group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={pic}
                        alt="Data Table"
                        className="w-full h-full object-cover"
                      />
                    </CarouselItem>
                  ))
                }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <CardContent className="p-4">
                <h4 className="font-medium text-card-foreground">Data Table</h4>
                <p className="text-sm text-muted-foreground">
                  Admins can view the numerical value for both sensor readings and converted AQI values. <br />
                  Admins can also choose to view the 5-minute average readings.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}