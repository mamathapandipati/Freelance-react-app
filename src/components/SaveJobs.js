import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import axios from "axios";
import { store } from "../App";
const SaveJobs = () => {
  const navigate = useNavigate();
  const [_id, setId] = useState("");
  const [token, setToken] = useContext(store);
  const [data, setData] = useState("");
  const {
    jobtitle,
    jobtype,
    qulifications,
    companyname,
    skills,
    city,
    workmodel,
    jobdescription,
  } = useParams();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("hhhhhhh", jobtitle);
    axios
      .post(
        `http://localhost:5000/savejob/${jobtitle}/${jobtype}/${qulifications}/${companyname}/${skills}/${city}/${workmodel}/${jobdescription}`
      )
      .then((res) => {
        alert(res.data);
        navigate("/browsejobs");
      })
      .catch((err) => {
        alert("Saved Fail");
      });
  };

  return (
    <div>
      <section>
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
                    <h3>JobTitle : {jobtitle}</h3>

                    <h3>Company : {companyname}</h3>
                    <h3>City : {city}</h3>

                    <hr></hr>
                    <h5>Requirements</h5>
                    <ul>
                      <li>{qulifications}</li>
                    </ul>
                    <br></br>
                    <div>
                      <h5>Skills</h5>
                      <ul>
                        {skills.split(",").map((skills) => (
                          <li>
                            <i>{skills}</i>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5>WorkModel </h5>
                      <ul>
                        <li>
                          <h6> {workmodel} </h6>
                        </li>
                      </ul>
                      <h5>JobType</h5>
                      <ul>
                        <li>{jobtype}</li>
                      </ul>
                    </div>
                    <h5>JobDescription: </h5>

                    <p>{jobdescription}</p>
                    <hr></hr>
                    <div>
                      <div className="col-md-12 text-center">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={submitHandler}
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
      </section>
    </div>
  );
};

export default SaveJobs;
