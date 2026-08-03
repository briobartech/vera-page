import HomeCard from './HomeCard';
import styled from 'styled-components';

function HomeCardSection() {
    return (
        <HomeCardSectionStyled>
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
        </HomeCardSectionStyled>
    );
}

export default HomeCardSection;

const HomeCardSectionStyled = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: start;
    gap: 1.5rem;
    padding: 2rem 0;

    @media (max-width: 700px) {
      grid-template-columns: minmax(0, 1fr);
      gap: 1.1rem;
    }
`;