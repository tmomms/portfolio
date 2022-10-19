import React from "react";
import logo from "../images/logo.png"
import './Header.css';
import './Header-Media.css';
import {useState} from 'react';
import MenuItems from "./MenuItems";


const Header = () => {
    const [menuActive, setMenuActive] = useState(false);
    const showMenu = () => {
        setMenuActive(!menuActive);
    }

    
    return(
        <nav className={menuActive ? 'toggle' : 'nav'}>
        <a href="#Home">
        <img src={logo} alt="logo" className="nav_logo"/>
        </a>
        <ul className={menuActive ? "nav__burger__link" : "ul"}>
            {MenuItems.map((menuItem) => {
                return(
                    <a key={menuItem.id} className="nav__link" href={menuItem.link}>
                        {menuItem.menu}
                    </a>
                );
            })}
        </ul>
        <div onClick={showMenu} class="toggle-menu">
                <div class="line line1"></div>
                <div class="line line2"></div>
                <div class="line line3"></div>
        </div>
        </nav>
    )
}

export default Header;