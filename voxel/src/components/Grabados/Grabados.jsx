import React from 'react';
import AceroInox from "../../assets/Grabado/AceroInox.jpg";
import Premios from "../../assets/Grabado/Premios.jpg";
import Metales from "../../assets/Grabado/Metales.jpg";
import MetalOxi from "../../assets/Grabado/MetalOxi.jpg";


const trabajosGrabado = [
    {
      id: 1,
      nombre: 'Letreros',
      imagen: AceroInox,
    },
    {
      id: 2,
      nombre: 'Corte Laser Metales',
      imagen: Premios,
    },
    {
      id: 3,
      nombre: 'Corte Laser Acrilicos',
      imagen: Metales,
    },
    {
      id: 4,
      nombre: 'Grabados',
      imagen: MetalOxi,
    },
  ];

  const Grabados = () => {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {trabajosGrabado.map((trabajosGrabado) => (
          <div
            key={trabajosGrabado.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              width: '200px',
              padding: '16px',
              textAlign: 'center',
            }}
          >
            <img
              src={trabajosGrabado.imagen}
              alt={trabajosGrabado.nombre}
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <h3>{trabajosGrabado.nombre}</h3>
          </div>
        ))}
      </div>
    );
  };
  
  export default Grabados;
  