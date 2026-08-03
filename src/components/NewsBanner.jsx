import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import fingerPrintIcon from '../assets/img/icons/finger-print.svg';
import newsBannerBackground from '../assets/img/news-banner.jpg';

const localBackgroundImages = import.meta.glob('../assets/img/**/*.{png,jpg,jpeg,webp,avif,svg}', {
  eager: true,
  import: 'default',
});

function resolveBackgroundImagePath(imagePath) {
  if (!imagePath) {
    return null;
  }

  if (imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('/')) {
    return imagePath;
  }

  const normalizedPath = imagePath.replace(/^\.?\/?/, '');
  return localBackgroundImages[`../assets/img/${normalizedPath}`] ?? null;
}

function NewsBanner({
  icono = fingerPrintIcon,
  titulo = 'Tecnicatura Superior en Redes y Ciberseguridad',
  subtitulo = '',
  subititile,
  textoBoton = 'Nueva carrera ¡Conocela!',
  imagenFondoPath = '',
}) {
    const bannerRef = useRef(null);
    const [backgroundY, setBackgroundY] = useState(18);

    useEffect(() => {
        const updateBackgroundPosition = () => {
            const bannerElement = bannerRef.current;

            if (!bannerElement) {
                return;
            }

            const rect = bannerElement.getBoundingClientRect();
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            const start = viewportHeight;
            const end = -rect.height;
            const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));

            setBackgroundY(10 + progress * 78);
        };

        updateBackgroundPosition();
        window.addEventListener('scroll', updateBackgroundPosition, { passive: true });
        window.addEventListener('resize', updateBackgroundPosition);

        return () => {
            window.removeEventListener('scroll', updateBackgroundPosition);
            window.removeEventListener('resize', updateBackgroundPosition);
        };
    }, []);

    const subtitleText = `${subtitulo || subititile || ''}`.trim();
    const resolvedBackgroundImage = resolveBackgroundImagePath(imagenFondoPath) || newsBannerBackground;

    return <NewsBannerStyled ref={bannerRef} style={{ '--banner-bg-y': `${backgroundY}%`, '--news-banner-bg': `url(${resolvedBackgroundImage})` }}>
      <div className="news-banner-icon-shell" aria-hidden="true">
        <img src={icono} alt="" className="news-banner-icon" />
      </div>
      <h2>{titulo}</h2>
      {subtitleText ? <p className="news-banner-subtitle">{subtitleText}</p> : null}
      <button className="button-news" type="button">{textoBoton}</button>
    </NewsBannerStyled>;
}

export default NewsBanner;

const NewsBannerStyled = styled.section`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.15rem;
  min-height: 320px;
  max-height: 420px;
  padding: 2.3rem 1.5rem;
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.22);
  background-image:
    linear-gradient(180deg, rgba(129, 37, 214, 0.46), rgba(171, 72, 235, 0.42), rgba(84, 18, 146, 0.62)),
    var(--news-banner-bg);
  background-size: cover;
  background-position: center var(--banner-bg-y, 18%);
  background-repeat: no-repeat;
  box-shadow:
    0 24px 42px rgba(36, 20, 61, 0.22),
    inset 0 1px 0 rgba(255, 255, 255, 0.28);
  backdrop-filter: blur(10px) saturate(120%);
  color: var(--color-white);
  text-align: center;
    max-height: 420px;
    min-height: 320px;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(165deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.09) 18%, rgba(255, 255, 255, 0) 42%),
      radial-gradient(92% 68% at 50% 104%, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.08) 34%, rgba(255, 255, 255, 0) 72%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%);
    pointer-events: none;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    left: -10%;
    right: -10%;
    bottom: -18%;
    height: 62%;
    background:
      linear-gradient(92deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.06) 22%, rgba(255, 255, 255, 0.16) 50%, rgba(255, 255, 255, 0.06) 78%, rgba(255, 255, 255, 0) 100%),
      radial-gradient(80% 78% at 50% 100%, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.04) 48%, rgba(255, 255, 255, 0) 80%);
    filter: blur(18px);
    opacity: 0.88;
    pointer-events: none;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  .news-banner-icon-shell {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.88);
    background: radial-gradient(130% 130% at 50% 35%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.08) 55%, rgba(255, 255, 255, 0.03) 100%);
    box-shadow:
      0 12px 20px rgba(0, 0, 0, 0.16),
      inset 0 1px 0 rgba(255, 255, 255, 0.4);
  }

  .news-banner-icon {
    width: 28px;
    height: 28px;
    display: block;
    object-fit: contain;
    filter: brightness(0) invert(1);
  }

  h2 {
    margin: 0;
    font-family: var(--font-heading);
    font-weight: 200;
    font-size: clamp(1rem, 0.9rem + 0.9vw, 1.5rem);
    line-height: 1.05;
    letter-spacing: 0.01em;
    color: var(--color-white);
    text-transform: uppercase;
    max-width: 48ch;
    text-shadow:
        0 0 8px rgba(91,46,166,.5),
        0 0 18px rgba(91,46,166,.4),
        0 0 32px rgba(91,46,166,.3);
  }

  .news-banner-subtitle {
    margin: -0.25rem 0 0;
    font-family: var(--font-body);
    font-size: clamp(0.86rem, 0.8rem + 0.22vw, 1rem);
    line-height: 1.35;
    letter-spacing: 0.01em;
    color: rgba(255, 255, 255, 0.95);
    max-width: 62ch;
    text-shadow:
      0 0 8px rgba(91, 46, 166, 0.28),
      0 0 16px rgba(91, 46, 166, 0.16);
  }

  .button-news {
    position: relative;
    isolation: isolate;
    overflow: hidden;
    width: min(100%, 420px);
    margin-top: 0.35rem;
    padding: 0.95rem 1.25rem;
    border: 1px solid rgba(230, 230, 239, 0.75);
    border-radius: 16px;
    background:
      radial-gradient(130% 180% at 50% 50%, rgba(169, 141, 224, 0.24) 0%, rgba(169, 141, 224, 0.11) 35%, rgba(255, 255, 255, 0.95) 78%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.84));
    color: var(--color-dark-purple);
    font-size: 0.95rem;
    font-weight: 400;
    letter-spacing: 0.02em;
    text-shadow:
      0 0 8px rgba(91, 46, 166, 0.18),
      0 0 16px rgba(91, 46, 166, 0.1);
    box-shadow:
      0 12px 26px rgba(59, 31, 102, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.92),
      inset 0 -1px 0 rgba(169, 141, 224, 0.16);
    backdrop-filter: blur(8px) saturate(120%);
    cursor: pointer;
    transition: transform 0.18s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease;
  }

  .button-news::before {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    pointer-events: none;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.85) 0%,
      rgba(255, 255, 255, 0.28) 26%,
      rgba(255, 255, 255, 0) 58%
    );
    z-index: -1;
  }

  .button-news:hover,
  .button-news:focus-visible {
    color: var(--color-institutional-purple);
    box-shadow:
      0 8px 16px rgba(91, 46, 166, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.92);
    transform: translateY(-1px);
  }

  .button-news:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.78);
    outline-offset: 2px;
  }
`;