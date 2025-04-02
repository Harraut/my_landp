import React from "react";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">

        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Semillero de Investigación Fábrica TIC
          </h1>
          <p className="primary-text">
          Fábrica  TIC es un semillero de innovación, investigación y creatividad que impulsa el desarrollo de proyectos tecnológicos en un entorno educativo.           
          </p>
          <p className="primary-text">
          <strong>"Cultivando ideas, sembrando futuro."</strong> Nuestro lema refleja nuestro compromiso con el crecimiento y la formación de nuevas generaciones en el ámbito digital.
          </p>
          <a>
            <button className="secondary-button">
              Más info <FiArrowRight />{" "}
            </button>
          </a>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
