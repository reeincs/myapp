import { Link } from "react-router"
import { Boxes } from "lucide-react"
import { User } from 'lucide-react'
import { NavLink } from "react-router"

function linkClass( {isActive} ) {
    return isActive ? "border-b-2 border-blue-600 p-2 mx-2" : "text-blue-500 hover:text-gray-600 p-2 mx-2"
}

function Header() {
    return (
        <header className="bg-gray-800 text-gray-400 py-6 text-center text-sm">

            <h1 className="p-6 font-montserrat">MyApp
                <Boxes className="inline fill-gray-800 stroke-gray-500 stroke-2 mx-2"/>
            </h1>

            <NavLink to="/" className={linkClass}>Inicio</NavLink>
            <NavLink to="/sobre" className={linkClass}>Sobre</NavLink>
            <NavLink to="/contato" className={linkClass}>Contato</NavLink>
            <NavLink to="/register" className={linkClass}><User className="inline  fill-blue-800 stroke-gray-500 stroke-2 "/></NavLink>

        </header>
    )
}

export default Header