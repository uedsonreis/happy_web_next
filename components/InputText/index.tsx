import styles from './styles.module.css'

interface Props {
    label: string
    value: string
    onChange: Function
}

function InputText(props: Props) {
    const { label, value, onChange } = props

    return (
        <div className={styles.inputContainer}>
            <label>{label}</label>
            <input type="text" className={styles.input} value={value} onChange={() => onChange()} />
        </div>
    )

}

export default InputText