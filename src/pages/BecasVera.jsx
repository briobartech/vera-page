import styled from "styled-components";
import VirtualAccess from "../components/VirtualAccess";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
function BecasVera() {
    return (
        <BecasVeraStyled>
            <VirtualAccess />
            <Navbar />
            <Title children="Becas Vera" />
            <Banner
                titulo="Politicas estudiantiles 2025"

                subtitulo="Referente: Belén Alvarez"
                textoBoton=""
                spanTexto=""
                botonDeshabilitado={false}
                imagenFondoPath={`${import.meta.env.BASE_URL}images/banner/politicas-estudiantiles.png`}
            />
            <Footer />
        </BecasVeraStyled>
    );
}

export default BecasVera;

const BecasVeraStyled = styled.div`width: min(80%, 1440px);
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