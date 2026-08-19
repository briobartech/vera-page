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

function getContactLink(contact) {
  if (!contact) return null;
  if (contact.email) return { href: `mailto:${contact.email}`, label: contact.email };
  if (contact.phone) return { href: `tel:${contact.phone}`, label: contact.phone };
  if (contact.link || contact.url) {
    const href = contact.link ?? contact.url;
    return { href, label: contact.label ?? href };
  }
  return null;
}

function getContactSource(card) {
  const content = card?.content;
  if (content && (content.email || content.phone || content.link || content.url)) {
    return content;
  }
  return card?.contact ?? null;
}

function getExtraDetails(card) {
  const content = card?.content;
  const details = [];

  if (content?.name) details.push(content.name);
  if (card?.horario) details.push(card.horario);
  const schedule = [content?.days, content?.time].filter(Boolean).join(' ');
  if (schedule) details.push(schedule);

  return details;
}

function InfoCardsSection({ section }) {
  const cards = Array.isArray(section?.content) ? section.content : [];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SectionStyled>
      <section className="career-block">
        <h3>Informacion general</h3>

        <div className="info-cards-mobile-selector" role="tablist" aria-label="Seleccionar informacion">
          {cards.map((card, index) => (
            <button
              type="button"
              key={`selector-${card?.title ?? 'item'}-${index}`}
              className={`info-selector-pill${index === activeIndex ? ' active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-pressed={index === activeIndex}
            >
              <FontAwesomeIcon icon={infoCardIconByName[card?.icon] ?? faInfoCircle} />
              {index === activeIndex ? <span>{card?.title ?? '-'}</span> : null}
            </button>
          ))}
        </div>

        <div className="cards-grid">
          {cards.map((card, index) => {
            const contactLink = getContactLink(getContactSource(card));
            const extraDetails = getExtraDetails(card);

            return (
              <article
                className={`info-card${index === activeIndex ? ' active' : ' inactive'}`}
                key={`${card?.title ?? 'item'}-${index}`}
              >
                <img src={adornoImage} alt="" className="info-card-adorno" aria-hidden="true" />

                <div className="icon-card" aria-hidden="true">
                  <FontAwesomeIcon icon={infoCardIconByName[card?.icon] ?? faInfoCircle} />
                </div>

                <div className="info-card-content">
                  <p className="info-title">{card?.title ?? '-'}</p>
                  <div className={`info-description-wrap${contactLink ? ' has-contact' : ''}`}>
                    <p className="info-description">
                      <span className="info-description-text">{card?.description ?? '-'}</span>
                      {contactLink ? (
                        <span className="info-description-contact-text">{contactLink.label}</span>
                      ) : null}
                    </p>
                    {contactLink ? (
                      <a href={contactLink.href} className="contact-bubble">
                        Comunicarse
                      </a>
                    ) : null}
                  </div>
                  {extraDetails.map((detail, detailIndex) => (
                    <p className="info-detail" key={`detail-${index}-${detailIndex}`}>
                      {detail}
                    </p>
                  ))}
                </div>
              </article>
            );
          })}
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
        <div className="profile-copy">
          <h3>{content?.title ?? 'Perfil'}</h3>
          <p>{content?.description ?? ''}</p>
        </div>
      </section>
    </SectionStyled>
  );
}

function ContentsSection({ section }) {
  const content = section?.content ?? {};
  const groups = Array.isArray(content?.description) ? content.description : [];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SectionStyled>
      <section className="career-block">
        <h3>{content?.title ?? 'Contenidos'}</h3>

        <div className="contents-mobile-selector" role="tablist" aria-label="Seleccionar año">
          {groups.map((group, index) => (
            <button
              type="button"
              key={`year-selector-${index}`}
              className={`contents-selector-pill${index === activeIndex ? ' active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-pressed={index === activeIndex}
            >
              {index === activeIndex ? <span>{`Año ${index + 1}`}</span> : <span>{index + 1}</span>}
            </button>
          ))}
        </div>

        <div className="contents-grid">
          {groups.map((group, index) => (
            <div
              className={`content-group${index === activeIndex ? ' active' : ' inactive'}`}
              key={`group-${index}`}
            >
              <p className="content-group-year">Año {index + 1}</p>
              {Array.isArray(group) && group.length > 0 ? (
                <ul>
                  {group.map((item, itemIndex) => (
                    <li key={`item-${index}-${itemIndex}`}>{"• " + String(item)}</li>
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

function GallerySection({ section }) {
  const content = section?.content ?? {};
  const images = Array.isArray(content?.description) ? content.description : [];

  return (
    <SectionStyled>
      <section className="career-block">
        <h3>{content?.title ?? 'Galeria'}</h3>
        {images.length > 0 ? (
          <div className="gallery-grid">
            {images.map((imagePath, index) => (
              <figure className="gallery-item" key={`gallery-${index}`}>
                <img
                  src={String(imagePath ?? '')}
                  alt={`${content?.title ?? 'Galeria'} ${index + 1}`}
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        ) : (
          <p className="muted">Sin imagenes cargadas</p>
        )}
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
  gallery: GallerySection,
  faq: FaqSection,
};

export function getSectionComponentByType(type) {
  const normalizedType = String(type ?? '').trim().toLowerCase();

  return SECTION_COMPONENT_BY_TYPE[normalizedType] ?? FallbackSection;
}

const SectionStyled = styled.div`
  width: 100%;
  min-width: 0;
  box-sizing: border-box;

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
    height: max-content;
  }

  .about-copy {
    position: relative;
    z-index: 1;
    padding: 1.5rem 1.4rem;
  }

  .profile-copy {
    position: relative;
    z-index: 1;
    padding: 1.5rem 1.4rem;
  }
   
  .about-copy h3, .career-block h3 {
  font-family: var(--font-heading);
    font-size: clamp(1.7rem, 1.3rem + 1vw, 2.4rem);
  }

  .about-copy p {
  font-family: var(--font-body);
    max-width: 66ch;
    font-size: 1.2rem;
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
    width: min(100%, 280px);
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
    min-width: 0;
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
    overflow-wrap: break-word;
    word-break: break-word;
    hyphens: auto;
  }

  .info-detail {
    margin: 0.3rem 0 0;
    font-family: var(--font-body);
    font-size: 0.85rem;
    font-weight: 500;
    line-height: 1.3;
    color: var(--color-institutional-purple);
  }

  .info-description-wrap.has-contact {
    position: relative;
    padding-bottom: 1.8rem;
  }

  .info-description-wrap.has-contact .info-description {
    position: relative;
    overflow: hidden;
  }

  .info-description-text,
  .info-description-contact-text {
    transition: opacity 0.18s ease, transform 0.18s ease;
  }

  .info-description-contact-text {
    position: absolute;
    inset: 0;
    opacity: 0;
    transform: translateY(4px);
    color: var(--color-institutional-purple);
    font-weight: 600;
  }

  .info-description-wrap.has-contact:hover .info-description-text {
    opacity: 0;
    transform: translateY(-4px);
  }

  .info-description-wrap.has-contact:hover .info-description-contact-text {
    opacity: 1;
    transform: translateY(0);
  }

  .contact-bubble {
    position: absolute;
    left: 0;
    top: 100%;
    z-index: 3;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.4rem;
    padding: 0.4rem 0.9rem;
    max-width: 100%;
    border-radius: 999px;
    background: var(--color-gradient);
    color: #fff;
    font-family: var(--font-body);
    font-size: 0.8rem;
    font-weight: 600;
    text-decoration: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    box-shadow:
      0 10px 20px rgba(91, 46, 166, 0.32),
      inset 0 1px 0 rgba(255, 255, 255, 0.42);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateY(-4px);
    transition: opacity 0.18s ease, transform 0.18s ease, visibility 0.18s ease;
  }

  .info-description-wrap.has-contact:hover .contact-bubble,
  .contact-bubble:focus-visible {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateY(0);
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

  .contents-mobile-selector {
    display: none;
  }

  .contents-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.75rem;
    margin-top: 0.8rem;
    min-width: 0;
    max-width: 100%;
  }

  .content-group {
    box-sizing: border-box;
    min-width: 0;
    border: 1px solid rgba(255, 255, 255, 0.62);
    border-radius: 0.8rem;
    padding: 0.6rem 0.7rem;
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0.42));
    backdrop-filter: blur(8px);
    box-shadow:
      0 10px 18px rgba(59, 31, 102, 0.09),
      inset 0 1px 0 rgba(255, 255, 255, 0.75);
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.8rem;
    margin-top: 0.8rem;
  }

  .gallery-item {
    margin: 0;
    border-radius: 1rem;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.62);
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0.42));
    backdrop-filter: blur(8px);
    box-shadow:
      0 10px 18px rgba(59, 31, 102, 0.09),
      inset 0 1px 0 rgba(255, 255, 255, 0.75);
  }

  .gallery-item img {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
  }

  .content-group ul {
    margin: 0.4rem 0 0;
    padding-left: 1rem;
    max-width: 100%;
  }

  .content-group li {
    margin-bottom: 0.3rem;
    color: var(--color-dark-purple);
    font-family: var(--font-body);
    overflow-wrap: break-word;
    word-break: break-word;
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
    font-size: 1.2rem;
    font-weight: 700;
  }

  .info-cards-mobile-selector {
    display: none;
  }

  @media (max-width: 1180px) {
    .cards-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 900px) {
  width: 100%;

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

    .gallery-grid {
      grid-template-columns: minmax(0, 1fr);
    }

    .info-description-wrap.has-contact .info-description {
      overflow: visible;
    }

    .info-description-wrap.has-contact .info-description-text {
      display: none;
    }

    .info-description-wrap.has-contact .info-description-contact-text {
      position: static;
      opacity: 1;
      transform: none;
    }

    .info-description-wrap.has-contact .contact-bubble {
      position: static;
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      transform: none;
      margin-top: 0.5rem;
    }

    .info-description-wrap.has-contact {
      padding-bottom: 0;
    }

    .info-cards-mobile-selector {
      display: flex;
      gap: 0.5rem;
      margin: 0.8rem -1.25rem 0;
      padding: 1.25rem 1.25rem;
      overflow-x: auto;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    .info-cards-mobile-selector::-webkit-scrollbar {
      display: none;
    }

    .info-selector-pill {
      flex: 0 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      width: 48px;
      height: 48px;
      padding: 0;
      border: none;
      border-radius: 999px;
      background: rgba(169, 141, 224, 0.16);
      color: var(--color-institutional-purple);
      cursor: pointer;
      white-space: nowrap;
      box-shadow: -8px 8px 8px -4px rgba(0, 0, 0, 0.25);
      transition: background-color 220ms ease, color 220ms ease, padding 220ms ease;
    }

    .info-selector-pill svg {
      flex: 0 0 auto;
      font-size: 1.05rem;
    }

    .info-selector-pill span {
      font-family: var(--font-heading);
      font-size: 0.82rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.02em;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-width: 0;
    }

    .info-selector-pill.active {
      width: clamp(120px, 42vw, 200px);
      flex: 0 0 clamp(120px, 42vw, 200px);
      min-width: 0;
      padding: 0 1rem;
      background: var(--color-gradient);
      color: #fff;
    }

    .cards-grid {
      margin-top: 0.6rem;
    }

    .info-card.inactive {
      display: none;
    }

    .info-card.active {
      display: block;
      width: 100%;
    }

    .contents-mobile-selector {
      display: flex;
      gap: 0.5rem;
      margin: 0.8rem -1.25rem 0;
      padding: 1.25rem 1.25rem;
      overflow-x: auto;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    .contents-mobile-selector::-webkit-scrollbar {
      display: none;
    }

    .contents-selector-pill {
      flex: 0 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      width: 48px;
      height: 48px;
      padding: 0;
      border: none;
      border-radius: 999px;
      background: rgba(169, 141, 224, 0.16);
      color: var(--color-institutional-purple);
      cursor: pointer;
      white-space: nowrap;
      transition: background-color 220ms ease, color 220ms ease, padding 220ms ease;
      box-shadow: -8px 8px 8px -4px rgba(0, 0, 0, 0.25);
    }

    .contents-selector-pill span {
      font-family: var(--font-heading);
      font-size: 0.82rem;
      font-weight: 600;
      text-transform: uppercase;
      
      letter-spacing: 0.02em;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-width: 0;
    }

    .contents-selector-pill.active {
      width: clamp(120px, 42vw, 200px);
      flex: 0 0 clamp(120px, 42vw, 200px);
      min-width: 0;
      padding: 0 1rem;
      background: var(--color-gradient);
      color: #fff;
    }

    .contents-grid {
      margin-top: 0.6rem;
    }

    .content-group.inactive {
      display: none;
    }

    .content-group.active {
      display: block;
      width: 100%;
    }

    .content-group-year {
      display: none;
      line-height: 1.2em;
    }
      .content-group li{
      
      line-height: 1.2;}
  }
      .about-media-wrap{
      display: none;}
`;
