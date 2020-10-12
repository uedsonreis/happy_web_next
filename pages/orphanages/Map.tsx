import { Map, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

interface Props {
    latitude: number
    longitude: number
    zoom: number
}

function OrphanageMap(props: Props) {
    const { latitude, longitude, zoom } = props
    return (
        <Map center={[latitude, longitude]} zoom={zoom} style={{ width: '100%', height: '100%' }}>
            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </Map>
    )
}

export default OrphanageMap