import {Layout} from "../layout";
import {useQuiosco} from "../hooks";
import {Producto} from "../components";

export default function Home() {
    const {categoryActual} = useQuiosco();

    return (
        <Layout page={`Menú ${categoryActual?.nombre}`}>
            <h1 className="text-5xl font-black animate__animated animate__fadeIn">
                {categoryActual?.nombre}
            </h1>
            <p className="text-2xl my-5 animate__animated animate__fadeIn">
                Elige y personaliza tu pedido a continuación
            </p>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {
                    categoryActual?.productos?.map((product) => (
                        <Producto key={product.id} product={product} />
                    ))
                }
            </div>
        </Layout>
    )
}
