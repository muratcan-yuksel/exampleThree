import React from "react";
import "../styles/building.css";
import "bootstrap/dist/css/bootstrap.min.css";
import buildingImg from "../assets/buildingImg.jpg";
import star from "../assets/starIcon.svg";

const Building = () => {
  return (
    <div className="buildingContainer">
      <div className="container">
        <div className="row ">
          <div className="buildingText col-12 col-sm-4">
            <h1 className="buildingTextTitle">We have years of experience</h1>
            <p className="buildingTextPara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              unde totam dicta labore doloribus voluptate eius, mollitia modi
              repellat itaque autem illo commodi ducimus repudiandae dolores et
              voluptas quisquam consequuntur.
            </p>
            <button type="button" className="btn btn-outline-info">
              About Us
            </button>
          </div>
          <img
            className="buildingImage col-12 col-sm-8"
            src={buildingImg}
            alt=""
          />
        </div>{" "}
      </div>
      {/* testimonials */}
      <div className="testimonialsTitleContainer">
        <h1 className="testimonialsTitle">Client Testimonials</h1>
      </div>
      <div className="container">
        <div className="row ">
          <div className="testimonial col-12 col-sm-4">
            <div className="stars">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <p className="testimonialText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              quam voluptate, dolore culpa adipisci accusamus laudantium
              consequuntur, numquam est qui facilis similique. Accusantium
              pariatur ab fugiat consequuntur fuga rerum impedit.
            </p>
            <p className="testimonialName">John Smith</p>
          </div>{" "}
          <div className="testimonial col-12 col-sm-4">
            <div className="stars">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <p className="testimonialText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              quam voluptate, dolore culpa adipisci accusamus laudantium
              consequuntur, numquam est qui facilis similique. Accusantium
              pariatur ab fugiat consequuntur fuga rerum impedit.
            </p>
            <p className="testimonialName">John Smith</p>
          </div>{" "}
          <div className="testimonial col-12 col-sm-4">
            <div className="stars">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <p className="testimonialText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              quam voluptate, dolore culpa adipisci accusamus laudantium
              consequuntur, numquam est qui facilis similique. Accusantium
              pariatur ab fugiat consequuntur fuga rerum impedit.
            </p>
            <p className="testimonialName">John Smith</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Building;
