import Header from './components/header/Header'
import Portfolio from './components/portfolio/Portfolio';
import Formacao from './components/formacao/Formacao';
import Footer from './components/footer/Footer';
import styles from './App.module.css';
import perfil from './assets/perfil.jpg';

function App() {
  return (
    <>
      <Header></Header>

      <main className={styles.introducao}>
        <img src={perfil} alt="Lobo cinza" width={260} height={520} />

        <div>
          <h1>UI/UX Designer<br /> Front-End Developer </h1>
          <p>Localizada em Lages - SC ❄️</p>
        </div>
      </main>

      <Portfolio></Portfolio>

      <Formacao></Formacao>

      <Footer></Footer>
    </>
  )
}

export default App
