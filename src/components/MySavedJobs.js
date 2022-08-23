import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";

const MySavedJobs = () => {
  const [id, setId] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/savejobbyid`)
      .then((arr) => setData(arr.data));
  }, []);

  const handleDelete = (id) => {
    console.log("iddddd", id);
    // axios
    //   .delete(`http://localhost:5000/jobpostdelete/${id}`)
    //   .then((arr) => setData(arr.data));
  };

  return (
    <div>
      <section>
        <h2 className="mesg center">Saved jobs</h2>
        {data.map((item) => (
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
                      <h3>JobTitle : {item.jobtitle}</h3>

                      <h3>Company : {item.companyname}</h3>
                      <h3>City : {item.city}</h3>

                      <hr></hr>
                      <h5>Requirements</h5>
                      <ul>
                        <li>{item.qulifications}</li>
                      </ul>
                      <br></br>
                      <div>
                        <h5>Skills</h5>
                        <ul>
                          {item.skills.split(",").map((skills) => (
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
                            <h6> {item.workmodel} </h6>
                          </li>
                        </ul>
                        <h5>JobType</h5>
                        <ul>
                          <li>{item.jobtype}</li>
                        </ul>
                      </div>
                      <h5>JobDescription: </h5>

                      <p>{item.jobdescription}</p>
                      <hr></hr>
                      <div>
                        <div className="col-md-12 text-center">
                          <NavLink to="/apply">
                            <button type="button" className="btn btn-primary">
                              EasilyApply
                            </button>
                          </NavLink>
                          <button
                            onClick={() => handleDelete(item._id)}
                            className="btn btn-danger "
                          >
                            Delete
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

export default MySavedJobs;
