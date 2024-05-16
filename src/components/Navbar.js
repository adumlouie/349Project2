// importing react to use jsx
import React from "react";
// importing link to use for the reactive scrolling
import { Link } from "react-scroll";
// css file for styling
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <span className="navbar-name">adam louie</span>
            </div>
            <div className="navbar-center">
                <ul>
                    <li>
                        {/* nav link to the about page w smooth scrolling */}
                        <Link to="about" smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li>
                        {/* nav link to the projects w smooth scrolling */}
                        <Link to="projects" smooth={true} duration={500}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        {/* nav link to the contact form w smooth scrolling */}
                        <Link to="contact" smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
