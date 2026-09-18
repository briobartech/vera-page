import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faQuestion } from '@fortawesome/free-solid-svg-icons';

export const faqData = {
    title: 'Preguntas frecuentes',
    subtitle: 'Resolvé las dudas más comunes sobre el ingreso.',
    contact: {
        label: '¿No encontrás la respuesta?',
        action: 'Contactanos',
        href: '/contacto',
    },
    questions: [
        { question: '¿El instituto es gratuito?', answer: 'Sí. El instituto es público y la formación es gratuita.' },
        { question: '¿Puedo inscribirme en más de una carrera?', answer: 'Podés consultar las condiciones de inscripción para cada carrera antes de completar el formulario.' },
        { question: '¿El ingreso es eliminatorio?', answer: 'Revisá los requisitos de la carrera elegida y el material de ingreso correspondiente.' },
        { question: '¿Dónde presento la documentación?', answer: 'La documentación se presenta en la institución durante las fechas informadas para el ingreso.' },
    ],
};

function Faq({ data = faqData }) {
    const [openQuestion, setOpenQuestion] = useState(null);
    const { title, subtitle, contact, questions = [] } = data;

    const toggleQuestion = (index) => {
        setOpenQuestion((currentQuestion) => (currentQuestion === index ? null : index));
    };

    return (
        <FaqStyled>
            <div className="faq-header">
                <div className="faq-title-group">
                    <div className="faq-mark" aria-hidden="true"><FontAwesomeIcon icon={faQuestion} /></div>
                    <div>
                        <h2>{title}</h2>
                        <p>{subtitle}</p>
                    </div>
                </div>
                {contact && (
                    <a className="faq-contact" href={contact.href || '#'}>
                        <span>{contact.label}</span>
                        <strong>{contact.action}</strong>
                        <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
                    </a>
                )}
            </div>

            <div className="faq-list">
                {questions.map(({ question, answer }, index) => {
                    const isOpen = openQuestion === index;
                    return (
                        <div className={`faq-item${isOpen ? ' is-open' : ''}`} key={question}>
                            <button
                                type="button"
                                className="faq-question"
                                aria-expanded={isOpen}
                                onClick={() => toggleQuestion(index)}
                            >
                                <span>{question}</span>
                                <span className="faq-plus" aria-hidden="true">+</span>
                            </button>
                            {isOpen && <p className="faq-answer">{answer}</p>}
                        </div>
                    );
                })}
            </div>
        </FaqStyled>
    );
}

export default Faq;

const FaqStyled = styled.section`
    width: 100%;
    margin: 2rem 0;
    padding: 0.65rem 0;
    box-sizing: border-box;

    .faq-header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 1.5rem;
        padding: 0 0.2rem 0.7rem;
    }

    .faq-title-group {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        min-width: 0;
    }

    .faq-mark {
        display: grid;
        flex: 0 0 auto;
        width: 34px;
        height: 34px;
        place-items: center;
        border-radius: 50%;
        color: var(--color-white);
        background: linear-gradient(145deg, #6e42a0, #3b1f66);
        box-shadow: 0 5px 12px rgba(59, 31, 102, 0.2);
        font-size: 1rem;
    }

    h2 {
        margin: 0;
        color: var(--color-dark-purple);
        font-family: var(--font-heading);
        font-size: clamp(1.25rem, 1rem + 0.65vw, 1.8rem);
        line-height: 1.1;
    }

    .faq-title-group p {
        margin: 0.25rem 0 0;
        color: var(--color-text);
        font-family: var(--font-body);
        font-size: clamp(0.78rem, 0.72rem + 0.16vw, 0.92rem);
        line-height: 1.25;
    }

    .faq-contact {
        display: flex;
        align-items: center;
        gap: 0.85rem;
        padding-top: 0.55rem;
        color: var(--color-institutional-purple);
        font-family: var(--font-body);
        font-size: 0.78rem;
        white-space: nowrap;
    }

    .faq-contact strong { font-weight: 700; }
    .faq-contact svg { font-size: 0.95rem; }

    .faq-list {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.55rem 1rem;
    }

    .faq-item {
        min-width: 0;
        border: 1px solid rgba(255, 255, 255, 0.68);
        border-radius: 0.75rem;
        background: rgba(255, 255, 255, 0.32);
        box-shadow: 0 7px 16px rgba(var(--glass-shadow-rgb), 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(12px) saturate(115%);
    }

    .faq-item.is-open { background: rgba(255, 255, 255, 0.48); }

    .faq-question {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        width: 100%;
        min-height: 42px;
        padding: 0.6rem 1rem;
        border: 0;
        border-radius: inherit;
        color: var(--color-dark-purple);
        background: transparent;
        font-family: var(--font-heading);
        font-size: clamp(0.78rem, 0.72rem + 0.14vw, 0.9rem);
        font-weight: 600;
        line-height: 1.2;
        text-align: left;
        cursor: pointer;
    }

    .faq-question:hover,
    .faq-question:focus-visible { color: var(--color-institutional-purple); }

    .faq-plus {
        flex: 0 0 auto;
        color: var(--color-dark-purple);
        font-size: 1.35rem;
        font-weight: 500;
        line-height: 1;
        transition: transform 180ms ease;
    }

    .is-open .faq-plus { transform: rotate(45deg); }

    .faq-answer {
        margin: -0.1rem 2.5rem 0.7rem 1rem;
        color: var(--color-text);
        font-family: var(--font-body);
        font-size: 0.78rem;
        line-height: 1.4;
    }

    @media (max-width: 700px) {
        .faq-header { flex-direction: column; gap: 0.7rem; }
        .faq-contact { align-self: flex-end; padding-top: 0; }
        .faq-list { grid-template-columns: 1fr; }
    }

    @media (max-width: 420px) {
        .faq-contact { align-self: flex-start; flex-wrap: wrap; gap: 0.5rem; }
    }
`;
