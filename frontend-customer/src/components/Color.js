/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from "react";
import axios from "axios";

export default class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idColor: 0,
      lstColor: [],
    };
    this.getColor();
  }
  getColor = () => {
    axios.get("http://localhost:8000/mau_sac/", {}).then((result) => {
      console.log(result.data);
      this.state.lstColor = result.data;
      this.setState(this);
    });
  };
  render() {
    return (
      <div>
        {this.state.lstColor.map((item, index) => (<div key={index}>
            <div className="id-color">{item.ID_MauSac}</div>
            <div className="id-color">{item.Ten_Mau}</div>
          </div>))}
      </div>
    );
  }
}
