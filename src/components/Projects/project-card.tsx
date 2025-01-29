import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";

interface ProjectCardProps {
    title: string
    description: string
    image: string
}

export function ProjectCard({ title, description, image }: ProjectCardProps) {
    return (
        <Dialog>
            <DialogTrigger>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Image src={image || "/placeholder.svg"} alt={title} width={300} height={200} className="w-full h-48 object-cover rounded-md mb-4" />
                        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
                    </CardContent>
                </Card>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}