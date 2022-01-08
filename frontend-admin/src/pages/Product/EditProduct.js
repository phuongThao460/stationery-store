/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import EditProductLayout from "./Layout/EditProductLayout";

function EditProduct() {
  let navigate = useNavigate();
  const idItem = window.location.pathname.substring(15);
  let [responseData, setResponseData] = React.useState(null);
  const [type, setType] = useState([]);
  const [supplier, setSupplier] = useState([]);
  const [material, setMaterial] = useState([]);
  const [color, setColor] = useState([]);
  const [classify, setClassify] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [importPrice, setImportPrice] = useState(0);
  const [exportPrice, setExportPrice] = useState(0);
  const [basicPrice, setBasicPrice] = useState(0);
  const [desc, setDesc] = useState("");
  const [idType, setIdType] = useState("");
  const [idSupp, setIdSupp] = useState("");
  const [idMate, setIdMate] = useState("");
  const [idClassi, setIdClassi] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const amountHandler = (e) => {
    setAmount(e.target.value);
  };
  const dateHandler = (e) => {
    setDate(e.target.value);
  };
  const importHandler = (e) => {
    setImportPrice(e.target.value);
  };
  const exportHandler = (e) => {
    setExportPrice(e.target.value);
  };
  const basicHandler = (e) => {
    setBasicPrice(e.target.value);
  };
  const descHandler = (e) => {
    setDesc(e.target.value);
  };
  const changeId = (e) => {
    setIdType(e.target.value);
  };
  const changeIdSupp = (e) => {
    setIdSupp(e.target.value);
  };
  const changeIdMate = (e) => {
    setIdMate(e.target.value);
  };
  const changeIdClassi = (e) => {
    setIdClassi(e.target.value);
  };
  const getData = async () => {
    const data = await axios.post(
      "https://stationery-store-tmdt.herokuapp.com/san_pham/",
      {
        _id: idItem,
      }
    );
    setResponseData(data.data);
    setName(data.data.ten_sp);
    setAmount(data.data.so_luong);
    setDate(data.data.ngay_nhap);
    setExportPrice(data.data.gia_ban_hien_tai);
    setImportPrice(data.data.don_gia_nhap);
    setBasicPrice(data.data.gia_ban_goc);
    setIdType(data.data.id_loai_sp._id);
    setColor(data.data.mau_sac);
    setIdSupp(data.data.id_nha_cc._id);
    setIdMate(data.data.id_chat_lieu._id);
    setIdClassi(data.data.id_phan_loai._id);
    setDesc(data.data.mo_ta);
  };
  const updateData = () => {
    axios
      .post(
        "https://stationery-store-tmdt.herokuapp.com/san_pham/update_san_pham",
        {
          _id: responseData._id,
          ten_sp: name,
          so_luong: amount,
          ngay_nhap: date,
          don_gia_nhap: importPrice,
          gia_ban_goc: basicPrice,
          gia_ban_hien_tai: exportPrice,
          id_nha_cc: idSupp
        }
      )
      .then((res) => {
        alert("Successfuly Update");
        navigate("/dashboard");
      });
  };
  const getSupplier = async () => {
    await axios
      .get("https://stationery-store-tmdt.herokuapp.com/nha_cc/")
      .then((res) => {
        setSupplier(res.data);
        console.log(res.data);
      });
  };
  const getType = async () => {
    axios
      .get("https://stationery-store-tmdt.herokuapp.com/loai_sp/")
      .then((res) => {
        setType(res.data);
      });
  };
  useEffect(() => {
    getSupplier();
    getType();
    axios
      .get("https://stationery-store-tmdt.herokuapp.com/chat_lieu/")
      .then((res) => {
        setMaterial(res.data);
      });
    axios
      .get("https://stationery-store-tmdt.herokuapp.com/phan_loai/")
      .then((res) => {
        setClassify(res.data);
      });
  }, []);
  useEffect(() => {
    getData();
  }, []);
  if (!responseData) return null;

  return (
    <>
      <EditProductLayout
        name={name}
        amount={amount}
        importPrice={importPrice}
        exportPrice={exportPrice}
        basicPrice={basicPrice}
        date={date}
        color={color}
        desc={desc}
        supplier={supplier}
        type={type}
        material={material}
        classify={classify}
        idSupp={idSupp}
        idType={idType}
        idMate={idMate}
        idClassi={idClassi}
        updateData={updateData}
        nameHandler={nameHandler}
        descHandler={descHandler}
        importHandler={importHandler}
        exportHandler={exportHandler}
        basicHandler={basicHandler}
        amountHandler={amountHandler}
        dateHandler={dateHandler}
        changeIdSupp={changeIdSupp}
        changeId={changeId}
        changeIdMate={changeIdMate}
        changeIdClassi={changeIdClassi}
      />
    </>
  );
}

export default EditProduct;
