/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import EditStaffLayout from "./Layout/EditStaffLayout";
function EditStaff(props) {
  const idStaff = window.location.pathname.substring(7);
  const [nameStaff, setNameStaf] = useState("");
  const [tele, setTele] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  let navigate = useNavigate();

  const nameHandler = (e) => {
    setNameStaf(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passHandler = (e) => {
    setPass(e.target.value);
  };
  const teleHandler = (e) => {
    setTele(e.target.value);
  };
  const addressHandler = (e) => {
    setAddress(e.target.value);
  };
  const roleHandler = (e) => {
    setRole(e.target.value);
  };
  const genderHandler = (e) => {
    setGender(e.target.value);
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  useEffect(() => {
    
    axios
      .post("https://stationery-store-tmdt.herokuapp.com/nhan_vien/", {
        _id: idStaff,
      })
      .then((res) => {
        console.log(res.data.gioi_tinh);
        setNameStaf(res.data.ten_nv);
        setPass(res.data.password);
        setRole(res.data.role);
        setGender(res.data.gioi_tinh);
        setAddress(res.data.dia_chi);
        setEmail(res.data.email);
        setTele(res.data.sdt);
        setStatus(res.data.tinh_trang);
      });
  }, []);
  const editStaff = () => {
    axios
      .post("https://stationery-store-tmdt.herokuapp.com/nhan_vien/update", {
        email: email,
        sdt: tele,
        dia_chi: address,
        ten_nv: nameStaff,
        password: pass,
        gioi_tinh: gender,
        role: role,
        tinh_trang: status,
      })
      .then(() => {
        alert("add successfull");
        navigate("/staff");
      });
  };
  return (
    <>
      <EditStaffLayout
        nameStaff={nameStaff}
        email={email}
        tele={tele}
        address={address}
        pass={pass}
        gender={gender}
        role={role}
        status={status}
        nameHandler={nameHandler}
        emailHandler={emailHandler}
        passHandler={passHandler}
        addressHandler={addressHandler}
        teleHandler={teleHandler}
        genderHandler={genderHandler}
        roleHandler={roleHandler}
        statusHandler={statusHandler}
        editStaff={() => editStaff()}
      />
    </>
  );
}

export default EditStaff;
