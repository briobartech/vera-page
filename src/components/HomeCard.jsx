import styled from 'styled-components';
import {
        faArrowUpRightFromSquare,
        faBookOpen,
        faCalendarDays,
        faLaptop,
        faNewspaper,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bannerImage from '../assets/img/banner/banner.png';
import adornoImage from '../assets/img/adorno.png';

function HomeCard() {
    return (
        <HomeCardStyled>
            <section className="home-card">
                <img src={adornoImage} alt="" className="home-card-adorno" aria-hidden="true" />
                               {/*  <span className="top-accent" aria-hidden="true" /> */}

                                <div className="icon-card" aria-hidden="true">
                                        <FontAwesomeIcon icon={faNewspaper} />
                </div>

                                <div className="home-card-content">
                                        <h3 className="home-card-title">Ultimas noticias</h3>
                                        <p className="home-card-description">
                                                Mantente informado con las ultimas novedades y eventos del instituto.
                                        </p>

                                        <figure className="home-card-media">
                                                <img src={bannerImage} alt="Novedades institucionales" />
                                        </figure>

                                        <div className="home-card-actions">
                                                <button className="home-card-button" type="button">
                                                        ➝Leer mas
                                                </button>
                                        </div>

                                        {/* <ul className="home-card-shortcuts" aria-label="Accesos rapidos">
                                                <li>
                                                        <a href="#">
                                                                <span className="shortcut-icon">
                                                                        <FontAwesomeIcon icon={faBookOpen} />
                                                                </span>
                                                                <span>Materiales de estudio</span>
                                                        </a>
                                                </li>
                                                <li>
                                                        <a href="#">
                                                                <span className="shortcut-icon">
                                                                        <FontAwesomeIcon icon={faLaptop} />
                                                                </span>
                                                                <span>Actividades Online</span>
                                                        </a>
                                                </li>
                                                <li>
                                                        <a href="#">
                                                                <span className="shortcut-icon is-green">
                                                                        <FontAwesomeIcon icon={faCalendarDays} />
                                                                </span>
                                                                <span>Calendario academico</span>
                                                        </a>
                                                </li>
                                        </ul> */}
                                </div>
            </section>
        </HomeCardStyled>
    );
}
export default HomeCard;

const HomeCardStyled = styled.section`
    width: 100%;
    display: block;
    
    
    .home-card {
        width: 100%;
        max-width: 320px;
        margin: 0 auto;
        position: relative;
        border-radius: 2.1rem;
        padding: 0.5rem 0.5rem 1rem;
        background:
            radial-gradient(140% 185% at 54% 7%, rgba(169, 141, 224, 0.2) 0%, rgba(169, 141, 224, 0.07) 34%, rgba(255, 255, 255, 0.95) 75%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.88));
        border: 1px solid rgba(230, 230, 239, 0.88);
        box-shadow:
            0 20px 38px rgba(59, 31, 102, 0.14),
            inset 0 1px 0 rgba(255, 255, 255, 0.96),
            inset 0 -1px 0 rgba(169, 141, 224, 0.16);
        overflow: hidden;
        isolation: isolate;
        backdrop-filter: blur(10px) saturate(120%);
    }

    .home-card-adorno {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: auto;
        opacity: 0.92;
        pointer-events: none;
        z-index: -1;
        transform: scale(1.2) translateY(-8%);
    }

    .top-accent {
        position: absolute;
        left: 0.9rem;
        right: 0.9rem;
        top: 0;
        height: 1rem;
        border-radius: 0 0 1.6rem 1.6rem;
        background: linear-gradient(90deg, #5b2ea6, #a98de0);
        z-index: 2;
    }

    .home-card::before {
        content: '';
        position: absolute;
        inset: 1px;
        border-radius: inherit;
        pointer-events: none;
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.88) 0%,
            rgba(255, 255, 255, 0.2) 26%,
            rgba(255, 255, 255, 0) 58%
        );
        z-index: -1;
    }

    .icon-card {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        margin: 0.42rem 0 1rem 0.42rem;
        position: relative;
        color: var(--color-institutional-purple);
        background:
            radial-gradient(130% 160% at 32% 28%, rgba(255, 255, 255, 0.9) 0%, rgba(169, 141, 224, 0.2) 42%, rgba(169, 141, 224, 0.3) 100%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.88), rgba(169, 141, 224, 0.25));
        border: 1px solid rgba(169, 141, 224, 0.48);
        box-shadow:
            0 8px 16px rgba(154, 112, 221, 0.14),
            0 0 0 5px rgba(183, 158, 231, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        z-index: 2;
    }

    .icon-card svg {
        font-size: 1.08rem;
        filter: drop-shadow(0 1px 1px rgba(255, 255, 255, 0.58));
    }

    .home-card-content {
        padding: 0 0.85rem 0.6rem;
    }

    .home-card-title {
        margin: 0;
        font-family: var(--font-heading);
        font-weight: 500;
        font-size: clamp(1.5rem, 1.3rem + 0.38vw, 2rem);
        line-height: 1.1;
        color: var(--color-dark-purple);
    }

    .home-card-description {
        margin: 1.15rem 0 1.45rem;
        font-family: var(--font-body);
        font-size: 1.08rem;
        line-height: 1.35;
        font-weight: 500;
        color: var(--color-dark-purple);
        max-width: 95%;
    }

    .home-card-media {
        margin: 0;
        width: 100%;
        border-radius: 1.2rem;
        overflow: hidden;
        background: #f2ecff;
        /* box-shadow: 0 14px 24px rgba(59, 31, 102, 0.12); */
    }

    .home-card-media img {
        width: 100%;
        height: 190px;
        object-fit: cover;
        display: block;
    }

    .home-card-actions {
        display: flex;
        align-items: center;
        gap: 0.9rem;
        margin-top: 1.35rem;
    }

    .home-card-button {
        flex: 1;
        border: 0;
        border-radius: 0.9rem;
        padding: 0.95rem 0.9rem;
        color: var(--color-white);
        background: var(--color-gradient);
        font-family: var(--font-heading);
        font-size: 1.95rem;
        font-size: clamp(1rem, 0.9rem + 0.25vw, 1.12rem);
        font-weight: 700;
        line-height: 1.05;
        cursor: pointer;
        box-shadow:
            0 10px 20px rgba(91, 46, 166, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.35);
    }

    .home-card-link {
        width: 42px;
        height: 42px;
        flex: 0 0 auto;
        border-radius: 0.8rem;
        display: grid;
        place-items: center;
        color: var(--color-institutional-purple);
        text-decoration: none;
        background:
            radial-gradient(130% 180% at 50% 36%, rgba(169, 141, 224, 0.32) 0%, rgba(169, 141, 224, 0.12) 48%, rgba(255, 255, 255, 0.86) 100%);
        box-shadow:
            0 7px 14px rgba(59, 31, 102, 0.14),
            inset 0 1px 0 rgba(255, 255, 255, 0.95);
    }

    .home-card-shortcuts {
        margin: 1.45rem 0 0;
        padding: 0;
        list-style: none;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 0.58rem;
    }

    .home-card-shortcuts a {
        text-decoration: none;
        color: var(--color-dark-purple);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.38rem;
        text-align: center;
        font-family: var(--font-body);
        font-size: 0.67rem;
        font-weight: 500;
        line-height: 1.06;
    }

    .shortcut-icon {
        width: 33px;
        height: 33px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        color: var(--color-institutional-purple);
        background: radial-gradient(130% 180% at 50% 36%, rgba(169, 141, 224, 0.3) 0%, rgba(169, 141, 224, 0.12) 48%, rgba(255, 255, 255, 0.9) 100%);
        box-shadow:
            0 6px 12px rgba(59, 31, 102, 0.13),
            inset 0 1px 0 rgba(255, 255, 255, 0.94);
    }

    .shortcut-icon.is-green {
        color: #00a67e;
    }

    @media (max-width: 480px) {
        .home-card {
            border-radius: 1.75rem;
        }

        .home-card-description {
            font-size: 1rem;
        }

        .home-card-media img {
            height: 178px;
        }
    }
`;