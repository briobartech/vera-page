import styled from 'styled-components';
import bannerImage from '../assets/img/banner/banner.png';

function Banner({ titulo = '',
    subtitulo = '',
    subititile,
    textoBoton = 'Inscribite ahora',
    imagenFondoPath = '', }) {
    return (
        <BannerStyled>
            <section className="banner-section">
                <div className="banner-content">
                    <h1 className="banner-title">
                       {titulo}
                    </h1>
                    <h2 className="banner-subtitle">
                        {subtitulo}
                    </h2>
                    <button className="banner-button">{textoBoton}</button>
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
            linear-gradient(102deg, rgba(247, 244, 255, 0.78) 0%, rgba(247, 244, 255, 0.6) 42%, rgba(247, 244, 255, 0.22) 62%, rgba(255, 255, 255, 0.06) 78%, rgba(255, 255, 255, 0) 100%),
            radial-gradient(120% 190% at 34% -36%, rgba(169, 141, 224, 0.32) 0%, rgba(169, 141, 224, 0.1) 34%, rgba(255, 255, 255, 0.04) 74%),
            url(${bannerImage});
        background-repeat: no-repeat;
        background-position: left top, left top, right -2% bottom 70%;
        background-size: 100% 100%, 100% 100%, 90% auto;
        border: 1px solid rgba(255, 255, 255, 0.76);
        box-shadow:
            0 28px 46px rgba(var(--glass-shadow-rgb), 0.13),
            inset 0 1px 0 rgba(255, 255, 255, 0.9),
            inset 0 -1px 0 rgba(107, 76, 163, 0.16);
        backdrop-filter: blur(18px) saturate(145%);
        -webkit-backdrop-filter: blur(18px) saturate(145%);
    }

    .banner-section::before {
        content: '';
        position: absolute;
        inset: 1px;
        border-radius: inherit;
        pointer-events: none;
        z-index: 4;
        background:
            linear-gradient(165deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.16) 30%, rgba(255, 255, 255, 0) 60%),
            radial-gradient(80% 46% at 24% 110%, rgba(255, 255, 255, 0.78) 0%, rgba(255, 255, 255, 0) 70%);
        mix-blend-mode: screen;
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
            linear-gradient(162deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.07) 52%, rgba(169, 141, 224, 0.13) 100%),
            radial-gradient(95% 120% at 0% 52%, rgba(169, 141, 224, 0.16), rgba(169, 141, 224, 0));
        filter: blur(0.2px);
    }

    .banner-content {
        position: relative;
        z-index: 5;
        width: min(58%, 760px);
        padding: 3.1rem 2.2rem 1.8rem 2.6rem;
        display: flex;
        flex-direction: column;
        gap: 1.4rem;
    }

    .banner-title {
        margin: 0;
        color: var(--color-institutional-purple);
        font-family: var(--font-heading);
        font-weight: 200;
        line-height: 1.08;
        font-size: clamp(1rem, 1rem + 1.9vw, 3.5rem);
    }

    .banner-subtitle {
        margin: 0;
        max-width: 640px;
        color: var(--color-dark-purple);
        font-family: var(--font-body);
        font-weight: 500;
        line-height: 1.25;
        font-size: clamp(1.05rem, 0.9rem + 0.45vw, 1.9rem);
    }

    .banner-button {
        margin-top: auto;
        width: min(100%, 320px);
        border: 0;
        border-radius: 0.9rem;
        padding: 1rem 1.25rem;
        color: var(--color-white);
        background: var(--color-gradient);
        font-family: var(--font-heading);
        font-weight: 600;
        font-size: clamp(1rem, 0.94rem + 0.2vw, 1.15rem);
        line-height: 1.1;
        cursor: pointer;
        box-shadow:
            0 12px 22px rgba(var(--glass-shadow-rgb), 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 0.42);
        transition: transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease;
    }

    .banner-button:hover,
    .banner-button:focus-visible {
        transform: translateY(-2px);
        filter: saturate(1.12) brightness(1.06);
        box-shadow:
            0 16px 28px rgba(var(--glass-shadow-rgb), 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.6),
            inset 0 -1px 0 rgba(64, 31, 125, 0.18);
    }

    
    @media (max-width: 1080px) {
        .banner-section {
            min-height: 390px;
            background-size: 100% 100%, 100% 100%, 72% auto;
            background-position: left top, left top, right -5% bottom -2%;
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
            background-size: cover, cover, 95% auto;
            background-position: center, center , 100% 200%;
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

        .banner-button {
            width: min(100%, 250px);
            padding: 0.85rem 1rem;
        }
    }
`;