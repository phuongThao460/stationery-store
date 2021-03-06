/* eslint-disable react/no-direct-mutation-state */
import React, { createRef } from "react";
import { ModalColor } from "../../components/Modal";
import { BiPlusMedical } from "react-icons/bi";
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
      idClassi: 0,
      lstSupplier: [],
      lstType: [],
      lstMate: [],
      lstColor: [],
      lstClassify: [],
      getLstColor: [],
      colorArray: [],
      selectedOption: 0,
    };
    this.submitColorHandle = this.submitColorHandle.bind(this);
    this.getListSupplier();
    this.getListType();
    this.getListMaterial();
    this.getListClassify();
    this.nameProduct = createRef();
    this.amount = createRef();
    this.date = createRef();
    this.descript = createRef();
    this.importPrice = createRef();
    this.exportPrice = createRef();
    this.basicPrice = createRef();
    this.images = createRef();
  }
  changeId = (e) => {
    this.setState({ idType: e.value });
  };
  changeIdSupp = (e) => {
    this.setState({ idSupp: e.value });
  };
  changeIdMate = (e) => {
    this.setState({ idMate: e.value });
  };
  changeIdClassi = (e) => {
    this.setState({ idClassi: e.value });
  };
  getListSupplier = () => {
    axios
      .get("https://stationery-store-tmdt.herokuapp.com/nha_cc/")
      .then((res) => {
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
    axios
      .get("https://stationery-store-tmdt.herokuapp.com/loai_sp/")
      .then((res) => {
        res.data.forEach((element) => {
          this.state.lstType.push({
            value: element._id,
            label: element.ten_loai_sp,
          });
        });
        this.setState(this);
      });
  };
  getListClassify = () => {
    axios
      .get("https://stationery-store-tmdt.herokuapp.com/phan_loai/")
      .then((res) => {
        res.data.forEach((element) => {
          this.state.lstClassify.push({
            value: element._id,
            label: element.ten_phan_loai,
          });
        });
        this.setState(this);
      });
  };
  getListMaterial = () => {
    axios
      .get("https://stationery-store-tmdt.herokuapp.com/chat_lieu/")
      .then((res) => {
        res.data.forEach((element) => {
          this.state.lstMate.push({
            value: element._id,
            label: element.ten_chat_lieu,
          });
        });
        this.setState(this);
      });
  };
  createProduct = () => {
    axios
      .post(
        "https://stationery-store-tmdt.herokuapp.com/san_pham/create_san_pham",
        {
          ten_sp: this.nameProduct.current.value,
          so_luong: this.amount.current.value,
          ngay_nhap: this.date.current.value,
          don_gia_nhap: this.importPrice.current.value,
          gia_ban_goc: this.basicPrice.current.value,
          gia_ban_hien_tai: this.exportPrice.current.value,
          id_loai_sp: window.sessionStorage.getItem("loai_sp_id"),
          id_nha_cc: window.sessionStorage.getItem("nha_cc_id"),
          mau_sac: this.state.colorArray,
          id_chat_lieu: window.sessionStorage.getItem("chat_lieu_id"),
          mo_ta: this.descript.current.value,
          ti_le_danh_gia: "0",
          hinh_anh: this.images.current.value,
          id_phan_loai: window.sessionStorage.getItem("phan_loai_id"),
        }
      )
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
  submitColorHandle(value) {
    const temp = this.state.colorArray;
    temp.push(value);
    this.setState({
      showModal: false,
      colorArray: temp,
    });
  }

  render() {
    return (
      <>
        <div className="header">
          <h1>Add New Product</h1>
        </div>
        <div className="form-horizontal">
          {/* Name */}
          <div className="form-group">
            <label className="control-label col-sm-2">Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="Enter product???s name "
                ref={this.nameProduct}
                autoFocus
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
                  min="1"
                  max="200"
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
            <div className="form-group" style={{ width: "200px" }}>
              <label className="control-label col-sm-2">Price</label>
              <div className="col-sm-10" style={{ display: "flex" }}>
                <div className="input-group-addon css-number-2">
                  <span style={{ fontSize: "18px" }}>$</span>
                </div>
                <input
                  style={{ marginLeft: "-1px" }}
                  type="number"
                  className="form-control price"
                  placeholder="Import Price"
                  ref={this.importPrice}
                  min="1.000"
                  max="3.000.000"
                />
              </div>
            </div>
            <div className="form-group" style={{ width: "200px" }}>
              <label className="control-label col-sm-2"></label>
              <div className="col-sm-10" style={{ display: "flex" }}>
                <div className="input-group-addon css-number-2">
                  <span style={{ fontSize: "18px" }}>$</span>
                </div>
                <input
                  style={{ marginLeft: "-1px" }}
                  type="number"
                  class="form-control price"
                  placeholder="Export Price"
                  ref={this.exportPrice}
                  min="1000"
                  step="1.000"
                  max="3.000.000"
                />
              </div>
            </div>
            <div className="form-group" style={{ width: "200px" }}>
              <label className="control-label col-sm-2"></label>
              <div className="col-sm-10" style={{ display: "flex" }}>
                <div className="input-group-addon css-number-2">
                  <span style={{ fontSize: "18px" }}>$</span>
                </div>
                <input
                  style={{ marginLeft: "-1px" }}
                  type="number"
                  class="form-control price"
                  placeholder="Basic Price"
                  ref={this.basicPrice}
                  min="1000"
                  step="1.000"
                  max="3.000.000"
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
                {window.sessionStorage.setItem("nha_cc_id", this.state.idSupp)}
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
                {window.sessionStorage.setItem("loai_sp_id", this.state.idType)}
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
                <div className="test-demo">
                  {this.state.colorArray.map((item) => {
                    return (
                      <span className="badge" style={{ backgroundColor: item }}>
                        {item}
                      </span>
                    );
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
              setColor={this.submitColorHandle}
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
                {window.sessionStorage.setItem("chat_lieu_id", this.state.idMate)}
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
          </div>
          {/* Classify */}
          <div style={{ display: "flex" }}>
            <div className="form-group" style={{ width: "367px" }}>
              <label className="control-label col-sm-10">
                Classification of Item
              </label>
              <div className="col-sm-10">
                <Select
                  options={this.state.lstClassify}
                  onChange={this.changeIdClassi}
                  value={this.state.lstClassify.find(
                    (id) => id.value === this.state.idClassi
                  )}
                />
                {window.sessionStorage.setItem(
                  "phan_loai_id",
                  this.state.idClassi
                )}
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
          </div>
          {/* Description */}
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
          {/* Image */}
          <div className="form-group">
            <label className="control-label col-sm-2">Image</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="Enter image's link"
                ref={this.images}
                autoFocus
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
