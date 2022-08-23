import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomePage from "./HomePage";
import { NavLink } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
const AboutUs = () => {
  return (
    <div>
      <div className="pad">
        <Container id="container">
          <Row>
            <Col
              lg={5}
              md={6}
              sm={12}
              className="p-5 m-auto shadow-sm rounded-lg .ml-3 about"
            >
              <h2>About Us</h2>
              <p className="fontsice">
                It's a great platform to connect Employer and Freelancer.It has
                two main functionalities,One is Employer can list their job
                openings and number two is freelancer can share their skills and
                experience and services. Freelance websites are places where you
                can earn money for yourself, rather than for a particular
                company. It enables freelancers to search for a wide range of
                jobs. If you are a beginner, then freelancing websites are an
                easier way to earn money online.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="container bg-light">
        <div className="col-md-12 text-center">
          <NavLink to="/">
            <button type="button" className="btn btn-info">
              Home
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
