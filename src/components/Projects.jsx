import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/projects.css";
import projectImage from "../assets/mainProject.jpg";

const Projects = () => {
  return (
    <div>
      <div className="container">
        <div className="row projectRow">
          <div
            style={{
              backgroundImage: `url(${projectImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="projectImgContainer col-12 col-sm-4"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
