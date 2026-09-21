import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import icons from '../data/icons.js';

function OnlineProceduresCard({
  title = 'Planificaciones',
  period = '2024 / 2025',
  buttonLabel = 'VER Y DESCARGAR',
  icon = icons.faCalendarDays,
  to = '#',
}) {
  const isExternalUrl = /^https?:\/\//i.test(to);
  const actionProps = {
    className: 'action-button liquid-glass-effect',
    'aria-label': buttonLabel,
  };

  return (
    <OnlineProceduresCardStyled>
      <div className="card-shell liquid-glass-effect">
        <FontAwesomeIcon icon={icon} className="background-icon" aria-hidden="true" />

        <div className="calendar-visual" aria-hidden="true">
          <FontAwesomeIcon icon={icon} className="procedure-icon" />
        </div>

        <div className="card-content">
          <div className="card-copy">
            <h2>{title}</h2>
            <p>{period}</p>
          </div>

          {isExternalUrl ? (
            <a {...actionProps} href={to} target="_blank" rel="noopener noreferrer">
              <span className="action-icon"><FontAwesomeIcon icon={faAnglesDown} /></span>
              <span className="action-text">{buttonLabel}</span>
            </a>
          ) : (
            <Link {...actionProps} to={to}>
              <span className="action-icon"><FontAwesomeIcon icon={faAnglesDown} /></span>
              <span className="action-text">{buttonLabel}</span>
            </Link>
          )}
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
    align-items: center;
    justify-content: space-between;
    gap: 1.4rem;
    width: 100%;
    height: 300px;
    padding: 1rem;
    box-sizing: border-box;
    overflow: hidden;
    isolation: isolate;
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
    width: 150px;
    height: 150px;
    color: var(--color-text-dark);
    filter: drop-shadow(0 1px 0 rgba(255, 255, 255, 0.65));
  }

  .card-content {
    position: relative;
    z-index: 1;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    min-width: 0;
    height: 100%;
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
    min-height: 2.2rem;
    color: rgb(49, 43, 54);
    font-family: var(--font-heading, 'Poppins', sans-serif);
    font-size: clamp(1.15rem, 1rem + 0.8vw, 1.85rem);
    line-height: 1.08;
    letter-spacing: 0.01em;
    font-weight: 700;
    text-transform: none;
  }

  .card-content p {
    margin: 0.3rem 0 0;
    min-height: 2.2rem;
    color: rgba(49, 43, 54, 0.82);
    font-family: var(--font-heading, 'Poppins', sans-serif);
    font-size: clamp(1rem, 0.92rem + 0.55vw, 1.35rem);
    line-height: 1.2;
    letter-spacing: 0.01em;
    font-weight: 600;
  }

  .action-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    width: min(100%, 310px);
    height: 54px;
    padding: 0;
    border: 0;
    border-radius: 999px;
    -webkit-backdrop-filter: blur(14px) saturate(145%);
    cursor: pointer;
    transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
  }

  .action-button:hover,
  .action-button:focus-visible {
    transform: translateY(-1px);
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
      min-height: 190px;
      height: 190px;
      padding: 1rem;
    }

    .calendar-visual {
      flex: 0 0 120px;
      width: 120px;
      height: 150px;
    }

    .procedure-icon {
      width: 92px;
      height: 92px;
    }

    .card-content {
      width: 100%;
      padding-top: 0.3rem;
      align-items: flex-start;
      justify-content: flex-start;
    }

    .action-button {
      width: min(100%, 260px);
      min-width: 0;
      height: 46px;
      
    }
  }

  @media (max-width: 560px) {
    .card-shell {
      min-height: 180px;
      height: 180px;
      gap: 1rem;
    }

    .calendar-visual {
      flex-basis: 100px;
      width: 100px;
      height: 135px;
    }

    .procedure-icon {
      width: 76px;
      height: 76px;
    }

    .card-content h2 {
      min-height: 2.8rem;
      font-size: 1.35rem;
    }

    .card-content p {
      min-height: 2.2rem;
      font-size: 1rem;
    }

    .action-icon {
      width: 44px;
      min-width: 44px;
      height: 44px;
    }

    .action-text {
      font-size: 0.67rem;
      padding-left: 1rem;
      padding-right: 1rem;
      letter-spacing: 0.05em;
      white-space: normal;
      line-height: 1.15;
    }
  }
`;
