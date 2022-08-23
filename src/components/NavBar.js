import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <NavLink to="/" className="navbar-brand">
          UserDetails
        </NavLink>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <NavLink className="link" to="/getall">
                GetAllUsers
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink className="link" to="/register">
                Register
              </NavLink>
            </li>

            <li className="navbar-item">
              <NavLink className="link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink className="link" to="/myprofile">
                MyProfile
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink className="link" to="/me">
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <div></div>
    </div>
  );
};

export default Navbar;
