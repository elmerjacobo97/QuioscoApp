import useSWR from 'swr'
import AdminLayout from "../layout/AdminLayout";
import axios from "axios";
import {Orden} from "../components";

export default function Admin() {
    const fetcher = () => axios.get('/api/orders').then(datos => datos.data).catch(error => console.log(error));
    const { data: ordenes = [], error, isLoading } = useSWR('/api/orders', fetcher, {
        refreshInterval: 100
    });

    return (
        <AdminLayout page="Admin">
            <h1 className="text-5xl font-black animate__animated animate__fadeIn">
                Panel de Administración
            </h1>
            <p className="text-2xl my-5 animate__animated animate__fadeIn">
                Administra tus ordenes
            </p>
            {
                ordenes && ordenes.length ? ordenes.map(orden =>(
                    <Orden
                        key={orden.id}
                        orden={orden}
                    />
                )) : <p className="text-xl">No hay ordenes pendientes</p>
            }
        </AdminLayout>
    )
}
