/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";

function EditAccount() {
  const cusAccountInfo = JSON.parse(
    window.sessionStorage.getItem("customer-account")
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setName(cusAccountInfo.ten_kh);
    setEmail(cusAccountInfo.email);
    setPhone(cusAccountInfo.sdt);
  }, []);
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePhone = (e) => {
    setPhone(e.target.value);
  };
  const updateProfile = () => {
    axios
      .post("https://stationery-store-tmdt.herokuapp.com/ttkh/update", {
        _id: cusAccountInfo._id,
        ten_kh: name,
        email: email,
        sdt: phone,
      })
      .then(() => {
        axios
          .post("https://stationery-store-tmdt.herokuapp.com/ttkh", {
            ttkh_id: cusAccountInfo._id,
          })
          .then((res) =>
            window.sessionStorage.setItem("customer-account", JSON.stringify(res.data))
          );
      });
  };
  return (
    <>
      <div className="main-right">
        <h2 className="main-right-title">My Account</h2>
        <div className="form-wrapper">
          <table>
            <tr className="name">
              <td className="td-label">Full name</td>
              <td className="td-input">
                <input
                  className="text-field"
                  type="text"
                  value={name}
                  onChange={changeName}
                />
              </td>
            </tr>

            <tr className="email">
              <td className="td-label">Email</td>
              <td className="td-input">
                <input
                  className="text-field"
                  type="email"
                  value={email}
                  onChange={changeEmail}
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
                  onChange={changePhone}
                />
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
    </>
  );
}

export default EditAccount;
