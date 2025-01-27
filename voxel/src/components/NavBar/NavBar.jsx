import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import './NavBar.css';


const NavBar = () => {
    return(
    <nav className="navbar">
        <div className="navbar-logo">
                <img src={logo} alt="Logo" className="logo" />
                <span className="company-name">VOXEL CORTE LASER</span>
        </div>
        <div> 
            <Link to='/Home'>
                <button>Inicio</button>
            </Link>
            <Link to='/letreros'>
                <button>Letreros</button>
            </Link>
            <Link to='/corte-laser-metales'>
                <button>Corte Laser Metales</button>
            </Link>
            <Link to='/corte-laser-acrilicos'>
                <button>Corte Laser Acrilicos</button>
            </Link>
            <Link to='/grabados'>
                <button>Grabados</button>
            </Link>
            <Link to='/contacto'>
                <button>Contacto</button>
            </Link>
            
        </div>
    </nav>
        
    )
}

export default NavBar;