import React from "react";

const Contact = () => {
  return (
    <div id="Contact" className="contact-page-wrapper">
      <h1 className="primary-heading">Inscríbete a Nuestro Semillero</h1>
      <div className="contact-form-container">
        <input type="email" placeholder="email@gmail.com" />
        <button className="secondary-button">Enviar</button>
      </div>
    </div>
  );
};

export default Contact;
