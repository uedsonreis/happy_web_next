import { Marker, Popup, TileLayer } from 'react-leaflet'
import { FiArrowRight } from 'react-icons/fi'
import { icon, IconOptions } from 'leaflet'

import LinkButton from '../LinkButton'
import Map from './index'

interface Props {
    style: any
    zoom: number
    latitude: number
    longitude: number
    mapIcon: IconOptions
}

export default function OrphanageMap(props: Props) {
    const { latitude, longitude, mapIcon, ...rest } = props
    return (
        <Map latitude={latitude} longitude={longitude} {...rest}>
            <Marker icon={icon(mapIcon)} position={[latitude, longitude]}>
                <Popup className="mapPopup" closeButton={false} minWidth={240} maxWidth={240}>
                    Nome do Orfanato
                    <LinkButton
                        url="orphanages/1"
                        icon={<FiArrowRight size={20} color="#FFF" />}
                    />
                </Popup>
            </Marker>
        </Map>
    )
}