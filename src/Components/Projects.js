import React, { useState } from "react";
import stock1 from "../Assets/istockphoto.jpg";
import stock2 from "../Assets/istockphoto2.jpg";
import stock3 from "../Assets/istockphoto3.jpeg";
import stock4 from "../Assets/istockphoto4.jpeg";
import stock5 from "../Assets/istockphoto5.jpg";


const slides = [
  {
    title: "Proyecto 1",
    description: "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.",
    github: "https://github.com/usuario/proyecto1",
    images: [stock1, stock2],
  },
  {
    title: "Proyecto 2",
    description: "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.",
    github: "https://github.com/usuario/proyecto2",
    images: [stock3, stock4],
  },
  {
    title: "Proyecto 3",
    description: "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.",
    github: "https://github.com/usuario/proyecto3",
    images: [stock5],
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    if (currentIndex < slides.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const goToPrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="work-section-wrapper" id="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Proyectos</p>
        <h2 className="primary-heading">Nuestros Proyectos</h2>
      </div>

      <div className="projects-carousel">
        <div className="projects-slide">
          <h2>{slides[currentIndex].title}</h2>
          <p>{slides[currentIndex].description}</p>
          <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
            {slides[currentIndex].images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Proyecto ${currentIndex + 1} Imagen ${idx + 1}`}
                style={{ width: "300px", height: "200px", objectFit: "cover" }}
              />
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
      <a
        href={slides[currentIndex].github}
        target="_blank"
        rel="noopener noreferrer"
        className="btn custom-github-btn"
      >
        Ver repositorio
      </a>
    </div>
        </div>

<div className="d-flex justify-content-center gap-3 mt-4">
  <button
    onClick={goToPrev}
    disabled={currentIndex === 0}
    className="btn btn-light shadow rounded-circle"
    style={{
      width: "40px",
      height: "40px",
      fontSize: "1.2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: currentIndex === 0 ? 0.5 : 1,
      cursor: currentIndex === 0 ? "not-allowed" : "pointer",
    }}
  >
    ‹
  </button>
  <button
    onClick={goToNext}
    disabled={currentIndex === slides.length - 1}
    className="btn btn-light shadow rounded-circle"
    style={{
      width: "40px",
      height: "40px",
      fontSize: "1.2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: currentIndex === slides.length - 1 ? 0.5 : 1,
      cursor: currentIndex === slides.length - 1 ? "not-allowed" : "pointer",
    }}
  >
    ›
  </button>
</div>


        <div
          className="indicators"
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          {slides.map((_, idx) => (
            <div
              key={idx}
              onClick={() => goToIndex(idx)}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: currentIndex === idx ? "#219424" : "#ccc",
                cursor: "pointer"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;