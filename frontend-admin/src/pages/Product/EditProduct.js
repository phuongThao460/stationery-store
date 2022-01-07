/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BiPlusMedical } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { ModalColor } from "../../components/Modal";
import CurrencyInput from "../../validate/CurrencyInput";

function EditProduct() {
  let navigate = useNavigate();
  const idItem = window.location.pathname.substring(15);
  let [responseData, setResponseData] = React.useState(null);
  let [type, setType] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [supplier, setSupplier] = useState("");
  const [material, setMaterial] = useState("");
  const [color, setColor] = useState([]);
  const [importPrice, setImportPrice] = useState(0);
  const [exportPrice, setExportPrice] = useState(0);
  const [basicPrice, setBasicPrice] = useState(0);

  const openModal = () => {
    this.setState({ showModal: true });
  };
  const hideModal = () => {
    this.setState({ showModal: false });
  };
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const amountHandler = (e) => {
    setAmount(e.target.value);
  };
  const dateHandler = (e) => {
    setDate(e.target.value);
  };
  const importHandler = (e) => {
    setImportPrice(e.target.value);
  };
  const exportHandler = (e) => {
    setExportPrice(e.target.value);
  };
  const basicHandler = (e) => {
    setBasicPrice(e.target.value);
  };
  const getData = async () => {
    const data = await axios.post(
      "https://stationery-store-tmdt.herokuapp.com/san_pham/",
      {
        _id: idItem,
      }
    );
    setResponseData(data.data);
    setName(data.data.ten_sp);
    setAmount(data.data.so_luong);
    setDate(data.data.ngay_nhap);
    setExportPrice(data.data.gia_ban_hien_tai);
    setImportPrice(data.data.don_gia_nhap);
    setBasicPrice(data.data.gia_ban_goc);
    setType(data.data.id_loai_sp._id);
    setColor(data.data.mau_sac);
    setSupplier(data.data.id_nha_cc._id);
    setMaterial(data.data.id_chat_lieu._id);
  };
  const updateData = () => {
    axios
      .post(
        "https://stationery-store-tmdt.herokuapp.com/san_pham/update_san_pham",
        {
          _id: responseData._id,
          ten_sp: name,
          so_luong: amount,
          ngay_nhap: date,
          don_gia_nhap: importPrice,
          gia_ban_goc: basicPrice,
          gia_ban_hien_tai: exportPrice,
        }
      )
      .then((res) => {
        alert("Successfuly Update");
        navigate("/dashboard");
      });
  };

  useEffect(() => {
    getData();
    let formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(exportPrice);
    console.log(formatted);
  }, []);
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
              placeholder="Enter product's name "
              value={name}
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
                value={amount}
                min="1"
                max="200"
                onChange={amountHandler}
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
                value={date.substr(0, 10)}
                onChange={dateHandler}
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
                value={importPrice}
                onchangeEvent={importHandler}
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
                value={exportPrice}
                onChange={exportHandler}
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
                value={basicPrice}
                onChange={basicHandler}
              />
              {/* <CurrencyInput
                className="form-control"
                placeholder="$00.00"
                type="text"
                value={basicPrice}
                onchangeEvent={basicHandler}
              /> */}
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
              <span
                key={index}
                className="badge"
                style={{ backgroundColor: item }}
              >
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
