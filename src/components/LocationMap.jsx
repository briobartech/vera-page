import styled from 'styled-components';

function LocationMap({ latitude, longitude, zoom = 15 }) {
    const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=${zoom}&output=embed`;

    return (
        <LocationMapFrame>
            <LocationMapStyled
                title={`Ubicacion: ${latitude}, ${longitude}`}
                src={mapUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </LocationMapFrame>
    );
}

export default LocationMap;

const LocationMapFrame = styled.div`
    width: 30%;
    aspect-ratio: 4 / 3;
    position: relative;
    z-index: 1;
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;

const LocationMapStyled = styled.iframe`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
    border: 0;

    @media (max-width: 768px) {
        min-height: 0;
    }
`;
