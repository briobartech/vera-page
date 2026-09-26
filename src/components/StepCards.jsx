import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function StepCards({ steps = [] }) {
    const orderedSteps = [...steps].sort((firstStep, secondStep) => firstStep.number - secondStep.number);

    return (
        <StepCardsStyled aria-label="Pasos del proceso">
            {orderedSteps.map((step, index) => (
                <div className="step-item" key={`${step.number}-${step.title}`}>
                    <StepCard {...step} />
                    {index < orderedSteps.length - 1 && (
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            className="step-connector"
                            aria-hidden="true"
                        />
                    )}
                </div>
            ))}
        </StepCardsStyled>
    );
}

function StepCard({ number, title, description, icon }) {
    return (
        <StepCardStyled>
            <div className="step-number" aria-label={`Paso ${number}`}>
                {number}
            </div>

            <div className="step-main">
                <div className="step-icon-frame liquid-glass-effect" aria-hidden="true">
                    <FontAwesomeIcon icon={icon} className="step-icon" />
                </div>

                <div className="step-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </StepCardStyled>
    );
}

export default StepCards;

const StepCardsStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 280px));
    gap: 2.75rem;
    width: 100%;
    padding-top: 2rem;
    box-sizing: border-box;
    justify-content: center;
    align-items: stretch;

    .step-item {
        position: relative;
        display: flex;
        width: 100%;
        min-width: 0;
    }

    .step-connector {
        position: absolute;
        top: 50%;
        right: -2.1rem;
        z-index: 2;
        width: 1.35rem;
        height: 1.35rem;
        color: var(--color-institutional-purple);
        transform: translateY(-50%);
        filter: drop-shadow(0 2px 4px rgba(91, 46, 166, 0.18));
    }

    @media (max-width: 760px) {
        grid-template-columns: 1fr;
        gap: 2.5rem;
        padding-top: 2rem;

        .step-item {
            justify-self: center;
            width: min(100%, 320px);
        }

        .step-connector {
            top: auto;
            right: 50%;
            bottom: -1.95rem;
            transform: translateX(50%) rotate(90deg);
            display:none;
        }
    }
`;

const StepCardStyled = styled.article`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 230px;
    padding: 2.2rem 1rem 1.1rem;
    box-sizing: border-box;
    overflow: visible;
    border: 1px solid rgba(255, 255, 255, 0.48);
    border-radius: 1.25rem;
    background: rgba(255, 255, 255, 0.22);
    box-shadow: 0 12px 28px rgba(59, 31, 102, 0.08);
    text-align: center;
    .step-number {
        position: absolute;
        top: -26px;
        left: 50%;
        display: grid;
        width: 52px;
        height: 52px;
        place-items: center;
        flex: 0 0 auto;
        border-radius: 50%;
        color: var(--color-institutional-purple);
        background:
            radial-gradient(130% 160% at 32% 28%, rgba(255, 255, 255, 0.88) 0%, rgba(169, 141, 224, 0.26) 52%, rgba(169, 141, 224, 0.12) 100%),
            rgba(255, 255, 255, 0.34);
        border: 1px solid rgba(255, 255, 255, 0.7);
        box-shadow:
            0 8px 16px rgba(154, 112, 221, 0.14),
            0 0 0 5px rgba(183, 158, 231, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        font-family: var(--font-heading);
        font-size: 1.08rem;
        font-weight: 700;
        line-height: 1;
        transform: translateX(-50%);
        z-index: 3;
    }

    .step-main {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        width: 100%;
        min-width: 0;
    }

    .step-icon-frame {
        display: grid;
        flex: 0 0 92px;
        width: 92px;
        height: 92px;
        place-items: center;
        border-radius: 1.35rem;
    }

    .step-icon {
        width: 2.7rem;
        height: 2.7rem;
        color: var(--color-text-dark);
        filter: drop-shadow(0 1px 0 rgba(255, 255, 255, 0.7));
    }

    .step-content {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        min-width: 0;
        overflow: hidden;
    }

    h3 {
        margin: 0;
        display: -webkit-box;
        overflow: hidden;
        color: var(--color-dark-purple);
        font-family: var(--font-heading);
        font-size: clamp(1rem, 0.92rem + 0.25vw, 1.2rem);
        line-height: 1.15;
        text-align: left;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }

    p {
        display: -webkit-box;
        max-width: 24ch;
        margin: 0.45rem 0 0;
        overflow: hidden;
        color: var(--color-text);
        font-family: var(--font-body);
        font-size: clamp(0.82rem, 0.78rem + 0.14vw, 0.95rem);
        line-height: 1.35;
        text-align: left;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
    }

    @media (max-width: 760px) {
        height: 230px;
        padding: 2rem 1rem 1rem;

        .step-main {
            gap: 0.75rem;
        }

        .step-icon-frame {
            flex-basis: 76px;
            width: 76px;
            height: 76px;
        }

        .step-icon {
            width: 2.25rem;
            height: 2.25rem;
        }
    }
`;