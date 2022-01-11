/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import ModalOrder from "../../../components/ModalOrder";

function OrderView() {
  const cusAccountInfo = JSON.parse(
    window.sessionStorage.getItem("customer-account")
  );
  const [orderList, setOrderList] = useState([]);
  const [orderDetail, setOrderDetail] = useState([]);
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

  useEffect(() => {
    axios
      .post("https://stationery-store-tmdt.herokuapp.com/ct_dh/by_ttkh", {
        id_ttkh: cusAccountInfo._id,
      })
      .then((res) => {
        setOrderList(res.data);
        setOrderDetail(res.data.ct_dh);
        //console.log(res.data[0].ct_dh.length);
      });
  }, []);
  useEffect(() => {
    if (orderDetail != null) {
      console.log(orderDetail);
    }
  }, []);
  return (
    <div className="main-right">
      <h2>Your Order</h2>
      <table className="table table-bordered">
        <thead>
          <tr style={{ fontSize: "20px" }}>
            <th scope="col" style={{ textAlign: "center" }}>
              ID
            </th>
            <th scope="col" style={{ textAlign: "center", width: "122px" }}>
              Date Order
            </th>
            <th scope="col" style={{ width: "420px" }}>
              Product
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              Total
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              Status
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((item, index) => (
            <tr key={index} style={{ textAlign: "center", fontSize: "18px" }}>
              <th scope="row" style={{ paddingTop: "7px" }}>{item._id.substr(14)}</th>
              <td style={{ paddingTop: "7px" }}>{new Date(item.ngay_dat).toLocaleDateString("en-GB")}</td>
              <td style={{ textAlign: "start", paddingTop: "7px"}}>
                {orderList[index].san_pham.length > 1
                  ? orderList[index].san_pham[0].ten_sp +
                    " ...and more than " +
                    (orderList[index].san_pham.length - 1) +
                    " products"
                  : orderList[index].san_pham[0].ten_sp}
              </td>
              <td style={{ textAlign: "end", paddingTop: "7px" }}>
                <span style={{ marginRight: "5px !important" }}>
                  ${item.tong_tien.toFixed(2)}
                </span>
              </td>
              <td style={{ paddingTop: "7px" }}>{orderList[0].ttdh[0].trang_thai}</td>
              <td style={{ paddingTop: "3px" }}>
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
          ))}
        </tbody>
      </table>
      {modalShow ? (
        <ModalOrder
          show={modalShow}
          idOrder={idOrder}
          onHide={() => setModalShow(false)}
          dateIn={dateIn}
          dateOut={dateOut}
          note={note}
          subtotal={subtotal}
          total={total}
          ship={ship}
          customer={cusAccountInfo}
          status={status}
          saleTax={saleTax}
        />
      ) : null}
    </div>
  );
}

export default OrderView;
