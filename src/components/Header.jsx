import React from "react";
import headerImg from "../assets/header.jpg";
import "../styles/header.css";

const Header = () => {
  return (
    <div>
      <div className="headerContainer">
        <img id="headerImage" src={headerImg} alt="" />
      </div>
    </div>
  );
};

export default Header;
