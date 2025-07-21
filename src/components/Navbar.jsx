import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-warning-subtle position-sticky top-0 border-bottom border-danger z-2">
        <div className="container-fluid">
          <a className="navbar-brand text-danger" href="#home">
            Prince Maurya
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-around" id="navbarNav">
            <div>
                <ul className="navbar-nav nav-underline ">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skill">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#project" aria-disabled="true">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" aria-disabled="true">
                  Contact
                </a>
              </li>
            </ul>
            </div>
             <div className="justify-content-end">
                <ul className="navbar-nav justify-content-end">
                    <li className="nav-item">
                        <a href="https://www.linkedin.com/in/prince-maurya-7826a7324/" className="nav-link"><FaLinkedinIn /></a>
                    </li>
                    <li className="nav-item">
                         <a href="https://github.com/alphatech774623/" className="nav-link"><FaGithub /></a>
                    </li>
                </ul>  
             </div>
          </div>

                
        </div>
      </nav>
    </>
  );
};

export default Navbar;
