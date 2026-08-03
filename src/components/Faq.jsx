import styled from 'styled-components';

function Faq() {
        return (
                <FaqStyled>
                        <div className="faq-pill" role="button" tabIndex={0} aria-label="Preguntas frecuentes">
                            <h2><span>Preguntas frecuentes</span></h2>
                                <div className="icon-faq" aria-hidden="true">
                                        <span className="faq-mark">?</span>
                                </div>
                        </div>
                </FaqStyled>
        );
}

export default Faq;

const FaqStyled = styled.section`
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    padding: 1rem;
    margin: 2rem 0;
    border-radius: 1.7rem;
    background:
        radial-gradient(120% 160% at 50% 45%, rgba(169, 141, 224, 0.2) 0%, rgba(169, 141, 224, 0.08) 38%, rgba(255, 255, 255, 0.95) 78%),
        linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.86));
    border: 1px solid rgba(230, 230, 239, 0.76);
    box-shadow:
        0 14px 30px rgba(91, 46, 166, 0.15),
        inset 0 1px 0 rgba(255, 255, 255, 0.95),
        inset 0 -1px 0 rgba(169, 141, 224, 0.16);
    backdrop-filter: blur(10px) saturate(120%);

    .faq-pill {
        position: relative;
        isolation: isolate;
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
        min-height: 74px;
        display: grid;
        grid-template-columns: 1fr 92px;
        align-items: stretch;
        border-radius: 1.3rem;
        overflow: hidden;
        border: 1px solid rgba(214, 201, 237, 0.88);
        background:
            radial-gradient(140% 190% at 50% 30%, rgba(186, 158, 233, 0.42) 0%, rgba(169, 141, 224, 0.2) 44%, rgba(255, 255, 255, 0.86) 100%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.78));
        box-shadow:
            0 16px 30px rgba(59, 31, 102, 0.18),
            0 0 0 3px rgba(195, 173, 236, 0.22),
            inset 0 1px 0 rgba(255, 255, 255, 0.95),
            inset 0 -1px 0 rgba(132, 87, 199, 0.22);
        backdrop-filter: blur(10px) saturate(122%);
        cursor: pointer;
        transition: transform 0.2s ease, box-shadow 0.22s ease, filter 0.22s ease;
    }

    .faq-pill::before {
        content: '';
        position: absolute;
        inset: 1px;
        border-radius: inherit;
        pointer-events: none;
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.82) 0%,
            rgba(255, 255, 255, 0.28) 26%,
            rgba(255, 255, 255, 0) 58%
        );
        z-index: 0;
    }

    .faq-pill::after {
        content: '';
        position: absolute;
        left: 8%;
        right: 8%;
        bottom: -26%;
        height: 55%;
        border-radius: 50%;
        background: radial-gradient(70% 70% at 50% 40%, rgba(138, 88, 208, 0.24) 0%, rgba(138, 88, 208, 0) 100%);
        filter: blur(10px);
        pointer-events: none;
        z-index: -1;
    }

    .faq-pill:hover,
    .faq-pill:focus-visible {
        transform: translateY(-1px);
        box-shadow:
            0 18px 34px rgba(59, 31, 102, 0.22),
            0 0 0 4px rgba(195, 173, 236, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.95),
            inset 0 -1px 0 rgba(132, 87, 199, 0.26);
        filter: saturate(106%);
    }

    .faq-pill:focus-visible {
        outline: 2px solid rgba(255, 255, 255, 0.85);
        outline-offset: 3px;
    }

    h2 {
        margin: 0;
        position: relative;
        z-index: 1;
        isolation: isolate;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.8rem 1rem;
        border-radius: 1.22rem 0 0 1.22rem;
        border: 1px solid rgba(255, 255, 255, 0.18);
        border-right: 0;
        font-family: var(--font-heading);
        font-size: clamp(1rem, 0.9rem + 0.5vw, 1.35rem);
        font-weight: 700;
        color: var(--color-white);
        text-align: center;
        background:
            linear-gradient(135deg, rgba(167, 98, 231, 0.78) 0%, rgba(149, 75, 221, 0.78) 52%, rgba(127, 54, 199, 0.78) 100%);
        box-shadow:
            inset 0 -8px 18px rgba(66, 35, 120, 0.2),
            -10px 0 22px rgba(160, 110, 235, 0.3),
            0 10px 26px rgba(86, 49, 145, 0.22);
        text-shadow:
            0 0 8px rgba(91, 46, 166, 0.35),
            0 0 16px rgba(91, 46, 166, 0.22);
    }

    h2 span {
        position: relative;
        z-index: 2;
    }

    h2::before {
        content: '';
        position: absolute;
        inset: -12px -10px;
        border-radius: 22px 0 0 22px;
        z-index: -2;
        pointer-events: none;
        background:
            radial-gradient(66% 126% at 0% 50%, rgba(207, 156, 255, 0.56) 0%, rgba(207, 156, 255, 0.3) 36%, rgba(207, 156, 255, 0) 75%),
            radial-gradient(84% 94% at 24% 0%, rgba(207, 156, 255, 0.36) 0%, rgba(207, 156, 255, 0) 72%),
            radial-gradient(84% 94% at 24% 100%, rgba(207, 156, 255, 0.34) 0%, rgba(207, 156, 255, 0) 72%);
        filter: blur(12px);
        opacity: 0.98;
    }

    h2::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 1.22rem 0 0 1.22rem;
        pointer-events: none;
        background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 24%),
            linear-gradient(0deg, rgba(237, 201, 255, 0.38) 0%, rgba(237, 201, 255, 0) 26%),
            linear-gradient(90deg, rgba(237, 201, 255, 0) 84%, rgba(237, 201, 255, 0.34) 94%, rgba(186, 160, 224, 0.2) 100%);
        box-shadow:
            inset 2px 0 0 rgba(255, 255, 255, 0.28),
            inset 0 2px 0 rgba(255, 255, 255, 0.3),
            inset 0 -2px 0 rgba(214, 169, 255, 0.48);
        z-index: 1;
    }

    .icon-faq {
        position: relative;
        z-index: 1;
        display: grid;
        place-items: center;
        isolation: isolate;
        background:
            radial-gradient(118% 170% at 0% 36%, rgba(179, 142, 232, 0.34) 0%, rgba(146, 131, 187, 0.2) 20%, rgba(122, 129, 151, 0.12) 36%, rgba(122, 129, 151, 0) 46%),
            radial-gradient(125% 170% at 50% 34%, rgba(122, 129, 151, 0.45) 0%, rgba(88, 96, 121, 0.72) 44%, rgba(60, 68, 94, 0.92) 100%),
            linear-gradient(180deg, rgba(115, 123, 148, 0.72), rgba(70, 78, 103, 0.92));
        box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.35),
            inset 10px 0 24px rgba(20, 24, 39, 0.18);
    }

    .icon-faq::before {
        content: '';
        position: absolute;
        inset: 1px;
        pointer-events: none;
        border-radius: 0 1.2rem 1.2rem 0;
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.45) 0%,
            rgba(255, 255, 255, 0.14) 28%,
            rgba(255, 255, 255, 0) 64%
        );
        z-index: 0;
    }

    .icon-faq::after {
        content: '';
        position: absolute;
        left: -18px;
        top: 0;
        bottom: 0;
        width: 34px;
        pointer-events: none;
        background: linear-gradient(90deg, rgba(176, 130, 236, 0.46) 0%, rgba(163, 138, 211, 0.24) 46%, rgba(122, 129, 151, 0) 100%);
        filter: blur(4px);
        z-index: 0;
    }

    .faq-mark {
        position: relative;
        z-index: 1;
        width: 42px;
        height: 42px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        border: 1px solid rgba(169, 141, 224, 0.46);
        color: rgba(255, 255, 255, 0.96);
        font-family: var(--font-heading);
        font-size: 1.6rem;
        font-weight: 800;
        line-height: 1;
        background:
            radial-gradient(130% 160% at 32% 28%, rgba(255, 255, 255, 0.95) 0%, rgba(169, 141, 224, 0.24) 42%, rgba(169, 141, 224, 0.34) 100%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(169, 141, 224, 0.28));
        text-shadow:
            0 0 10px rgba(91, 46, 166, 0.35),
            0 1px 1px rgba(255, 255, 255, 0.45);
        box-shadow:
            0 8px 16px rgba(154, 112, 221, 0.16),
            0 0 0 5px rgba(183, 158, 231, 0.16),
            inset 0 1px 0 rgba(255, 255, 255, 0.22);
    }

    @media (max-width: 640px) {
        padding: 0.75rem;

        .faq-pill {
            grid-template-columns: 1fr 74px;
            min-height: 64px;
        }

        h2 {
            font-size: clamp(0.95rem, 0.9rem + 0.4vw, 1.05rem);
            padding: 0.7rem 0.75rem;
        }

        .faq-mark {
            width: 34px;
            height: 34px;
            font-size: 1.25rem;
            border-width: 2.5px;
        }
    }
`;