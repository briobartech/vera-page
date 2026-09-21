import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { fetchNewsList } from '../services/newsApi';
import images from '../data/images.js';

function resolveImagePath(image) {
    if (!image) return images.logoVera;
    if (/^(https?:)?\//.test(image)) return image;
    return `${import.meta.env.BASE_URL}images/${image}`;
}

function getTimestamp(news) {
    const parsed = Date.parse(news.date);
    return Number.isNaN(parsed) ? null : parsed;
}

function getLatestNews(newsMap, limit = 3) {
    const entries = Object.entries(newsMap ?? {}).filter(([, news]) => news.visible !== false);

    return entries
        .sort(([, newsA], [, newsB]) => {
            const timestampA = getTimestamp(newsA);
            const timestampB = getTimestamp(newsB);
            if (timestampA === null && timestampB === null) return 0;
            if (timestampA === null) return 1;
            if (timestampB === null) return -1;
            return timestampB - timestampA;
        })
        .slice(0, limit);
}

function NewsCarousel() {
    const [slides, setSlides] = useState(null);
    const [loadError, setLoadError] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        let isActive = true;

        fetchNewsList()
            .then((data) => {
                if (isActive) setSlides(getLatestNews(data));
            })
            .catch((error) => {
                if (isActive) setLoadError(error.message);
            });

        return () => {
            isActive = false;
        };
    }, []);

    const slideCount = slides?.length ?? 0;

    useEffect(() => {
        if (isPaused || slideCount < 2) return undefined;
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % slideCount);
        }, 6000);
        return () => clearInterval(timer);
    }, [isPaused, slideCount, activeIndex]);

    if (loadError || (slides && slides.length === 0)) return null;
    if (!slides) return null;

    const goPrev = () => {
        setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goNext = () => {
        setActiveIndex((prev) => (prev + 1) % slides.length);
    };

    const [activeId, activeNews] = slides[activeIndex];
    const backgroundImage = resolveImagePath(activeNews.thumbnail);

    return (
        <NewsCarouselStyled
            style={{ '--carousel-bg': `url(${backgroundImage})` }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="carousel-shell">
                <div className="slide-content liquid-glass">
                    {activeNews.categoria && <span className="slide-category">{activeNews.categoria}</span>}
                    <h3>{activeNews.title}</h3>
                    {activeNews.subtitle && <p>{activeNews.subtitle}</p>}
                    <Link to={`/novedades/${activeId}`} className="slide-link">
                        <span>Leer más</span>
                        <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
                    </Link>
                </div>
            </div>

            {slides.length > 1 && (
                <div className="carousel-controls">
                    <button type="button" className="carousel-nav nav-prev liquid-glass-effect" onClick={goPrev} aria-label="Novedad anterior">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>

                    <div className="carousel-dots" role="tablist" aria-label="Selector de novedad">
                        {slides.map(([id], index) => (
                            <button
                                key={id}
                                type="button"
                                className={`dot liquid-glass-effect ${index === activeIndex ? 'is-active' : ''}`}
                                onClick={() => setActiveIndex(index)}
                                aria-label={`Ver novedad ${index + 1}`}
                                aria-current={index === activeIndex ? 'true' : 'false'}
                            />
                        ))}
                    </div>

                    <button type="button" className="carousel-nav nav-next liquid-glass-effect" onClick={goNext} aria-label="Siguiente novedad">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            )}
            <Link to={`/novedades/`} className="slide-link">
                        <span>Ver todas las novedades</span>
                        <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
                    </Link>
        </NewsCarouselStyled>
    );
}

export default NewsCarousel;

const NewsCarouselStyled = styled.section`
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    height: auto;
    padding: 1rem;
    margin: 2rem 0;
    border-radius: 1.7rem;
    background:
        radial-gradient(120% 160% at 50% 45%, rgba(169, 141, 224, 0.2) 0%, rgba(169, 141, 224, 0.08) 38%, rgba(255, 255, 255, 0.95) 78%),
        linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.86));
    border: 1px solid rgba(230, 230, 239, 0.76);
    box-shadow:
        0 18px 36px rgba(var(--glass-shadow-rgb), 0.12),
        inset 0 1px 0 rgba(255, 255, 255, 0.95),
        inset 0 -1px 0 rgba(169, 141, 224, 0.16);
    backdrop-filter: blur(10px) saturate(120%);

    .carousel-shell {
        position: relative;
        isolation: isolate;
        overflow: hidden;
        display: grid;
        align-items: end;
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
        min-height: 360px;
        max-height: 100%;
        padding: 2.3rem 2.4rem 2.4rem;
        border-radius: 2rem;
        border: 1px solid rgba(255, 255, 255, 0.36);
        background-image: var(--carousel-bg);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        box-shadow:
            0 26px 54px rgba(var(--glass-shadow-rgb), 0.16),
            0 10px 24px rgba(255, 255, 255, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.54),
            inset 0 -1px 0 rgba(255, 255, 255, 0.18);
        backdrop-filter: blur(14px) saturate(130%);
        color: var(--color-white);
        text-align: left;
    }

    .carousel-shell::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(20, 10, 40, 0) 30%, rgba(20, 10, 40, 0.72) 100%);
        pointer-events: none;
        z-index: 0;
    }

    .slide-content {
        position: relative;
        z-index: 1;
        display: grid;
        align-content: start;
        gap: 0.5rem;
        width: 640px;
        max-width: 100%;
        height: 270px;
        box-sizing: border-box;
        padding: 1.5rem 1.7rem;
        margin-left: 1rem;
        overflow: hidden;
        
    }

    .slide-category {
        justify-self: start;
        padding: 0.4rem 0.8rem;
        border-radius: 999px;
        background: var(--color-institutional-purple);
        color: var(--color-white);
        font-family: var(--font-body);
        font-size: 0.72rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.04em;
    }

    .slide-content h3 {
        margin: 0;
        color: var(--color-white);
        font-family: var(--font-heading);
        font-size: clamp(1.2rem, 1rem + 1vw, 1.9rem);
        line-height: 1.15;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .slide-content p {
        margin: 0;
        max-width: 52ch;
        color: var(--color-white);
        font-family: var(--font-body);
        font-size: 0.92rem;
        line-height: 1.4;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .slide-link {
        justify-self: start;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 0.4rem;
        padding: 0.6rem 1rem;
        border-radius: 999px;
        background: var(--color-white);
        color: var(--color-institutional-purple);
        font-family: var(--font-heading);
        font-size: 0.82rem;
        font-weight: 700;
        text-decoration: none;
    }

    .carousel-controls {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin-top: 1rem;
    }

    .carousel-nav {
        width: 44px;
        height: 44px;
        flex: 0 0 auto;
        isolation: isolate;
        border-radius: 999px !important;
        background: rgba(127, 70, 219, 0.14) !important;
        color: var(--color-institutional-purple);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: transform 0.18s ease, background 0.18s ease;
    }

    .carousel-nav:hover,
    .carousel-nav:focus-visible {
        background: rgba(127, 70, 219, 0.24) !important;
        transform: scale(1.06);
    }

    .carousel-nav svg {
        width: 17px;
        height: 17px;
    }

    .carousel-dots {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.55rem;
    }

    .dot {
        width: 10px;
        height: 10px;
        border-radius: 999px !important;
        background: rgba(127, 70, 219, 0.22) !important;
        cursor: pointer;
        transition: width 0.22s ease, background 0.22s ease;
    }

    .dot.is-active {
        width: 28px;
        background: var(--color-institutional-purple) !important;
    }

    @media (max-width: 860px) {
        .carousel-shell {
            padding: 2.1rem 1.8rem 2.2rem;
        }

        .slide-content {
            width: 100%;
            height: 230px;
            margin-left: 0.6rem;
            padding: 1.2rem 1.3rem;
        }

        .carousel-nav {
            width: 40px;
            height: 40px;
        }
    }

    @media (max-width: 600px) {
        padding: 0.75rem;

        .carousel-shell {
            min-height: 290px;
            padding: 1.8rem 1rem 1.6rem;
        }

        .slide-content {
            width: 100%;
            height: auto;
            max-height: 190px;
            margin-left: 0;
            padding: 1rem 1.1rem;
            gap: 0.35rem;
        }

        .slide-content p {
            -webkit-line-clamp: 1;
        }

        .carousel-nav {
            width: 36px;
            height: 36px;
        }
    }

    @media (max-width: 420px) {
        .slide-content {
            max-height: 170px;
            padding: 0.85rem 0.9rem;
        }

        .slide-link {
            padding: 0.5rem 0.85rem;
            font-size: 0.76rem;
        }
    }
`;
