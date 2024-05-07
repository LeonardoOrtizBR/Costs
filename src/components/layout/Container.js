import styles from './Container.module.css'

function Contianer(props) {
    return <div className={`${styles.container} ${styles[props.customClass]}`}>{props.children}</div>
}

export default Contianer