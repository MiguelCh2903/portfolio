import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header/>
            <Hero/>
            <Skills/>
            <Projects/>
        </div>
    );
}
