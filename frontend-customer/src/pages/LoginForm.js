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
          <h2 className="title">ĐĂNG NHẬP</h2>
        </div>
        <form className="form-wrapper">
          <div className="name">
            <label className="label"> Tên đăng nhập</label>
            <input className="input" type="text" name="fullname" />
          </div>
          <div className="password">
            <label className="label">Mật khẩu</label>
            <input className="input" type="password" name="password" />
          </div>
          <div>
            <button className="submit" onClick={handleFormSubmit}>
              Đăng nhập
            </button>
          </div>
          <div className="signuplink">
            Bạn chưa có tài khoản?
            <Link to="/Signup" style={{ color: "#5899d6", fontWeight: "600" }}>
              {" "}
              Đăng kí tại đây
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
