import axios from "axios";
import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const PostJob = () => {
  const navigate = useNavigate();
  const [jobtitle, setJobtitle] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [jobtype, setJobType] = useState("");
  const [qulifications, setQulifications] = useState("");
  const [skills, setSkillls] = useState("");
  const [city, setCity] = useState("");
  const [workmodel, setWorkmodel] = useState("");
  const [jobdescription, setJobdescription] = useState("");
  const [data, setData] = useState([]);
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (city) => {
    setCity(city);
    console.log("ffffffff", city);
    window.city = city.label;
    console.log("www", window.city);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const city = window.city;
    console.log(data);
    axios
      .post(`http://localhost:5000/postjob`, {
        jobtitle,
        jobtype,
        qulifications,
        companyname,
        skills,
        city,
        workmodel,
        jobdescription,
      })
      .then((arr) => {
        setData(arr.data);
        navigate("/dashboard");
      });
  };

  return (
    <div>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration">
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Post Job Form</h3>
                  <form onSubmit={submitHandler}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="jobtitle">
                            Job Title
                          </label>
                          <input
                            type="text"
                            id="jobtitle"
                            name="jobtitle"
                            value={jobtitle}
                            className="form-control form-control-lg"
                            required
                            onChange={(e) => setJobtitle(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label className="form-label">Job Type</label>
                          <select
                            value={jobtype}
                            onChange={(e) => setJobType(e.target.value)}
                            className="select form-control"
                          >
                            <option>-- Select --</option>
                            <option value="FullTime">Full Time</option>
                            <option value="PartTime">Part Time</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <label htmlFor="companyname" className="form-label">
                            Company Name
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="companyname"
                            name="companyname"
                            value={companyname}
                            required
                            onChange={(e) => setCompanyname(e.target.value)}
                          ></input>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="city">
                            Country
                          </label>
                          <Select
                            options={options}
                            value={city}
                            onChange={changeHandler}
                          ></Select>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="qulifications">
                            Qualifications
                          </label>
                          <input
                            type="text"
                            id="qulifications"
                            name="qulifications"
                            value={qulifications}
                            className="form-control form-control-lg"
                            required
                            onChange={(e) => setQulifications(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label className="form-label">Work Model</label>

                          <select
                            className="select form-control"
                            value={workmodel}
                            onChange={(e) => setWorkmodel(e.target.value)}
                          >
                            <option>-- Select --</option>
                            <option value="Remote">Remote</option>
                            <option value="Hybrid">Hybrid</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="skills">
                            Skills
                          </label>
                          <input
                            type="text"
                            id="skills"
                            name="skills"
                            value={skills}
                            required
                            className="form-control form-control-lg"
                            onChange={(e) => setSkillls(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="jobdescription">
                          Job Description
                        </label>
                        <textarea
                          className="form-control"
                          id="jobdescription"
                          rows="4"
                          name="jobdescription"
                          value={jobdescription}
                          required
                          onChange={(e) => setJobdescription(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                    <div className="mt-4 pt-2">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Submit"
                      />
                      <NavLink to="/dashboard">
                        <button className="btn btn-warning">Cancel</button>
                      </NavLink>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostJob;
