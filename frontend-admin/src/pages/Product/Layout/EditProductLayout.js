import React from "react";
import { ModalColor } from "../../../components/Modal";
import { BiPlusMedical } from "react-icons/bi";
import "./styles.css";
function EditProductLayout(props) {
  const openModal = () => {
    this.setState({ showModal: true });
  };

  return (
    <>
      <div className="header">
        <h1>Edit Product</h1>
      </div>
      <div className="form-horizontal">
        {/* Name */}
        <div className="form-group">
          <label className="control-label col-sm-2">Name</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="Enter product's name "
              value={props.name}
              onChange={props.nameHandler}
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
                value={props.amount}
                min="1"
                max="200"
                onChange={props.amountHandler}
              />
            </div>
          </div>
          <div className="form-group" style={{ width: "300px" }}>
            <label className="control-label col-sm-2" style={{ width: "auto" }}>
              Import Date
            </label>
            <div className="col-sm-10">
              <input
                type="date"
                className="form-control"
                value={props.date.substr(0, 10)}
                onChange={props.dateHandler}
              />
            </div>
          </div>
        </div>
        {/* Price */}
        <div style={{ display: "flex" }}>
          <div className="form-group" style={{ width: "200px" }}>
            <label className="control-label col-sm-10">Import Price</label>
            <div className="col-sm-10" style={{ display: "flex" }}>
              <div className="input-group-addon css-number-2">
                <span style={{ fontSize: "18px" }}>$</span>
              </div>
              <input
                style={{ marginLeft: "-1px" }}
                type="number"
                className="form-control price"
                placeholder="Import Price"
                value={props.importPrice}
                onChange={props.importHandler}
              />
            </div>
          </div>
          <div className="form-group" style={{ width: "200px" }}>
            <label className="control-label col-sm-10">Export Price</label>
            <div className="col-sm-10" style={{ display: "flex" }}>
              <div className="input-group-addon css-number-2">
                <span style={{ fontSize: "18px" }}>$</span>
              </div>
              <input
                style={{ marginLeft: "-1px" }}
                type="number"
                class="form-control price"
                placeholder="Export Price"
                value={props.exportPrice}
                onChange={props.exportHandler}
              />
            </div>
          </div>
          <div className="form-group" style={{ width: "200px" }}>
            <label className="control-label col-sm-10">Basic Price</label>
            <div className="col-sm-10" style={{ display: "flex" }}>
              <div className="input-group-addon css-number-2">
                <span style={{ fontSize: "18px" }}>$</span>
              </div>
              <input
                style={{ marginLeft: "-1px" }}
                type="number"
                class="form-control price"
                placeholder="Export Price"
                value={props.basicPrice}
                onChange={props.basicHandler}
              />
            </div>
          </div>
        </div>
        {/* Supplier */}
        <div style={{ display: "flex" }}>
          <div className="form-group" style={{ width: "367px" }}>
            <label className="control-label col-sm-2">Supplier</label>
            <div className="col-sm-10">
              <select className="select-supp" onChange={props.changeIdSupp} value={props.idSupp}>
                <option value="0" className="select-option">
                  Select...
                </option>
                {props.supplier.map((item, index) => (
                  <option
                    key={index}
                    value={item._id}
                    className="select-option"
                  >
                    {item.ten_nha_cc}
                  </option>
                ))}
              </select>
              {window.localStorage.setItem("nha_cc_id", props.idSupp)}
            </div>
          </div>
        </div>
        {/* Type */}
        <div style={{ display: "flex" }}>
          <div className="form-group" style={{ width: "367px" }}>
            <label className="control-label col-sm-2">Type</label>
            <div className="col-sm-10">
              <select
                className="select-supp"
                onChange={props.changeId}
                value={props.idType}
              >
                <option value="0" className="select-option">
                  Select...
                </option>
                {props.type.map((item, index) => (
                  <option
                    key={index}
                    value={item._id}
                    className="select-option"
                  >
                    {item.ten_loai_sp}
                  </option>
                ))}
              </select>
              {window.localStorage.setItem("loai_sp_id", props.idType)}
            </div>
          </div>
        </div>
        {/* Color */}
        <div style={{ display: "flex" }}>
          <div className="form-group" style={{ width: "367px" }}>
            <label className="control-label col-sm-2">Color</label>
            <div className="col-sm-10">
              <div className="test-demo">
                {props.color.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className="badge"
                      style={{ backgroundColor: item }}
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <button
            onClick={openModal}
            className="btn-add"
            style={{ height: "fit-content", marginTop: "25px" }}
          >
            <BiPlusMedical />
            <span style={{ marginLeft: "8px" }}>Add New Color</span>
          </button>
          <ModalColor
            handleClose={props.hideModal}
            children={"Add new color"}
          ></ModalColor>
        </div>
        {/* Material */}
        <div style={{ display: "flex" }}>
          <div className="form-group" style={{ width: "367px" }}>
            <label className="control-label col-sm-2">Supplier</label>
            <div className="col-sm-10">
              <select className="select-supp" onChange={props.changeIdMate} value={props.idMate}>
                <option value="0" className="select-option">
                  Select...
                </option>
                {props.material.map((item, index) => (
                  <option
                    key={index}
                    value={item._id}
                    className="select-option"
                  >
                    {item.ten_chat_lieu}
                  </option>
                ))}
              </select>
              {window.localStorage.setItem("chat_lieu_id", props.idMate)}
            </div>
          </div>
        </div>
        {/* Classify */}
        <div style={{ display: "flex" }}>
          <div className="form-group" style={{ width: "367px" }}>
            <label className="control-label col-sm-2">Classification of Item</label>
            <div className="col-sm-10">
              <select
                className="select-supp"
                onChange={props.changeIdClassi}
                value={props.idClassi}
              >
                <option value="0" className="select-option">
                  Select...
                </option>
                {props.classify.map((item, index) => (
                  <option
                    key={index}
                    value={item._id}
                    className="select-option"
                  >
                    {item.ten_phan_loai}
                  </option>
                ))}
              </select>
              {window.localStorage.setItem("phan_loai_id", props.idClassi)}
            </div>
          </div>
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
              value={props.desc}
              onChange={props.descHandler}
            />
          </div>
        </div>
        {/* Button */}
        <div className="form-group">
          <button className="btn-add" onClick={props.updateData}>
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default EditProductLayout;
