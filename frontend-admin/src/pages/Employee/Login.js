/* eslint-disable no-unused-vars */
import React, { useState, createRef } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import banner from "../../images/banner.png";
import { useNavigate } from "react-router-dom";
function Login() {
  let navigate = useNavigate();
  const [errorName, setErrorName] = useState(
    "Phải nhập tên đăng nhập và mật khẩu!"
  );
  const emailInput = createRef();
  const passwordInput = createRef();

  const loginSubmit = (event) => {
    event.preventDefault();
    if (emailInput.current.value === "" || passwordInput.current.value === "") {
      alert(errorName);
    } else {
      axios
        .post("https://stationery-store-tmdt.herokuapp.com/nhan_vien/login", {
          email: emailInput.current.value,
          password: passwordInput.current.value,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data !== null) {
            alert("Đăng nhập thành công");
            window.localStorage.setItem(
              "employee-account",
              JSON.stringify(res.data)
            );
            navigate("/dashboard");
            window.location.reload();
          }
        });
    }
  };
  return (
    <div className="main-container">
      <div className="side-left">
        <div className="img-banner">
          <img src={banner} alt="banner pic" className="banner-pic" />
        </div>
        <div className="slogan">
          <h3>Writing made more elegant</h3>
          <span>
            Whatever you choose for your stationery is your favorite color
            <br/>because it's where you pour your heart out
          </span>
        </div>
      </div>
      <div className="side-right">
        <div className="login-form">
          <h1 className="login-title">Stationery ADMIN</h1>
          <div className="login-span">
            <span>Welcome to our stationery store</span>
          </div>
          <form className="input-field" onSubmit={loginSubmit}>
            <div className="email" style={{marginBottom: "20px"}}>
              <TextField
                id="standard-email-input"
                label="Email"
                type="email"
                autoComplete="current-email"
                variant="standard"
                className="email-log"
                inputRef={emailInput}
              />
            </div>
            <div className="password">
              <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
                className="password"
                inputRef={passwordInput}
              />
            </div>

            <div className="btn-submit">
              <button type="submit" className="btn-login">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
