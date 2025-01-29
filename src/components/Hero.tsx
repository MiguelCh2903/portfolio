import {ArrowRight} from 'lucide-react'

const Hero = () => {
    return (
        <div className="bg-white mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-4xl mt-16 font-extrabold text-indigo-600 sm:text-5xl md:text-6xl">
                    Estudiante de <span>Ingeniería Mecatrónica</span>
                </h2>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                    9no ciclo | Universidad Nacional de Ingeniería
                </p>
                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                    <div className="rounded-md shadow">
                        <a href="#contact"
                           className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                            Get in touch
                            <ArrowRight className="ml-2" size={20}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero