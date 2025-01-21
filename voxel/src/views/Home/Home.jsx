import React from 'react';

const trabajos = [
  {
    id: 1,
    nombre: 'Letreros',
    imagen: 'https://lh5.googleusercontent.com/-1nN3PJf7ddjsNj2AOvbXZycydDGammlOBLxg77gvFhX3Y64k0RmKAbbQgO39ABrM6QCIhkIBv6XOBvzNt4MvMPfoM-EUPWK_dXE0jwvT1UCytMJ8tHRgHDJnXEnM-trRw=w1280'
  },
  {
    id: 2,
    nombre: 'Corte Laser Metales',
    imagen: 'https://lh6.googleusercontent.com/zTtzrDRUbjw50v6Ns_zKOvaFLbWQ6zny4-h6blmuA-oj22Wml6mA78piib7loNjBqHpdtw6srQRwuGu8gULYWk-JOM6X5J9PHKY9UPqIW-Q-JcNmlMrszbDAcyV-65Zv1w=w1280',
  },
  {
    id: 3,
    nombre: 'Corte Laser Acrilicos',
    imagen: 'https://lh5.googleusercontent.com/Bjwz92BwJDbnMKQpcq4yhf3_s0V2P687QcfU3IruGdki_U-6KLOMOmQKRQavf2ExvfWqN3s_gI_N-WSjBqUcHL_mz4r-ZKH3CfHRsrUMX2Sxzl3q93nNQk6hjPsChUo7XQ=w1280',
  },
  {
    id: 4,
    nombre: 'Grabados',
    imagen: 'https://lh6.googleusercontent.com/wnM9Ko0wKhX1lhIj77Xe7Cv2kOSVEU0gAiG18YvjIIIeWdNWvhK8LJ_Ai5fpOog-s6JZGTwBiMgpp6JIxLJMDzt6H-ft_jHmEb1N6LEW5aWJupZ5KTLl25ONnNTnuDCBIQ=w1280',
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
