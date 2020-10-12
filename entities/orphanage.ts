export interface Orphanage {

    id?: number
    name: string
    about: string
    whatsapp: string

    instructions: string
    visitHour: string
    weekend: boolean

    photos: string[]
    location: { latitude: number, longitude: number }
}