import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <div>
            <a href="https://github.com/Rhandom1" rel="noreferrer"  target="_blank"><i className="fab fa-github fa-2x social"></i></a>
            <a href="https://www.linkedin.com/in/shawn-mcwhorter-a4b12170/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin fa-2x social"></i></a>
            <a href="https://www.instagram.com/rhandom01/" rel="noreferrer" target="_blank"><i className="fab fa-instagram fa-2x social"></i></a>
        </div>
    )
}

export default Footer;