import React from "react";
import "./Header.css"; 
import Laser from "../../assets/laser.jpg";

const Header = ({ showServicesTitle }) => {
  return (
    <header className="header-container">
     
      <div className="header-image-container">
        <img
          src={Laser}
          alt="Fondo del header"
          className="header-image"
        />
        <h1 className="header-title-overlay">VOXEL CORTE LASER</h1>
      </div>
        
      
      {showServicesTitle && (
        <div className="header-services">
          <h2 className="header-services-title">Nuestros Servicios</h2>
        </div>
      )}
      
    </header>
  );
};

export default Header;


