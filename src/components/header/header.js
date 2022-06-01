import React from "react";
import './header.css';
import Navbar from "../navbar/navbar";
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <header className="outer-container">
            <div className="inner-container">
                <nav>
                    <ul>
                        <li><NavLink to="/" activeClassName="active-navlink">Hottest posts</NavLink></li>
                        <li><NavLink to="/" activeClassName="active-navlink">Reddit</NavLink></li>
                        <li><NavLink to="/" activeClassName="active-navlink">Memes</NavLink></li>
                    </ul>
                </nav>
                <span className="header-content">

                </span>
            </div>
        </header>
    );
}

export default Header;