import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { getTotalCareersCount } from '../data/careersCatalog';

const COUNT_DURATION_MS = 3000;

function useAnimatedCount(target, shouldStart, durationMs = COUNT_DURATION_MS) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const safeTarget = Number.isFinite(target) ? Math.max(0, Math.floor(target)) : 0;

        setCount(0);

        if (!shouldStart || safeTarget === 0) {
            return;
        }

        const stepDelay = durationMs / safeTarget;
        let currentValue = 0;
        let timerId;

        const tick = () => {
            currentValue += 1;
            setCount(currentValue);

            if (currentValue < safeTarget) {
                timerId = window.setTimeout(tick, stepDelay);
            }
        };

        timerId = window.setTimeout(tick, stepDelay);

        return () => {
            if (timerId) {
                window.clearTimeout(timerId);
            }
        };
    }, [durationMs, shouldStart, target]);

    return count;
}

function StatCard({ value, label, shouldStart }) {
    const animatedValue = useAnimatedCount(value, shouldStart);

    return (
        <article className="stat-card liquid-glass-effect">
            <strong className="stat-value" aria-label={String(value)}>{animatedValue}</strong>
            <span className="stat-label">{label}</span>
        </article>
    );
}

function Stats() {
    const totalCareers = getTotalCareersCount();
    const statsRef = useRef(null);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const statsElement = statsRef.current;

        if (!statsElement || hasStarted) {
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setHasStarted(true);
                observer.disconnect();
            }
        }, { threshold: 0.2 });

        observer.observe(statsElement);

        return () => observer.disconnect();
    }, [hasStarted]);

    return (
        <StatsStyled ref={statsRef}>
            <div className="stats-grid">
                <StatCard value={totalCareers} label="Carreras" shouldStart={hasStarted} />
                <StatCard value={280} label="Egresados/as" shouldStart={hasStarted} />
                <StatCard value={854} label="Estudiantes actuales" shouldStart={hasStarted} />
            </div>
        </StatsStyled>
    );
}

export default Stats;

const StatsStyled = styled.section`
    --qa-purple-a: 174, 102, 220;
    --qa-purple-b: 148, 78, 198;
    --qa-purple-c: 126, 62, 176;

    width: 100%;
    padding: 1rem 0 1.3rem;

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1.2rem;
    }

    .stat-card {
        min-height: 156px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.6rem;
        padding: 1.2rem 1rem;
        position: relative;
        overflow: hidden;
        transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease;
    }

    .stat-card:hover {
        transform: translateY(-3px);
        filter: saturate(1.08) brightness(1.03);
    }

    .stat-value {
        margin: 0;
        font-family: var(--font-heading);
        font-size: clamp(3rem, 2.4rem + 0.95vw, 5rem);
        line-height: 0.95;
        font-weight: 700;
        color: #5c35b4;
        position: relative;
        z-index: 1;
    }

    .stat-label {
        position: relative;
        z-index: 1;
        font-family: var(--font-heading);
        font-size: clamp(1.2rem, 1rem + 0.3vw, 1.45rem);
        font-weight: 500;
        letter-spacing: 0.01em;
        text-align: center;
        color: #5c35b4;
    }

    @media (max-width: 1080px) {
        .stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .stat-card:last-child {
            grid-column: 1 / -1;
        }
    }

    @media (max-width: 760px) {
        .stats-grid {
            grid-template-columns: minmax(0, 1fr);
        }

        .stat-card {
            min-height: 142px;
        }

        .stat-card:last-child {
            grid-column: auto;
        }
    }
`;
