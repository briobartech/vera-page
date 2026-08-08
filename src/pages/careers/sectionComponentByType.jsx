import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faCircleCheck, faClock, faIdCard, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Banner from '../../components/Banner';
import adornoImage from '../../assets/img/adorno.png';

const infoCardIconByName = {
    clock: faClock,
    checkmark: faCircleCheck,
    'sand-clock': faCalendarDays,
    card: faIdCard,
};

function AboutMedia({ image, title }) {
    const [hasError, setHasError] = useState(false);
    const shouldRenderImage = Boolean(image && !hasError);

    return (
        <div className="about-media-wrap" aria-hidden={shouldRenderImage ? undefined : 'true'}>
            {shouldRenderImage ? (
                <img
                    src={image}
                    alt={title || 'Ilustracion de la carrera'}
                    loading="lazy"
                    className="about-media"
                    onError={() => setHasError(true)}
                />
            ) : null}
        </div>
    );
}

function BannerSection({ section }) {
    const bannerItem = section?.content?.[0] ?? {};

    return (
        <SectionStyled>
            <div className="career-banner-host">
                <Banner
                    titulo={bannerItem.title ?? 'Carrera'}
                    subtitulo={bannerItem.subtitle ?? ''}
                    textoBoton={bannerItem.buttonText ?? 'Inscribite ahora'}
                    imagenFondoPath={bannerItem.image ?? ''}
                />
            </div>
        </SectionStyled>
    );
}

