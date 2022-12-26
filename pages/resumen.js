import {Layout} from "../layout";
import {useQuiosco} from "../hooks";
import {ResumenProducto} from "../components";

export default function Resumen() {
    const {pedido = []} = useQuiosco();

    return (
        <Layout
            page="Resumen"
        >
            <h1 className="text-5xl font-black animate__animated animate__fadeIn">
                Resumen
            </h1>
            <p className="text-2xl my-5 animate__animated animate__fadeIn">
                Revisa tu Pedido
            </p>
            {
                pedido?.length === 0 ? (
                    <p>No hay elementos en tu pedido</p>
                ) : (
                    pedido.map(producto => (
                        <ResumenProducto
                            key={producto?.id}
                            producto={producto}
                        />
                    ))
                )
            }
        </Layout>
    )
}
