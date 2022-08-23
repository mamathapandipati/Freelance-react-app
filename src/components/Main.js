import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

function Main() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
    console.log(value);
  };

  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2 mb-2"></div>

        <table class="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">id</th>
              <th scope="col">Username</th>
              <th scope="col">email</th>
              <th scope="col">Job</th>
              <th scope="col">Number</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{}</th>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Main;
