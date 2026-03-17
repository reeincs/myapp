import { ChevronRight } from 'lucide-react';

export default function Login() {
    return (
        <>
        <a href='/'>
        <ChevronRight className="inline bg- border rounded-3xl bg-linear-to-r from-gray-600 to-blue-800 hover:bg-linear-to-r hover:from-gray-700 hover:to-blue-900"/>
        </a>
 <h1 className="text-black text-2xl font-bold mb-6 text-center p-2 font-montserrat">Login</h1>

        <form className="flex flex-col gap-4">
            <input type="email" placeholder="E-mail" className="text-white bg-gray-900 border rounded-2xl px-3 py-4"/>

            <input type="password" placeholder="Senha" className="text-white bg-gray-900 border rounded-2xl px-3 py-4"/>

            <a href="/register" className="text-sm text-blue-400 hover:underline hover:text-blue-500">
            Não tem uma conta? Cadastre-se
            </a>
            
            <button type="submit" className="bg-blue-900 hover:bg-blue-950 text-white rounded-2xl p-3 cursor-pointer">Login</button>

        </form>
        </>
    )
}