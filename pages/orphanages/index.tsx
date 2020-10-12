import dynamic from 'next/dynamic'
import { FiPlus } from 'react-icons/fi'

import Button from '../../components/LinkButton'

import styles from './styles.module.css'

const MapWithNoSSR = dynamic(() => import('./Map'), { ssr: false })

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

            <MapWithNoSSR latitude={-12.9892352} longitude={-38.44386} zoom={15} />

            <Button
                url="/orphanages/create"
                style={{ right: '40px', bottom: '40px', position: 'absolute' }}
                icon={<FiPlus size={32} color="#FFF" />}
            />

        </div>
    )
}

export default OrphanagePage