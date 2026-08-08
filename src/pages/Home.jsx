import { useAppContext } from '../context/AppContext';
import styled from 'styled-components';
import NewsBanner from '../components/NewsBanner';
import Banner from '../components/Banner';
import NavBar from '../components/Navbar';
import HomeCardSection from '../components/HomeCardSection';
import CareersSection from '../components/CareersSection';
import Stats from '../components/Stats';
import Carousel from '../components/Carousel';
import Faq from '../components/Faq';
import Administrators from '../components/Administrators';
import Recommendations from '../components/Recommendations';
import Footer from '../components/Footer';
import icons from '../data/icons.js';
import newsBannerBackground from '../assets/img/banner/banner.png';
function Home() {
    const { theme } = useAppContext();

    return (
        <HomeStyled className={`app ${theme}`}>
            <NavBar />
            <Banner
                titulo="Instituto de Educación Superior Rosario Vera Peñaloza"
                subtitulo="Comprometidos con la educación y el desarrollo profesional en nuestra comunidad"
                textoBoton="Conocer las ofertas académicas"
                imagenFondoPath={newsBannerBackground}
            />
            <HomeCardSection />
            <CareersSection />

            <NewsBanner
                icono={icons.fingerPrintIcon}
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
                icono={icons.tramaIcon}
                titulo="TRAMA"
                subtitulo="Espacio Interdisciplinario de Acompañamiento a las Trayectorias Estudiantiles"
                imagenFondoPath="trama.jpg"
                textoBoton="Quiero mas informacion"
            />
            <Footer />
        </HomeStyled>
    );
}

export default Home;

const HomeStyled = styled.div`
  width: min(80%, 1440px);
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 900px) {
    width: min(100%, 1440px);
    padding: 0 0.8rem;
  }
`;
