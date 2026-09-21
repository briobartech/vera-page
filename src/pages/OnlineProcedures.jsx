import { useState } from 'react';
import styled from 'styled-components';
import OnlineProceduresCard from '../components/OnlineProceduresCard';
import CareersButtons from '../components/CareersButtons';
import NavBar from '../components/Navbar.jsx';
import icons from '../data/icons.js';
import Footer from '../components/Footer.jsx';
import NewsBanner from '../components/NewsBanner';
import VirtualAccess from '../components/VirtualAccess';
import useSlidingPill from '../hooks/useSlidingPill';
function OnlineProcedures() {
  const [activeProcedure, setActiveProcedure] = useState('Planificaciones');
  const { itemRef, pillStyle, selectorRef } = useSlidingPill(activeProcedure);
    const defaultCards = [
        {
          icon: icons.faCalendarDays,
            title: 'Planificaciones',
            description: '2026 / 2027',
            buttonLabel: 'Ver y descargar',
            to: 'https://sites.google.com/mendoza.edu.ar/sitiodeestudiantes2024-ies9-01/p%C3%A1gina-principal',
        },
        {
          icon: icons.faLaptop,
            title: 'Sistema digital',
            description: 'de gestión académica de la DES',
            buttonLabel: 'Acceder',
            to: 'https://dti.mendoza.edu.ar/superior/'
        },
        {
          icon: icons.faFile,
            title: 'Certificado',
            description: 'de Vías y medios de transporte',
            buttonLabel: 'Pedir',
            to: 'https://docs.google.com/forms/d/e/1FAIpQLSfP0qyy0Apg8AQujmx1mAgMLQXAg8DLNlMaQUN92yTs2LCtIw/viewform',
        },
        {
          icon: icons.faEnvelope,
            title: 'Programa',
            description: 'Progresar superior',
            buttonLabel: 'Tramitar',
            to: '/becas-vera',
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
            <VirtualAccess />
            <NavBar />
            <h1>Trámites en Línea</h1>

            <CardsGrid>
                {defaultCards.map(({ title, buttonLabel, description, icon, to }) => (
                    <OnlineProceduresCard
                        key={title}
                        title={title}
                        period={description}
                        buttonLabel={buttonLabel}
                        icon={icon}
                        to={to}
                    />
                ))}
            </CardsGrid>

                <MobileProcedures>
                  <div ref={selectorRef} className="procedure-selector liquid-glass-effect" role="tablist" aria-label="Seleccionar trámite en línea">
                    <span className="selector-active-pill" aria-hidden="true" style={pillStyle} />
                    {defaultCards.map((card, index) => (
                      <button
                        ref={itemRef(card.title)}
                        key={card.title}
                        type="button"
                        className="selector-pill"
                        id={`procedure-tab-${index}`}
                        role="tab"
                        onClick={() => setActiveProcedure(card.title)}
                        onKeyDown={(event) => {
                          const keyActions = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
                          const offset = keyActions[event.key];
                          if (offset === undefined) return;
                          event.preventDefault();
                          const nextIndex = (index + offset + defaultCards.length) % defaultCards.length;
                          const nextCard = defaultCards[nextIndex];
                          setActiveProcedure(nextCard.title);
                          document.getElementById(`procedure-tab-${nextIndex}`)?.focus();
                        }}
                        aria-selected={activeProcedure === card.title}
                        aria-controls="procedure-panel"
                        tabIndex={activeProcedure === card.title ? 0 : -1}
                      >
                        {card.title}
                      </button>
                    ))}
                  </div>

                  <div className="procedure-panel" id="procedure-panel" role="tabpanel">
                    {defaultCards
                      .filter((card) => card.title === activeProcedure)
                      .map((card) => (
                        <OnlineProceduresCard
                          key={card.title}
                          title={card.title}
                          period={card.description}
                          buttonLabel={card.buttonLabel}
                          icon={card.icon}
                          to={card.to}
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
                imagenFondoPath={`${import.meta.env.BASE_URL}images/old-man-studying.jpeg`}
                textoBoton="Quiero más información"
            />
            <NewsBanner
                icono={icons.tramaIcon}
                titulo="Llamado a concurso abreviado"
                subtitulo="Cargo de gestión directiva: Regencia"
                imagenFondoPath={`${import.meta.env.BASE_URL}images/gestion-regencia.avif`}
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

  @media (max-width: 1600px) {
    /* Contiene el botón de acceso virtual para que se alinee con el botón hamburguesa */
    position: relative;
  }

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
    position: relative;
    isolation: isolate;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.55rem;
    padding: 0.35rem;
    border-radius: 1.25rem;
  }

  .selector-active-pill {
    position: absolute;
    z-index: 0;
    box-sizing: border-box;
    pointer-events: none;
    border: 1px solid rgba(255, 255, 255, 0.98);
    border-radius: 999px;
    background: var(--color-white);
    box-shadow: 0 5px 12px rgba(var(--glass-shadow-rgb), 0.2);
    transition:
      left 0.36s cubic-bezier(0.34, 1.2, 0.64, 1),
      top 0.36s cubic-bezier(0.34, 1.2, 0.64, 1),
      width 0.36s cubic-bezier(0.34, 1.2, 0.64, 1),
      height 0.36s cubic-bezier(0.34, 1.2, 0.64, 1),
      opacity 0.18s ease;
  }

  .selector-pill {
    flex: 1;
    min-width: 0;
    position: relative;
    z-index: 1;
    border: 1px solid transparent;
    border-radius: 0.9rem;
    padding: 0.75rem 0.55rem;
    min-height: 3.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-wrap: anywhere;
    font-family: var(--font-heading);
    font-size: 0.84rem;
    font-weight: 700;
    line-height: 1.1;
    color: var(--color-dark-purple);
    background: transparent;
    cursor: pointer;
    transition: color 180ms ease;
  }

  .selector-pill[aria-selected='true'],
  .selector-pill:hover,
  .selector-pill:focus-visible {
    color: var(--color-institutional-purple);
  }

  .procedure-panel > article {
    max-width: none;
  }

  @media (max-width: 420px) {
    .procedure-selector {
      gap: 0.4rem;
      padding: 0.3rem;
    }

    .selector-pill {
      padding: 0.65rem 0.4rem;
      font-size: 0.76rem;
    }
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