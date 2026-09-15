import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faCircleCheck, faClock, faIdCard, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Banner from '../../components/Banner';

import useSlidingPill from '../../hooks/useSlidingPill';

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
          imagenFondoPath={`/images/banner/careers/${bannerItem.image ?? ''}`}
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
  const { itemRef, pillStyle, selectorRef } = useSlidingPill(activeIndex);

  return (
    <SectionStyled>
      <section className="career-block liquid-glass-effect">
        <h3>Informacion general</h3>

        <div ref={selectorRef} className="info-cards-mobile-selector liquid-glass" role="tablist" aria-label="Seleccionar informacion">
          <span className="info-selector-active-pill" aria-hidden="true" style={pillStyle} />
          {cards.map((card, index) => (
            <button
              ref={itemRef(index)}
              type="button"
              key={`selector-${card?.title ?? 'item'}-${index}`}
              className="info-selector-pill"
              role="tab"
              onClick={() => setActiveIndex(index)}
              aria-selected={index === activeIndex}
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
                className={`info-card liquid-glass-effect${index === activeIndex ? ' active' : ' inactive'}`}
                key={`${card?.title ?? 'item'}-${index}`}
              >
                {/* <img src={adornoImage} alt="" className="info-card-adorno" aria-hidden="true" /> */}

                <div className="icon-card" aria-hidden="true">
                  <FontAwesomeIcon icon={infoCardIconByName[card?.icon] ?? faInfoCircle} />
                </div>

                <div className="info-card-content">
                  <p className="info-title ">{card?.title ?? '-'}</p>
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
      <section className="career-block career-split liquid-glass-effect">
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
      <section className="career-block liquid-glass-effect">
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
  const { itemRef, pillStyle, selectorRef } = useSlidingPill(activeIndex);

  return (
    <SectionStyled>
      <section className="career-block liquid-glass-effect">
        <h3>{content?.title ?? 'Contenidos'}</h3>

        <div ref={selectorRef} className="contents-mobile-selector liquid-glass-effect" role="tablist" aria-label="Seleccionar año">
          <span className="contents-selector-active-pill" aria-hidden="true" style={pillStyle} />
          {groups.map((group, index) => (
            <button
              ref={itemRef(index)}
              type="button"
              key={`year-selector-${index}`}
              className="contents-selector-pill"
              role="tab"
              onClick={() => setActiveIndex(index)}
              aria-selected={index === activeIndex}
            >
              {index === activeIndex ? <span>{`Año ${index + 1}`}</span> : <span>{index + 1}</span>}
            </button>
          ))}
        </div>

        <div className="contents-grid">
          {groups.map((group, index) => (
            <div
              className={`content-group liquid-glass-effect${index === activeIndex ? ' active' : ' inactive'}`}
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
      <section className="career-block liquid-glass-effect">
        <h3>{content?.title ?? 'Galeria'}</h3>
        {images.length > 0 ? (
          <div className="gallery-grid">
            {images.map((imagePath, index) => (
              <figure className="gallery-item liquid-glass-effect" key={`gallery-${index}`}>
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
      <section className="career-block liquid-glass-effect">
        <h3>Preguntas frecuentes</h3>
        <div className="faq-list">
          {questions.map((question, index) => (
            <article className="faq-item liquid-glass-effect" key={`faq-${index}`}>
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
      <section className="career-block liquid-glass-effect">
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
  --career-title-size: clamp(1.65rem, 1.35rem + 0.8vw, 2.35rem);
  --career-card-title-size: clamp(1.05rem, 0.95rem + 0.32vw, 1.35rem);
  --career-subtitle-size: clamp(0.86rem, 0.82rem + 0.16vw, 1rem);
  --career-body-size: clamp(0.95rem, 0.9rem + 0.15vw, 1.05rem);

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
    padding: 1.45rem 1.55rem;
  }

  .career-banner h2,
  .career-block h3 {
    position: relative;
    z-index: 1;
    margin: 0;
    color: var(--color-dark-purple);
    font-family: var(--font-heading);
    font-size: var(--career-title-size);
    font-weight: 700;
    line-height: 1.08;
    letter-spacing: 0.01em;
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
    font-size: var(--career-body-size);
    font-weight: 400;
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
   
  .about-copy p {
    max-width: 66ch;
    font-size: clamp(1rem, 0.95rem + 0.2vw, 1.12rem);
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
      0 14px 28px rgba(var(--glass-shadow-rgb), 0.13),
      inset 0 1px 0 rgba(255, 255, 255, 0.36);
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    justify-items: center;
    column-gap: 2rem;
    row-gap: 1.5rem;
    margin-top: 1.1rem;
  }

  .info-card {
    width: min(100%, 280px);
    min-width: 0;
    min-height: 205px;
    position: relative;
    padding: 0.5rem 0.5rem 1rem;
    overflow: hidden;
    isolation: isolate;
    transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
  }

  .info-card:hover {
    transform: translateY(-3px);
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
    font-weight: 700;
    font-size: var(--career-card-title-size);
    line-height: 1.12;
    color: var(--color-dark-purple);
    text-transform: uppercase;
    letter-spacing: 0.02em;
    overflow-wrap: break-word;
    word-break: break-word;
    hyphens: auto;
  }

  .info-detail {
    margin: 0.3rem 0 0;
    font-family: var(--font-body);
    font-size: var(--career-subtitle-size);
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: 0.02em;
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
    padding: 0.6rem 0.7rem;
  }

  .content-group-year {
    margin: 0;
    color: var(--color-institutional-purple);
    font-family: var(--font-heading);
    font-size: var(--career-subtitle-size);
    font-weight: 700;
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.8rem;
    margin-top: 0.8rem;
  }

  .gallery-item {
    margin: 0;
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .gallery-item:hover {
    transform: translateY(-3px);
  }

  .gallery-item img {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    transition: transform 0.35s ease;
  }

  .gallery-item:hover img {
    transform: scale(1.035);
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
    font-size: var(--career-body-size);
    line-height: 1.4;
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
    padding: 0.7rem 0.8rem;
    transition: transform 0.18s ease, box-shadow 0.18s ease;
  }

  .faq-item:hover {
    transform: translateY(-2px);
  }

  .faq-item h4 {
    margin: 0;
    font-family: var(--font-heading);
    color: var(--color-dark-purple);
    font-size: var(--career-card-title-size);
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: 0.01em;
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
      position: relative;
      isolation: isolate;
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

    .info-selector-active-pill {
      position: absolute;
      z-index: 0;
      box-sizing: border-box;
      pointer-events: none;
      border: 1px solid rgba(255, 255, 255, 0.98);
      border-radius: 999px;
      background: var(--color-white);
      box-shadow: 0 5px 12px rgba(var(--glass-shadow-rgb), 0.2);
      will-change: left, top, width, height;
      transition:
        left 0.42s cubic-bezier(0.22, 1, 0.36, 1),
        top 0.42s cubic-bezier(0.22, 1, 0.36, 1),
        width 0.42s cubic-bezier(0.22, 1, 0.36, 1),
        height 0.42s cubic-bezier(0.22, 1, 0.36, 1),
        opacity 0.2s ease;
    }

    .info-selector-pill {
      flex: 0 0 auto;
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      width: 48px;
      height: 48px;
      padding: 0;
      border: 1px solid transparent;
      border-radius: 999px;
      background: transparent;
      box-shadow: none;
      backdrop-filter: none;
      -webkit-backdrop-filter: none;
      appearance: none;
      color: var(--color-institutional-purple);
      cursor: pointer;
      white-space: nowrap;
      transition: color 180ms ease;
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

    .info-selector-pill[aria-selected='true'] {
      width: clamp(120px, 42vw, 200px);
      flex: 0 0 clamp(120px, 42vw, 200px);
      min-width: 0;
      padding: 0 1rem;
      color: var(--color-institutional-purple);
    }

    .cards-grid {
      column-gap: 1.25rem;
      row-gap: 1rem;
      margin-top: 0.8rem;
    }

    .info-card.inactive {
      display: none;
    }

    .info-card.active {
      display: block;
      width: 100%;
      animation: mobile-panel-in 320ms cubic-bezier(0.22, 1, 0.36, 1);
    }

    .contents-mobile-selector {
      position: relative;
      isolation: isolate;
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

    .contents-selector-active-pill {
      position: absolute;
      z-index: 0;
      box-sizing: border-box;
      pointer-events: none;
      border: 1px solid rgba(255, 255, 255, 0.98);
      border-radius: 999px;
      background: var(--color-white);
      box-shadow: 0 5px 12px rgba(var(--glass-shadow-rgb), 0.2);
      will-change: left, top, width, height;
      transition:
        left 0.42s cubic-bezier(0.22, 1, 0.36, 1),
        top 0.42s cubic-bezier(0.22, 1, 0.36, 1),
        width 0.42s cubic-bezier(0.22, 1, 0.36, 1),
        height 0.42s cubic-bezier(0.22, 1, 0.36, 1),
        opacity 0.2s ease;
    }

    .contents-selector-pill {
      flex: 0 0 auto;
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      width: 48px;
      height: 48px;
      padding: 0;
      border: 1px solid transparent;
      border-radius: 999px;
      background: transparent;
      box-shadow: none;
      backdrop-filter: none;
      -webkit-backdrop-filter: none;
      appearance: none;
      color: var(--color-institutional-purple);
      cursor: pointer;
      white-space: nowrap;
      transition: color 180ms ease;
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

    .contents-selector-pill[aria-selected='true'] {
      width: clamp(120px, 42vw, 200px);
      flex: 0 0 clamp(120px, 42vw, 200px);
      min-width: 0;
      padding: 0 1rem;
      color: var(--color-institutional-purple);
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
      animation: mobile-panel-in 320ms cubic-bezier(0.22, 1, 0.36, 1);
    }

    .content-group-year {
      display: none;
      line-height: 1.2em;
    }
    .content-group li {
      line-height: 1.2;
    }

    @keyframes mobile-panel-in {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;
