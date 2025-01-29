import { Check } from 'lucide-react'

interface SkillListProps {
    title: string
    items: string[]
}

export function SkillList({ title, items }: SkillListProps) {
    return (
        <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <ul className="grid grid-cols-2 gap-2">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

