import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const WhyFreelance = () => {
  return (
    <div>
      {" "}
      <div className="pad">
        <Container id="container">
          <Row>
            <Col
              lg={5}
              md={6}
              sm={12}
              className="p-5 m-auto shadow-sm rounded-lg .ml-3 about"
            >
              <h2>Why Freelance</h2>
              <p className="fontsice">
                A website helps prospective clients find you and give them an
                outlet to easily contact you. You can share your skills,
                services and pricing, which can help eliminate calls and
                meetings. Having a freelance business website is an important
                digital asset because your website can also be a marketing
                tool.What is major advantage of freelancing? Freelancing allows
                workers to build their client base and successfully grow their
                own businesses. As a freelancer, you can experiment and try
                different services and offerings to see which ones make you more
                money and bring in more clients than others
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
export default WhyFreelance;
