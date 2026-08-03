import styled from 'styled-components';
import directivosImage from '../assets/img/directivos.png';

function Administrators() {
    return (
        <AdministratorsStyled>
            <div className="directivos-figure" aria-hidden="true">
                <img src={directivosImage} alt="Equipo directivo" className="directivos-image" />
            </div>

            <div className="directivos-card">
                <h2>"Aprender es un proceso que se hace en comunidad"</h2>
                <p>Equipo Directivo</p>
            </div>
        </AdministratorsStyled>
    );
}

export default Administrators;

const AdministratorsStyled = styled.section`
    --qa-purple-a: 174, 102, 220;
    --qa-purple-b: 148, 78, 198;
    --qa-purple-c: 126, 62, 176;

    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    
    margin: 2rem 0 1rem;
    padding: 0.75rem 0.5rem 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    .directivos-figure {
        width: min(100%, 640px);
        height: 270px;
        display: grid;
        place-items: center;
        position: relative;
        z-index: 1;
    }

    .directivos-image {
        width: min(100%, 520px);
        height: auto;
        object-fit: contain;
        display: block;
        position: relative;
        z-index: 1;
    }

    .directivos-card {
        width: min(100%, 760px);
        margin-top: 64px;
        position: relative;
        z-index: 3;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 92px;
        border-radius: 1.35rem;
        padding: 1rem 1.15rem 0.9rem;
        text-align: center;
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
    }

    .directivos-card::before {
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

    h2 {
        margin: 0;
        font-family: var(--font-heading);
        font-size: clamp(1.05rem, 0.98rem + 0.65vw, 1.58rem);
        font-weight: 700;
        line-height: 1.15;
        color: #5c35b4;
    }

    p {
        margin: 0.7rem 0 0;
        font-family: var(--font-body);
        font-size: clamp(0.88rem, 0.82rem + 0.2vw, 0.98rem);
        font-weight: 500;
        color: #6f51b9;
    }

    @media (max-width: 820px) {
        .directivos-figure {
            height: 230px;
        }

        .directivos-image {
            width: min(100%, 430px);
        }
    }

    @media (max-width: 560px) {
        margin: 1.4rem 0 0.8rem;
        padding: 0.4rem 0 0.9rem;

        .directivos-figure {
            height: 198px;
        }

        .directivos-image {
            width: min(100%, 335px);
        }

        .directivos-card {
            width: min(100%, 94%);
            margin-top: 2px;
            border-radius: 1.1rem;
            padding: 0.88rem 0.85rem 0.74rem;
        }
    }
`;