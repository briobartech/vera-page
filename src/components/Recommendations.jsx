import { useMemo, useState } from 'react';
import styled from 'styled-components';

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
        quote: '"Siempre quise terminar mis estudios, pero la vida me llevo por otro camino. En el Vera, siendo mayor, pude hacerlo realidad y demostrarme que nunca es tarde para aprender."',
        name: 'Silvia Sosa',
        location: 'San Carlos, Mendoza',
        imagePath: '',
    },
    {
        quote: '"El ambiente es motivador y participativo. Los docentes te inspiran a seguir aprendiendo y a creer en vos mismo."',
        name: 'Luis Serrudo',
        location: 'San Carlos, Mendoza',
        imagePath: '',
    },
    {
        quote: '"Gracias al Jardin del Vera Penaloza, pude estudiar tranquila mientras mi hijo crecia en un espacio seguro y educativo."',
        name: 'Laura Micames',
        location: 'La Consulta, Mendoza',
        imagePath: '',
    },
    {
        quote: '"Trabajaba durante el dia y estudiaba de noche, en el Vera encontre apoyo y profesores que realmente entendian mi situacion."',
        name: 'Pablo Morales',
        location: 'Tunuyan, Mendoza',
        imagePath: '',
    },
];

function Recommendations() {
    return (
        <RecommendationsStyled>
            <h2>¿Que dicen nuestros estudiantes?</h2>

            <div className="recommendations-grid">
                {testimonials.map((testimonial) => (
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
                ))}
            </div>
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
        border: 1px solid rgba(231, 224, 249, 0.68);
        background-color: rgba(248, 247, 255, 0.48);
        background-image:
            radial-gradient(
                130% 160% at 50% 52%,
                rgba(var(--qa-purple-a), 0.16) 0%,
                rgba(var(--qa-purple-b), 0.1) 34%,
                rgba(var(--qa-purple-c), 0.06) 56%,
                rgba(255, 255, 255, 0.24) 100%
            ),
            linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.28) 0%,
                rgba(248, 245, 255, 0.17) 48%,
                rgba(255, 255, 255, 0.28) 100%
            );
        backdrop-filter: blur(16px) saturate(132%);
        box-shadow:
            0 14px 32px rgba(98, 63, 155, 0.14),
            inset 0 1px 0 rgba(255, 255, 255, 0.66),
            inset 0 -1px 0 rgba(203, 178, 240, 0.32);
        position: relative;
        overflow: hidden;
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
            radial-gradient(130% 180% at 38% 30%, rgba(255, 255, 255, 0.35) 0%, rgba(171, 133, 232, 0.58) 40%, rgba(110, 69, 186, 0.88) 100%);
        box-shadow:
            0 8px 14px rgba(73, 44, 128, 0.22),
            inset 0 1px 0 rgba(255, 255, 255, 0.42);
        border: 1px solid rgba(255, 255, 255, 0.55);
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
            grid-template-columns: minmax(0, 1fr);
        }

        .recommendation-card {
            min-height: 195px;
        }
    }
`;
