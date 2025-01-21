import { Link } from "react-router-dom";
//import style from '../NavBar/NavBar.module.css';

const NavBar = () => {
    return(
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
        //className={style.newRecipe}
    )
}

export default NavBar;