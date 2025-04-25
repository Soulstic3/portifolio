import React from "react";
import calendario from "../images/icons/Calendario.svg";
import github from "../images/icons/Github.svg";
import linkedin from "../images/icons/Linkedin.svg";
import microfone from "../images/icons/Microfone.svg";
import pin from "../images/icons/Pin.svg";
import profileImg from "../images/profile-img.png";

const Profile = () => {
  return (
    <div className="profile-card">
      <div className="profile-card-row">
        <div className="profile-card-image">
          <img src={profileImg} alt="profile image" />
        </div>
        <div className="profile-card-text">
          <p className="status">Avaliable to work</p>
          <h2>Felipe Miguel</h2>
          <p>Desenvolvedor Fullstack</p>
        </div>
      </div>
      <div className="profile-card-columns">
        <div className="profile-card-infos">
          <img src={microfone} alt="icon microfone" />
          <p>Português e Inglês</p>
        </div>
        <div className="profile-card-infos">
          <img src={pin} alt="icon pin" />
          <p>Caruaru, PE</p>
        </div>
        <div className="profile-card-infos">
          <img src={calendario} alt="icon calendario" />
          <p>25</p>
        </div>
      </div>
      <div className="profile-card-contats">
        <a
          href="https://www.linkedin.com/in/felipe-silva-b255ab225/"
          target="_blank"
        >
          <img src={linkedin} alt="icon linkedin" />
        </a>
        <a href="https://github.com/Soulstic3" target="_blank">
          <img src={github} alt="icon github" />
        </a>
      </div>
    </div>
  );
};

export default Profile;
