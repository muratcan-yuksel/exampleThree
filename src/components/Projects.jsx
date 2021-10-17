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
          <div className="projectTextSection col-12 col-sm-8">
            <h1 className="projectTitle">Project Management</h1>
            <div className="container">
              <div className="row ">
                <div className="col-12 col-sm-6 projectText">
                  <p className="projectPara">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat tenetur, molestias eos inventore doloribus deserunt
                    laboriosam sunt ducimus non quasi quibusdam officia cum
                    necessitatibus voluptates perferendis tempore sit? Eligendi,
                    laudantium.
                  </p>
                </div>
                <div className="col-12 col-sm-6 projectText">
                  <p className="projectPara">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat tenetur, molestias eos inventore doloribus deserunt
                    laboriosam sunt ducimus non quasi quibusdam officia cum
                    necessitatibus voluptates perferendis tempore sit? Eligendi,
                    laudantium.
                  </p>
                  <button type="button" className="btn btn-outline-success">
                    Success
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
