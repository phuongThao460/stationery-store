import React, { createRef, useEffect, useState } from 'react'
import axios from 'axios';
function AccountFunction() {
  const fullName = createRef();
  const phoneNumber = createRef();
  const streetName = createRef();
  const email = createRef();
  const password = createRef();
  const gender = createRef();

  const [idCities, setIdCities] = useState(0);
  const [idDis, setIdDis] = useState(0);
  const [idWard, setIdWard] = useState(0);

  const [lstCity, setLstCity] = useState([]);
  const [lstDistrict, setLstDistrict] = useState([]);
  const [lstWard, setLstWard] = useState([]);

  const getListCities = () => {
    axios.get("http://localhost:8000/thanh_pho/").then((response) => {
      setLstCity(response.data);
      console.log(response.data)
    });
  };
  const getListDistrict = async() => {
    await axios
      .post("http://localhost:8000/quan/by_thanh_pho", {
        id_thanh_pho: idCities,
      })
      .then((response) => {
        setLstDistrict(response.data);
        console.log(response.data)
      });
  };
  const getListWards = async() => {
    await axios
      .post("http://localhost:8000/phuong/by_quan", {
        id_quan: idDis,
      })
      .then((response) => {
        setLstWard(response.data);
        console.log(response.data)
      });
  };
  useEffect(() => {
    getListCities();
  },[])
  const changeCities = (event) => {
    setIdCities(event.target.value)
    getListDistrict();
  };
  const changeDistricts = (event) => {
    setIdDis(event.target.value)
    getListWards();
  };
  const changeWards = (event) => {
    setIdWard(event.target.value)
  };

  const createAccount = async () => {
    axios
      .post("http://localhost:8000/ttkh/create", {
        ten_kh: this.fullName.current.value,
        sdt: this.phoneNumber.current.value,
        dia_chi: this.streetName.current.value,
        email: this.email.current.value,
        diem_tich_luy: "0",
        gioi_tinh: this.gender.current.value,
        id_phuong: this.state.idWard,
      })
      .then((res) => {
        this.setState({ cusInfo: res.data });
        axios
          .post("http://localhost:8000/tkkh/create", {
            ten_dn: this.email.current.value,
            mat_khau: this.password.current.value,
            id_ttkh: this.state.cusInfo._id,
          })
          .then((res) => {
            console.log(res.data);
            window.localStorage.setItem("customer", JSON.stringify(res.data))
          });
      });
  };
  return (
    <div
      className="container-Signup"
      style={{ backgroundImage: `url('./images/Login-Form1.jpg')` }}
    >
      <h2 className="title-Signup">Create Account</h2>
      <div className="wrapper-signup">
        <form className="Info-form" onSubmit={createAccount}>
          <div>
            <h1 className="title-form">Account Information</h1>
          </div>
          <div className="GN">
            <div className="Gender" style={{ display: "flex" }}>
              <select
                className="Input-type"
                style={{ width: "80px", padding: "0px", marginRight: "10px" }}
              >
                <option value="0" ref={gender} className="select-option">
                  Mr.
                </option>
                <option value="1" ref={gender} className="select-option">
                  Mrs.
                </option>
              </select>

              <input
                className="Input-type"
                placeholder="Your full name"
                ref={fullName}
                type="text"
                autoFocus
              ></input>
            </div>
          </div>
          <div className="email">
            <input
              className="Input-type"
              placeholder="Email"
              type="email"
              ref={email}
            ></input>
          </div>
          <div className="password">
            <input
              className="Input-type"
              placeholder="Password"
              type="password"
              ref={password}
            ></input>
          </div>
          <div className="phone">
            <input
              type="number"
              pattern="[0-9]*"
              inputmode="numeric"
              className="Input-type"
              placeholder="Phone number"
              ref={phoneNumber}
            ></input>
          </div>
        </form>
        <form className="Address-form">
          <div>
            <h1 className="title-form">Address Information</h1>
          </div>
          <div className="cus-address">
            <input
              className="Input-type"
              placeholder="Street number and name"
              ref={streetName}
            ></input>
          </div>
          <div className="cus-city">
            <select
              className="Input-type"
              value={idCities}
              onChange={changeCities}
            >
              <option value="0" className="select-option">
                Select City...
              </option>
              {lstCity.map((item, index) => (
                <option key={index} value={item._id}>
                  {item.ten_thanh_pho}
                </option>
              ))}
            </select>
          </div>
          <div className="cus-district">
            <select
              className="Input-type"
              value={idDis}
              onChange={changeDistricts}
            >
              <option value="0" className="select-option">
                Select District...
              </option>
              {lstDistrict.map((item, index) => (
                <option key={index} value={item._id}>
                  {item.quan_huyen}
                </option>
              ))}
            </select>
          </div>
          <div className="cus-ward">
            <select
              className="Input-type"
              value={idWard}
              onChange={changeWards}
            >
              <option value="0" className="select-option">
                Select Ward...
              </option>
              {lstWard.map((item, index) => (
                <option key={index} value={item._id}>
                  {item.phuong_xa}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
      <div className="btn-signup">
        <button className="submit" type="submit">
          Create account
        </button>
      </div>
    </div>
  );
}

export default AccountFunction
