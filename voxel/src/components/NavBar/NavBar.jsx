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
            <Link to='/Home'>
                <button>Letreros</button>
            </Link>
            <Link to='/Home'>
                <button>Corte Laser Metales</button>
            </Link>
            <Link to='/Home'>
                <button>Corte Laser Acrilicos</button>
            </Link>
            <Link to='/Home'>
                <button>Grabados</button>
            </Link>
            <Link to='/Home'>
                <button>Contacto</button>
            </Link>
            
        </div>
    </nav>
        
    )
}

export default NavBar;