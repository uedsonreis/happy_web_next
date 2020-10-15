import { Marker, Popup, TileLayer } from 'react-leaflet'
import { FiArrowRight } from 'react-icons/fi'
import { icon, IconOptions } from 'leaflet'

import { Orphanage } from '../../entities/orphanage'
import LinkButton from '../LinkButton'
import Map from './index'

interface Props {
    style: any
    zoom: number
    latitude: number
    longitude: number
    mapIcon: IconOptions
    elements: Orphanage[]
}

export default function OrphanageMap(props: Props) {
    
    const { latitude, longitude, mapIcon, elements, ...rest } = props

    return (
        <Map latitude={latitude} longitude={longitude} {...rest}>
            {elements.map(orphanage => (
                <Marker key={orphanage.id} icon={icon(mapIcon)} position={[orphanage.latitude, orphanage.longitude]}>
                    <Popup className="mapPopup" closeButton={false} minWidth={240} maxWidth={240}>
                        {orphanage.name}
                        <LinkButton
                            url={`orphanages/${orphanage.id}`}
                            icon={<FiArrowRight size={20} color="#FFF" />}
                        />
                    </Popup>
                </Marker>
            ))}
        </Map>
    )
}