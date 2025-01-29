import React from 'react';
import MaderaGrabada from "../../assets/Letreros/MaderaGrabada.jpg";
import Premios from "../../assets/Letreros/Premios.jpg";
import Totems from "../../assets/Letreros/Totems.jpg";
import CorporeoLumin from "../../assets/Letreros/CorporeoLumin.jpg";
import CorporeoInox from "../../assets/Letreros/CorporeoInox.jpg";

const trabajosLetreros = [
    {
      id: 1,
      nombre: 'Madera con Grabado',
      imagen: MaderaGrabada,
    },
    {
      id: 2,
      nombre: 'Premios',
      imagen: Premios,
    },
    {
      id: 3,
      nombre: 'Corte Laser Acrilicos',
      imagen: Totems,
    },
    {
      id: 4,
      nombre: 'Corporeos con Luminaria',
      imagen: CorporeoLumin,
    },
    {
      id: 5,
      nombre: 'Corte Laser Metales',
      imagen: Premios,
    },
    {
      id: 6,
      nombre: 'Corporeos Inoxidables',
      imagen: CorporeoInox,
    },
  ];

  const Letreros = () => {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {trabajosLetreros.map((trabajosLetreros) => (
          <div
            key={trabajosLetreros.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              width: '200px',
              padding: '16px',
              textAlign: 'center',
            }}
          >
            <img
              src={trabajosLetreros.imagen}
              alt={trabajosLetreros.nombre}
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <h3>{trabajosLetreros.nombre}</h3>
          </div>
        ))}
      </div>
    );
  };
  
  export default Letreros;
  