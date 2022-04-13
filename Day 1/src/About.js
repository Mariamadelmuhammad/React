import React from "react";
import "./About.css";
import Cv from "./cv/Mariam Adel Muhammad.docx";
import { FaAdn } from "react-icons/fa";
class About extends React.Component {
  render() {
    return (
      <>
        <br /> <br /> <br /> <br />
        <div className="card w-100">
          <div className="card-body">
            <h5 className="about text-center">About me</h5>
            <br /> <br /> <br /> <br />
            <p className="text ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <br /> <br />
            <FaAdn id="icon" />
            <button
              type="button"
              className="d-grid gap-2 col-3 mx-auto btn btn-outline-dark btn-lg"
            >
              <a href={Cv} download>
                Download Resume...
              </a>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default About;
