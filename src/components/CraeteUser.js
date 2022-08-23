import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
function CraeteUser() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [job, setJob] = useState("");
  const [mobile, setMobile] = useState(0);
  const [sData, setData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    Axios.post(`http://localhost:5000/addtask`, {
      userName,
      email,
      mobile,
      adress,
      job,
    }).then((arr) => setData(arr.data));
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
              value={userName}
              className="form-control"
              onChange={(e) => setUserName(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setMobile(e.target.value)}
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
              onChange={(e) => setAdress(e.target.value)}
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
              onChange={(e) => setJob(e.target.value)}
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
}

export default CraeteUser;
