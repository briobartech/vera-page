import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import images from '../data/images.js';

const byPrefixAndName = {
  fas: {
    bars: faBars,
  },
};

const menuItems = [
    {
        label: 'Sobre el Vera',
        links: [
            { href: '#', text: 'Nuestra historia' },
            { href: '#', text: 'Autoridades' }

        ],
    },
    {
        label: 'Carreras',
        links: [
            { href: '#', text: 'Ingreso 2026' },
            { href: '#', text: 'Carreras docentes' },
            { href: '#', text: 'Carreras técnicas' },
        ],
    },
    {
        label: 'Formación continua',
        links: [
            { href: '#', text: 'Cursos' },
            { href: '#', text: 'Postítulos' }
        ],
    },
    {
        label: 'Comunidad Vera',
        links: [
            { href: '#', text: 'TRAMA' },
            { href: '#', text: 'Políticas estudiantiles' },
            { href: '#', text: 'Biblioteca' },
            { href: '#', text: 'Becas de apoyo' },
            { href: '#', text: 'Beneficios Vera' },
            { href: '#', text: 'Actividades extracurriculares' },
        ],
    },
    {
        label: 'Investigación',
        links: [
            { href: '#', text: 'Becas' },
            { href: '#', text: 'Convocatorias' },
            { href: '#', text: 'Proyectos' },
        ],
    },
    {
        label: 'Recurso docente',
        links: [
            { href: '#', text: 'Formativas' },
            { href: '#', text: 'Actualización profesional' },
        ],
    },
];

