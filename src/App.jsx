import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import News from './pages/News';
import OfertaEducativa from './pages/OfertaEducativa';
import Autoridades from './pages/Autoridades';
import OfertaEducativaGeneral from './pages/OfertaEducativaGeneral';
import OnlineProcedures from './pages/OnlineProcedures';
import History from './pages/History';
import FormacionContinua from './pages/FormacionContinua';
import Trama from './pages/Trama';
import ErrorPage from './pages/Error';
import ErrorBoundary from './components/ErrorBoundary';
import Ingreso from './pages/Ingreso';
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <svg className="liquid-glass-filter-definition" aria-hidden="true" focusable="false">
        <filter id="liquid-glass-frosted" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.025"
            numOctaves="2"
            seed="8"
            result="glassNoise"
          />
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.02" result="glassBlur" />
          <feDisplacementMap
            in="glassBlur"
            in2="glassNoise"
            scale="18"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
      <ScrollToTop />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tramites-online" element={<OnlineProcedures />} />
          <Route path="/oferta-educativa" element={<OfertaEducativa />} />
                    <Route path="/oferta-educativa/general" element={<OfertaEducativaGeneral />} />
          <Route path="/ingreso" element={<Ingreso />} />
          <Route path="/autoridades" element={<Autoridades />} />
          <Route path="/nuestra-historia" element={<History />} />
          <Route path="/TRAMA" element={<Trama />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/oferta-educativa/:careerCode" element={<OfertaEducativa />} />
          <Route path="/formacion-continua" element={<FormacionContinua />} />
          <Route path="/novedades" element={<News />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;