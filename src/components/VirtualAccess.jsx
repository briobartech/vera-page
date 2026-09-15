import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '../data/icons.js';

function VirtualAccess() {
    const accessRef = useRef(null);
    const [isFloating, setIsFloating] = useState(false);

    useEffect(() => {
        let frameId;

        const updateVisibility = () => {
            frameId = undefined;

            const element = accessRef.current;
            if (!element) return;

            const rect = element.getBoundingClientRect();

            const outsideViewport =
                rect.bottom <= 0 ||
                rect.top >= window.innerHeight ||
                rect.right <= 0 ||
                rect.left >= window.innerWidth;

            setIsFloating(outsideViewport);
        };

        const handleScroll = () => {
            if (frameId === undefined) {
                frameId = window.requestAnimationFrame(updateVisibility);
            }
        };

        updateVisibility();

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);

            if (frameId !== undefined) {
                window.cancelAnimationFrame(frameId);
            }
        };
    }, []);

    return (
        <VirtualAccessStyled>
            {/* Botón original */}
            <button
                ref={accessRef}
                className={`virtual-access ${
                    isFloating ? 'is-hidden' : ''
                } liquid-glass-effect`}
                type="button"
            >
                <span className="button-content">
                    <FontAwesomeIcon icon={icons.faLaptop} />
                    <span>Acceso virtual</span>
                </span>
            </button>

            {/* Botón flotante */}
            <button
                className={`virtual-access-float ${
                    isFloating ? 'is-floating' : ''
                } liquid-glass-effect`}
                type="button"
            >
                <span className="button-content">
                    <FontAwesomeIcon
                        icon={icons.faLaptop}
                        aria-hidden="true"
                    />

                    <span className="float-label">
                        Acceso virtual
                    </span>
                </span>
            </button>
        </VirtualAccessStyled>
    );
}

export default VirtualAccess;

