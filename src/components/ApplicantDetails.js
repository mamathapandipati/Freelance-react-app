import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import FileDownload from "js-file-download";
import { Col, Container, Row } from "react-bootstrap";
const ApplicantDetails = () => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/applicantdetails`)
      .then((arr) => setDetails(arr.data));
  }, []);

  return (
    <div>
      <h3 className="mesg center">Applicants Details</h3>
      <div className="mt-5">
        <div className="container">
          <table className="table">
            <thead>
              <tr className="table-dark">
                <th>Applicant Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Country</th>

                <th>Resume</th>
              </tr>
            </thead>
            <tbody>
              {details.map((details) => (
                <tr>
                  <td>{details.username} </td>
                  <td> {details.email} </td>
                  <td>{details.mobile} </td>
                  <td> {details.city} </td>
                  <td>{details.username} Resume.pdf</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApplicantDetails;
