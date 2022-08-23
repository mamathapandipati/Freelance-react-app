import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();

  const [_id, setId] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [price, setPrice] = useState("");
  const [skills, setSkills] = useState("");
  const [role, setRole] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("hhhh");
    setUserName(localStorage.getItem("username"));
    setEmail(localStorage.getItem("email"));
    setMobile(localStorage.getItem("mobile"));
    setPrice(localStorage.getItem("price"));
    setSkills(localStorage.getItem("skills"));
    setRole(localStorage.getItem("role"));
    setId(localStorage.getItem("_id"));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:5000/editprofile/${_id}`, {
        username,
        email,
        mobile,
        skills,
        price,
        role,
      })
      .then((arr) => setData(arr.data));

    navigate("/myprofile");
  };

  return (
    <section className="vh-100 bg-image">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card">
                <div className="card-body p-5">
                  <h2 className=" text-center mb-5">Profile</h2>

                  <form>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example1cg">
                        User Name :
                      </label>
                      <input
                        type="text"
                        id="form3Example1cg"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example3cg">
                        Email :
                      </label>
                      <input
                        type="email"
                        id="form3Example3cg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example4cg">
                        Mobile :
                      </label>
                      <input
                        type="number"
                        id="form3Example4cg"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example4cdg">
                        Skills :
                      </label>
                      <input
                        type="text"
                        id="form3Example4cdg"
                        onChange={(e) => setSkills(e.target.value)}
                        value={skills}
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="role">
                        Role :
                      </label>
                      <input
                        type="text"
                        id="role"
                        onChange={(e) => setRole(e.target.value)}
                        value={role}
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example4cg">
                        Price :
                      </label>
                      <input
                        type="number"
                        id="form3Example4cg"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        onClick={submitHandler}
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditProfile;
