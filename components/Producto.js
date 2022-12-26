import Image from "next/image";
import {formatearDinero} from "../helpers";
import {useQuiosco} from "../hooks";

export const Producto = ({product}) => {
    const {nombre, imagen, precio} = product;
    const {handleSetProducto, handleChangeModal} = useQuiosco();


    return (
        <div className="border p-3">
            <Image
                className="animate__animated animate__fadeIn"
                src={`/assets/img/${imagen}.jpg`}
                width={400}
                height={500}
                alt={`Imagen platillo ${nombre}`}
            />
            <div className="p-5">
                <h3 className="text-xl font-bold">{nombre}</h3>
                <p className="mt-5 font-black text-4xl text-amber-500">
                    {formatearDinero(precio)}
                </p>
                <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white w-full mt-3 px-3 py-2 uppercase
                    font-bold transition"
                    onClick={() => {
                        handleChangeModal();
                        handleSetProducto(product);
                    }}
                >Agregar</button>
            </div>
        </div>
    );
};
