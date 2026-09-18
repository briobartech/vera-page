import styled from 'styled-components';
import { useEffect, useState } from 'react';
import VirtualAccess from '../components/VirtualAccess';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '../data/icons.js';
import authorities from '../assets/authorities.json';
import Footer from '../components/Footer';
function Autoridades() {
    const [hoveredAdministrator, setHoveredAdministrator] = useState('');
    const [isMobile, setIsMobile] = useState(false);
    const directives = Object.entries(authorities.directives);
    const imageBasePath = `${import.meta.env.BASE_URL}images/`;

    useEffect(() => {
        directives.forEach(([, directive]) => {
            const image = new Image();
            image.src = `${imageBasePath}${directive.image}`;
        });
    }, [directives, imageBasePath]);

    useEffect(() => {
        const mobileQuery = window.matchMedia('(max-width: 768px)');
        const updateMobileState = () => setIsMobile(mobileQuery.matches);

        updateMobileState();
        mobileQuery.addEventListener('change', updateMobileState);

        return () => mobileQuery.removeEventListener('change', updateMobileState);
    }, []);

    const handleAdministratorHover = (id) => {
        if (!isMobile) {
            setHoveredAdministrator(id);
        }
    };

    const clearAdministratorHover = () => {
        if (!isMobile) {
            setHoveredAdministrator('');
        }
    };

    return (
        <AutoridadesStyle>
            <VirtualAccess />
            <Navbar />
            <section>
                <div className="administrators-section">
                    <div className="administrators-image-frame">
                        <img
                            className={`administrators-image administrators-image--base${hoveredAdministrator ? ' is-hidden' : ''}`}
                            src={`${imageBasePath}directivos.png`}
                            alt="Equipo directivo"
                        />
                        {directives.map(([id, directive]) => (
                            <img
                                key={id}
                                className={`administrators-image administrators-image--authority${id === 'rector' ? ' administrators-image--tall' : ''}${hoveredAdministrator === id ? ' is-visible' : ''}`}
                                src={`${imageBasePath}${directive.image}`}
                                alt={`${directive.title} ${directive.name}`}
                                aria-hidden={hoveredAdministrator !== id}
                            />
                        ))}
                    </div>
                    <div className="admin-team liquid-glass-effect">
                        <h1 className="section-title title-1">Equipo Directivo</h1>
                        {directives.map(([id, directive]) => (
                            <a
                                href="#"
                                className="administrator-link"
                                id={id}
                                key={id}
                                onMouseEnter={() => handleAdministratorHover(id)}
                                onMouseLeave={clearAdministratorHover}
                                onFocus={() => handleAdministratorHover(id)}
                                onBlur={clearAdministratorHover}
                            >
                                <div className="section-icon liquid-glass-effect"><FontAwesomeIcon icon={icons.faUser} /></div>
                                <div className="administrator-info">
                                    <p className="administrator-title">{directive.title} </p>
                                    <p className='administrator-name'> {directive.name}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="academic-council liquid-glass-effect">
                    <h1 className="section-title title-1">Consejo Académico</h1>
                    {Object.values(authorities.council).map(({ title, name }) => (
                        <div key={title}><p>{title}</p> <b className="administrator-title">{name}</b></div>
                    ))}
                </div>
                <div className="careers-coordinator liquid-glass-effect">
                    <h1 className="section-title title-1">Coordinadores de Carreras</h1>
                    {Object.values(authorities.careers_coordinators).map(({ title, name }) => (
                        <div key={title} > <p>{title}</p> <b className="administrator-title">{name}</b></div>
                    ))}
                </div>
            </section>
            <Footer />
        </AutoridadesStyle>
    );
}

export default Autoridades;

const AutoridadesStyle = styled.div`
    width: min(80%, 1440px);
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

    .administrators-section{
    display: flex;
    align-items: center;
    gap: 20px;
    flex-direction: row;
    justify-content: space-between;
    }
    .section-title strong{
        font-weight: 700;
    }
    .administrators-image{
        width: 100%;
        height: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        display: block;
        border-radius: 2rem;
        position: absolute;
        inset: 0;
        opacity: 0;
        transform: scale(1.015);
        filter: blur(2px) saturate(0.96);
        transition:
            opacity 520ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1),
            filter 520ms ease;
        will-change: opacity, transform, filter;
        pointer-events: none;
    }

    .administrators-image-frame {
        position: relative;
    }

    .administrators-image--base {
        opacity: 1;
        transform: scale(1);
        filter: blur(0) saturate(1);
    }

    .administrators-image--base.is-hidden {
        opacity: 0;
        transform: scale(1.015);
        filter: blur(2px) saturate(0.96);
    }

    .administrators-image--authority.is-visible {
        opacity: 1;
        transform: scale(1);
        filter: blur(0) saturate(1);
    }

    .administrators-image--tall{
        object-fit: contain;
    }

    .administrators-image-frame{
        width: min(100%, 520px);
        height: 520px;
        aspect-ratio: 1 / 1;
        overflow: hidden;
        border-radius: 2rem;
        background: rgba(255, 255, 255, 0.12);
    }

    .admin-team{
        width: min(100%, 520px);
        padding: 3rem;
        
    }
    .section-icon{
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.12);
        margin-right: 1rem;
    }
    .section-title{
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    .administrator-link{
        display: flex;
        flex-direction: row;
        align-items: center;
        text-decoration: none;
        color: inherit;
        padding: 1rem;
        border-radius: 2rem;
        transition: all 0.3s ease;
        margin: 1rem;
    }
    @media (hover: hover) and (pointer: fine) {
        .administrator-link:hover{
            transform: translateY(-5px);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
    }
    .administrator-info{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    .administrator-title{
        font-weight: bold;
    }
    .administrator-name{
        font-style: italic;
    }

    .academic-council, .careers-coordinator{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin: 1rem;
        padding: 1rem;
        width: 100%;
    }
    @media (max-width: 768px) {
        .administrators-section{
            width: 100%;
            flex-direction: column;
            gap: 0;
        }

        .admin-team,
        .academic-council,
        .careers-coordinator{
            width: 100%;
            box-sizing: border-box;
            margin: 0 0 1rem;
        }

        .administrators-image-frame{
            width: min(100%, 360px);
            height: 360px;
            position: relative;
            z-index: 0;
            margin-bottom: -4rem;
        }

        .admin-team{
            position: relative;
            z-index: 1;
            padding-top: 5rem;
            backdrop-filter: blur(12px) saturate(110%);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .administrators-image{
            transition-duration: 1ms;
        }
    }
`;