import {useRouter} from "next/router";

const pasos = [
    {paso: 1, nombre: 'Menú', url: '/'},
    {paso: 2, nombre: 'Resumen', url: '/resumen'},
    {paso: 3, nombre: 'Datos y Total', url: '/total'},
]

export const Pasos = () => {
    const {push, pathname} = useRouter();

    const calcularProgreso = () => {
        // return (paso / 3) * 100;
        let valor;
        if (pathname === '/') {
            valor = 5;
        } else if (pathname === '/resumen') {
            valor = 50;
        } else {
            valor = 100;
        }
        return valor;
    }

    return (
        <>
            <div className="flex justify-between">
                {pasos.map(({paso, nombre, url}) => (
                    <button
                        key={paso}
                        className="text-xl font-bold"
                        onClick={() => {
                            push(url);
                        }}
                    >
                        {nombre}
                    </button>
                ))}
            </div>
            <div className="bg-gray-100 my-5">
                <div
                    className="rounded-full bg-amber-400 text-xs leading-none h-2 text-center text-white"
                    style={{
                        width: `${calcularProgreso()}%`
                    }}
                ></div>
            </div>
        </>
    );
};
