import { Link } from "react-router"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-8x1 font-bold">404</h1>
            <p className="text-2x1 text-shadow-gray-800">Página não encontrada...</p>

            <Link to="/" className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Voltar para o início
            </Link>
        </div>
    )
}