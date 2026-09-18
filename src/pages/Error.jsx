import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import VirtualAccess from '../components/VirtualAccess';

function ErrorPage({ error, onRetry }) {
  const navigate = useNavigate();
  const message =
    error?.message ||
    'La página que intentás abrir no está disponible o se produjo un error inesperado.';

  const handleRetry = () => {
    if (typeof onRetry === 'function') {
      onRetry();
      return;
    }

    navigate('/');
  };

  return (
    <>
      

      <ErrorPageStyled className="app light">
        <NavBar $flushTop />
        <VirtualAccess />

        <div className="error-stage">
          <div className="error-card">
            <div className="error-copy">
              <span className="error-badge">ERROR 404</span>
              <h1 className="title-1">Algo salió mal</h1>
              <p className="subtitle-2">No pudimos cargar esta página correctamente.</p>

              <div className="error-message">
                <div className="message-icon" aria-hidden="true">
                  ⚠
                </div>
                <div className="message-text">
                  <strong>Detalle</strong>
                  <span>{message}</span>
                </div>
              </div>

              {error?.stack && (
                <details className="error-details">
                  <summary>Ver información técnica</summary>
                  <pre>{error.stack}</pre>
                </details>
              )}

              <div className="actions">
                {/* <button type="button" onClick={handleRetry}>
                  Reintentar
                </button> */}
                <Link to="/" className="home-link">
                  Volver al inicio
                </Link>
              </div>
            </div>

            <div className="error-visual" aria-label="Ilustración de error">
              <div className="visual-bg" />
              {/* <span className="direction-tag tag-one">Tal vez por acá...</span>
              <span className="direction-tag tag-two">O por allá...</span>
              <span className="direction-tag tag-three">Mejor volvamos al inicio</span>
 */}
              <img
                className="error-image"
                src={`${import.meta.env.BASE_URL}images/error-404.png`}
                alt="Ilustración de error"
              />
            </div>
          </div>
        </div>
      </ErrorPageStyled>

      <Footer />
    </>
  );
}

export default ErrorPage;

