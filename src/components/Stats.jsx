import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getTotalCareersCount } from '../data/careersCatalog';

const COUNT_DURATION_MS = 3000;

function useAnimatedCount(target, durationMs = COUNT_DURATION_MS) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const safeTarget = Number.isFinite(target) ? Math.max(0, Math.floor(target)) : 0;

        setCount(0);

        if (safeTarget === 0) {
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
    }, [durationMs, target]);

    return count;
}

function StatCard({ value, label }) {
    const animatedValue = useAnimatedCount(value);

    return (
        <article className="stat-card">
            <strong className="stat-value" aria-label={String(value)}>{animatedValue}</strong>
            <span className="stat-label">{label}</span>
        </article>
    );
}

function Stats() {
    const totalCareers = getTotalCareersCount();

    return (
        <StatsStyled>
            <div className="stats-grid">
                <StatCard value={totalCareers} label="Carreras" />
                <StatCard value={280} label="Egresados/as" />
                <StatCard value={854} label="Estudiantes actuales" />
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
        border-radius: 1.35rem;
        padding: 1.2rem 1rem;
        border: 1px solid rgba(231, 224, 249, 0.68);
        background-color: rgba(248, 247, 255, 0.48);
        background-image:
            radial-gradient(
                130% 160% at 50% 52%,
                rgba(var(--qa-purple-a), 0.16) 0%,
                rgba(var(--qa-purple-b), 0.1) 34%,
                rgba(var(--qa-purple-c), 0.06) 56%,
                rgba(255, 255, 255, 0.24) 100%
            ),
            linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.28) 0%,
                rgba(248, 245, 255, 0.17) 48%,
                rgba(255, 255, 255, 0.28) 100%
            );
        backdrop-filter: blur(16px) saturate(132%);
        box-shadow:
            0 14px 32px rgba(98, 63, 155, 0.14),
            inset 0 1px 0 rgba(255, 255, 255, 0.66),
            inset 0 -1px 0 rgba(203, 178, 240, 0.32);
        position: relative;
        overflow: hidden;
    }

    .stat-card::before {
        content: '';
        position: absolute;
        inset: 1px;
        border-radius: inherit;
        pointer-events: none;
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.4) 0%,
            rgba(255, 255, 255, 0.12) 24%,
            rgba(255, 255, 255, 0) 62%
        );
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
