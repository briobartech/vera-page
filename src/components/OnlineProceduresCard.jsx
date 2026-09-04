import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import icons from '../data/icons.js';

function OnlineProceduresCard({
  title = 'Planificaciones',
  period = '2024 / 2025',
  buttonLabel = 'VER Y DESCARGAR',
  icon = icons.faCalendarDays,
}) {
  return (
    <OnlineProceduresCardStyled>
      <div className="card-shell">
        <FontAwesomeIcon icon={icon} className="background-icon" aria-hidden="true" />

        <div className="calendar-visual" aria-hidden="true">
          <FontAwesomeIcon icon={icon} className="procedure-icon" />
        </div>

        <div className="card-content">
          <div className="card-copy">
            <h2>{title}</h2>
            <p>{period}</p>
          </div>

          <button type="button" className="action-button" aria-label={buttonLabel}>
            <span className="action-icon"><FontAwesomeIcon icon={faAnglesDown} /></span>
            <span className="action-text">{buttonLabel}</span>
          </button>
        </div>
      </div>
    </OnlineProceduresCardStyled>
  );
}

export default OnlineProceduresCard;

const OnlineProceduresCardStyled = styled.article`
  width: 100%;
  max-width: 520px;

  .card-shell {
    position: relative;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    gap: 1.4rem;
    width: 100%;
    max-height: 300px;
    padding: 1rem;
    border-radius: 2.3rem;
    border: 1px solid rgba(255, 255, 255, 0.78);
    background:
      radial-gradient(120% 160% at 20% 0%, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.12) 45%, rgba(255, 255, 255, 0) 100%),
      rgba(255, 255, 255, 0.68);
    box-shadow:
      0 24px 44px rgba(133, 118, 166, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.9),
      inset 0 -1px 0 rgba(112, 94, 146, 0.08);
    backdrop-filter: blur(18px) saturate(150%);
    -webkit-backdrop-filter: blur(18px) saturate(150%);
    overflow: hidden;
    isolation: isolate;
  }

  .card-shell::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.52) 30%, rgba(255, 255, 255, 0.18) 66%, rgba(255, 255, 255, 0));
    pointer-events: none;
    z-index: 0;
  }

  .background-icon {
    position: absolute;
    top: 50%;
    left: 60%;
    width: 260px;
    height: 260px;
    color: rgba(103, 82, 145, 0.16);
    transform: translate(-50%, -50%) rotate(-18deg) scale(1.8);
    filter: blur(6px);
    pointer-events: none;
    z-index: 0;
  }

  .calendar-visual {
    position: relative;
    flex: 0 0 210px;
    width: 210px;
    height: 230px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .procedure-icon {
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 150px;
    max-height: 170px;
    color: rgba(103, 82, 145, 0.85);
    filter: drop-shadow(0 1px 0 rgba(255, 255, 255, 0.65));
  }

  .card-content {
    position: relative;
    z-index: 1;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
    min-width: 0;
    min-height: 100%;
    padding: 0.2rem 0 0;
    top: 0;
  }

  .card-copy {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    min-width: 0;
  }

  .card-content h2 {
    margin: 0;
    color: rgb(49, 43, 54);
    font-family: var(--font-heading, 'Poppins', sans-serif);
    font-size: clamp(1rem, 1.8vw, 2rem);
    line-height: 0.98;
    letter-spacing: -0.06em;
    font-weight: 700;
    text-transform: none;
  }

  .card-content p {
    margin: 0.3rem 0 0;
    color: rgba(49, 43, 54, 0.82);
    font-family: var(--font-heading, 'Poppins', sans-serif);
    font-size: clamp(1.2rem, 1.7vw, 1.9rem);
    line-height: 1.05;
    letter-spacing: -0.05em;
    font-weight: 600;
  }

  .action-button {
    position: absolute;
    bottom: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    width: min(100%, 310px);
    padding: 0;
    border: 1px solid rgba(255, 255, 255, 0.82);
    border-radius: 999px;
    background:
      radial-gradient(120% 160% at 24% 0%, rgba(255, 255, 255, 0.72) 0%, rgba(255, 255, 255, 0) 54%),
      rgba(174, 154, 216, 0.42);
    box-shadow:
      0 16px 32px rgba(122, 97, 162, 0.16),
      inset 0 1px 0 rgba(255, 255, 255, 0.82),
      inset 0 -1px 0 rgba(108, 80, 151, 0.1);
    backdrop-filter: blur(14px) saturate(145%);
    -webkit-backdrop-filter: blur(14px) saturate(145%);
    cursor: pointer;
    transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
  }

  .action-button:hover,
  .action-button:focus-visible {
    transform: translateY(-1px);
    border-color: rgba(255, 255, 255, 0.96);
    box-shadow:
      0 18px 36px rgba(122, 97, 162, 0.18),
      inset 0 1px 0 rgba(255, 255, 255, 0.9),
      inset 0 -1px 0 rgba(108, 80, 151, 0.14);
  }

  .action-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    min-width: 52px;
    height: 52px;
    border-right: 1px solid rgba(255, 255, 255, 0.52);
    color: rgb(49, 43, 54);
    font-size: clamp(1.35rem, 1.6vw, 1.8rem);
    font-weight: 700;
    line-height: 1;
    filter: drop-shadow(0 1px 0 rgba(255, 255, 255, 0.65));
  }

  .action-text {
    flex: 1;
    padding: 0.5rem 1rem 0.5rem 0.9rem;
    color: rgb(49, 43, 54);
    font-family: var(--font-heading, 'Poppins', sans-serif);
    font-size: clamp(0.72rem, 0.9vw, 1rem);
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-align: center;
    white-space: nowrap;
  }

  @media (max-width: 900px) {
    .card-shell {
      flex-direction: column;
      align-items: stretch;
      padding: 1.2rem 1rem 1.35rem;
    }

    .calendar-visual {
      width: 100%;
      max-width: 100%;
      flex-basis: auto;
      height: 260px;
    }

    .calendar-window {
      left: 12%;
      width: 68%;
      height: 82%;
    }

    .card-content {
      width: 100%;
      padding-top: 0.3rem;
      align-items: flex-start;
      justify-content: flex-start;
    }

    .action-button {
      width: 100%;
      min-width: 0;
      margin-top: 1rem;
    }
  }

  @media (max-width: 560px) {
    .card-shell {
      min-height: 0;
      gap: 1rem;
    }

    .calendar-visual {
      height: 220px;
    }

    .card-content h2 {
      font-size: 2.2rem;
    }

    .card-content p {
      font-size: 1.7rem;
    }

    .action-icon {
      width: 62px;
      min-width: 62px;
      height: 62px;
    }

    .action-text {
      padding-left: 1rem;
      padding-right: 1rem;
      letter-spacing: 0.05em;
      white-space: normal;
      line-height: 1.15;
    }
  }
`;
