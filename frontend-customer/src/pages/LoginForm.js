import React from "react";
import "../style/LoginForm.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div
      className="container"
      style={{ backgroundImage: `url('./images/Login-Form1.jpg')`, display: "flex" }}
    >
      <div className="app-wrapper">
        <div>
          <h2 className="title">Login</h2>
        </div>
        <form className="form-wrapper">
          <div className="name">
            <label className="label">Email</label>
            <input className="input" type="text" name="fullname" />
          </div>
          <div className="password">
            <label className="label">Password</label>
            <input className="input" type="password" name="password" />
          </div>
          <div>
            <button className="submit" onClick={handleFormSubmit}>
              Login
            </button>
          </div>
          <div className="signuplink">
              You don't have an account?
            <Link to="/Signup" style={{ color: "#5899d6", fontWeight: "600" }}>
              {" "}
              Register here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
