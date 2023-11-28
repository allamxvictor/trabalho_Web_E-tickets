import styles from './Header.module.css'
import {Link} from "react-router-dom"

export default function Header(){
    return(
        <header className={styles.header}>
            <h1><Link to="/">E-tickets</Link></h1>
            <nav>
                <Link to="/Login">Entrar</Link>
            </nav>
        </header>
    )
}
