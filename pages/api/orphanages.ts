// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next"

import { Orphanage } from '../../entities/orphanage'

export default async (request: NextApiRequest, response: NextApiResponse) => {
    switch (request.method) {
        case 'GET': return await get(request, response)
        case 'POST': return await post(request, response)
        default: return response.status(405).send('Not supported')
    }
}

async function get(request: NextApiRequest, response: NextApiResponse) {
    return response.status(200).json([])
}

async function post(request: NextApiRequest, response: NextApiResponse) {
    const orphanage = request.body as Orphanage
    return response.status(201).json({ ...orphanage, id: 1 })
}