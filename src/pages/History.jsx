import images from '../data/images.js';
import Banner from '../components/Banner.jsx';
import VirtualAccess from '../components/VirtualAccess.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import LocationMap from '../components/LocationMap.jsx';
import Title from '../components/Title.jsx';
function History() {
    return (
        <HistoryStyle>
            <VirtualAccess />
            <Navbar />
            <Banner
                titulo="Instituto de Educación Superior Rosario Vera Peñaloza"
                subtitulo="Comprometidos con la educación y el desarrollo profesional en nuestra comunidad"
                textoBoton=""
                imagenFondoPath={images.imagenVera}
            />
            <div className="history-section">
                <div className="history-title-section liquid-glass-effect">
                    <Title children="Instituto de Educación Superior  N° 9-010 «Rosario Vera Peñaloza»"/>
{/*                     <p className="history-title title-1" >Instituto de Educación Superior  N° 9-010 «Rosario Vera Peñaloza»</p>
 */}                    <p className="history-date subtitle-1" >1988 – 2024</p>
                </div>

                <div className="history-info-section liquid-glass-effect">
                    <p className="history-info-text text-1">
                        En 1988 el Ministerio de Educación y Justicia de la Nación por Resolución N° 599/88 crea el Instituto Nacional de Educación Superior de Eugenio Bustos, por iniciativa de los vecinos de la Localidad y con el apoyo del Municipio y las Instituciones del Nivel Secundario. El Profesorado de Educación Preescolar fue su primera carrera, y comenzó a funcionar en el Colegio Nuestra Señora del Huerto. El Instituto estaba a cargo de la Rectora Sra. Ana María Gomez.
                    </p>
                    <p className="history-info-text text-1">
                        En el año 1989 bajo la disposición N° 133/89 emanada por el Director Nacional de Educación Superior Dr. Ovide Menin se estableció que el Instituto llevaría el nombre de Rosario Vera Peñaloza.
                    </p>
                    <img src={images.rosarioVeraPeñalozaPic} alt="Rosario Vera Peñaloza" className="history-info-image" />
                    <p className="history-info-text text-1">
                        Rosario Vera Peñaloza (1872 – 1950). Era descendiente de familias tradicionales del mundo político y militar de la sociedad riojana. Su plena dedicación a la educación común y, en especial, a la creación de los jardines de infantes y al perfeccionamiento de sus docentes y de este nivel educativo la destacó en la primera parte del siglo XX en Argentina. Su influencia fue grande debido a las funciones que ocupó y de los numerosos cursos docentes que desarrolló en todo el país.
                    </p>
                    <p className="history-info-text text-1">
                        Ese mismo año se habilita una nueva carrera denominada Análisis de Sistemas Administrativos bajo la Resol. 720/89 del Ministerio de Educación y Justicia.
                    </p>
                    <p className="history-info-text text-1">
                        Ya en el año 1991 el Instituto se traslada al Colegio Don Bosco.
                    </p>
                    <p className="history-info-text text-1">
                        En el 2001 se traslada definitivamente a su edificio actual ubicado sobre la Ruta Nacional 40 Km. 3193 de Eugenio Bustos.
                    </p>
                    <p className="history-info-text text-1">
                        El Instituto acumula 36 años cumpliendo con una gran aporte a esta sociedad, brindando carreras docentes y técnicas.
                    </p>
                    <p className="history-info-text text-1">
                        Actualmente a cargo del Instituto se encuentra la Rectora Lic. Carina Morales  desde el año 2020.
                    </p>
                </div>
                <div className="ubicacion-section liquid-glass-effect">
                    <Title children="Ubicación"/>
                    <div className="ubicacion-content">
                        <p className="history-info-text text-1">
                            Nos ubicamos en Eugenio Bustos del departamento de San Carlos sobre la Ruta Nacional 40 km. 3193. Nuestra Localidad se encuentra en el centro oeste de la provincia , a 103 km de la Capital Provincial, al pie de la Cordillera de Los Andes, en medio de un paisaje natural de inigualable belleza.
                        </p>
                        <LocationMap latitude="-33.775861" longitude="-69.060271" />
                    </div>
                </div>
            </div>
            <Footer />
        </HistoryStyle>
    );
}

export default History;

import styled from 'styled-components';

const HistoryStyle = styled.div`
width: min(80%, 1440px);
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
.history-section{
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
}
.history-title-section, .history-info-section, .ubicacion-section {
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding: 2rem;
border-radius: 1rem;
background: rgba(255, 255, 255, 0.1);
margin: 2rem 0;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

}
.history-info-text{
    margin: 1rem 0;
    line-height: 1.6;
    text-align: justify;
    padding: 1rem 0;
}
.ubicacion-content .history-info-text{
    margin: 1rem 0;
    line-height: 1.6;
    width: 50%;
    text-align: justify;
    padding: 1rem 2rem ;
}
    .history-info-title{
        margin: 1rem 0;
        line-height: 1.6;
        text-align: center;
    }
    .ubicacion-content{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
`;