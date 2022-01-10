/* eslint-disable no-unused-vars */
import React, { createRef, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Notify from "react-notification-alert";
import "react-notification-alert/dist/animate.css";
import axios from "axios";

function LoginForm() {
  let navigate = useNavigate();
  let err_notify = useRef();
  var options = {};
  options = {
    place: "tr",
    message: <div>Tài khoản hoặc mật khẩu không đúng</div>,
    type: "danger",
    icon: "fas fa-times",
    autoDismiss: 3,
    closeButton: false,
  };

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
        .post("https://stationery-store-tmdt.herokuapp.com/tkkh/login", {
          email: emailInput.current.value,
          password: passwordInput.current.value,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data == null) {
            err_notify.current.notificationAlert(options);
          } else {
            window.localStorage.setItem("id_account", res.data._id);
            window.localStorage.setItem(
              "customer-account",
              JSON.stringify(res.data.id_ttkh)
            );
            navigate("/");
            window.location.reload();
          }
        });
    }
  };
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
          <Notify ref={err_notify} />
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
