import Link from 'next/link'

import styles from './styles.module.css'

import { FiArrowRight } from 'react-icons/fi'

function LandingPage() {
    
    return(
        <div className={styles.pageLanding}>
            <div className={styles.contentWrapper}>

                <img src="/logo.svg" alt="Happy" />

                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>

                <div className={styles.location}>
                    <strong>Salvador</strong>
                    <span>Bahia</span>
                </div>

                <Link href="/orphanages">
                    <a className={styles.enterApp}>
                        <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
                    </a>
                </Link>

            </div>
        </div>
    )
}

export default LandingPage