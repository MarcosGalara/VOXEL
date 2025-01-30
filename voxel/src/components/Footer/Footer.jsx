import React from "react";
import "./Footer.css";
import Mapa from "../../assets/fabrica.jpg";


const Footer = () => {

    const handleMapClick = () => {
        window.open("https://maps.app.goo.gl/E7hGJWz9S1LNPBof8")
    }

  return (
    <footer className="footer-container">
      <div className="footer-location">
        <h2 className="footer-location-title">Nuestra Ubicación</h2>
        <img 
          src={Mapa} 
          alt="Ubicación en el mapa" 
          className="footer-map-image"
          onClick={handleMapClick}
        />
        <h2 
            className="footer-map-text"
            onClick={handleMapClick}
        >
            Padre F. Grote 1086 · Padre F. Grote 1086, X5000 Córdoba, Argentina
        </h2>
      </div>
    </footer>
  );
};

export default Footer;

