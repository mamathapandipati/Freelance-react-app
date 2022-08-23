import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();
  const [join, setJoin] = useState("");
  const onSubmit = (value) => {
    alert(JSON.stringify(value));
    // console.log("typpp", value);
    // if ((value = "employer")) {
    //   alert("frrrr");
    //   navigate("/register");
    // } else {
    //   alert("employer");
    //   navigate("/");
    // }
  };
  const handleChange = (event) => {
    if (event.target.value == "employer") {
      navigate("/employersignup");
    }
    if (event.target.value == "freelancer") {
      navigate("/register");
    }
  };

  return (
    <div className="outbox">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="innerbox">
          <h1 className="join">Join as a Client or Freelancer </h1>
          <div className="eobox">
            <input
              type="radio"
              id="client"
              name="signup"
              value="employer"
              {...register("tradeType", {
                required: " tradeType  is Required!",
              })}
              onChange={handleChange}
            />

            <label for="client">I’m a Client, hiring for a project</label>
          </div>
          <div className="eobox">
            <input
              type="radio"
              id="freelancer"
              name="signup"
              value="freelancer"
              {...register("tradeType", {
                required: " Choose for button for SignUp  is Required!",
              })}
              onChange={handleChange}
            />
              <label for="freelancer">I’m a Freelancer, looking for work</label>
          </div>
          <div>
            {" "}
            {errors.tradeType && (
              <big className="text-danger">{errors.tradeType.message}</big>
            )}
          </div>
          <div className="container bg-light">
            <div className="col-md-12 text-center">
              <button type="submit" class="  btn btn-primary">
                Join with us
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
