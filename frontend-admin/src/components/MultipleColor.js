/* eslint-disable react/no-direct-mutation-state */
import React, {createRef} from "react";
import axios from 'axios'
import Select from "react-select";
import { colourStyles } from "./colourStyles";

export default class MultipleColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lstColor: [],
    };
    this.nameColor = createRef();
    this.getColor();
  }
  getColor = () => {
    axios.get("http://localhost:8000/mau_sac/").then(res => {
      res.data.forEach(element => this.state.lstColor.push({
        label: element.ten_mau,
        value: element._id,
        color: element.ten_mau
      }))
      this.setState(this);
      console.log(this.state.lstColor)
    }
    )};
  insertColor = () => {
    axios
      .post("http://localhost:8000/mau_sac/create_mau_sac", {
        ten_mau: this.nameColor.current.value,
      })
      .then((response) => {
        this.state.idColor = response.data;
        this.setState(this);
      });
  };
  render() {
    return (
      <>
        <Select
          closeMenuOnSelect={false}
          isMulti
          options={this.state.lstColor}
          styles={colourStyles}
        />
      </>
    );
  }
}
