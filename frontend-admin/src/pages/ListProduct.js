/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import "../style/Dashboard.css";

function ListProduct() {
  const [products, setProducts] = useState([]);
  const [modalInfo, setModalInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getProductData = async () => {
    try {
      const data = await axios.get("http://localhost:8000/san_pham/");
      setProducts(data.data);
      console.log(data.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);
  const columns = [
    {
      dataField: "_id",
      text: "ID",
      tdStyle: (colum, colIndex) => {
        return {
          width: "40%",
          textAlign: "center",
          whiteSpace: 'normal', wordWrap: 'break-word'
        };
      },
    },
    { dataField: "ten_sp", text: "Name" },
    { dataField: "ngay_nhap", text: "Import Date" },
    { dataField: "id_loai_sp.ten_loai_sp", text: "Type" },
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
          <Modal.Title>{modalInfo.ten_sp}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Name of Lang</h1>
          <ul>
            <li>Name: {modalInfo.ten_sp}</li>
            <li>Text: {modalInfo.id_loai_sp.ten_loai_sp}</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  return (
    <div>
      <BootstrapTable
        keyField="key"
        data={products}
        columns={columns}
        rowEvents={rowEvents}
        bordered={ false }
      />

      {show ? <ModalContent /> : null}
    </div>
  );
}

export default ListProduct;
