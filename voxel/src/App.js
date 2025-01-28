import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Landing from "./views/Landing/Landing.jsx";
import Home from "./views/Home/Home.jsx";
import Contacto from "./components/Contacto/Contacto.jsx";
import Grabados from "./components/Grabados/Grabados.jsx";
import LaserAcrilico from "./components/LaserAcrilico/LaserAcrilico.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      
      <Route path="/*" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="grabados" element={<Grabados />} />
        <Route path="Corte-Laser-Acrilico" element={<LaserAcrilico />} />
      </Route>
    </Routes>
  );
};

export default App;
