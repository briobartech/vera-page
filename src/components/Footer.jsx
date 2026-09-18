import styled from 'styled-components';

function Footer() {
	return (
		<FooterStyled className="liquid-glass-effect">
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
	display: block;
	position: relative;
	z-index: 4;
	scroll-margin-top: 1rem;
	margin: 1.6rem 0 2rem;
	padding: 1rem 1.2rem;
	text-align: center;
	overflow: hidden;

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
		align-self: stretch;
		width: 100%;
		z-index: 101;
		margin: 1.2rem 0 7rem;
		padding: 0.95rem 0.9rem;

		p {
			font-size: 0.88rem;
		}
	}
`;
