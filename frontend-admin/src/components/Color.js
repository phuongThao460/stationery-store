/* eslint-disable react/no-direct-mutation-state */
import React, {createRef} from "react";
import chroma from "chroma-js";
import axios from 'axios'
import Select from "react-select";

const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color,
      color: "white",
    },
  }),
};

export default class MultipleColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idColor: "",
      color: "",
      lstColor: [],
      item: {},
    };
    this.nameColor = createRef();
    this.getColor();
  }
  getColor = () => {
    axios.get("http://localhost:8000/mau_sac/").then(res => {
      res.data.forEach(element => this.state.lstColor.push({
        label: element.ten_mau,
        value: element.ten_mau,
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
  changeMaterial = (event) => {
    this.state.idMaterial = event.target.value;
    this.setState(this);
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
