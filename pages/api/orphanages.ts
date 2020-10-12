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
    const orphanages: Orphanage[] = [{
        id: 1, name: 'Orfanato Esperança',
        whatsapp: '71 999.888.777', visitHour: 'Das 8h as 18h',
        location: { latitude: -12.9892352, longitude: -38.44386 }, weekend: false,
        instructions: 'Venha como se sentir a vontade e traga muito amor e paciência para dar.',
        photos: ['https://oimparcial.com.br/app/uploads/2019/09/ilustracao-em-vetor-de-criancas-brincando_29937-2012.jpg'],
        about: 'Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.'
    }, {
        id: 2, name: 'Balão Mágico',
        whatsapp: '71 988.765.432', visitHour: 'Das 9h as 17h',
        location: { latitude: -12.9892360, longitude: -38.44380 }, weekend: true,
        instructions: 'Não venha com trajes de banho, e traga disposição e brinquedos.',
        photos: ['http://www.sinmgra.com.br/wp-content/uploads/2018/09/Festa-Crian%C3%A7as.jpg'],
        about: 'Presta assistência a crianças de 0 a 12 anos que se encontrem em situação vulnerabilidade social.'
    }]
    return response.status(200).json(orphanages)
}

async function post(request: NextApiRequest, response: NextApiResponse) {
    const orphanage = request.body as Orphanage
    return response.status(201).json({ ...orphanage, id: 3 })
}