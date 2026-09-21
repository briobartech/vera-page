import { useAppContext } from '../context/AppContext';
import styled from 'styled-components';
import NewsBanner from '../components/NewsBanner.jsx';
import Banner from '../components/Banner.jsx';
import NavBar from '../components/Navbar.jsx';
import HomeCardSection from '../components/HomeCardSection.jsx';
import CareersSection from '../components/CareersSection.jsx';
import Stats from '../components/Stats.jsx';
import Carousel from '../components/Carousel.jsx';
import NewsCarousel from '../components/NewsCarousel.jsx';
import Faq from '../components/Faq.jsx';
import Administrators from '../components/Administrators.jsx';
import Recommendations from '../components/Recommendations.jsx';
import Footer from '../components/Footer.jsx';
import icons from '../data/icons.js';
import newsBannerBackground from '/images/banner/video_muestra.webm';
import VirtualAccess from '../components/VirtualAccess.jsx'
import Title from '../components/Title.jsx';
function Home() {
    const { theme } = useAppContext();

    return (
        <HomeStyled >
            <VirtualAccess />
            <NavBar $flushTop />
            <Banner
                titulo="Instituto de Educación Superior Rosario Vera Peñaloza"
                subtitulo="Comprometidos con la educación y el desarrollo profesional en nuestra comunidad"
                textoBoton="Conocé nuestra oferta"
                imagenFondoPath={newsBannerBackground}
                to="/oferta-educativa/general"
            />
            <HomeCardSection />
            <CareersSection />
            {/* <Carousel /> */}

            {/* <NewsBanner
                icono={icons.fingerPrintIcon}
                titulo="Tecnicatura Superior en Redes y Ciberseguridad"
                imagenFondoPath="news-banner.jpg"
                textoBoton="Nueva carrera ¡Conocela!"
            /> */}
            {/* <Faq /> */} {/* TODO: encontrarle hogar */}
            <Stats />

            <Recommendations />
            <Administrators />
            <Title children="Novedades" />
            <NewsCarousel />
            <NewsBanner
                icono={icons.tramaIcon}
                titulo="TRAMA"
                subtitulo="Espacio Interdisciplinario de Acompañamiento a las Trayectorias Estudiantiles"
                imagenFondoPath="trama.jpg"
                textoBoton="Quiero mas información"
                to="/TRAMA"

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

  @media (max-width: 1600px) {
    /* Contiene el botón de acceso virtual para que se alinee con el botón hamburguesa */
    position: relative;
  }

  @media (max-width: 900px) {
    width: min(100%, 1440px);
    padding: 0 0.8rem;
  }
`;
