/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import LayoutCheckout from "./Layout/LayoutCheckout";
import { resetCart } from "../../redux/action/cartAction";
import Footer from "../../components/Footer";

function Checkout() {
  const cusAccountInfo = JSON.parse(
    window.sessionStorage.getItem("customer-account")
  );
  const customerInfo = JSON.parse(window.sessionStorage.getItem("customer"));
  const voucher = window.sessionStorage.getItem("id_voucher");
  const carts = JSON.parse(window.sessionStorage.getItem("cart"));
  let number = JSON.parse(window.sessionStorage.getItem("total"));
  var total = parseInt(number);

  const [orderID, setOrderID] = useState(null);
  const [address, setAdress] = useState("");
  const [shipping, setShipping] = useState(0);
  const [vouchers, setVouchers] = useState(0);
  const [newOrder, setNewOrder] = useState(null);
  let array = [];
  let newOrder2 = null;
  let navigate = useNavigate();
  const [details, setDetails] = useState([]);
  const dispatch = useDispatch();

  const getAddressCustomer = async () => {
    if (cusAccountInfo != null) {
      await axios
        .post("https://stationery-store-tmdt.herokuapp.com/ttkh/getAddress", {
          _id: cusAccountInfo.id_phuong,
        })
        .then((res) => setAdress(res.data));
    } else {
      await axios
        .post("https://stationery-store-tmdt.herokuapp.com/ttkh/getAddress", {
          _id: customerInfo.id_phuong,
        })
        .then((res) => setAdress(res.data));
    }
  };
  const getPercentVoucher = async () => {
    await axios
      .post("https://stationery-store-tmdt.herokuapp.com/voucher/", {
        _id: voucher,
      })
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
            "https://stationery-store-tmdt.herokuapp.com/don_hang/create_don_hang",
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
          newOrder2 = data.data;
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
            "https://stationery-store-tmdt.herokuapp.com/don_hang/create_don_hang",
            {
              ngay_dat: new Date().toLocaleDateString(),
              ngay_giao: new Date().toLocaleDateString(),
              id_ttkh: customerInfo._id,
              id_ttdh: "61a2492120a54c9a7f3b028a",
              ghi_chu: "None",
              tong_phu: total,
              tong_gia_giam_boi_voucher: (total * vouchers) / 100,
              id_phuong_thuc_thanh_toan: "61aec7868d6b567f56418a40",
              tong_tien: total - (total * vouchers) / 100,
              id_voucher: voucher,
              id_phuong: customerInfo.id_phuong,
              dia_chi: customerInfo.dia_chi,
            }
          );
          setShipping(data.data.phi_ship);
          setOrderID(data.data._id);
          setNewOrder(data.data);
          newOrder2 = data.data;
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
      window.sessionStorage.setItem(
        "total-1",
        total + newOrder.phi_ship - newOrder.tong_gia_giam_boi_voucher
      );
    } else {
      console.log("not order");
    }
  }, [newOrder]);

  const addCartDetails = () => {
    axios
      .post("https://stationery-store-tmdt.herokuapp.com/don_hang/save", {
        ngay_dat: new Date().toLocaleDateString(),
        ngay_giao: new Date().toLocaleDateString(),
        id_ttkh: newOrder.id_ttkh,
        id_ttdh: newOrder.id_ttdh,
        ghi_chu: newOrder.ghi_chu,
        tong_phu: newOrder.tong_phu,
        phi_ship: newOrder.phi_ship,
        tong_gia_giam_boi_voucher: newOrder.tong_gia_giam_boi_voucher,
        id_phuong_thuc_thanh_toan: newOrder.id_phuong_thuc_thanh_toan,
        tong_tien: newOrder.tong_tien,
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
            url: "https://stationery-store-tmdt.herokuapp.com/ct_dh/create",
            data: item,
          }).then(() => {
            dispatch(resetCart());
            navigate("/notificate");
          });
        });
      });
  };

  const handlePaypalCallback = () => {
    const sendData = {
      ngay_dat: newOrder2.ngay_dat,
      ngay_giao: newOrder2.ngay_giao,
      id_ttkh: newOrder2.id_ttkh,
      id_ttdh: newOrder2.id_ttdh,
      ghi_chu: newOrder2.ghi_chu,
      tong_phu: newOrder2.tong_phu,
      phi_ship: newOrder2.phi_ship,
      tong_gia_giam_boi_voucher: newOrder2.tong_gia_giam_boi_voucher,
      id_phuong_thuc_thanh_toan: "61aec7588d6b567f56418a16",
      tong_tien: newOrder2.tong_tien,
      id_voucher: newOrder2.id_voucher,
      id_phuong: newOrder2.id_phuong,
      dia_chi: newOrder2.dia_chi,
    };

    axios
      .post(
        "https://stationery-store-tmdt.herokuapp.com/don_hang/save",
        sendData
      )
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
            url: "https://stationery-store-tmdt.herokuapp.com/ct_dh/create",
            data: item,
          }).then(() => {
            dispatch(resetCart());
            navigate("/notificate");
          });
        });
      });
  };
  if (customerInfo === null) {
    return <h2>Loading...</h2>;
  } else {
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
        <Footer/>
      </>
    );
  }
}

export default Checkout;
