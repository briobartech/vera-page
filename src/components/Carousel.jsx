import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
const carouselImageA = `${import.meta.env.BASE_URL}images/carousel/2.jpg`;
const carouselImageB = `${import.meta.env.BASE_URL}images/carousel/3.png`;
const carouselImageC = `${import.meta.env.BASE_URL}images/news-banner.jpg`;

const slides = [
        {
                id: 'slide-1',
                image: carouselImageA,
        },
        {
                id: 'slide-2',
                image: carouselImageB,
        },
        {
                id: 'slide-3',
                image: carouselImageC,
        },
];

const Carousel = () => {
        const [activeIndex, setActiveIndex] = useState(0);
        const [isPaused, setIsPaused] = useState(false);

        const goPrev = () => {
                setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
        };

        const goNext = () => {
                setActiveIndex((prev) => (prev + 1) % slides.length);
        };

        useEffect(() => {
                if (isPaused || slides.length < 2) return undefined;
                const timer = setInterval(goNext, 6000);
                return () => clearInterval(timer);
        }, [isPaused, activeIndex]);

        const activeSlide = slides[activeIndex];

        return (
                <CarouselStyled
                        style={{ '--carousel-bg': `url(${activeSlide.image})` }}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                >
                <div className="carousel-shell">
                    <button
                        type="button"
                        className="carousel-nav nav-prev liquid-glass-effect"
                        onClick={goPrev}
                        aria-label="Imagen anterior"
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>

                    <button
                        type="button"
                        className="carousel-nav nav-next liquid-glass-effect"
                        onClick={goNext}
                        aria-label="Siguiente imagen"
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>

                    <div className="carousel-dots" role="tablist" aria-label="Selector de imagen">
                        {slides.map((slide, index) => (
                            <button
                                key={slide.id}
                                type="button"
                                className={`dot liquid-glass-effect ${index === activeIndex ? 'is-active' : ''}`}
                                onClick={() => setActiveIndex(index)}
                                aria-label={`Ver imagen ${index + 1}`}
                                aria-current={index === activeIndex ? 'true' : 'false'}
                            />
                        ))}
                    </div>
                        </div>
                </CarouselStyled>
        );
};

export default Carousel;

const CarouselStyled = styled.section`
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    height: 400px;
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
    align-items: center;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    min-height: 360px;
    max-height: 100%;
    padding: 2.3rem 4.4rem 3.7rem;
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
    text-align: center;
    }

    .carousel-shell::before {
        content: '';
        position: absolute;
        inset: 0;
        background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.36) 0%, rgba(255, 255, 255, 0.14) 16%, rgba(255, 255, 255, 0) 40%),
            radial-gradient(120% 82% at 50% 112%, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.08) 36%, rgba(255, 255, 255, 0) 78%),
            linear-gradient(104deg, rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0.14) 49%, rgba(255, 255, 255, 0) 74%);
        pointer-events: none;
        z-index: 0;
    }

    .carousel-shell::after {
        content: '';
        position: absolute;
        left: -10%;
        right: -10%;
        bottom: -18%;
        height: 62%;
        background:
            linear-gradient(92deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 22%, rgba(255, 255, 255, 0.22) 50%, rgba(255, 255, 255, 0.1) 78%, rgba(255, 255, 255, 0) 100%),
            radial-gradient(80% 78% at 50% 100%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 48%, rgba(255, 255, 255, 0) 80%);
        filter: blur(16px);
        opacity: 0.94;
        pointer-events: none;
        z-index: 0;
    }

    .carousel-nav,
    .carousel-dots {
        position: relative;
        z-index: 1;
    }

    .carousel-nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 48px;
        height: 48px;
        isolation: isolate;
        border-radius: 999px !important;
        color: var(--color-white);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: transform 0.18s ease, box-shadow 0.2s ease;
    }

    .carousel-nav:hover,
    .carousel-nav:focus-visible {
        transform: translateY(-50%) scale(1.06);
    }

    .carousel-nav svg {
        width: 17px;
        height: 17px;
    }

    .nav-prev {
        left: 1.15rem;
    }

    .nav-next {
        right: 1.15rem;
    }

    .carousel-dots {
        position: absolute;
        left: 50%;
        bottom: 1.15rem;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 0.55rem;
    }

    .dot {
        width: 10px;
        height: 10px;
        border-radius: 999px !important;
        cursor: pointer;
        transition: width 0.22s ease;
    }

    .dot.is-active {
        width: 28px;
    }

    @media (max-width: 860px) {
        .carousel-shell {
            padding: 2.1rem 3.2rem 3.4rem;
        }

        .carousel-nav {
            width: 42px;
            height: 42px;
            font-size: 1.65rem;
        }

        .nav-prev {
            left: 0.75rem;
        }

        .nav-next {
            right: 0.75rem;
        }
    }

    @media (max-width: 600px) {
        padding: 0.75rem;

        .carousel-shell {
            min-height: 290px;
            padding: 1.8rem 1rem 3.2rem;
        }

        .carousel-nav {
            top: auto;
            bottom: 0.9rem;
            transform: none;
            width: 36px;
            height: 36px;
            font-size: 1.4rem;
        }

        .nav-prev {
            left: 0.9rem;
        }

        .nav-next {
            right: 0.9rem;
        }

        .carousel-dots {
            bottom: 1.3rem;
        }
    }
`;