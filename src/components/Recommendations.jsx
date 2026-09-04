import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import dulce from '../assets/img/testimonials/Dulce.png';
import jaquelina from '../assets/img/testimonials/Jaquelina.png';
import lihuen from '../assets/img/testimonials/Lihuen.png';
import fernando from '../assets/img/testimonials/Fernando.png';

const localImages = import.meta.glob('../assets/img/**/*.{png,jpg,jpeg,webp,avif,svg}', {
    eager: true,
    import: 'default',
});

function resolveImagePath(imagePath) {
    if (!imagePath) {
        return null;
    }

    if (imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('/')) {
        return imagePath;
    }

    const normalizedPath = imagePath.replace(/^\.?\/?/, '');
    return localImages[`../assets/img/${normalizedPath}`] ?? null;
}

function getInitialsFromName(name = '') {
    const parts = name.trim().split(/\s+/).filter(Boolean);

    if (parts.length === 0) {
        return '??';
    }

    if (parts.length === 1) {
        return parts[0].slice(0, 2).toUpperCase();
    }

    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function Avatar({ name, imagePath, initials }) {
    const src = useMemo(() => resolveImagePath(imagePath), [imagePath]);
    const [hasError, setHasError] = useState(false);
    const fallbackInitials = initials || getInitialsFromName(name);

    if (!src || hasError) {
        return <span className="avatar" aria-hidden="true">{fallbackInitials}</span>;
    }

    return (
        <span className="avatar avatar-image-wrap" aria-hidden="true">
            <img
                src={src}
                alt=""
                className="avatar-image"
                onError={() => setHasError(true)}
            />
        </span>
    );
}

const testimonials = [
    {
        quote: '“Los docentes del Vera están pendientes del estudiante, sus necesidades y su formación. Son profesionales de gran nivel que saben acompañar en el trayecto”.',
        name: 'Jaquelina Videla',
        location: 'San Carlos, Mendoza',
        imagePath: jaquelina,
    },
    {
        quote: '“En el Vera hay calidad humana, con docentes que están atentos a cada estudiante. La institución mantiene buenas actitudes que generan un sentido de pertenencia y contención”.',
        name: 'Dulce Bocia',
        location: 'San Carlos, Mendoza',
        imagePath: dulce,
    },
    {
        quote: '“La cercanía y la calidez son un punto a favor que no hay en otros lugares. Hay acompañamiento, contención e interés para que podamos progresar. Si surge un inconveniente, se busca la manera de solucionarlo”.',
        name: 'Lihuen Cabello',
        location: 'La Consulta, Mendoza',
        imagePath: lihuen,
    },
    {
        quote: '“Hay flexibilidad para las personas que trabajamos; cuando no podemos cursar, los docentes nos acompañan facilitando el proceso para poder seguir. El acompañamiento y las salidas educativas son para destacar”.',
        name: 'Fernando Olmedo',
        location: 'Tunuyan, Mendoza',
        imagePath: fernando,
    },
];

function Recommendations() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 980px)');

        const handleChange = () => setIsMobileView(mediaQuery.matches);
        handleChange();

        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    useEffect(() => {
        if (!isMobileView) {
            return undefined;
        }

        const intervalId = window.setInterval(() => {
            setActiveIndex((currentIndex) => (currentIndex + 1) % testimonials.length);
        }, 5000);

        return () => window.clearInterval(intervalId);
    }, [isMobileView]);

    const activeTestimonial = testimonials[activeIndex];

    return (
        <RecommendationsStyled>
            <h2>¿Que dicen nuestros estudiantes?</h2>

            <div className={`recommendations-grid${isMobileView ? ' is-mobile-carousel' : ''}`}>
                {isMobileView ? (
                    <article className="recommendation-card active" key={activeTestimonial.name}>
                        <p className="quote">{activeTestimonial.quote}</p>

                        <div className="author-row">
                            <Avatar
                                name={activeTestimonial.name}
                                imagePath={activeTestimonial.imagePath}
                                initials={activeTestimonial.initials}
                            />
                            <div className="author-info">
                                <strong>{activeTestimonial.name}</strong>
                                <span>{activeTestimonial.location}</span>
                            </div>
                        </div>
                    </article>
                ) : (
                    testimonials.map((testimonial) => (
                        <article className="recommendation-card" key={testimonial.name}>
                            <p className="quote">{testimonial.quote}</p>

                            <div className="author-row">
                                <Avatar
                                    name={testimonial.name}
                                    imagePath={testimonial.imagePath}
                                    initials={testimonial.initials}
                                />
                                <div className="author-info">
                                    <strong>{testimonial.name}</strong>
                                    <span>{testimonial.location}</span>
                                </div>
                            </div>
                        </article>
                    ))
                )}
            </div>

            {isMobileView && (
                <div className="carousel-dots" aria-label="Selector de testimonios">
                    {testimonials.map((testimonial, index) => (
                        <button
                            key={testimonial.name}
                            type="button"
                            className={`carousel-dot${index === activeIndex ? ' active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Ver testimonio ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </RecommendationsStyled>
    );
}

export default Recommendations;

const RecommendationsStyled = styled.section`
    --qa-purple-a: 174, 102, 220;
    --qa-purple-b: 148, 78, 198;
    --qa-purple-c: 126, 62, 176;

    width: 100%;
    padding: 1rem 0 1.6rem;

    h2 {
        margin: 0 0 1.5rem;
        text-align: center;
        font-family: var(--font-heading);
        font-size: clamp(1.7rem, 1.4rem + 0.8vw, 2.45rem);
        color: var(--color-institutional-purple);
        line-height: 1.1;
    }

    .recommendations-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1.2rem;
    }

    .recommendation-card {
        min-height: 210px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 1.25rem;
        border-radius: 1.35rem;
        padding: 1.35rem 1.25rem 1.15rem;
        border: 1px solid rgba(255, 255, 255, 0.76);
        background:
            radial-gradient(125% 160% at 16% 0%, rgba(255, 255, 255, 0.72) 0%, rgba(255, 255, 255, 0) 48%),
            radial-gradient(110% 145% at 90% 100%, rgba(169, 141, 224, 0.34) 0%, rgba(169, 141, 224, 0) 64%),
            rgba(245, 242, 255, 0.58);
        backdrop-filter: blur(18px) saturate(145%);
        -webkit-backdrop-filter: blur(18px) saturate(145%);
        box-shadow:
            0 18px 38px rgba(var(--glass-shadow-rgb), 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.9),
            inset 0 -1px 0 rgba(107, 76, 163, 0.16);
        position: relative;
        overflow: hidden;
        transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease;
    }

    .recommendation-card::before {
        content: '';
        position: absolute;
        inset: 1px;
        border-radius: inherit;
        pointer-events: none;
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.4) 0%,
            rgba(255, 255, 255, 0.12) 24%,
            rgba(255, 255, 255, 0) 62%
        );
    }

    .recommendation-card:hover {
        transform: translateY(-3px);
        border-color: rgba(255, 255, 255, 0.92);
        filter: saturate(1.08) brightness(1.03);
        box-shadow:
            0 22px 42px rgba(var(--glass-shadow-rgb), 0.16),
            inset 0 1px 0 rgba(255, 255, 255, 0.96),
            inset 0 -1px 0 rgba(107, 76, 163, 0.18);
    }

    .carousel-dots {
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        margin-top: 0.95rem;
    }

    .carousel-dot {
        width: 0.7rem;
        height: 0.7rem;
        border: none;
        border-radius: 999px;
        background-color: rgba(92, 53, 180, 0.28);
        padding: 0;
        cursor: pointer;
        transition: transform 180ms ease, background-color 180ms ease;
    }

    .carousel-dot:hover,
    .carousel-dot:focus-visible {
        transform: scale(1.08);
        background-color: rgba(92, 53, 180, 0.6);
        outline: none;
    }

    .carousel-dot.active {
        background-color: var(--color-institutional-purple);
        transform: scale(1.12);
    }

    .quote {
        margin: 0;
        font-family: var(--font-heading);
        font-size: clamp(1.04rem, 0.95rem + 0.28vw, 1.38rem);
        line-height: 1.45;
        font-weight: 600;
        color: #5c35b4;
        position: relative;
        z-index: 1;
    }

    .author-row {
        display: flex;
        align-items: center;
        gap: 0.85rem;
        position: relative;
        z-index: 1;
    }

    .avatar {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        font-family: var(--font-heading);
        font-weight: 700;
        font-size: 0.92rem;
        color: #fefeff;
        background:
            radial-gradient(130% 180% at 38% 30%, rgba(255, 255, 255, 0.7) 0%, rgba(171, 133, 232, 0.42) 46%, rgba(110, 69, 186, 0.68) 100%);
        box-shadow:
            0 10px 20px rgba(var(--glass-shadow-rgb), 0.16),
            inset 0 1px 0 rgba(255, 255, 255, 0.7);
        border: 1px solid rgba(255, 255, 255, 0.72);
    }

    .author-info {
        display: flex;
        flex-direction: column;
        gap: 0.1rem;
        color: #5c35b4;
    }

    .author-info strong {
        font-family: var(--font-heading);
        font-size: 1.35rem;
        font-size: clamp(1rem, 0.92rem + 0.28vw, 1.15rem);
        line-height: 1.12;
    }

    .author-info span {
        font-family: var(--font-body);
        font-size: clamp(0.84rem, 0.78rem + 0.15vw, 0.92rem);
        color: #7152b8;
    }

    .avatar-image-wrap {
        padding: 0;
        overflow: hidden;
    }

    .avatar-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    @media (max-width: 980px) {
        .recommendations-grid {
            display: block;
        }

        .recommendations-grid.is-mobile-carousel {
            display: block;
        }

        .recommendation-card {
            min-height: 195px;
        }
    }
`;
