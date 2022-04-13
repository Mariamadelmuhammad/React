import React from "react";
import "./Card.css";
class Card extends React.Component {
  render() {
    return (
      <>
        <br /> <br /> <br /> <br />
        <h1 className="text-center port">Portfolio</h1>
        <br /> <br /> <br /> <br /> <br />
        <div className="container down text-center">
          <div className="row ">
            <div className="col col-md-4">
              <div className="card cent">
                <div className="card-body paint">
                  <h5 className="card-title">Web Design</h5>
                  <hr />
                </div>
              </div>
            </div>
            <div className="col col-md-4">
              <div className="card cent">
                <div className="card-body nopaint">
                  <h5 className="card-title">Mobile Design</h5>
                  <hr />
                </div>
              </div>
            </div>

            <div className="col col-md-4">
              <div className="card cent">
                <div className="card-body paint">
                  <h5 className="card-title">Logo Design</h5>
                  <hr />
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />

          <div className="row ">
            <div className="col col-md-4">
              <div className="card cent">
                <div className="card-body nopaint">
                  <h5 className="card-title">Web Application Development</h5>
                  <hr />
                </div>
              </div>
            </div>

            <div className="col col-md-4">
              <div className="card cent">
                <div className="card-body paint">
                  <h5 className="card-title">Mobile Application Development</h5>
                  <hr />
                </div>
              </div>
            </div>

            <div className="col col-md-4">
              <div className="card cent">
                <div className="card-body nopaint">
                  <h5 className="card-title">PWA Development</h5>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
