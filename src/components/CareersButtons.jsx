import styled from "styled-components";
import { Link } from 'react-router-dom';

function CareersButtons({
    name,
    icon,
    to = '/oferta-educativa',
    reflectionColor = "rgba(186, 142, 166, 0.72)",
}) {

    

    return (
        <CareersButtonsStyled className="careers-buttons" $reflectionColor={reflectionColor}>
            <Link to={to} className="careers-button">
                <span className="careers-icon-shell" aria-hidden="true">
                    <img src={icon} alt={name} className="careers-icon" />
                </span>

                <span className="careers-label-shell">
                    <span>{name}</span>
                </span>
            </Link>
        </CareersButtonsStyled>
    );
}
export default CareersButtons;

const CareersButtonsStyled = styled.div`
.careers-icon-shell,.careers-label-shell{
    border:5px solid #312B36;
}
   .careers-buttons{

    max-width: 100%;
}

.careers-button{

    display:flex;
    align-items:center;
    gap:16px;
    width:100%;
    min-width:0;
}
    .careers-icon-shell{
    width:56px;
    height:56px;
    min-width:56px;
    min-height:56px;
    display:flex;
    align-items:center;
    justify-content:center;

    background:#312B36;

    border-radius:20px;

    position:relative;
    overflow:hidden;

    box-shadow:
        0 14px 28px rgba(0,0,0,.30),
        inset 0 1px 0 rgba(255,255,255,.03);
}
        .careers-label-shell{
    position:relative;

    flex:1;
    min-width:0;
    min-height:32px;
    height:auto;
    max-height:32px;
    display:flex;
    align-items:center;

    padding:0.7rem 0.85rem;

    background:#312B36;

    border-radius:20px;

    overflow:hidden;

    box-shadow:
        0 14px 28px rgba(0,0,0,.30),
        inset 0 1px 0 rgba(255,255,255,.03);
}
        .careers-icon-shell::after,
.careers-label-shell::after{
    content:"";

    position:absolute;

                    left:28%;
                    right:-18%;

                    bottom:-34%;

                    height:66%;

    background:
                radial-gradient(
                    92% 140% at 86% 96%,
                    ${(props) => props.$reflectionColor} 0%,
                    rgba(255,255,255,.12) 34%,
                    rgba(255,255,255,0) 78%
                ),
        linear-gradient(
            95deg,
            transparent 0%,
                            rgba(255,255,255,.02) 20%,
                            ${(props) => props.$reflectionColor} 68%,
                            rgba(255,255,255,.1) 88%,
            transparent 100%
        );

    border-radius:50%;

                    filter:blur(12px);

                    transform:rotate(-1deg);

            opacity:.92;
}
    .careers-label-shell span{

    color:white;

    font-size:0.9rem;

    font-weight:600;

    line-height:1.05;

    text-transform:uppercase;

    letter-spacing:-1px;
    white-space:normal;
    word-break:break-word;
}
    .careers-icon{

    width:48px;
    height:48px;

    object-fit:contain;
}
`;
