import Link from 'next/link'
import { ReactNode } from 'react'

import styles from './styles.module.css'

interface Props {
    url: string
    icon: ReactNode
    style?: any
}

function LinkButton(props: Props) {
    const { url, icon, style } = props
    
    return (
        <Link href={url}>
            <a className={styles.linkButton} style={style}>
                {icon}
            </a>
        </Link>
    )
}

export default LinkButton