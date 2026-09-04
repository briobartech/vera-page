import { useState } from 'react';
import styled from 'styled-components';
import CareersButtons from './CareersButtons';
import { catalogCareersByCategory } from '../data/careersCatalog';

function renderCareerCategory(categoryKey, isMobileView = false, isActive = true) {
  const category = catalogCareersByCategory(categoryKey);

  if (!category) {
    return null;
  }

  return (
    <article className={`careers-group${isMobileView ? (isActive ? ' active' : ' hidden') : ''}`} key={categoryKey}>
      <header className="careers-group-header">
        <h2>{category.title}</h2>
      </header>

      <div className="careers-group-grid">
        {category.items.map((career) => (
          <CareersButtons
            key={career.name}
            name={career.name}
            icon={career.icon}
            to={`/oferta-educativa/${career.code}`}
            reflectionColor={career.reflectionColor}
          />
        ))}
      </div>
    </article>
  );
}

function CareersSection({ category }) {
  const categoriesToRender = category ? [category] : ['profesorado', 'tecnicatura'];
  const [activeCategory, setActiveCategory] = useState(categoriesToRender[0] ?? 'profesorado');
  const isMobileSelector = !category && categoriesToRender.length > 1;
  const selectedCategory = category || activeCategory;

  return (
    <CareersSectionStyled>
      {isMobileSelector && (
        <div className="mobile-selector-shell">
          <div className="careers-mobile-selector" role="tablist" aria-label="Seleccionar oferta académica">
            <button
              type="button"
              className={`selector-pill${selectedCategory === 'profesorado' ? ' active' : ''}`}
              onClick={() => setActiveCategory('profesorado')}
              aria-pressed={selectedCategory === 'profesorado'}
            >
              Profesorados
            </button>
            <button
              type="button"
              className={`selector-pill${selectedCategory === 'tecnicatura' ? ' active' : ''}`}
              onClick={() => setActiveCategory('tecnicatura')}
              aria-pressed={selectedCategory === 'tecnicatura'}
            >
              Tecnicaturas
            </button>
          </div>

          <div className="mobile-careers-panel">
            {categoriesToRender.map((categoryKey) => renderCareerCategory(categoryKey, true, categoryKey === selectedCategory))}
          </div>
        </div>
      )}

      {isMobileSelector && categoriesToRender.map((categoryKey) => renderCareerCategory(categoryKey))}

      {!isMobileSelector && categoriesToRender.map((categoryKey) => renderCareerCategory(categoryKey))}
    </CareersSectionStyled>
  );
}

export default CareersSection;

const CareersSectionStyled = styled.section`
  width: 100%;
  display: grid;
  gap: 2rem;
  padding: 2rem 0;

  .careers-group {
    display: grid;
    gap: 1rem;
  }

  .careers-group-header h2 {
    margin: 0;
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: clamp(1.6rem, 1.15rem + 1vw, 2.2rem);
    color: var(--color-dark-purple);
    text-transform: uppercase;
    letter-spacing: 0.02em;
    text-align: center;
  }

  .careers-group-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .mobile-selector-shell {
    display: none;
  }

  @media (max-width: 1100px) {
    .careers-group-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 760px) {
    gap: 1.4rem;

    .mobile-selector-shell {
      display: grid;
      gap: 0.75rem;
      padding: 0.8rem;
      border-radius: 1.5rem;
      border: 1px solid rgba(255, 255, 255, 0.5);
      background: rgba(255, 255, 255, 0.24);
      box-shadow: 0 20px 42px rgba(var(--glass-shadow-rgb), 0.12);
      backdrop-filter: blur(18px) saturate(140%);
    }

    .careers-mobile-selector {
      display: flex;
      gap: 0.55rem;
      padding: 0.35rem;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.3);
      border: 1px solid rgba(255, 255, 255, 0.68);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.72);
    }

    .selector-pill {
      flex: 1;
      border: 1px solid transparent;
      border-radius: 999px;
      padding: 0.75rem 0.8rem;
      font-family: var(--font-heading);
      font-size: 0.96rem;
      font-weight: 700;
      color: var(--color-dark-purple);
      background: transparent;
      cursor: pointer;
      transition: transform 180ms ease, background 220ms ease, border-color 220ms ease, color 180ms ease, box-shadow 220ms ease;
    }

    .selector-pill.active {
      color: #ffffff;
      border-color: rgba(255, 255, 255, 0.84);
      background:
        radial-gradient(120% 150% at 24% 0%, rgba(255, 255, 255, 0.66) 0%, rgba(255, 255, 255, 0) 52%),
        radial-gradient(110% 145% at 88% 100%, rgba(169, 141, 224, 0.5) 0%, rgba(169, 141, 224, 0) 68%),
        rgba(91, 46, 166, 0.7);
      box-shadow:
        0 10px 22px rgba(var(--glass-shadow-rgb), 0.16),
        inset 0 1px 0 rgba(255, 255, 255, 0.7),
        inset 0 -1px 0 rgba(64, 31, 125, 0.18);
    }

    .mobile-careers-panel {
      display: grid;
      max-height: min(62vh, 34rem);
      overflow-y: auto;
      padding: 0.25rem 0.6rem 0.6rem;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    .mobile-careers-panel::-webkit-scrollbar {
      display: none;
    }

    .careers-group {
      display: none;
      gap: 0.9rem;
      padding: 0.2rem 0.15rem 0.15rem;
    }

    .careers-group.active {
      display: grid;
      animation: mobile-careers-panel-in 320ms cubic-bezier(0.22, 1, 0.36, 1);
    }

    .careers-group-header h2 {
      font-size: clamp(1.2rem, 1rem + 0.8vw, 1.5rem);
    }

    .careers-group-grid {
      grid-template-columns: minmax(0, 1fr);
    }

    @keyframes mobile-careers-panel-in {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;
