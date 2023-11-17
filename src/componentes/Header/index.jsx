import styles from './Header.module.css'

export default function Header(){
    return(
        <header className={styles.header}>
            <h1><a href=''>E-tickets</a></h1>
            <nav>
                <a href=''>Entrar</a>
            </nav>
        </header>
    )
}
