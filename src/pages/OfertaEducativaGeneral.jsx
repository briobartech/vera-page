import styled from 'styled-components';

function OfertaEducativaGeneral() {
  return (
    <OfertaEducativaGeneralStyled>
      <h1>Oferta Educativa General</h1>
    </OfertaEducativaGeneralStyled>
  );
}

export default OfertaEducativaGeneral;



const OfertaEducativaGeneralStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;