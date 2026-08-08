import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import OfertaEducativa from './pages/OfertaEducativa';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/oferta-educativa" element={<OfertaEducativa />} />
      <Route path="/oferta-educativa/:careerCode" element={<OfertaEducativa />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;