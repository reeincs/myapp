import { Link } from "react-router"

function Header() {
    return (
        <header className="bg-gray-800 text-gray-400 py-6 text-center text-sm">
            MyApp

            <Link to="/" className="text-gray-600 hover:text-blue-600 mx-4">Inicio</Link>
            <Link to="/sobre" className="text-gray-600 hover:text-blue-600 mx-4">Sobre</Link>
            <Link to="/contato" className="text-gray-600 hover:text-blue-600 mx-4">Contato</Link>
        </header>
    )
}

export default Header