import { useAppContext } from '../context/AppContext';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import careersData from '../assets/careers.json';
import { getSectionComponentByType } from './careers/sectionComponentByType';

function OfertaEducativa() {
  const { theme } = useAppContext();
  const { careerCode } = useParams();
  const normalizedCode = String(careerCode ?? '').trim().toUpperCase();
  const careersMap = careersData?.careers ?? {};
  const selectedCareerFromJson = normalizedCode ? careersMap?.[normalizedCode] : null;
  const selectedCareerSections = Array.isArray(selectedCareerFromJson?.sections)
    ? selectedCareerFromJson.sections
    : [];
  const shouldRenderSections = Boolean(normalizedCode && selectedCareerFromJson && selectedCareerSections.length > 0);

  return (
    <OfertaEducativaStyled className={`app ${theme}`}>
      <NavBar />

      <main className="oferta-main">
        {shouldRenderSections ? (
          selectedCareerSections.map((section, index) => {
            const SectionComponent = getSectionComponentByType(section?.type);

            return (
              <SectionComponent
                key={`${section?.type ?? 'section'}-${index}`}
                section={section}
                career={selectedCareerFromJson}
                careerCode={normalizedCode}
              />
            );
          })
        ) : (
          <section className="not-found" role="status" aria-live="polite">
            <p className="not-found-kicker">404 Not Found</p>
            <h1>Carrera no disponible</h1>
            <p>
              No encontramos contenido para el codigo "{careerCode || 'sin-codigo'}".
            </p>
          </section>
        )}
      </main>

      <Footer />
    </OfertaEducativaStyled>
  );
}

export default OfertaEducativa;

const OfertaEducativaStyled = styled.div`
  width: min(80%, 1440px);
  margin: 0 auto;

  .oferta-main {
    display: grid;
    gap: 0.5rem;
  }

  .not-found {
    margin: 1.2rem auto;
    width: min(100%, 860px);
    border: 1px solid rgba(255, 255, 255, 0.62);
    border-radius: 1.3rem;
    padding: 1.5rem 1.25rem;
    background:
      radial-gradient(120% 170% at 80% 0%, rgba(169, 141, 224, 0.22), rgba(255, 255, 255, 0.18)),
      linear-gradient(145deg, rgba(255, 255, 255, 0.74), rgba(255, 255, 255, 0.42));
    backdrop-filter: blur(12px) saturate(126%);
    box-shadow:
      0 16px 30px rgba(59, 31, 102, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.8);
    text-align: center;
  }

  .not-found-kicker {
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-weight: 700;
    opacity: 0.72;
  }

  .not-found h1 {
    margin: 0.35rem 0;
    font-family: var(--font-heading);
    color: var(--color-dark-purple);
    font-size: clamp(1.5rem, 1.2rem + 1vw, 2.3rem);
  }

  .not-found p {
    margin: 0.3rem 0 0;
    font-family: var(--font-body);
    color: var(--color-dark-purple);
  }

  @media (max-width: 900px) {
    width: min(94%, 1440px);
  }
`;
