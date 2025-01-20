import React from "react";
import { Link }  from "react-router-dom";

const Landing = () => {
    return(
        <div className="divContainer-landing">
            <div className="letters">
                <h1>OHHH ! PEPO</h1>
            </div>
            <div id="button">
                <Link to='/home'>
                    <button>INGRESAR</button>
                </Link>
            </div>
        </div>
    )
}

export default Landing;