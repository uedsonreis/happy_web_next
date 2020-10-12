import BackBar from '../../../components/BackBar'
import Button from '../../../components/Button'
import InputText from '../../../components/InputText'
import styles from './styles.module.css'

function OrphanageCreate() {

    return (
        <div className={styles.createOrphanage}>
            
            <BackBar />
            
            <div className={styles.card}>
                <div className={styles.title}>Dados</div>

                <InputText
                    label={'Nome'} value={'Qualquer'}
                    onChange={() => console.log('Agora sim 1')}
                />

                <InputText
                    label={'Whatsapp'} value={'71 99999-8888'}
                    onChange={() => console.log('Agora sim 2')}
                />

                <div className={styles.title}>Visitação</div>

                <InputText
                    label={'Horário de Visitas'} value={'Das 8h as 17h'}
                    onChange={() => console.log('Agora sim 3')}
                />

                <Button text="Confirmar" onClick={console.log} />
            </div>
        </div>
    )
}

export default OrphanageCreate