import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
    <div className="container-fluid bg-dark pt-3 pb-3 text-light ">
      <div className="d-flex justify-content-around">
        <ul className="d-flex justify-content-between flex-row flex-wrap w-50 navbar-nav">
          <li className="nav-item">
            <a href="#" className="text-light text-decoration-none">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="text-light text-decoration-none">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#skill" className="text-light text-decoration-none">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#project" className="text-light text-decoration-none">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="text-light text-decoration-none">
              Contact Me
            </a>
          </li>
        </ul>
        <ul className="navbar-nav d-flex flex-row justify-content-around mx-5 gap-3">
          <li className="nav-item">
            <a href="#" className="nav-link">
              <FaLinkedinIn />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <FaGithub />
            </a>
          </li>
        </ul>

      </div>
      <div className="container">
        <p className="text-center">Copyright &copy; 2025 | All Rights Reserverd | Developed By Prince Maurya with ❤️</p>
      </div>
      </div>
    </>
  );
};

export default Footer;
