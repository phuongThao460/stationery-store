/* eslint-disable react/no-direct-mutation-state */
import React, { createRef } from "react";
import {
  ModalColor,
  ModalMaterial,
  ModalSupplier,
  ModalType,
} from "../components/Modal";
import { BiPlusMedical } from "react-icons/bi";
import "../style/AddProduct.css";
import { colourStyles } from "../components/colourStyles";
import Select from "react-select";
import axios from "axios";
class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      idType: 0,
      idSupp: 0,
      idMate: 0,
      lstSupplier: [],
      lstType: [],
      lstMate: [],
      lstColor: [],
      getLstColor: [],
      colorArray: [],
      // selectedOptions: [],
      selectedOption: 0,
    };

    this.getListSupplier();
    this.getListType();
    this.getListMaterial();
    this.getColor();
    this.nameProduct = createRef();
    this.amount = createRef();
    this.date = createRef();
    this.descript = createRef();
    this.importPrice = createRef();
    this.exportPrice = createRef();
    this.rate = createRef();
  }
  // handleChange = (selectedOptions) => {
  //   this.setState({ selectedOptions });
  // };
  changeColor = (e) => {
    this.setState({ selectedOption: e.value });
  };
  changeId = (e) => {
    this.setState({ idType: e.value });
  };
  changeIdSupp = (e) => {
    this.setState({ idSupp: e.value });
  };
  changeIdMate = (e) => {
    this.setState({ idMate: e.value });
  };
  getListSupplier = () => {
    axios.get("http://localhost:8000/nha_cc/").then((res) => {
      res.data.forEach((element) => {
        this.state.lstSupplier.push({
          value: element._id,
          label: element.ten_nha_cc,
        });
      });
      this.setState(this);
    });
  };
  getListType = () => {
    axios.get("http://localhost:8000/loai_sp/").then((res) => {
      res.data.forEach((element) => {
        this.state.lstType.push({
          value: element._id,
          label: element.ten_loai_sp,
        });
      });
      this.setState(this);
      console.log(this.state.lstType);
    });
  };
  getListMaterial = () => {
    axios.get("http://localhost:8000/chat_lieu/").then((res) => {
      res.data.forEach((element) => {
        this.state.lstMate.push({
          value: element._id,
          label: element.ten_chat_lieu,
        });
      });
      this.setState(this);
    });
  };
  getColor = () => {
    axios.get("http://localhost:8000/mau_sac/").then((res) => {
      res.data.forEach((element) =>
        this.state.lstColor.push({
          label: element.ten_mau,
          value: element._id,
          color: element.ten_mau,
        })
      );
      this.setState(this);
    });
  };

  createProduct = () => {
    axios
      .post("http://localhost:8000/san_pham/create_san_pham", {
        ten_sp: this.nameProduct.current.value,
        so_luong: this.amount.current.value,
        ngay_nhap: this.date.current.value,
        mo_ta: this.descript.current.value,
        don_gia_nhap: this.importPrice.current.value,
        don_gia_xuat: this.exportPrice.current.value,
        id_loai_sp: window.localStorage.getItem("loai_sp_id"),
        id_nha_cc: window.localStorage.getItem("nha_cc_id"),
        id_mau_sac: window.localStorage.getItem("mau_sac_id"),
        id_chat_lieu: window.localStorage.getItem("chat_lieu_id"),
        ti_le_danh_gia: "0",
      })
      .then((res) => {
        console.log(res.data);
        //this.props.history.push("/");
        alert("Add data successful");
      });
  };
  openModal = () => {
    this.setState({ showModal: true });
  };
  hideModal = () => {
    this.setState({ showModal: false });
  };

  submitColorHandle = (value) => {
    const temp = this.state.colorArray
    temp.push(value)
    this.setState({
      showModal: false,
      colorArray: temp,
    })
  };

  render() {
    return (
      <>
        <div className="header">
          <h1>Add New Product</h1>
        </div>
        <div className="form-horizontal">
          <div className="form-group">
            <label className="control-label col-sm-2">Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="Enter product’s name "
                ref={this.nameProduct}
              />
            </div>
          </div>
          {/* Amount and Date */}
          <div style={{ display: "flex" }}>
            <div className="form-group" style={{ width: "300px" }}>
              <label className="control-label col-sm-2">Amount</label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter the munber of products "
                  ref={this.amount}
                />
              </div>
            </div>
            <div className="form-group" style={{ width: "300px" }}>
              <label
                className="control-label col-sm-2"
                style={{ width: "auto" }}
              >
                Import Date
              </label>
              <div class="col-sm-10">
                <input type="date" className="form-control" ref={this.date} />
              </div>
            </div>
          </div>
          {/* Price */}
          <div style={{ display: "flex" }}>
            <div className="form-group" style={{ width: "300px" }}>
              <label className="control-label col-sm-2">Price</label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Import Price"
                  ref={this.importPrice}
                />
              </div>
            </div>
            <div className="form-group" style={{ width: "300px" }}>
              <label className="control-label col-sm-2"></label>
              <div className="col-sm-10">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Export Price"
                  ref={this.exportPrice}
                />
              </div>
            </div>
          </div>
          {/* Supplier */}
          <div style={{ display: "flex" }}>
            <div className="form-group" style={{ width: "367px" }}>
              <label className="control-label col-sm-2">Supplier</label>
              <div className="col-sm-10">
                <Select
                  options={this.state.lstSupplier}
                  ref={this.idSupplier}
                  onChange={this.changeIdSupp}
                  value={this.state.lstSupplier.find(
                    (id) => id.value === this.state.idSupp
                  )}
                />
                {window.localStorage.setItem("nha_cc_id", this.state.idSupp)}
              </div>
            </div>
            <button
              onClick={this.openModal}
              className="btn-add"
              style={{ height: "fit-content", marginTop: "25px" }}
            >
              <BiPlusMedical />
              <span style={{ marginLeft: "8px" }}>Add New Supplier</span>
            </button>
            {/* <ModalSupplier
              show={this.state.showModal}
              handleClose={this.hideModal}
              children={"Add new color"}
            ></ModalSupplier> */}
          </div>
          {/* Type */}
          <div style={{ display: "flex" }}>
            <div className="form-group" style={{ width: "367px" }}>
              <label className="control-label col-sm-2">Type</label>
              <div className="col-sm-10">
                <Select
                  options={this.state.lstType}
                  onChange={this.changeId}
                  value={this.state.lstType.find(
                    (id) => id.value === this.state.idType
                  )}
                />
                {window.localStorage.setItem("loai_sp_id", this.state.idType)}
              </div>
            </div>
            <button
              onClick={this.openModal}
              className="btn-add"
              style={{ height: "fit-content", marginTop: "25px" }}
            >
              <BiPlusMedical />
              <span style={{ marginLeft: "8px" }}>Add New Type</span>
            </button>
            {/* <ModalType
              show={this.state.showModal}
              handleClose={this.hideModal}
              children={"Add new color"}
            ></ModalType> */}
          </div>
          {/* Color */}
          <div style={{ display: "flex" }}>
            <div className="form-group" style={{ width: "367px" }}>
              <label className="control-label col-sm-2">Color</label>
              <div className="col-sm-10">
                {/* <Select
                  closeMenuOnSelect={false}
                  options={this.state.lstColor}
                  styles={colourStyles}
                  onChange={this.changeColor}
                  value={this.state.lstColor.find(
                    (obj) => obj.value === this.state.selectedOption
                  )}
                /> */}

                {/* {this.state.getLstColor.reduce((unique, item) => (unique.includes(item) ? unique : [...unique, item]),[])} */}
                {/* {window.localStorage.setItem(
                  "mau_sac_id",
                  this.state.selectedOption
                )} */}
                <div className="test-demo">
                  {this.state.colorArray.map(item => {
                    return (<span className="badge" style={{ backgroundColor: item }}>{item}</span>)
                  })}
                </div>
              </div>
            </div>
            <button
              onClick={this.openModal}
              className="btn-add"
              style={{ height: "fit-content", marginTop: "25px" }}
            >
              <BiPlusMedical />
              <span style={{ marginLeft: "8px" }}>Add New Color</span>
            </button>
            <ModalColor
              show={this.state.showModal}
              handleClose={this.hideModal}
              children={"Add new color"}
              setColor = {this.submitColorHandle}
            ></ModalColor>
          </div>
          {/* Material */}
          <div style={{ display: "flex" }}>
            <div className="form-group" style={{ width: "367px" }}>
              <label className="control-label col-sm-2">Material</label>
              <div className="col-sm-10">
                <Select
                  options={this.state.lstMate}
                  onChange={this.changeIdMate}
                  value={this.state.lstMate.find(
                    (id) => id.value === this.state.idMate
                  )}
                />
                {window.localStorage.setItem("chat_lieu_id", this.state.idMate)}
              </div>
            </div>
            <button
              onClick={this.openModal}
              className="btn-add"
              style={{ height: "fit-content", marginTop: "25px" }}
            >
              <BiPlusMedical />
              <span style={{ marginLeft: "8px" }}>Add New Material</span>
            </button>
            {/* <ModalMaterial
              show={this.state.showModal}
              handleClose={this.hideModal}
              children={"Add new color"}
            ></ModalMaterial> */}
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2">Description</label>
            <div className="col-sm-10">
              <textarea
                style={{ height: "186px", resize: "none" }}
                type="text"
                className="form-control"
                placeholder="Enter a Description"
                ref={this.descript}
              />
            </div>
          </div>
          <div className="form-group">
            <button className="btn-add" onClick={this.createProduct}>
              Save
            </button>
            <button className="btn-edit">Edit</button>
          </div>
        </div>
      </>
    );
  }
}

export default Product;
