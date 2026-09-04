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
    
    margin: 1rem 0 1rem;
    padding: 0.75rem 0.5rem 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    .directivos-figure {
        width: min(100%, 640px);
        height: 520px;
        display: grid;
        place-items: center;
        position: relative;
        z-index: 1;
        overflow: hidden;
    }

    .directivos-image {
        width: min(100%, 520px);
        height: auto;
        max-height: 480;
        
        object-fit: contain;
        display: block;
        position: relative;
        z-index: 1;
        align-self: center;
    }

    .directivos-card {
        width: min(100%, 760px);
        margin-top: -72px;
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
        border: 1px solid rgba(255, 255, 255, 0.76);
        background:
            radial-gradient(125% 160% at 16% 0%, rgba(255, 255, 255, 0.38) 0%, rgba(255, 255, 255, 0) 48%),
            radial-gradient(110% 145% at 90% 100%, rgba(169, 141, 224, 0.22) 0%, rgba(169, 141, 224, 0) 64%),
            rgba(245, 242, 255, 0.28);
        backdrop-filter: blur(18px) saturate(145%);
        -webkit-backdrop-filter: blur(18px) saturate(145%);
        box-shadow:
            0 18px 38px rgba(var(--glass-shadow-rgb), 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.9),
            inset 0 -1px 0 rgba(107, 76, 163, 0.16);
    }

    .directivos-card::before {
        content: '';
        position: absolute;
        inset: 1px;
        border-radius: inherit;
        pointer-events: none;
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.3) 0%,
            rgba(255, 255, 255, 0.08) 24%,
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
            margin-top: -44px;
            border-radius: 1.1rem;
            padding: 0.88rem 0.85rem 0.74rem;
        }
    }
`;