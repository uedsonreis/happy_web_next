import { FiArrowLeft } from 'react-icons/fi'

import LinkButton from '../../components/LinkButton'
import styles from './styles.module.css'

function BackBar() {

    return (
        <aside className={styles.backBar}>
            <img src="/marker.svg" alt="Happy" />

            <LinkButton
                url='/orphanages'
                style={{ width: '48px', height: '48px' }}
                icon={<FiArrowLeft size={32} color="#FFF" />}
            />
        </aside>
    )
}

export default BackBar