import Image from "next/image";
import {useQuiosco} from "../hooks";

export const Category = ({category}) => {
    const {categoryActual, handleClickCategory} = useQuiosco();
    const {icono, nombre, id} = category;

    return (
        <div
            className={`${categoryActual?.id === id ? 'bg-amber-400' : null} 
            flex items-center gap-4 border p-4 hover:bg-amber-400 `}
        >
            <Image
                src={`/assets/img/icono_${icono}.svg`}
                width={70}
                height={70}
                priority
                alt={`Imagen ${nombre}`}
            />
            <button
                type="button"
                className="text-xl font-bold"
                onClick={() => handleClickCategory(id)}
            >
                {nombre}
            </button>
        </div>
    );
};
