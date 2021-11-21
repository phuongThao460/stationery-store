/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from "react";
import axios from "axios";

export default class Material extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idMaterial: 0,
      lstMaterial: [],
    };
    this.getMaterial();
  }
  getMaterial = () => {
    axios.get("http://localhost:8000/chat_lieu/", {}).then((result) => {
      console.log(result.data);
      this.state.lstMaterial = result.data;
      this.setState(this);
    });
  };
  changeMaterial = (event) => {
    this.state.idMaterial = event.target.value;
    this.setState(this);
  };
  render() {
    return (
      <div>
        <select
          onChange={this.changeMaterial}
          className="select-control"
          value={this.state.idMaterial}
        >
          <option value="0" className="select-option">
            Select Type
          </option>
          {this.state.lstMaterial.map((item, index) => (
            <option value={item.ID_ChatLieu} ref={this.idMaterial}>
              {item.Ten_Chat_Lieu}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
