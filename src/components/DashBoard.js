import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import { store } from "../App";
const DashBoard = () => {
  const navigate = useNavigate();
  const [token, setToken] = useContext(store);
  const [data, setData] = useState([]);
  const [review, setReview] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/allprofile`, {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => {
        setData(res.data);
      });
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <ul className="nav">
            <li className="navitem1">
              <NavLink className=" nav-link" to="/postjob">
                Post job
              </NavLink>
            </li>
            <li className="navitem1">
              <NavLink className=" nav-link" to="/applicant">
                Applicant Details
              </NavLink>
            </li>
          </ul>
          <form class="d-flex">
            {" "}
            <input
              class="form-control mr-2"
              type="search"
              placeholder="Browse Skills ----"
              aria-label="Search"
              onChange={(e) => setSearchTitle(e.target.value)}
            />{" "}
            <button class="btn btn-outline-primary" type="submit">
              Browse Skills
            </button>{" "}
          </form>
          <ul className="nav">
            <li className="navitem1">
              <NavLink
                className=" nav-link"
                to="/login"
                onClick={() => setToken(null)}
              >
                Log Out
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <section class="bg-light">
        {data
          .filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value.skills.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          })
          .map((profile) => (
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-6 mb-4 mb-lg-0">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-3 gradient-custom text-center text-white">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                          alt="Avatar"
                          className="img-fluid my-5"
                        />
                        <h5>{profile.username}</h5>
                        <p>"{profile.description}"</p>

                        <i className="far fa-edit mb-5"></i>
                      </div>
                      <div className="col-lg-7 text-center py-5">
                        <div className="card-body p-4">
                          <h6>Information</h6>
                          <hr className="mt-0 mb-4" />
                          <div className="row pt-1">
                            <div className="col-6 mb-3">
                              <h6>Email</h6>
                              <p className="text-muted">{profile.email}</p>
                            </div>
                            <div className="col-6 mb-3">
                              <h6>Mobile</h6>
                              <p className="text-muted">{profile.mobile}</p>
                            </div>
                          </div>
                          <h6>Projects</h6>
                          <hr className="mt-0 mb-4" />
                          <div className="row pt-1">
                            <div className="col-6 mb-3">
                              <h6>Price</h6>
                              <p>{profile.price}/h</p>
                            </div>
                            <div className="col-6 mb-3">
                              <h6>Role</h6>
                              <p>{profile.role}</p>
                            </div>
                            <div className="col-6 mb-3">
                              <h6>Skills</h6>
                              <ul>
                                {profile.skills.split(",").map((skills) => (
                                  <li className="list-unstyled mx-2">
                                    <i>{skills}</i>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="col-6 mb-3">
                              <h6>Rating</h6>
                              <p>
                                5 <i className="fas fa-star"></i>
                              </p>
                            </div>
                            <hr className="mt-0 mb-4" />
                            <NavLink
                              to={`/indprofile/${profile.username}/${profile.role}/${profile.email}/${profile.mobile}/${profile.price}/${profile.skills}/${profile._id}`}
                            >
                              <button className="btn btn-primary btn-lg">
                                View Profile{" "}
                              </button>
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

export default DashBoard;
