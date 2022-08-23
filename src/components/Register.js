import axios from "axios";
import { FaUser, FaRegistered } from "react-icons/fa";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Register = () => {
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
      .post("http://localhost:5000/register", data)

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
    <div>
      <Container id="signin-container">
        <Row>
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
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
                <Form.Label>Username</Form.Label>
                <Form.Control
                  className={`${errors.username && "invalid"}`}
                  type="text"
                  placeholder="Enter Username"
                  autoComplete="off"
                  name="username"
                  {...register("username", {
                    required: "Username is Required!",
                    minLength: {
                      value: 3,
                      message: "Minimun required length is 3",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("username");
                  }}
                />
                {errors.username && (
                  <small className="text-danger">
                    {errors.username.message}
                  </small>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className={`${errors.email && "invalid"}`}
                  type="text"
                  placeholder="Enter email"
                  name="email"
                  autoComplete="off"
                  {...register("email", {
                    required: "Email is Required!",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address!",
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
              <Form.Group className="mb-3">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  className={`${errors.mobile && "invalid"}`}
                  type="number"
                  placeholder="Enter Mobile"
                  autoComplete="off"
                  name="mobile"
                  {...register("mobile", {
                    required: "Mobile is Required!",
                    // minLength: {
                    //   value: 10,
                    //   message: "Minimun required length is 10",
                    // },
                  })}
                  onKeyUp={() => {
                    trigger("mobile");
                  }}
                />
                {errors.mobile && (
                  <small className="text-danger">{errors.mobile.message}</small>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  className={`${errors.price && "invalid"}`}
                  type="number"
                  placeholder="Enter Price"
                  autoComplete="off"
                  name="price"
                  {...register("price", {
                    required: "Price is Required!",
                  })}
                  onKeyUp={() => {
                    trigger("price");
                  }}
                />
                {errors.price && (
                  <small className="text-danger">{errors.price.message}</small>
                )}
                <Form.Group className="mb-3">
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    className={`${errors.role && "invalid"}`}
                    type="text"
                    placeholder="Enter role"
                    autoComplete="off"
                    name="role"
                    {...register("role", {
                      required: "Role is Required!",
                    })}
                    onKeyUp={() => {
                      trigger("role");
                    }}
                  />
                  {errors.role && (
                    <small className="text-danger">{errors.role.message}</small>
                  )}
                </Form.Group>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Skills</Form.Label>
                <Form.Control
                  className={`${errors.skills && "invalid"}`}
                  type="text"
                  placeholder="Enter Skills"
                  autoComplete="off"
                  name="skills"
                  {...register("skills", {
                    required: "skills is Required!",
                  })}
                  onKeyUp={() => {
                    trigger("skills");
                  }}
                />
                {errors.skills && (
                  <small className="text-danger">{errors.skills.message}</small>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  className={`${errors.description && "invalid"}`}
                  type="text"
                  placeholder="Enter description"
                  autoComplete="off"
                  name="description"
                  {...register("description", {
                    required: "description is Required!",
                  })}
                  onKeyUp={() => {
                    trigger("description");
                  }}
                />
                {errors.description && (
                  <small className="text-danger">
                    {errors.description.message}
                  </small>
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
                  <small className="text-danger">
                    {errors.password.message}
                  </small>
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
                  <a href="/login" className="text-decoration-none ">
                    Sign In
                  </a>
                </span>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
