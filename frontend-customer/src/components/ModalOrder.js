/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";

export default function ModalOrder(props) {
  const [details, setDetails] = useState([]);
  const [address, setAdress] = useState("");
  let saleTax = parseInt(props.saleTax);

  const getDetails = async () => {
    const data_details = await axios.post(
      "https://stationery-store-tmdt.herokuapp.com/ct_dh/by_dh_id",
      { id_don_hang: props.idOrder }
    );
    setDetails(data_details.data);
  };
  const getAddressCustomer = async () => {
    const data = await axios.post("https://stationery-store-tmdt.herokuapp.com/ttkh/getAddress", {
      _id: props.customer.id_phuong,
    });
    setAdress(data.data);
  };
  const updateStatus = (event) => {
    axios.post("https://stationery-store-tmdt.herokuapp.com/don_hang/update_by_id", {
      _id: props.idOrder,
      id_ttdh: event,
    });
  };
  useEffect(() => {
    getDetails();
    getAddressCustomer();
  }, []);
  return (
    <div>
      <>
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <h2>Order Detail</h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="orderInfo" style={{fontSize: "25px"}}>
              <div>
                Order's ID:
                <b>{props.idOrder}</b>
              </div>
              <div>
                <b>Order date: </b>
                {new Date(props.dateIn).toLocaleDateString("en-GB")}
              </div>
              <div>
                <b>Delivery date:</b>
                {new Date(props.dateOut).toLocaleDateString("en-GB")}
              </div>
              <div>
                <b>Note: </b>
                {props.note}
              </div>
            </div>

            <div style={{ marginTop: "20px", marginBottom: "30px" }}>
              <table className="cusInfo">
                <tr>
                  <th className="table-title">Payment Info</th>
                  <th className="table-title">Shipping Address</th>
                </tr>
                <tr>
                  <td>
                    <div>
                      <b>{props.customer.ten_kh}</b>
                    </div>
                    <div>{props.customer.email}</div>
                    <div>{props.customer.sdt}</div>
                  </td>
                  <td>
                    <div>
                      <b>{props.customer.ten_kh}</b>
                    </div>
                    <div>{props.customer.dia_chi + ", " + address}</div>
                    <div>{props.customer.sdt}</div>
                  </td>
                </tr>
              </table>
            </div>
            <table className="table table-light">
              <thead>
                <tr>
                  <th scope="col" className="table-title">
                    Item
                  </th>
                  <th
                    scope="col"
                    className="table-title"
                    style={{ width: "70px", textAlign: "center" }}
                  >
                    Qty.
                  </th>
                  <th
                    scope="col"
                    className="table-title"
                    style={{ width: "100px", textAlign: "center" }}
                  >
                    Item Price
                  </th>
                  <th
                    scope="col"
                    className="table-title"
                    style={{ width: "105px", textAlign: "center" }}
                  >
                    Total Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {details.map((item) => (
                  <tr>
                    <td>{item.id_san_pham.ten_sp}</td>
                    <td style={{ textAlign: "end" }}>{item.so_luong}</td>
                    <td style={{ textAlign: "end" }}>${(item.gia_ban).toFixed(2)}</td>
                    <td style={{ textAlign: "end" }}>${(item.tong_gia).toFixed(2)}</td>
                    <td style={{ display: "none" }}>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="3" style={{ textAlign: "end" }}>
                    Shipping
                  </td>
                  <td style={{ textAlign: "end" }}>${props.ship.toFixed(2)}</td>
                </tr>
                <tr>
                  <td colspan="3" style={{ textAlign: "end" }}>
                    Discount price
                  </td>
                  <td style={{ textAlign: "end" }}>
                    ${saleTax.toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td colspan="3" style={{ textAlign: "end" }}>
                    <b>Total</b>
                  </td>
                  <td style={{ textAlign: "end" }}>
                    ${(props.total + props.ship).toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          </Modal.Body>
          <Modal.Footer>
            {props.status === "New" ? (
              <button
                className="btn-delete"
                onClick={() => updateStatus("61a2498320a54c9a7f3b02dd")}
              >
                Cancel
              </button>
            ) : null}
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}
