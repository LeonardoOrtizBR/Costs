import { Link } from 'react-router-dom'
import Contianer from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Contianer>
                <Link to='/'>
                    <img src={logo} alt='Costs' />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/projects'>Projetos</Link>
                    </li>
                </ul>
            </Contianer>
        </nav>
    )
}

export default Navbar