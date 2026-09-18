import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VirtualAccess from '../components/VirtualAccess';
import icons from '../data/icons';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Title from '../components/Title';
import StepCards from '../components/StepCards';
import AdmissionInfoCards from '../components/AdmissionInfoCards';
import CareersSection from '../components/CareersSection';
import NewsBanner from '../components/NewsBanner';
import Faq from '../components/Faq';
const newsBannerBackground = `${import.meta.env.BASE_URL}images/ingreso.png`;

const defaultCards = [
    {
        icon: icons.faBuildingColumns,
        title: 'Institución pública',
        description: 'Comprometidos con la educación de calidad y el derecho a estudiar',
    },
    {
        icon: icons.faAward,
        title: 'Títulos con validez nacional',
        description: 'Formación reconocida en todo el país',
    },
    {
        icon: icons.faUsers,
        title: 'Profesorados: 4 años',
        description: 'Formación docente para transformar realidades',
    },
    {
        icon: icons.faUserGear,
        title: 'Tecnicaturas: 3 años',
        description: 'Formación técnica para el mundo de hoy',
    },
];

const admissionSteps = [
    {
        number: 2,
        icon: icons.faLaptop,
        title: 'Completá la preinscripción',
        description: 'Cuando se habilite el período de preinscripción, realiza el formulario online.',
    },
    {
        number: 1,
        icon: icons.faFileLines,
        title: 'Elegí tu carrera',
        description: 'Conocé nuestra oferta educativa y encontrá tu próxima carrera.',
    },
    {
        number: 3,
        icon: icons.faFolderOpen,
        title: 'Presenta tu documentación',
        description: 'Acerca la documentación en las fechas indicadas.',
    },
    {
        number: 4,
        icon: icons.faUsers,
        title: 'Realiza el curso de ingreso',
        description: 'Participá en el curso de ingreso según tu carrera.',
    }
];

const admissionRequirements = [
    'DNI (frente y dorso)',
    'Partida de nacimiento',
    'Título secundario o constancia de título en trámite',
    'Foto carnet (4x4)',
    'CUIL',
];

const admissionMaterials = [
    { title: 'Comprensión y producción de textos' },
    { title: 'Razonamiento lógico y resolución de problemas' },
];

function IngresoInfoCard({ title, description, icon }) {
    return (
        <IngresoInfoCardStyled>
            <div className="card-shell liquid-glass-effect">
                <FontAwesomeIcon icon={icon} className="background-icon" aria-hidden="true" />

                <div className="calendar-visual" aria-hidden="true">
                    <FontAwesomeIcon icon={icon} className="procedure-icon" />
                </div>

                <div className="card-content">
                    <div className="card-copy">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </IngresoInfoCardStyled>
    );
}

function Ingreso() {
    return (
        <IngresoStyled>
            <VirtualAccess />
            <Navbar $flushTop />
            <Banner
                titulo="Ingreso 2026"
                subtitulo="Todo lo que necesitas para comenzar tu carrera en el Vera"
                textoBoton="Preinscribirme"
                spanTexto="Preinscripciones próximamente"
                to="/preinscripcion"
                textoBoton2="Ver oferta educativa"
                imagenFondoPath={newsBannerBackground}
                to2="/oferta-educativa/general"
            />

            <CardsSection>
                <div className="cards-grid">
                    {defaultCards.map(({ title, description, icon }) => (
                        <IngresoInfoCard
                            key={title}
                            title={title}
                            description={description}
                            icon={icon}
                        />
                    ))}
                </div>
            </CardsSection>
            <Title children="Tu ingreso, paso a paso" />
            <StepCards steps={admissionSteps} />
            <AdmissionInfoCards
                requirements={admissionRequirements}
                materials={admissionMaterials}
            />
            <CareersSection />
            <NewsBanner
                icono={icons.personPlusIcon}
                titulo="¿Querés estudiar y tenés más de 25 años?​"
                subtitulo="Más info e inscripción acá​"
                imagenFondoPath={`${import.meta.env.BASE_URL}images/old-man-studying.jpeg`}
                textoBoton="Quiero más información"
            />
            <Faq />
            <Footer />
        </IngresoStyled>
    );
}

export default Ingreso;

const IngresoStyled = styled.div`
    width: min(80%, 1440px);
    margin: 0 auto;
    box-sizing: border-box;
    padding: 2rem 1.5rem;
`;

const CardsSection = styled.section`
    margin-top: 1.5rem;
    width: 100%;

    .cards-grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 1rem;
        align-items: stretch;
    }

    @media (max-width: 1100px) {
        .cards-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    @media (max-width: 640px) {
        .cards-grid {
            grid-template-columns: 1fr;
        }
    }
`;

const IngresoInfoCardStyled = styled.article`
    width: 100%;
    height: 100%;

    .card-shell {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.9rem;
        width: 100%;
        height: 100%;
        min-height: 170px;
        padding: 1rem 1rem 0.9rem;
        box-sizing: border-box;
        overflow: hidden;
        isolation: isolate;
        border-radius: 1.25rem;
    }

    .background-icon {
        position: absolute;
        top: 50%;
        left: 64%;
        width: 170px;
        height: 170px;
        color: rgba(103, 82, 145, 0.12);
        transform: translate(-50%, -50%) rotate(-18deg) scale(1.5);
        filter: blur(5px);
        pointer-events: none;
        z-index: 0;
    }

    .calendar-visual {
        position: relative;
        flex: 0 0 92px;
        width: 92px;
        height: 110px;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .procedure-icon {
        position: relative;
        width: 70px;
        height: 70px;
        color: var(--color-text-dark);
        filter: drop-shadow(0 1px 0 rgba(255, 255, 255, 0.65));
    }

    .card-content {
        position: relative;
        z-index: 1;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        min-width: 0;
        height: 100%;
        padding: 0.2rem 0;
    }

    .card-copy {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        min-width: 0;
    }

    .card-content h2 {
        margin: 0;
        min-height: 1.7rem;
        color: rgb(49, 43, 54);
        font-family: var(--font-heading, 'Poppins', sans-serif);
        font-size: clamp(1rem, 0.95rem + 0.22vw, 1.2rem);
        line-height: 1.1;
        letter-spacing: 0.01em;
        font-weight: 700;
    }

    .card-content p {
        margin: 0.35rem 0 0;
        color: rgba(49, 43, 54, 0.82);
        font-family: var(--font-heading, 'Poppins', sans-serif);
        font-size: clamp(0.82rem, 0.8rem + 0.14vw, 0.95rem);
        line-height: 1.3;
        letter-spacing: 0.01em;
        font-weight: 600;
    }

    @media (max-width: 900px) {
        .card-shell {
            min-height: 150px;
            padding: 0.8rem;
        }

        .calendar-visual {
            flex: 0 0 76px;
            width: 76px;
            height: 92px;
        }

        .procedure-icon {
            width: 60px;
            height: 60px;
        }
    }
`;
