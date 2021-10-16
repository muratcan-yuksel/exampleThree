import React from "react";
import headerImg from "../assets/header.jpg";
import "../styles/header.css";

const Header = () => {
  return (
    <div>
      <div className="headerContainer">
        <div className="headerImgContainer">
          <div className="headerTextContainer">
            <h1>Construction</h1>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              assumenda, quibusdam sequi nisi nostrum autem cumque ipsa cum
              laudantium aut voluptate ducimus animi dolor nihil magni
              reprehenderit maxime eum adipisci?
            </h3>
          </div>
          <img id="headerImage" src={headerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
