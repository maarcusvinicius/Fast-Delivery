import express from "express";
import cors from "cors";

import { PrismaClient } from '@prisma/client';

const app = express()

app.use(express.json())

app.use(cors())

const prisma = new PrismaClient({
    log: ["query"]
})


app.get('/pedidos', async (request, response) => {
    const pedidos = await prisma.pedido.findMany({
        include: {
            _count:{
                select: {
                    ads: true,
                }
            }
        }
    })

    return response.json(pedidos)
})

app.post('/pedidos/:id/ads', async (request, response) => {
    const pedidoId = request.params.id
    const body : any = request.body


    const ad = await prisma.ad.create({
        data: {
            pedidoId,
            name: body.name,
            local: body.local,
            usern: body.usern,
            useVoiceChannel: body.useVoiceChannel
        }
    })

    return response.status(201).json(ad)
})


app.get('/pedidos/:id/ads', async (request, response) => {

    const pedidoId = request.params.id;

    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            local: true,
            useVoiceChannel: true,
        },
        where: {
            pedidoId,
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    return response.json(ads.map(ad => {
        return {
            ...ad,
        }
    }))
})


app.get('/ads/:id/usern', async (request, response) => {
    const adId = request.params.id;

    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            usern: true,
        },
        where: {
            id: adId,
        }
    })
    
    return response.json({
        usern: ad.usern,
    })
})

app.listen(3333)