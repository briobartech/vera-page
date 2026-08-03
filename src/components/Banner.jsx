import styled from 'styled-components';
import bannerImage from '../assets/img/banner/banner.png';

function Banner() {
    return (
        <BannerStyled>
            <section className="banner-section">
                <div className="banner-content">
                    <h1 className="banner-title">
                        Instituto de Educacion Superior
                        <br />
                        Rosario Vera Penaloza
                    </h1>
                    <h2 className="banner-subtitle">
                        Comprometidos con la educacion y el desarrollo profesional en nuestra comunidad
                    </h2>
                    <button className="banner-button">Conoce las ofertas academicas</button>
                </div>
            </section>
        </BannerStyled>
    );
}

export default Banner;

const BannerStyled = styled.section`
    width: 100%;
    margin-top: 2rem;

    .banner-section {
        position: relative;
        min-height: 440px;
        margin: 0 auto;
        border-radius: 2rem;
        overflow: hidden;
        isolation: isolate;
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        background:
            linear-gradient(102deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.88) 42%, rgba(255, 255, 255, 0.45) 62%, rgba(255, 255, 255, 0.12) 78%, rgba(255, 255, 255, 0) 100%),
            radial-gradient(120% 190% at 34% -36%, rgba(169, 141, 224, 0.2) 0%, rgba(169, 141, 224, 0.07) 34%, rgba(255, 255, 255, 0.06) 74%),
            url(${bannerImage});
        background-repeat: no-repeat;
        background-position: left top, left top, right -2% bottom 70%;
        background-size: 100% 100%, 100% 100%, 90% auto;
        border: 1px solid rgba(230, 230, 239, 0.8);
        box-shadow:
            0 28px 46px rgba(59, 31, 102, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.95),
            inset 0 -1px 0 rgba(169, 141, 224, 0.16);
        backdrop-filter: blur(8px) saturate(118%);
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
        font-weight: 700;
        line-height: 1.08;
        font-size: clamp(2rem, 1.3rem + 2.2vw, 3.8rem);
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
            0 12px 22px rgba(91, 46, 166, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.42);
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
        padding: 0.6rem 1rem 1.2rem;

        .banner-section {
            min-height: 340px;
            border-radius: 1.35rem;
            background-size: 100% 100%, 100% 100%, 84% auto;
            background-position: left top, left top, right -16% bottom -2%;
        }

        .banner-content {
            padding: 1.4rem 1rem 1.05rem;
        }

        .banner-subtitle {
            max-width: 94%;
        }

        .banner-button {
            width: 250px;
            padding: 0.85rem 1rem;
        }
    }
`;