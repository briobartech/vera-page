import { useState } from 'react';
import styled from 'styled-components';
import CareersButtons from './CareersButtons';
import { catalogCareersByCategory } from '../data/careersCatalog';
import useSlidingPill from '../hooks/useSlidingPill';

function renderCareerCategory(categoryKey, isMobileView = false, isActive = true) {
  const category = catalogCareersByCategory(categoryKey);

  if (!category) {
    return null;
  }

  return (
    <article
      className={`careers-group${isMobileView ? (isActive ? ' active' : ' hidden') : ''}`}
      key={categoryKey}
      {...(isMobileView
        ? {
            id: `careers-panel-${categoryKey}`,
            role: 'tabpanel',
            'aria-labelledby': `careers-tab-${categoryKey}`,
          }
        : {})}
    >
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
  const { itemRef, pillStyle, selectorRef } = useSlidingPill(selectedCategory);

  const handleTabKeyDown = (event, currentIndex) => {
    const keyActions = {
      ArrowRight: 1,
      ArrowDown: 1,
      ArrowLeft: -1,
      ArrowUp: -1,
      Home: -currentIndex,
      End: categoriesToRender.length - 1 - currentIndex,
    };
    const offset = keyActions[event.key];

    if (offset === undefined) return;

    event.preventDefault();
    const nextIndex = (currentIndex + offset + categoriesToRender.length) % categoriesToRender.length;
    const nextCategory = categoriesToRender[nextIndex];
    setActiveCategory(nextCategory);
    document.getElementById(`careers-tab-${nextCategory}`)?.focus();
  };

  return (
    <CareersSectionStyled>
      {isMobileSelector && (
        <div className="mobile-selector-shell">
          <div ref={selectorRef} className="careers-mobile-selector liquid-glass-effect" role="tablist" aria-label="Seleccionar oferta académica">
            <span className="selector-active-pill" aria-hidden="true" style={pillStyle} />
            <button
              ref={itemRef('profesorado')}
              type="button"
              className="selector-pill"
              id="careers-tab-profesorado"
              role="tab"
              onClick={() => setActiveCategory('profesorado')}
              onKeyDown={(event) => handleTabKeyDown(event, 0)}
              aria-selected={selectedCategory === 'profesorado'}
              aria-controls="careers-panel-profesorado"
              tabIndex={selectedCategory === 'profesorado' ? 0 : -1}
            >
              Profesorados
            </button>
            <button
              ref={itemRef('tecnicatura')}
              type="button"
              className="selector-pill"
              id="careers-tab-tecnicatura"
              role="tab"
              onClick={() => setActiveCategory('tecnicatura')}
              onKeyDown={(event) => handleTabKeyDown(event, 1)}
              aria-selected={selectedCategory === 'tecnicatura'}
              aria-controls="careers-panel-tecnicatura"
              tabIndex={selectedCategory === 'tecnicatura' ? 0 : -1}
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
      position: relative;
      isolation: isolate;
      display: flex;
      gap: 0.55rem;
      padding: 0.35rem;
      border-radius: 999px;
      /* background: rgba(255, 255, 255, 0.3);
      border: 1px solid rgba(255, 255, 255, 0.68);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.72); */
    }

    .selector-active-pill {
      position: absolute;
      z-index: 0;
      box-sizing: border-box;
      pointer-events: none;
      border: 1px solid rgba(255, 255, 255, 0.98);
      border-radius: 999px;
      background: var(--color-white);
      box-shadow: 0 5px 12px rgba(var(--glass-shadow-rgb), 0.2);
      transition:
        left 0.36s cubic-bezier(0.34, 1.2, 0.64, 1),
        top 0.36s cubic-bezier(0.34, 1.2, 0.64, 1),
        width 0.36s cubic-bezier(0.34, 1.2, 0.64, 1),
        height 0.36s cubic-bezier(0.34, 1.2, 0.64, 1),
        opacity 0.18s ease;
    }

    .selector-pill {
      flex: 1;
      position: relative;
      z-index: 1;
      border: 1px solid transparent;
      border-radius: 999px;
      padding: 0.75rem 0.8rem;
      font-family: var(--font-heading);
      font-size: 0.96rem;
      font-weight: 700;
      color: var(--color-dark-purple);
      background: transparent;
      cursor: pointer;
      transition: color 180ms ease;
    }

    .selector-pill[aria-selected='true'],
    .selector-pill:hover,
    .selector-pill:focus-visible {
      color: var(--color-institutional-purple);
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
