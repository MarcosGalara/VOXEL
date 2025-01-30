import React from 'react';
import MaderaGrabada from "../../assets/Letreros/MaderaGrabada.jpg";
import Premios from "../../assets/Letreros/Premios.jpg";
import Totems from "../../assets/Letreros/Totems.jpg";
import CorporeoLumin from "../../assets/Letreros/CorporeoLumin.jpg";
import CorporeoInox from "../../assets/Letreros/CorporeoInox.jpg";
import "./Letreros.css";

const trabajosLetreros = [
  { id: 1, nombre: "Madera con Grabado", imagen: MaderaGrabada },
  { id: 2, nombre: "Premios", imagen: Premios },
  { id: 3, nombre: "Corte Laser Acrilicos", imagen: Totems },
  { id: 4, nombre: "Corporeos con Luminaria", imagen: CorporeoLumin },
  { id: 5, nombre: "Corte Laser Metales", imagen: Premios },
  { id: 6, nombre: "Corporeos Inoxidables", imagen: CorporeoInox },
];

const Letreros = () => {
  return (
    <div className="container">
      <div className="card-container">
        {trabajosLetreros.map((trabajo) => (
          <div key={trabajo.id} className="card">
            <img src={trabajo.imagen} alt={trabajo.nombre} className="card-image" />
            <h3 className="card-title">{trabajo.nombre}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
  
  export default Letreros;
  