import React, { useState } from "react";
import github from "../images/icons/Github.svg";
import Carrosel from "./Carrosel";

const Modal = ({ isOpen, obj, onClose }) => {
  if (isOpen) {
    return (
      <div className="modal-background">
        <div className="modal-container">
          <div className="modal-button">
            <button onClick={onClose}>x</button>
          </div>
          <div className="modal-image">
            <Carrosel images={obj.images} />
          </div>
          <div className="modal-info">
            <div className="modal-text">
              <h3>{obj.titulo}</h3>
              <p>{obj.detalhes}</p>
            </div>
            <a href={obj.link} target="_blank">
              <img src={github} alt="" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Modal;
