import useSWR from 'swr'
import { fetcherFn } from 'swr/dist/types'
import axios from 'axios'

import { Orphanage } from '../entities/orphanage'

class ServiceAPI {
    private readonly fetcher: fetcherFn<any> = url => this.api.get(url).then(res => res.data)

    protected readonly api = axios.create({ baseURL: 'http://localhost:3333/' })

    constructor(protected readonly resource: string) {}

    protected get(url: string) {
        const { data, error } = useSWR(url, this.fetcher)
        if (error) {
            console.error('Error on get data: ', error)
            throw new Error(error)
        }
        return data
    }
}

class OrphanageAPI extends ServiceAPI {

    constructor() { super('orphanages/') }

    public getOne(id: number): Orphanage {
        const data = this.get(this.resource+id)
        return data as Orphanage
    }

    public getList(): Orphanage[] {
        const data = this.get(this.resource)
        return data as Orphanage[]
    }

    public async create(body: any): Promise<Orphanage> {
        const response = await this.api.post(this.resource, body)
        return response.data as Orphanage
    }
}

export const orphanageApi = new OrphanageAPI()