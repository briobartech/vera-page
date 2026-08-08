import HomeCard from './HomeCard';
import styled from 'styled-components';
import icons from '../data/icons.js';
import bannerImage from '../assets/img/banner/banner.png';
import images from '../data/images.js';
const defaultCards = [
    {
        icon: icons.faNewspaper,
        title: 'Últimas noticias',
        description: 'Mantente informado con las últimas novedades y eventos del instituto.',
        imageSrc: images.ultimasNoticias,
        buttonLabel: '➝ Leer más',
    },
    {
        icon: icons.faPenToSquare,
        title: 'Inscripciones abiertas',
        description: '¡No pierdas la oportunidad de formar parte de nuestra comunidad educativa!',
        imageSrc: images.inscripcion,
        buttonLabel: '➝ Inscribirse',
    },
    {
        icon: icons.faDisplay,
        title: 'Campus virtual',
        description: 'Campus virtual, recursos en línea para estudiantes y docentes. Accede a materiales de estudio, clases grabadas y más.',
        imageSrc: images.campusVirtual,
        buttonLabel: '➝ Ingresar',
    },
    {
        icon: icons.faLaptopFile,
        title: 'Trámite online',
        description: 'Realiza tus trámites en línea de manera rápida y segura.',
        imageSrc: images.tramite,
        buttonLabel: '➝ Acceder',
    },
];

function HomeCardSection({ cards = defaultCards }) {
    return (
        <HomeCardSectionStyled>
            {cards.map((card, index) => (
                <HomeCard key={`${card.title}-${index}`} {...card} />
            ))}
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