function InfoCardsSection({ section }) {
    const cards = Array.isArray(section?.content) ? section.content : [];

    return (
        <SectionStyled>
            <section className="career-block">
                <h3>Informacion general</h3>
                <div className="cards-grid">
                    {cards.map((card, index) => (
                        <article className="info-card" key={`${card?.title ?? 'item'}-${index}`}>
                            <img src={adornoImage} alt="" className="info-card-adorno" aria-hidden="true" />

                            <div className="icon-card" aria-hidden="true">
                                <FontAwesomeIcon icon={infoCardIconByName[card?.icon] ?? faInfoCircle} />
                            </div>

                            <div className="info-card-content">
                                <p className="info-title">{card?.title ?? '-'}</p>
                                <p className="info-description">{card?.description ?? '-'}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </SectionStyled>
    );
}

function AboutSection({ section }) {
    const content = section?.content ?? {};

    return (
        <SectionStyled>
            <section className="career-block career-split">
                <div className="about-copy">
                    <h3>{content?.title ?? 'Detalle'}</h3>
                    <p>{content?.description ?? ''}</p>
                </div>
                <AboutMedia image={content?.image} title={content?.title} />
            </section>
        </SectionStyled>
    );
}

function ProfileSection({ section }) {
    const content = section?.content ?? {};

    return (
        <SectionStyled>
            <section className="career-block">
                <h3>{content?.title ?? 'Perfil'}</h3>
                <p>{content?.description ?? ''}</p>
            </section>
        </SectionStyled>
    );
}

function ContentsSection({ section }) {
    const content = section?.content ?? {};
    const groups = Array.isArray(content?.description) ? content.description : [];

    return (
        <SectionStyled>
            <section className="career-block">
                <h3>{content?.title ?? 'Contenidos'}</h3>
                <div className="contents-grid">
                    {groups.map((group, index) => (
                        <div className="content-group" key={`group-${index}`}>
                            <p>Año {index + 1}</p>
                            {Array.isArray(group) && group.length > 0 ? (
                                <ul>
                                    {group.map((item, itemIndex) => (
                                        <li key={`item-${index}-${itemIndex}`}>{String(item)}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="muted">Sin contenidos cargados</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </SectionStyled>
    );
}

function FaqSection({ section }) {
    const questions = Array.isArray(section?.questions) ? section.questions : [];
    const answers = Array.isArray(section?.answers) ? section.answers : [];

    return (
        <SectionStyled>
            <section className="career-block">
                <h3>Preguntas frecuentes</h3>
                <div className="faq-list">
                    {questions.map((question, index) => (
                        <article className="faq-item" key={`faq-${index}`}>
                            <h4>{question}</h4>
                            <p>{answers[index] ?? 'Respuesta pendiente'}</p>
                        </article>
                    ))}
                </div>
            </section>
        </SectionStyled>
    );
}

function FallbackSection({ section }) {
    return (
        <SectionStyled>
            <section className="career-block">
                <h3>Seccion no mapeada</h3>
                <p>Type: {section?.type ?? 'desconocido'}</p>
            </section>
        </SectionStyled>
    );
}

export const SECTION_COMPONENT_BY_TYPE = {
    banner: BannerSection,
    'info-cards': InfoCardsSection,
    about: AboutSection,
    profile: ProfileSection,
    contents: ContentsSection,
    faq: FaqSection,
};

export function getSectionComponentByType(type) {
    const normalizedType = String(type ?? '').trim().toLowerCase();

    return SECTION_COMPONENT_BY_TYPE[normalizedType] ?? FallbackSection;
}

const SectionStyled = styled.div`
  width: 100%;

  .career-block {
    box-sizing: border-box;
    position: relative;
    isolation: isolate;
    overflow: hidden;
    margin: 0.8rem auto;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.55);
    border-radius: 1.5rem;
    padding: 1.2rem 1.35rem;
    background:
      radial-gradient(130% 160% at 80% 18%, rgba(169, 141, 224, 0.2) 0%, rgba(169, 141, 224, 0.07) 38%, rgba(255, 255, 255, 0.58) 100%),
      linear-gradient(135deg, rgba(255, 255, 255, 0.74), rgba(255, 255, 255, 0.42));
    backdrop-filter: blur(12px) saturate(128%);
    box-shadow:
      0 18px 34px rgba(59, 31, 102, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.82),
      inset 0 -1px 0 rgba(169, 141, 224, 0.22);
  }

  .career-block::before {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    pointer-events: none;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.14) 30%,
      rgba(255, 255, 255, 0) 66%
    );
    z-index: 0;
  }

  .career-banner h2,
  .career-block h3 {
    position: relative;
    z-index: 1;
    margin: 0;
    color: var(--color-dark-purple);
    font-family: var(--font-heading);
  }

  .career-banner-host {
    width: 100%;
    margin: 0.8rem auto;
  }

  .career-banner p,
  .career-block p,
  .faq-item p,
  .info-description {
    position: relative;
    z-index: 1;
    margin: 0.5rem 0 0;
    color: var(--color-dark-purple);
    font-family: var(--font-body);
    line-height: 1.45;
  }

  button {
    margin-top: 0.9rem;
    border: 0;
    border-radius: 0.75rem;
    padding: 0.7rem 1rem;
    color: #fff;
    background: var(--color-gradient);
    font-family: var(--font-heading);
    cursor: pointer;
    box-shadow:
      0 10px 20px rgba(91, 46, 166, 0.28),
      inset 0 1px 0 rgba(255, 255, 255, 0.42);
  }

  .career-split {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(240px, 34%);
    gap: 1.1rem;
    align-items: stretch;
    
  }

  .about-copy {
    position: relative;
    z-index: 1;
    padding: 1.5rem 1.4rem;
  }

  .about-copy h3 {
    font-size: clamp(1.55rem, 1.2rem + 0.9vw, 2.2rem);
  }

  .about-copy p {
    max-width: 66ch;
  }

  .about-media-wrap {
    position: relative;
    min-height: clamp(180px, 24vw, 280px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.9rem 0.9rem 0.9rem 1rem;
    border-left: 1px solid rgba(255, 255, 255, 0.52);
    background: transparent;
    overflow: hidden;
  }

  .about-media {
    width: 100%;
    height: clamp(180px, 22vw, 250px);
    object-fit: cover;
    object-position: center;
    display: block;
    border-radius: 1.1rem;
    box-shadow:
      0 12px 24px rgba(59, 31, 102, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.24);
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    justify-items: center;
    gap: 1rem;
    margin-top: 0.8rem;
  }

  .info-card {
    width: min(100%, 240px);
    min-width: 0;
    min-height: 205px;
    position: relative;
    border-radius: 2.1rem;
    padding: 0.5rem 0.5rem 1rem;
    background:
      radial-gradient(140% 185% at 54% 7%, rgba(169, 141, 224, 0.2) 0%, rgba(169, 141, 224, 0.07) 34%, rgba(255, 255, 255, 0.95) 75%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.88));
    border: 1px solid rgba(230, 230, 239, 0.88);
    box-shadow:
      0 20px 38px rgba(59, 31, 102, 0.14),
      inset 0 1px 0 rgba(255, 255, 255, 0.96),
      inset 0 -1px 0 rgba(169, 141, 224, 0.16);
    overflow: hidden;
    isolation: isolate;
    backdrop-filter: blur(10px) saturate(120%);
  }

  .info-card::before {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    pointer-events: none;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.88) 0%,
      rgba(255, 255, 255, 0.2) 26%,
      rgba(255, 255, 255, 0) 58%
    );
    z-index: -1;
  }

  .info-card-adorno {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: auto;
    opacity: 0.92;
    pointer-events: none;
    z-index: -1;
    transform: scale(1.2) translateY(-8%);
  }

  .info-card-content {
    padding: 0 0.85rem 0.6rem;
  }

  .info-title {
    margin: 0;
    font-family: var(--font-heading);
    font-weight: 500;
    font-size: clamp(1.35rem, 1.15rem + 0.32vw, 1.8rem);
    line-height: 1.1;
    color: var(--color-dark-purple);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .icon-card {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    margin: 0.42rem 0 1rem 0.42rem;
    position: relative;
    color: var(--color-institutional-purple);
    background:
      radial-gradient(130% 160% at 32% 28%, rgba(255, 255, 255, 0.9) 0%, rgba(169, 141, 224, 0.2) 42%, rgba(169, 141, 224, 0.3) 100%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.88), rgba(169, 141, 224, 0.25));
    border: 1px solid rgba(169, 141, 224, 0.48);
    box-shadow:
      0 8px 16px rgba(154, 112, 221, 0.14),
      0 0 0 5px rgba(183, 158, 231, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
    z-index: 2;
  }

  .icon-card svg {
    font-size: 1.08rem;
    filter: drop-shadow(0 1px 1px rgba(255, 255, 255, 0.58));
  }

  .contents-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.75rem;
    margin-top: 0.8rem;
  }

  .content-group {
    border: 1px solid rgba(255, 255, 255, 0.62);
    border-radius: 0.8rem;
    padding: 0.6rem 0.7rem;
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0.42));
    backdrop-filter: blur(8px);
    box-shadow:
      0 10px 18px rgba(59, 31, 102, 0.09),
      inset 0 1px 0 rgba(255, 255, 255, 0.75);
  }

  .content-group ul {
    margin: 0.4rem 0 0;
    padding-left: 1rem;
  }

  .content-group li {
    margin-bottom: 0.3rem;
    color: var(--color-dark-purple);
    font-family: var(--font-body);
  }

  .muted {
    opacity: 0.72;
  }

  .faq-list {
    display: grid;
    gap: 0.7rem;
    margin-top: 0.8rem;
  }

  .faq-item {
    border: 1px solid rgba(255, 255, 255, 0.62);
    border-radius: 0.8rem;
    padding: 0.7rem 0.8rem;
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0.42));
    backdrop-filter: blur(8px);
    box-shadow:
      0 10px 18px rgba(59, 31, 102, 0.09),
      inset 0 1px 0 rgba(255, 255, 255, 0.75);
  }

  .faq-item h4 {
    margin: 0;
    font-family: var(--font-heading);
    color: var(--color-dark-purple);
  }

  @media (max-width: 1180px) {
    .cards-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 900px) {
    .career-split {
      grid-template-columns: minmax(0, 1fr);
    }

    .about-media-wrap {
      border-left: 0;
      border-top: 1px solid rgba(255, 255, 255, 0.52);
      min-height: clamp(180px, 48vw, 260px);
      padding: 0.9rem 0 0 0;
    }

    .about-media {
      height: clamp(180px, 48vw, 260px);
    }

    .cards-grid,
    .contents-grid {
      grid-template-columns: minmax(0, 1fr);
    }
  }
`;
