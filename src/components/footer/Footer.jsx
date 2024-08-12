import styles from './Footer.module.css';
import git from '../../assets/git.svg'
import link_icon from '../../assets/link-icon.svg'

function Footer() {
    return (
        <footer className={styles.footer} id='contato'>
            <div className={styles.footer_container}>
                <div className={styles.footer__icone}>
                    <a href="https://github.com/alewssandra">
                        <img src={git} alt="Link para o Linkedin" />
                    </a>
                    <a href="https://www.linkedin.com/in/alewssandra">
                        <img src={link_icon} alt="Link para o Linkedin"/>
                    </a>
                </div>
                <p className={styles.footer_copy}>Alessandra Lima. Alguns direitos reservados.</p>
            </div>

        </footer>
    )
}

export default Footer;