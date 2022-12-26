import {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {QuioscoContext} from "./QuioscoContext";
import {useRouter} from "next/router";

export const QuioscoProvider = ({children}) => {
    const [categories, setCategories] = useState([]);
    const [categoryActual, setCategoryActual] = useState({});
    const [producto, setProducto] = useState({});
    const [modal, setModal] = useState(false);
    const [pedido, setPedido] = useState([]);
    const [nombre, setNombre] = useState('');
    const [total, setTotal] = useState(0);

    const router = useRouter();

    const getCategories = async () => {
        const {data} = await axios.get('/api/categories');
        setCategories(data);
    }

    useEffect(() => {
        getCategories();
    }, [])

    useEffect(() => {
        setCategoryActual(categories[0])
    }, [categories])

    useEffect(() => {
        const newTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0);
        setTotal(newTotal);
    }, [pedido])

    const handleClickCategory = (id) => {
        const category = categories.filter(cat => cat.id === id);
        setCategoryActual(category[0]);
        router.push('/');
    }

    const handleSetProducto = (product) => {
        setProducto(product)
    }

    const handleChangeModal = () => {
        setModal(!modal);
    }

    const handleAddPedido = ({categoriaId, ...producto}) => {
        if (pedido.some(productoState => productoState.id === producto.id)) {
            // Si ya existe, actualizamos la cantidad
            const pedidoUpdated = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)
            setPedido(pedidoUpdated);
            toast.success('Guardado correctamente');
        } else {
            // Agregarlo al state, es nuevo
            setPedido([...pedido, producto]);
            toast.success('Agregar al Pedido');
        }
        setModal(false);
    }

    const handleEditCantidad = (id) => {
        const productoActualizar = pedido.filter(producto => producto.id === id);
        setProducto(productoActualizar[0]);
        setModal(!modal);
    }

    const handleEliminarProducto = (id) => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id);
        setPedido(pedidoActualizado);
        toast.success('Eliminado correctamente');
    }

    const colocarOrden = async (e) => {
        e.preventDefault();

        await axios.post('/api/orders', {
            pedido,
            nombre,
            total,
            fecha: Date.now().toString(),
        });

        setCategoryActual(categories[0]);
        setPedido([]);
        setNombre('');
        setTotal(0);

        toast.success('Pedido Realizado Correctamente');

        setTimeout(() => {
            router.push('/');
        }, 5000)
    }

    return (
        <QuioscoContext.Provider
            value={{
                categories,
                categoryActual,
                producto,
                modal,
                pedido,
                nombre,
                setNombre,
                total,
                handleClickCategory,
                handleSetProducto,
                handleChangeModal,
                handleAddPedido,
                handleEditCantidad,
                handleEliminarProducto,
                colocarOrden
            }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}