const VirtualAccessStyled = styled.section`
    position: absolute;
    top: 15px;
    right: 2%;
    z-index: 100;

    /* =========================================
       LIQUID GLASS
    ========================================= */

    .liquid-glass-effect {
        position: relative;

        border: 2px solid transparent;
        border-radius: 2rem;

        background:
            radial-gradient(
                120% 80% at 12% 4%,
                rgba(255, 255, 255, 0.42) 0%,
                rgba(255, 255, 255, 0) 58%
            ),
            radial-gradient(
                95% 70% at 88% 18%,
                rgba(157, 126, 226, 0.2) 0%,
                rgba(157, 126, 226, 0) 68%
            ),
            radial-gradient(
                85% 65% at 78% 88%,
                rgba(255, 174, 158, 0.13) 0%,
                rgba(255, 174, 158, 0) 64%
            ),
            radial-gradient(
                90% 70% at 8% 78%,
                rgba(177, 210, 244, 0.1) 0%,
                rgba(177, 210, 244, 0) 66%
            ),
            rgba(255, 255, 255, 0.08);

        box-shadow:
            0 0 0 2px rgba(255, 255, 255, 0.6),
            0 var(--liquid-glass-shadow-y, 16px)
              var(--liquid-glass-shadow-blur, 32px)
              var(--liquid-glass-shadow-color, rgba(0, 0, 0, 0.12)),
            inset 0 1px 0 rgba(255, 255, 255, 0.82),
            inset 0 -1px 0 rgba(91, 46, 166, 0.18);

        backdrop-filter: url(#liquid-glass-frosted);
        -webkit-backdrop-filter: url(#liquid-glass-frosted);
    }

    .liquid-glass-effect::before {
        content: '';

        position: absolute;
        inset: 1px;

        border-radius: inherit;

        pointer-events: none;

        background:
            linear-gradient(
                135deg,
                rgba(255, 255, 255, 0.62),
                transparent 28%,
                transparent 66%,
                rgba(145, 113, 220, 0.16)
            ),
            radial-gradient(
                60% 42% at 88% 4%,
                rgba(255, 192, 178, 0.12),
                transparent 72%
            ),
            radial-gradient(
                70% 45% at 4% 92%,
                rgba(173, 207, 242, 0.08),
                transparent 74%
            );

        opacity: 0.72;
    }

    .liquid-glass-effect::after {
        content: '';

        position: absolute;
        inset: 0;

        border-radius: inherit;

        pointer-events: none;

        box-shadow:
            inset 0 0 18px rgba(255, 255, 255, 0.28);
    }

    /* =========================================
       CONTENIDO
    ========================================= */

    .button-content {
        position: relative;
        z-index: 1;

        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.65rem;
    }

    /* =========================================
       BOTÓN SUPERIOR
    ========================================= */

    .virtual-access {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.65rem;

    height: 44px;
    padding: 0 1rem;

    border: 0;
    border-radius: 2rem;

    color: var(--color-dark-purple);
    font-family: var(--font-heading);
    font-weight: 700;

    cursor: pointer;

    box-sizing: border-box;

    opacity: 1;
    transform: translateY(0);

    transition:
        opacity 0.4s ease,
        transform 0.4s ease;
}

    .virtual-access.is-hidden {
        opacity: 0;
        transform: translateY(-10px);
        pointer-events: none;
    }

    /* =========================================
       BOTÓN FLOTANTE
    ========================================= */

    .virtual-access-float {
    position: fixed;

    right: 1.25rem;
    bottom: 1.25rem;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.65rem;

    height: 44px;
    min-width: 44px;
    padding: 0 1rem;

    border: 0;
    border-radius: 2rem;

    color: var(--color-dark-purple);
    font-family: var(--font-heading);
    font-weight: 700;

    cursor: pointer;

    box-sizing: border-box;

    opacity: 0;
    visibility: hidden;
    pointer-events: none;

    transform: translateY(20px) scale(0.95);

    transition:
        opacity 0.6s ease,
        transform 0.6s ease,
        visibility 0s linear 0.6s;
}

    /* =========================================
       FLOTANTE ACTIVO
    ========================================= */

   .virtual-access-float.is-floating {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;

    transform: translateY(0) scale(1);

    transition:
        opacity 0.6s ease,
        transform 0.6s ease;
}

    /* =========================================
       TEXTO DEL BOTÓN FLOTANTE
    ========================================= */

    .float-label {
    display: block;

    max-width: 200px;

    overflow: hidden;
    white-space: nowrap;

    opacity: 1;

    transition:
        max-width 0.5s ease,
        opacity 0.3s ease;
}

    /*
     * Cuando aparece el flotante:
     *
     * 1. Entra completo.
     * 2. Espera 3 segundos.
     * 3. El texto se contrae.
     */

    .virtual-access-float.is-floating .float-label {
        animation:
            collapseText 0.5s ease forwards 3s;
    }

    /* =========================================
       HOVER
    ========================================= */

    .virtual-access-float.is-floating:hover .float-label {
        max-width: 200px;
        opacity: 1;

        animation: none;
    }

    /* =========================================
       ANIMACIÓN DEL TEXTO
    ========================================= */

    @keyframes collapseText {
    from {
        max-width: 200px;
        opacity: 1;
    }

    to {
        max-width: 0;
        opacity: 0;
        display: none;
    }
}


    .virtual-access-float.is-floating .float-label {
    animation: collapseText 0.5s ease forwards 3s;
}

.virtual-access-float.is-floating:hover .float-label {
    max-width: 200px;
    opacity: 1;
    animation: none;
}

    /* =========================================
       MOBILE
    ========================================= */
    /* @media (max-width: 1600px) {
    
        left: 2%;
    
    } */
    @media (max-width: 768px) {
    
        .virtual-access-float {
            right: 0.75rem;
            bottom: 0.75rem;
        }
    }
}
`;