import Image from "next/image";
import {useQuiosco} from "../hooks";
import {Category} from "./Category";

export const Sidebar = () => {
    const {categories} = useQuiosco();

    return (
        <>
            <Image
                className="mt-2 mx-auto"
                src="/assets/img/logo.svg"
                width={200}
                height={100}
                priority
                alt="Imagen logo"
            />

            <nav className="mt-10">
                {
                    categories?.map(category => (
                        <Category key={category.id} category={category} />
                    ))
                }
            </nav>
        </>
    );
};
