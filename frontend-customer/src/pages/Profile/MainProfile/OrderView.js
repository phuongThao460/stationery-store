/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function OrderView() {
  const [toggleState, setToggleState] = useState(1);
  const [orderList, setOrderList] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [idOrder, setIdOrde] = useState("");
  const [dateIn, setDateIn] = useState("");
  const [dateOut, setDateOut] = useState("");
  const [customer, setCustomer] = useState(null);
  const [note, setNote] = useState("");
  const [total, setTotal] = useState("");
  const [subtotal, setSubtotal] = useState("");
  const [ship, setShip] = useState("");
  const [status, setStatus] = useState("");
  const [saleTax, setSaleTax] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="main-right">
      <h2>Your Order</h2>
      <table className="table table-bordered">
        <thead>
          <tr style={{fontSize: "30px" }}>
            <th scope="col" style={{ textAlign: "center" }}>ID</th>
            <th scope="col" style={{textAlign: "center", width: "122px"}}>Date Order</th>
            <th scope="col" style={{width: "420px"}}>Product</th>
            <th scope="col" style={{ textAlign: "center" }}>Total</th>
            <th scope="col" style={{ textAlign: "center" }}>Status</th>
            <th scope="col" style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((item, index) =>
            item.id_ttdh.trang_thai === "New" ? (
              <tr key={index} style={{ textAlign: "center", fontSize: "25px" }}>
                <th scope="row">{item._id.substr(14)}</th>
                <td>{new Date(item.ngay_dat).toLocaleDateString("en-GB")}</td>
                <td style={{ textAlign: "end" }}>
                  ${item.tong_tien.toFixed(2)}
                </td>
                <td>
                  <button
                    className="btn-view"
                    onClick={() => {
                      setModalShow(true);
                      setIdOrde(item._id);
                      setDateIn(item.ngay_dat);
                      setDateOut(item.ngay_giao);
                      setCustomer(item.id_ttkh);
                      setNote(item.ghi_chu);
                      setSubtotal(item.tong_phu);
                      setTotal(item.tong_tien);
                      setShip(item.phi_ship);
                      setStatus(item.id_ttdh.trang_thai);
                      setSaleTax(item.tong_gia_giam_boi_voucher);
                    }}
                  >
                    View
                  </button>
                </td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
    </div>
  );
}

export default OrderView;
