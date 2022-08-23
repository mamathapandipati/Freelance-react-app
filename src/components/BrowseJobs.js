import React from "react";
import { NavLink, Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
const BrowseJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [values, setValues] = useState([]);
  const [id, setId] = useState("");
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/browsejobs`)
      .then((arr) => setJobs(arr.data));
  }, []);

  const handleClick = (data) => {
    // values.push(data);
    console.log("values", data);
    axios
      .post(`http://localhost:5000/savejob`, data)
      .then((res) => alert(res.data));
  };
  return (
    <div>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <ul className="nav">
            <li className="navitem1">
              <NavLink className="nav-link" to="/myprofile">
                My Profile
              </NavLink>
            </li>
            <li className="navitem1">
              <NavLink className="nav-link" to="/mysavedjobs">
                My Saved Jobs
              </NavLink>
            </li>
          </ul>
          <form className="d-flex">
            {" "}
            <input
              className="form-control mr-2 "
              type="search"
              placeholder="Browse jobs ----"
              aria-label="Search"
              onChange={(e) => setSearchTitle(e.target.value)}
            />{" "}
            <button class="btn btn-outline-primary" type="submit">
              Browse Jobs
            </button>{" "}
          </form>
          <ul className="nav">
            <li className="navitem1">
              <NavLink className=" nav-link" to="/login">
                Log Out
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <section>
        {" "}
        {jobs
          .filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value.jobtitle.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          })
          .map((data, i) => (
            <div className="row d-flex justify-content-center ">
              <div className="card mb-3">
                <div>
                  <Container>
                    <Row>
                      <Col
                        lg={5}
                        md={6}
                        sm={12}
                        className="p-5 m-auto shadow-sm rounded-lg .ml-3 bgc "
                      >
                        <h3 key={i}>Job Title : {data.jobtitle}</h3>

                        <h3>Company : {data.companyname}</h3>
                        <h3>Country : {data.city}</h3>

                        <hr></hr>
                        <h5>Requirements</h5>
                        <ul>
                          <li>{data.qulifications}</li>
                        </ul>
                        <br></br>
                        <div>
                          <h5>Skills</h5>
                          <ul>
                            {data.skills.split(",").map((skills) => (
                              <li>
                                <i>{skills}</i>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5>Work Model </h5>
                          <ul>
                            <li>
                              <h6> {data.workmodel} </h6>
                            </li>
                          </ul>
                          <h5>Job Type</h5>
                          <ul>
                            <li>{data.jobtype}</li>
                          </ul>
                        </div>
                        <h5>JobDescription: </h5>

                        <p>{data.jobdescription}</p>
                        <hr></hr>
                        <div>
                          <div className="col-md-12 text-center">
                            <NavLink to="/apply">
                              <button type="button" className="btn btn-primary">
                                Easily Apply
                              </button>
                            </NavLink>

                            <button
                              className="btn btn-warning"
                              onClick={() => handleClick(data)}
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

export default BrowseJobs;
