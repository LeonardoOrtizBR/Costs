import styles from './SubmitButton.module.css'

function SubmitButton({text}) {
    return(
        <div className={styles.container_button}>
            <button>{text}</button>
        </div>
    )
}

export default SubmitButton