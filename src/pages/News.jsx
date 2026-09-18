import styled from "styled-components";
import VirtualAccess from "../components/VirtualAccess";
import NavBar from "../components/Navbar";
import Title from "../components/Title";
import Footer from "../components/Footer";
function News() {
    return (
        <NewsStyled>
            <VirtualAccess />
            <NavBar />
            <Title children="Novedades" />
            <Footer />

        </NewsStyled>
    );
}

export default News;

const NewsStyled = styled.div`
width: min(80%, 1440px);
  margin: 0 auto;
  box-sizing: border-box;
`;