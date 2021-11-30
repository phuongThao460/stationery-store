/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BiPlusMedical } from "react-icons/bi";
import "./styles.css";
import Select from "react-select";
import { ModalColor } from "../../components/Modal";

function EditProduct() {
  const idItem = window.location.pathname.substring(15);
  let [responseData, setResponseData] = React.useState(null);
  let [type, setType] = useState("");
  const [name, setName] = useState("")
  const [supplier, setSupplier] = useState("");
  const [material, setMaterial] = useState("");
  const [color, setColor] = useState([]);

  const openModal = () => {
    this.setState({ showModal: true });
  };
  const hideModal = () => {
    this.setState({ showModal: false });
  };
  const nameHandler = (e) => {
    setResponseData({ten_sp: e.target.value})
  }
  const getData = async () => {
    const data = await axios.post("http://localhost:8000/san_pham/", {
      _id: idItem,
    });
    setResponseData(data.data);
    setType(data.data.id_loai_sp._id);
    setColor(data.data.mau_sac);
    setSupplier(data.data.id_nha_cc._id);
    setMaterial(data.data.id_chat_lieu._id);

  };
  const updateData = () => {
    axios.post("http://localhost:8000/san_pham/update_san_pham",{
      _id: responseData._id,
      ten_sp: responseData.ten_sp
    }).then((res) => {console.log(res.data)})
  }

  useEffect(() => {
    getData();
  },[]);
  if (!responseData) return null;


  return (
    <>
    <div className="header">
          <h1>Edit Product</h1>
        </div>
        <div className="form-horizontal">
          <div className="form-group">
            <label className="control-label col-sm-2">Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="Enter product’s name "
                value={responseData.ten_sp}
                onChange={nameHandler}
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
                  value={responseData.so_luong}
                  min="1"
                  max="200"
                  onChange={nameHandler}
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
              <div className="col-sm-10">
                <input type="date" className="form-control" />
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
                  value={responseData.don_gia_nhap}
                  min="1.000"
                  max="3.000.000"
                  onChange={nameHandler}
                />
              </div>
            </div>
            <div className="form-group" style={{ width: "300px" }}>
              <label className="control-label col-sm-2"></label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Export Price"
                  value={responseData.don_gia_xuat}
                  min="1000"
                  step="1.000"
                  max="3.000.000"
                  onChange={nameHandler}
                />
              </div>
            </div>
          </div>
          
          {/* Color */}
          <div style={{ display: "flex" }}>
            <div className="form-group" style={{ width: "367px" }}>
              <label className="control-label col-sm-2">Color</label>
              <div className="col-sm-10">
                <div className="test-demo">
                  {color.map((item, index) => {
                    return (
                      <span key={index} className="badge" style={{ backgroundColor: item }}>
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
              handleClose={hideModal}
              children={"Add new color"}
              // setColor={this.submitColorHandle}
            ></ModalColor>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2">Description</label>
            <div className="col-sm-10">
              <textarea
                style={{ height: "186px", resize: "none" }}
                type="text"
                className="form-control"
                placeholder="Enter a Description"
                value={responseData.mo_ta}
                onChange={nameHandler}
              />
            </div>
          </div>
          <div className="form-group">
            <button className="btn-add" onClick={updateData}>
              Save
            </button>
          </div>
        </div>
      <div>
        <p>id: {responseData._id}</p>
        <p>name: {responseData.ten_sp}</p>
        <p>amount: {responseData.so_luong}</p>
        <p>date: {new Date(responseData.ngay_nhap).toLocaleDateString()}</p>
        <p>description: {responseData.mo_ta}</p>
        <p>im price: {responseData.don_gia_nhap}</p>
        <p>ex-price: {responseData.don_gia_xuat}</p>
        <p>type: {type} </p>
        <p>
          color:
          {color.map((item, index) => {
            return (
              <span key={index} className="badge" style={{ backgroundColor: item }}>
                {item}
              </span>
            );
          })}
        </p>
        <p>supplier: {supplier}</p>
        <p>material: {material}</p>
        <p>rate: {responseData.ti_le_danh_gia}</p>
      </div>
    </>
  );
}

export default EditProduct;
