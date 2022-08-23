import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, NavLink } from "react-router-dom";
import { store } from "../App";
const MyProfile = () => {
  const navigate = useNavigate();
  const [token, setToken] = useContext(store);
  const [data, setData] = useState(null);
  const [review, setReview] = useState([]);
  const [message, setMessage] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/myprofile`, {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => setData(res.data));
    axios
      .get(`http://localhost:5000/myreview`, {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => {
        setReview(res.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/myprofile`, {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => setData(res.data));
    axios
      .get(`http://localhost:5000/recivemessage`, {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => {
        setMessage(res.data);
      });
  }, []);
  if (!token) {
    navigate("/login");
  }
  const setUpdate = (_id, username, email, mobile, price, skills, role) => {
    localStorage.setItem("_id", _id);
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("price", price);
    localStorage.setItem("skills", skills);
    localStorage.setItem("role", role);
  };

  //  <NavLink to={`/editprofile/${data._id}`}>EditProfile</NavLink>
  return (
    <div>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <ul class="nav">
            <li className="navitem1">
              <NavLink className="nav-link" to="/changepassword">
                Change Password
              </NavLink>
            </li>
            <li className="navitem1">
              <NavLink className="nav-link" to="/browsejobs">
                Browse Jobs
              </NavLink>
            </li>
            <li className="navitem1">
              <NavLink
                className=" nav-link"
                to="/login"
                onClick={() => setToken(null)}
              >
                LogOut
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <section className="bg-light">
        {data && (
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-lg-6 mb-4 mb-lg-0">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="mt-3 mb-4">
                      <img
                        src="https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
                        className="square img-fluid w-25"
                      />
                    </div>
                    <h4 className="mb-2">{data.username}</h4>
                    <p>
                      {data.role} <span class="mx-2">|</span>{" "}
                      <a href="#!">{data.email}</a>
                    </p>
                    <div className="mb-4 pb-2">
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-floating"
                      >
                        <i className="fab fa-facebook-f fa-lg"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-floating"
                      >
                        <i className="fab fa-twitter fa-lg"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-floating"
                      >
                        <i className="fab fa-skype fa-lg"></i>
                      </button>
                    </div>

                    <div className="d-flex justify-content-between text-center mt-5 mb-2">
                      <div>
                        <p className="mb-2 h5">
                          <u>Mobile</u>
                        </p>
                        <p>{data.mobile}</p>
                      </div>
                      <div className="px-3">
                        <p className="mb-2 h5">
                          <u>Skills</u>
                        </p>
                        <p>{data.skills}</p>
                      </div>
                      <div className="px-3">
                        <p className="mb-2 h5">
                          <u>Price</u>
                        </p>
                        <p>{data.price}/h</p>
                      </div>
                      <div>
                        <div className="px-3 ">
                          <p className="mb-2 h5">Reviews</p>
                          {review ? (
                            review.map((review) => (
                              <div>
                                <ul>
                                  <li>
                                    <h4 className="text-muted mb-0">
                                      {review.taskprovider}
                                    </h4>
                                    <p className="fas fa-star">
                                      {review.rating}
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            ))
                          ) : (
                            <p>No Review added yet</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <NavLink className="col-md-12 text-center" to="/editprofile">
                    <button
                      onClick={() =>
                        setUpdate(
                          data._id,
                          data.username,
                          data.email,
                          data.mobile,
                          data.price,
                          data.skills,
                          data.role
                        )
                      }
                      className="btn btn-primary btn-lg m-auto"
                    >
                      Edit Profile
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <div className="center">
        <p className="mesg">Message From Employers</p>
        <Container>
          <Row>
            <Col
              lg={5}
              md={6}
              sm={12}
              className="p-5 m-auto shadow-sm rounded-lg .ml-3 colr "
            >
              {message ? (
                message.map((message) => (
                  <div>
                    <ul>
                      <li>
                        <h4 className="text-muted mb-0">{message.employer}</h4>
                      </li>

                      <p className="text-muted mb-0">{message.message}</p>
                      <hr></hr>
                    </ul>
                  </div>
                ))
              ) : (
                <p>No Message added yet</p>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MyProfile;
