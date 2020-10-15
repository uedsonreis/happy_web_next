import { ReactNode } from 'react'
import { Map, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

interface Props {
    style: any
    zoom: number
    latitude: number
    longitude: number
    children: ReactNode
    
    dragging?: boolean
    touchZoom?: boolean
    zoomControl?: boolean
    scrollWheelZoom?: boolean
    doubleClickZoom?: boolean
}

export default function OrphanageMap(props: Props) {
    const { latitude, longitude, children, ...rest } = props
    return (
        <Map center={[latitude, longitude]} {...rest} >
            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {children}
        </Map>
    )
}