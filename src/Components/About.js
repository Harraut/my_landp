import React from "react";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";


const About = () => {
  return (
    <div className="about-section-container" id="about-section-container">
      <div className="about-background-image-container">
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Sobre nosotros</p>
        <h2 className="primary-heading">
          ¿Quiénes Somos?
        </h2>
        <p className="primary-text"> 
          Somos una comunidad de aprendizaje y experimentación, conformada por estudiantes, docentes y entusiastas de la tecnología que comparten la pasión por la investigación, la programación, el diseño y la innovación. 
        </p>
        <p className="primary-text">
          Nos especializamos en el desarrollo de soluciones tecnológicas que aborden desafíos actuales, promoviendo el trabajo en equipo y la exploración de nuevas tendencias.
        </p>
        <div className="about-buttons-container">
          <a href="#MisionAndVision">
            <button className="secondary-button">Conocer más</button>
          </a>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Ver Video
          </button>
        </div>
              
      </div>
    </div>
  );
};

export default About;
