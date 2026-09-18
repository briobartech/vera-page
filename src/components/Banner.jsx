import styled from 'styled-components';
const bannerImage = `${import.meta.env.BASE_URL}images/testimonials/Fernando.png/images/banner/banner.png`;

function Banner({
    titulo,
    to,
    subtitulo,
    textoBoton,
    textoBoton2,
    to2,
    spanTexto,
    imagenFondoPath = '',
}) {
    const isVideoBackground = /\.(mp4|webm|ogg)(\?.*)?$/i.test(imagenFondoPath);
    const backgroundImage = !isVideoBackground && imagenFondoPath ? imagenFondoPath : bannerImage;

    const handleRedirect = (target) => {
        if (target) {
            window.location.href = target;
        }
    };

    return (
        <BannerStyled $backgroundImage={backgroundImage}>
            <section className="banner-section">
                {isVideoBackground ? (
                    <video
                        className="banner-background-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={bannerImage}
                        aria-hidden="true"
                    >
                        <source src={imagenFondoPath} />
                    </video>
                ) : null}
                <div className="banner-content liquid-glass">
                    {titulo ? (
                        <h1 className="banner-title">
                            {titulo}
                        </h1>
                    ) : null}
                    {subtitulo ? (
                        <h2 className="banner-subtitle liquid-glass">
                            {subtitulo}
                        </h2>
                    ) : null}

                    {spanTexto ? (
                        <span className="banner-span liquid-glass-effect">{spanTexto}</span>
                    ) : null}

                    {(textoBoton || textoBoton2) ? (
                        <div className="banner-actions">
                            {textoBoton ? (
                                <button
                                    className="banner-button banner-button-primary liquid-glass"
                                    onClick={() => handleRedirect(to)}
                                >
                                    {textoBoton}
                                </button>
                            ) : null}

                            {textoBoton2 ? (
                                <button
                                    className="banner-button banner-button-secondary liquid-glass-effect"
                                    onClick={() => handleRedirect(to2)}
                                >
                                    {textoBoton2}
                                </button>
                            ) : null}
                        </div>
                    ) : null}
                </div>
            </section>
        </BannerStyled>
    );
}

export default Banner;

