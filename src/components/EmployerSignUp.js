import axios from "axios";
import { FaUser, FaRegistered } from "react-icons/fa";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Col, Container, Row, Form, Button, FormGroup } from "react-bootstrap";

const EmployerSignUp = () => {
  //Form validations
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const [successmessage, setSuccessMessage] = useState("");
  const [errormessage, setErrorMessage] = useState("");

  const onSubmit = (data) => {
    reset();
    console.log(data);
    axios
      .post("http://localhost:5000/signup", data)

      .then((res) => {
        setSuccessMessage(res.data);
      })
      .catch((error) => {
        if (error.response) {
          setErrorMessage(error.response.data);
        }
      });
  };
  return (
    <Container id="signin-container">
      <Row>
        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <p style={{ fontSize: "20px" }}>
                <FaUser />
                Create your account
              </p>
              {successmessage && (
                <h5 className="bg-success text-white p-3 m-auto shadow-lg rounded-lg">
                  {successmessage}
                </h5>
              )}
              {errormessage && (
                <h5 className="bg-danger text-white p-3 m-auto shadow-lg rounded-lg">
                  {errormessage}
                </h5>
              )}

              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                className={`${errors.companyname && "invalid"}`}
                type="text"
                placeholder="Enter companyname"
                name="companyname"
                autoComplete="off"
                {...register("companyname", {
                  required: "Companyname is Required!",
                  minLength: {
                    value: 3,
                    message: "Minimun required length is 3",
                  },
                })}
                onKeyUp={() => {
                  trigger("companyname");
                }}
              />
              {errors.companyname && (
                <small className="text-danger">
                  {errors.companyname.message}
                </small>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> Website</Form.Label>
              <Form.Control
                className={`${errors.website && "invalid"}`}
                type="text"
                placeholder="Enter website Name"
                name="website"
                autoComplete="off"
                {...register("website", {
                  required: "website is Required!",
                  minLength: {
                    value: 3,
                    message: "Minimun required length is 3",
                  },
                })}
                onKeyUp={() => {
                  trigger("website");
                }}
              />
              {errors.website && (
                <small className="text-danger">{errors.website.message}</small>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label> Company Email </Form.Label>
              <Form.Control
                className={`${errors.email && "invalid"}`}
                type="email"
                placeholder="Enter Company Email"
                name="email"
                autoComplete="off"
                {...register("email", {
                  required: "Company Email is Required!",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid companyEmail address!",
                  },
                })}
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className={`${errors.password && "invalid"}`}
                type="password"
                placeholder="Password"
                name="password"
                autoComplete="off"
                {...register("password", {
                  required: "password is Required!",
                  minLength: {
                    value: 8,
                    message: "Minimun required length is 8",
                  },
                })}
                onKeyUp={() => {
                  trigger("password");
                }}
              />
              {errors.password && (
                <small className="text-danger">{errors.password.message}</small>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicconfPassword">
              <Form.Label>ConfirmPassword</Form.Label>
              <Form.Control
                className={`${errors.confirmpassword && "invalid"}`}
                type="password"
                placeholder="Password"
                name="confirmpassword"
                {...register("confirmpassword", {
                  required: "Confirmpassword is Required!",
                  minLength: {
                    value: 8,
                    message: "Minimun required length is 8",
                  },
                })}
                onKeyUp={() => {
                  trigger("confirmpassword");
                }}
              />
              {errors.confirmpassword && (
                <small className="text-danger">
                  {errors.confirmpassword.message}
                </small>
              )}
            </Form.Group>
            <Button variant="primary" type="submit" className="form-control">
              SignUp
            </Button>
            <p>
              <FaRegistered />
              Already registered?
              <span className="line">
                <a href="/login" className="text-decoration-none">
                  Sign In
                </a>
              </span>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EmployerSignUp;
