import styles from './Formacao.module.css';

function Formacao() {
    return (
        <section className={styles.formacao} id='formacao' aria-label='Formação'>
            <div className={styles.formacao_container}>
                <h2 className={styles.subtitulo}>Formação</h2>

                <div>
                    <ul className={styles.faculdade_lista}>
                        <li className={styles.faculdade}>
                            <span className={styles.faculdade_tipo}>Bacharel em Andamento</span>
                            <h3 className={styles.faculdade_curso}>Ciência da Computação</h3>
                            <span className={styles.faculdade_instituicao}>IFSC</span>
                        </li>
                        <li className={styles.faculdade}>
                            <span className={styles.faculdade_tipo}>Técnico</span>
                            <h3 className={styles.faculdade_curso}>Infomática para internet</h3>
                            <span className={styles.faculdade_instituicao}>IFSC</span>
                        </li>
                        <li className={styles.faculdade}>
                            <span className={styles.faculdade_tipo}>Formação Inicial</span>
                            <h3 className={styles.faculdade_curso}>Auxiliar Administrativo</h3>
                            <span className={styles.faculdade_instituicao}>IFSC</span>
                        </li>
                    </ul>

                    <div className={styles.formacao_extra}>
                        <div className={styles.cursos}>
                            <h3>Cursos Intensivos</h3>
                            <ul>
                                <li>WordPress Como CMS <span>18h</span></li>
                                <li>Web Desing Completo <span>44h</span></li>
                                <li>Front End para Iniciantes <span>72h</span></li>
                                <li>UX Desing Heurísticas <span>8h</span></li>
                            </ul>
                        </div>
                        <div className={styles.idiomas}>
                            <h3>Idiomas</h3>
                            <ul>
                                <li>Inglês <span>/ Básico</span></li>
                                <li>Espanhol <span>/ Básico</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Formacao;