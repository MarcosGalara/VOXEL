import { Link } from "react-router-dom";
import style from '../NavBar/NavBar.module.css';

const NavBar = () => {
    return(
        <div className={style.mainContainer}> 
            <Link to='/Home'>
                <button className={style.home}>Inicio</button>
            </Link>
            <Link to='/Home'>
                <button className={style.newRecipe}>Letreros</button>
            </Link>
            <Link to='/Home'>
                <button className={style.newRecipe}>Corte Laser Metales</button>
            </Link>
            <Link to='/Home'>
                <button className={style.newRecipe}>Corte Laser Acrilicos</button>
            </Link>
            <Link to='/Home'>
                <button className={style.newRecipe}>Grabados</button>
            </Link>
            <Link to='/Home'>
                <button className={style.newRecipe}>Contacto</button>
            </Link>
            
        </div>
    )
}

export default NavBar;