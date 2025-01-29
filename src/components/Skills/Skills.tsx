import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Cog, Cpu, Code, Users, LucideIcon} from 'lucide-react';
import {SkillList} from "@/components/Skills/skill-list";

type SkillCategory = {
    title: string;
    icon: LucideIcon;
    sections: {
        title: string;
        items: string[];
    }[];
};

const SKILLS_DATA: SkillCategory[] = [
    {
        title: "Mecánica",
        icon: Cog,
        sections: [
            {
                title: "Aptitudes",
                items: ["Diseño Mecánico", "Análisis estructural y mecánico", "Impresión 3D", "CNC", "Prototipado"]
            },
            {title: "Software", items: ["AutoCAD", "SolidWorks", "Fusion 360", "ANSYS", "MasterCam"]}
        ]
    },
    {
        title: "Electrónica",
        icon: Cpu,
        sections: [
            {
                title: "Aptitudes",
                items: ["Diseño de Circuitos Electrónicos", "PCB Layout", "MCU / MPU (Arduino, Raspberry, STM32)", "Integración de sensores", "Electrónica de Potencia"]
            },
            {title: "Software", items: ["Altium Designer", "KiCad", "EasyEda", "Arduino IDE", "CubeProgrammer"]}
        ]
    },
    {
        title: "Software",
        icon: Code,
        sections: [
            {
                title: "Aptitudes",
                items: ["Sistemas Embebidos", "Sistemas de Control", "Procesamiento de señales", "Machine Learning", "IoT", "Diseño Web", "Robótica", "Agentes Conversacionales"]
            },
            {
                title: "Lenguajes de Programación",
                items: ["C/C++", "Python", "HTML / CSS", "Javascript / Typescript", "MATLAB", "Linux", "Docker", "Git / Github"]
            }
        ]
    },
    {
        title: "Habilidades Blandas",
        icon: Users,
        sections: [
            {
                title: "Aptitudes",
                items: ["Gestión de Proyectos", "Trabajo en equipo", "Resolución de problemas", "Liderazgo", "Comunicación efectiva", "Documentación técnica", "Metodología de investigación", "Gestión de tiempo", "Adaptabilidad"]
            }
        ]
    }
];

const SkillCard = ({category}: { category: SkillCategory }) => {
    const Icon = category.icon;

    return (
        <Card>
            <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-indigo-600 text-xl gap-1">
                    <Icon className="mr-2"/>
                    {category.title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                {category.sections.map((section, index) => (
                    <SkillList
                        key={`${category.title}-${section.title}-${index}`}
                        title={section.title}
                        items={section.items}
                    />
                ))}
            </CardContent>
        </Card>
    );
};

const Skills = () => {
    return (
        <div className="container mx-auto py-12">
            <h1 className="text-4xl font-bold mb-8 text-center text-indigo-600">
                CONOCIMIENTOS
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SKILLS_DATA.map((category) => (
                    <SkillCard
                        key={category.title}
                        category={category}
                    />
                ))}
            </div>
        </div>
    );
};

export default Skills;