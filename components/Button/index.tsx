
import { ReactNode } from 'react'
import styles from './styles.module.css'

interface Props {
    text?: string
    icon?: ReactNode
    onClick: Function
}

function Button(props: Props) {
    const { text, icon, onClick } = props

    return (
        <button className={styles.button} onClick={(e) => onClick(e)}>
            {icon}
            {text}
        </button>
    )

}

export default Button