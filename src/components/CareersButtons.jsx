import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CareersButtons({
    name,
    icon,
    to = '/oferta-educativa',
    reflectionColor = "rgba(186, 142, 166, 0.52)",
    intensity = 0.45,
    backgroundOpacity = .8,
    backdropBlur = 16,
}) {
    const isFontAwesomeIcon = icon && typeof icon === 'object' && 'prefix' in icon && 'iconName' in icon;

    return (
        <CareersButtonsStyled className="careers-buttons" $reflectionColor={reflectionColor} $intensity={intensity} $backgroundOpacity={backgroundOpacity} $backdropBlur={backdropBlur}>
            <Link to={to} className="careers-button">
                <span className="careers-icon-shell" aria-hidden="true">
                    {isFontAwesomeIcon ? (
                        <FontAwesomeIcon icon={icon} className="careers-icon" />
                    ) : (
                        <img src={icon} alt={name} className="careers-icon" />
                    )}
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
   .careers-buttons{

    max-width: 100%;
}

.careers-button{

    display:flex;
    align-items:center;
    gap:16px;
    width:100%;
    min-width:0;
    text-decoration:none;
}
    .careers-icon-shell{
    width:64px;
    height:64px;
    min-width:64px;
    min-height:64px;
    box-sizing:border-box;
    display:flex;
    align-items:center;
    justify-content:center;

    background:color-mix(in srgb, color-mix(in srgb, ${(props) => props.$reflectionColor} 50%, white) ${(props) => props.$backgroundOpacity * 100}%, transparent);

    backdrop-filter:blur(${(props) => props.$backdropBlur}px);
    -webkit-backdrop-filter:blur(${(props) => props.$backdropBlur}px);

    border-radius:20px;
     border:1px solid rgba(255,255,255,0.72);

    position:relative;
    isolation:isolate;
    overflow:hidden;

    box-shadow:
         0 14px 28px rgba(var(--glass-shadow-rgb),0.12),
         inset 0 1px 0 rgba(255,255,255,0.88),
         inset 0 -1px 0 rgba(107,76,163,0.14);
     transition:transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease, filter 0.18s ease;
}

    .careers-icon-shell::before{
    content:"";

    position:absolute;
    inset:0;
    z-index:0;
    pointer-events:none;

    background:linear-gradient(
        90deg,
        transparent 0%,
        transparent 22%,
        color-mix(in srgb, ${(props) => props.$reflectionColor} 60%, transparent) 55%,
        ${(props) => props.$reflectionColor} 100%
    );

    opacity:${(props) => props.$intensity};
    filter:blur(9px) saturate(1.15);
}

    .careers-icon-shell::after,
    .careers-label-shell::after{
    content:"";

    position:absolute;
    inset:0;
    z-index:2;
    padding:1.5px;
    border-radius:inherit;
    pointer-events:none;

    background:linear-gradient(
        135deg,
        rgba(255,255,255,.9) 0%,
        ${(props) => props.$reflectionColor} 48%,
        rgba(255,255,255,.2) 100%
    );

    -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    -webkit-mask-composite:xor;
    mask-composite:exclude;
}
        .careers-label-shell{
    position:relative;
    isolation:isolate;

    flex:1;
    min-width:0;
    height:64px;
    min-height:64px;
    max-height:64px;
    box-sizing:border-box;
    display:flex;
    align-items:center;

    padding:0.7rem 0.85rem;

    background:color-mix(in srgb, color-mix(in srgb, ${(props) => props.$reflectionColor} 50%, white) ${(props) => props.$backgroundOpacity * 100}%, transparent);

    backdrop-filter:blur(${(props) => props.$backdropBlur}px);
    -webkit-backdrop-filter:blur(${(props) => props.$backdropBlur}px);

    border-radius:20px;
    border:1px solid rgba(255,255,255,0.72);

    overflow:hidden;

    box-shadow:
        0 14px 28px rgba(var(--glass-shadow-rgb),0.12),
        inset 0 1px 0 rgba(255,255,255,0.88),
        inset 0 -1px 0 rgba(107,76,163,0.14);
    transition:transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease, filter 0.18s ease;
}

    .careers-button:hover .careers-icon-shell,
    .careers-button:hover .careers-label-shell,
    .careers-button:focus-visible .careers-icon-shell,
    .careers-button:focus-visible .careers-label-shell{
    transform:translateY(-2px);
    border-color:rgba(255,255,255,0.9);
    filter:saturate(1.12) brightness(1.05);
    box-shadow:
        0 18px 34px rgba(var(--glass-shadow-rgb),0.16),
        inset 0 1px 0 rgba(255,255,255,0.96),
        inset 0 -1px 0 rgba(107,76,163,0.16);
}

    .careers-label-shell::before{
    content:"";

    position:absolute;
    inset:0;
    z-index:0;
    pointer-events:none;

    background:linear-gradient(
        90deg,
        transparent 0%,
        transparent 18%,
        color-mix(in srgb, ${(props) => props.$reflectionColor} 60%, transparent) 34%,
        ${(props) => props.$reflectionColor} 42%,
        ${(props) => props.$reflectionColor} 58%,
        color-mix(in srgb, ${(props) => props.$reflectionColor} 60%, transparent) 66%,
        transparent 82%,
        transparent 100%
    );

    opacity:${(props) => props.$intensity};
    filter:blur(9px) saturate(1.15);
}
    .careers-label-shell span{
    position:relative;
    z-index:1;

    color:#312B36;

    font-family: var(--font-heading);

    font-size:0.9rem;

    font-weight:600;

    line-height:1.05;

    text-transform:uppercase;

    letter-spacing:-1px;
    white-space:normal;
    word-break:break-word;
}
    .careers-icon{
    position:relative;
    z-index:1;

    width:38px;
    height:38px;

    object-fit:contain;

    filter:brightness(0) saturate(100%) invert(14%) sepia(9%) saturate(1200%) hue-rotate(230deg) brightness(95%) contrast(92%);
}
`;
