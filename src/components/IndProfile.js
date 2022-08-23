//import { Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { set, useForm } from "react-hook-form";

import { store } from "../App";
import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import axios from "axios";

const IndProfile = () => {
  const [token, setToken] = useContext(store);
  const { id, username, role, email, mobile, price, skills } = useParams();
  const [rating, setRating] = useState(0);
  const [data, setData] = useState("");
  const [_id, setId] = useState("");
  const [message, setMessage] = useState("");
  const [taskprovider, setTaskprovider] = useState(null);

  const addReviewHandler = (e) => {
    axios
      .get(`http://localhost:5000/empprofile`, {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => setTaskprovider(res.data.companyname));
    let review = {
      taskprovider,
      taskworker: id,
      rating,
    };
    axios
      .post(`http://localhost:5000/addreview`, review, {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => alert(res.data));
  };
  //Rating

  return (
    <div>
      <Link className="btn btn-info" to="/dashboard">
        Back
      </Link>

      <section class="bg-light">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-3 gradient-custom text-center text-white">
                    <img
                      src="https://media.istockphoto.com/photos/professional-woman-working-from-home-picture-id1319189527"
                      alt="Avatar"
                      className="img-fluid my-5"
                    />
                    <h5>{username}</h5>
                    <p>{role}</p>
                  </div>

                  <div className="col-lg-8">
                    <div className="card mb-4">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Full Name :</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{username}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Email :</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{email}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Mobile:</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{mobile}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Price :</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{price}</p>
                          </div>
                        </div>
                        <hr></hr>
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Skills :</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{skills}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Address :</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">Canada</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <NavLink
                    className="col-md-12 text-center"
                    to={`/message/${id}`}
                  >
                    <button className="btn btn-primary btn-lg">
                      Message now
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h2> Reviews and Rating</h2>
      <hr></hr>
      <Col md={4} lg={4} sm={4}>
        <h2 className="text-center">Add Rating</h2>
        <Form onSubmit={addReviewHandler}>
          <Form.Group className="mb-3" controlId="rating">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="number"
              placeholder="Rating out of 5"
              min="1"
              max="5"
              required
              onChange={(e) => setRating(e.target.value)}
            />
          </Form.Group>
          <div className="col-md-12 text-center">
            <Button variant="primary" type="submit">
              Add Rating
            </Button>
          </div>
        </Form>
      </Col>
    </div>
  );
};

export default IndProfile;
