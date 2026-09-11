import { useEffect, useRef, useState } from 'react';
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
  const navLinksRef = useRef(null);
    const menuShellRef = useRef(null);
  const [activePill, setActivePill] = useState({ left: 0, top: 0, width: 0, height: 0, visible: false });

    const moveActivePill = (linkElement) => {
      const menuShellElement = menuShellRef.current;

      if (!menuShellElement || !linkElement) {
      return;
    }

      const menuRect = menuShellElement.getBoundingClientRect();
    const linkRect = linkElement.getBoundingClientRect();

    setActivePill({
        left: linkRect.left - menuRect.left,
        top: linkRect.top - menuRect.top,
      width: linkRect.width,
        height: linkRect.height,
      visible: true,
    });
  };

  useEffect(() => {
    const handleResize = () => setActivePill((currentPill) => ({ ...currentPill, visible: false }));
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

            <a href="/" className="logo-card liquid-glass-effect" aria-label="Inicio Vera">
                <img src={images.logoVera} alt="Rosario Vera Peñaloza" className="logo-image" />
            </a>

            <div
              ref={menuShellRef}
              className="menu-shell liquid-glass-effect"
              role="navigation"
              aria-label="Menu principal"
              onMouseLeave={() => setActivePill((currentPill) => ({ ...currentPill, visible: false }))}
            >
                <span
                  className="nav-active-pill"
                  aria-hidden="true"
                  style={{
                      left: `${activePill.left}px`,
                      top: `${activePill.top}px`,
                      width: `${activePill.width}px`,
                      height: `${activePill.height}px`,
                      opacity: activePill.visible ? 1 : 0,
                  }}
                />
                <ul
                  ref={navLinksRef}
                  className="nav-links"
                >
                  {menuItems.map((item) => (
                    <li
                      key={item.label}
                      className="nav-item"
                            onMouseEnter={(event) => moveActivePill(event.currentTarget.querySelector('.nav-link'))}
                            onFocus={(event) => moveActivePill(event.currentTarget.querySelector('.nav-link'))}
                    >
                            <a href="#" className="nav-link">
                                {item.label}
                                <span className="chevron" aria-hidden="true">
                                    ▾
                                </span>
                            </a>
                            <ul className="submenu">
                                {item.links.map((link) => (
                                    <li key={link.text}>
                                        <a
                                          href={link.href}
                                          onMouseEnter={(event) => moveActivePill(event.currentTarget)}
                                          onFocus={(event) => moveActivePill(event.currentTarget)}
                                        >
                                          {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={`mobile-panel liquid-glass-effect ${isMobileOpen ? 'open' : ''}`}>
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
  --nav-pill-bounce: 1.2;
  --nav-pill-speed: 0.36s;

  display: flex;
  align-items: center;
  gap: 1.25rem;

  background: transparent;
  justify-content: flex-start;
  position: relative;
  isolation: isolate;
  z-index: 60;
  min-width: 0;
  flex: 1 1 auto;
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
      0 12px 24px rgba(var(--glass-shadow-rgb), 0.11),
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
    flex: 0 0 auto;
    height: 110px;
    width: 150px;
    position: relative;
    isolation: isolate;
    overflow: hidden;
    border-radius: 1.35rem;
    display: grid;
    place-items: center;
    padding: 0.55rem;
  }

  .logo-image {
    width: 75%;
    
    object-fit: contain;
    display: block;
  }

  .menu-shell {
    flex: 0 0 auto;
    margin-left: auto;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;
    isolation: isolate;
    border-radius: 1.2rem;
    padding: 0;
    overflow: visible;
    width: auto;
  }

  .nav-links {
    position: relative;
    display: flex;
    gap: 0.1rem;
    align-items: stretch;
    list-style: none;
    margin: 0;
    padding: 0 0.55rem;
  
    width: auto;
  }

  .nav-active-pill {
    position: absolute;
    box-sizing: border-box;
    top: 0;
    bottom: auto;
    padding: 0;
    z-index: 0;
    pointer-events: none;
    border-radius: 0.85rem;
    border: 1px solid rgba(255, 255, 255, 0.98);
    background: var(--color-white);
    background-image: none;
    box-shadow: 0 5px 12px rgba(var(--glass-shadow-rgb), 0.2);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    transition:
      left var(--nav-pill-speed) cubic-bezier(0.34, var(--nav-pill-bounce), 0.64, 1),
      top var(--nav-pill-speed) cubic-bezier(0.34, var(--nav-pill-bounce), 0.64, 1),
      width var(--nav-pill-speed) cubic-bezier(0.34, var(--nav-pill-bounce), 0.64, 1),
      height var(--nav-pill-speed) cubic-bezier(0.34, var(--nav-pill-bounce), 0.64, 1),
      opacity 0.18s ease;
  }

  .nav-active-pill::before,
  .nav-active-pill::after {
    display: none;
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
    height: 44px;
    padding: 0 0.9rem;
    color: var(--color-dark-purple);
    text-decoration: none;
    font-family: var(--font-heading);
    font-size: 2rem;
    line-height: 1;
    font-size: clamp(0.9rem, 0.73rem + 0.3vw, 1.05rem);
    font-weight: 600;
    border-radius: 0.85rem;
    background: transparent;
    border: 1px solid transparent;
    z-index: 1;
    transition: color 0.2s ease;
    white-space: nowrap;
  }

  .nav-item:hover .nav-link,
  .nav-item:focus-within .nav-link,
  .nav-link:hover,
  .nav-link:focus-visible {
    color: var(--color-institutional-purple);
  }

  .chevron {
    font-size: 0.78rem;
    opacity: 0.85;
  }

  .submenu {
    position: absolute;
    top: 100%;
    left: -8px;
    isolation: isolate;
    min-width: 18rem;
    padding: 0.55rem;
    list-style: none;
    margin: 0;
    background:
      radial-gradient(125% 145% at 14% 0%, rgba(255, 255, 255, 0.72) 0%, rgba(255, 255, 255, 0) 48%),
      radial-gradient(110% 140% at 90% 100%, rgba(169, 141, 224, 0.32) 0%, rgba(169, 141, 224, 0) 66%),
      rgba(245, 242, 255, 0.64);
    border: 1px solid rgba(255, 255, 255, 0.76);
    border-radius: 1rem;
    box-shadow:
      0 20px 40px rgba(var(--glass-shadow-rgb), 0.14),
      inset 0 1px 0 rgba(255, 255, 255, 0.9),
      inset 0 -1px 0 rgba(107, 76, 163, 0.16);
    backdrop-filter: blur(20px) saturate(150%);
    -webkit-backdrop-filter: blur(20px) saturate(150%);
    display: none;
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
    border: 1px solid transparent;
    transition: background 0.18s ease, border-color 0.18s ease, color 0.18s ease, box-shadow 0.18s ease;
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
    color: var(--color-institutional-purple);
  }

  .nav-item:hover .submenu,
  .nav-item:focus-within .submenu {
    display: block;
  }

  @media (max-width: 1600px) {
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
      box-sizing: border-box;
      padding: 0.65rem;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-8px);
      transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
      max-height: 72vh;
      overflow-y: auto;
      scrollbar-width: none;
      -ms-overflow-style: none;

      /* El filtro SVG de liquid-glass-effect desplaza el fondo y vuelve
         ilegibles las opciones sobre contenido con mucho contraste. */
      background: rgba(250, 248, 255, 0.9);
      border: 1px solid rgba(255, 255, 255, 0.9);
      box-shadow:
        0 16px 32px rgba(var(--glass-shadow-rgb), 0.18),
        inset 0 1px 0 rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(18px) saturate(115%);
      -webkit-backdrop-filter: blur(18px) saturate(115%);
    }

    .mobile-panel::before {
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.42), transparent 36%);
      opacity: 1;
    }

    .mobile-panel::after {
      display: none;
    }

    .mobile-panel::-webkit-scrollbar {
      display: none;
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
        0 10px 20px rgba(var(--glass-shadow-rgb), 0.1),
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
