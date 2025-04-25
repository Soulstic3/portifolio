import React from "react";
import react from "../images/tecnologias/React.svg";
import javascript from "../images/tecnologias/js.svg";
import css from "../images/tecnologias/css.svg";
import html from "../images/tecnologias/HTML.svg";
import mysql from "../images/tecnologias/MySQL.svg";
import nodejs from "../images/tecnologias/NodeJS.svg";

const Section = () => {
  return (
    <div className="info-card">
      <h2>Principais Tecnologias</h2>
      <div className="info-card-container">
        <div className="info-card-items">
          <img src={react} alt="react" />
          <div className="info-card-texts">
            <h3>React</h3>
            <p>Biblioteca frontend</p>
          </div>
        </div>
        <div className="info-card-items">
          <img src={javascript} alt="JavaScript" />
          <div className="info-card-texts">
            <h3>JavaScript</h3>
            <p>Linguagem de programação</p>
          </div>
        </div>
        <div className="info-card-items">
          <img src={css} alt="css" />
          <div className="info-card-texts">
            <h3>Cascading Style Sheets</h3>
            <p>Linguagem de estilização</p>
          </div>
        </div>
        <div className="info-card-items">
          <img src={html} alt="html" />
          <div className="info-card-texts">
            <h3>HTML</h3>
            <p>Linguagem de marcação</p>
          </div>
        </div>
        <div className="info-card-items">
          <img src={mysql} alt="MySQL" />
          <div className="info-card-texts">
            <h3>MySQL</h3>
            <p>Gerenciamento de banco de dados</p>
          </div>
        </div>
        <div className="info-card-items">
          <img src={nodejs} alt="NodeJS" />
          <div className="info-card-texts">
            <h3>NodeJS</h3>
            <p>Interpretador de codigo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
