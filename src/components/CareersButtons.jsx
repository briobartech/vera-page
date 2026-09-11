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
                <span className="careers-icon-shell liquid-glass-effect" aria-hidden="true">
                    {isFontAwesomeIcon ? (
                        <FontAwesomeIcon icon={icon} className="careers-icon" />
                    ) : (
                        <img src={icon} alt={name} className="careers-icon" />
                    )}
                </span>

                <span className="careers-label-shell liquid-glass-effect">
                    <span>{name}</span>
                </span>
            </Link>
        </CareersButtonsStyled>
    );
}
export default CareersButtons;

const CareersButtonsStyled = styled.div`
   &.careers-buttons{

    max-width: 100%;
    --liquid-glass-shadow-y: 7px;
    --liquid-glass-shadow-blur: 16px;
    --liquid-glass-shadow-color: rgba(0, 0, 0, 0.1);
    position: relative;
    isolation: isolate;
}

.careers-button{

    display:flex;
    align-items:center;
    gap:16px;
    width:100%;
    min-width:0;
    text-decoration:none;
    position: relative;
    z-index: 1;
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

    position:relative;
    isolation:isolate;
    overflow:hidden;
    background-color: color-mix(in srgb, ${(props) => props.$reflectionColor} 34%, transparent);
     transition:transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease, filter 0.18s ease;
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

    overflow:hidden;
    background-color: color-mix(in srgb, ${(props) => props.$reflectionColor} 34%, transparent);
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
        0 9px 16px rgba(var(--glass-shadow-rgb),0.14),
        inset 0 1px 0 rgba(255,255,255,0.96),
        inset 0 -1px 0 rgba(107,76,163,0.16);
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
