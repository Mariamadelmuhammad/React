import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="btn btn-outline-success" href="./">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-outline-success" href="#">
                Favorites
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              register
            </button>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              login
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Nav;
