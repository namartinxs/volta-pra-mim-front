import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Importando páginas
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import AdicionarItem from './pages/AdicionarItem';
import ItensEncontrados from './pages/ItensEncontrados';
import DetalhesItem from './pages/DetalhesItem';
import PaginaSucesso from './pages/PaginaSucesso';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/adicionar" element={<AdicionarItem />} />
        <Route path="/encontrados" element={<ItensEncontrados />} />
        <Route path="/item/:id" element={<DetalhesItem />} />
        <Route path="/sucesso" element={<PaginaSucesso />} />
        
        {/* Qualquer rota desconhecida volta pro login */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}