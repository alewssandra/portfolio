import styles from "./Portfolio.module.css"
import bikcraft from "../../assets/bikcraft.png"
import restauranterest from "../../assets/restauranterest.png";
import ice_cream from "../../assets/ice-cream.png";
import le_scone from "../../assets/le-scone.png";

function Portfolio() {
	return (
		<section className={styles.portfolio} id="portfolio" aria-label="Porfólio">
			<div className={styles.portfolio__container}>
				<h2 className={styles.subtitulo}>Portfólio</h2>

				<div>
					<p className={styles.portfolio__texto}>
						Conheça um pouco de alguns projetos de Front End que desenvolvi durante os estudos
						de cursos intensivos, utilizando o <strong>HTML</strong>, <strong>CSS</strong> e{" "}
						<strong>JavaScript</strong>.
					</p>
					<ul className={styles.portfolio__lista}>
						<li className={styles.projeto}>
							<span className={styles.projeto_tipo}>Bikcraft</span>
							<h3 className={styles.projeto_curso}>
								Projeto de loja virtual para uma empresa de Bicicletas criado durante o
								curso de HTML e CSS da Origamid.
							</h3>
							<img src={bikcraft} alt="Bikcraft" />
							<a
								href="https://alewssandra.github.io/Bikcraft/"
								className={styles.projeto_link}
								target="_blank"
							>
								Visualizar projeto
							</a>
						</li>
						<li className={styles.projeto}>
							<span className={styles.projeto_tipo}>Rest</span>
							<h3 className={styles.projeto_curso}>
								O Rest é um restaurante fictício especializado em carnes e frutos do mar
								criado no curso de Tipografia Avançada.
							</h3>
							<img src={restauranterest} alt="Bikcraft" />
							<a
								href="https://alewssandra.github.io/restauranterest/"
								className={styles.projeto_link}
								target="_blank"
							>
								Visualizar projeto
							</a>
						</li>
						<li className={styles.projeto}>
							<span className={styles.projeto_tipo}>Ice Cream</span>
							<h3 className={styles.projeto_curso}>
								Projeto de um cardapio virtual para uma empresa de Sorveteria criado durante
								com HTML e CSS.
							</h3>
							<img src={ice_cream} alt="Bikcraft" />
							<a
								href="https://alewssandra.github.io/ice-cream/"
								className={styles.projeto_link}
								target="_blank"
							>
								Visualizar projeto
							</a>
						</li>
						<li className={styles.projeto}>
							<span className={styles.projeto_tipo}>Le Scone</span>
							<h3 className={styles.projeto_curso}>
								Projeto de cardapio virtual para um restaurante durante o curso de SASS da
								Origamid.
							</h3>
							<img src={le_scone} alt="Bikcraft" />
							<a
								href="https://alewssandra.github.io/le-scone/"
								className={styles.projeto_link}
								target="_blank"
							>
								Visualizar projeto
							</a>
						</li>
					</ul>
                    <a className={styles.portfolio__git} href="https://github.com/alewssandra?tab=repositories">Repositórios no GitHub.</a>
				</div>
			</div>
		</section>
	)
}

export default Portfolio
