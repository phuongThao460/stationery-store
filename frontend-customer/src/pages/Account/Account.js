/* eslint-disable react/no-direct-mutation-state */
import React, { Component, createRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idCity: 0,
      idDis: 0,
      idWard: 0,
      lstCities: [],
      lstWards: [],
      lstDistrict: [],
      cusInfo: null,
    };
    this.getListCities();
    this.fullName = createRef();
    this.phoneNumber = createRef();
    this.streetName = createRef();
    this.email = createRef();
    this.password = createRef();
    this.gender = createRef();
  }
  getListCities = () => {
    axios.get("http://localhost:8000/thanh_pho/").then((response) => {
      this.setState({ lstCities: response.data });
    });
  };
  getListDistrict = () => {
    axios
      .post("http://localhost:8000/quan/by_thanh_pho", {
        id_thanh_pho: this.state.idCity,
      })
      .then((response) => {
        this.setState({ lstDistrict: response.data });
      });
  };
  getListWards = () => {
    axios
      .post("http://localhost:8000/phuong/by_quan", {
        id_quan: this.state.idDis,
      })
      .then((response) => {
        this.setState({ lstWards: response.data });
      });
  };
  changeCities = (event) => {
    this.state.idCity = event.target.value;
    this.setState(this);
    this.getListDistrict();
  };
  changeDistricts = (event) => {
    this.state.idDis = event.target.value;
    this.setState(this);
    this.getListWards();
  };
  changeWards = (event) => {
    this.state.idWard = event.target.value;
    this.setState(this);
  };

  createAccount = async () => {
    const ttkh_req = {
      ten_kh: this.fullName.current.value,
      sdt: this.phoneNumber.current.value,
      dia_chi: this.streetName.current.value,
      email: this.email.current.value,
      diem_tich_luy: "0",
      gioi_tinh: this.gender.current.value,
      id_phuong: this.state.idWard,
    };

    const tkkh_req = {
      email: this.email.current.value,
      password: this.password.current.value,
      id_ttkh: null,
    };

    const ttkh_res = await axios.post("http://localhost:8000/ttkh/create", ttkh_req);
    tkkh_req['id_ttkh'] = await ttkh_res.data._id;

    this.setState({ cusInfo: ttkh_res.data });

    const tkkh_res = await axios.post("http://localhost:8000/tkkh/create", tkkh_req);

    window.localStorage.setItem("customer", JSON.stringify(tkkh_res.data));
  };
  render() {
    return (
      <div
        className="container-Signup"
        style={{ backgroundImage: `url('./images/Login-Form1.jpg')` }}
      >
        <h2 className="title-Signup">Create Account</h2>
        <div className="wrapper-signup">
          <form className="Info-form">
            <div>
              <h3 className="title-form">Account Information</h3>
            </div>
            <div className="GN">
              <div className="Gender" style={{ display: "flex" }}>
                <select
                  className="Input-type"
                  style={{ width: "80px", padding: "0px", marginRight: "10px" }}
                >
                  <option value="0" ref={this.gender} className="select-option">
                    Mr.
                  </option>
                  <option value="1" ref={this.gender} className="select-option">
                    Mrs.
                  </option>
                </select>

                <input
                  className="Input-type"
                  placeholder="Your full name"
                  ref={this.fullName}
                  type="text"
                  autoFocus
                ></input>
              </div>
            </div>
            <div className="email">
              <input
                className="Input-type"
                placeholder="Email"
                type="email"
                ref={this.email}
              ></input>
            </div>
            <div className="password">
              <input
                className="Input-type"
                placeholder="Password"
                type="password"
                ref={this.password}
              ></input>
            </div>
            <div className="phone">
              <input
                type="number"
                pattern="[0-9]*"
                inputmode="numeric"
                className="Input-type"
                placeholder="Phone number"
                ref={this.phoneNumber}
              ></input>
            </div>
          </form>
          <form className="Address-form">
            <div>
              <h3 className="title-form">Address Information</h3>
            </div>
            <div className="cus-address">
              <input
                className="Input-type"
                placeholder="Street number and name"
                ref={this.streetName}
              ></input>
            </div>
            <div className="cus-city">
              <select
                className="Input-type"
                value={this.state.idCity}
                onChange={this.changeCities}
              >
                <option value="0" className="select-option">
                  Select City...
                </option>
                {this.state.lstCities.map((item, index) => (
                  <option key={index} value={item._id} onChange={this.getValue}>
                    {item.ten_thanh_pho}
                  </option>
                ))}
              </select>
            </div>
            <div className="cus-district">
              <select
                className="Input-type"
                value={this.state.idDis}
                onChange={this.changeDistricts}
              >
                <option value="0" className="select-option">
                  Select District...
                </option>
                {this.state.lstDistrict.map((item, index) => (
                  <option key={index} value={item._id}>
                    {item.quan_huyen}
                  </option>
                ))}
              </select>
            </div>
            <div className="cus-ward">
              <select
                className="Input-type"
                value={this.state.idWard}
                onChange={this.changeWards}
              >
                <option value="0" className="select-option">
                  Select Ward...
                </option>
                {this.state.lstWards.map((item, index) => (
                  <option key={index} value={item._id}>
                    {item.phuong_xa}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </div>
        <div className="btn-signup">
          <Link to="/login">
            <button className="submit" onClick={this.createAccount}>
              Create account
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
