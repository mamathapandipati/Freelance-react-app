import { useForm } from "react-hook-form";
import { React, useState } from "react";

import { useNavigate, NavLink } from "react-router-dom";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
const ChangePassword = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();
  const [successmessage, setSuccessMessage] = useState("");
  const [errormessage, setErrorMessage] = useState("");
  const onSubmit = () => {
    //  navigate("/myprofile");
  };
  return (
    <Container>
      <Row>
        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
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
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicOldPassword">
              <Form.Label>OldPassword</Form.Label>
              <Form.Control
                className={`${errors.password && "invalid"}`}
                type="password"
                placeholder="oldPassword"
                name="Oldpassword"
                autoComplete="off"
                {...register("oldpassword", {
                  required: "oldpassword is Required!",
                  minLength: {
                    value: 8,
                    message: "Minimun required length is 8",
                  },
                })}
                onKeyUp={() => {
                  setSuccessMessage("");
                  setErrorMessage("");
                  trigger("oldpassword");
                }}
              />
              {/* <InputGroup.Append>
        //     <InputGroup.Text>
        //         <i onClick={clickHandler} class={showPass ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
        //     </InputGroup.Text>
        // </InputGroup.Append> */}
              {errors.oldpassword && (
                <small className="text-danger">
                  {errors.oldpassword.message}
                </small>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>NewPassword</Form.Label>
              <Form.Control
                className={`${errors.password && "invalid"}`}
                type="password"
                placeholder="NewPassword"
                name="newpassword"
                autoComplete="off"
                {...register("newpassword", {
                  required: "Newpassword is Required!",
                  minLength: {
                    value: 8,
                    message: "Minimun required length is 8",
                  },
                })}
                onKeyUp={() => {
                  setSuccessMessage("");
                  setErrorMessage("");
                  trigger("newpassword");
                }}
              />
              {errors.newpassword && (
                <small className="text-danger">
                  {errors.newpassword.message}
                </small>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicconfPassword">
              <Form.Label>ConfirmNewPassword</Form.Label>
              <Form.Control
                className={`${errors.confirmpassword && "invalid"}`}
                type="password"
                placeholder="confirmPassword"
                name="confirmpassword"
                {...register("confirmpassword", {
                  required: "Confirmpassword is Required!",
                  minLength: {
                    value: 8,
                    message: "Minimun required length is 8",
                  },
                })}
                onKeyUp={() => {
                  setSuccessMessage("");
                  setErrorMessage("");
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
              UpdatePassword{" "}
            </Button>
            <div className="container bg-light">
              <div className="col-md-12 text-center">
                <NavLink to="/myprofile">
                  <button type="button" className="btn btn-info">
                    BackHome
                  </button>
                </NavLink>
              </div>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ChangePassword;
