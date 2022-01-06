/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

function Profile() {
  const employeeInfo = JSON.parse(
    window.localStorage.getItem("employee-account")
  );
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sexual, setSexual] = useState(false);
  const [address, setAddress] = useState("");
  const [role, setRole] = useState(0);
  const [change, setChange] = useState(false);

  useEffect(() => {
    setId(employeeInfo._id);
    setName(employeeInfo.ten_nv);
    setPhone(employeeInfo.sdt);
    setEmail(employeeInfo.email);
    setPassword(employeeInfo.password);
    setSexual(employeeInfo.gioi_tinh);
    setAddress(employeeInfo.dia_chi);
    setRole(employeeInfo.role);
  }, []);
  const changeName = (e) => {
    setName(e.target.value);
  };
  function changeEmail(e) {
    setEmail(e.target.value);
  }
  // const changeEmail = (e) => {
  //   setEmail(e.target.value);
  // };
  const changePhone = (e) => {
    setPhone(e.target.value);
  };
  const changeAdress = (e) => {
    setAddress(e.target.value);
  };
  const changeSexual = (e) => {
    setSexual(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const updateProfile = () => {
    axios
      .post("https://stationery-store-tmdt.herokuapp.com/nhan_vien/update", {
        _id: id,
        email: email,
        sdt: phone,
        dia_chi: address,
        ten_nv: name,
        password: password,
        gioi_tinh: sexual,
      })
      .then((res) => {
        window.localStorage.setItem(
          "employee-account",
          JSON.stringify(res.data)
        );
        console.log(employeeInfo._id);
        alert("Successfuly Update");
      });
  };
  return (
    <div>
      <h1>Profile</h1>
      <div className="form-wrapper">
        <table>
          <tr className="name">
            <td className="td-label">Full name</td>
            <td className="td-input">
              <span style={{ fontSize: "20px" }}>{name} / {role === 0 ? "Admin" : "Staff"}</span>
            </td>
          </tr>
          <tr className="gender">
            <td className="td-label"> Gender</td>
            <td>
              {sexual ? (
                <div class="form-group" style={{ display: "flex" }}>
                  <div className="col-md-5" style={{ display: "flex" }}>
                    <input
                      type="radio"
                      className="form-check-input"
                      id="radio-9"
                      style={{ width: "19px", height: "19px" }}
                      name="editContact,previousNameBoolean"
                      value={sexual.toString()}
                      checked={sexual === true}
                      onChange={changeSexual}
                    />
                    <label
                      className="control-label"
                      htmlFor="radio-9"
                      style={{
                        marginLeft: "3px",
                        marginRight: "20px",
                        marginTop: "3px",
                      }}
                    >
                      Female
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      id="radio-10"
                      style={{
                        width: "19px",
                        height: "19px",
                        marginLeft: "25px",
                      }}
                      name="editContact,previousNameBoolean"
                      value={!sexual.toString()}
                      onChange={changeSexual}
                    />
                    <label
                      className="control-label"
                      htmlFor="radio-10"
                      style={{
                        marginLeft: "3px",
                        marginRight: "20px",
                        marginTop: "3px",
                      }}
                    >
                      Male
                    </label>
                  </div>
                </div>
              ) : (
                <div class="form-group" style={{ display: "flex" }}>
                  <div className="col-md-5" style={{ display: "flex" }}>
                    <input
                      type="radio"
                      className="form-check-input"
                      id="radio-9"
                      style={{
                        width: "19px",
                        height: "19px",
                      }}
                      name="editContact,previousNameBoolean"
                      value={!sexual.toString()}
                      onChange={changeSexual}
                    />
                    <label
                      className="control-label"
                      htmlFor="radio-9"
                      style={{
                        marginLeft: "3px",
                        marginRight: "20px",
                        marginTop: "3px",
                      }}
                    >
                      Female
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      id="radio-10"
                      style={{
                        width: "19px",
                        height: "19px",
                        marginLeft: "25px",
                      }}
                      name="editContact,previousNameBoolean"
                      value={sexual}
                      checked={sexual === false}
                      onChange={changeSexual}
                    />
                    <label
                      className="control-label"
                      htmlFor="radio-10"
                      style={{
                        marginLeft: "3px",
                        marginRight: "20px",
                        marginTop: "3px",
                      }}
                    >
                      Male
                    </label>
                  </div>
                </div>
              )}
            </td>
          </tr>
          {/* <tr className="role">
            <td className="td-label">Role</td>
            <td className="td-input" style={{ fontSize: "20px" }}>
              {role === 0 ? "Admin" : "Employee"}
            </td>
          </tr> */}
          <tr className="email-profile">
            <td className="td-label">Email</td>
            <td className="td-input">
              <input
                className="text-field"
                type="email"
                value={email}
                onChange={(e) => changeEmail(e)}
              />
            </td>
          </tr>
          <tr className="phone">
            <td className="td-label">Phone number</td>
            <td className="td-input">
              <input
                className="text-field"
                type="number"
                value={phone}
                onChange={(e) => changePhone(e)}
              />
            </td>
          </tr>
          <tr className="address">
            <td className="td-label">Address</td>
            <td className="td-input">
              <input
                className="text-field"
                type="text"
                value={address}
                onChange={changeAdress}
              />
            </td>
          </tr>
          <tr className="password-change">
            <td></td>
            <td>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Change"
                  id="defaultCheck1"
                  onChange={() => setChange(true)}
                  checked={change}
                />
                <label class="form-check-label" for="defaultCheck1">
                  Change password
                </label>
              </div>
              {change ? (
                <div className="td-input">
                  <input
                    type="password"
                    className="text-field"
                    value={password}
                    onChange={changePassword}
                  />
                </div>
              ) : null}
            </td>
          </tr>
        </table>
        <div className="btn-container">
          <button className="btn-edit" onClick={() => updateProfile()}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
