import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Landing from "./views/Landing/Landing.jsx";
import Home from "./views/Home/Home.jsx";
import Contacto from "./components/Contacto/Contacto.jsx";
import Grabados from "./components/Grabados/Grabados.jsx";
import LaserAcrilico from "./components/LaserAcrilico/LaserAcrilico.jsx";
import Letreros from "./components/Letreros/Letreros.jsx";
import LaserMetales from "./components/LaserMetales/LaserMetales.jsx";
import Footer from "./components/Footer/Footer.jsx";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      
      <Route path="/*" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="grabados" element={<Grabados />} />
        <Route path="corte-laser-acrilicos" element={<LaserAcrilico />} />
        <Route path="letreros" element={<Letreros />} />
        <Route path="corte-laser-metales" element={<LaserMetales />} /> 
        <Route path="footer" element={<Footer />} />
      </Route>
    </Routes>
  );
};

export default App;
