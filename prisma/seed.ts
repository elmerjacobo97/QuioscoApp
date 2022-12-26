import {PrismaClient} from '@prisma/client';
import {categorias, productos} from "./data";

const prisma = new PrismaClient();

const main = async (): Promise<void> => {
    try {
        await prisma.categoria.createMany({
            data: categorias,
        })
        await prisma.producto.createMany({
            data: productos,
        })
    } catch (e) {
        console.log(e);
    }
}

main();
