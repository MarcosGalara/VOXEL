import React from 'react';
import LuminAcr from "../../assets/LaserAcrilico/LuminAcr.jpg";
import AcrVinilo from "../../assets/LaserAcrilico/AcrVinilo.jpg";
import LetraMDF from "../../assets/LaserAcrilico/LetraMDF.jpg";
import MetalAcr from "../../assets/LaserAcrilico/MetalAcr.jpg";


const trabajosLaserAcrilicos = [
    {
      id: 1,
      nombre: 'Calados luminosos con acrilico',
      imagen: LuminAcr,
    },
    {
      id: 2,
      nombre: 'Acrilico con vinilo',
      imagen: AcrVinilo,
    },
    {
      id: 3,
      nombre: 'Letras de MDF',
      imagen: LetraMDF,
    },
    {
      id: 4,
      nombre: 'Salientes de metal y acrilico',
      imagen: MetalAcr,
    },
  ];

  const LaserAcrilicos = () => {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {trabajosLaserAcrilicos.map((trabajosLaserAcrilicos) => (
          <div
            key={trabajosLaserAcrilicos.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              width: '200px',
              padding: '16px',
              textAlign: 'center',
            }}
          >
            <img
              src={trabajosLaserAcrilicos.imagen}
              alt={trabajosLaserAcrilicos.nombre}
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <h3>{trabajosLaserAcrilicos.nombre}</h3>
          </div>
        ))}
      </div>
    );
  };
  
  export default LaserAcrilicos;
  