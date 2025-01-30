import React from 'react';
import AceroInox from "../../assets/Grabado/AceroInox.jpg";
import Premios from "../../assets/Grabado/Premios.jpg";
import Metales from "../../assets/Grabado/Metales.jpg";
import MetalOxi from "../../assets/Grabado/MetalOxi.jpg";


const trabajosGrabado = [
    { id: 1,  nombre: 'Letreros', imagen: AceroInox,  },
    { id: 2,  nombre: 'Corte Laser Metales',  imagen: Premios,  },
    { id: 3,  nombre: 'Corte Laser Acrilicos',  imagen: Metales,  },
    { id: 4,  nombre: 'Grabados', imagen: MetalOxi, },
  ];

  const Grabados = () => {
    return (
      <div className="container">
        <div className="card-container">
          {trabajosGrabado.map((trabajo) => (
            <div key={trabajo.id} className="card">
              <img src={trabajo.imagen} alt={trabajo.nombre} className="card-image" />
              <h3 className="card-title">{trabajo.nombre}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Grabados;
  