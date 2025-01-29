import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import NavBar from "@/components/NavBar";

const Header = () => {
    return (
        <header className="fixed w-full h-16 flex justify-between items-center lg:px-6 xl:px-10 2xl:px-14 bg-white bg-opacity-70">
            <div className="flex items-center gap-6">
                <Avatar className="w-12">
                    <AvatarImage src="/logo.png" alt={"logo"}/>
                    <AvatarFallback>MC</AvatarFallback>
                </Avatar>
                <h1 className="text-3xl font-extrabold italic text-gray-800">MIGUEL CHUMACERO</h1>
            </div>
            <NavBar/>
        </header>
    )
}

export default Header;