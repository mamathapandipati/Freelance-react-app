import { Link, NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { set, useForm } from "react-hook-form";
import { store } from "../App";
import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import axios from "axios";

const Message = () => {
  const navigate = useNavigate();
  const [token, setToken] = useContext(store);
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [employer, setEmployer] = useState(null);
  const addReviewHandler = (e) => {
    axios
      .get(`http://localhost:5000/empprofile`, {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => setEmployer(res.data.email));
    let mesg = {
      employer,
      freelancer: id,
      message,
    };
    axios
      .post(`http://localhost:5000/sendmessge`, mesg, {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };
  //sending message

  return (
    <div className="pad">
      <Link className="btn btn-light" to="/dashboard">
        Back
      </Link>
      <Container id="container">
        <Row>
          <Col
            md={6}
            lg={5}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg .ml-3 about"
          >
            <h2>Message Freelancer</h2>
            <Form onSubmit={addReviewHandler}>
              <Form.Group className="mb-3" controlId="message">
                <Form.Control
                  as="textarea"
                  rows={5}
                  type="text"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>

              <Button variant="secondary text-center" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Message;
