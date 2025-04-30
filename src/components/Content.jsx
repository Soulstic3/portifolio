import React, { useState } from "react";
import github from "../images/icons/Github.svg";
import projetos from "../projetos.json";
import Slider from "./Slider";
import Modal from "./Modal";

const Content = () => {
  const [openModalId, setOpenModalId] = useState(null); // Armazena o ID do projeto aberto
  const openModal = (id) => setOpenModalId(id);
  const closeModal = () => setOpenModalId(null);

  return (
    <div className="content-container">
      <h2>Projetos</h2>
      <div className="content-card-container">
        {projetos.map(
          (
            item,
            index // Mapeia o json importado
          ) => (
            <div className="content-card" key={index}>
              <Slider images={item.images} />{" "}
              {/*Envia para o slider as imagens*/}
              <div className="content-card-text">
                <p className="titulo">{item.titulo}</p>
                <p>{item.descricao}</p>
              </div>
              <div className="content-buttons">
                <button onClick={() => openModal(index)}>detalhes</button>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="GitHub" />
                </a>
              </div>
                <Modal
                  obj={item} // Envia para o modal o objeto para ser exibido
                  isOpen={openModalId === index} // Só abre se o ID corresponder
                  onClose={closeModal}
                />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Content;
