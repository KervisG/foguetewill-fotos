import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DiscountSection from '../discount/DiscountSection'; // Componente para la ruta específica
import Header from '../header/Header';

const Routers = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta principal (la normal) */}
        <Route path="/" element={<Header />} />

        {/* Ruta específica: /pv-coma-com-os-olhos-perp-cco02 */}
        <Route path="/pv-coma-com-os-olhos-perp-cco02" element={<DiscountSection />} />
      </Routes>
    </Router>
  );
};

export default Routers;
