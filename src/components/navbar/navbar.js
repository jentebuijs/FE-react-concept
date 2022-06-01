import React from "react";
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">1</NavLink></li>
                <li><NavLink to="/">2</NavLink></li>
                <li><NavLink to="/">3</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;