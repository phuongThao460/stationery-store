import React, { useState, createRef} from "react";
import "./styles.css";
import TextField from "@mui/material/TextField";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
function Login() {
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
    <div className="main-container">
      <div className="side-left"></div>
      <div className="side-right">
        <div className="login-form">
          <h1>Login</h1>
          <form className="input-field" onSubmit={loginSubmit}>
            <TextField
              id="standard-password-input"
              label="Email"
              type="email"
              autoComplete="current-email"
              variant="standard"
              className="email"
              inputRef={emailInput}
            />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              className="password"
              inputRef={passwordInput}
            />
          </form>
          <div className="btn-submit">
            <button type="submit">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
