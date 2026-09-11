import { useState } from 'react';
import styled from 'styled-components';
import OnlineProceduresCard from '../components/OnlineProceduresCard';
import CareersButtons from '../components/CareersButtons';
import NavBar from '../components/Navbar.jsx';
import icons from '../data/icons.js';
import Footer from '../components/Footer.jsx';
import NewsBanner from '../components/NewsBanner';

function OnlineProcedures() {
  const [activeProcedure, setActiveProcedure] = useState('Planificaciones');
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
            title: 'Otros trámites',
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

                <MobileProcedures className="liquid-glass-effect">
                  <div className="procedure-selector" role="tablist" aria-label="Seleccionar trámite en línea">
                    {defaultCards.map((card) => (
                      <button
                        key={card.title}
                        type="button"
                        className={activeProcedure === card.title ? 'active' : ''}
                        onClick={() => setActiveProcedure(card.title)}
                        aria-pressed={activeProcedure === card.title}
                      >
                        {card.title}
                      </button>
                    ))}
                  </div>

                  <div className="procedure-panel">
                    {defaultCards
                      .filter((card) => card.title === activeProcedure)
                      .map((card) => (
                        <OnlineProceduresCard
                          key={card.title}
                          title={card.title}
                          period={card.description}
                          buttonLabel={card.buttonLabel}
                          icon={card.icon}
                        />
                      ))}
                  </div>
                </MobileProcedures>

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
                titulo="¿Querés estudiar y tenés más de 25 años?​"
                subtitulo="Más info e inscripción acá​"
                imagenFondoPath="old-man-studying.jpeg"
                textoBoton="Quiero más información"
            />
            <NewsBanner
                icono={icons.tramaIcon}
                titulo="Llamado a concurso abreviado"
                subtitulo="Cargo de gestión directiva: Regencia"
                imagenFondoPath="gestion-regencia.avif"
                textoBoton="Quiero mas información"
                dominantTone='249,157,69'
            />
             <Footer />
        </OnlineProceduresStyled>
    );
}

export default OnlineProcedures;

const OnlineProceduresStyled = styled.div`
  --procedures-title-size: clamp(1.65rem, 1.4rem + 0.8vw, 2.35rem);
  --procedures-section-title-size: clamp(1.25rem, 1.05rem + 0.7vw, 1.9rem);
  --procedures-body-size: clamp(0.95rem, 0.9rem + 0.15vw, 1.05rem);

  display: flex;
  flex-direction: column;
  gap: 0;
  width: min(80%, 1440px);
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 900px) {
    width: min(100%, 1440px);
    padding: 0 0.8rem;
  }

  h1 {
    margin: 2rem 0 0;
    min-height: 2.2rem;
    color: var(--color-dark-purple);
    font-family: var(--font-heading, 'Poppins', sans-serif);
    font-size: var(--procedures-title-size);
    line-height: 1.08;
    letter-spacing: 0.01em;
    font-weight: 700;
    text-transform: none;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(440px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  margin-top: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: minmax(280px, 1fr);
  }

  @media (max-width: 760px) {
    display: none;
  }
`;

const MobileProcedures = styled.section`
  display: none;

  @media (max-width: 760px) {
    display: grid;
    gap: 0.75rem;
    padding: 0.8rem;
    margin-top: 2rem;
  }

  .procedure-selector {
    display: flex;
    gap: 0.55rem;
    padding: 0.35rem;
    border: 1px solid rgba(255, 255, 255, 0.68);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.72);
  }

  .procedure-selector button {
    flex: 1;
    min-width: 0;
    padding: 0.75rem 0.55rem;
    border: 1px solid transparent;
    border-radius: 999px;
    color: var(--color-dark-purple);
    background: transparent;
    font-family: var(--font-heading);
    font-size: 0.84rem;
    font-weight: 700;
    line-height: 1.1;
    cursor: pointer;
  }

  .procedure-selector button.active {
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.84);
    background:
      radial-gradient(120% 150% at 24% 0%, rgba(255, 255, 255, 0.66) 0%, rgba(255, 255, 255, 0) 52%),
      rgba(91, 46, 166, 0.7);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);
  }

  .procedure-panel > article {
    max-width: none;
  }
`;



const ProceduresSection = styled.section`
  width: 100%;
  display: grid;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  .careers-group {
    display: grid;
    gap: 1rem;
  }

  .careers-group-header h2 {
    margin: 0;
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: var(--procedures-section-title-size);
    color: var(--color-dark-purple);
    text-transform: uppercase;
    letter-spacing: 0.01em;
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