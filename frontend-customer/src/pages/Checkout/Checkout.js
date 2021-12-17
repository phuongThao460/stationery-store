/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LayoutCheckout from "./Layout/LayoutCheckout";

function Checkout() {
  const cusAccountInfo = JSON.parse(
    window.localStorage.getItem("customer-account")
  );
  const customerInfo = JSON.parse(window.localStorage.getItem("customer"));
  const voucher = window.localStorage.getItem("id_voucher");
  const carts = JSON.parse(window.localStorage.getItem("cart"));
  let number = JSON.parse(window.localStorage.getItem("total"));
  var total = parseInt(number);

  const [orderID, setOrderID] = useState(null);
  const [address, setAdress] = useState("");
  const [shipping, setShipping] = useState(0);
  const [vouchers, setVouchers] = useState(0);
  const [newOrder, setNewOrder] = useState(null);
  let array = [];
  let navigate = useNavigate();
  const [details, setDetails] = useState([]);
  
  const getAddressCustomer = async () => {
    if (cusAccountInfo != null) {
      await axios
        .post("http://localhost:8000/ttkh/getAddress", {
          _id: cusAccountInfo.id_phuong,
        })
        .then((res) => setAdress(res.data));
    } else {
      await axios
        .post("http://localhost:8000/ttkh/getAddress", {
          _id: customerInfo.id_phuong,
        })
        .then((res) => setAdress(res.data));
    }
  };
  const getPercentVoucher = async () => {
    await axios
      .post("http://localhost:8000/voucher/", { _id: voucher })
      .then((res) => {
        setVouchers(res.data.phan_tram_giam);
      });
  };
  useEffect(() => {
    getAddressCustomer();
    if (voucher != null) {
      getPercentVoucher();
    }
  }, [voucher]);

  useEffect(() => {
    console.log(vouchers);
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
              tong_phu: total,
              tong_gia_giam_boi_voucher: (total * vouchers) / 100,
              id_phuong_thuc_thanh_toan: "61aec7868d6b567f56418a40",
              tong_tien: total - (total * vouchers) / 100,
              id_voucher: voucher,
              id_phuong: cusAccountInfo.id_phuong,
              dia_chi: cusAccountInfo.dia_chi,
            }
          );
          setShipping(data.data.phi_ship);
          setOrderID(data.data._id);
          setNewOrder(data.data);

        } catch (error) {
          console.log(error);
        }
      };
      createOrder();
    }
    if (customerInfo != null) {
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
              tong_phu: total,
              tong_gia_giam_boi_voucher: 0,
              id_phuong_thuc_thanh_toan: "61aec7868d6b567f56418a40",
              tong_tien: total,
              id_phuong: customerInfo.id_phuong,
              dia_chi: customerInfo.dia_chi,
            }
          );
          setShipping(data.data.phi_ship);
          setOrderID(data.data._id);
          setNewOrder(data.data);
        } catch (error) {
          console.log(error);
        }
      };
      createOrder();
    }
  }, [vouchers]);

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
      setDetails(array);
    }
  }, [orderID]); //nhan su thay doi cua state o useEffect tren

  useEffect(() => {
    if (newOrder != null) {
      console.log(" order: " + newOrder.ngay_dat);
      //console.log(" order: " + JSON.parse(newOrder));
    } else {
      console.log("not order");
    }
  }, [newOrder]);


  const addCartDetails = () => {
    axios
      .post("http://localhost:8000/don_hang/save", {
        ngay_dat: newOrder.ngay_dat,
        ngay_giao: newOrder.ngay_giao,
        id_ttkh: newOrder.id_ttkh,
        id_ttdh: newOrder.id_ttdh,
        ghi_chu: newOrder.ghi_chu,
        tong_phu: newOrder.tong_phu,
        phi_ship: newOrder.phi_ship,
        tong_gia_giam_boi_voucher: newOrder.tong_gia_giam_boi_voucher,
        id_phuong_thuc_thanh_toan: newOrder.id_phuong_thuc_thanh_toan,
        tong_tien: newOrder.tong_tien + newOrder.phi_ship,
        id_voucher: newOrder.id_voucher,
        id_phuong: newOrder.id_phuong,
        dia_chi: newOrder.dia_chi,
      })
      .then((res) => {
        console.log(res.data);
        carts.forEach((element) => {
          array.push({
            so_luong: element.count,
            gia_ban: element.gia_ban_hien_tai,
            id_san_pham: element.product,
            id_don_hang: res.data._id,
            tong_gia: element.count * element.gia_ban_hien_tai,
          });
        });
        setDetails(array);
        array.forEach((item) => {
          axios({
            method: "post",
            url: "http://localhost:8000/ct_dh/create",
            data: item,
          }).then(() => {
            navigate("/notificate");
            window.localStorage.removeItem("cart");
            window.localStorage.removeItem("total");
            window.localStorage.removeItem("customer");
            window.localStorage.removeItem("id_voucher");
            window.location.reload();
          });
        });
      });
  };

  const handlePaypalCallback= () => {
    const sendData = {
      ngay_dat: newOrder.ngay_dat,
      ngay_giao: newOrder.ngay_giao,
      id_ttkh: newOrder.id_ttkh,
      id_ttdh: newOrder.id_ttdh,
      ghi_chu: newOrder.ghi_chu,
      tong_phu: newOrder.tong_phu,
      phi_ship: newOrder.phi_ship,
      tong_gia_giam_boi_voucher: newOrder.tong_gia_giam_boi_voucher,
      id_phuong_thuc_thanh_toan: "61a2494520a54c9a7f3b02a9",
      tong_tien: newOrder.tong_tien + newOrder.phi_ship,
      id_voucher: newOrder.id_voucher,
      id_phuong: newOrder.id_phuong,
      dia_chi: newOrder.dia_chi,
    }
    console.log(sendData);
    axios
      .post("http://localhost:8000/don_hang/save", sendData)
      .then((res) => {
        console.log(res.data);
        carts.forEach((element) => {
          array.push({
            so_luong: element.count,
            gia_ban: element.gia_ban_hien_tai,
            id_san_pham: element.product,
            id_don_hang: res.data._id,
            tong_gia: element.count * element.gia_ban_hien_tai,
          });
        });
        setDetails(array);
        array.forEach((item) => {
          axios({
            method: "post",
            url: "http://localhost:8000/ct_dh/create",
            data: item,
          }).then(() => {
            navigate("/notificate");
            // window.localStorage.removeItem("cart");
            // window.localStorage.removeItem("total");
            // window.localStorage.removeItem("customer");
            // window.localStorage.removeItem("id_voucher");
            // window.location.reload();
          });
        });
      });
  };
  return (
    <>
      <LayoutCheckout
        cusAccountInfo={cusAccountInfo}
        customerInfo={customerInfo}
        shipping={shipping}
        address={address}
        carts={carts}
        vouchers={vouchers}
        total={total}
        addCartDetails={addCartDetails}
        handlePaypalCallback={handlePaypalCallback}
      />
    </>
  );
}

export default Checkout;
