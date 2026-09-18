import styled from 'styled-components';

function Title({ children }) {
    return <TitleStyled><h1>{children}</h1></TitleStyled>;
}

export default Title;

const TitleStyled = styled.h1`
    font-family: var(--font-heading);
    font-weight: 200;
    line-height: 1.08;
    font-size: clamp(1rem, 1rem + 1.4vw, 3.5rem);
    color: var(--color-white);
    padding: 1rem 0;
`;