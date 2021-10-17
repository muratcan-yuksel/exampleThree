import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/contact.css";
import { Input } from "@chakra-ui/react";

const Contact = () => {
  return (
    <div>
      <div className="container">
        <div className="row ">
          <div className="contact col-12 col-sm-6">
            <div className="contactFlex">
              <h1 className="contactTitle">Contact Us</h1>
            </div>
            <div className="formFlex">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Your message
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="footer col-12 col-sm-6">
            <div className="footerFlex">
              <div className="footerText">Lorem Ipsum </div>
              <div className="footerText">+9823465237426 </div>
              <div className="footerText">Lorem@ipsum.com </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
