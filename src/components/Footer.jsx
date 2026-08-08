import styled from 'styled-components';

function Footer() {
	return (
		<FooterStyled>
			<p>Todos los derechos © 2026 | Instituto de Educación Superior 9-010 Rosario Vera Peñaloza</p>
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
	margin: 1.6rem 0 2rem;
	border-radius: 1.35rem;
	padding: 1rem 1.2rem;
	text-align: center;
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

	&::before {
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

	p {
		margin: 0;
		position: relative;
		z-index: 1;
		font-family: var(--font-body);
		font-size: clamp(0.92rem, 0.85rem + 0.2vw, 1.02rem);
		line-height: 1.35;
		color: #5c35b4;
		font-weight: 500;
		max-width: 100%;
		overflow-wrap: anywhere;
	}

	@media (max-width: 768px) {
		margin: 1.2rem 0 1.4rem;
		padding: 0.95rem 0.9rem;
		border-radius: 1rem;

		p {
			font-size: 0.88rem;
		}
	}
`;
