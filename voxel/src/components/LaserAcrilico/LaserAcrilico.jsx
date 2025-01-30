import React from 'react';
import LuminAcr from "../../assets/LaserAcrilico/LuminAcr.jpg";
import AcrVinilo from "../../assets/LaserAcrilico/AcrVinilo.jpg";
import LetraMDF from "../../assets/LaserAcrilico/LetraMDF.jpg";
import MetalAcr from "../../assets/LaserAcrilico/MetalAcr.jpg";


const trabajosLaserAcrilicos = [
    { id: 1,  nombre: 'Calados luminosos con acrilico', imagen: LuminAcr, },
    { id: 2,  nombre: 'Acrilico con vinilo',  imagen: AcrVinilo,  },
    { id: 3,  nombre: 'Letras de MDF',  imagen: LetraMDF, },
    { id: 4,  nombre: 'Salientes de metal y acrilico',  imagen: MetalAcr, },
  ];

  const LaserAcrilicos = () => {
    return (
      <div className="container">
        <div className="card-container">
          {trabajosLaserAcrilicos.map((trabajo) => (
            <div key={trabajo.id} className="card">
              <img src={trabajo.imagen} alt={trabajo.nombre} className="card-image" />
              <h3 className="card-title">{trabajo.nombre}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default LaserAcrilicos;
  