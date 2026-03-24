import { useParams } from "react-router"

export default function Product () {
    const { project, username } = useParams()

    return (
        <section className="p-6">
            <h1 className="text-2x1 font-bold mb-2">Repositorio:</h1>
            <p>Project recebido da URL: {project} {username}</p>
        </section>
    )
}