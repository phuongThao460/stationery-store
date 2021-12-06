/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from "react";
import axios from "axios";

import "../style/Checkout.css";

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
      lstCities: [],
      lstWards: [],
      lstDistrict: [],
    };
    this.getListCities();
  }
  componentDidMount() {}
  getListCities = () => {
    axios.get("http://localhost:8000/thanh_pho/").then((response) => {
      this.state.lstCities = response.data;
      //console.log(this.state.lstCities);
      this.setState(this);
    });
  };
  getListDistrict = () => {
    axios
      .post("http://localhost:8000/quan/by_thanh_pho", { id_thanh_pho: this.state.idCity })
      .then((response) => {
        this.state.lstDistrict = response.data;
        //console.log(this.state.lstDistrict);
        this.setState(this);
      });
  };
  getListWards = () => {
    axios
      .post("http://localhost:8000/phuong/by_quan", { id_quan: this.state.idDis })
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
    console.log(this.state.city)
  }
  render() {
    return (
  <div className="container-checkout">
            <div className="wrapper-checkout">
                <h1 className="Title-checkout">CHECKOUT</h1>
                <div className="bottom-checkout">
                    <div className="Info-checkout">
                        <div className="cusInfo">
                            <h1 className="Title-Info">Contact info</h1>
                            <input className="Input-type" placeholder="Your Full Name"></input>
                            <input className="Input-type" placeholder="Phone Number"></input>
                            <input className="Input-type" placeholder="Email"></input>
                        </div>
                        <div className="Shipping">
                            <h1 className="Title-Info">Shipping Address</h1>
                            <input className="Input-type" placeholder="Street Number and Name"></input>
                            <select className="city" value={this.state.idCity} onChange={this.changeCities}>
                                <option value="0" className="select-option">Select City...</option>
                                {this.state.lstCities.map((item) => (
                                <option key={item._id} value={item._id} onChange={this.getValue}>
                                {item.ten_thanh_pho}
                                </option>
                                ))}
                            </select >
                            <div className="Ward-District">
                                <select className="District" value={this.state.idDis} onChange={this.changeDistricts}>
                                  <option value="0" className="select-option">
                                  Select District...
                                  </option>
                                  {this.state.lstDistrict.map((item) => (
                                  <option key={item._id} value={item._id} >
                                  {item.quan_huyen}
                                  </option>
                                  ))}
                                </select>
                                <select className="Ward" value={this.state.idWard} onChange={this.changeWards}>
                                  <option value="0" className="select-option">
                                  Select Ward...
                                  </option>
                                  {this.state.lstWards.map((item) => (
                                  <option key={item._id} value={item._id}>
                                  {item.phuong_xa}
                                  </option>
                                  ))}
                                </select>
                            </div>
                        </div>
                        <div className="Payment">
                            <h1 className="Title-Info">Select Payment Method</h1>
                            <div className="radio">
                                <input type="radio" checked/> <label className="opRadio">Paypal</label>
                            </div>
                            <div className="radio">
                                <input type="radio"/> <label className="opRadio">Payment on delivery</label>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                    <div className="voucher">
                            <h1 className="Title-Info">Voucher</h1>
                            <select className="city" >
                                    <option value="10">MERRYCHRISTMAS</option>
                                    <option value="1">Quận 1</option>
                                    <option value="3">Quận 3</option>
                            </select>
                        </div>
                    <div className="Summary-checkout">
                        <div className="summary-container-checkout">
                            <h1 className="SummaryTitle-checkout">ORDER SUMMARY</h1>
                            <div className="SummaryItem-checkout">
                            <span className="SummaryItemText-checkout">Subtotal</span>
                            <span className="SummaryItemPrice-checkout">5 items</span>
                            </div>
                            <div className="SummaryItem-checkout">
                            <span className="SummaryItemText-checkout">Shipping Fee</span>
                            <span className="SummaryItemPrice-checkout">$5</span>
                            </div>
                            <div className="SummaryItem-checkout">
                            <span className="SummaryItemText-checkout">Discount Voucher</span>
                            <span className="SummaryItemPrice-checkout">$ -5</span>
                            </div> 
                            <div className="SummaryItem-total-checkout">
                            <span className="SummaryItemText-checkout">Total</span>
                            <span className="SummaryItemPrice-checkout">$95</span>
                            </div>
                            <button className="Button-checkout-checkout">CHECKOUT NOW</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>    
    );
  }
}
