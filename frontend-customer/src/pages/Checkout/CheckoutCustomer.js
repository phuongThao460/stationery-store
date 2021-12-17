/* eslint-disable react/no-direct-mutation-state */
import React, { Component, createRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class CheckoutCustomer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idCity: 0,
      idDis: 0,
      idWard: 0,
      city: "",
      dis: "",
      ward: "",
      customerInfo: null,
      lstCities: [],
      lstWards: [],
      lstDistrict: [],
      carts: JSON.parse(window.localStorage.getItem("cart")),
    };
    this.getListCities();
    this.fullName = createRef();
    this.phoneNumber = createRef();
    this.streetName = createRef();
    this.email = createRef();
  }
  getListCities = () => {
    axios.get("http://localhost:8000/thanh_pho/").then((response) => {
      this.state.lstCities = response.data;
      //console.log(this.state.lstCities);
      this.setState(this);
    });
  };
  getListDistrict = () => {
    axios
      .post("http://localhost:8000/quan/by_thanh_pho", {
        id_thanh_pho: this.state.idCity,
      })
      .then((response) => {
        this.state.lstDistrict = response.data;
        //console.log(this.state.lstDistrict);
        this.setState(this);
      });
  };
  getListWards = () => {
    axios
      .post("http://localhost:8000/phuong/by_quan", {
        id_quan: this.state.idDis,
      })
      .then((response) => {
        this.state.lstWards = response.data;
        //console.log(this.state.lstWards);
        this.setState(this);
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
  getValue = (e) => {
    this.state.city = e.target.value;
    this.setState(this);
    console.log(this.state.city);
  };
  createInfo = () => {
    axios
      .post("http://localhost:8000/ttkh/create", {
        ten_kh: this.fullName.current.value,
        sdt: this.phoneNumber.current.value,
        dia_chi: this.streetName.current.value,
        email: this.email.current.value,
        diem_tich_luy: "0",
        gioi_tinh: 1,
        id_phuong: this.state.idWard,
      })
      .then((res) => {
        console.log(res.data);
        this.setState({ customerInfo: res.data });
        (async () => await localStorage.setItem("customer", JSON.stringify(res.data)))();
        window.location.reload();
      });
  };
  render() {
    return (
      <div className="container-checkout">
        <div className="wrapper-checkout">
          <h1 className="Title-checkout">Checkout</h1>
          <div className="bottom-checkout">
            <div className="Info-checkout">
              <div className="cusInfo">
                <h2>Contact info</h2>
                <input
                  className="Input-type"
                  placeholder="Your full name"
                  ref={this.fullName}
                  type="text"
                  autoFocus
                ></input>
                <input
                  className="Input-type"
                  type="number"
                  placeholder="Phone number"
                  ref={this.phoneNumber}
                ></input>
                <input
                  className="Input-type"
                  placeholder="Email"
                  type="email"
                  ref={this.email}
                ></input>
              </div>
              <div className="Shipping">
                <h2>Shipping Address</h2>
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
              </div>
              {/* <div className="Payment">
                <h1 className="Title-Info">Select Payment Method</h1>
                <div className="radio">
                  <input type="radio" />{" "}
                  <label className="opRadio">Paypal</label>
                </div>
                <div className="radio">
                  <input type="radio" checked />{" "}
                  <label className="opRadio">Payment on delivery</label>
                </div>
              </div> */}
            </div>
            <div className="right">
              
              <div className="Summary-checkout" style={{ border: "0" }}>
                <div className="summary-container-checkout">
                  <h2 className="SummaryTitle-checkout">Order Details</h2>
                  <div
                    className="SummaryItem-checkout"
                    style={{ display: "block" }}
                  >
                    {this.state.carts.map((item) => (
                      <div className="cart-item">
                        <div style={{ paddingBottom: "20px" }}>
                          <p className="body-title">{item.ten_sp}</p>
                          <p className="body-title">Amount: {item.count}</p>
                        </div>
                        <b style={{marginLeft: "44px", fontSize: "35px"}}>
                          ${item.gia_ban_hien_tai}
                        </b>
                      </div>
                    ))}
                  </div>
                  <div className="summary-price">
                    <div className="SummaryItem-checkout">
                      <span className="SummaryItemText-checkout">Subtotal</span>
                      <span className="SummaryItemPrice-checkout">5 items</span>
                    </div>
                    <div className="SummaryItem-checkout">
                      <span className="SummaryItemText-checkout">
                        Shipping Fee
                      </span>
                      <span className="SummaryItemPrice-checkout">$0</span>
                    </div>
                    <div className="SummaryItem-checkout">
                      <span className="SummaryItemText-checkout">
                        Discount Voucher
                      </span>
                      <span className="SummaryItemPrice-checkout">0</span>
                    </div>
                    <div className="SummaryItem-total-checkout">
                      <b className="SummaryItemText-checkout">Total</b>
                      <b className="SummaryItemPrice-checkout">
                        {window.localStorage.getItem("total")}
                      </b>
                    </div>
                  </div>
                  <Link to="/checkout">
                    <button
                      className="Button-checkout-checkout"
                      onClick={this.createInfo}
                    >
                      CHECKOUT NOW
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
