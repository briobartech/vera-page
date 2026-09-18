import styled from 'styled-components';
import VirtualAccess from '../components/VirtualAccess';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScheduleTrama from '../components/ScheduleTrama';
import agenda from "../assets/schedule.json";
import NewsBanner from '../components/NewsBanner.jsx';
import icons from '../data/icons.js';
import Title from '../components/Title';
function Trama() {
    return (
        <TramaStyle>
            <VirtualAccess />
            <Navbar />
            <NewsBanner
                icono={icons.tramaIcon}
                titulo="TRAMA"
                subtitulo="Espacio Interdisciplinario de Acompañamiento a las Trayectorias Estudiantiles"
                imagenFondoPath={`${import.meta.env.BASE_URL}images/trama.jpg`}
                
            />
            
            <div className="trama-info-section grid-section">
                <div className="trama-grid liquid-glass-effect">
                    <Title children="Fundamentación" />
                    <p className="trama-info-content text-1">El desarrollo de los procesos sociales, en el que está incluida la educación, se ve condicionado o determinado por la experiencia dinámica de los sujetos que la componen. Entender el entramado relacional, es elemental para comprender y explicar fenómenos que pudieran atentar contra derechos y garantías de las personas.

                        Trama es un espacio interdisciplinario de acompañamiento a las trayectorias estudiantiles que busca garantizar el ingreso, permanencia y finalización de la carrera o formación elegida como una forma de promover el derecho a la educación, según lo establece la Ley de Educación Nacional 26.206 y su correspondiente norma provincial Res. 1268/24 Reglamento Académico Marco (RAM) y su equivalente institucional Reglamento Académico Institucional (RAI).</p>
                </div>
                <div className="trama-grid liquid-glass-effect">
                    <Title children="Objetivos" />
                    <ul className="trama-info-content text-1">
                        <li className="trama-info-content list-item">Promover la inclusión de la comunidad educativa integrando las trayectorias formativas para garantizar el ingreso, la permanencia y egreso de la carrera elegida.</li>
                        <li className="trama-info-content list-item">Ampliar y fortalecer la trayectoria educativa con más apoyo y acompañamiento mediante el abordaje interdisciplinario de las situaciones que pudieran obstaculizar las trayectorias estudiantiles.</li>
                        <li className="trama-info-content list-item">Generar y sostener redes de atención, asistencia y cuidado en la resolución de problemáticas que atentaran a las trayectorias estudiantiles, coordinando acciones con: organizaciones gubernamentales, no gubernamentales y otras pertinentes a la situación planteada.</li>
                    </ul>
                </div>
                <div className="trama-grid liquid-glass-effect">
                    <Title children="Referencias" />
                    <div className="trama-info-content text-1">Lorena Lafuente</div>
                    <Title children="Destinatarios" />
                    <div className="trama-info-content text-1">Estudiantes e integrantes de cualquier otro claustro de la comunidad del IES 9-010 Rosario Vera Peñaloza.</div>
                    <Title children="Lugar y contacto" />

                    <div className="trama-info-content text-1">
                        <p>Oficina ubicada sobre el SUM, frente a Bedelía</p>
                        <p>trayectorias9010@gmail.com</p>
                    </div>
                </div>
                <div className="trama-grid liquid-glass-effect">
                    <Title children="Secciones y referentes interdisciplinarios" />
                    <ul className="trama-info-content text-1 ">
                        <li className="trama-info-content list-item">Políticas estudiantiles / becas: Belén Álvarez.</li>
                        <li className="trama-info-content list-item">Género y diversidad: Lorena Rosales.</li>
                        <li className="trama-info-content list-item">Promoción de la salud: Mónica Valle y Liliana Cantalejos.</li>
                        <li className="trama-info-content list-item">Accesibilidad: Cecilia Corzo.</li>
                        <li className="trama-info-content list-item">Deportes y recreación: Arturo Galonetto.</li>
                        <li className="trama-info-content list-item">Salud mental: Shirley Somer.</li>
                        <li className="trama-info-content list-item">ESI: Ana Laura Granados.</li>
                        <li className="trama-info-content list-item">Orientación en los aprendizajes: Shirley Somer y Jorgelina López.</li>
                    </ul>
                </div>
            </div>
           
            <div className="cronogram-section liquid-glass-effect">
                <Title children="Organigrama inicial" />
                <ScheduleTrama datos={agenda} />
            </div>
            <div className="action-philosophy-section liquid-glass-effect">
                <Title children="Filosofía de acción" />
                <p className='action-philosophy-content text-1'>Atender, responder y dar seguimiento a las acciones necesarias que requiera la resolución de una problemática específica. Empatía, compromiso, compañía, discreción y asertividad son herramientas conceptuales que nos permiten llevar adelante esta tarea.

                    Estar en una institución, involucra entender los dilemas y situaciones que nos atraviesan como sujetos.

                    </p>
                    <p className='action-philosophy-content text-1'><b>¡Estamos para ayudarte a lograr tus objetivos académicos y profesionales!</b></p>
            </div>

            <Footer />
        </TramaStyle>
    );
}

export default Trama;

const TramaStyle = styled.div`
width: min(80%, 1440px);
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
.action-philosophy-content b{
    font-weight: 700;
}
    .action-philosophy-section {
        padding: 2rem;
        border-radius: 1rem;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        margin: 2rem 0;
    }
        .trama-grid {
            padding: 2rem;
            border-radius: 1rem;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            margin: 2rem 0;
        }
            .list-item {
  display: list-item;            
  list-style-type: disc;        
  margin-left: 20px;      
  .trama-info-content {
      font-size: 1rem;
      line-height: 1.5;
  }
}
.cronogram-section{
width: 95%;
padding: 2rem;
border-radius: 1rem;
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
margin: 2rem 0;
}
/* TABLA */
.tabla-organigrama {
    width: 100%;
    border-collapse: collapse;
    font-family: Arial, sans-serif;
    font-size: 14px;
    color: #2d2445;
    border: 3px solid #d6d000;
  }

  .tabla-organigrama th {
    background-color: #d6d000;
    color: #2d2445;
    padding: 8px;
    text-align: left;
    border: 1px solid #6f6290;
    font-weight: 600;
  }

  .tabla-organigrama td {
    padding: 8px;
    border: 1px solid #6f6290;
    vertical-align: middle;
    background-color: #d8cde1;
  }

  .tabla-organigrama .dia {
    background-color: #d8cde1;
    text-align: center;
    font-weight: 500;
    width: 90px;
  }

  .tabla-organigrama .lunes {
    background-color: #d6d000;
  }

  .tabla-organigrama .martes {
    background-color: #d6d000;
  }

  .tabla-organigrama .miercoles {
    background-color: #cda9a9;
  }

  .tabla-organigrama .jueves {
    background-color: #d8cde1;
  }

  .tabla-organigrama .viernes {
    background-color: #d6d000;
  }

  .tabla-organigrama .horario {
    width: 175px;
  }

  .tabla-organigrama .profesor {
    width: 190px;
  }
`;