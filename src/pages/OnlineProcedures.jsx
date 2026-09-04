import styled from 'styled-components';
import OnlineProceduresCard from '../components/OnlineProceduresCard';
import CareersButtons from '../components/CareersButtons';
import NavBar from '../components/Navbar.jsx';
import icons from '../data/icons.js';
import Footer from '../components/Footer.jsx';
import NewsBanner from '../components/NewsBanner';

function OnlineProcedures() {
    const defaultCards = [
        {
          icon: icons.faCalendarDays,
            title: 'Planificaciones',
            description: '2026 / 2027',
            buttonLabel: 'Ver y descargar',
        },
        {
          icon: icons.faLaptop,
            title: 'Sistema digital',
            description: 'de gestión académica de la DES',
            buttonLabel: 'Acceder',
        }
    ];

    const informationButtons = {
        tecnicatura: {
            title: 'Trámites',
            items: [
                {
                    code: 'TSDS',
                    name: 'MESAS DE EXÁMENES',
                    icon: icons.faFilePen,
                    reflectionColor: 'rgba(142, 147, 186, 0.78)',
                    to: '#',
                },
                {
                    code: 'TSDS',
                    name: 'CRONOGRAMA',
                    icon: icons.faCalendarDays,
                    reflectionColor: 'rgba(142, 147, 186, 0.78)',
                    to: '#',
                },
                {
                    code: 'TSDS',
                    name: 'PÓLIZA DE SEGURO PRÁCTICAS DOCENTES',
                    icon: icons.faFileShield,
                    reflectionColor: 'rgba(142, 147, 186, 0.78)',
                    to: '#',
                },
                {
                    code: 'TSDS',
                    name: 'HORARIOS TRANSPORTE',
                    icon: icons.faBus,
                    reflectionColor: 'rgba(142, 147, 186, 0.78)',
                    to: '#',
                },
                {
                    code: 'TSDS',
                    name: 'CERTIFICADO DE ANTECEDENTES PENALES',
                    icon: icons.faIdCardClip,
                    reflectionColor: 'rgba(142, 147, 186, 0.78)',
                    to: '#',
                }
            ]
        }
    };

    return (
        <OnlineProceduresStyled>
            <NavBar />
            <h1>Trámites en Línea</h1>

            <CardsGrid>
                {defaultCards.map(({ title, buttonLabel, description, icon }) => (
                    <OnlineProceduresCard
                        key={title}
                        title={title}
                        period={description}
                        buttonLabel={buttonLabel}
                    icon={icon}
                    />
                ))}
            </CardsGrid>

            <ProceduresSection>
                <article className="careers-group">
                    <header className="careers-group-header">
                        <h2>{informationButtons.tecnicatura.title}</h2>
                    </header>

                    <div className="careers-group-grid">
                        {informationButtons.tecnicatura.items.map((item) => (
                            <CareersButtons
                                key={item.name}
                                name={item.name}
                                icon={item.icon}
                                to={item.to ?? '#'}
                                reflectionColor={item.reflectionColor}
                                backgroundOpacity={0.72}
                                backdropBlur={18}
                            />
                        ))}
                    </div>
                </article>
            </ProceduresSection>
            <NewsBanner
                icono={icons.personPlusIcon}
                titulo="¿Querés estudiar y tenes más de 25 años?​"
                subtitulo="Más info e inscripción acá​"
                imagenFondoPath="old-man-studying.jpeg"
                textoBoton="Quiero mas información"
            />
             <Footer />
        </OnlineProceduresStyled>
    );
}

export default OnlineProcedures;

const OnlineProceduresStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px 24px;
  width: min(100%, 1320px);
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 900px) {
    width: min(100%, 1440px);
    padding: 0 0.8rem;
  }

  h1 {
    margin: 0;
    color: #0f172a;
    font-size: 2rem;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(440px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: minmax(280px, 1fr);
  }
`;



const ProceduresSection = styled.section`
  width: 100%;
  display: grid;
  gap: 1rem;

  .careers-group {
    display: grid;
    gap: 1rem;
  }

  .careers-group-header h2 {
    margin: 0;
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: clamp(1.4rem, 1.05rem + 1vw, 2rem);
    color: var(--color-dark-purple);
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }

  .careers-group-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 1100px) {
    .careers-group-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 760px) {
    .careers-group-grid {
      grid-template-columns: minmax(0, 1fr);
    }
  }
`;