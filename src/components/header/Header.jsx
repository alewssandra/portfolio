import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <h1> { "< Alessandra Lima />" } </h1>
            <nav>
                <ul className={styles.header_menu}>
                    <li><a href="#portfolio">Portfólio</a></li>
                    <li><a href="#formacao">Formação</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header