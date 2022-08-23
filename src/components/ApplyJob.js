import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
const ApplyJob = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [mobile, setMobile] = useState("");
  const [files, setFile] = useState([]);
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (city) => {
    setCity(city);
    console.log("ffffffff", city);
    window.city = city.label;
    console.log("www", window.city);
  };

  const onSubmit = (e) => {
    const city = window.city;
    e.preventDefault();
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("file", files[i]);
    }

    axios
      .post(
        `http://localhost:5000/upload/${username}/${email}/${city}/${mobile}`,
        data
      )
      .then((res) => {
        alert(res.data);
        navigate("/browsejobs");
      })
      .catch((err) => {
        alert("Upload Fail");
      });
  };

  return (
    <div>
      <section>
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration">
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Apply Job Form</h3>
                  <form onSubmit={onSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="username">
                            UserName
                          </label>
                          <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            className="form-control form-control-lg"
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-md-6 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div className="row">
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

                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="mobile">
                            Mobile
                          </label>
                          <input
                            type="text"
                            id="mobile"
                            name="mobile"
                            className="form-control form-control-lg"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-outline">
                        <label className="form-label">Upload Resume</label>
                        <input
                          type="file"
                          className="form-control form-control-lg"
                          onChange={(e) => setFile(e.target.files)}
                          multiple
                        />
                      </div>
                    </div>
                    <div className="mt-4 pt-2">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Submit"
                      />
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

export default ApplyJob;
