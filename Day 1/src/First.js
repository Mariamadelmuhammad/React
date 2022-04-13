import React from "react";
import "./First.css";

import Logo from "./image/bg.png";
class First extends React.Component {
  render() {
    return (
      <>
        <div className="card bg-dark text-white">
          <img src={Logo} class="card-img" alt="img" />

          <div className="card-img-overlay">
            <h1 className="name">Mariam Adel</h1>
            <p className="name">Web Developer & Designer </p>
            <button type="button" className="btn btn-outline-dark btn-lg">
              CONTACT ME...
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default First;
