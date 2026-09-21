
import styled from "styled-components";
import Navbar from "../components/Navbar";
import VirtualAccess from "../components/VirtualAccess";
import Title from "../components/Title";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
function FormacionContinua() {
    return (
        <FormacionContinuaStyled>
            <VirtualAccess />
            <Navbar />
            
            <Banner 
                titulo="Formación Continua"
                subtitulo="Mantente actualizado con nuestros cursos y postítulos"
                imagenFondoPath={`${import.meta.env.BASE_URL}images/formacion-continua.png`}
            />
            <Footer />
        </FormacionContinuaStyled>
    );
}

export default FormacionContinua;

const FormacionContinuaStyled = styled.div`
width: min(80%, 1440px);
  margin: 0 auto;
  box-sizing: border-box;
`