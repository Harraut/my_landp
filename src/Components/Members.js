import React from "react";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

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
      title: "Nombre5",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      icon: <PersonRoundedIcon />,
      title: "Nombre6",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Miembros</p>
        <h2 className="primary-heading">Nuestros Miembros</h2>
        <p className="primary-text"> 
          En esta sección, presentamos los miembros de nuestro semillero. Enlaces a repositorios de GitHub para cada proyecto
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data, index) => (
          <div className="work-section-info" key={index}>
            <div className="info-boxes-img-container">
              {data.icon} 
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