const BannerStyled = styled.section`
    width: 100%;
    max-width: 100%;
    margin-top: 2rem;
    box-sizing: border-box;

    .banner-section {
        box-sizing: border-box;
        padding: 1rem;
        position: relative;
        min-height: 440px;
        width: 100%;
        max-width: 100%;
        margin: 0 auto;
        border-radius: 2rem;
        overflow: hidden;
        isolation: isolate;
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        background:
            linear-gradient(90deg, rgba(78, 36, 150, 0.98) 0%, rgba(91, 46, 166, 0.9) 36%, rgba(123, 78, 190, 0.68) 66%, rgba(169, 141, 224, 0.22) 100%),
            radial-gradient(120% 190% at 34% -36%, rgba(169, 141, 224, 0.46) 0%, rgba(169, 141, 224, 0.16) 34%, rgba(255, 255, 255, 0.04) 74%),
            url(${props => props.$backgroundImage});
        background-repeat: no-repeat;
        background-position: left top, left top, right center;
        background-size: cover, cover, cover;
        border: 1px solid rgba(255, 255, 255, 0.76);
        box-shadow:
            0 28px 46px rgba(var(--glass-shadow-rgb), 0.13),
            inset 0 1px 0 rgba(255, 255, 255, 0.9),
            inset 0 -1px 0 rgba(107, 76, 163, 0.16);
        backdrop-filter: blur(18px) saturate(145%);
        -webkit-backdrop-filter: blur(18px) saturate(145%);
    }

    .banner-background-video {
        position: absolute;
        inset: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .banner-section::before {
        content: '';
        position: absolute;
        inset: 1px;
        border-radius: inherit;
        pointer-events: none;
        z-index: 2;
        background:
            linear-gradient(90deg, rgba(78, 36, 150, 0.98) 0%, rgba(91, 46, 166, 0.9) 36%, rgba(123, 78, 190, 0.68) 66%, rgba(169, 141, 224, 0.22) 100%),
            linear-gradient(
                145deg,
                rgba(255, 255, 255, 0.22) 0%,
                rgba(255, 255, 255, 0.06) 42%,
                rgba(255, 255, 255, 0) 78%
            );
        opacity: 0.9;
        -webkit-mask-image: linear-gradient(90deg, #000 0%, #000 48%, rgba(0, 0, 0, 0.82) 72%, rgba(0, 0, 0, 0.38) 100%);
        mask-image: linear-gradient(90deg, #000 0%, #000 48%, rgba(0, 0, 0, 0.82) 72%, rgba(0, 0, 0, 0.38) 100%);
    }

    .banner-section::after {
        content: '';
        position: absolute;
        left: 23%;
        right: -4%;
        bottom: -14%;
        height: 54%;
        pointer-events: none;
        z-index: 3;
        border-radius: 50% 50% 0 0;
        background:
            linear-gradient(220deg, rgba(255, 255, 255, 0.42), rgba(255, 255, 255, 0.04) 52%, rgba(169, 141, 224, 0.1) 100%),
            radial-gradient(95% 120% at 0% 52%, rgba(169, 141, 224, 0.14), rgba(169, 141, 224, 0));
        filter: blur(6px);
        -webkit-mask-image: radial-gradient(ellipse at 52% 20%, #000 0%, rgba(0, 0, 0, 0.9) 58%, rgba(0, 0, 0, 0) 100%);
        mask-image: radial-gradient(ellipse at 52% 20%, #000 0%, rgba(0, 0, 0, 0.9) 58%, rgba(0, 0, 0, 0) 100%);
    }

    .banner-content {
        box-sizing: border-box;
        position: relative;
        z-index: 5;
        width: min(58%, 760px);
        padding: 3.1rem 2.2rem 1.8rem 2.6rem;
        display: flex;
        flex-direction: column;
        gap: 1.4rem;
    }

    .banner-content > * {
        position: relative;
        z-index: 1;
    }

    .banner-title {
        margin: 0;
        color: var(--color-white);
        font-family: var(--font-heading);
        font-weight: 200;
        line-height: 1.08;
        font-size: clamp(1rem, 1rem + 1.9vw, 3.5rem);
    }

    .banner-subtitle {
        margin: 0;
        max-width: 640px;
        color: var(--color-white);
        font-family: var(--font-body);
        font-weight: 500;
        line-height: 1.25;
        font-size: clamp(1.05rem, 0.9rem + 0.45vw, 1.9rem);
    }

    .banner-span {
        display: inline-flex;
        align-items: center;
        width: fit-content;
        padding: 0.5rem 0.9rem;
        border-radius: 999px;
        color: var(--color-white);
        font-family: var(--font-body);
        font-size: 0.82rem;
        font-weight: 600;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        background: rgba(255, 255, 255, 0.12);
        border: 1px solid rgba(255, 255, 255, 0.22);
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.36);
    }

    .banner-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.9rem;
        margin-top: auto;
    }

    .banner-button {
        min-width: 170px;
        width: fit-content;
        border: 0;
        border-radius: 0.9rem;
        padding: 1rem 1.25rem;
        font-family: var(--font-heading);
        font-weight: 600;
        font-size: clamp(1rem, 0.94rem + 0.2vw, 1.15rem);
        line-height: 1.1;
        cursor: pointer;
        transition: transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease;
    }

    .banner-button-primary {
        color: var(--color-white);
        background: var(--color-gradient);
        box-shadow:
            0 12px 22px rgba(var(--glass-shadow-rgb), 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 0.42);
    }

    .banner-button-secondary {
        color: var(--color-white);
        background: rgba(255, 255, 255, 0.18);
        border: 1px solid rgba(255, 255, 255, 0.3);
        box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.6),
            0 12px 22px rgba(59, 31, 102, 0.08);
        backdrop-filter: blur(12px) saturate(1.1);
        -webkit-backdrop-filter: blur(12px) saturate(1.1);
    }

    .banner-button:hover,
    .banner-button:focus-visible {
        transform: translateY(-2px);
        filter: saturate(1.12) brightness(1.06);
    }

    
    @media (max-width: 1080px) {
        .banner-section {
            min-height: 390px;
            background-position: left top, left top, right center;
        }

        .banner-content {
            width: 100%;
            padding: 2rem 1.35rem 1.35rem;
            gap: 1rem;
        }

        .banner-button {
            margin-top: 0.45rem;
        }
    }

    @media (max-width: 768px) {
        padding: 0;

        .banner-section {
            min-height: 320px;
            border-radius: 1.35rem;
            background-position: center, center, center;
        }

        .banner-content {
            width: 100%;
            padding: 1.25rem 1rem 1rem;
            box-sizing: border-box;
        }

        .banner-title {
            font-size: clamp(1.4rem, 1.1rem + 2vw, 2.1rem);
        }

        .banner-subtitle {
            max-width: 100%;
            font-size: 0.98rem;
        }

        .banner-actions {
            flex-direction: column;
            align-items: flex-start;
        }

        .banner-button {
            width: min(100%, 250px);
            padding: 0.85rem 1rem;
        }
    }
`;