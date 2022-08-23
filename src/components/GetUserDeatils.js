import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CraeteUser from "./CraeteUser";

function GetUserDeatils() {
  const [studentData, setStudentData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/gettask`)
      .then((arr) => setStudentData(arr.data));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/delete/${id}`)
      .then((arr) => setStudentData(arr.data));
  };

  return (
    <div>
      <h3>User Details</h3>
      <div className="add_btn mt-2 mb-2">
        <NavLink to="/search" className="btn btn-primary">
          Search
        </NavLink>
        <NavLink to="/createUser" className="btn btn-primary">
          Add data
        </NavLink>
      </div>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Date</th>
            <th>Job </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((data) => (
            <tr>
              <td>{data.userName} </td>
              <td> {data.email} </td>
              <td>{data.mobile} </td>
              <td> {data.adress} </td>
              <td>{data.job} </td>

              <td>
                <Link to={`/update/${data._id}`}>
                  <button className="btn btn-primary btn-sm">Edit</button>
                </Link>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(data._id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetUserDeatils;
