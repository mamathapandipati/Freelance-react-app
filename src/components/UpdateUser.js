import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
const UpdateUser = () => {
  const initialValue = {
    userName: "",
    email: "",
    mobile: "",
    adress: "",
    job: "",
  };
  const [user, setUser] = useState(initialValue);
  const { userName, email, mobile, adress, job } = user;
  const { id } = useParams();
  console.log(id);
  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log("haiiiiiii");
    //  Axios.get(`http://localhost:5000/getuser/${id}`).
    //  then(res=> setUser(res.data))
  });

  const submitHandler = (e) => {
    e.preventDefault();
    // Axios.post(`http://localhost:5000/updateuser/${id}`,  {userName,email,mobile,adress,job}).
    //then(arr => setData(arr.data))

    console.log(userName);
    console.log(email);
    console.log(job);
    console.log(adress);
    console.log(mobile);
  };

  return (
    <div className="container">
      <form className="mt-4">
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="userName"
              value={user.userName}
              className="form-control"
              onChange={(e) => onValueChange(e)}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              className="form-control"
              onChange={(e) => onValueChange(e)}
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Mobile
            </label>
            <input
              type="text"
              name="mobile"
              value={mobile}
              className="form-control"
              onChange={(e) => onValueChange(e)}
              id="exampleInputPassword1"
            />
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              type="text"
              name="adress"
              value={adress}
              className="form-control"
              onChange={(e) => onValueChange(e)}
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-12 col-md-12 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Job Description
            </label>
            <textarea
              name="jdesc"
              value={job}
              className="form-control"
              onChange={(e) => onValueChange(e)}
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </div>

          <button
            type="submit"
            onClick={submitHandler}
            className="btn btn-success"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
