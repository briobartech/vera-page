import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
	{ label: 'Facebook', href: '#', icon: faFacebook },
	{ label: 'Instagram', href: '#', icon: faInstagram },
	{ label: 'WhatsApp', href: '#', icon: faWhatsapp },
];

const procedureLinks = [
	{ label: 'Trámites en línea', to: '/tramites-online' },
	{ label: 'Ingreso 2026', to: '/ingreso' },
	{ label: 'Oferta educativa', to: '/oferta-educativa/general' },
];

function Footer() {
	return (
		<FooterStyled className="liquid-glass-effect">
			<div className="footer-grid">
				<div className="footer-block">
					<h3>Institución</h3>
					<p className="footer-contact-item">
						<FontAwesomeIcon icon={faLocationDot} aria-hidden="true" />
						<span>Ruta Nacional 40, Km. 3193 — Eugenio Bustos, San Carlos, Mendoza</span>
					</p>
				</div>

				<div className="footer-block">
					<h3>Contacto</h3>
					<a className="footer-contact-item" href="mailto:secretaria@elvera9010.edu.ar">
						<FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
						<span>secretaria@elvera9010.edu.ar</span>
					</a>
					<a className="footer-contact-item" href="tel:+542622414550">
						<FontAwesomeIcon icon={faPhone} aria-hidden="true" />
						<span>2622-414550</span>
					</a>
				</div>

				<div className="footer-block">
					<h3>Trámites</h3>
					<ul className="footer-links">
						{procedureLinks.map((link) => (
							<li key={link.label}>
								<Link to={link.to}>{link.label}</Link>
							</li>
						))}
					</ul>
				</div>

				<div className="footer-block">
					<h3>Redes sociales</h3>
					<div className="footer-social">
						{socialLinks.map((social) => (
							<a
								key={social.label}
								href={social.href}
								aria-label={social.label}
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={social.icon} />
							</a>
						))}
					</div>
				</div>
			</div>

			<p className="footer-copyright">Todos los derechos © 2026 | Instituto de Educación Superior 9-010 Rosario Vera Peñaloza</p>
		</FooterStyled>
	);
}

export default Footer;

const FooterStyled = styled.footer`
	--qa-purple-a: 174, 102, 220;
	--qa-purple-b: 148, 78, 198;
	--qa-purple-c: 126, 62, 176;

	width: 100%;
	max-width: 100%;
	box-sizing: border-box;
	display: block;
	position: relative;
	z-index: 1;
	scroll-margin-top: 1rem;
	margin: 1.6rem 0 2rem;
	padding: 1.6rem 1.6rem 1.2rem;
	text-align: left;
	overflow: hidden;

	.footer-grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 1.4rem;
		padding-bottom: 1.2rem;
		border-bottom: 1px solid rgba(92, 53, 180, 0.18);
	}

	.footer-block h3 {
		margin: 0 0 0.7rem;
		font-family: var(--font-heading);
		font-size: 0.95rem;
		font-weight: 700;
		color: #5c35b4;
	}

	.footer-contact-item {
		display: flex;
		align-items: flex-start;
		gap: 0.55rem;
		margin: 0 0 0.5rem;
		color: var(--color-text);
		font-family: var(--font-body);
		font-size: 0.86rem;
		line-height: 1.4;
		text-decoration: none;
	}

	.footer-contact-item svg {
		flex: 0 0 auto;
		margin-top: 0.2rem;
		color: var(--color-institutional-purple);
	}

	a.footer-contact-item:hover {
		color: var(--color-institutional-purple);
	}

	.footer-links {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 0.5rem;
	}

	.footer-links a {
		color: var(--color-text);
		font-family: var(--font-body);
		font-size: 0.86rem;
		text-decoration: none;
	}

	.footer-links a:hover {
		color: var(--color-institutional-purple);
	}

	.footer-social {
		display: flex;
		gap: 0.6rem;
	}

	.footer-social a {
		display: grid;
		place-items: center;
		width: 38px;
		height: 38px;
		border-radius: 999px;
		background: rgba(127, 70, 219, 0.12);
		color: var(--color-institutional-purple);
		font-size: 1.05rem;
		transition: background 0.18s ease, transform 0.18s ease;
	}

	.footer-social a:hover {
		background: rgba(127, 70, 219, 0.22);
		transform: translateY(-2px);
	}

	.footer-copyright {
		margin: 1rem 0 0;
		position: relative;
		z-index: 1;
		font-family: var(--font-body);
		font-size: clamp(0.8rem, 0.75rem + 0.15vw, 0.9rem);
		line-height: 1.35;
		color: #5c35b4;
		font-weight: 500;
		text-align: center;
		max-width: 100%;
		overflow-wrap: anywhere;
	}

	@media (max-width: 900px) {
		.footer-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 768px) {
		align-self: stretch;
		width: 100%;
		z-index: 2;
		margin: 1.2rem 0 7rem;
		padding: 1.3rem 1rem 1rem;

		.footer-grid {
			grid-template-columns: 1fr;
			gap: 1.3rem;
		}

		.footer-copyright {
			font-size: 0.88rem;
		}
	}
`;
