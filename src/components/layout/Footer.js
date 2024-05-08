import { FaLinkedin, FaGithub } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a href='https://github.com/LeonardoOrtizBR'>
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/leonardoortizbr/'>
                        <FaLinkedin />
                    </a>
                </li>
            </ul>
            <p className={styles.copy_right}><span>Costs</span> &copy; 2024</p>
        </footer>
    )
}

export default Footer