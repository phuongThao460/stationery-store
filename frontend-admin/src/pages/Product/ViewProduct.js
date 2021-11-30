/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState } from "react";

function ViewProduct() {
  const idItem = window.location.pathname.substring(14);
  let [responseData, setResponseData] = React.useState(null);
  let [type, setType] = useState("");
  const [supplier, setSupplier] = useState("");
  const [material, setMaterial] = useState("")
  const [color, setColor] = useState([])
  const getData = () => {
    const data = axios.post("http://localhost:8000/san_pham/", {_id: idItem})
    setResponseData(data.data)
    setType(data.data.id_loai_sp.ten_loai_sp)
    setColor(data.data.mau_sac)
    setSupplier(data.data.id_nha_cc.ten_nha_cc)
    setMaterial(data.data.id_chat_lieu.ten_chat_lieu)
  }
  React.useEffect(() => {
    getData()
  }, []);
  if (!responseData) return null;
  return (
    <>
      <div>
        <p>id: {responseData._id}</p>
        <p>name: {responseData.ten_sp}</p>
        <p>amount: {responseData.so_luong}</p>
        <p>
          date: {new Date(responseData.ngay_nhap).toLocaleDateString()}
        </p>
        <p>description: {responseData.mo_ta}</p>
        <p>im price: {responseData.don_gia_nhap}</p>
        <p>ex-price: {responseData.don_gia_xuat}</p>
        <p>type: {type} </p>
        <p>
          color:
          {color.map((item) => (
            <span className="bagde" style={{backgroundColor: item}} />
          ))}
        </p>
        <p>supplier: {supplier}</p>
        <p>material: {material}</p>
        <p>rate: {responseData.ti_le_danh_gia}</p>
      </div>
    </>
  );
}

export default ViewProduct;
