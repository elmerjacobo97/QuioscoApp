import Head from "next/head";
import Image from "next/image";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLayout({ children, page }) {
    return (
        <>
            <Head>
                <title>Café - {page}</title>
                <meta name="description" content="Quiosco Cafetería Administrativo" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="md:flex">
                <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5">
                    <Image
                        className="mt-2 mx-auto"
                        src="/assets/img/logo.svg"
                        width={200}
                        height={100}
                        priority
                        alt="Imagen logo"
                    />
                </aside>

                <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                    <div className="p-10">
                        {children}
                    </div>
                </main>
            </div>
            <ToastContainer />
        </>
    );
}
