import React from "react";
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" activeClassName="active-navlink">Hottest posts</NavLink></li>
                <li><NavLink to="/" activeClassName="active-navlink">Reddit</NavLink></li>
                <li><NavLink to="/" activeClassName="active-navlink">Memes</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;