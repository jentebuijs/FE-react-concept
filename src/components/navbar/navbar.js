import React from "react";
import {Link, NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Hottest posts</Link></li>
                <li><a href="https://www.reddit.com">Reddit</a></li>
                <li><a href="https://www.reddit.com/r/memes/">Memes</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;