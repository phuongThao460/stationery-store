/* eslint-disable no-unused-vars */
import React, { createRef, useState } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginForm() {
  let navigate = useNavigate();
  const [errorName, setErrorName] = useState(
    "Phải nhập tên đăng nhập và mật khẩu!"
  );
  const emailInput = createRef();
  const passwordInput = createRef();

  const loginSubmit = (event) => {
    event.preventDefault()
    if (emailInput.current.value === "" || passwordInput.current.value === "") {
      alert(errorName);
    } else {
      axios
        .post("http://localhost:8000/tkkh/login", {
          email: emailInput.current.value,
          password: passwordInput.current.value,
        })
        .then((res) => {
          console.log(res.data)
          if (res.data !== null) {
            alert("Đăng nhập thành công");
            window.localStorage.setItem("customer-account", JSON.stringify(res.data.id_ttkh));
            navigate("/");
            window.location.reload();
          }
        });
    }
  }
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url('./images/Login-Form1.jpg')`,
        display: "flex",
      }}
    >
      <div className="app-wrapper">
        <div>
          <h2 className="title">Login</h2>
        </div>
        <form className="form-wrapper" onSubmit={loginSubmit}>
          <div className="name">
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              name="email"
              ref={emailInput}
            />
          </div>
          <div className="password">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              name="password"
              ref={passwordInput}
            />
          </div>
          <div>
            <button className="submit" type="submit">
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
}

export default LoginForm;

  