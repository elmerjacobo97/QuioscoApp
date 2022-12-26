import Head from "next/head";
import Modal from "react-modal";
import {ToastContainer} from "react-toastify";
import {ModalProduct, Pasos, Sidebar} from "../components";
import {useQuiosco} from "../hooks";
import 'react-toastify/dist/ReactToastify.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#__next');

export const Layout = ({children, page = ''}) => {
    const {modal} = useQuiosco();

    return (
        <>
            <Head>
                <title>Café - {page}</title>
                <meta name="description" content="Quiosco Cafetería" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="md:flex">
                <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
                    <Sidebar />
                </aside>
                <main  className="md:w-8/12 xl:w-3/4 2xl:w-4/5 md:h-screen md:overflow-y-scroll">
                    <div className="p-10">
                        <Pasos />
                        {children}
                    </div>
                </main>
            </div>
            {
                modal && (
                    <Modal
                        isOpen={modal}
                        style={customStyles}
                    >
                        <ModalProduct />
                    </Modal>
                )
            }
            <ToastContainer />
        </>
    );
};
