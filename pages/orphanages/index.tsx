import { IconOptions } from 'leaflet'
import dynamic from 'next/dynamic'
import { FiPlus } from 'react-icons/fi'

import Button from '../../components/LinkButton'
import styles from './styles.module.css'

const Map = dynamic(() => import('../../components/Map/ForMany'), { ssr: false })

const icon: IconOptions = {
    iconUrl: '/marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, -5]
}
const mapStyle = { width: '100%', height: '100%', zIndex: 5 }

function OrphanagePage() {
    return (
        <div className={styles.pageOrphanage}>
            <aside>
                <header>
                    <img src="/marker.svg" alt="Happy" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Salvador</strong>
                    <span>Bahia</span>
                </footer>
            </aside>

            <Map latitude={-12.9892352} longitude={-38.44386} mapIcon={icon} zoom={15} style={mapStyle} />

            <Button
                url="/orphanages/create"
                icon={<FiPlus size={32} color="#FFF" />}
                style={{ right: '40px', bottom: '40px', position: 'absolute' }}
            />
        </div>
    )
}

export default OrphanagePage