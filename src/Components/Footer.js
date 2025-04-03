import React from "react";
import Logo from "../Assets/Logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

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
          <BsTwitter />
          </a>
          <a href="">
          <SiLinkedin />
          </a>
          <a href="">
          <BsYoutube />
          </a>
          <a href="">
          <FaFacebookF />
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
          <span>244-5333-7783</span>
          <span>fabricaticsena@gmail.com</span>
          <span>Carrera 54 No. 68 – 80.</span>
          <span>080002. Barranquilla - Atlántico, Colombia.</span>
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
