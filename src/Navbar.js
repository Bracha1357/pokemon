import React from "react";
import Allpokestyles from './AllPokestyles.css'

function Navbar(){
    return(
        <nav className="navbar bg-body-tertiary style">
            <div className="container d-flex justify-content-center">
                <a className="navbar-brand" href="https://i.pinimg.com/550x/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.jpg">
                    <img 
                        src="https://i.pinimg.com/550x/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.jpg" 
                        alt="pokemon image" 
                        width="50" 
                        height="40"
                    />
                    Pokemon
                </a>
            </div>
        </nav>
    );
}

export default Navbar;