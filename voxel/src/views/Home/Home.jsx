import React from 'react';
import { useNavigate } from 'react-router-dom';
import MiLetrero from "../../assets/Untitled.jpg";
import MiLaser from "../../assets/laser.jpg";
import MiCorporeo from "../../assets/corporeo.jpg";
import MiGrabado from "../../assets/grabado.jpg";

const trabajos = [
  { id: 1, nombre: 'Letreros', imagen: MiLetrero, ruta: '/letreros' },
  { id: 2, nombre: 'Corte Laser Metales', imagen: MiLaser, ruta: '/corte-laser-metales' },
  { id: 3, nombre: 'Corte Laser Acrilicos', imagen: MiCorporeo, ruta: '/corte-laser-acrilicos' },
  { id: 4, nombre: 'Grabados', imagen: MiGrabado, ruta: '/grabados' },
];

const Home = () => {
  const navigate = useNavigate(); 

  return (
    <div className="container">
      <div className="card-container">
        {trabajos.map((trabajo) => (
          <div
            key={trabajo.id}
            className="card"
            onClick={() => navigate(trabajo.ruta)}
          >
            <img src={trabajo.imagen} alt={trabajo.nombre} className="card-image" />
            <h3 className="card-title">{trabajo.nombre}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
