/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import "../style/Dashboard.css";
import { BsFillPencilFill } from "react-icons/bs";
import { BiPlusMedical } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [modalInfo, setModalInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getProductData = async () => {
    try {
      const data = await axios.get("http://localhost:8000/san_pham/");
      setProducts(data.data.reverse());
      //console.log(data.data.reverse());
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);
  function rankFormatter(col, row, rowIndex, formatExtraData) {
    return (
      <div
        style={{
          textAlign: "center",
          cursor: "pointer",
          lineHeight: "normal",
          display: "inline-flex",
          justifyContent: "space-around",
        }}
      >
        <Link to="/products/add-product">
          <BsFillPencilFill
            style={{ fontSize: 20, marginRight: "20px" }}
            color="disabled"
          />
        </Link>
        <AiFillDelete></AiFillDelete>
      </div>
    );
  }
  const columns = [
    {
      dataField: "_id",
      text: "ID",
      attrs: { width: 100, class: "EditRow" },
      headerAlign: "center",
      formatter: (col, row) => {
        return (
          <span
            style={{
              display: "block",
              width: 120,
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {col}
          </span>
        );
      },
    },
    {
      dataField: "ten_sp",
      text: "Name",
      attrs: { width: 250, class: "EditRow" },
      headerAlign: "center",
      formatter: (col, row) => {
        return (
          <span
            style={{
              display: "block",
              width: 234,
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            {col}
          </span>
        );
      },
    },
    {
      dataField: "ngay_nhap",
      text: "Import Date",
      headerAlign: "center",
      attrs: { width: 200, class: "EditRow", style: { textAlign: "center" } },
      formatter: (cell) => {
        let dateObj = cell;
        if (typeof cell !== "object") {
          dateObj = new Date(cell);
        }
        return `${("0" + dateObj.getUTCDate()).slice(-2)}/${(
          "0" +
          (dateObj.getUTCMonth() + 1)
        ).slice(-2)}/${dateObj.getUTCFullYear()}`;
      },
    },
    {
      dataField: "id_loai_sp.ten_loai_sp",
      text: "Type",
      attrs: { width: 200, class: "EditRow", style: { textAlign: "center" } },
      headerAlign: "center",
    },
    {
      dataField: "",
      text: "Action",
      isDummyField: true,
      csvExport: false,
      formatter: rankFormatter,
      headerAttrs: { width: 50 },
      attrs: { width: 100, class: "EditRow" },
    },
  ];
  const rowEvents = {
    onClick: (e, row) => {
      setModalInfo(row);
      toggleTrueFalse();
    },
  };

  const toggleTrueFalse = () => {
    setShowModal(handleShow);
  };

  const ModalContent = () => {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Product Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>
              <b>Name: </b>
              {modalInfo.ten_sp}
            </li>
            <li>
              <b>Amount: </b>
              {modalInfo.so_luong}
            </li>
            <li>
              <b>Import Date: </b>
              {new Date(modalInfo.ngay_nhap).toLocaleDateString()}
            </li>
            <li>
              <b>Description: </b>
              {modalInfo.mo_ta}
            </li>
            <li>
              <b>Import Price: </b>
              {modalInfo.don_gia_nhap}
            </li>
            <li>
              <b>Selling Price: </b>
              {modalInfo.don_gia_xuat}
            </li>
            <li>
              <b>Supplier: </b>
              {modalInfo.id_nha_cc.ten_nha_cc}
            </li>
            <li>
              <b>Color: </b>
              {modalInfo.mau_sac.map((item) => (
                <input type="color" value={item} className="primary-color"/>
              ))}
            </li>
            <li>
              <b>Material: </b>
              {modalInfo.id_chat_lieu.ten_chat_lieu}
            </li>
            <li>
              <b>Type: </b>
              {modalInfo.id_loai_sp.ten_loai_sp}
            </li>
            <li>
              <b>Classify: </b>
              {modalInfo.id_phan_loai.ten_phan_loai}
            </li>
            <li>
              <b>Rating of rate: </b>
              {modalInfo.ti_le_danh_gia}
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    );
  };
  return (
    <>
      <div className="hearder">
        <h1>Produts</h1>
        <div className="btn">
          <button className="btn-add">
            <Link
              to="/products/add-product"
              style={{
                textDecoration: "none",
                color: "white",
                wordBreak: "break-word",
                overflow: "hidden",
              }}
            >
              <BiPlusMedical />
              <span>Add Product</span>
            </Link>
          </button>
          <button className="btn-add">
            <BiPlusMedical />
            <span>Add List of Product</span>
          </button>
        </div>
      </div>
      <BootstrapTable
        bodyClasses="custosize-table"
        keyField="key"
        data={products}
        columns={columns}
        rowEvents={rowEvents}
        bordered={false}
        hover
      />
      {show ? <ModalContent /> : null}
    </>
  );
}

export default Dashboard;
