/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";

function Checkout() {
  const customerInfo = JSON.parse(window.localStorage.getItem("customer"));

  const [orderID, setOrderID] = useState(null);

  useEffect(() => {
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
            tong_phu: 0,
            phi_ship: 0,
            tong_gia_giam_boi_voucher: 0,
            id_voucher: "61accc14a12494fcd816d5a2",
            id_phuong_thuc_thanh_toan: "61aec7868d6b567f56418a40",
            tong_tien: "95",
          }
        );

        setOrderID(data.data._id);
      } catch (error) {
        console.log(error);
      }
    };

    createOrder();
  }, []);
  return <div>{console.log(orderID)}</div>;
}

export default Checkout;
