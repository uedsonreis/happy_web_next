import { Marker } from 'react-leaflet'
import { icon, IconOptions } from 'leaflet'

import Map from './index'

interface Props {
    style: any
    zoom: number
    latitude: number
    longitude: number
    mapIcon: IconOptions

    dragging?: boolean
    touchZoom?: boolean
    zoomControl?: boolean
    scrollWheelZoom?: boolean
    doubleClickZoom?: boolean
}

export default function OrphanageMap(props: Props) {
    const { latitude, longitude, mapIcon, ...rest } = props

    return (
        <Map latitude={latitude} longitude={longitude} {...rest}>
            <Marker interactive={false} icon={icon(mapIcon)} position={[latitude, longitude]} />
        </Map>
    )
}