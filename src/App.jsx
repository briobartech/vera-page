import { useAppContext } from './context/AppContext';
import styled from 'styled-components';
import NewsBanner from './components/NewsBanner';
import './App.css';
import Banner from './components/Banner';
import NavBar from './components/Navbar';
import HomeCardSection from './components/HomeCardSection';
import CareersSection from './components/CareersSection';
import Stats from './components/Stats';
import Carousel from './components/Carousel';
import Faq from './components/Faq';
import Administrators from './components/Administrators';
import Recommendations from './components/Recommendations';
import Footer from './components/Footer';
import fingerPrintIcon from './assets/img/icons/finger-print.svg';
import tramaIcon from './assets/img/icons/trama-icon.svg';
function App() {
  const { theme } = useAppContext();

  return (
    <AppStyled className={`app ${theme}`}>
      <NavBar />
      <Banner />
      <HomeCardSection />
      <CareersSection />
     
      <NewsBanner
        icono={fingerPrintIcon}
        titulo="Tecnicatura Superior en Redes y Ciberseguridad"
        imagenFondoPath="news-banner.jpg"
        textoBoton="Nueva carrera ¡Conocela!"
      />
      <Faq />
      <Stats />
      <Carousel />
      <Administrators />
      <Recommendations />
      <NewsBanner
        icono={tramaIcon}
        titulo="TRAMA"
        subtitulo="Espacio Interdisciplinario de Acompañamiento a las Trayectorias Estudiantiles"
        imagenFondoPath="trama.jpg"
        textoBoton="Quiero mas informacion"
      />
      <Footer />
    </AppStyled>
  );
}

export default App;


const AppStyled = styled.div`
  width: min(80%, 1440px);
  margin: 0 auto;
  
  @media (max-width: 900px) {
    width: min(94%, 1440px);
  }
`;