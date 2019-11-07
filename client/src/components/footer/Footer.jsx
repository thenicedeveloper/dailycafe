import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
    return(
        <footer className="footer" >
            <NavLink className="footer-link" to="/product">About</NavLink>
            <NavLink className="footer-link" to="/product">Contact Us</NavLink>
        </footer>
    );
    
}

export default Footer;