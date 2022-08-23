import React from "react";
import { NavLink } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
const HomePage = () => {
  return (
    <div className="container-fluid banner">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container">
          <a className="navbar-brand" href="/getall">
            Freelance
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/about"
                >
                  About Us
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="/why">
                  Why Freelance
                </a>
              </li>
            </ul>{" "}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/login"
                >
                  Sign In
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="/radio">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <div className="col-md-8 offset-md-2 info">
          <h1 className="text-center">SPITAL</h1>
          <p className="text-center1">
            Work with the best freelance talent from around the world on our
            secure, flexible and cost-effective platform
          </p>
          <a href="/radio" className="btn btn-md text-center">
            GET STARTED
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
