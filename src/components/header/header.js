import React from "react";
import './header.css';
import Navbar from "../navbar/navbar";
import {NavLink} from "react-router-dom";

function Header({ image, title }) {
    return (
        <header className="outer-container">
            <div className="inner-container">
                <Navbar />
                <span className="header-content">
                    {image && <img src={image} alt="prut"/>}
                    {title && <h1>{title}</h1>}
                </span>
            </div>
        </header>
    );
}

export default Header;