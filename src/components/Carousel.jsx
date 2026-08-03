import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import carouselImageA from '../assets/img/carousel/2.jpg';
import carouselImageB from '../assets/img/carousel/3.png';
import carouselImageC from '../assets/img/news-banner.jpg';

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

        const goPrev = () => {
                setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
        };

        const goNext = () => {
                setActiveIndex((prev) => (prev + 1) % slides.length);
        };

        const activeSlide = slides[activeIndex];

        return (
                <CarouselStyled style={{ '--carousel-bg': `url(${activeSlide.image})` }}>
                <div className="carousel-shell">
                    <button
                        type="button"
                        className="carousel-nav nav-prev"
                        onClick={goPrev}
                        aria-label="Imagen anterior"
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>

                    <button
                        type="button"
                        className="carousel-nav nav-next"
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
                                className={`dot ${index === activeIndex ? 'is-active' : ''}`}
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
        0 14px 30px rgba(91, 46, 166, 0.15),
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
        0 26px 54px rgba(26, 16, 47, 0.28),
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
        border-radius: 999px;
        border: 1px solid rgba(255, 255, 255, 0.64);
        background:
            radial-gradient(130% 180% at 50% 36%, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0.16) 50%, rgba(255, 255, 255, 0.1) 100%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.34), rgba(255, 255, 255, 0.14));
        color: var(--color-white);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        backdrop-filter: blur(8px) saturate(125%);
        box-shadow:
            0 14px 26px rgba(19, 12, 38, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.65),
            inset 0 -1px 0 rgba(255, 255, 255, 0.2);
        transition: transform 0.18s ease, box-shadow 0.2s ease, background 0.2s ease;
    }

    .carousel-nav::before {
        content: '';
        position: absolute;
        inset: 1px;
        border-radius: inherit;
        pointer-events: none;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.36) 0%, rgba(255, 255, 255, 0) 58%);
        z-index: -1;
    }

    .carousel-nav:hover,
    .carousel-nav:focus-visible {
        transform: translateY(-50%) scale(1.04);
        box-shadow:
            0 18px 28px rgba(19, 12, 38, 0.34),
            inset 0 1px 0 rgba(255, 255, 255, 0.72),
            inset 0 -1px 0 rgba(255, 255, 255, 0.24);
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
        border-radius: 999px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        cursor: pointer;
        background: rgba(255, 255, 255, 0.28);
        backdrop-filter: blur(4px) saturate(120%);
        box-shadow:
            0 3px 8px rgba(16, 10, 31, 0.22),
            inset 0 1px 1px rgba(255, 255, 255, 0.55);
    }

    .dot.is-active {
        width: 28px;
        border-color: rgba(255, 255, 255, 0.82);
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.8));
        box-shadow:
            0 0 12px rgba(255, 255, 255, 0.5),
            0 3px 10px rgba(16, 10, 31, 0.26),
            inset 0 1px 1px rgba(255, 255, 255, 0.95);
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