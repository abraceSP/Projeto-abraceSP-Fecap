import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Router: nav | Routes: ul | Route: li
import Home from './pages/home';
import Alimentacao from './pages/Alimentacao';
import Acolhimento from './pages/Acolhimento';
import Educacao from './pages/Educacao';
import Saude from './pages/SaudeMental';
import MaisServicos from './pages/MaisServicos';
import SobreNos from './pages/SobreNos';
import Cadastro from './pages/Cadastro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alimentacao" element={<Alimentacao />} />
        <Route path="/acolhimento" element={<Acolhimento />} />
        <Route path="/educacao" element={<Educacao />} />
        <Route path="/saude-mental" element={<Saude />} />
        <Route path="/mais-servicos" element={<MaisServicos />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;