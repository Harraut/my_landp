import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";

const Projects = () => {
  return (
    <div className="work-section-wrapper" id="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Proyectos</p>
        <h2 className="primary-heading">Nuestros Proyectos</h2>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="projects-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <h2>Proyecto 1</h2>
      </div>

      <div className="projects-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <h2>Proyecto 2</h2>
      </div>

      <div className="projects-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <h2>Proyecto 3</h2>
      </div>
    </div>
  );
};

export default Projects;
