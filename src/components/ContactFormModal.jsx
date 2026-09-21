import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { sendContactMessage } from '../services/contactApi';

function ContactFormModal({ subject, onClose }) {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [error, setError] = useState(null);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!email.trim()) {
            setError('Ingresá tu correo para poder responderte.');
            return;
        }

        setIsSending(true);
        setError(null);

        try {
            await sendContactMessage({ email: email.trim(), subject, message: message.trim() });
            setIsSent(true);
        } catch (submitError) {
            setError(submitError.message);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <ModalOverlay role="dialog" aria-modal="true" aria-label="Formulario de contacto">
            <ModalStyled>
                <header className="modal-header">
                    <h2>Escribinos</h2>
                    <button type="button" className="close-button" onClick={onClose} aria-label="Cerrar">×</button>
                </header>

                {isSent ? (
                    <div className="modal-body">
                        <p className="success-message">
                            ¡Listo! Recibimos tu consulta y te vamos a responder a la brevedad a {email}.
                        </p>
                        <button type="button" className="submit-button" onClick={onClose}>Cerrar</button>
                    </div>
                ) : (
                    <form className="modal-body" onSubmit={handleSubmit}>
                        <p className="subject-preview">Asunto: {subject}</p>
                        <label>
                            Tu correo
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="nombre@correo.com"
                            />
                        </label>
                        <label>
                            Mensaje (opcional)
                            <textarea
                                value={message}
                                onChange={(event) => setMessage(event.target.value)}
                                placeholder="Contanos en qué te podemos ayudar"
                            />
                        </label>

                        {error && <p className="error-message">{error}</p>}

                        <button type="submit" className="submit-button" disabled={isSending}>
                            {isSending ? <FontAwesomeIcon icon={faSpinner} spin /> : 'Enviar consulta'}
                        </button>
                    </form>
                )}
            </ModalStyled>
        </ModalOverlay>
    );
}

export default ContactFormModal;

const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 200;
    display: grid;
    place-items: center;
    padding: 1.5rem;
    background: rgba(20, 10, 40, 0.5);
    backdrop-filter: blur(4px);
`;

const ModalStyled = styled.div`
    width: min(100%, 460px);
    box-sizing: border-box;
    border-radius: 1.4rem;
    overflow: hidden;
    background: #fdfbff;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);

    .modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.1rem 1.4rem;
        background: var(--color-gradient);
        color: var(--color-white);
    }

    .modal-header h2 {
        margin: 0;
        font-family: var(--font-heading);
        font-size: 1.1rem;
        color: var(--color-white);
    }

    .close-button {
        border: 0;
        background: transparent;
        color: var(--color-white);
        font-size: 1.4rem;
        line-height: 1;
        cursor: pointer;
    }

    .modal-body {
        display: grid;
        gap: 0.85rem;
        padding: 1.3rem 1.4rem 1.5rem;
    }

    .subject-preview {
        margin: 0;
        color: var(--color-text);
        font-family: var(--font-body);
        font-size: 0.8rem;
    }

    label {
        display: grid;
        gap: 0.35rem;
        color: var(--color-dark-purple);
        font-family: var(--font-body);
        font-size: 0.82rem;
        font-weight: 600;
    }

    input,
    textarea {
        border: 1px solid var(--color-border);
        border-radius: 0.6rem;
        padding: 0.55rem 0.7rem;
        font-family: var(--font-body);
        font-size: 0.88rem;
    }

    textarea {
        min-height: 90px;
        resize: vertical;
    }

    .error-message { margin: 0; color: #b3364a; font-family: var(--font-body); font-size: 0.82rem; }
    .success-message { margin: 0; color: var(--color-dark-purple); font-family: var(--font-body); font-size: 0.92rem; line-height: 1.4; }

    .submit-button {
        justify-self: start;
        padding: 0.65rem 1.3rem;
        border: 0;
        border-radius: 0.7rem;
        background: var(--color-institutional-purple);
        color: var(--color-white);
        font-family: var(--font-heading);
        font-weight: 700;
        cursor: pointer;
    }

    .submit-button:disabled { opacity: 0.6; cursor: not-allowed; }
`;
