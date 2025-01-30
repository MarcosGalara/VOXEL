import React from 'react';
import Metal1 from "../../assets/LaserMetales/metal1.jpg";
import Metal2 from "../../assets/LaserMetales/metal2.jpg";
import Metal3 from "../../assets/LaserMetales/metal3.jpg";

const trabajosLaserMetales = [
    { id: 1,  imagen: Metal1, },
    { id: 2,  imagen: Metal2, },
    { id: 3,  imagen: Metal3, },
  ];

  const LaserMetales = () => {
    return (
      <div className="container">
        <div className="card-container">
          {trabajosLaserMetales.map((trabajo) => (
            <div key={trabajo.id} className="card">
              <img src={trabajo.imagen} alt={trabajo.nombre} className="card-image" />
              <h3 className="card-title">{trabajo.nombre}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  };
  export default LaserMetales;
  