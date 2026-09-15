import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import icons from '../data/icons.js';
const newsBannerBackground = '/images/news-banner.jpg';

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
  icono = icons.fingerPrintIcon,
  titulo = 'Tecnicatura Superior en Redes y Ciberseguridad',
  subtitulo = '',
  subititile,
  textoBoton = 'Nueva carrera ¡Conocela!',
  imagenFondoPath = '',
  dominantTone = '129, 37, 214',
}) {
  const bannerRef = useRef(null);
  const backgroundRef = useRef(null);
  const animationFrameRef = useRef(null);
  const targetBackgroundYRef = useRef(18);
  const currentBackgroundYRef = useRef(18);
  const backgroundVelocityRef = useRef(0);

  useEffect(() => {
    const updateTargetBackgroundPosition = () => {
      const bannerElement = bannerRef.current;

      if (!bannerElement) {
        return;
      }

      const rect = bannerElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const start = viewportHeight;
      const end = -rect.height;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));

      targetBackgroundYRef.current = 10 + progress * 78;
    };

    const animateBackgroundPosition = () => {
      const currentY = currentBackgroundYRef.current;
      const targetY = targetBackgroundYRef.current;
      const displacement = targetY - currentY;
      const nextVelocity = (backgroundVelocityRef.current + displacement * 0.085) * 0.78;
      const nextY = currentY + nextVelocity;

      backgroundVelocityRef.current = nextVelocity;
      currentBackgroundYRef.current = nextY;
      backgroundRef.current?.style.setProperty('--banner-bg-y', `${nextY}%`);

      if (Math.abs(targetY - nextY) > 0.01 || Math.abs(nextVelocity) > 0.01) {
        animationFrameRef.current = window.requestAnimationFrame(animateBackgroundPosition);
      } else {
        currentBackgroundYRef.current = targetY;
        backgroundVelocityRef.current = 0;
        backgroundRef.current?.style.setProperty('--banner-bg-y', `${targetY}%`);
        animationFrameRef.current = null;
      }
    };

    const requestBackgroundUpdate = () => {
      updateTargetBackgroundPosition();

      if (animationFrameRef.current === null) {
        animationFrameRef.current = window.requestAnimationFrame(animateBackgroundPosition);
      }
    };

    requestBackgroundUpdate();
    window.addEventListener('scroll', requestBackgroundUpdate, { passive: true });
    window.addEventListener('resize', requestBackgroundUpdate);

    return () => {
      window.removeEventListener('scroll', requestBackgroundUpdate);
      window.removeEventListener('resize', requestBackgroundUpdate);

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const subtitleText = `${subtitulo || subititile || ''}`.trim();
  const resolvedBackgroundImage = resolveBackgroundImagePath(imagenFondoPath) || newsBannerBackground;

  return <NewsBannerStyled className="liquid-glass-effect" ref={bannerRef} style={{ '--news-banner-tone': dominantTone }}>
    <div
      ref={backgroundRef}
      className="news-banner-background"
      style={{ '--banner-bg-y': '18%', '--news-banner-bg': `url(${resolvedBackgroundImage})` }}
      aria-hidden="true"
    />
    <div className="news-banner-container liquid-glass-effect"><div className="news-banner-icon-shell" aria-hidden="true">
      <img src={icono} alt="" className="news-banner-icon" />
    </div>
      <h2>{titulo}</h2>
      {subtitleText ? <p className="news-banner-subtitle">{subtitleText}</p> : null}
      <button className="button-news  liquid-glass-effect" type="button">{textoBoton}</button></div>
  </NewsBannerStyled>;
}

export default NewsBanner;

const NewsBannerStyled = styled.section`
.news-banner-container{
position: absolute;
inset: 0;
height: 100%;
width: 100%;
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: column;
padding: 2.3rem 1.5rem;
border-radius: inherit;
}
  position: relative;
  overflow: hidden;
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.15rem;
  min-height: 320px;
  max-height: 420px;
  box-sizing: border-box;
  border-radius: 2rem;
  background: transparent;
  color: var(--color-white);
  text-align: center;
  > * {
    position: relative;
    z-index: 1;
  }

  .news-banner-background {
    position: absolute;
    inset: 0;
    z-index: 0;
    background-image:
      linear-gradient(
        180deg,
        rgba(var(--news-banner-tone), 0.28),
        rgba(var(--news-banner-tone), 0.14) 42%,
        rgba(var(--news-banner-tone), 0.34) 100%
      ),
      var(--news-banner-bg);
    background-size: cover;
    background-position: center var(--banner-bg-y, 18%);
    background-repeat: no-repeat;
    will-change: background-position;
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
      0 12px 22px rgba(var(--news-banner-tone), 0.22),
      0 0 14px rgba(var(--news-banner-tone), 0.18),
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
      0 0 8px rgba(var(--news-banner-tone), 0.62),
      0 0 18px rgba(var(--news-banner-tone), 0.48),
      0 0 32px rgba(var(--news-banner-tone), 0.32);
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
      0 0 8px rgba(var(--news-banner-tone), 0.38),
      0 0 16px rgba(var(--news-banner-tone), 0.22);
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
    
    color: var(--color-white);
    font-size: 0.95rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    text-shadow:
      0 0 8px rgba(var(--news-banner-tone), 0.24),
      0 0 16px rgba(var(--news-banner-tone), 0.14);
    box-shadow:
      0 14px 28px rgba(var(--news-banner-tone), 0.2),
      0 0 16px rgba(var(--news-banner-tone), 0.14),
      inset 0 1px 0 rgba(255, 255, 255, 0.92),
      inset 0 -1px 0 rgba(var(--news-banner-tone), 0.22);
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
    color: rgba(var(--news-banner-tone), 1);
    box-shadow:
      0 10px 20px rgba(var(--news-banner-tone), 0.24),
      inset 0 1px 0 rgba(255, 255, 255, 0.96),
      inset 0 -1px 0 rgba(var(--news-banner-tone), 0.24);
    transform: translateY(-1px);
  }

  .button-news:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.78);
    outline-offset: 2px;
  }
`;