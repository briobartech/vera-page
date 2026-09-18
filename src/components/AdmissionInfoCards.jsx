import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBookOpen,
    faCheck,
    faDownload,
    faFileLines,
} from '@fortawesome/free-solid-svg-icons';

function AdmissionInfoCards({ requirements = [], materials = [] }) {
    return (
        <AdmissionInfoCardsStyled>
            <section className="info-card liquid-glass-effect">
                <div className="info-card-heading">
                    <div className="heading-icon" aria-hidden="true">
                        <FontAwesomeIcon icon={faFileLines} />
                    </div>
                    <h2>Documentación necesaria</h2>
                </div>

                <p className="info-card-intro">
                    Tené lista la siguiente documentación para completar tu ingreso.
                </p>

                <ul className="requirements-list">
                    {requirements.map((requirement) => (
                        <li key={requirement}>
                            <span className="check-icon" aria-hidden="true">
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span>{requirement}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="info-card liquid-glass-effect">
                <div className="info-card-heading">
                    <div className="heading-icon" aria-hidden="true">
                        <FontAwesomeIcon icon={faBookOpen} />
                    </div>
                    <h2>Material de ingreso</h2>
                </div>

                <p className="info-card-intro">
                    Preparáte con el material de estudio sugerido por el instituto.
                </p>

                <div className="materials-list">
                    {materials.map(({ title, label, href }) => (
                        <a
                            className="material-item"
                            href={href || '#'}
                            key={title}
                            onClick={(event) => {
                                if (!href) event.preventDefault();
                            }}
                        >
                            <span className="material-icon" aria-hidden="true">
                                <FontAwesomeIcon icon={faFileLines} />
                            </span>
                            <span className="material-copy">
                                <strong>{title}</strong>
                                <small>{label || 'Archivo PDF'}</small>
                            </span>
                            <FontAwesomeIcon className="download-icon" icon={faDownload} aria-hidden="true" />
                        </a>
                    ))}
                </div>
            </section>
        </AdmissionInfoCardsStyled>
    );
}

export default AdmissionInfoCards;

const AdmissionInfoCardsStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    width: 100%;
    margin-top: 2rem;

    .info-card {
        min-width: 0;
        min-height: 270px;
        padding: 1.1rem 1rem 1rem;
        box-sizing: border-box;
        border-radius: 1.25rem;
    }

    .info-card-heading {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .heading-icon,
    .material-icon,
    .check-icon {
        display: grid;
        flex: 0 0 auto;
        place-items: center;
        color: var(--color-institutional-purple);
        background:
            radial-gradient(130% 160% at 32% 28%, rgba(255, 255, 255, 0.9) 0%, rgba(169, 141, 224, 0.25) 52%, rgba(169, 141, 224, 0.1) 100%),
            rgba(255, 255, 255, 0.38);
        border: 1px solid rgba(255, 255, 255, 0.7);
        box-shadow:
            0 6px 14px rgba(154, 112, 221, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.68);
    }

    .heading-icon {
        width: 42px;
        height: 42px;
        border-radius: 0.8rem;
        font-size: 1.35rem;
    }

    h2 {
        margin: 0;
        color: var(--color-dark-purple);
        font-family: var(--font-heading);
        font-size: clamp(1rem, 0.9rem + 0.3vw, 1.25rem);
        line-height: 1.15;
    }

    .info-card-intro {
        max-width: 42ch;
        margin: 0.65rem 0 0.9rem;
        color: var(--color-text);
        font-family: var(--font-body);
        font-size: clamp(0.82rem, 0.78rem + 0.14vw, 0.95rem);
        line-height: 1.3;
    }

    .requirements-list,
    .materials-list {
        display: grid;
        gap: 0.55rem;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .requirements-list li {
        display: flex;
        align-items: center;
        gap: 0.65rem;
        color: var(--color-dark-purple);
        font-family: var(--font-body);
        font-size: clamp(0.82rem, 0.78rem + 0.14vw, 0.95rem);
        line-height: 1.2;
    }

    .check-icon {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        color: var(--color-white);
        background: var(--color-institutional-purple);
        border: 0;
        box-shadow: 0 4px 10px rgba(91, 46, 166, 0.2);
        font-size: 0.68rem;
    }

    .material-item {
        display: flex;
        align-items: center;
        gap: 0.65rem;
        min-width: 0;
        min-height: 62px;
        padding: 0.55rem 0.7rem;
        box-sizing: border-box;
        border: 1px solid rgba(255, 255, 255, 0.62);
        border-radius: 0.95rem;
        color: inherit;
        background: rgba(255, 255, 255, 0.24);
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.55);
        transition: transform 180ms ease, background 180ms ease;
    }

    .material-item:hover,
    .material-item:focus-visible {
        background: rgba(255, 255, 255, 0.42);
        transform: translateY(-1px);
    }

    .material-icon {
        width: 34px;
        height: 34px;
        border-radius: 0.65rem;
        font-size: 1.05rem;
    }

    .material-copy {
        display: flex;
        flex: 1;
        flex-direction: column;
        min-width: 0;
        gap: 0.15rem;
    }

    .material-copy strong,
    .material-copy small {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .material-copy strong {
        color: var(--color-dark-purple);
        font-family: var(--font-heading);
        font-size: 0.78rem;
        line-height: 1.15;
    }

    .material-copy small {
        color: var(--color-text);
        font-family: var(--font-body);
        font-size: 0.7rem;
    }

    .download-icon {
        flex: 0 0 auto;
        color: var(--color-institutional-purple);
        font-size: 1.15rem;
    }

    @media (max-width: 760px) {
        grid-template-columns: 1fr;

        .info-card {
            min-height: 0;
        }
    }
`;