import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
export default function Nav(){
    return(
        <>
        <nav className={` py-3 bg-sky-500/10 flex fixed left-0 right-0 top-0 ${styles.nav}" `}>
          <div className="container">
            <h1 className="text-lg font-bold "><Link to="/"> START FRAMEWORK </Link></h1>

            <ul className="flex gap-3">
                <li className="white font-bold"><NavLink to="/" className="uppercase">ABOUT</NavLink></li>
                <li className="white font-bold"><NavLink to="/portfolio" className="uppercase">PORTFOLIO</NavLink></li>
                <li className="white font-bold"><NavLink to="/contact" className="uppercase">CONTACT</NavLink></li>
            </ul>
            </div>
        </nav>
        </>
    )
}