const ErrorPageStyled = styled.main`
  width: min(80%, 1440px);
  margin: 0 auto;
  box-sizing: border-box;
  background: #f3f0ff;

  .error-stage {
    width: min(100%, 1380px);
    margin: 0 auto;
    padding-top: 1.5rem;
    padding-bottom: 1rem;
  }

  .error-card {
    width: 100%;
    min-height: 540px;
    display: grid;
    grid-template-columns: 1.05fr 1fr;
    align-items: center;
    gap: 1rem;
    border-radius: 2.2rem;
    background: rgba(255, 255, 255, 0.15);
    position: relative;
    overflow: hidden;
  }

  .error-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.04));
    pointer-events: none;
  }

  .error-copy,
  .error-visual {
    position: relative;
    z-index: 1;
  }

  .error-copy {
    padding: 2.5rem 2rem 2.5rem 4rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }

  .error-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.55rem 1rem;
    border-radius: 999px;
    background: rgba(151, 119, 215, 0.14);
    border: 1px solid rgba(127, 70, 219, 0.12);
    color: #5b3aa8;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 1.2rem;
  }

  h1 {
    margin: 0;
    font-size: clamp(3.4rem, 5vw, 6.2rem);
    line-height: 0.92;
    letter-spacing: -0.05em;
    color: #4a2d80;
  }

  .subtitle-2 {
    margin: 1.2rem 0 0;
    max-width: 450px;
    font-size: clamp(1.2rem, 2vw, 2rem);
    line-height: 1.2;
    color: #4d3b73;
    font-weight: 500;
  }

  .error-message {
    display: flex;
    align-items: flex-start;
    gap: 0.9rem;
    width: min(100%, 520px);
    background: rgba(255, 255, 255, 0.38);
    border: 1px solid rgba(127, 70, 219, 0.18);
    border-radius: 1.2rem;
    padding: 1.1rem 1.2rem;
    margin-top: 2rem;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.7);
  }

  .message-icon {
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 0.8rem;
    display: grid;
    place-items: center;
    background: rgba(111, 84, 181, 0.12);
    color: #5a3aa8;
    font-size: 1.3rem;
    font-weight: 800;
    flex-shrink: 0;
    
  }

  .message-text {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    color: #473a65;
  }

  .message-text strong {
    font-size: 1.05rem;
    font-weight: 700;
    color: #3c2a5d;
  }

  .message-text span {
    font-size: 0.98rem;
    line-height: 1.5;
  }

  .error-details {
    margin-top: 0.8rem;
    color: #4d3b73;
    width: min(100%, 520px);
  }

  .error-details summary {
    cursor: pointer;
    font-weight: 700;
    margin-bottom: 0.6rem;
  }

  .error-details pre {
    white-space: pre-wrap;
    word-break: break-word;
    background: rgba(91, 58, 168, 0.05);
    border-radius: 0.8rem;
    padding: 0.85rem 1rem;
    margin: 0;
    font-size: 0.78rem;
    line-height: 1.5;
    color: #3e2d5a;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1.7rem;
  }

  button,
  .home-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 52px;
    padding: 0.9rem 1.5rem;
    border-radius: 999px;
    border: none;
    font-weight: 700;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    text-decoration: none;
    font-size: 1rem;
  }

  button {
    background: linear-gradient(135deg, #5c2ea8, #a78fe6);
    color: #fff;
    box-shadow: 0 18px 26px rgba(94, 67, 169, 0.25);
    cursor: pointer;
  }

  .home-link {
    background: rgba(255,255,255,0.4);
    border: 1px solid rgba(127, 70, 219, 0.12);
    color: #4d2d7d;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.7);
  }

  button:hover,
  .home-link:hover {
    transform: translateY(-1px);
  }

  .error-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 540px;
    position: relative;
    padding: 1.5rem 1rem 0.5rem 0;
  }

  .visual-bg {
    position: absolute;
    inset: 8% 8% 8% 3%;
    border-radius: 38% 62% 55% 45% / 52% 46% 54% 48%;
    background: linear-gradient(135deg, rgba(162, 131, 238, 0.26), rgba(203, 191, 242, 0.12));
  }

  .direction-tag {
    position: absolute;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 76px;
    padding: 0.75rem 1.1rem;
    background: rgba(255, 255, 255, 0.45);
    border: 1px solid rgba(127, 70, 219, 0.12);
    border-radius: 1rem;
    color: #563d9d;
    font-weight: 600;
    box-shadow: 0 16px 28px rgba(77, 45, 125, 0.1);
    backdrop-filter: blur(8px);
    z-index: 2;
  }

  .tag-one {
    right: 16%;
    top: 12%;
    transform: rotate(8deg);
  }

  .tag-two {
    right: 10%;
    top: 35%;
    transform: rotate(-8deg);
  }

  .tag-three {
    right: 8%;
    top: 62%;
    transform: rotate(7deg);
  }

  .error-image {
    position: relative;
    z-index: 1;
    display: block;
    width: min(100%, 560px);
    max-height: 500px;
    object-fit: contain;
    filter: drop-shadow(0 26px 34px rgba(111, 72, 186, 0.25));
  }

  @media (max-width: 980px) {
    .error-card {
      grid-template-columns: 1fr;
      padding: 1.25rem 1rem 2rem;
    }

    .error-copy {
      padding: 1.25rem 1rem 0;
      align-items: center;
      text-align: center;
    }

    .subtitle-2 {
      max-width: 100%;
    }

    .error-visual {
      min-height: 360px;
      padding: 0 0.5rem 1rem;
    }

    .direction-tag {
      font-size: 0.8rem;
      min-height: 40px;
    }
  }

  @media (max-width: 640px) {
    padding: 1rem 0.75rem 0;

    .error-stage {
      padding-top: 0.5rem;
    }

    .error-card {
      min-height: unset;
    }

    .actions {
      width: 100%;
      flex-direction: column;
      align-items: stretch;
    }

    button,
    .home-link {
      width: 100%;
    }

    .error-message {
      width: 100%;
    }

    .tag-one, .tag-two, .tag-three {
      display: none;
    }
  }
`;
