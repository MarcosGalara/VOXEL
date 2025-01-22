import React from 'react';
import MiLetrero from "../../assets/Untitled.jpg";
import MiLaser from "../../assets/laser.jpg";
import MiCorporeo from "../../assets/corporeo.jpg";
import MiGrabado from "../../assets/grabado.jpg"

const trabajos = [
  {
    id: 1,
    nombre: 'Letreros',
    imagen: MiLetrero,
  },
  {
    id: 2,
    nombre: 'Corte Laser Metales',
    imagen: MiLaser,
  },
  {
    id: 3,
    nombre: 'Corte Laser Acrilicos',
    imagen: MiCorporeo,
  },
  {
    id: 4,
    nombre: 'Grabados',
    imagen: MiGrabado,
  },
];

const Home = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {trabajos.map((trabajo) => (
        <div
          key={trabajo.id}
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            width: '200px',
            padding: '16px',
            textAlign: 'center',
          }}
        >
          <img
            src={trabajo.imagen}
            alt={trabajo.nombre}
            style={{ width: '100%', borderRadius: '8px' }}
          />
          <h3>{trabajo.nombre}</h3>
        </div>
      ))}
    </div>
  );
};

export default Home;
