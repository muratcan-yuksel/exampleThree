import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/projects.css";
import projectImage from "../assets/mainProject.jpg";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

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
              //   height: "20em",
            }}
            className="projectImgContainer col-12 col-sm-4"
          ></div>
          <div className="projectTextSection col-12 col-sm-8">
            <h1 className="projectsTitle">Project Management</h1>
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
      {/* latest projects section */}
      <div className="latestProjects">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-sm-4 exampleProject">
              <img src={project1} alt="" />

              <h1 className="projectTitle">Project Title</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
                eveniet, expedita voluptatibus ullam atque placeat ab unde
                praesentium ea cumque molestiae dignissimos odit sapiente
                obcaecati consequuntur laboriosam sint doloremque velit.
              </p>
              <button type="button" className="btn btn-outline-success">
                Success
              </button>
            </div>
            <div className="col-12 col-sm-4 exampleProject">
              <img src={project2} alt="" />

              <h1 className="projectTitle">Project Title</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
                eveniet, expedita voluptatibus ullam atque placeat ab unde
                praesentium ea cumque molestiae dignissimos odit sapiente
                obcaecati consequuntur laboriosam sint doloremque velit.
              </p>
              <button type="button" className="btn btn-outline-success">
                Success
              </button>
            </div>{" "}
            <div className="col-12 col-sm-4 exampleProject">
              <img src={project3} alt="" />

              <h1 className="projectTitle">Project Title</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
                eveniet, expedita voluptatibus ullam atque placeat ab unde
                praesentium ea cumque molestiae dignissimos odit sapiente
                obcaecati consequuntur laboriosam sint doloremque velit.
              </p>
              <button type="button" className="btn btn-outline-success">
                Success
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
