import {useCallback, useEffect} from "react";
import {useQuiosco} from "../hooks";
import {Layout} from "../layout";
import {formatearDinero} from "../helpers";

export default function Total() {
    const {pedido = [], nombre, setNombre, colocarOrden, total} = useQuiosco();

    const comprobarPedido = useCallback(() => {
        return pedido.length === 0 || nombre === '' || nombre.length < 3;
    }, [nombre, pedido])

    useEffect(() => {
        comprobarPedido();
    }, [comprobarPedido])

    return (
        <Layout
            page="Resumen"
        >
            <h1 className="text-5xl font-black animate__animated animate__fadeIn">
                Total y Confirmar Pedido
            </h1>
            <p className="text-2xl my-5 animate__animated animate__fadeIn">
                Confirma tu pedido a continuación
            </p>
            <form
                onSubmit={colocarOrden}
            >
                <div>
                    <label
                        htmlFor="nombre"
                        className="block uppercase font-bold text-slate-800 text-lg"
                    >Nombre</label>
                    <input
                        id="nombre"
                        type="text"
                        className="bg-gray-100 w-full lg:w-1/3 mt-2 px-3 py-2 rounded-md shadow focus:outline-none
                        focus:border-amber-400 focus:ring-1 focus:ring-amber-400 focus:transition"
                        placeholder="Tu nombre"
                        value={nombre}
                        onChange={(event) => setNombre(event.target.value)}
                    />
                </div>
                <div className="mt-5">
                    <p className="text-2xl">
                        Total a Pagar: {""}
                        <span className="font-bold">{formatearDinero(total)}</span>
                    </p>
                </div>
                <div className="mt-5">
                    <button
                        type="submit"
                        className={`${comprobarPedido() ? "bg-indigo-300 hover:bg-indigo-300 transition" : "bg-indigo-600"} 
                        hover:bg-indigo-700 transition w-full lg:w-auto rounded-md font-bold text-white px-3 py-2 
                        uppercase shadow hover:shadow-md`}
                        disabled={comprobarPedido()}
                    >Confirmar Pedido</button>
                </div>
            </form>
        </Layout>
    )
}
