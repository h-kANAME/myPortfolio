//rafce
import React from 'react';
import "./Navbar.css";

const Navbar = ({isScrolling}) => { //acceso a posicion del scroll
    //Volver al inicio con Home
    const toTheTop = () => {
        window.scroll({top: 0, left: 0, behavior: "smooth"});
    }

    return (
        <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
            <div className="navbar-logo" onClick={toTheTop}>KYZ</div>
        </nav>
    );
};

export default Navbar