function NavBar() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <NavBarStyled>
            <button
                type="button"
                className="mobile-toggle"
                aria-label="Abrir menú"
                aria-expanded={isMobileOpen}
                onClick={() => setIsMobileOpen((prev) => !prev)}
            >
                <FontAwesomeIcon icon={byPrefixAndName.fas['bars']} />
            </button>

            <a href="/" className="logo-card" aria-label="Inicio Vera">
                <img src={images.logoVera} alt="Rosario Vera Peñaloza" className="logo-image" />
            </a>

            <div className="menu-shell" role="navigation" aria-label="Menu principal">
                <ul className="nav-links">
                    {menuItems.map((item) => (
                        <li key={item.label} className="nav-item">
                            <a href="#" className="nav-link">
                                {item.label}
                                <span className="chevron" aria-hidden="true">
                                    ▾
                                </span>
                            </a>
                            <ul className="submenu">
                                {item.links.map((link) => (
                                    <li key={link.text}>
                                        <a href={link.href}>{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={`mobile-panel ${isMobileOpen ? 'open' : ''}`}>
                <ul className="mobile-list">
                    {menuItems.map((item) => (
                        <li key={item.label} className="mobile-group">
                            <a href="#" className="mobile-group-title" onClick={() => setIsMobileOpen(false)}>
                                {item.label}
                            </a>
                            <ul className="mobile-sublist">
                                {item.links.map((link) => (
                                    <li key={link.text}>
                                        <a href={link.href} onClick={() => setIsMobileOpen(false)}>
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </NavBarStyled>
    );
}

export default NavBar;

const NavBarStyled = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  background: transparent;
  justify-content: flex-start;
  position: relative;
  isolation: isolate;
  z-index: 60;

  width: 100%;
  flex: 0 0 auto;
  align-self: stretch;
  box-sizing: border-box;

  .mobile-toggle,
  .mobile-panel {
    display: none;
  }

  .mobile-toggle {
    border: 0;
    width: 46px;
    height: 46px;
    border-radius: 0.85rem;
    background:
      radial-gradient(130% 180% at 50% 36%, rgba(169, 141, 224, 0.3) 0%, rgba(169, 141, 224, 0.14) 48%, rgba(255, 255, 255, 0.9) 100%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.82));
    box-shadow:
      0 10px 20px rgba(59, 31, 102, 0.14),
      inset 0 1px 0 rgba(255, 255, 255, 0.95);
    align-items: center;
    justify-content: center;
    gap: 4px;
    cursor: pointer;
    padding: 0;
  }

  .mobile-toggle svg {
    width: 19px;
    height: 19px;
    color: var(--color-dark-purple);
  }

  .logo-card {
    height: 130px;
    width: 180px;
    position: relative;
    isolation: isolate;
    overflow: hidden;
    border-radius: 1.35rem;
    background:
      radial-gradient(120% 160% at 50% 45%, rgba(169, 141, 224, 0.28) 0%, rgba(169, 141, 224, 0.1) 38%, rgba(255, 255, 255, 0.94) 78%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.86));
    display: grid;
    place-items: center;
    box-shadow:
      0 14px 30px rgba(91, 46, 166, 0.16),
      inset 0 1px 0 rgba(255, 255, 255, 0.95),
      inset 0 -1px 0 rgba(169, 141, 224, 0.16);
    border: 1px solid rgba(230, 230, 239, 0.76);
    backdrop-filter: blur(10px) saturate(120%);
    padding: 0.55rem;
  }

  .logo-card::before {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    pointer-events: none;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.88) 0%,
      rgba(255, 255, 255, 0.24) 28%,
      rgba(255, 255, 255, 0) 62%
    );
    z-index: -1;
  }

  .logo-image {
    width: 75%;
    
    object-fit: contain;
    display: block;
  }

  .menu-shell {
    flex: 0 0 auto;
    margin-left: auto;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;
    isolation: isolate;
    border-radius: 1.2rem;
    background:
      radial-gradient(130% 180% at 50% 50%, rgba(169, 141, 224, 0.24) 0%, rgba(169, 141, 224, 0.11) 35%, rgba(255, 255, 255, 0.95) 78%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.84));
    border: 1px solid rgba(230, 230, 239, 0.75);
    box-shadow:
      0 12px 26px rgba(59, 31, 102, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.92),
      inset 0 -1px 0 rgba(169, 141, 224, 0.16);
    backdrop-filter: blur(8px) saturate(120%);
    overflow: visible;
    width: auto;
  }

  .menu-shell::before {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    pointer-events: none;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.85) 0%,
      rgba(255, 255, 255, 0.28) 26%,
      rgba(255, 255, 255, 0) 58%
    );
    z-index: -1;
  }

  .nav-links {
    display: flex;
    gap: 0.1rem;
    align-items: stretch;
    list-style: none;
    margin: 0;
    padding: 0 0.7rem;
  
    width: auto;
  }

  .nav-item {
    position: relative;
    display: flex;
    align-items: stretch;
  }

  .nav-link {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    position: relative;
    height: 48px;
    padding: 0 1.1rem;
    color: var(--color-dark-purple);
    text-decoration: none;
    font-family: var(--font-heading);
    font-size: 2rem;
    line-height: 1;
    font-size: clamp(0.95rem, 0.75rem + 0.35vw, 1.15rem);
    font-weight: 600;
    border-radius: 0.85rem;
    background: transparent;
    transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
    white-space: nowrap;
  }

  .nav-link::before {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s ease;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.26) 30%,
      rgba(255, 255, 255, 0) 68%
    );
  }

  .nav-item:hover .nav-link,
  .nav-item:focus-within .nav-link,
  .nav-link:hover,
  .nav-link:focus-visible {
    background: radial-gradient(130% 180% at 50% 36%, rgba(169, 141, 224, 0.34) 0%, rgba(169, 141, 224, 0.18) 48%, rgba(255, 255, 255, 0.8) 100%);
    color: var(--color-institutional-purple);
    box-shadow:
      0 8px 16px rgba(91, 46, 166, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.92);
  }

  .nav-item:hover .nav-link::before,
  .nav-item:focus-within .nav-link::before,
  .nav-link:hover::before,
  .nav-link:focus-visible::before {
    opacity: 1;
  }

  .chevron {
    font-size: 0.78rem;
    opacity: 0.85;
  }

  .submenu {
    position: absolute;
    top: calc(100% + 0.4rem);
    left: -8px;
    isolation: isolate;
    min-width: 18rem;
    padding: 0.55rem;
    list-style: none;
    margin: 10px 0;
    background:
      radial-gradient(140% 180% at 50% 32%, rgba(169, 141, 224, 0.26) 0%, rgba(169, 141, 224, 0.1) 35%, rgba(255, 255, 255, 0.95) 82%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.86));
    border: 1px solid rgba(230, 230, 239, 0.84);
    border-radius: 1rem;
    box-shadow:
      0 16px 30px rgba(59, 31, 102, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.92),
      inset 0 -1px 0 rgba(169, 141, 224, 0.15);
    backdrop-filter: blur(10px) saturate(120%);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-6px);
    transition: all 0.2s ease;
    z-index: 20;
  }

  .submenu::before {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    pointer-events: none;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.28) 26%,
      rgba(255, 255, 255, 0) 60%
    );
    z-index: -1;
  }

  .submenu li {
    position: relative;
  }

  .submenu a {
    display: block;
    padding: 0.82rem 1.3rem;
    border-radius: 0.78rem;
    position: relative;
    transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
    color: var(--color-dark-purple);
    text-decoration: none;
    font-family: var(--font-heading);
    font-size: 1.75rem;
    line-height: 1;
    font-size: clamp(1rem, 0.9rem + 0.25vw, 1.25rem);
    font-weight: 600;
  }

  .submenu a::before {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s ease;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.26) 30%,
      rgba(255, 255, 255, 0) 68%
    );
  }

  .submenu a:hover {
    background: radial-gradient(130% 180% at 50% 36%, rgba(169, 141, 224, 0.34) 0%, rgba(169, 141, 224, 0.18) 48%, rgba(255, 255, 255, 0.8) 100%);
    color: var(--color-institutional-purple);
    box-shadow:
      0 8px 16px rgba(91, 46, 166, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.92);
  }

  .submenu a:hover::before {
    opacity: 1;
  }

  .nav-item:hover .submenu,
  .nav-item:focus-within .submenu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  @media (max-width: 1160px) and (min-width: 901px) {
    overflow-x: auto;
    padding-right: 1rem;

    .menu-shell {
      min-width: max-content;
    }

    .nav-links {
      min-width: max-content;
    }
  }

  @media (max-width: 900px) {
    justify-content: center;
    padding: 0.8rem 1rem 0;
    min-height: 92px;
    overflow: visible;

    .mobile-toggle {
      display: inline-flex;
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
      z-index: 40;
    }

    .logo-card {
      margin: 0 auto;
      width: 132px;
      height: 86px;
      border-radius: 1rem;
    }

    .menu-shell {
      display: none;
    }

    .mobile-panel {
      display: block;
      position: absolute;
      left: 1rem;
      right: 1rem;
      top: calc(100% + 0.55rem);
      z-index: 45;
      border-radius: 1rem;
      padding: 0.65rem;
      background:
        radial-gradient(140% 180% at 50% 32%, rgba(169, 141, 224, 0.26) 0%, rgba(169, 141, 224, 0.1) 35%, rgba(255, 255, 255, 0.95) 82%),
        linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.86));
      border: 1px solid rgba(230, 230, 239, 0.84);
      box-shadow:
        0 16px 30px rgba(59, 31, 102, 0.12),
        inset 0 1px 0 rgba(255, 255, 255, 0.92),
        inset 0 -1px 0 rgba(169, 141, 224, 0.15);
      backdrop-filter: blur(10px) saturate(120%);
      opacity: 0;
      visibility: hidden;
      transform: translateY(-8px);
      transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
      max-height: 72vh;
      overflow-y: auto;
    }

    .mobile-panel.open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .mobile-list,
    .mobile-sublist {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .mobile-group + .mobile-group {
      margin-top: 0.5rem;
      padding-top: 0.5rem;
      border-top: 1px solid rgba(230, 230, 239, 0.8);
    }

    .mobile-group-title,
    .mobile-sublist a {
      display: block;
      text-decoration: none;
      border-radius: 0.72rem;
      color: var(--color-dark-purple);
      padding: 0.65rem 0.8rem;
    }

    .mobile-group-title {
      font-family: var(--font-heading);
      font-weight: 700;
      font-size: 0.98rem;
    }

    .mobile-sublist {
      margin-top: 0.2rem;
    }

    .mobile-sublist a {
      font-family: var(--font-body);
      font-weight: 500;
      font-size: 0.9rem;
      color: var(--color-text);
    }

    .mobile-group-title:hover,
    .mobile-sublist a:hover {
      background: radial-gradient(130% 180% at 50% 36%, rgba(169, 141, 224, 0.34) 0%, rgba(169, 141, 224, 0.18) 48%, rgba(255, 255, 255, 0.8) 100%);
      color: var(--color-institutional-purple);
      box-shadow:
        0 8px 16px rgba(91, 46, 166, 0.12),
        inset 0 1px 0 rgba(255, 255, 255, 0.92);
    }
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1rem 0;
    gap: 0.85rem;

    .logo-card {
      width: 112px;
      height: 74px;
      border-radius: 1rem;
    }

    .mobile-panel {
      left: 0.75rem;
      right: 0.75rem;
    }
  }
`;