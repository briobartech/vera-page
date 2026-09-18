
import styled from "styled-components";
import Navbar from "../components/Navbar";
import VirtualAccess from "../components/VirtualAccess";
import Title from "../components/Title";
import Footer from "../components/Footer";
function FormacionContinua() {
    return (
        <FormacionContinuaStyled>
            <VirtualAccess />
            <Navbar />
            <Title children="Formación Continua" />
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