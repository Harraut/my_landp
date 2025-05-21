import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
} from "reactstrap";

const workInfoData = [
  {
    img: "https://picsum.photos/200?random=1",
    title: "Nombre1",
    text: "Descripción del miembro 1.",
    github: "https://github.com/user1",
  },
  {
    img: "https://picsum.photos/200?random=2",
    title: "Nombre2",
    text: "Descripción del miembro 2.",
    github: "https://github.com/user2",
  },
  {
    img: "https://picsum.photos/200?random=3",
    title: "Nombre3",
    text: "Descripción del miembro 3.",
    github: "https://github.com/user3",
  },
  {
    img: "https://picsum.photos/200?random=4",
    title: "Nombre4",
    text: "Descripción del miembro 4.",
    github: "https://github.com/user4",
  },
  {
    img: "https://picsum.photos/200?random=5",
    title: "Nombre5",
    text: "Descripción del miembro 5.",
    github: "https://github.com/user5",
  },
  {
    img: "https://picsum.photos/200?random=6",
    title: "Nombre6",
    text: "Descripción del miembro 6.",
    github: "https://github.com/user6",
  },
];

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const Members = () => {
  const chunkedSlides = chunkArray(workInfoData, 3);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    setActiveIndex((prev) => (prev === chunkedSlides.length - 1 ? 0 : prev + 1));
  };

  const previous = () => {
    if (animating) return;
    setActiveIndex((prev) => (prev === 0 ? chunkedSlides.length - 1 : prev - 1));
  };

  const slides = chunkedSlides.map((group, index) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={index}
    >
      <div className="d-flex justify-content-center gap-4 py-4 flex-wrap">
        {group.map((member, idx) => (
          <div
            className="work-section-info text-center p-3 border rounded shadow"
            key={idx}
            style={{ width: "18rem", background: "#fff" }}
          >
            <img
              src={member.img}
              alt={member.title}
              className="img-fluid rounded mb-3"
              style={{ height: "180px", objectFit: "cover", width: "100%" }}
            />
            <h5>{member.title}</h5>
            <p>{member.text}</p>
            <a href={member.github} target="_blank" rel="noopener noreferrer" className="btn custom-github-btn mt-2">
              GitHub
            </a>
          </div>
        ))}
      </div>
    </CarouselItem>
  ));

  return (
    <div className="work-section-wrapper" id="members-section-wrapper">
      <div className="work-section-top text-center mb-4">
        <p className="primary-subheading">Miembros</p>
        <h2 className="primary-heading">Nuestros Miembros</h2>
        <p className="primary-text">
          En esta sección, presentamos los miembros de nuestro semillero y los enlaces a sus perfiles de GitHub.
        </p>
      </div>

      <Carousel activeIndex={activeIndex} next={next} previous={previous} interval={false}>
        {slides}
        <CarouselControl direction="prev" directionText="Anterior" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Siguiente" onClickHandler={next} />
      </Carousel>
    </div>
  );
};

export default Members;
