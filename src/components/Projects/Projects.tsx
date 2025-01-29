import {ProjectCard} from "@/components/Projects/project-card";

const projects = [
    {
        id: 1,
        title: "Autonomous Robot",
        description: "Developed an autonomous robot capable of navigating complex environments using sensor fusion and machine learning algorithms.",
        image: "/placeholder.svg?height=200&width=300",
        images: [
            "/placeholder.svg?height=300&width=400",
            "/placeholder.svg?height=300&width=400",
            "/placeholder.svg?height=300&width=400",
            "/placeholder.svg?height=300&width=400"
        ],
        githubUrl: "https://github.com/yourusername/autonomous-robot"
    },
    {
        id: 2,
        title: "Smart Home IoT System",
        description: "Created a comprehensive IoT system for smart home automation, integrating various sensors and actuators with a user-friendly mobile app.",
        image: "/placeholder.svg?height=200&width=300",
        images: [
            "/placeholder.svg?height=300&width=400",
            "/placeholder.svg?height=300&width=400",
            "/placeholder.svg?height=300&width=400",
            "/placeholder.svg?height=300&width=400"
        ],
        githubUrl: "https://github.com/yourusername/smart-home-iot"
    },
    {
        id: 3,
        title: "3D-Printed Prosthetic Hand",
        description: "Designed and manufactured a low-cost, 3D-printed prosthetic hand with advanced control mechanisms for improved functionality.",
        image: "/placeholder.svg?height=200&width=300",
        images: [
            "/placeholder.svg?height=300&width=400",
            "/placeholder.svg?height=300&width=400",
            "/placeholder.svg?height=300&width=400",
            "/placeholder.svg?height=300&width=400"
        ],
        githubUrl: "https://github.com/yourusername/prosthetic-hand"
    },
    {
        id: 4,
        title: "Automated Manufacturing Line",
        description: "Implemented an automated manufacturing line using industrial robotics and PLC programming for increased efficiency and quality control.",
        image: "/placeholder.svg?height=200&width=300",
        images: [
            "/placeholder.svg?height=300&width=400",
            "/placeholder.svg?height=300&width=400",
            "/placeholder.svg?height=300&width=400",
            "/placeholder.svg?height=300&width=400"
        ],
        githubUrl: "https://github.com/yourusername/automated-manufacturing"
    }
]

export default function Projects() {
    return (
        <div className="container mx-auto py-12" id="projects">
            <h2 className="text-4xl font-bold mb-8 text-center text-indigo-600">PROYECTOS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                    />
                ))}
            </div>
        </div>
    )
}