import React from "react";
import { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { store } from "../App";
const LoginPage = () => {
  const navigate = useNavigate();
  const [token, setToken] = useContext(store);
  const [success, setSuccess] = useState("");

  const [errormessage, setErrorMessage] = useState("");
  const {
    register,

    formState: { errors },
  } = useForm();
  const [data, setData] = useState({
    email: " ",
    password: " ",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    await axios
      .post(`http://localhost:5000/login`, data)
      .then((res) => {
        setToken(res.data.token);
        setSuccess(res.data.user.success);
      })
      .catch((error) => {
        if (error.response) {
          setErrorMessage(error.response.data);
        }
      });
  };

  if (token && success == "usersuccess") {
    navigate("/browsejobs");
  } else if (token && success == "employersuccess") {
    navigate("/dashboard");
  }

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign In
                      </p>

                      <form
                        className="mx-1 mx-md-4"
                        onSubmit={submitHandler}
                        autoComplete="off"
                      >
                        {" "}
                        {errormessage && (
                          <h5 className="bg-danger text-white p-3 m-auto shadow-lg rounded-lg">
                            {errormessage}
                          </h5>
                        )}
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="email"
                              className="form-control"
                              name="email"
                              autoComplete="off"
                              onChange={changeHandler}
                              required
                            />{" "}
                            <label className="form-label" htmlFor="email">
                              Your Email
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              name="password"
                              autoComplete="off"
                              required
                              onChange={changeHandler}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            value="login"
                            className="btn btn-primary btn-lg"
                          >
                            Login
                          </button>
                        </div>
                      </form>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid "
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
