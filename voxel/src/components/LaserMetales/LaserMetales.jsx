import React from 'react';
import Metal1 from "../../assets/LaserMetales/metal1.jpg";
import Metal2 from "../../assets/LaserMetales/metal2.jpg";
import Metal3 from "../../assets/LaserMetales/metal3.jpg";

const trabajosLaserMetales = [
    {
      id: 1,
      imagen: Metal1,
    },
    {
      id: 2,
      imagen: Metal2,
    },
    {
      id: 3,
      imagen: Metal3,
    },
  ];

  const LaserMetales = () => {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {trabajosLaserMetales.map((trabajosLaserMetales) => (
          <div
            key={trabajosLaserMetales.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              width: '200px',
              padding: '16px',
              textAlign: 'center',
            }}
          >
            <img
              src={trabajosLaserMetales.imagen}
              alt={trabajosLaserMetales.nombre}
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <h3>{trabajosLaserMetales.nombre}</h3>
          </div>
        ))}
      </div>
    );
  };
  
  export default LaserMetales;
  