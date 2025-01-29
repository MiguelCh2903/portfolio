import Link from "next/link";

interface NavItem {
    label: string;
    href: string;
}

const NavItems: NavItem[] = [
    {label: 'Inicio', href: '#'},
    {label: 'Sobre mi', href: '#about'},
    {label: 'Proyectos', href: '#projects'},
    {label: 'Contacto', href: '#contact'},
]

const NavBar = () => {
    return (
        <nav className="hidden md:block space-x-8">
            {NavItems.map((item) => (
                <Link key={item.href} href={item.href}
                      className="text-gray-800 text-lg hover:text-indigo-600 hover:font-extrabold hover:px-2 font-medium transition-colors duration-100">
                    {item.label}
                </Link>
            ))}
        </nav>
    )
}

export default NavBar;