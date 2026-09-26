import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import careersData from '../assets/careers.json';

const siteLocations = [
  { title: 'Inicio', description: 'Página principal del Instituto Vera', to: '/', keywords: 'home instituto vera' },
  { title: 'Ingreso 2026', description: 'Información para comenzar una carrera', to: '/ingreso', keywords: 'inscripcion preinscripcion ingreso' },
  { title: 'Oferta educativa', description: 'Todas las carreras disponibles', to: '/oferta-educativa/general', keywords: 'carreras profesorados tecnicaturas' },
  { title: 'Trámites en línea', description: 'Planificaciones, certificados y sistemas', to: '/tramites-online', keywords: 'tramites certificado planificaciones progresar' },
  { title: 'Novedades', description: 'Noticias y comunicados institucionales', to: '/novedades', keywords: 'noticias blog comunicados' },
  { title: 'Nuestra historia', description: 'Historia del Instituto Rosario Vera Peñaloza', to: '/nuestra-historia', keywords: 'historia instituto' },
  { title: 'Autoridades', description: 'Equipo directivo y autoridades institucionales', to: '/autoridades', keywords: 'rectora vicerrectora regente directivos' },
  { title: 'Formación continua', description: 'Cursos y propuestas de actualización', to: '/formacion-continua', keywords: 'cursos postitulos capacitacion' },
  { title: 'TRAMA', description: 'Acompañamiento a trayectorias estudiantiles', to: '/TRAMA', keywords: 'acompañamiento estudiantes' },
  { title: 'Becas Vera', description: 'Becas y apoyos para estudiantes', to: '/becas-vera', keywords: 'becas apoyo estudiantes progresar' },
];

function normalizeText(value) {
  return String(value ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function SearchBar() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const searchIndex = useMemo(() => {
    const careers = Object.entries(careersData.careers ?? {}).map(([code, career]) => ({
      title: career.title,
      description: career.description || 'Carrera del Instituto Vera',
      to: `/oferta-educativa/${code}`,
      keywords: `${code} ${career.resolution || ''} ${career.description || ''}`,
    }));

    return [...siteLocations, ...careers];
  }, []);

  const results = useMemo(() => {
    const terms = normalizeText(query).trim().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];

    return searchIndex
      .filter((item) => {
        const searchable = normalizeText(`${item.title} ${item.description} ${item.keywords}`);
        return terms.every((term) => searchable.includes(term));
      })
      .slice(0, 8);
  }, [query, searchIndex]);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((current) => Math.min(current + 1, results.length - 1));
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((current) => Math.max(current - 1, 0));
    }
    if (event.key === 'Escape') {
      setIsOpen(false);
      setActiveIndex(-1);
    }
    if (event.key === 'Enter' && activeIndex >= 0) {
      window.location.href = results[activeIndex].to;
    }
  };

  return (
    <SearchBarStyled>
      <div className="search-control">
        <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} aria-hidden="true" />
        <input
          className="search-input liquid-glass-effect"
          type="search"
          value={query}
          placeholder="Buscar carreras, trámites y más..."
          role="combobox"
          aria-expanded={isOpen && results.length > 0}
          aria-controls="site-search-results"
          aria-autocomplete="list"
          onChange={(event) => {
            setQuery(event.target.value);
            setIsOpen(true);
            setActiveIndex(-1);
          }}
          onFocus={() => setIsOpen(true)}
          onBlur={() => window.setTimeout(() => setIsOpen(false), 150)}
          onKeyDown={handleKeyDown}
        />
      </div>

      {isOpen && query.trim() && (
        <div className="search-results liquid-glass-effect" id="site-search-results" role="listbox">
          {results.length ? results.map((result, index) => (
            <Link
              key={result.to}
              to={result.to}
              className={`search-result${index === activeIndex ? ' is-active' : ''}`}
              role="option"
              aria-selected={index === activeIndex}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <strong>{result.title}</strong>
              <span>{result.description}</span>
            </Link>
          )) : (
            <p className="empty-result">No encontramos coincidencias para “{query}”.</p>
          )}
        </div>
      )}
    </SearchBarStyled>
  );
}

export default SearchBar;

const SearchBarStyled = styled.div`
  position: relative;
  z-index: 70;
  width: min(100%, 620px);
  margin: 1rem auto;

  .search-control {
    position: relative;
  }

  .search-icon {
    position: absolute;
    top: 50%;
    left: 1rem;
    z-index: 2;
    color: var(--color-institutional-purple);
    transform: translateY(-50%);
  }

  .search-input {
    width: 100%;
    min-height: 48px;
    box-sizing: border-box;
    padding: 0.75rem 1rem 0.75rem 2.8rem;
    border-radius: 999px;
    color: var(--color-dark-purple);
    font-family: var(--font-body);
    font-size: 0.95rem;
  }

  .search-input::placeholder {
    color: var(--color-text);
    opacity: 0.8;
  }

  .search-results {
    position: absolute;
    top: calc(100% + 0.5rem);
    right: 0;
    left: 0;
    display: grid;
    gap: 0.3rem;
    max-height: min(50vh, 440px);
    overflow-y: auto;
    padding: 0.5rem;
    border-radius: 1rem;
    background: rgba(250, 248, 255, 0.96);
  }

  .search-result {
    display: grid;
    gap: 0.2rem;
    padding: 0.7rem 0.8rem;
    border-radius: 0.7rem;
    color: var(--color-dark-purple);
    text-decoration: none;
  }

  .search-result strong {
    font-family: var(--font-heading);
    font-size: 0.88rem;
  }

  .search-result span,
  .empty-result {
    margin: 0;
    color: var(--color-text);
    font-family: var(--font-body);
    font-size: 0.78rem;
    line-height: 1.35;
  }

  .search-result:hover,
  .search-result.is-active {
    background: rgba(127, 70, 219, 0.12);
    color: var(--color-institutional-purple);
  }

  .empty-result {
    padding: 0.7rem 0.8rem;
  }

  @media (max-width: 700px) {
    width: 100%;
    margin: 0.8rem auto;
  }
`;