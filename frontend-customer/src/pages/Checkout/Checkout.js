/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
function Checkout() {
  const cusAccountInfo = JSON.parse(
    window.localStorage.getItem("customer-account")
  );
  const customerInfo = JSON.parse(window.localStorage.getItem("customer"));
  const carts = JSON.parse(window.localStorage.getItem("cart"));
  const total = window.localStorage.getItem("total");
  const [orderID, setOrderID] = useState(null);
  const [address, setAdress] = useState("");
  let array = [];
  let navigate = useNavigate();
  const [details, setDetails] = useState([]);
  const getAddressCustomer = async () => {
    const data = await axios.post("http://localhost:8000/ttkh/getAddress", {
      _id: customerInfo.id_phuong,
    });
    setAdress(data.data);
  };

  useEffect(() => {
    getAddressCustomer();
    if (cusAccountInfo != null) {
      const createOrder = async () => {
        try {
          const data = await axios.post(
            "http://localhost:8000/don_hang/create_don_hang",
            {
              ngay_dat: new Date().toLocaleDateString(),
              ngay_giao: new Date().toLocaleDateString(),
              id_ttkh: cusAccountInfo._id,
              id_ttdh: "61a2492120a54c9a7f3b028a",
              ghi_chu: "None",
              tong_gia_giam_boi_voucher: 0,
              id_phuong_thuc_thanh_toan: "61aec7868d6b567f56418a40",
              tong_tien: total,
              id_phuong: customerInfo.id_phuong,
              dia_chi: customerInfo.dia_chi,
            }
          );

          setOrderID(data.data._id);
        } catch (error) {
          console.log(error);
        }
      };
      createOrder();
    } else {
      const createOrder = async () => {
        try {
          const data = await axios.post(
            "http://localhost:8000/don_hang/create_don_hang",
            {
              ngay_dat: new Date().toLocaleDateString(),
              ngay_giao: new Date().toLocaleDateString(),
              id_ttkh: customerInfo._id,
              id_ttdh: "61a2492120a54c9a7f3b028a",
              ghi_chu: "None",
              tong_gia_giam_boi_voucher: 0,
              id_phuong_thuc_thanh_toan: "61aec7868d6b567f56418a40",
              tong_tien: total,
              id_phuong: customerInfo.id_phuong,
              dia_chi: customerInfo.dia_chi,
            }
          );

          setOrderID(data.data._id);
        } catch (error) {
          console.log(error);
        }
      };
      createOrder();
    }
  }, []);

  useEffect(() => {
    if (orderID != null) {
      carts.forEach((element) => {
        array.push({
          so_luong: element.count,
          gia_ban: element.gia_ban_hien_tai,
          id_san_pham: element.product,
          id_don_hang: orderID,
          tong_gia: element.count * element.gia_ban_hien_tai,
        });
      });
      console.log(array);
      setDetails(array);
    }
  }, [orderID]); //nhan su thay doi cua state o useEffect tren

  useEffect(() => {
    if (array !== []) {
    }
  }, [details]);
  const addCartDetails = () => {
    details.forEach((item) => {
      axios({
        method: "post",
        url: "http://localhost:8000/ct_dh/create",
        data: item,
      }).then(() => {
        window.localStorage.removeItem("cart");
        window.localStorage.removeItem("total");
        window.localStorage.removeItem("customer");
        window.location.reload();
        navigate("/notificate");
      });
    });
  };
  return (
    <div className="container-checkout">
      <div className="wrapper-checkout">
        <h1 className="Title-checkout">Checkout</h1>
        <div className="bottom-checkout">
          <div className="Info-checkout">
            <div
              className="cusInfo"
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <div style={{ display: "block" }}>
                <h1 className="Title-Info">Contact info</h1>
                <div className="body-info">
                  <p>{customerInfo.ten_kh}</p>
                </div>
                <div className="body-info">
                  <p>{customerInfo.sdt}</p>
                </div>
                <div className="body-info">
                  <p>{customerInfo.email}</p>
                </div>
              </div>
              <div className="Payment" style={{ padding: "0px" }}>
                <h1 className="Title-Info">Payment Method</h1>
                <div className="body-info">
                  <p>Payment on delivery</p>
                </div>
              </div>
            </div>
            <div className="Shipping">
              <h1 className="Title-Info">Shipping Address</h1>
              <div className="address body-info">
                <p>{customerInfo.dia_chi + ", " + address}</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="Summary-checkout" style={{ border: "0" }}>
              <div className="summary-container-checkout">
                <h1 className="SummaryTitle-checkout">Order Details</h1>
                <div
                  className="SummaryItem-checkout"
                  style={{ display: "block" }}
                >
                  {carts.map((item) => (
                    <div className="cart-item">
                      <div style={{ paddingBottom: "20px" }}>
                        <p className="body-title">{item.ten_sp}</p>
                        <p className="body-title">Amount: {item.count}</p>
                      </div>
                      <b style={{ marginLeft: "25px" }}>
                        ${item.gia_ban_hien_tai}
                      </b>
                    </div>
                  ))}
                </div>
                <div className="summary-price">
                  <div className="SummaryItem-checkout">
                    <span className="SummaryItemText-checkout">Subtotal</span>
                    <span className="SummaryItemPrice-checkout">5 items</span>
                  </div>
                  <div className="SummaryItem-checkout">
                    <span className="SummaryItemText-checkout">
                      Shipping Fee
                    </span>
                    <span className="SummaryItemPrice-checkout">0</span>
                  </div>
                  <div className="SummaryItem-checkout">
                    <span className="SummaryItemText-checkout">
                      Discount Voucher
                    </span>
                    <span className="SummaryItemPrice-checkout">0</span>
                  </div>
                  <div className="SummaryItem-total-checkout">
                    <b className="SummaryItemText-checkout">Total</b>
                    <b className="SummaryItemPrice-checkout">
                      {window.localStorage.getItem("total")}
                    </b>
                  </div>
                </div>
                <Link to="/checkout">
                  <button
                    className="Button-checkout-checkout"
                    onClick={addCartDetails}
                  >
                    Confirm
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
