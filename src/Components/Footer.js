import React from "react";
import Logo from "../Assets/Logo.png";
import { SiGithub } from "react-icons/si";
import { BsInstagram  } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-wrapper" id="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <div className="footer-icons-text">
            <p><span>Síguenos en:</span></p>
          </div>
            <a href="">
              < SiGithub />
            </a>
            <a href="">
              <BsInstagram  />
            </a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <a href="#home-text-section">
          <span>Inicio</span>
          </a>

          <a href="#about-section-container">
          <span>Sobre Nosotros</span>
          </a>

          <a href="#work-section-wrapper">
          <span>Miembros</span>
          </a>

          <a href="#home-text-section">
          <span>Nuestros Proyectos</span>
          </a>

          <a href="#home-text-section">
          <span>Contáctanos</span>
          </a>
        </div>

        <div className="footer-section-columns">
          <span>fabricaticsena@gmail.com</span>
          <span>Carrera 54 No. 68 – 80.</span>
          <span> Barranquilla - Atlántico, Colombia.</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
