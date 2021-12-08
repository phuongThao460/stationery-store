/* eslint-disable react/no-direct-mutation-state */
import React, { Component, createRef } from "react";
import axios from "axios";
import { isAwaitExpression } from "@babel/types";
//import { Link } from "react-router-dom";
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
    this.state.idCity = event.target.value
    this.setState(this);
    this.getListDistrict();
  };
  changeDistricts = (event) => {
    this.state.idDis = event.target.value
    this.setState(this);
    this.getListWards();
  };
  changeWards = (event) => {
    this.state.idWard = event.target.value
    this.setState(this);
  };

  createAccount = async () => {
    axios
      .post("http://localhost:8000/ttkh/create", {
        ten_kh: this.fullName.current.value,
        sdt: this.phoneNumber.current.value,
        dia_chi: this.streetName.current.value,
        email: this.email.current.value,
        diem_tich_luy: "0",
        gioi_tinh: this.gender.current.value,
        id_phuong: this.state.idWard,
      })
      .then((res) => {
        this.setState({ cusInfo: res.data });
        axios.post("http://localhost:8000/tkkh/create", {
          ten_dn: this.email.current.value,
          mat_khau: this.password.current.value,
          id_ttkh: this.state.cusInfo._id
        }).then((res) => console.log(res.data));
      });
  };
  render() {
    return (
      <div>
        <div className="container-checkout">
          <div className="wrapper-checkout">
            <h1 className="Title-checkout">Checkout</h1>
            <div className="bottom-checkout">
              <div className="Info-checkout">
                <div className="cusInfo">
                  <h1 className="Title-Info">Create account</h1>
                  <input
                    className="Input-type"
                    placeholder="Email"
                    type="email"
                    ref={this.email}
                  ></input>
                  <input
                    className="Input-type"
                    placeholder="Password"
                    type="password"
                    ref={this.password}
                  ></input>
                  <div style={{display: "inline-flex"}}>
                  <select>
                    <option value="0" ref={this.gender}>Mr.</option>
                    <option value="1" ref={this.gender}>Mrs.</option>
                  </select>
                  <input
                    className="Input-type"
                    placeholder="Your full name"
                    ref={this.fullName}
                    type="text"
                    autoFocus
                  ></input>
                  </div>
                  
                  <input
                    className="Input-type"
                    placeholder="Phone number"
                    ref={this.phoneNumber}
                  ></input>
                </div>
                <div className="Shipping">
                  <input
                    className="Input-type"
                    placeholder="Street number and name"
                    ref={this.streetName}
                  ></input>
                  <select
                    className="city"
                    value={this.state.idCity}
                    onChange={this.changeCities}
                  >
                    <option value="0" className="select-option">
                      Select City...
                    </option>
                    {this.state.lstCities.map((item, index) => (
                      <option
                        key={index}
                        value={item._id}
                        onChange={this.getValue}
                      >
                        {item.ten_thanh_pho}
                      </option>
                    ))}
                  </select>
                  <div className="Ward-District">
                    <select
                      className="District"
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
                    <select
                      className="Ward"
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
                  <div>
                    <button className="Button-checkout-checkout" onClick={this.createAccount}>
                      Create account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
