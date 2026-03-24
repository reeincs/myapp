import { useParams } from "react-router"

export default function Product () {
    const { slug } = useParams()

    return (
        <section className="p-6">
            <h1 className="text-2x1 font-bold mb-2">Produto:</h1>
            <p>Slug recebido da URL: {slug}</p>
        </section>
    )
}