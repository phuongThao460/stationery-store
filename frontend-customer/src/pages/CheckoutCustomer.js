/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from "react";
import axios from "axios";
import Select from "react-select";

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
      <div>
        city{" "}
        <select value={this.state.idCity} onChange={this.changeCities}>
          <option value="0" className="select-option">
            Select City...
          </option>
          {this.state.lstCities.map((item) => (
            <option key={item._id} value={item._id} onChange={this.getValue}>
              {item.ten_thanh_pho}
            </option>
          ))}
        </select>
        district{" "}
        <select value={this.state.idDis} onChange={this.changeDistricts}>
          <option value="0" className="select-option">
            Select District...
          </option>
          {this.state.lstDistrict.map((item) => (
            <option key={item._id} value={item._id} >
              {item.quan_huyen}
            </option>
          ))}
        </select>
        ward{" "}
        <select value={this.state.idWard} onChange={this.changeWards}>
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
    );
  }
}
