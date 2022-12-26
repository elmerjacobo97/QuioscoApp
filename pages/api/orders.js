import {PrismaClient} from "@prisma/client";

export default async function handler(req, res) {
    const {nombre, fecha, total, pedido} = req.body;
    const prisma = new PrismaClient();

    if (req.method === 'POST') {
        const orden = await prisma.orden.create({
            data: {
                nombre,
                fecha,
                total,
                pedido,
            }
        })
        return  res.status(200).json(orden);
    } else {const ordenes = await prisma.orden.findMany({
        where: {
            estado: false,
        }
    })
        return res.status(200).json(ordenes);
    }
}
