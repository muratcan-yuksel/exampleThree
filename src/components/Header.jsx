import React from "react";
import headerImg from "../assets/header.jpg";
import "../styles/header.css";
// import icon1 from "../assets/icon1.svg";
// import icon2 from "../assets/icon2.svg";
// import icon3 from "../assets/icon3.svg";
// import icon4 from "../assets/icon4.svg";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div className="col-12 col-sm-9 headerImageContainer">
            <div className="headerTextContainer">
              <h1 className="headerTextTitle">Construction</h1>
              <h3 className="headerPara">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                assumenda, quibusdam sequi nisi nostrum autem cumque ipsa cum
                laudantium aut voluptate ducimus animi dolor nihil magni
                reprehenderit maxime eum adipisci?
              </h3>
            </div>
            <img id="headerImage" src={headerImg} alt="" />
          </div>
          <div className="servicesSection col-12 col-sm-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
