import React, {useState} from "react";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const Members = () => {
  const workInfoData = [
    {
      icon: <PersonRoundedIcon />,
      title: "Nombre",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      icon: <PersonRoundedIcon />,
      title: "Nombre2",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      icon: <PersonRoundedIcon />,
      title: "Nombre3",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      icon: <PersonRoundedIcon />,
      title: "Nombre4",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      icon: <PersonRoundedIcon />,
      title: "Nombre5",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      icon: <PersonRoundedIcon />,
      title: "Nombre6",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      icon: <PersonRoundedIcon />,
      title: "Nombre7",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      icon: <PersonRoundedIcon />,
      title: "Nombre8",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      icon: <PersonRoundedIcon />,
      title: "Nombre9",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      icon: <PersonRoundedIcon />,
      title: "Nombre10",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      icon: <PersonRoundedIcon />,
      title: "Nombre11",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      icon: <PersonRoundedIcon />,
      title: "Nombre12",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    }

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex + 3 < workInfoData.length) {
      setCurrentIndex(currentIndex + 3)
    }
  }

  const prevSlide = () => {
    if (currentIndex - 3 >=0) {
      setCurrentIndex(currentIndex - 3)
    }
  }

  return (
    <div className="work-section-wrapper" id="members-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Miembros</p>
        <h2 className="primary-heading">Nuestros Miembros</h2>
        <p className="primary-text"> 
          En esta sección, presentamos los miembros de nuestro semillero. Enlaces a repositorios de GitHub para cada proyecto
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.slice(currentIndex, currentIndex + 3).map((data, index) => (
          <div className="work-section-info" key={index}>
            <div className="info-boxes-img-container">
              {data.icon} 
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>

      <div className="slider-buttons">
        <ArrowBack onClick={prevSlide} disabled={currentIndex === 0}className="slider-button"/>
        <ArrowForward onClick={nextSlide} disabled={currentIndex + 3 >= workInfoData.length} className="slider-button"/>
      </div>

    </div>
  );
};

export default Members;
