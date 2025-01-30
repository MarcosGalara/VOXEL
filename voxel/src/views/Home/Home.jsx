import React from 'react';
import MiLetrero from "../../assets/Untitled.jpg";
import MiLaser from "../../assets/laser.jpg";
import MiCorporeo from "../../assets/corporeo.jpg";
import MiGrabado from "../../assets/grabado.jpg"

const trabajos = [
  { id: 1,  nombre: 'Letreros', imagen: MiLetrero,  },
  { id: 2,  nombre: 'Corte Laser Metales',  imagen: MiLaser,  },
  { id: 3,  nombre: 'Corte Laser Acrilicos',  imagen: MiCorporeo, },
  { id: 4,  nombre: 'Grabados', imagen: MiGrabado,  },
];

const Home = () => {
  return (
    <div className="container">
      <div className="card-container">
        {trabajos.map((trabajo) => (
          <div key={trabajo.id} className="card">
            <img src={trabajo.imagen} alt={trabajo.nombre} className="card-image" />
            <h3 className="card-title">{trabajo.nombre}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
